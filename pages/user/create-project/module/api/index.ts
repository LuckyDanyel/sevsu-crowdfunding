import { IProjectInfo } from '@/src/models/project/projectModelInfo/types';
import { IFiles } from '@src/types';
import { basicUrl, tokenType } from '@/src/api/constants';

interface ICreatingProjectApi extends IProjectInfo {
    categories: number[];
    goal_likes: number;
}

interface ILinksYandex {
    'upload_links': string[];
}

export const uploadImagesYandex = async (images: IFiles[], linksYandex: ILinksYandex) => {
    const { upload_links } = linksYandex;
    const promisisesImages = upload_links.map( async (imageLink, index) => new Promise( async (res, rej) => {
        try {
            const imageBuffer = images[index].buffer;
            const data = await fetch(imageLink, {
                method: 'PUT',
                body: imageBuffer,
            })
            res(data);   
        } catch (error) {
            rej(error);
        }
    }));

    const response = await Promise.all(promisisesImages);
    return response;
}

export const cteateProjectApi = async (project: IProjectInfo, token: string): Promise<ILinksYandex> => {
    const creatingProject: ICreatingProjectApi = {
        ...project,
        categories: project.categories.map((category) => category.id)
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