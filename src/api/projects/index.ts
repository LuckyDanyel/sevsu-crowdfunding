import { basicUrl } from '../constants';
import Data from './data';

export const getProjects = (idUser?: string): Promise<any> => {
    const api = `${basicUrl}/api/projects`;

    return new Promise((res, rej) => {
        res(Data);
    })
}