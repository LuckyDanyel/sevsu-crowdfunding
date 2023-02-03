import { TloginData, TregistrData } from '@/components/auth/authHeader/types';
import { basicUrl } from './constants';

type TResponse = {
    tokenType: 'Bearer',
    accessToken: string,
}

type TUser = {
    username: string,
    email: string,
    authorities: [
        {
            authority: 'ROLE_ADMIN',
        }
    ]
}

const tokenType = 'Bearer';

const validateData = (dataObject: Object) => {
    const leneth = Object.entries(dataObject).length;
    let count = 0;
    for(let key in dataObject) {
        const value = dataObject[key];
        if(value) {
            count++;
        }
    }
    return leneth === count;
}

export const loginUser = async function(userLogin: TloginData): Promise<any>{
    if(!validateData(userLogin)) throw 'Пустые даныне';

    const url = `${basicUrl}/api/auth/signin`;

    const request = {
        username: userLogin.email,
        password: userLogin.password,
    }
    try {
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });
        const parseData = await data.json();
        const { status, error } = parseData;
        if(status > 301) {
            throw error;
        }
        return parseData;
    } catch (error) {
        throw error;
    }
}

export const registrUser = async function(userRegistr: TregistrData): Promise<any> {
    if(!validateData(userRegistr)) throw 'Пустые даныне';

    const url = `${basicUrl}/api/auth/signup`;

    const request = {
        username: userRegistr.email,
        email: userRegistr.email,
        password: userRegistr.password,
        role: ['admin']
    }

    try {
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });
        const parseData = await data.json();
        const { status, error } = parseData;
        if(status > 301) {
            throw error;
        }
        return parseData;
    } catch (error) {
        throw error;
    }
}

export const getLikesProjectUser = async function(token: string): Promise<TUser> {
    const url = `${basicUrl}/api/user/likes`;

    const data = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `${tokenType} ${token}`,
        },
    });
    return data.json();
}


export const getUser = async function(token: string): Promise<TUser> {
    const url = `${basicUrl}/api/test/user`;

    const data = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `${tokenType} ${token}`,
        },
    });
    return data.json();
}
