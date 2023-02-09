import { IBasicProject } from "./types";

export default class ProjectModelAbstract {
    id: IBasicProject['id'] = 0;
    title: IBasicProject['title'] = '';
    categories: IBasicProject['categories'] = [];
    likes: IBasicProject['likes'] = 0;
    takenLikes: IBasicProject['takenLikes'] = 0;
    shortText: IBasicProject['shortText'] = '';
    startProject: IBasicProject['startProject'] = '';
    endProject: IBasicProject['endProject'] = '';
    constructor(projectCard?: IBasicProject) {
        if(projectCard) {
            const { id, title, categories, takenLikes, likes, shortText, startProject = '', endProject = '' } = projectCard;
            this.id = id;
            this.title = title;
            this.categories = categories;
            this.likes = likes;
            this.takenLikes = takenLikes;
            this.shortText = shortText;
            this.startProject = startProject;
            this.endProject = endProject;
        }
    }

    get procentByLikes(): number {
        if(!this.takenLikes) return 0;
        const countProcent = Math.floor((this.takenLikes / this.likes) * 100)
        return countProcent;
    }
} 