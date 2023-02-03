import { IProjectBasic } from "@/types";
import { User } from "@/types";

export interface IProjectMember extends User {
    createProjects: number;
    endProjects: number;
}

export interface IProjectCommentUser extends User {
    text: string;
    messageDate: string;
}