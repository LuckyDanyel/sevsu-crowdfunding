import { TCategory } from "@src/types"
export type TProjectStatus = 'approve' | 'cancel' | 'waiting';

export interface IBasicProject<T = TCategory> {
    id: string;
    images: string[];
    title: string;
    categories: T[];
    goal_likes: number;
    taken_likes: number;
    short_description: string;
    start_project: string;
    end_project: string;
    status: TProjectStatus;
}