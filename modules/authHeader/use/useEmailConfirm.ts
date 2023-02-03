import { ref } from 'vue';
import { useNotification } from "@kyvg/vue3-notification";
import { TregistrData } from '../types'

export default function() {

    const { notify } = useNotification();
    const emailFinished = ref(false);


    const emailConfirm = async (registrData: TregistrData) => {
        try {
            emailFinished.value = false;
            emailFinished.value = true;
        } catch (error: any) {
            notify({
                title: 'Ошибка Подтверждения',
                text: error,
                type: 'error',
            })   
        }
    }

    return {
        emailConfirm,
        emailFinished,
    }
}
