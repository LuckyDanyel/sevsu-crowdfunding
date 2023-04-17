<script lang="ts" setup>
    import LocationProjectsPage from '../LocationProjectsPage.vue';
    import SkeletonProjectsWrapperCards from './SkeletonProjectsWrapperCards.vue';
    import SkeletonFiltersUp from './SkeletonFiltersUp.vue';
    import SkeletonFilters from './SkeletonFilters.vue';

</script>

<template>
    <location-projects-page>
        <template #filters-up>
            <skeleton-filters-up></skeleton-filters-up>
        </template>
        <template #filters>
            <skeleton-filters></skeleton-filters>
        </template>
        <template #cards>
            <skeleton-projects-wrapper-cards></skeleton-projects-wrapper-cards>
        </template>
    </location-projects-page>
</template>