import { IProjectInfo } from '@/src/models/project/projectModelInfo/types';
import { basicUrl, tokenType } from '@/src/api/constants';
import { TCategory } from '~/src/types/Categories';

interface ICreatingProjectApi extends IProjectInfo<TCategory> {
    'upload_links': string[];
}

export const cteateProjectApi = async (project: IProjectInfo<string>, token: string): Promise<ICreatingProjectApi> => {
    const url = `${basicUrl}api/v1/project_management/create_project/`;
    try {
        const response: Response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {
                authorization: `${tokenType} ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    } catch (error) {
        throw error;
    }
}