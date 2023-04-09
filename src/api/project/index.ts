import { basicUrl } from '../constants';
import { ICategoryProject } from '@/src/types';
import { IProjectInfo } from '@src/models/project/projectModelInfo/types';
import { IUserComment } from '@src/models/user/userModelComment/types';
import { IUserMember } from '@/src/models/user/userModelMember/types';
import { categories } from './categories';
import { commnets } from './comments';
import { members } from './members';
import data from './data';


export const getProject = async (id: string): Promise<IProjectInfo> => {
    console.log(id);
    const url = `${basicUrl}api/v1/project_management/retrieve_project/?id=${id}`;

    const project = await fetch(url, {
        'method': 'GET',
    })

    return project.json();
}

export const getMembersByProject = async (id: string): Promise<IUserMember[]> => {
    return new Promise((res, rej) => {
        res(members)
    });
}

export const getCommentsByProject = async (id: string): Promise<IUserComment[]> => {
    return new Promise((res, rej) => {
        res(commnets)
    });
}

export const getCategories = async (): Promise<ICategoryProject[]> => {
    const url = `${basicUrl}api/v1/project_management/list_category/`;

    try {
        const categories = await fetch(url, {
            'method': 'GET',
        });
        return categories.json() 
    } catch (error) {
        throw error;
    }
}