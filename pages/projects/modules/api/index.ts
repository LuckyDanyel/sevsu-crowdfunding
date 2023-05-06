import { basicUrl } from '@src/api/constants';
import { IProjectCard } from '@models/project/projectModelCard/types';

export const getProjects = async (idUser?: string): Promise<IProjectCard[]> => {
    let url = '';
    if(idUser) {
        url = `${basicUrl}api/v1/project_management/list_project/?userId=${idUser}`;
    } else {
        url = `${basicUrl}api/v1/project_management/list_project/`;
    }

    try {
        const projects = await fetch(url, {
            method: 'GET',
        })
        return projects.json();
    } catch (error) {
        throw error;
    }
}