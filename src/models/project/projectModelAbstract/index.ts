import { IBasicProject } from "./types";

export default class ProjectModelAbstract {
    id: IBasicProject['id'] = 0;
    title: IBasicProject['title'] = '';
    categories: IBasicProject['categories'] = [];
    likes: IBasicProject['likes'] = 0;
    takenLikes: IBasicProject['takenLikes'] = 0;
    views: IBasicProject['views'] = 0;
    shortText: IBasicProject['shortText'] = '';
    constructor(projectCard?: IBasicProject) {
        if(projectCard) {
            const { id, title, categories, takenLikes, likes, views, shortText } = projectCard;
            this.id = id;
            this.title = title;
            this.categories = categories;
            this.likes = likes;
            this.takenLikes = takenLikes;
            this.views = views;
            this.shortText = shortText;
        }
    }

    get procentByLikes(): number {
        if(!this.takenLikes) return 0;
        const countProcent = Math.floor((this.takenLikes / this.likes) * 100)
        return countProcent;
    }
} 