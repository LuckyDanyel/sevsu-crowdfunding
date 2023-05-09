<script lang="ts" setup>
    import { computed, ref } from 'vue';
    import { storeToRefs } from "pinia";
    import Pagination from '@/components/pagination/Pagination.vue';
    import usePagination from '@src/use/usePagination';
    import ProjectModelCard from '@src/models/project/projectModelCard';
    import SkeletonProjectCard from './skeletons/SkeletonProjectCard.vue';
    import ProjectCard from './ProjectCard.vue';
    import { useFiltersProjects } from '../store/filtersProjects';

    const router = useRouter();

    const storeFiltersProjects = useFiltersProjects();
    const { getFilteredProjects, projects } = storeToRefs(storeFiltersProjects);

    const limitationCardsOnPage = 9;
    const numberPage = ref(1);

    const { itemsByPagination, lengthByLimitation } = usePagination<ProjectModelCard>({
        items: getFilteredProjects, 
        limitation: limitationCardsOnPage, 
        numberPage,
    })

    const goToProjectPage = async (id: number) => {
        window.location.href = `/project?id=${id}`
    }

</script>
<template>
    <div class="projects-wrapper">
        <div class="projects-wrapper__cards-container">
            <project-card
                class="projects-wrapper__card"
                v-for="card in itemsByPagination"
                :key="card.id"
                :card="card"
                @click-button="goToProjectPage"
            ></project-card>
        </div>
        <pagination
            v-if="projects.length"
            v-model="numberPage"
            :amount="lengthByLimitation"
        ></pagination>
    </div>
</template>

<style lang="scss" setup>
    .projects-wrapper {
        width: 100%;
        &__card {
            min-width: 300px;
            &:not(:nth-child(3n+3)) {
                margin-right: 24px;
            }
            margin-bottom: 24px;
        }
        &__cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
    }
</style>