import { basicUrl } from '@src/api/constants';

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
