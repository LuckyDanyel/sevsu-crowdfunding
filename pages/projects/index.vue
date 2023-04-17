<script lang="ts" setup>
    import AuthHeader from '@modules/authHeader/AuthHeader.vue';
    import SkeletonProjects from './modules/components/skeletons/SkeletonProjects.vue';
    import Projects from './modules/components/Projects.vue';

    const { query } = useRoute();
    let userId = null;
    if(query.userId) {
        userId = String(query.userId);
    }

    const isSkeletonLoading = ref(true);

</script>
<template>
    <NuxtLayout name="main-layout">
        <template #header-right>
            <auth-header></auth-header>
        </template>
        <skeleton-projects v-if="isSkeletonLoading"></skeleton-projects>
        <ClientOnly>
            <projects
                :userIdSearchProject="userId"
                @projectsLoaded="() => isSkeletonLoading = false"
            ></projects>
        </ClientOnly>
    </NuxtLayout>
</template>

<style lang="scss"></style>