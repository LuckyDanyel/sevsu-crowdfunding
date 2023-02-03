import { basicUrl } from '@src/api/constants';
import { IProjectCard } from '@models/project/projectModelCard/types';
import Data from './data';

export const getProjects = (idUser?: string): Promise<IProjectCard[]> => {
    const api = `${basicUrl}/api/projects`;

    return new Promise((res, rej) => {
        res(Data);
    })
}