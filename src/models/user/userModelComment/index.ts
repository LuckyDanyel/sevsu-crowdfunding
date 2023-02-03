import UserModelAbstract from "../userModelAbstract";
import { IUserComment } from "./types";

export default class UserModelComment {
    commnet: IUserComment['comment'];
    user: UserModelAbstract = new UserModelAbstract();
    constructor({ user, comment }: IUserComment) {
        this.commnet = comment
        this.user = new UserModelAbstract(user);
    }
}