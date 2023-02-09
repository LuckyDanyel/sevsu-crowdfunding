<script lang="ts" setup> 
    import AuthHeader from '@/modules/authHeader/AuthHeader.vue';
    import Project from './modules/components/Project.vue';

    const { query } = useRoute();
    const projectId = Number(query.id);
    if(!projectId) {
        navigateTo('/');
    }
    
</script>

<template>
    <NuxtLayout name="white-layout">
        <template #header-right>
            <auth-header />
        </template>
        <div class="project-page">
            <project :id="projectId"></project>
        </div>
    </NuxtLayout>
</template>