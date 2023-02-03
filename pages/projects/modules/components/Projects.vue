<script lang="ts">
    import { getProjects } from '../api';
    import ProjectsFiltersUp from './ProjectsFiltersUp.vue';
    import ProjectsWrapperCards from './ProjectsWrapperCards.vue';
    import ProjectsFilters from './ProjectsFilters.vue';
    import { useFiltersProjects } from '../store/filtersProjects';

    export default defineNuxtComponent({
        components: {
            ProjectsFiltersUp,
            ProjectsWrapperCards,
            ProjectsFilters,
        },
        async setup() {
            const data = await getProjects();
            const { setFilterProjects } = useFiltersProjects();
            setFilterProjects({ projects: data });
        }
    })

</script>
<template>
    <div class="page-projects__filters-up">
        <projects-filters-up></projects-filters-up>
    </div>
    <div class="page-projects">
        <div class="page-projects__filters">
            <projects-filters></projects-filters>
        </div>
        <projects-wrapper-cards/>
    </div>
</template>

<style lang="scss" setup>
    .page-projects {
        display: flex;
        justify-content: space-between;
        &__filters-up {
            margin-left: 300px;
            margin-bottom: 20px;
        }
        &__filters {
            max-width: 300px;
            width: 100%;
        }
    }
</style>