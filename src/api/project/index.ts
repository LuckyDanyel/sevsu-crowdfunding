import { basicUrl } from '../constants';
import { IProject } from '@/components/project/types';
import { IProjectMember, IProjectCommentUser } from '@/pages/project/types';
import { commnets } from './comments';
import { members } from './members';
import data from './data';


export const getProject = async (id: number): Promise<IProject> => {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}

export const getMembersByProject = async (id: number): Promise<IProjectMember[]> => {
    return new Promise((res, rej) => {
        res(members)
    });
}

export const getCommentsByProject = async (id: number): Promise<IProjectCommentUser[]> => {
    return new Promise((res, rej) => {
        res(commnets)
    });
}