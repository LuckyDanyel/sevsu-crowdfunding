<script lang="ts">
    import { computed, unref } from 'vue';
    import FilterList from '@/components/filter/FilterList.vue';
    import { storeToRefs } from 'pinia';
    import { useFiltersProjects } from '../store/filtersProjects'
    export default {
        components: {
            FilterList,
        },
        setup() {
            const { setFiltersCategories } = useFiltersProjects();
            const { filterCategories, filterDataRender } = storeToRefs(useFiltersProjects());
            const selectedCategories = computed({
                get: () => unref(filterCategories),
                set: (values: string[]) => setFiltersCategories(values),
            })

            const categoriesFilters = computed(() => unref(filterDataRender).categories);

            return {
                categoriesFilters,
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