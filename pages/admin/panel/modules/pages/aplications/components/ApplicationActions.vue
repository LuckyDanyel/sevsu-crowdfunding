<script lang="ts" setup>
import { PropType } from 'vue';
import ViewProjectAction from './ViewProjectAction.vue';
import ProjectCardModel from '@/src/models/project/projectModelCard';

    defineProps({
        project: {
            type: Object as PropType<ProjectCardModel>,
            required: true,
        }
    })

</script>

<template>
    <div class="applications-actions">
        <view-project-action
            :project="project"    
        ></view-project-action>
    </div>

</template>