import { basicUrl, tokenType } from "@/src/api/constants";
import { IUser } from "@/src/models/user/userModelAbstract/types";

export const getUserByAdmin = async (token: string, email: string): Promise<IUser[]> => {
    const url = `${basicUrl}api/v1/accounts/users/?email=${email}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${tokenType} ${token}`,
            }
        })
        return response.json();
    } catch (error) {
        throw error;
    }
}