import multer from "multer";
import { envs } from "../config/index.js";
import * as fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const directory = `public/cybernews`;

    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
    cb(null, directory);
  },
  filename: function (req, file, cb) {
    const fileName = "cn";
    const timestamp = Date.now();
    const randomNumbers = Math.floor(100000 + Math.random() * 900000);
    const originalName = file.originalname;
    const extension = originalName.slice(originalName.lastIndexOf("."));
    const newFileName = `${fileName}-${randomNumbers}-${timestamp}${extension}`;
    cb(null, newFileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    return cb({ code: "LIMIT_FILE_TYPE" });
  }
};
//const maxFileUploadSize = envs.maxFileUploadSize ? envs.maxFileUploadSize : 20;
// function for upload file
export const cybernewsFileUpload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 350 },
  fileFilter: fileFilter,
}).array("attachment", 5);
