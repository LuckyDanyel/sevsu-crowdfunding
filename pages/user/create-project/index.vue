<script lang="ts" setup>
import useLogoutUser from '@src/use/useLogoutUser';
import UserMenu from '/components/user/userMenu/UserMenuWrapper.vue';
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
        <div class="user-create-project">
            <h1> create project </h1>
        </div>
    </NuxtLayout>
</template>