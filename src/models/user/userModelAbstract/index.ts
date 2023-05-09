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
    icon: string = '';
    constructor(dataUser?: IUser) {
        if(dataUser) {
            const { name, email, id, is_admin, created_at, icon } = dataUser;
            this.id = id;
            this.email = email;
            this.name = name;
            this.icon = icon;
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