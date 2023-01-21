import { useAuthUser } from '@/store/authUser';


export default defineNuxtRouteMiddleware( async (to, from) => {
    if(process.server) {
        const authUser = useAuthUser();
        // await authUser.getUserByToken();
    }
})