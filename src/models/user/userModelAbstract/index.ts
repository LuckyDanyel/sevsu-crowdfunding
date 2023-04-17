import { parse, format } from 'date-fns';
import { IUser } from './types';

interface IRole {
    id: number;
    name: string;
    key: 'ADMIN' | 'USER' | '';
}

export default class UserModelAbstract {
    id: IUser['id'] = '';
    role: IRole = {
        id: 0,
        name: '',
        key: '',
    }
    name: IUser['name'] = '';
    email: IUser['email'] = '';
    isAdmin: boolean = false;
    dateCreatedUser: Date = new Date();
    icon: string = 'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album';
    constructor(dataUser?: IUser) {
        if(dataUser) {
            const { name, email, id, is_admin, created_at } = dataUser;
            this.id = id;
            this.email = email;
            this.name = name;
            this.dateCreatedUser = parse(created_at, 'yyyy-MM-dd', new Date());
            this.setUserRole(is_admin);
        }
    }

    setUserRole(isAdmin: boolean) {
        this.role = {
            id: 0,
            name: isAdmin ? 'Администратор' : 'Пользователь',
            key: isAdmin ? 'ADMIN' : 'USER',
        }
        this.isAdmin = isAdmin;
    }

    get dateCreatedUserText(): string {
        return format(this.dateCreatedUser, 'dd.MM.yyyy');
    }
}