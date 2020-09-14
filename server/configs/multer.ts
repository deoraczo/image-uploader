import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const  mimeTypes = ["image/png", "image/png", "image/jpeg"];
    if (mimeTypes.indexOf(file.mimetype) > -1) {
      cb(null, true);
    } else {
      console.log('The formari file should be .png, .jpg, .jpge');
      cb(null, false); // if validation failed then generate error
    }
  };


export default multer({
    fileFilter
}).single('image');