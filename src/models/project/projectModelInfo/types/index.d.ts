import { IBasicProject } from "@src/models/project/projectModelAbstract/types";
import { IUserAuthor } from "@src/models/user/userModelAuthor/types";

export interface IProjectInfo extends IBasicProject {
    startProject: string;
    endProject: string;
    description: string;
    images: string[];
    author: IUserAuthor;
}