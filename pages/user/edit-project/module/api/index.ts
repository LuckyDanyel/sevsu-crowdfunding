import { basicUrl, tokenType } from "@/src/api/constants";
import { IProjectInfo } from "@/src/models/project/projectModelInfo/types"
import { TCategory } from "@/src/types/Categories"
import { IFileImage } from "@/src/types";

interface ICreatingProjectApi extends IProjectInfo<TCategory> {
    'upload_links': string[];
}


export const updateProjectApi = async (token: string, project: IProjectInfo<TCategory>, imagesFile: IFileImage[]): Promise<ICreatingProjectApi> => {
    const url = `${basicUrl}api/v1/project_management/update_project/${project.id}`;
    const rightProject = {
        ...project,
        categories: project.categories.map((category) => category.id),
        images: imagesFile.map((img) => img.extension),
    } as IProjectInfo<string>;
    try {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(rightProject),
            headers: {
                authorization: `${tokenType} ${token}`,
                'Content-Type': 'application/json',
            },
        })
        return response.json();
    } catch (error) {
        throw error;
    }
}