import { unref } from 'vue';

import { defineStore } from "pinia";
import { User } from '@/types';
import { getUser } from '@/api';
import UserData from './data/UserData';

export interface StateUser {
    user: User,
}

export const useAuthUser = defineStore({
    id: 'auth-user',
    state: () : StateUser => {
        return {
            user: {
                role: {
                    id: 0,
                    name: '',
                    key: '',
                },
                name: '',
                email: '',
                icon: 'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
            },
        }
    },
    actions: {
        async getUserByToken(token: string): Promise<void> {
            const adapt = {
                'ROLE_ADMIN': 'ADMIN',
            };
            if(unref(token)) {
                const data = await getUser(token);
                this.user.name = data.username,
                this.user.email = data.email;
                if(data?.authorities) {
                    this.user.role.key = adapt[data?.authorities[0]?.authority];
                }
            }
        }
    },
    getters: {
        isLogged(): boolean {
            return !!this.user.email;
        }
    }
})