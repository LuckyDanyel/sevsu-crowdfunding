import { IProject } from '@/components/project/types';
import { categories } from './categories';;
import { text } from './text';

const data: IProject = {
    id: 1,
    title: 'Работа бесплатно без СМС',
    categories: categories,
    likes: 7001,
    takenLikes: 5001,
    views: 200,
    shortText: 'Практический опыт показывает, что курс на социально-ориентированный национальный проект влечет за собой процесс внедрения и модернизации дальнейших направлений развития проекта! Дорогие друзья.',
    startProject: '25.12.2022',
    endProject: '28.05.2023',
    description: text,
    author: {
        role: {
            id: 1,
            name: 'Пользователь',
            key: 'ADMIN',
        },
        name: 'Терещенков Даниил',
        email: 'tere000@mail.ru',
        icon: 'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
        projects: 20,
    },
    images: [
        'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
        'https://sun9-5.userapi.com/impf/c845324/v845324957/9be13/P7yJ5rkJFCs.jpg?size=960x960&quality=96&sign=1f51756b56c43eb8c292885a49dda790&type=album',
        'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
        'https://sun9-5.userapi.com/impf/c845324/v845324957/9be13/P7yJ5rkJFCs.jpg?size=960x960&quality=96&sign=1f51756b56c43eb8c292885a49dda790&type=album',
        'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
        'https://sun9-5.userapi.com/impf/c845324/v845324957/9be13/P7yJ5rkJFCs.jpg?size=960x960&quality=96&sign=1f51756b56c43eb8c292885a49dda790&type=album',
        'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
        'https://sun9-5.userapi.com/impf/c845324/v845324957/9be13/P7yJ5rkJFCs.jpg?size=960x960&quality=96&sign=1f51756b56c43eb8c292885a49dda790&type=album',
        'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
        'https://sun9-5.userapi.com/impf/c845324/v845324957/9be13/P7yJ5rkJFCs.jpg?size=960x960&quality=96&sign=1f51756b56c43eb8c292885a49dda790&type=album',
        'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
        'https://sun9-5.userapi.com/impf/c845324/v845324957/9be13/P7yJ5rkJFCs.jpg?size=960x960&quality=96&sign=1f51756b56c43eb8c292885a49dda790&type=album',
        'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
        'https://sun9-5.userapi.com/impf/c845324/v845324957/9be13/P7yJ5rkJFCs.jpg?size=960x960&quality=96&sign=1f51756b56c43eb8c292885a49dda790&type=album',
        'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
        'https://sun9-5.userapi.com/impf/c845324/v845324957/9be13/P7yJ5rkJFCs.jpg?size=960x960&quality=96&sign=1f51756b56c43eb8c292885a49dda790&type=album',
        'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
        'https://sun9-5.userapi.com/impf/c845324/v845324957/9be13/P7yJ5rkJFCs.jpg?size=960x960&quality=96&sign=1f51756b56c43eb8c292885a49dda790&type=album',
        'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
        'https://sun9-5.userapi.com/impf/c845324/v845324957/9be13/P7yJ5rkJFCs.jpg?size=960x960&quality=96&sign=1f51756b56c43eb8c292885a49dda790&type=album',
        'https://sun9-81.userapi.com/impg/c858124/v858124241/18e353/tFXR9oY5K4M.jpg?size=1080x1080&quality=96&sign=e0e8916b63f5b81a04a79a850f950db2&type=album',
        'https://sun9-5.userapi.com/impf/c845324/v845324957/9be13/P7yJ5rkJFCs.jpg?size=960x960&quality=96&sign=1f51756b56c43eb8c292885a49dda790&type=album',
    ]
}

export default data;