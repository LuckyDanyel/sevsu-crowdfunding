import { basicUrl } from '@src/api/constants';
import { IReponseTokens } from '@/src/types';
import { TloginData, TregistrData } from '../types';

export const loginUser = async function(userLogin: TloginData): Promise<IReponseTokens>{

    const url = `${basicUrl}api/v1/accounts/token/`;

    const request = {
        email: userLogin.email,
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
        if(data.status > 400) {
            throw error;
        }
        return parseData;
    } catch (error) {
        throw error;
    }
}

export const registrUser = async function(userRegistr: TregistrData): Promise<any> {

    const url = `${basicUrl}api/v1/accounts/create_user/`;

    const request = {
        name: `${userRegistr.name} ${userRegistr.secondName}`,
        email: userRegistr.email,
        password: userRegistr.password,
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
        console.log(parseData);
        const { status, error } = parseData;
        if(status > 400) {
            throw error;
        }
        return parseData;
    } catch (error) {
        throw error;
    }
}