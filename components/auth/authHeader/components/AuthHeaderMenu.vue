<script lang="ts" setup>
import { PropType, ref } from 'vue';
import { User } from '@/types';
import BaiscItem from '@/components/basic/BasicItem.vue';
import BasicText from '@/components/basic/BasicText.vue';
import BasicIcon from '@/components/basic/icon/BasicIcon.vue';

    const isOpen = ref(false);

    const { user } = defineProps({
        user: Object as PropType<User>,
    })

</script>

<template>
    <div class="auth-header-menu">
        <div 
            class="auth-header-menu__profile"
            @click="() => isOpen = !isOpen"
        >   
            <div 
                class="auth-header-menu__profile-icon"
                :style="`background-image: url('${user?.icon}');`"
            ></div>
            <div class="auth-header-menu__arrow"></div>
        </div>
        <div 
            class="auth-header-menu__content" 
            v-if="isOpen"
        >
            <div class="auth-header-menu__up">
                <div 
                    class="auth-header-menu__profile-icon"
                    :style="`background-image: url('${user?.icon}');`"
                ></div>
                <div class="auth-header-menu__profile-info">
                    <basic-text font="semi-bold"> {{ user?.name }} </basic-text>
                    <basic-text class="auth-header-menu__profile-role"> {{ user?.role?.name }} </basic-text>
                </div>
            </div>
            <basic-item 
                class="auth-header-menu__item"
                @click="() => $emit('profile')"
            >
                <basic-icon size="small" typeIcon="profile" class="auth-header-menu__icon"></basic-icon>
                <basic-text> Профиль </basic-text>
            </basic-item>
            <basic-item class="auth-header-menu__item"
                @click="() => $emit('projects')"
            >
                <basic-icon size="small" typeIcon="projects" class="auth-header-menu__icon"></basic-icon>
                <basic-text> Мои проекты </basic-text>
            </basic-item>
            <basic-item 
                class="auth-header-menu__item"
                v-if="user?.role?.key === 'ADMIN'"
                @click="() => $emit('panel')"
            >
                <basic-icon size="small" typeIcon="panel" class="auth-header-menu__icon"></basic-icon>
                <basic-text> Панель управления </basic-text>
            </basic-item>
            <basic-item 
                class="auth-header-menu__item"
                @click="() => $emit('logout')"
            >
                <basic-icon size="small" typeIcon="exit" class="auth-header-menu__icon"></basic-icon>
                <basic-text> Выйти </basic-text>
            </basic-item>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .auth-header-menu {
        position: relative;
        &__up {
            display: flex;
            align-items: center;
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
            background-color: black;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            overflow: hidden;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
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