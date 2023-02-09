import { basicUrl } from '../constants';
import { IProjectInfo } from '@src/models/project/projectModelInfo/types';
import { IUserComment } from '@src/models/user/userModelComment/types';
import { IUserMember } from '@/src/models/user/userModelMember/types';
import { commnets } from './comments';
import { members } from './members';
import data from './data';


export const getProject = async (id: number): Promise<IProjectInfo> => {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}

export const getMembersByProject = async (id: number): Promise<IUserMember[]> => {
    return new Promise((res, rej) => {
        res(members)
    });
}

export const getCommentsByProject = async (id: number): Promise<IUserComment[]> => {
    return new Promise((res, rej) => {
        res(commnets)
    });
}