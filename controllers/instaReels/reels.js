import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const addvideoController = async (req, res) => {
  const { description, title } = req.body;
  const videoUrl = req.videoUrl;
  try {
    const video = await prisma.instaReels.create({
        data: {
            title,
            description,
            url: videoUrl
        }
    })

    return res.status(200).json({
        success: true,
        message: "Video uploaded successfully",
        video
    })
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: "Server error unable to upload video"
    })
  }
};

export const getVideosController = async (req, res) => {
    try {
        const videos = await prisma.instaReels.findMany()
        return res.status(200).json({
            success: true,
            message: "Videos fetched successfully",
            videos
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error unable to fetch videos"
        })
    }
}


export const getVideoByIdController = async (req, res) => {
    const videoId = req.params.videoId
    try {
        const video = await prisma.instaReels.findUnique({
            where: {
                id: Number(videoId)
            }
        })
        return res.status(200).json({
            success: true,
            message: "Video fetched successfully",
            video
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error unable to fetch video"
        })
    }
}