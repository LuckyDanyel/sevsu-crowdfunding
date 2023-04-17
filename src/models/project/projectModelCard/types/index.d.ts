import { IBasicProject } from '@/src/models/project/projectModelAbstract/types';

export interface IProjectCard extends IBasicProject {
    comments?: number;
}