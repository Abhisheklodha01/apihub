import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});


export const uploadYoutubeVideoController = async(req,res) => {
    const {title,description,url} = req.body
    try{
        const video = await prisma.youtubeVideo.create({
            data: {
                title:title,
                description:description,
                url:url
            }
        })
        return res.status(200).json({
            success: true,
            message: "Video uploaded successfully",
            video
        })

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Server error while uploading video",
            error
        })
    }
}


export const getYoutubeVideosController = async(req,res) => {
    try{
        const videos = await prisma.youtubeVideo.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
        return res.status(200).json({
            success: true,
            message: "Videos fetched successfully",
            videos
        })

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Server error while fetching videos",
            error
        })
    }
}


export const getYoutubeVideoByIdController = async(req,res) => {
    const videoId = parseInt(req.params.videoId)
    try{
        const video = await prisma.youtubeVideo.findUnique({
            where: {
                id: videoId
            }
        })
        if(!video){
            return res.status(404).json({
                success: false,
                message: "Video not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Video fetched successfully",
            video
        })

    } catch(error){
        return res.status(500).json({
            success: false,
            message: "Server error while fetching video",
            error
        })
    }
}