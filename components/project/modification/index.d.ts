import { ICategoryProject } from '@/src/types';

export interface IFileImage {
    src: string,
    buffer: ArrayBuffer | null;
    extension: string;
}

export interface IProjectParams {
    nameProject: string,
    descriptionShort: string,
    categories: ICategoryProject[],
    takenLikes: number,
}