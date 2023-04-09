import { IReponseTokens } from '@/src/types';
import { basicUrl, tokenType } from '@src/api/constants';

export type ApiUser = {
    name: string,
    email: string,
    is_admin: boolean;
    id: string;
}


export const getLikesProjectUser = async function(token: string): Promise<ApiUser> {
    const url = `${basicUrl}/api/user/likes`;

    const data = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `${tokenType} ${token}`,
        },
    });
    return data.json();
}
export const refreshTokenOnActual = async function(token: string): Promise<Partial<IReponseTokens>> {
    const url = `${basicUrl}api/v1/accounts/token/refresh/`;
    const request = { 
        refresh: token,
    }
    try {
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });
        if(!data.ok) throw new Error();
        return data.json();   
    } catch (error) {
        throw error;
    }
}

export const checkTokenActual = async function(token: string): Promise<Boolean> {
    const url = `${basicUrl}api/v1/accounts/token/verify/`;
    const request = {
        token,
    }
    try {
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });
        return data.ok;   
    } catch (error) {
        return false;
    }
}


export const getUser = async function(token: string | null, refreshToken: string | null): Promise<{ user: ApiUser, access: string } | null> {
    if(!(token && refreshToken)) return null;
    
    try {

        const isTokenActual = await checkTokenActual(token);
        let currentToken = token;

        if(!isTokenActual) {
            const { access } = await refreshTokenOnActual(refreshToken);
            currentToken = access!;
        } 

        const url = `${basicUrl}api/v1/accounts/retrieve_user/`;
        const data = await fetch(url, {
            method: 'GET',
            headers: {
                authorization: `${tokenType} ${currentToken}`,
                "ngrok-skip-browser-warning": true,
            },
        });
        if(!data.ok) {
            throw new Error();
        }
        const dataUser = await data.json();
        return {
            user: dataUser,
            access: currentToken,
        };   
    } catch (error) {
        throw error;
    }
}