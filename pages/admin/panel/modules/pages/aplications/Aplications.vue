<script lang="ts" setup>
    import { PropType } from 'vue';
    import { TableCell, TableRow, TableTitle } from '@/UI';
    import { storeToRefs } from 'pinia';
    import Pagination from '@/components/pagination/Pagination.vue';
    import ProjectTitle from '@/components/project/view/ProjectTitle.vue';
    import ProjectStatus from '@/components/project/view/ProjectStatus.vue';
    import usePagination from '@/src/use/usePagination';
    import { useAuthUser } from '@/src/store';
    import ApplicationActions from './components/ApplicationActions.vue';
    import ApplicationsSkeleton from './skeleton/ApplicationsSkeleton.vue';
    import { useAdminStore } from '../../store/useAdminPageStore';
    import { getApplications } from './api/index';

    const { setBasicProjects } = useAdminStore();
    const { getProjects, pageView } = storeToRefs(useAdminStore());

    const { token } = storeToRefs(useAuthUser());

    const loadingProjects = ref(false);

    const numberPage = ref(1);

    const { lengthByLimitation, itemsByPagination } = usePagination({ items: getProjects, limitation: 16, numberPage })

    const sizes = [400, 120, 120, 120, 300];

    const getProjectsApi = async () => {
        try {
            loadingProjects.value = true;
            const projectReponse = await getApplications(unref(token));
            setBasicProjects(projectReponse);
        } catch (error) {
            
        } finally {
            loadingProjects.value = false;
    }
    }
    getProjectsApi();

</script>

<template>
    <div class="aplications">
        <div class="aplications__table">
            <table-row>
                <table-title 
                    :min-width="sizes[0]"
                > Название проекта </table-title>
                <table-title
                    :width="sizes[1]"
                > Дата запуска </table-title>
                <table-title
                    :width="sizes[2]"
                > Дата окончания </table-title>
                <table-title
                    :width="sizes[3]"
                > Статус </table-title>
                <table-title
                    :min-width="sizes[4]"
                > Действия </table-title>
            </table-row>
            <div class="aplications__content">
                <applications-skeleton v-if="loadingProjects"></applications-skeleton>
                <template
                    v-if="!loadingProjects"
                    v-for="project in itemsByPagination"
                    :key="project.id"
                >
                    <table-row>
                        <table-cell
                            :min-width="sizes[0]"
                        >
                            <project-title :icon="project.image"> {{ project.title }} </project-title>
                        </table-cell>
                        <table-cell
                            :width="sizes[1]"
                        > {{ project.dateFullStartProjectText }} </table-cell>
                        <table-cell
                            :width="sizes[2]"
                        > {{ project.dateFullEndProjectText }} </table-cell>
                        <table-cell
                            :width="sizes[3]"
                        > 
                            <project-status :status="project.status"></project-status>
                        </table-cell>
                        <table-cell
                            :min-width="sizes[4]"
                        >
                            <application-actions
                                :project="project"
                            ></application-actions> 
                        </table-cell>
                    </table-row>
                </template>
            </div>
        </div>
        <div class="applications__pagination" v-if="getProjects.length">
            <pagination v-model="numberPage" :amount="lengthByLimitation"></pagination>
        </div>
    </div>
</template>

<style lang="scss">
    .applications {
        &__pagination {
            margin-top: 12px;
            display: flex;
            justify-content: flex-end;
        }
    }

</style>