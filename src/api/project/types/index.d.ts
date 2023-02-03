import { User } from "@/types";

export interface IProjectMember extends User {
    createProjects: number;
    endProjects: number;
}

export interface IProjectCommentUser {
    id: number;
    user: User;
    text: string;
    messageDate: string;
}