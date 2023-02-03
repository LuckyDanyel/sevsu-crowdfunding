import UserModelAbstract from "../userModelAbstract";
import { IUserAuthor } from "./types";


export default class UserModelAuthor extends UserModelAbstract {
    projects: IUserAuthor['projects'] = 0;
    constructor(dataAuthor?: IUserAuthor) {
        super(dataAuthor);
        if(dataAuthor) {
            const { projects } = dataAuthor;
            this.projects = projects;
        }
    }
}