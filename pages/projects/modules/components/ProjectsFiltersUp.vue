<script lang="ts" setup>
    import { storeToRefs } from 'pinia';
    import { BasicText, WhiteButton } from 'UI';
    import { useFiltersProjects } from '../store/filtersProjects';

    const filtersProjects = useFiltersProjects();
    const { setSortStrategy } = filtersProjects;
    const { sortStrategy } = storeToRefs(filtersProjects);

</script>

<template>
    <div class="projects-filters-up">
        <white-button
            @click="() => sortStrategy === 'popularity' ? setSortStrategy('') : setSortStrategy('popularity')"
            :is-active="filtersProjects.sortStrategy === 'popularity'"
            class="projects-filters-up__item"
        
        > Популярные </white-button>
        <white-button
            @click="() => sortStrategy === 'discuss' ? setSortStrategy('') : setSortStrategy('discuss')"
            :is-active="filtersProjects.sortStrategy === 'discuss'"
            class="projects-filters-up__item"
        
        > Обсуждаемые </white-button>
    </div>
</template>

<style lang="scss">
    .projects-filters-up {
        display: inline-flex;

        &_rotate {
            transform: rotate(180deg);
        }

        &__item {
            margin-right: 10px;

        }
        &__item-icon {
            margin-left: 4px;
        }
    }

</style>