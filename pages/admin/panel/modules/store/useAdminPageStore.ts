import { defineStore } from "pinia";
import ProjectModelInfo from "~/src/models/project/projectModelInfo";
import { IProjectInfo } from '@/src/models/project/projectModelInfo/types';
import { TPageView } from "../types";

export interface StateAdminPage {
    pageView: TPageView;
    basicProjects: IProjectInfo[];
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
        setBasicProjects(projects: IProjectInfo[]) {
            this.basicProjects = projects;
        },
        deleteProject(id: string) {
            this.basicProjects = this.basicProjects.filter((project) => project.id !== id);
        }
    },
    getters: {
        getProjects(): ProjectModelInfo[] {
            return this.basicProjects.map((project) => new ProjectModelInfo(project));
        },
        getProjectByTakenId(): ProjectModelInfo | undefined {
            const project = this.basicProjects.find((project) => project.id === this.takenProjectId)
            if(project) {
                return new ProjectModelInfo(project);
            }
            return project;
        }
    }
})