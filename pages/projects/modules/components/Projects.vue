<script lang="ts">
    import LocationProjectsPage from './LocationProjectsPage.vue';
    import { getProjects } from '../api';
    import ProjectsFiltersUp from './ProjectsFiltersUp.vue';
    import ProjectsWrapperCards from './ProjectsWrapperCards.vue';
    import ProjectsFilters from './ProjectsFilters.vue';
    import { useFiltersProjects } from '../store/filtersProjects';

    export default {
        props: {
            userIdSearchProject: {
                type: String,
                default: '',
            }
        },
        components: {
            ProjectsFiltersUp,
            ProjectsWrapperCards,
            ProjectsFilters,
            LocationProjectsPage,
        },
        async setup(props, { emit }) {
            const projects = await getProjects(props.userIdSearchProject);
            emit('projectsLoaded');
            const { setFilterProjects } = useFiltersProjects();
            setFilterProjects({ projects });
        }
    }

</script>
<template>
    <location-projects-page>
        <template #filters-up>
            <projects-filters-up></projects-filters-up>
        </template>
        <template #filters>
            <projects-filters></projects-filters>
        </template>
        <template #cards>
            <projects-wrapper-cards/>
        </template>
    </location-projects-page>
</template>