import AbstractUser from "@/model/AbstractUser";
import { IProjectMember } from '../types';


export default class ProjectModelMember extends AbstractUser {
    endProjects: number;
    createProjects: number;
    constructor(projectMember: IProjectMember) {
        super(projectMember);
        const { endProjects, createProjects } = projectMember;
        this.endProjects = endProjects;
        this.createProjects = createProjects;
    }

    get procentByEndProject() {
        return Math.floor((this.endProjects / this.createProjects) * 100)
    }
}