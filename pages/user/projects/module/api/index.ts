import { basicUrl, tokenType } from "@/src/api/constants";
import { IProjectCard } from "@/src/models/project/projectModelCard/types";

export const getUserPorjects = async (token: string): Promise<IProjectCard[]> => {
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