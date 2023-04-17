<script lang="ts" setup>
    import { LocationProject } from '@/UI';
    import SkeletonProjectInfo from './SkeletonProjectInfo.vue';
    import SkeletonProjectDescription from './SkeletonProjectDescription.vue';
    import SkeletonCarusel from '@/components/carusel/skeleton/SkeletonCarusel.vue';
</script>

<template>
    <div class="skeleton-project">
        <location-project>
            <template #left>
                <skeleton-carusel></skeleton-carusel>
            </template>
            <template #right>
                <skeleton-project-info></skeleton-project-info>
            </template>
            <template #down>
            
            </template>
        </location-project>

    </div>

</template>