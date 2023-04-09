<script lang="ts">
import { ref, unref } from 'vue';
import { BasicButton, BasicIcon, BasicText, BasicLoader } from '@/UI';
import InputCommon from '@/components/inputs/InputCommon.vue';
import AuthHeaderItem from './AuthHeaderItem.vue';
import AuthBlock from './AuthBlock.vue';
import { TregistrData } from '../types';

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
            const inputName = ref('');
            const inputSecondName = ref('');
            const inputEmail = ref('');
            const inputPassword = ref('');
            const inputPasswordRepeat = ref('');

            const registr = () => {
                const user: TregistrData = {
                    name: unref(inputName),
                    secondName: unref(inputSecondName),
                    email: unref(inputEmail),
                    password: unref(inputPassword),
                    passwordRepeat: unref(inputPasswordRepeat),
                }
                emit('registr', user);
            }

            return {
                inputName,
                inputSecondName,
                inputEmail,
                inputPassword,
                inputPasswordRepeat,
                registr,
            }
        }
    }

</script>

<template>
    <div class="auth-header-registr">
        <auth-block>
            <template #label> Регистрация </template>
            <template #content-up>
                <auth-header-item>
                    <input-common placeholder='Имя' v-model="inputName">
                        <template #icon> <basic-icon type-icon='profile' /> </template>
                    </input-common>
                </auth-header-item>
                <auth-header-item>
                    <input-common placeholder='Фамилия' v-model="inputSecondName">
                        <template #icon> <basic-icon type-icon='profile' /> </template>
                    </input-common>
                </auth-header-item>
                <auth-header-item>
                    <input-common placeholder='Email' v-model="inputEmail">
                        <template #icon> <basic-icon type-icon='email' /> </template>
                    </input-common>
                </auth-header-item>
                <auth-header-item>
                    <input-common placeholder='Новый пароль' type-input="hide" v-model="inputPassword">
                        <template #icon> <basic-icon type-icon='lock' /> </template>
                    </input-common>
                </auth-header-item>
                <auth-header-item>
                    <input-common placeholder='Новый пароль еще раз' type-input="hide" v-model="inputPasswordRepeat">
                        <template #icon> <basic-icon type-icon='lock' /> </template>
                    </input-common>
                </auth-header-item>
                <basic-button :is-active="false" v-if="loading">
                    <basic-loader :loading="loading"></basic-loader>
                </basic-button>
                <basic-button v-if="!loading" @click="registr"> Зарегистрироваться </basic-button>
            </template>
            <template #content-down>
                <auth-header-item>
                    <basic-button :reverse="true" @click="() => $emit('login')"> Авторизоваться </basic-button>
                    <template #text> Уже есть аккаунт? </template>
                </auth-header-item>
            </template>
        </auth-block>
    </div>
</template>