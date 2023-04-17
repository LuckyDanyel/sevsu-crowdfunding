import { IUser } from '@src/models/user/userModelAbstract/types';

export interface IUserComment {
    id: string;
    text: string;
    created_at: string;
    user: IUser,
}