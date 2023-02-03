<script lang="ts">
    import { computed, unref } from 'vue';
    import FilterList from '@/components/filter/FilterList.vue';
    import { useFiltersProjects } from '../store/filtersProjects'
    export default {
        components: {
            FilterList,
        },
        setup() {
            const filtersProjectStore = useFiltersProjects();
            const selectedCategories = computed({
                get: () => filtersProjectStore.filterCategories,
                set: (values: number[]) => filtersProjectStore.setFiltersCategories(values),
            })

            return {
                categoriesFilters: filtersProjectStore.filterDataRender.categories,
                selectedCategories,
            }
        }
    }
</script>


<template>
    <div class="filters-projects">
        <filter-list
            v-model="selectedCategories"
            :listFilters="categoriesFilters"
        >
            <template #header> Категории </template>
        </filter-list>
    </div>
</template>