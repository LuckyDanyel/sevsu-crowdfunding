<script lang="ts">
    import { TableCell, TableRow, TableTitle, BasicButton, BasicProgress } from 'UI';
    import Pagination from '@/components/pagination/Pagination.vue';
    import usePagination from '@/src/use/usePagination';
    import UserProjectStatus from './UserProjectStatus.vue';
    import UserProjectTitle from './UserProjectTitle.vue';
    import UserActions from './UserActions.vue';
    import { ProjectModelCard } from '@/src/models/project';
    import useUserProjects from '../use/useUserProjects';

    export default {
        components: {
            TableCell,
            TableRow,
            TableTitle,
            Pagination,
            BasicButton,
            BasicProgress,
            UserProjectStatus,
            UserProjectTitle,
            UserActions,
        },
        async setup() {
            const numberPage = ref(1);
            const columnSizes = [220, 100, 136, 100, 160, 150, 110, 100];
            const { projectsModelUser } = await useUserProjects();
            const { lengthByLimitation, itemsByPagination } = usePagination<ProjectModelCard>({ items: projectsModelUser, limitation: 13, numberPage })

            return {
                columnSizes,
                itemsByPagination,
                lengthByLimitation,
                numberPage,
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
            <div class="user-projects__content">
                <table-row
                    v-for="(projectUser, index) in itemsByPagination"
                >
                    <table-cell :min-width="columnSizes[0]">
                        <user-project-title :icon="projectUser.image"> {{ projectUser.title }} </user-project-title>
                    </table-cell>
                    <table-cell :width="columnSizes[1]"> {{ projectUser.startProject }} </table-cell>
                    <table-cell :min-width="columnSizes[2]"> {{ projectUser.endProject }} </table-cell>
                    <table-cell :width="columnSizes[3]"> {{ projectUser.likes }} </table-cell>
                    <table-cell :min-width="columnSizes[4]"> {{ projectUser.takenLikes }}</table-cell>
                    <table-cell :min-width="columnSizes[5]">
                        <basic-progress class="user-projects__progress" :procent="projectUser.procentByLikes"></basic-progress>
                    </table-cell>
                    <table-cell :width="columnSizes[6]"> 
                        <user-project-status :status="projectUser.status"></user-project-status>
                    </table-cell>
                    <table-cell :width="columnSizes[7]">
                        <user-actions :id-project="projectUser.id" v-if="projectUser.status !== 'waiting'"></user-actions>
                    </table-cell>
                </table-row>
            </div>
        </div>
        <div class="user-projects__down">
            <div class="user-projects__create">
                <basic-button @click="navigateTo('/user/create-project')"> Создать проект </basic-button>
            </div>
            <pagination v-model="numberPage" :amount="lengthByLimitation"></pagination>
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