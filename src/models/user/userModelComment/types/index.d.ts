import { IUser } from '@src/models/user/userModelAbstract/types';

export interface IUserComment {
    comment: {
        id: number;
        text: string;
        messageDate: string;
    },
    user: IUser,
}