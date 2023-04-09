
export interface User {
    id: string;
    role: {
        id: number,
        name: string,
        key: 'ADMIN' | 'USER' | '',
    };
    is_admin: boolean;
    name: string;
    email: string;
}

export interface IReponseTokens {
    access: string;
    refresh: string;
};