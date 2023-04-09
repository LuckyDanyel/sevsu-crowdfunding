import { basicUrl } from '@src/api/constants';
import { IProjectCard } from '@models/project/projectModelCard/types';

export const getProjects = async (idUser?: string): Promise<IProjectCard[]> => {
    const url = `${basicUrl}api/v1/project_management/list_project/`;

    try {
        const projects = await fetch(url, {
            method: 'GET',
        })
        console.log(projects);
        return projects.json();
    } catch (error) {
        throw error;
    }
}