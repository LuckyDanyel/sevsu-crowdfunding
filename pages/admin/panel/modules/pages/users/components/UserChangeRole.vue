<script lang="ts" setup>
import { PropType } from 'vue';
import { BasicButton, BasicModal, RadioButton, BasicText, BasicLoader } from '@/UI';
import { storeToRefs } from 'pinia';
import { useAuthUser } from '@/src/store';
import { UserModelAbstract } from '@/src/models/user';
import { changeRole } from '../api';

const emit = defineEmits(['takenRole']);

    const loadingRole = ref(false);
    const modalRef = ref<any>(null);

    const { token } = storeToRefs(useAuthUser())

    const props = defineProps({
        user: {
            type: Object as PropType<UserModelAbstract>,
            required: true,
        }
    })

    const { user } = toRefs(props);

const takenRole = ref(unref(user).isAdmin ? 1 : 0);

const dataRoles = [
    {
        name: 'Администратор',
        type: 1,
    },
    {
        name: 'Пользователь',
        type: 0,
    },
]
    const clickRoleHandler = async () => {
        try {
            loadingRole.value = true;
            await changeRole({ idUser: unref(user).id, token: unref(token), isAdmin: !!unref(takenRole) })
            emit('takenRole', !!unref(takenRole))
            modalRef.value?.close();
        } catch (error) {
            
        } finally {
            loadingRole.value = false;
        }
    }

</script>

<template>
    <div class="user-change-role">
        <basic-modal
            ref="modalRef"
        >
            <template #button>
                <basic-button class="user-change-role__button"> Сменить роль </basic-button>
            </template>
            <div class="user-change-role__content">
                <div class="user-change-role__heading"> 
                    <basic-text font='bold'> Выберите роль </basic-text>
                </div>

                <radio-button
                    v-for="role in dataRoles"
                    v-model="takenRole"
                    :value="role.type"
                    class="user-change-role__radion-button"
                >
                    <basic-text> {{ role.name }} </basic-text>
                </radio-button>

                <basic-button 
                    v-if="!loadingRole"
                    class="user-change-role__save" 
                    @click="clickRoleHandler"
                > Сохранить роль </basic-button>
                <basic-button
                    v-if="loadingRole"
                    class="user-change-role__save" 
                >  
                    <basic-loader></basic-loader>
                </basic-button>
            </div>
        </basic-modal>
    </div>
</template>

<style lang="scss">
    .user-change-role {
        &__content {
            padding: 30px;
            background-color: white;
            border-radius: 16px;
        }
        &__heading {
            color: black;
            margin-bottom: 12px;
        }
        &__radion-button {
            margin-bottom: 16px;
            color: black;
            &:last-child {
                margin-bottom: 0;
            }
        }
        &__button {
            min-width: 120px;
        }
    }
</style>