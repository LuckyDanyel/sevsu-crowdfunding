<script lang="ts" setup>
import { PropType } from 'vue';
import TableTitle from '@/components/table/components/TabelTitle.vue'
import TableCell from '@/components/table/components/TableCell.vue';
import TableRow from '@/components/table/components/TableRow.vue';
import BasicUser from '@/components/basic/BasicUser.vue';
import BasicProcent from '@/components/basic/BasicProcent.vue';
import Pagination from '@/components/pagination/Pagination.vue';
import usePagination from '@/composoble/usePagination';
import { IProjectMember } from '../types';
import ProjectModelMember from '../model/ProjectModelMember';

    const props = defineProps({
        members: {
            type: Array as PropType<IProjectMember[]>,
            default: () => [],
        }
    })
    const currentPage = ref(1);
    const { members } = toRefs(props);
    const membersModel = computed(() => unref(members).map((member) => new ProjectModelMember(member)));
    const { itemsByPagination, lengthByLimitation  } = usePagination<ProjectModelMember>({ items: membersModel, limitation: 9, numberPage: currentPage })


    const sizeColumns = [300, 180, 172, 330]

</script>


<template>
    <div class="project-members">
        <table-row>
            <table-title :min-width="sizeColumns[0]"> Участник </table-title>
            <table-title :width="sizeColumns[1]"> Созданные проекты </table-title>
            <table-title :width="sizeColumns[2]"> Завершенные проекты </table-title>
            <table-title :width="sizeColumns[3]"> Прогресс </table-title>
        </table-row>
        <table-row
                v-for="(member, index) in itemsByPagination"
                :key="member.id"
            >
            <table-cell :minWidth="sizeColumns[0]">
                <basic-user
                    size='small'
                    :name="member.name"
                    :role-name="member.role.name"
                    :icon="member.icon"
                ></basic-user>
            </table-cell>
            <table-cell :width="sizeColumns[1]">  {{ member.createProjects }} </table-cell>
            <table-cell :width="sizeColumns[2]"> {{ member.endProjects }} </table-cell>
            <table-cell :width="sizeColumns[3]">
                <div class="project-members__procent">
                    <basic-procent></basic-procent>
                </div>
            </table-cell>
        </table-row>
        <div class="project-members__pagination">
            <pagination
                v-model="currentPage"
                :amount="lengthByLimitation"
            ></pagination>
        </div>
    </div>
</template>

<style lang="scss">
    .project-members {
        flex: 1;
        display: flex;
        flex-direction: column;
        &__procent {
            height: 8px;
            width: 100%;
        }
        &__pagination {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            flex: 1;
        }
    }

</style>