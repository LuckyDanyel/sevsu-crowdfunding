import { User } from "@src/types";

export default class UserModelAbstract {
    id: User['id'] = 0;
    role: User['role'] = {
        id: 0,
        name: "",
        key: ""
    };
    name: User['name'] = '';
    email: User['email'] = '';
    icon: User['icon'] = '';
    constructor(dataUser?: User) {
        if(dataUser) {
            const { role, name, email, icon, id } = dataUser;
            this.id = id;
            this.role = role;
            this.email = email;
            this.icon = icon;
            this.name = name;
        }
    }
}