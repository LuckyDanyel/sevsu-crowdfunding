<script lang="ts" setup>
import UserMenu from '/components/user/userMenu/UserMenuWrapper.vue';
import useLogoutUser from '@src/use/useLogoutUser';
import UserProjects from './module/components/UserProjects.vue';

    definePageMeta({
        middleware: ['authorization'],
    })
    useSeoMeta({
        title: 'Мои проекты'
    })
    useLogoutUser();
</script>

<template>
    <NuxtLayout name="white-layout-center">
        <template #header-right>
           <user-menu></user-menu>
        </template>
        <user-projects> </user-projects>
    </NuxtLayout>
</template>