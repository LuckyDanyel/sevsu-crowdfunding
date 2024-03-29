import { basicUrl, tokenType } from "@/src/api/constants";
import { IProjectInfo } from "@/src/models/project/projectModelInfo/types";

export const getApplications = async (token: string): Promise<IProjectInfo[]> => {
    const url = `${basicUrl}api/v1/project_management/list_waiting_project/`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${tokenType} ${token}`,
            }
        });
        if(response.status > 400) {
            throw new Error();
        }
        return response.json();
    } catch (error) {
        throw error;
    }
};