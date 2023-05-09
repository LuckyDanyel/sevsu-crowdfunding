import { storeToRefs } from 'pinia';
import { useUserProjectsStore } from '../store/userProjectStore';


export default function () {

    const { categories } = storeToRefs(useUserProjectsStore());

    if(!unref(categories).length) {
        navigateTo('/user/projects');
    }

}