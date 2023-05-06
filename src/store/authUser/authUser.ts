import { defineStore } from "pinia";
import { basicUrl, tokenType } from "~~/src/api/constants";
import { UserModelAbstract } from '@models/user';
import { IUser } from "@/src/models/user/userModelAbstract/types";

export interface StateUser {
    user: UserModelAbstract,
    likesProjectByUser: string[],
    token: string;
    refreshToken: string;
    loadingUserLikes: boolean,
}

const defaultUser = (): IUser => ({
    id: '',
    is_admin: false,
    name: '',
    email: '',
    icon: '',
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
        setUser(optionsUser: { user: IUser, access: string, refresh: string }) {
            const { user, access, refresh } = optionsUser;
            const { email, is_admin, name, id } = user; 
            this.user = new UserModelAbstract(user);
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
                if(reponse.status < 400) {
                    const likes = await reponse.json();
                    this.likesProjectByUser = likes;
                }
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