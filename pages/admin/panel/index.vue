<script lang="ts" setup>
import UserMenu from '/components/user/userMenu/UserMenuWrapper.vue';
import useLogoutUser from '@src/use/useLogoutUser';
import Admin from './modules/pages/admin/Admin.vue';

    definePageMeta({
        middleware: ['authorization', 'admin']
    })
    useLogoutUser();
</script>

<template>
    <NuxtLayout name="white-layout">
        <template #header-right>
           <user-menu></user-menu>
        </template>
        <ClientOnly>
            <admin></admin>
        </ClientOnly>
    </NuxtLayout>
</template>