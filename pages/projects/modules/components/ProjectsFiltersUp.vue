<script lang="ts" setup>
    import { storeToRefs } from 'pinia';
    import { BasicText } from 'UI';
    import { useFiltersProjects } from '../store/filtersProjects';

    const filtersProjects = useFiltersProjects();
    const { setSortStrategy } = filtersProjects;
    const { sortStrategy } = storeToRefs(filtersProjects);

</script>

<template>
    <div class="projects-filters-up">
        <div 
            @click="() => sortStrategy === 'popularity' ? setSortStrategy('') : setSortStrategy('popularity')"
            class="projects-filters-up__item"
            :class="filtersProjects.sortStrategy === 'popularity' ? 'projects-filters-up__item_active' : ''"
        >
            <basic-text font='semi-bold' class="projects-filters-up__text"> Популярные </basic-text>
        </div>
        <div 
            @click="() => sortStrategy === 'discuss' ? setSortStrategy('') : setSortStrategy('discuss')"
            class="projects-filters-up__item"
            :class="filtersProjects.sortStrategy === 'discuss' ? 'projects-filters-up__item_active' : ''"
        >
            <basic-text font='semi-bold' class="projects-filters-up__text"> Обсуждаемые </basic-text>
        </div>
    </div>
</template>

<style lang="scss">
    .projects-filters-up {
        display: inline-flex;

        &_rotate {
            transform: rotate(180deg);
        }

        &__item {
            padding: 10px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0px 2px 2px rgba(0, 40, 85, 0.04), 0px 2px 8px rgba(0, 40, 85, 0.16);
            display: flex;
            align-items: center;
            cursor: pointer;
            margin-right: 10px;

            &_active {
                background-color: var(--color-main-type-1);
                .projects-filters-up__text {
                    color: white;
                }
            }
        }
        &__item-icon {
            margin-left: 4px;
        }
    }

</style>