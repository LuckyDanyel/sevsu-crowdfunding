import { IBasicProject } from "@src/models/project/projectModelAbstract/types";
import { IUserAuthor } from "@src/models/user/userModelAuthor/types";

export interface IProjectInfo extends IBasicProject {
    description: string;
    author: IUserAuthor;
}