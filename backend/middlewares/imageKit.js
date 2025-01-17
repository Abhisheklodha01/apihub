import multer from "multer";
import ImageKit from "imagekit";
import { config } from "dotenv";

config();

const imagekit = new ImageKit({
  publicKey: "public_VMiAcw2hFPr5pjW0TNVjtVE24EU=",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT_URL,
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadVideoMiddleware = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No video file provided.",
    });
  }

  try {
    const response = await imagekit.upload({
      file: req.file.buffer,
      fileName: req.file.originalname,
    });

    req.videoUrl = response.url;

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error failed to upload video.",
    });
  }
};

export { upload, uploadVideoMiddleware };
