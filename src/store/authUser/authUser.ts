import { defineStore } from "pinia";
import { basicUrl, tokenType } from "~~/src/api/constants";
import { UserModelAbstract } from '@models/user';
import { User } from '@/src/types';
import { ApiUser } from "@/src/api/user";

export interface StateUser {
    user: UserModelAbstract,
    likesProjectByUser: string[],
    token: string;
    refreshToken: string;
    loadingUserLikes: boolean,
}

const defaultUser = (): User => ({
    id: '',
    role: {
        id: 0,
        name: '',
        key: '',
    },
    name: '',
    email: '',
})

export const useAuthUser = defineStore({
    id: 'auth-user',
    state: () : StateUser => {
        return {
            user: new UserModelAbstract(defaultUser()),
            likesProjectByUser: [],
            loadingUserLikes: false,
            token: '',
            refreshToken: '',
        }
    },
    actions: {
        setUser(optionsUser: { user: ApiUser, access: string, refresh: string }) {
            const { user, access, refresh } = optionsUser;
            const { email, is_admin, name, id } = user; 
            this.user = new UserModelAbstract({ name, email, role: { id: 0, key: is_admin ? 'ADMIN' : 'USER' , name: is_admin ? 'Администратор' : 'Пользователь'} } as any);
            this.token = access;
            this.refreshToken = refresh;
        },
        setLoadingLikes(loading: boolean) {
            this.loadingUserLikes = loading;
        },
        async getUserLikesProject(): Promise<void> {
            const url = `${basicUrl}api/v1/project_management/liked-by-user/`
            try {
                const reponse = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': `${tokenType} ${this.token}`,
                    }
                })
                const likes = await reponse.json();
                console.log(likes);
                this.likesProjectByUser = likes;
            } catch (error) {
                
            }
        },
        setDefaultState() {
            this.user = new UserModelAbstract(defaultUser());
            this.token = '';
            this.refreshToken = '';
            this.likesProjectByUser = [];
        }
    },
    getters: {
        isLogged(): boolean {
            return !!this.token;
        },
    }
})