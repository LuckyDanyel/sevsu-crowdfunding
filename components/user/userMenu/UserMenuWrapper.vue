<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useAuthUser } from '@src/store';
import UserMenu from './UserMenu.vue';

const { setDefaultState } = useAuthUser();
const { isLogged, user } = storeToRefs(useAuthUser());

const goToProject = async () => {
    await navigateTo({ path: '/user/projects' });
}

const goToAdminPanel = () => {
    window.location.href='/admin/panel';
}

</script> 

<template>
    <div class="user-menu-wrapper">
        <user-menu
            v-if="isLogged" 
            :user="user"
            @logout="setDefaultState"
            @projects="goToProject"
            @panel="goToAdminPanel"
        />
    </div>
</template>