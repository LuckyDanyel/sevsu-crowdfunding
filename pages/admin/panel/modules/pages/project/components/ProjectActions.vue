<script lang="ts" setup>
import { PropType } from 'vue';
import { BasicText, BasicLoader } from '@/UI';
import { ProjectModelInfo } from '@/src/models/project';
    defineProps({
        project: {
            type: Object as PropType<ProjectModelInfo>,
            required: true,
        }
    })
    const loadingCancel = ref(true);
    const loadingApprove = ref(true);

</script>

<template>
    <div class="project-actions">
        <div class="project-actions__cancel" v-if="!loadingCancel">
            <basic-text font='semi-bold' size='medium-large'> Отменить </basic-text>
        </div>
        <div class="project-actions__button-disabled project-actions__cancel" v-if="loadingCancel">
            <basic-loader color='white'></basic-loader>
        </div>
        <div class="project-actions__approve" v-if="!loadingApprove">
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