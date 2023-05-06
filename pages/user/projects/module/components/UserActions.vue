<script lang="ts" setup>
    import { PropType } from 'vue';
    import { BasicIcon, BasicLoader } from 'UI';
    import { TProjectStatus } from '@/src/models/project/projectModelAbstract/types';
    import { useAuthUser } from '@/src/store';
    import { storeToRefs } from 'pinia';
    import { deleleProject } from '../api';

    const { token } = storeToRefs(useAuthUser());

    const emit = defineEmits(['delete']);

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

    const loading = ref(false);

    const editHanlder = () => {
        navigateTo({ path: '/user/edit-project', query: { id:  idProject } })
    }

    const handlerDeleteProject = async () => {
        try {
            loading.value = true;
            await deleleProject(unref(token), idProject);
            emit('delete');
        } catch (error) {
            
        } finally {
            loading.value = false;
        }
    }
    

</script>

<template>
    <div class="user-actions" v-if="status !== 'waiting'">

        <basic-loader v-if="loading"></basic-loader>

        <template v-if="!loading">
            <div 
                class="user-actions__item"
                @click="editHanlder"
            >
                <basic-icon 
                    type-icon='edit' 
                    size='24'
                    v-if="status === 'cancel'"
                ></basic-icon>
            </div>
            <div 
                class="user-actions__item" 
                @click="handlerDeleteProject"
            >
                <basic-icon type-icon='delete' size='24'></basic-icon>
            </div>
        </template>
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