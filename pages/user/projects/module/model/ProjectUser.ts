import ProjectModelAbstract from '@src/models/project/projectModelAbstract';
import { IProjectCardUser } from "../api/types";

export default class ProjectModelUser extends ProjectModelAbstract {
    image: string = '';
    status: IProjectCardUser['status'];

    constructor(dataProjectUser: IProjectCardUser ) {
        super({
            ...dataProjectUser,
            categories: [],
            shortText: '',
        });
        const { image, status } = dataProjectUser;
        this.image = image;
        this.status = status;
    }
}