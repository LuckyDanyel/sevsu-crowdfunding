<script lang="ts" setup>
import UserMenu from '/components/user/userMenu/UserMenuWrapper.vue';
import useLogoutUser from '@src/use/useLogoutUser';

    definePageMeta({
        middleware: ['authorization', 'admin']
    })
    useLogoutUser();
</script>

<template>
    <NuxtLayout name="white-layout-center">
        <template #header-right>
           <user-menu></user-menu>
        </template>
        <user-projects />
    </NuxtLayout>
</template>