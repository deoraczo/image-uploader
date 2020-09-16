import FileStorage  from "../FileStorage";
import fs from 'fs';
import { v4 as uuidV4 } from 'uuid';
import path from 'path';
import { injectable } from 'inversify';
import { resolveDiskPath } from '../../utils';

@injectable()
export class LocalFileStorage implements FileStorage {

    saveUploaded(file: Express.Multer.File): string {
        const newNameImage = `${uuidV4()}${path.extname(file.originalname)}`;
        fs.writeFile(`${resolveDiskPath()}/${newNameImage}`, file.buffer, 'binary', (err) => {
            if(err) {
                console.log("Image upload failed.");
            }
        })
        return `disk/${newNameImage}`;
    }
}