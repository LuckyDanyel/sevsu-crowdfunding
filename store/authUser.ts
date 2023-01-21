import { unref } from 'vue';

import { defineStore } from "pinia";
import { User } from '@/types';
import UserData from './data/UserData';

export interface StateUser {
    user: User,
    token: string;
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
                icon: '',
            },
            token: '',
        }
    },
    actions: {
        async getUserByToken(): Promise<User> {
            const token = useCookie('token');
            this.user = UserData;
        }
    },
    getters: {
        isLogged(): boolean {
            return !!this.user.email;
        }
    }
})