<script lang="ts" setup>
import { PropType } from 'vue';
import { BasicIcon } from '@/UI';
import ProjectCardModel from '@/src/models/project/projectModelCard';

    const { project } = defineProps({
        project: {
            type: Object as PropType<ProjectCardModel>,
            required: true,
        }
    });
</script>

<template>
    <NuxtLink :to="`/admin/project?id=${project.id}`" target="_blank">
        <div 
            class="view-project-action"
        >
            <basic-icon
                size='18'
                type-icon='arrow-open'
            ></basic-icon>
        </div>
    </NuxtLink>
</template>

<style>
    .view-project-action {
        cursor: pointer;
    }
</style>