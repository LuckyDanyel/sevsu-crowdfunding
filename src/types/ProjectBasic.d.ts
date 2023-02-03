import { ICategoryProject } from "@/types";

export interface IProjectBasic {
    id: number;
    title: string;
    categories: ICategoryProject[];
    likes: number;
    takenLikes: number;
    views: number;
    shortText:  string;
}