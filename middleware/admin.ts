import { useAuthUser } from '@src/store';

export default defineNuxtRouteMiddleware( async (to, from) => {
    const { user } = useAuthUser();
    if(user.role.key !== 'ADMIN') {
        await navigateTo('/');
    }
})