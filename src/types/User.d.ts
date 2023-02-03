export interface User {
    id: number;
    role: {
        id: number,
        name: string,
        key: string,
    }
    name: string;
    email: string;
    icon: string;
}