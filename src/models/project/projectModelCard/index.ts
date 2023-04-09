import ProjectModelAbstract from '../projectModelAbstract';
import { IProjectCard } from './types';

export default class ProjectCardModel extends ProjectModelAbstract {
    comments: number;
    constructor(projectCard: IProjectCard) {
        super(projectCard);
        const { comments } = projectCard;
        this.comments = comments;
    }
    get image(): string {
        return this.images ? this.images[0] : '';
    }
} 