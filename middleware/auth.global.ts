import { useAuthUser } from '@/store/authUser';
import { unref } from 'vue';


export default defineNuxtRouteMiddleware( async (to, from) => {
    if(process.server) {
        const token = useCookie('token');
        if(unref(token)) {
            const authUser = useAuthUser();
            await authUser.getUserByToken(unref(token));
        }
    }
})