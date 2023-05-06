import { defineStore } from "pinia";
import ProjectModelCard from '@src/models/project/projectModelCard';
import { IProjectCard } from "@src/models/project/projectModelCard/types";
import { ICategoryProject } from "@/src/types/Categories";

interface StateProjectsUser {
    projects: ProjectModelCard[];
    projectsLoading: boolean;
    categories: ICategoryProject[];
}

export const useUserProjectsStore = defineStore({
    id: 'user-projects',
    state: () : StateProjectsUser => {
        return {
            projects: [],
            projectsLoading: true,
            categories: [],
        }
    },
    actions: {
        setProjects(projects: IProjectCard[]) {
            this.projects = projects.map((project) => new ProjectModelCard(project));
        },
        deleteProject(id: string) {
            this.projects = this.projects.filter((project) => project.id !== id);
        },
        setProjectsLoading(value: boolean) {
            this.projectsLoading = value;
        },
        addProject(project: ProjectModelCard) {
            this.projects.push(project);
        },
        setCategories(categories: ICategoryProject[]) {
            this.categories = categories;
        },
        getCategory(id: string): ICategoryProject | undefined {
            return this.categories.find((category) => category.id === id);
        }
    },
    getters: {
        getProjects(): ProjectModelCard[] {
            return this.projects;
        },
        getCategories(): ICategoryProject[] {
            return this.categories;
        }
    },

})