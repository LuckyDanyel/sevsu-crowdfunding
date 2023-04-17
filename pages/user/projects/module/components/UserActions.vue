<script lang="ts" setup>
    import { PropType } from 'vue';
    import { BasicIcon } from 'UI';
    import { TProjectStatus } from '@/src/models/project/projectModelAbstract/types';

    const { idProject } = defineProps({
        idProject: {
            type: String,
            required: true,
        },
        status: {
            type: String as PropType<TProjectStatus>,
            required: true,
        },
    })

    const editHanlder = () => {
        navigateTo({ path: '/user/edit-project', query: { id:  idProject } })
    }
    

</script>

<template>
    <div class="user-actions" v-if="status !== 'waiting'">
        <div class="user-actions__item">
            <basic-icon type-icon='edit' size='24' @click="editHanlder" v-if="status === 'cancel'"></basic-icon>
        </div>
        <div class="user-actions__item">
            <basic-icon type-icon='delete' size='24'></basic-icon>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .user-actions {
        display: flex;
        &__item {
           cursor: pointer;
            &:hover {
                opacity: 0.6;
            }
            &:not(:last-child) {
                margin-right: 8px;
            }
        }
    }

</style>