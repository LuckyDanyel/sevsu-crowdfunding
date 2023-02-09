import { TCategory } from "@src/types"

export interface IBasicProject {
    id: number;
    title: string;
    categories: TCategory[];
    likes: number;
    takenLikes: number;
    shortText: string;
    startProject: string;
    endProject: string;
}