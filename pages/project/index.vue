<script lang="ts" setup> 
    import AuthHeader from '@/modules/authHeader/AuthHeader.vue';
    import SkeletonProject from '@/components/project/view/skeletrons/SkeletonFullProject.vue';
    import Project from './modules/components/Project.vue';

    const { query } = useRoute();
    const projectId = String(query.id);
    const isSkeletonLoading = ref(true);
    if(!projectId) {
        window.location.href = '/';
    }
    
</script>

<template>
    <NuxtLayout name="white-layout">
        <template #header-right>
            <auth-header />
        </template>
        <skeleton-project v-if="isSkeletonLoading"></skeleton-project>
        <ClientOnly>
            <div class="project-page">
                <project 
                    :id="projectId"
                    @projectLoaded="() => isSkeletonLoading = false"
                ></project>
            </div>
        </ClientOnly>
    </NuxtLayout>
</template>