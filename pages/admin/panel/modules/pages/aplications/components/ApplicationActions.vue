<script lang="ts" setup>
import { PropType } from 'vue';
import ViewProjectAction from './ViewProjectAction.vue';
import ProjectModelCard from '@src/models/project/projectModelCard';

    defineProps({
        project: {
            type: Object as PropType<ProjectModelCard>,
            required: true,
        }
    })

</script>

<template>
    <div class="applications-actions">
        <view-project-action
            @view-project="$emit('viewProject')"
            :project="project"    
        ></view-project-action>
    </div>

</template>