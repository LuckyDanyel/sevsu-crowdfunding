<script lang="ts" setup>
import { PropType, ref } from 'vue';
import { useAuthUser } from '@/store/authUser';
import { registrUser, loginUser } from '@/api';
import AuthHeaderLogin from './AuthHeaderLogin.vue';
import AuthHeaderRegistr from './AuthHeaderRegistr.vue';
import { TloginData, TregistrData } from '../types'


    const authUserSotre = useAuthUser();

    const { typeLogic } = defineProps({
        typeLogic: {
            type:  String as PropType<'login' | 'registr' | 'email'>,
            default: 'login',
        }
    })

    const login = async (loginData: TloginData) => {
        const { accessToken } = await loginUser(loginData);
        const token = useCookie('token');
        token.value = accessToken;
        authUserSotre.getUserByToken(unref(token));
    }

    const registr = async (registrData: TregistrData) => {
        const data = await registrUser(registrData);
        console.log(data);
    }

</script>

<template>
    <div class="auth-header-logic">
        <auth-header-login 
            v-if="typeLogic === 'login'"
            @registr="() => typeLogic = 'registr'"
            @login="login"
        ></auth-header-login>
        <auth-header-registr  
            v-if="typeLogic === 'registr'"
            @login="() => typeLogic = 'login'"
            @registr="registr"
        ></auth-header-registr>
    </div>
</template>