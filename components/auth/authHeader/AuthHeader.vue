<script lang="ts" setup>
import { PropType, ref } from 'vue';
import BasicText from '@/components/basic/BasicText.vue';
import HeaderCommon from '@/components/header/HeaderCommon.vue';
import { useAuthUser } from '@/store/authUser';
import BasicModal from '@/components/basic/BasicModal.vue';
import AuthHeaderMenu from './components/AuthHeaderMenu.vue';
import AuthHeaderLogic from './components/AuthHeaderLogic.vue';

const authUserSotre = useAuthUser();

const userLogout = async () => {
    const token = useCookie('token');
    token.value = '';
    await navigateTo('/projects');
}

</script>

<template>
    <div class="auth-header">
        <header-common>
            <template #right>
                <auth-header-menu 
                    v-if="authUserSotre.isLogged" 
                    :user="authUserSotre.user"
                    @logout="userLogout"
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
            </template>
        </header-common>
    </div>
</template>

<style lang="scss" scoped>
    .auth-header {
        &__text-enter {
            cursor: pointer;
            color: var(--color-main-type-4);
        }
    }
</style>