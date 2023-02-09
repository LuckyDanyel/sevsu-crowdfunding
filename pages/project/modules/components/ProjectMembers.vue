<script lang="ts" setup>
import { PropType } from 'vue';
import { TableCell, TableTitle, TableRow, BasicProgress } from 'UI';
import UserDisplay from '@/components/user/userDisplay/UserDisplay.vue';
import Pagination from '@/components/pagination/Pagination.vue';
import usePagination from '@/src/use/usePagination';
import { UserModelMember } from '@/src/models/user';

    const props = defineProps({
        members: {
            type: Array as PropType<UserModelMember[]>,
            default: () => [],
        }
    })
    const currentPage = ref(1);
    const { members } = toRefs(props);
    const { itemsByPagination, lengthByLimitation  } = usePagination<UserModelMember>({ items: members, limitation: 9, numberPage: currentPage })

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
                <user-display
                    size='small'
                    :name="member.name"
                    :role-name="member.role.name"
                    :icon="member.icon"
                ></user-display>
            </table-cell>
            <table-cell :width="sizeColumns[1]">  {{ member.createProjects }} </table-cell>
            <table-cell :width="sizeColumns[2]"> {{ member.endProjects }} </table-cell>
            <table-cell :width="sizeColumns[3]">
                <div class="project-members__procent">
                    <basic-progress></basic-progress>
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