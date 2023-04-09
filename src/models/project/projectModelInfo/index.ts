import ProjectModelAbstract from '../projectModelAbstract';
import UserModelAuthor from '@src/models/user/userModelAuthor';
import { IProjectInfo } from './types';

export default class ProjectModelInfo extends ProjectModelAbstract {
    description: string = '';
    author: UserModelAuthor = new UserModelAuthor();

    constructor(projectsData?: IProjectInfo) {
        super(projectsData);
        if(projectsData) {
            const { author, description } = projectsData;
            this.description = description;
            this.author = new UserModelAuthor(author);
        }
    }
}
