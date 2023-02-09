import ProjectModelAbstract from '../projectModelAbstract';
import UserModelAuthor from '@src/models/user/userModelAuthor';
import { IProjectInfo } from './types';

export default class ProjectModelInfo extends ProjectModelAbstract {

    startProject: IProjectInfo['startProject'] = '';
    endProject: IProjectInfo['endProject'] = '';
    description: IProjectInfo['description'] = '';
    images: IProjectInfo['images'] = [];
    basicData?: IProjectInfo;
    author: UserModelAuthor = new UserModelAuthor();

    constructor(projectsData?: IProjectInfo) {
        super(projectsData);
        if(projectsData) {
            const { author, description, images } = projectsData;
            this.description = description;
            this.author = new UserModelAuthor(author);
            this.images = images;
        }
        this.basicData = projectsData;
    }
}