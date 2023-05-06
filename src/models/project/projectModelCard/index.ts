import ProjectModelAbstract from '../projectModelAbstract';
import { IProjectCard } from './types';

export default class ProjectModelCard extends ProjectModelAbstract {
    comments?: number;
    constructor(projectCard: IProjectCard) {
        super(projectCard);
        const { comments } = projectCard;
        this.comments = comments;
    }
} 