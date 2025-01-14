import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({})

export const addDogsController = async (req, res) => {
    const {name, breed, location, description, imageUrl} = req.body
    try {
        const dog = await prisma.dog.create({
            data: {
                name,
                breed,
                location,
                description,
                imageUrl
            }
        })

        return res.status(200).json({
            success: true,
            message: "Dog added successfully",
            dog
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error failed to add dog"
        })
    }
}

export const getDogsController = async (req, res) => {
    try {
        const dogs = await prisma.dog.findMany()
        return res.status(200).json({
            success: true,
            message: "Dogs fetched successfully",
            dogs
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error failed to fetched dogs"
        })
    }
}


export const getDogByIdController = async (req, res) => {
    const dogId = req.params.dogId
    try {
        const dog = await prisma.dog.findUnique({
            where: {
                id: Number(dogId)
            }
        })
        return res.status(200).json({
            success: true,
            message: "Dogs fetched successfully",
            dog
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error failed to fetched dog"
        })
    }
}