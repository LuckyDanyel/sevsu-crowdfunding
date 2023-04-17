import { basicUrl, tokenType } from "@/src/api/constants";


export const addLikesProject = async (id: string, token: string): Promise<void> => {
    const url = `${basicUrl}api/v1/project_management/like_project/`;

    const request = {
        "project_id": id,
    }
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${tokenType} ${token}`,
            }
        })
    } catch (error) {
        throw error;
    }
}

export const addCommentProject = async (token: string, comment: { text: string, projectId: string }): Promise<void> => {
    const url = `${basicUrl}api/v1/project_management/create_comment/`;
    try {
        const { text, projectId } = comment;
        const request = {
            text,
            project: projectId,
        }
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${tokenType} ${token}`,
            }
        })
        if(response.status > 400) {
            throw new Error();
        }
    } catch (error) {
        throw error;
    }
};