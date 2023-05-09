import { ICategoryProject } from '@/src/types';

export interface IProjectParams {
    nameProject: string,
    descriptionShort: string,
    categories: ICategoryProject[],
    takenLikes: number,
}