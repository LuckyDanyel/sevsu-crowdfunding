<script lang="ts" setup>
import useLogoutUser from '@src/use/useLogoutUser';
import UserMenu from '/components/user/userMenu/UserMenuWrapper.vue';
import CreateProject from './module/components/CreateProject.vue';
    definePageMeta({
        middleware: ['authorization']
    })
    useLogoutUser();
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