import AbstractUser from "@/model/AbstractUser";
import { IProjectCommentUser } from '@/api/project/types';

export default class ProjectModelCommentUser {
    id: IProjectCommentUser['id'];
    text: IProjectCommentUser['text'];
    messageDate: IProjectCommentUser['messageDate'];
    user: AbstractUser;
    constructor(dataComment: IProjectCommentUser) {
        const { text, messageDate, user, id } = dataComment;
        this.id = id;
        this.user = new AbstractUser(user);
        this.text = text;
        this.messageDate = messageDate;
    }
}