import { useAuthUser } from '@src/store';
import { useNotification } from "@kyvg/vue3-notification";
import { loginUser } from '../api';
import { TloginData } from '../types'

export default function() {
    const authUserSotre = useAuthUser();

    const { notify }  = useNotification();

    const emailConfirmByLogin = ref(false);

    const loginAuth = async (loginData: TloginData) => {
        try {
            emailConfirmByLogin.value = false;
            const { accessToken, confirmEmail } = await loginUser(loginData);
            if(confirmEmail || true) {
                emailConfirmByLogin.value = true;
                const token = useCookie('token');
                token.value = accessToken;
                await authUserSotre.getUserByToken(accessToken);  
                notify({
                    title: 'Успешная авторизация',
                    text: '',
                    type: 'success',
                    duration: 1000,
                })
            }
        } catch (error: any) {
            notify({
                title: 'Ошибка авторизации',
                text: error,
                type: 'error',
                duration: 1500,
            })
        }
    }

    return {
        emailConfirmByLogin,
        loginAuth,
    }
}