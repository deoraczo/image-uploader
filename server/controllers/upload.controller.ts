import { Request, Response } from 'express';
import  FileStorage  from '../file/FileStorage';
import { lazyInject } from '../ioc/container';
import { TYPES } from '../ioc/types';

export class UploadController {

    @lazyInject(TYPES.FILE_STORAGE)
    private fileStorage!: FileStorage;

    upload = (req: Request, res: Response): Response => {
        const imageUrl = this.fileStorage.saveUploaded(req.file);
        return res.json({
            message: 'Image uploaded successfully',
            imageUrl:  imageUrl
        });
    }
}

export const uploadController = new UploadController();