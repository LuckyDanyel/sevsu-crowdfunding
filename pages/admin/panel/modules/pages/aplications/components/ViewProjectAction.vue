<script lang="ts" setup>
import { PropType } from 'vue';
import { BasicIcon } from '@/UI';
import ProjectModelCard from '@src/models/project/projectModelCard';

    const { project } = defineProps({
        project: {
            type: Object as PropType<ProjectModelCard>,
            required: true,
        }
    });
</script>

<template>
    <div 
        class="view-project-action"
        @click="$emit('viewProject')"
    >
        <basic-icon
            size='18'
            type-icon='arrow-open'
        ></basic-icon>
    </div>
</template>

<style>
    .view-project-action {
        cursor: pointer;
    }
</style>