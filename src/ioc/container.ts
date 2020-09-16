import 'reflect-metadata';
import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';
import { UploadService } from '@/services/upload.service';
import { TYPES } from './types';
import { UploadServiceImpl } from '@/services/upload.service.impl';

const container = new Container();

container.bind<UploadService>(TYPES.UPLOAD_SERVICE).to(UploadServiceImpl);

export const { lazyInject } = getDecorators(container);