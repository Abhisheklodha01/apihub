import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({})

export const addBookController = async (req, res) => {
    const {title, description, author} = req.body
    const imageUrl = req.imageUrl
    try {
        if (!title || !description || !author) {
            return res.status(400).json({
                success: false,
                message: "title and description required"
            })
        }
        
        const book = await prisma.books.create({
            data: {
                title,
                author,
                description,
                imageUrl
                
            }
        })

        return res.status(200).json({
            success: true,
            message: "Book uploaded successfully",
           book
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error failed to upload image"
        })
    }
}

export const getBooksController = async (req, res) => {
    try {
        const books = await prisma.books.findMany({
           orderBy: {
             createdAt: 'desc'
           }
        })
        return res.status(200).json({
            success: true,
            message: "Images find successfully",
            books
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error unable to find images"
        })
    }
}

export const getBookByIdController = async (req, res) => {
    const bookId = req.params.bookId
    try {
        const book = await prisma.books.findUnique({
            where: {
                id: Number(bookId)
            }
        })
        return res.status(200).json({
            success: true,
            message: "Image find successfully",
            book
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error unable to find image"
        })
    }
}