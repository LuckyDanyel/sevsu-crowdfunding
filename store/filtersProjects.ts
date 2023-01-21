import { defineStore } from 'pinia';
import { categoriesFilters } from './data/ListFiltersData';

type TFilterData = { id: number, label: string };

export interface StateFilterProjects {
    filterCategories: number[],
    filterDataRender: {
        categories: TFilterData[],
    }
}

export const useFiltersProjects = defineStore({
    id: 'filters-projects',
    state: () : StateFilterProjects => {
        return {
            filterCategories: [],
            filterDataRender: {
                categories: categoriesFilters,
            }
        }
    },
    actions: {
        setFiltersCategories(values: number[]) {
            this.filterCategories = values;
        }
    }
})