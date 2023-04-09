import { User } from "@src/types";

interface IRole {
    id: number;
    name: string;
    key: 'ADMIN' | 'USER' | '';
}

export default class UserModelAbstract {
    id: User['id'] = '';
    role: IRole = {
        id: 0,
        name: '',
        key: '',
    }
    name: User['name'] = '';
    email: User['email'] = '';
    icon: string = 'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album';
    constructor(dataUser?: User) {
        if(dataUser) {
            const { name, email, id, is_admin } = dataUser;
            this.id = id;
            this.email = email;
            this.name = name;

            this.role = {
                id: 0,
                name: is_admin ? 'Администратор' : 'Пользователь',
                key: is_admin ? 'ADMIN' : 'USER',
            }
        }
    }
}