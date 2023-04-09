import { ICategoryProject } from '@/src/types';

export interface IFiles {
    src: string,
    buffer: ArrayBuffer;
    extension: string;
}

export interface IProjectParams {
    nameProject: string,
    descriptionShort: string,
    categories: ICategoryProject[],
    takenLikes: number,
}