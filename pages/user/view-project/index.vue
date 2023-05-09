<script lang="ts" setup>
import UserMenu from '/components/user/userMenu/UserMenuWrapper.vue';
import useLogoutUser from '@src/use/useLogoutUser';
import useRedirectUserByUpdate from '../use/useRedirectUserByUpdate';
import Project from '../view-project/components/Project.vue';

    const { query } = useRoute();
    const projectId = String(query.id);
    if(!projectId) {
        window.location.href = '/projects';
    }
    definePageMeta({
        middleware: ['authorization']
    })
    useSeoMeta({
        title: 'Просмотр проекта'
    })
    useLogoutUser();
    useRedirectUserByUpdate();
</script>

<template>
    <NuxtLayout name="white-layout">
        <template #header-right>
           <user-menu></user-menu>
        </template>
        <ClientOnly>
            <project :id="projectId"></project>
        </ClientOnly>
    </NuxtLayout>
</template>