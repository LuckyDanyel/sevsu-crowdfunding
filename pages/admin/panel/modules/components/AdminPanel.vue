<script lang="ts" setup>
    import { BasicText, BasicIcon } from '@/UI';
    import { storeToRefs } from 'pinia';
    import { useAdminStore } from '../store/useAdminPageStore';
    import { TPageView } from '../types';

    const { setPageView } = useAdminStore();
    const { pageView } = storeToRefs(useAdminStore());

    const isOpen = ref(false);

    const selectedTypeViewHandler = (typeView: TPageView) => {
        setPageView(typeView)
    };

    const dataAdminPanel: { name: string, type: TPageView, typeIcon: any }[] = [
        {
            name: 'Пользователи',
            type: 'users',
            typeIcon: 'profiles',
        },
        {
            name: 'Заявки',
            type: 'applications',
            typeIcon: 'time',
        }
    ];

</script>

<template>
    <div 
        class="admin-panel"
        :style="isOpen ? 'max-width: 270px;' : 'max-width: 88px;'"
    >
        <div class="admin-panel__wrapper">
            <div class="admin-panel__up-content">
                    <basic-icon 
                        class="admin-panel__icon"
                        type-logo='extra-small'
                        v-if="isOpen"
                    ></basic-icon>
                <div 
                    class="admin-panel__menu" @click="() => isOpen = !isOpen"
                    :style="isOpen ? '' : 'margin: 0 16px;'"    
                >
                    <span class="admin-panel__menu-item"></span>
                    <span class="admin-panel__menu-item"></span>
                    <span class="admin-panel__menu-item"></span>
                </div>
            </div>
            <div class="admin-panel__content">
                <div 
                    v-for="adminData in dataAdminPanel"
                    class="admin-panel__item-view"
                    :class="adminData.type === pageView ? 'admin-panel__item-view_active' : ''"
                    @click="selectedTypeViewHandler(adminData.type)"
                >
                    <basic-icon 
                        class="admin-panel__item-icon"
                        color='white'
                        :type-icon='adminData.typeIcon'
                        :style="isOpen ? 'margin-right: 12px;' : 'margin-right: 0px;'"
                    ></basic-icon>
                    <basic-text 
                        class="admin-panel__item-name" 
                        font='regular' 
                        size='medium-large'
                        v-if="isOpen"
                    >
                        {{ adminData.name }}
                    </basic-text>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    .admin-panel {
        width: 100%;
        transition: 0.3s;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background-color: var(--color-bg-elements);
        z-index: 9999;

        &__up-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
            height: 22px;
        }
        &__menu {
            cursor: pointer;
            width: 18px;          
        }
        &__menu-item {
            cursor: pointer;
            display: block;
            width: 100%;
            height: 2px;
            background-color: white;
            border-radius: 2px;
            margin-bottom: 5px;
            &:last-child {
                margin-bottom: 0;
            }
        }

        &__item-view {
            padding: 8px 16px;
            margin-bottom: 10px;
            cursor: pointer;
            display: flex;
            &:hover, &_active {
                border-radius: 12px;
                background-color: var(--color-main-type-1);
            }
        }
        &__item-name {
            color: white;
        }
        &__wrapper {
            padding: 26px 16px;
        }
    }

</style>