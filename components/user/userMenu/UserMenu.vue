<script lang="ts" setup>
import { PropType, ref } from 'vue';
import { BasicText, BasicIcon, ItemBackground } from 'UI';
import { UserModelAbstract } from '@models/user';
import UserDisplay from '@/components/user/userDisplay/UserDisplay.vue';

    const isOpen = ref(false);

    const { user } = defineProps({
        user: Object as PropType<UserModelAbstract>,
    })
</script>

<template>
    <div class="user-menu">
        <div 
            class="user-menu__profile"
            @click="() => isOpen = !isOpen"
        >   
            <div 
                class="user-menu__profile-icon"
                :style="user?.icon ? `background-image: url('${user?.icon}');` : ''"
            ></div>
            <div class="user-menu__arrow"></div>
        </div>
        <div 
            class="user-menu__content" 
            v-if="isOpen"
        >
            <div class="user-menu__up">
                <user-display 
                    :name="user?.name"
                    :email="user?.email"
                    :is-admin="user?.role.key === 'ADMIN'"
                    :icon="user?.icon" 
                />
            </div>
            <!-- <item-background
                class="user-menu__item"
                @click="() => $emit('profile')"
            >
                <basic-icon size="16" typeIcon="profile" color="black" class="user-menu__icon" />
                <basic-text> Профиль </basic-text>
            </item-background> -->
            <item-background class="user-menu__item"
                @click="() => $emit('projects')"
            >
                <basic-icon size="16" typeIcon="projects" color="black" class="user-menu__icon" />
                <basic-text> Мои проекты </basic-text>
            </item-background>
            <item-background
                class="user-menu__item"
                v-if="user?.role?.key === 'ADMIN'"
                @click="() => $emit('panel')"
            >
                <basic-icon size="16" typeIcon="panel" color="black" class="user-menu__icon" />
                <basic-text> Панель управления </basic-text>
            </item-background>
            <item-background
                class="user-menu__item"
                @click="() => $emit('logout')"
            >
                <basic-icon size="16" typeIcon="exit" color="black" class="user-menu__icon" />
                <basic-text> Выйти </basic-text>
            </item-background>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .user-menu {
        position: relative;
        &__up {
            padding-left: 12px;
            margin-bottom: 10px;
        }
        &__profile {
            height: 60px;
            width: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            &:hover {
                background-color: var(--color-button-bg-hover);
            }
        }
        &__profile-role {
            color: var(--color-gray-type-2);
        }
        &__arrow {
            border: solid var(--color-main-type-1);
            border-width: 0 1px 1px 0;
            display: inline-block;
            transform: rotate(45deg);
            padding: 3px;
            margin-left: 8px;
        }
        &__profile-icon {
            width: 40px;
            height: 40px;
            border-radius: 100%;
            overflow: hidden;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url('../img/profile-no-photo.svg');
            margin-right: 8px;
        }
        &__item {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding-left: 16px;
            padding-right: 16px;
        }
        &__icon {
            margin-right: 12px;
        }
        &__content {
            background-color: white;
            top: 60px;
            right: 0;
            position: absolute;
            width: 300px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            padding-top: 16px;
            padding-bottom: 8px;
            box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.3);
        }
    }
</style>