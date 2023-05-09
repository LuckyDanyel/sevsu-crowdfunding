import { defineStore } from 'pinia';
import ProjectModelCard from '@src/models/project/projectModelCard';
import { IProjectCard } from '@models/project/projectModelCard/types';
import { ICategoryProject } from '@/src/types';
import { filterByCategories } from './filters';

export interface StateFilterProjects {
    filterCategories: string[],
    projects: ProjectModelCard[],
    sortStrategy: 'popularity' | 'discuss' | '';
    filterDataRender: {
        categories: ICategoryProject[],
    }
}

export const useFiltersProjects = defineStore({
    id: 'filters-projects',
    state: () : StateFilterProjects => {
        return {
            filterCategories: [],
            sortStrategy: '',
            projects: [],
            filterDataRender: {
                categories: [],
            }
        }
    },
    getters: {
        getSortProjectsByStrategy(): ProjectModelCard[] {
            if (this.sortStrategy === 'popularity') {
                return this.projects.slice().sort((a, b) => b.takenLikes - a.takenLikes);
            }
            if (this.sortStrategy === 'discuss') {
                return this.projects.slice().sort((a, b) => {
                    if(b.comments && a.comments) {
                        return b.comments - a.comments;
                    }
                    return 0;
                });
            }
            return this.projects;
        },
        getFilteredProjects(): ProjectModelCard[]  {
            const projcets = filterByCategories(this.filterCategories, this.getSortProjectsByStrategy);
            return projcets;
        }
    },
    actions: {
        setFiltersCategories(values: string[]) {
            this.filterCategories = values;
        },
        setSortStrategy(value: StateFilterProjects['sortStrategy']) {
            this.sortStrategy = value;
        },
        setFilterProjects(data: { projects: IProjectCard[], categories: ICategoryProject[]}) {
            const { projects, categories } = data;
            this.projects = projects.map((project) => new ProjectModelCard(project));
            this.filterDataRender.categories = categories;
        }
    },
})