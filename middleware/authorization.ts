import { useAuthUser } from '@/store/authUser';

export default defineNuxtRouteMiddleware( async (to, from) => {
    const authUser = useAuthUser();
    if(authUser.isLogged) {
        console.log('isLogged');
    }
})