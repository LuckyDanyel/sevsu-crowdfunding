<script lang="ts" setup>
import UserMenu from '/components/user/userMenu/UserMenuWrapper.vue';
import useLogoutUser from '@src/use/useLogoutUser';
import useRedirectUserByUpdate from '../use/useRedirectUserByUpdate';
import EditProject from './module/components/EditProject.vue';

    const { query } = useRoute();
    const projectId = String(query.id);
    if(!projectId) {
        window.location.href = '/';
    }

    definePageMeta({
        middleware: ['authorization']
    })
    useSeoMeta({
        title: 'Редактирование проекта'
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
            <edit-project
                :id-project="projectId"
            ></edit-project>
        </ClientOnly>
    </NuxtLayout>
</template>