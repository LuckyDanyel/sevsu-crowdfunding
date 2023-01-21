<script lang="ts">
import { ref, unref } from 'vue';
import BasicButtom from '@/components/basic/BasicButton.vue';
import InputCommon from '@/components/inputs/InputCommon.vue';
import BasicIcon from '@/components/basic/icon/BasicIcon.vue';
import BasicText from '@/components/basic/BasicText.vue'
import AuthHeaderItem from './AuthHeaderItem.vue';
import AuthBlock from './AuthBlock.vue';
import { TregistrData } from '../types';

    export default {
        components: {
            AuthBlock,
            BasicButtom,
            InputCommon,
            BasicIcon,
            BasicText,            
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
                        <template #icon> <basic-icon type-icon='profile' size='medium'></basic-icon> </template>
                    </input-common>
                </auth-header-item>
                <auth-header-item>
                    <input-common placeholder='Фамилия' v-model="inputSecondName">
                        <template #icon> <basic-icon type-icon='profile' size='medium'></basic-icon> </template>
                    </input-common>
                </auth-header-item>
                <auth-header-item>
                    <input-common placeholder='Email' v-model="inputEmail">
                        <template #icon> <basic-icon type-icon='email' size='medium'></basic-icon> </template>
                    </input-common>
                </auth-header-item>
                <auth-header-item>
                    <input-common placeholder='Новый пароль' type-input="hide" v-model="inputPassword"
                    >
                        <template #icon> <basic-icon type-icon='lock' size='medium'></basic-icon> </template>
                    </input-common>
                </auth-header-item>
                <auth-header-item>
                    <input-common placeholder='Новый пароль еще раз' type-input="hide" v-model="inputPasswordRepeat"
                    >
                        <template #icon> <basic-icon type-icon='lock' size='medium'></basic-icon> </template>
                    </input-common>
                </auth-header-item>
                <basic-buttom @click="registr"> Зарегистрироваться </basic-buttom>
            </template>
            <template #content-down>
                <auth-header-item>
                    <basic-buttom :reverse="true" @click="() => $emit('login')"> Авторизоваться </basic-buttom>
                    <template #text> Уже есть аккаунт? </template>
                </auth-header-item>
            </template>
            
        </auth-block>
    </div>
</template>