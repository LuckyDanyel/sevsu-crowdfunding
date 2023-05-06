<script lang="ts">
    import { storeToRefs } from 'pinia';
    import { TableCell, TableRow, TableTitle, BasicButton, BasicProgress } from 'UI';
    import Pagination from '@/components/pagination/Pagination.vue';
    import usePagination from '@src/use/usePagination';
    import ProjectStatus from '@/components/project/view/ProjectStatus.vue';
    import ProjectTitle from '@/components/project/view/ProjectTitle.vue';
    import UserActions from './UserActions.vue';
    import ProjectModelCard from '@src/models/project/projectModelCard';
    import { useUserProjectsStore } from '@/pages/user/store/userProjectStore';
    import { useAuthUser } from '@/src/store';
    import { getProjects } from '@/src/api/projects';
    import { getCategories } from '@/src/api/project';
    import UserProjectsSkeleton from './skeletons/UserProjectsSkeleton.vue';
    import { getUserPorjects } from '../api';

    export default {
        components: {
            TableCell,
            TableRow,
            TableTitle,
            Pagination,
            BasicButton,
            BasicProgress,
            ProjectTitle,
            ProjectStatus,
            UserActions,
            UserProjectsSkeleton,
        },
        async setup() {
            const numberPage = ref(1);
            const columnSizes = [220, 100, 136, 100, 160, 150, 110, 100];
            const { token } = storeToRefs(useAuthUser());
            const { deleteProject, setProjects, setProjectsLoading, setCategories } = useUserProjectsStore();
            const { getProjects, projectsLoading } = storeToRefs(useUserProjectsStore())
            if(process.client && !unref(getProjects).length) {
                try {
                    setProjectsLoading(true);
                    const [projects, categories] = await Promise.all([await getUserPorjects(unref(token)), await getCategories()])
                    setProjects(projects);
                    setCategories(categories);
                } catch (error) {

                } finally {
                    setProjectsLoading(false);
                }
            }
            const { lengthByLimitation, itemsByPagination } = usePagination<ProjectModelCard>({ items: getProjects, limitation: 13, numberPage });


            return {
                columnSizes,
                itemsByPagination,
                lengthByLimitation,
                numberPage,
                deleteProject,
                getProjects,
                projectsLoading,
            }
        }
    }

</script>

<template>
    <div class="user-projects">
        <div class="user-projects__table">
            <table-row>
                <table-title :min-width="columnSizes[0]"> Название проекта </table-title>
                <table-title :width="columnSizes[1]"> Дата запуска </table-title>
                <table-title :min-width="columnSizes[2]"> Дата окончания </table-title>
                <table-title :width="columnSizes[3]"> Всего лайков </table-title>
                <table-title :min-width="columnSizes[4]"> Проект поддержали </table-title>
                <table-title :min-width="columnSizes[5]"> Прогресс </table-title>
                <table-title :width="columnSizes[6]"> Статус </table-title>
                <table-title :width="columnSizes[7]"> Действия </table-title>
            </table-row>
            <user-projects-skeleton v-if="projectsLoading"></user-projects-skeleton>
            <clientOnly>
                <div class="user-projects__content">
                    <table-row
                        v-for="(projectUser, index) in itemsByPagination"
                    >
                        <table-cell :min-width="columnSizes[0]">
                            <project-title :icon="projectUser.image"> {{ projectUser.title }} </project-title>
                        </table-cell>
                        <table-cell :width="columnSizes[1]"> {{ projectUser.startProject }} </table-cell>
                        <table-cell :min-width="columnSizes[2]"> {{ projectUser.endProject }} </table-cell>
                        <table-cell :width="columnSizes[3]"> {{ projectUser.likes }} </table-cell>
                        <table-cell :min-width="columnSizes[4]"> {{ projectUser.takenLikes }}</table-cell>
                        <table-cell :min-width="columnSizes[5]">
                            <basic-progress class="user-projects__progress" :procent="projectUser.procentByLikes"></basic-progress>
                        </table-cell>
                        <table-cell :width="columnSizes[6]"> 
                            <project-status :status="projectUser.status"></project-status>
                        </table-cell>
                        <table-cell :width="columnSizes[7]">
                            <user-actions
                                @delete="deleteProject(projectUser.id)"
                                :id-project="projectUser.id"
                                :status="projectUser.status"
                            ></user-actions>
                        </table-cell>
                    </table-row>
                </div>
            </clientOnly>
        </div>
        <div class="user-projects__down">
            <div class="user-projects__create" v-if="!projectsLoading">
                <basic-button @click="navigateTo('/user/create-project')"> Создать проект </basic-button>
            </div>
            <pagination v-model="numberPage" :amount="lengthByLimitation" v-if="getProjects.length"></pagination>
        </div>
    </div>

</template>

<style lang="scss">
    .user-projects {
        min-height: 630px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__progress {
            height: 8px;
            width: 100%;
        }
        &__down {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__create {
            min-width: 220px;
        }
    }

</style>