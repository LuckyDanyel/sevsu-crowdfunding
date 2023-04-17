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

    let firstOpen = false;

    const { setBasicProjects } = useAdminStore();
    const { getProjects, pageView } = storeToRefs(useAdminStore());

    const { token } = storeToRefs(useAuthUser());

    const loadingProjects = ref(false);

    const numberPage = ref(1);

    const { lengthByLimitation, itemsByPagination } = usePagination({ items: getProjects, limitation: 16, numberPage })

    const sizes = [400, 120, 120, 120, 300];

    watch(pageView, async (value) => {
        if(value === 'applications' && !firstOpen) {
            try {
                loadingProjects.value = true;
                const projectReponse = await getApplications(unref(token));
                setBasicProjects(projectReponse);
                firstOpen = true;   
            } catch (error) {
                
            } finally {
                loadingProjects.value = false;
            }
        }
    });

</script>

<template>
    <div class="aplications" v-if="pageView === 'applications'">
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
                <table-row
                    v-for="project in getProjects"
                >
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
            </div>
        </div>
    </div>
</template>