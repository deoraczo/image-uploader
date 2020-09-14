export default interface FileStorage {
    saveUploaded(file: Express.Multer.File): string;

};