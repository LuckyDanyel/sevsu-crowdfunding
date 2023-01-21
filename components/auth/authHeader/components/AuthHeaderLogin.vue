<script lang="ts">
import { ref, unref } from 'vue';
import BasicButtom from '@/components/basic/BasicButton.vue';
import InputCommon from '@/components/inputs/InputCommon.vue';
import BasicIcon from '@/components/basic/icon/BasicIcon.vue';
import BasicText from '@/components/basic/BasicText.vue'
import AuthHeaderItem from './AuthHeaderItem.vue';
import AuthBlock from './AuthBlock.vue';
import { TloginData } from '../types';

    export default {
        components: {
            AuthBlock,
            BasicButtom,
            InputCommon,
            BasicIcon,
            BasicText,            
        },
        setup(porps, { emit }) {
            const inputEmail = ref('');
            const inputPassword = ref('');

            const login = () => {
                const user: TloginData = {
                    email: unref(inputEmail),
                    password: unref(inputPassword),
                }
                emit('login', user);
            }

            return {
                inputEmail,
                inputPassword,
                login,
            }
        }
    }

</script>

<template>
    <div class="auth-header-login">
        <auth-block>
            <template #label> Вход </template>
            <template #content-up>
                <auth-header-item>
                    <input-common placeholder='Email' v-model="inputEmail">
                        <template #icon> <basic-icon type-icon='email' size='medium'></basic-icon> </template>
                    </input-common>
                </auth-header-item>
                <auth-header-item>
                    <input-common placeholder='Пароль' type-input="hide" v-model="inputPassword"
                    >
                        <template #icon> <basic-icon type-icon='lock' size='medium'></basic-icon> </template>
                    </input-common>
                </auth-header-item>
                <basic-buttom @click="login"> Войти </basic-buttom>
            </template>
            <template #content-down>
                <auth-header-item>
                    <basic-buttom :reverse="true" @click="() => $emit('registr')"> Регистрация </basic-buttom>
                    <template #text> Еще нет аккаунта? </template>
                </auth-header-item>
            </template>
        </auth-block>
    </div>
</template>