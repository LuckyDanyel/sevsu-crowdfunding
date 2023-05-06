import { IReponseTokens } from '@/src/types';
import { basicUrl, tokenType, localNetworkUrl } from '@src/api/constants';
import { IUser } from '@/src/models/user/userModelAbstract/types';

export const getLikesProjectUser = async function(token: string): Promise<IUser> {
    const url = `${basicUrl}/api/user/likes`;

    const data = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `${tokenType} ${token}`,
        },
    });
    return data.json();
}
export const refreshTokenOnActual = async function(token: string, isLocalNetwork = false): Promise<Partial<IReponseTokens>> {
    const url = `${isLocalNetwork ? localNetworkUrl : basicUrl}api/v1/accounts/token/refresh/`;
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

export const checkTokenActual = async function(token: string, isLocalNetwork = false): Promise<Boolean> {
    const url = `${isLocalNetwork ? localNetworkUrl : basicUrl}api/v1/accounts/token/verify/`;
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


export const getUser = async function(token: string | null, refreshToken: string | null, isLocalNetwork = false): Promise<{ user: IUser, access: string } | null> {
    if(!(token && refreshToken)) return null;
    
    try {

        const isTokenActual = await checkTokenActual(token, isLocalNetwork);
        let currentToken = token;

        if(!isTokenActual) {
            const { access } = await refreshTokenOnActual(refreshToken, isLocalNetwork);
            currentToken = access!;
        } 

        const url = `${isLocalNetwork ? localNetworkUrl : basicUrl}api/v1/accounts/retrieve_user/`;
        const data = await fetch(url, {
            method: 'GET',
            headers: {
                authorization: `${tokenType} ${currentToken}`,
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