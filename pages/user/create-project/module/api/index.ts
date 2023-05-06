import { IProjectInfo } from '@/src/models/project/projectModelInfo/types';
import { IFiles } from '@/components/project/modification';
import { basicUrl, tokenType } from '@/src/api/constants';

interface ICreatingProjectApi extends IProjectInfo<string> {
    goal_likes: number;
}

interface ILinks {
    'upload_links': string[];
}

export const uploadImages = async (images: IFiles[], links: ILinks) => {
    const { upload_links } = links;
    const promisisesImages = upload_links.map( async (imageLink, index) => new Promise( async (res, rej) => {
        try {
            const buffer = images[index].buffer;
            const data = await fetch(imageLink, {
                method: 'PUT',
                body: buffer,
            })
            res(data);   
        } catch (error) {
            rej(error);
        }
    }));

    const response = await Promise.all(promisisesImages);
    return response;
}

export const cteateProjectApi = async (project: IProjectInfo<string>, token: string): Promise<ILinksYandex> => {
    const creatingProject: ICreatingProjectApi = {
        ...project,
    };
    const url = `${basicUrl}api/v1/project_management/create_project/`;

    const response: Response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(creatingProject),
        headers: {
            authorization: `${tokenType} ${token}`,
            'Content-Type': 'application/json',
        },
    });
    const uploadLinks: Promise<ILinksYandex> = await response.json()
    return uploadLinks;
}