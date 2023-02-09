<script lang="ts" setup>
import UserMenu from '/components/user/userMenu/UserMenuWrapper.vue';
import useLogoutUser from '@src/use/useLogoutUser';

    definePageMeta({
        middleware: ['authorization']
    })
    useLogoutUser();
</script>

<template>
    <NuxtLayout name="main-layout">
        <template #header-right>
           <user-menu></user-menu>
        </template>
        <div> edit project </div>
    </NuxtLayout>
</template>