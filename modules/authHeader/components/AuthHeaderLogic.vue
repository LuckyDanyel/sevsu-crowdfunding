<script lang="ts" setup>
import { PropType, ref, watch } from 'vue';
import { useNotification } from "@kyvg/vue3-notification";
import AuthHeaderLogin from './AuthHeaderLogin.vue';
import AuthHeaderRegistr from './AuthHeaderRegistr.vue';
import useEmailConfirm from '../use/useEmailConfirm';
import useLogin from '../use/useLogin';
import useRegistr from '../use/useRegistr';


    const { logic } = defineProps({
        logic: {
            type:  String as PropType<'login' | 'registr' | 'reset-password'>,
            default: 'login',
        }
    });
    const typeLogic = ref(logic);

    const { notify } = useNotification();

    const { loginAuth, loadingLoginUser } = useLogin();
    const { registr, loadingRegistr } = useRegistr();

</script>

<template>
    <div class="auth-header-logic">

        <auth-header-login
            :loading="loadingLoginUser"
            v-show="typeLogic === 'login'"
            @registr="() => typeLogic = 'registr'"
            @login="loginAuth"
        ></auth-header-login>

        <auth-header-registr
            :loading="loadingRegistr"
            v-show="typeLogic === 'registr'"  
            @login="() => typeLogic = 'login'"
            @registr="registr"
        ></auth-header-registr>
    </div>
</template>