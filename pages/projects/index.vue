<script lang="ts" setup>
    import ProjectsFilters from './components/ProjectsFilters.vue';
    import ProjectCard from './components/ProjectCard.vue';

    definePageMeta({
        middleware: ['authorization'],
    })

</script>
<template>
    <NuxtLayout name="main-layout">
        <div class="page-projects">
            <projects-filters></projects-filters>
            <project-card></project-card>
        </div>
    </NuxtLayout>
</template>