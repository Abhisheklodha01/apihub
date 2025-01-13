import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({})

export const uploadImageController = async (req, res) => {
    const {name, description} = req.body
    const imageUrl = req.imageUrl
    try {
        if (!name || !description) {
            return res.status(400).json({
                success: false,
                message: "Image name and description required"
            })
        }
        
        const image = await prisma.image.create({
            data: {
                name: name,
                description: description,
                url: imageUrl
            }
        })

        return res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
            image
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error failed to upload image"
        })
    }
}