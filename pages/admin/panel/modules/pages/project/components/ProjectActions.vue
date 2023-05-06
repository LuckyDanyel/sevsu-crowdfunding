<script lang="ts" setup>
import { PropType } from 'vue';
import { BasicText, BasicLoader } from '@/UI';
import ProjectModelInfo from '@/src/models/project/projectModelInfo';
import { useAuthUser } from '@/src/store';
import { storeToRefs } from 'pinia';
import { addStatusProject } from '../api/index';

    const emit = defineEmits(['approve', 'cancel']);

    const { project } = defineProps({
        project: {
            type: Object as PropType<ProjectModelInfo>,
            required: true,
        }
    })

    const { token } = storeToRefs(useAuthUser());

    const loadingCancel = ref(false);
    const loadingApprove = ref(false);

    const approveHanlder = async () => {
        try {
            loadingApprove.value = true;
            await addStatusProject(unref(token), project.id, 'approve');
            emit('approve');
        } catch (error) {
            
        } finally {
            loadingApprove.value = false;
        }
    }

    const cancelHandler = async () => {
        try {
            loadingApprove.value = true;
            await addStatusProject(unref(token), project.id, 'cancel');
            emit('cancel');
        } catch (error) {
            
        } finally {
            loadingApprove.value = false;
        }
    }

</script>

<template>
    <div class="project-actions">
        <div class="project-actions__cancel" v-if="!loadingCancel" @click="cancelHandler">
            <basic-text font='semi-bold' size='medium-large'> Отменить </basic-text>
        </div>
        <div class="project-actions__button-disabled project-actions__cancel" v-if="loadingCancel">
            <basic-loader color='white'></basic-loader>
        </div>
        <div class="project-actions__approve" v-if="!loadingApprove" @click="approveHanlder">
            <basic-text font='semi-bold' size='medium-large'> Подтвердить </basic-text>
        </div>
        <div class="project-actions__button-disabled project-actions__approve" v-if="loadingApprove">
            <basic-loader color='white'></basic-loader>
        </div>
    </div>
</template>

<style lang="scss">
    .project-actions {
        display: flex;
        justify-content: flex-end;
        &__approve, &__cancel {
            max-width: 220px;
            width: 100%;
            padding: 12px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            border-radius: 12px;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }
        }
        &__button-disabled {
            cursor: auto;
            &:hover {
                opacity: 1;
            }
        }
        &__approve {
            background-color: var(--color-green-1);
        }
        &__cancel {
            background-color: var(--color-red);
            margin-right: 16px;
        }
    }
</style>