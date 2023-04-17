import { basicUrl, tokenType } from "@/src/api/constants";

export const changeRole = async (options: { idUser: string, token: string, isAdmin: boolean }) => {
    const url = `${basicUrl}api/v1/accounts/user_status/${options.idUser}/`

    const request = {
        is_admin: options.isAdmin,
    }
    try {
        const response = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${tokenType} ${options.token}`,
            }
        })
        if(response.status > 400) {
            throw new Error();
        }
    } catch (error) {
        throw error;
    }
}