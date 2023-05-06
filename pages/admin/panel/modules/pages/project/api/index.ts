import { basicUrl, tokenType } from "@/src/api/constants";
import { TProjectStatus } from "@/src/models/project/projectModelAbstract/types";

export const addStatusProject = async (token: string, idProject: string, status: TProjectStatus): Promise<void> => {
    const url = `${basicUrl}api/v1/project_management/change_status/${idProject}/`;
    const request = {
        "status": status,
    }

    try {
        const data = await fetch(url, {
            body: JSON.stringify(request),
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${tokenType} ${token}`,
            },
        })
    } catch (error) {
        throw error;
    }
}