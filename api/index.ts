import { TloginData, TregistrData } from '@/components/auth/authHeader/types';
const basicUrl = 'http://localhost:8080';

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

export const loginUser = async function(userLogin: TloginData): Promise<TResponse> {
    const url = `${basicUrl}/api/auth/signin`;

    const request = {
        username: userLogin.email,
        password: userLogin.password,
    }

    const data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
    });
    return data.json();
}

export const registrUser = async function(userRegistr: TregistrData): Promise<TResponse> {
    const url = `${basicUrl}/api/auth/signup`;

    const request = {
        username: userRegistr.name,
        email: userRegistr.email,
        password: userRegistr.password,
        role: ['admin']
    }

    const data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
    });
    return data.json();
}

export const getUser = async function(token: string): Promise<TUser> {
    const url = `${basicUrl}/api/test/user`;
    const request = {}
    console.log('tut', token);

    const data = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `${tokenType} ${token}`,
        },
    });
    return data.json();
}
