import { useAuthUser } from '@src/store';
import { getUser } from '@src/api/user';
import { unref } from 'vue';


export default defineNuxtRouteMiddleware( async (context) => {
    if(process.server) {
        const token = useCookie('token_accsess');
        const tokenRefresh = useCookie('token_refresh');
        const authUser = useAuthUser();
        if(unref(token) && unref(tokenRefresh)) {
            try {
                const data = await getUser(unref(token)!, unref(tokenRefresh)!, true);
                if(data) {
                    const { user, access } = data;
                    authUser.setUser({ user, access, refresh: unref(tokenRefresh)! });
                    token.value = access;
                }
            } catch (error) {
                token.value = '';
                tokenRefresh.value = '';
            }
        }
    }
})