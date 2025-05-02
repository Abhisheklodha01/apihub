import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient({})
export const getDBDataDetails = async (req, res) => {
    try {
        const result = await prisma.$queryRawUnsafe(`
            SELECT 
              table_name,
              (xpath('/row/count/text()', xml_count))[1]::text::int AS row_count
            FROM (
              SELECT 
                table_name,
                query_to_xml('SELECT COUNT(*) AS count FROM ' || quote_ident(table_name), false, true, '') AS xml_count
              FROM information_schema.tables
              WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
            ) AS counts;
          `);
          
        return res.status(200).json({
            success: true,
            message: "DB details fetched successfully",
            result
        })
          
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            success: false,
            message: "Server error please try again after some time"
        })
    }
}