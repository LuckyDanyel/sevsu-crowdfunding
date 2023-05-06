import { basicUrl, tokenType } from "@src/api/constants";
import { IProjectInfo } from "@/src/models/project/projectModelInfo/types";
import { TCategory } from "~/src/types/Categories";

export const getUserPorjects = async (token: string): Promise<IProjectInfo<TCategory>[]> => {
    const url = `${basicUrl}api/v1/project_management/list_user_project/`;

    try {
        const projects = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `${tokenType} ${token}`,
            }
        })
        return projects.json();   
    } catch (error) {
        throw error;
    }
}

export const deleleProject = async (token: string, id: string): Promise<void> => {
    const url = `${basicUrl}api/v1/project_management/delete_project/${id}/`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': `${tokenType} ${token}`,
            }
        })
    } catch (error) {
        throw error;
    }
}