import multer from "multer";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs/promises";

const upload = multer({ dest: "uploads/" });

const cloudinaryUpload = async (req, res, next) => {
  const { subFolder } = req.body;
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "No file uploaded",
      });
    }
    const folderPath = `apihub/${subFolder}`;
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: folderPath,
    });
    req.imageUrl = result.secure_url;

    await fs.unlink(req.file.path);

    next();
  } catch (error) {
    res.status(500).json({
      error: "server error failed to upload image",
    });
  }
};

export const uploadImageMiddleware = {
  upload: upload.single("image"),
  cloudinaryUpload,
};
