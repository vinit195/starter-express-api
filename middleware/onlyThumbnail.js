import multer from "multer";
import { envs } from "../config/index.js";
import * as fs from "fs";
import path from "path";

const createDestinationDirectory = (destination) => {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }
};

// Create a storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const Type = req.body.AGUBUN; // Identify request type like (Event,ski school so save image in related module)
    // console.log(Type)
    // Define the destination folder where uploaded images will be stored
    const uploadDir = path.join("upload", Type);
    createDestinationDirectory(uploadDir); // delete
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    // Define how the filename should be generated
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/webp"
  ) {
    cb(null, true);
  } else {
    return cb({ code: "LIMIT_FILE_TYPE" });
  }
};

// function for upload file
export const imageUpload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024, fieldSize: 20 * 1024 * 1024 }, // 5MB limit
  fileFilter: fileFilter,
}).array("thumbnail", 5);
