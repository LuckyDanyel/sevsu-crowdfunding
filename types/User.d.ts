export interface User {
    role: {
        id: number,
        name: string,
        key: string,
    }
    name: string;
    email: string;
    icon: string;
}