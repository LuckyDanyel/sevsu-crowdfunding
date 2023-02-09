import { storeToRefs } from "pinia";
import { useAuthUser } from "../store";

export default function() {
    const { isLogged } = storeToRefs(useAuthUser());

    watch(isLogged, (value) => {
        if(!value) {
            navigateTo('/');
        }
    });
}