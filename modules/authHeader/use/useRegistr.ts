import { ref } from 'vue';
import { registrUser } from '../api';
import { useNotification } from "@kyvg/vue3-notification";
import { TregistrData } from '../types'

export default function() {

    const { notify } = useNotification();
    const loadingRegistr = ref(false);


    const registr = async (registrData: TregistrData) => {
        try {
            loadingRegistr.value = false;
            const data = await registrUser(registrData);
            notify({
                title: 'Подтвреждение Email',
                text: 'На ваш email был отправлен код!',
                type: 'warn',
                duration: 3000,
            });
        } catch (error: any) {
            notify({
                title: 'Ошибка регистрации',
                text: error,
                type: 'error',
            });
        } finally {
            loadingRegistr.value = true;
        }
    }

    return {
        loadingRegistr,
        registr,
    }
}
