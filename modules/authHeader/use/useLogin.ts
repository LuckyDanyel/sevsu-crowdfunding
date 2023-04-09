import { useAuthUser } from '@src/store';
import { useNotification } from "@kyvg/vue3-notification";
import { getUser } from '@/src/api/user';
import { loginUser } from '../api';
import { TloginData } from '../types'

export default function() {
    const authUserSotre = useAuthUser();

    const { notify }  = useNotification();

    const loadingLoginUser = ref(false);

    const loginAuth = async (loginData: TloginData) => {
        try {
            loadingLoginUser.value = true;
            const { access, refresh } = await loginUser(loginData);
            const data = await getUser(access, refresh);
            if(data) {
                const { user, access } = data;
                authUserSotre.setUser({ user, access, refresh })
                useCookie('token_accsess').value = access;
                useCookie('token_refresh').value = refresh;
            }
            notify({
                title: 'Успешная авторизация',
                text: '',
                type: 'success',
                duration: 1000,
            })
        } catch (error: any) {
            notify({
                title: 'Ошибка авторизации',
                text: error,
                type: 'error',
                duration: 1500,
            })
        } finally {
            loadingLoginUser.value = false;
        }
    }

    return {
        loginAuth,
        loadingLoginUser
    }
}