import { defineStore } from "pinia";
import { UserModelAbstract } from '@models/user';
import { IBasicProject } from "@/src/models/project/projectModelAbstract/types";
import ProjectCardModel from "@/src/models/project/projectModelCard";
import { TPageView } from "../types";
import { IProjectBasic } from "~~/src/types";

export interface StateAdminPage {
    pageView: TPageView;
    basicProjects: IBasicProject[];
    takenProjectId: string;
}

export const useAdminStore = defineStore({
    id: 'admin-page-store',
    state: () : StateAdminPage => {
        return {
            pageView: 'users',
            basicProjects: [],
            takenProjectId: '',
        }
    },
    actions: {
        setProjectId(id: string) {
            this.takenProjectId = id;
        },
        setPageView(pageView: TPageView) {
            this.pageView = pageView;
        },
        setBasicProjects(projects: IBasicProject[]) {
            this.basicProjects = projects;
        }
    },
    getters: {
        getProjects(): ProjectCardModel[] {
            return this.basicProjects.map((project) => new ProjectCardModel(project));
        },
        getProjectByTakenId(): IProjectBasic | undefined {
            return this.basicProjects.find((project) => project.id === this.takenProjectId);
        }
    }
})