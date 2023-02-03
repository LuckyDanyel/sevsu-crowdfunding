import { IUser } from "@src/models/user/userModelAbstract/types";

export interface IUserMember extends IUser {
    endProjects: number;
    createProjects: number;
}