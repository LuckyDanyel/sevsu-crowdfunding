import { parse, format } from "date-fns";
import UserModelAbstract from "../userModelAbstract";
import { IUserComment } from "./types";

export default class UserModelComment {
    id: string = '';
    text: string = '';
    messageDate: string = '';
    user: UserModelAbstract = new UserModelAbstract();
    constructor(comment: IUserComment) {
        const { id, text, created_at, user } = comment;
        this.id = id;
        this.text = text;
        this.messageDate = created_at;
        this.user = new UserModelAbstract(user);
    }

    get dateComment(): Date {
        return parse(this.messageDate, 'yyyy-MM-dd', new Date());
    }
    get dateCommentText(): string {
        return format(this.dateComment, 'dd.MM.yyyy');
    }
}