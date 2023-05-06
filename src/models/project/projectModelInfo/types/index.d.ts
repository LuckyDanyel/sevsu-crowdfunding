import { IBasicProject } from "@src/models/project/projectModelAbstract/types";
import { IUserAuthor } from "@src/models/user/userModelAuthor/types";

export interface IProjectInfo<T> extends IBasicProject<T> {
    description: string;
    author: IUserAuthor;
}