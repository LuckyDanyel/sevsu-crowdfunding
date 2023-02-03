import { IUser } from '@src/models/user/userModelAbstract/types';

export interface IUserAuthor extends IUser {
    projects: number;
}