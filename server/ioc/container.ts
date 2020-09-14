import 'reflect-metadata';
import { Container } from 'inversify';
import  FileStorage  from '../file/FileStorage';
import { TYPES } from './types';
import { LocalFileStorage } from '../file/local/LocalFileStorage';
import getDecorators from 'inversify-inject-decorators';

const container = new Container();

container.bind<FileStorage>(TYPES.FILE_STORAGE).to(LocalFileStorage);

export const { lazyInject } = getDecorators(container);

