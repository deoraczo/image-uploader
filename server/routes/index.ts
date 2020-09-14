import { Router } from 'express';
import  { uploadController } from '../controllers/upload.controller';
import multer from '../configs/multer';

const router = Router();

router.route('/uploads')
    .post(multer, uploadController.upload);

export default router;