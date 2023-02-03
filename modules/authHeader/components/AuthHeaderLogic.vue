<script lang="ts" setup>
import { PropType, ref, watch } from 'vue';
import { useNotification } from "@kyvg/vue3-notification";
import AuthHeaderLogin from './AuthHeaderLogin.vue';
import AuthHeaderRegistr from './AuthHeaderRegistr.vue';
import AuthConfirmEmail from './AuthConfirmEmail.vue';
import useEmailConfirm from '../use/useEmailConfirm';
import useLogin from '../use/useLogin';
import useRegistr from '../use/useRegistr';


    const { logic } = defineProps({
        logic: {
            type:  String as PropType<'login' | 'registr' | 'email'>,
            default: 'login',
        }
    });

    const { notify } = useNotification();

    const typeLogic = ref(logic);

    const { loginAuth, emailConfirmByLogin } = useLogin();
    const { registr, registrFinished } = useRegistr();
    const { emailConfirm, emailFinished } = useEmailConfirm();

    watch(emailConfirmByLogin, (value) => {
        if(!value) {
            notify({
                title: 'Не подвержденынй Email!',
                text: 'Для авторизации требуется подтвердить Email',
                type: 'warn',
                duration: 3000,
            });
            typeLogic.value = 'email';
        }
    });

    watch(registrFinished, (value) => {
        if(value) {
            notify({
                title: 'Подтвреждение Email',
                text: 'На ваш email был отправлен код!',
                type: 'warn',
                duration: 3000,
            });
            typeLogic.value = 'email';
        }
    });
    watch(emailFinished, (value) => {
        if(value) {
            notify({
                title: 'Email подтвержден!',
                text: 'Теперь вы можете авторизоваться',
                type: 'success',
                duration: 2000,
            });
            typeLogic.value = 'login';
        }
    });

</script>

<template>
    <div class="auth-header-logic">

        <auth-confirm-email
            v-show="typeLogic === 'email'"
            @sendCode="emailConfirm"
        >
        </auth-confirm-email>

        <auth-header-login
            v-show="typeLogic === 'login'"
            @registr="() => typeLogic = 'registr'"
            @login="loginAuth"
        ></auth-header-login>

        <auth-header-registr  
            v-show="typeLogic === 'registr'"
            @login="() => typeLogic = 'login'"
            @registr="registr"
        ></auth-header-registr>
    </div>
</template>