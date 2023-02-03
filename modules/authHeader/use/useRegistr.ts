import { ref } from 'vue';
import { registrUser } from '../api';
import { useNotification } from "@kyvg/vue3-notification";
import { TregistrData } from '../types'

export default function() {

    const { notify } = useNotification();
    const registrFinished = ref(false);


    const registr = async (registrData: TregistrData) => {
        try {
            registrFinished.value = false;
            const data = await registrUser(registrData);
            registrFinished.value = true;
        } catch (error: any) {
            notify({
                title: 'Ошибка регистрации',
                text: error,
                type: 'error',
            });
        }
    }

    return {
        registrFinished,
        registr,
    }
}
