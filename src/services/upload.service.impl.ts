import { UploadService } from './upload.service';
import axios from 'axios';
import { injectable } from 'inversify';
import { delay } from '@/utils/utils';

@injectable()
export class UploadServiceImpl implements UploadService {
    async upload(payload: any): Promise<any> {
        await delay(3000);
        const { data } = await axios.post(`/api/uploads`, payload);
        return data;
    }
}