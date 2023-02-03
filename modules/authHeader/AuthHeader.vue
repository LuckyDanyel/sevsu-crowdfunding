<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { BasicText, BasicModal } from 'UI';
import { useAuthUser } from '@src/store';
import UserMenu from '@/components/user/userMenu/UserMenu.vue';
import AuthHeaderLogic from './components/AuthHeaderLogic.vue';

const { setDefaultState } = useAuthUser();
const { isLogged, user } = storeToRefs(useAuthUser());

</script> 

<template>
    <div class="auth-header">
        <user-menu
            v-if="isLogged" 
            :user="user"
            @logout="setDefaultState"
            @projects="() => navigateTo('/user/projects')"
        />
        <basic-modal v-else>
            <template #button>
                <basic-text
                    size="medium-large" 
                    font="semi-bold" 
                    class="auth-header__text-enter"
                > Вход </basic-text>
            </template>
            <auth-header-logic></auth-header-logic>
        </basic-modal>
    </div>
</template>

<style lang="scss" scoped>
    .auth-header {
        &__text-enter {
            cursor: pointer;
            color: var(--color-main-type-1);
        }
    }
</style>