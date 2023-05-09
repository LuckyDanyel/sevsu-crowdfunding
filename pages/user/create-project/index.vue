<script lang="ts" setup>
import useLogoutUser from '@src/use/useLogoutUser';
import UserMenu from '/components/user/userMenu/UserMenuWrapper.vue';
import useRedirectUserByUpdate from '../use/useRedirectUserByUpdate';
import CreateProject from './module/components/CreateProject.vue';
    definePageMeta({
        middleware: ['authorization']
    });
    useSeoMeta({
        title: 'Создание проекта'
    })
    useLogoutUser();
    useRedirectUserByUpdate();
</script>

<template>
    <NuxtLayout name="white-layout">
        <template #header-right>
            <user-menu></user-menu>
        </template>
        <div class="user-create-project">
            <create-project></create-project>
        </div>
    </NuxtLayout>
</template>