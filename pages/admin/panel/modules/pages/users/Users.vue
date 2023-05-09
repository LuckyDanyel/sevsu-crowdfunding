<script lang="ts" setup>
import { useAuthUser } from '@/src/store';
import { storeToRefs } from 'pinia';
import InputCommon from '@/components/inputs/InputCommon.vue';
import AdminActions from './components/AdminActions.vue';
import UserDisplay from '@/components/user/userDisplay/UserDisplay.vue';
import { UserModelAbstract } from '@src/models/user';
import { BasicIcon, TableCell, TableRow, TableTitle } from '@/UI';
import { getUserByAdmin } from '../../api/index';

    const { token } = storeToRefs(useAuthUser());


    const columnSizes = [260, 200, 150, 330];   
    const email = ref('');
    const loadingUser = ref(false);
    const users = ref<UserModelAbstract[]>([]);

    const getUserEmail = async (email: string) => {
        if(email) {
            try {
                loadingUser.value = true;
                const usersComming = await getUserByAdmin(unref(token), email);
                const array = usersComming.map((user) => new UserModelAbstract(user))
                users.value = array;
            } catch (error) {

            } finally {
                loadingUser.value = false;
            }
        }
    }

    watch(email, (value) => {
        getUserEmail(value);
    });


</script>

<template>
    <div class="users">
        <div class="users__search-by-email">
            <input-common
                v-model="email"
                placeholder="Найти пользователя по Email"
                :debouce-time="500"
            >
                <template #icon>
                    <basic-icon
                        size='16'
                        type-icon='lupa'
                        color="color"
                    ></basic-icon>
                </template>
            </input-common>
        </div>
        <div class="users__table">
            <table-row>
                <table-title :width="columnSizes[0]"> Имя и роль </table-title>
                <table-title :width="columnSizes[1]"> Email </table-title>
                <table-title :width="columnSizes[2]"> Дата регистрации </table-title>
                <table-title :min-width="columnSizes[3]"> Действия </table-title>
            </table-row>
            <div class="users__content">
                <table-row
                    v-for="user in users"
                >
                    <table-cell :width="columnSizes[0]">
                        <user-display
                            style="color: black;"
                            size='small'
                            :name="user.name"
                            :icon="user.icon"
                            :is-admin="user.role.key === 'ADMIN'"
                            :email="user.email"
                        ></user-display>
                    </table-cell>
                    <table-cell :width="columnSizes[1]"> {{ user.email }}</table-cell>
                    <table-cell :width="columnSizes[2]"> {{ user.dateCreatedUserText }} </table-cell>
                    <table-cell :min-width="columnSizes[3]"> 
                        <admin-actions
                            :user="user"
                            @taken-role="($event) => user.setUserRole($event)"
                        ></admin-actions>
                    </table-cell>
                </table-row>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .users {
        &__search-by-email {
            max-width: 270px;
        }
        &__table {
            margin-top: 16px;
        }
        &__content {
        }
    }
</style>