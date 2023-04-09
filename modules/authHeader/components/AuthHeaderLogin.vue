<script lang="ts">
import { ref, unref } from 'vue';
import { BasicButton, BasicIcon, BasicText, BasicLoader } from 'UI';
import InputCommon from '@/components/inputs/InputCommon.vue';
import AuthHeaderItem from './AuthHeaderItem.vue';
import AuthBlock from './AuthBlock.vue';
import { TloginData } from '../types';

    export default {
        props: {
            loading: {
                type: Boolean,
                default: false,
            }
        },
        components: {
            AuthHeaderItem,
            AuthBlock,
            BasicButton,
            InputCommon,
            BasicIcon,
            BasicText,
            BasicLoader,            
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
                        <template #icon> <basic-icon type-icon='email' /> </template>
                    </input-common>
                </auth-header-item>
                <auth-header-item>
                    <input-common placeholder='Пароль' type-input="hide" v-model="inputPassword"
                    >
                        <template #icon> <basic-icon type-icon='lock' /> </template>
                    </input-common>
                </auth-header-item>
                <basic-button :is-active="false" v-if="loading"> 
                    <basic-loader
                        :loading="loading"
                    ></basic-loader>
                </basic-button>
                <basic-button v-if="!loading" @click="login"> Войти </basic-button>
            </template>
            <template #content-down>
                <auth-header-item>
                    <basic-button :reverse="true" @click="() => $emit('registr')"> Регистрация </basic-button>
                    <template #text> Еще нет аккаунта? </template>
                </auth-header-item>
            </template>
        </auth-block>
    </div>
</template>