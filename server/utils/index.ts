import path from 'path';

export function resolveDiskPath() {
    const pathResolve = getRootPath() + '/disk';
    return pathResolve;
}

export function resolveClientPath() {
    const pathResolve = getRootPath() + '/dist/client';
    return pathResolve;
}

function getRootPath() {
    return process.env.NODE_ENV == 'production' ? path.resolve('..', '..') : path.resolve('.');
}