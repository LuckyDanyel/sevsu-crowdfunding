import { unref } from 'vue';
import { defineStore } from "pinia";
import { UserModelAbstract } from '@models/user';
import { getUser } from './api/index';

export interface StateUser {
    user: UserModelAbstract,
    likesProjectByUser: number[],
    token: string;
}

const defaultUser = () => ({
    id: 0,
    role: {
        id: 0,
        name: '',
        key: '',
    },
    name: '',
    email: '',
    icon: 'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
})

export const useAuthUser = defineStore({
    id: 'auth-user',
    state: () : StateUser => {
        return {
            user: new UserModelAbstract(defaultUser()),
            likesProjectByUser: [],
            token: '',
        }
    },
    actions: {
        async getUserByToken(token: string | undefined | null): Promise<void> {
            const adapt = {
                'ROLE_ADMIN': 'ADMIN',
            };
            if(token) {
                const data = await getUser(token);
                const { username, email } = data;
                this.token = token;
                this.user = new UserModelAbstract({ name: username, email, role: { id: 0, key: adapt[data?.authorities[0]?.authority], name: 'Администратор'}, icon:  defaultUser().icon } as any);
            }
        },
        async getUserLikesProject(): Promise<number[]> {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    this.likesProjectByUser = [1];
                    res(this.likesProjectByUser);
                }, 500);
            })
        },
        setDefaultState() {
            const token = useCookie('token');
            token.value = null;
            this.user = new UserModelAbstract(defaultUser());
            this.token = '';
            this.likesProjectByUser = [];
        }
    },
    getters: {
        isLogged(): boolean {
            return !!this.user.email;
        },
    }
})