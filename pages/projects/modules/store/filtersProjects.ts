import { defineStore } from 'pinia';
import { ProjectModelCard } from '@models/project';
import { IProjectCard } from '@models/project/projectModelCard/types';
import { categoriesFilters } from './data/ListFiltersData';

type IFilterData = { id: number, label: string };

export interface StateFilterProjects {
    filterCategories: number[],
    projects: ProjectModelCard[],
    sortStrategy: 'popularity' | 'discuss' | '';
    filterDataRender: {
        categories: IFilterData[],
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
        getSortProjectsByStrategy: (state): ProjectModelCard[] => {
            if (state.sortStrategy === 'popularity') {
                return state.projects.slice().sort((a, b) => b.takenLikes - a.takenLikes);
            }
            if (state.sortStrategy === 'discuss') {
                return state.projects.slice().sort((a, b) => b.comments - a.comments);
            }
            return state.projects;
        },
        getFilteredProjects(): ProjectModelCard[]  {
            return this.getSortProjectsByStrategy;
        }
    },
    actions: {
        setFiltersCategories(values: number[]) {
            this.filterCategories = values;
        },
        setSortStrategy(value: StateFilterProjects['sortStrategy']) {
            this.sortStrategy = value;
        },
        setFilterProjects(data: { projects: IProjectCard[] }) {
            const { projects } = data;
            this.projects = projects.map((project) => new ProjectModelCard(project));
            this.filterDataRender.categories = categoriesFilters;
        }
    },
})