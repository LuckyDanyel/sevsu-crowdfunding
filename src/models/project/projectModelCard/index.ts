import ProjectModelAbstract from '../projectModelAbstract';
import { IProjectCard } from './types';

export default class ProjectCardModel extends ProjectModelAbstract {
    image: string;
    comments: number;
    constructor(projectCard: IProjectCard) {
        super(projectCard);
        const { image, comments } = projectCard;
        this.comments = comments;
        this.image = image;
    }
} 