<script lang="ts" setup>
    import { BasicIcon } from 'UI';

    const { idProject } = defineProps({
        idProject: {
            type: String,
            required: true,
        }
    })

    const editHanlder = () => {
        navigateTo({ path: '/user/edit-project', query: { id:  idProject } })
    }
    

</script>

<template>
    <div class="user-actions">
        <div class="user-actions__item">
            <basic-icon type-icon='edit' size='24' @click="editHanlder"></basic-icon>
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