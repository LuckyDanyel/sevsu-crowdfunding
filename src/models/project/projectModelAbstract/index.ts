import { format, parse, differenceInDays } from "date-fns";
import { ru } from "date-fns/locale";
import { wordEnding } from "@/src/services/text-modifires";
import { IBasicProject } from "./types";

export default class ProjectModelAbstract {
    id: string = '';
    title: string = '';
    categories: IBasicProject['categories'] = [];
    likes: number = 0;
    images: string[] = [];
    takenLikes: number = 0;
    shortText: string = '';
    startProject: string = '';
    endProject: string = '';
    status: IBasicProject['status'] = 'waiting';
    constructor(projectCard?: IBasicProject) {
        if(projectCard) {
            const { id, title, categories, taken_likes, goal_likes, short_description, start_project, end_project, images, status } = projectCard;
            this.id = id;
            this.title = title;
            this.categories = categories;
            this.likes = goal_likes;
            this.takenLikes = taken_likes;
            this.shortText = short_description;
            this.startProject = start_project;
            this.endProject = end_project;
            this.images = images;
            this.status = status;
        }
    }

    get procentByLikes(): number {
        if(!this.takenLikes) return 0;
        const countProcent = Math.floor((this.takenLikes / this.likes) * 100)
        return countProcent;
    }

    get uniqueKey(): string {
        return `${this.takenLikes}_`
    }

    addLike(): void {
        this.takenLikes = this.takenLikes + 1;
    }

    deleteLike(): void {
        this.takenLikes = this.takenLikes === 0 ? this.takenLikes : this.takenLikes - 1;
    }

    get dateStartProject(): Date {
        return parse(this.startProject, 'yyyy-MM-dd', new Date())
    }

    get dateEndProject(): Date {
        return parse(this.endProject, 'yyyy-MM-dd', new Date())
    }

    get dateFullStartProjectText(): string {
        return format(this.dateStartProject, 'dd.MM.yyyy', {  locale: ru })
    }

    get dateFullEndProjectText(): string {
        return format(this.dateEndProject, 'dd.MM.yyyy', {  locale: ru })
    }

    get dayStartProjectText(): string {
        return format(this.dateStartProject, 'd MMMM', {  locale: ru })
    }

    get dayEndProjectText(): string {
        return format(this.dateEndProject, 'd MMMM', {  locale: ru })
    }

    get daysToEndProject(): string {
        const days = differenceInDays(this.dateEndProject, new Date());
        return `${days} ${wordEnding(days, ['день', 'дня', 'дней'])}`;
    }

    get isProjectEnd(): boolean {
        const days = differenceInDays(this.dateEndProject, new Date());
        return days <= 0;
    }
} 