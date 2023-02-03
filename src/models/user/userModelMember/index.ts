import UserModelAbstract from "../userModelAbstract";
import { IUserMember } from "./types";


export default class UserModelMember extends UserModelAbstract {
    endProjects: number;
    createProjects: number;
    constructor(projectMember: IUserMember) {
        super(projectMember)
        const { endProjects, createProjects } = projectMember;
        this.endProjects = endProjects;
        this.createProjects = createProjects;
    }

    get procentByEndProject() {
        return Math.floor((this.endProjects / this.createProjects) * 100)
    }
}