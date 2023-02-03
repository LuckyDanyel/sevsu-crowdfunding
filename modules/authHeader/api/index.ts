import { TloginData, TregistrData } from '../types';
import { basicUrl } from '@src/api/constants';

export const loginUser = async function(userLogin: TloginData): Promise<any>{

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