import { defineStore } from "pinia";
import ProjectModelInfo from "@/src/models/project/projectModelInfo";
import { IProjectInfo } from "~/src/models/project/projectModelInfo/types";
import { IProjectCard } from "@src/models/project/projectModelCard/types";
import { ICategoryProject, TCategory } from "@/src/types/Categories";
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();

interface StateProjectsUser {
    projects: IProjectInfo<TCategory>[];
    projectsLoading: boolean;
    categories: ICategoryProject[];
    addedProjectId: string;
    updatedProjectId: string;
}

export const useUserProjectsStore = defineStore({
    id: 'user-projects',
    state: () : StateProjectsUser => {
        return {
            projects: [],
            projectsLoading: true,
            categories: [],
            addedProjectId: '',
            updatedProjectId: '',
        }
    },
    actions: {
        setProjects(projects: IProjectInfo<TCategory>[]) {
            this.projects = projects;
        },
        deleteProject(id: string) {
            this.projects = this.projects.filter((project) => project.id !== id);
        },
        setProjectsLoading(value: boolean) {
            this.projectsLoading = value;
        },
        addProject(project: IProjectInfo<TCategory>) {
            this.projects.unshift(project);
            this.setAddedProjectId(project.id);
        },
        setUpdatedProjectId(id: string) {
            this.updatedProjectId = id;
        },
        setAddedProjectId(id: string) {
            this.addedProjectId = id;
        },
        setCategories(categories: ICategoryProject[]) {
            this.categories = categories;
        },
        getProjectById(id: string): IProjectInfo<TCategory> | undefined {
            return this.projects.find((project) => project.id === id);
        },
        getCategory(id: string): ICategoryProject | undefined {
            return this.categories.find((category) => category.id === id);
        }
    },
    getters: {
        getProjects(): ProjectModelInfo[] {
            return this.projects.map((project) => new ProjectModelInfo(project));
        },
        getCategories(): ICategoryProject[] {
            return this.categories;
        }
    },

})