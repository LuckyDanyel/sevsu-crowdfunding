import { useAuthUser } from '@src/store';

export default defineNuxtRouteMiddleware( async (to, from) => {
    const authUser = useAuthUser();
    if(!authUser.isLogged) {
        await navigateTo('/projects');
    }
})