<script lang="ts" setup>
    import { BasicText } from '../text';

    defineProps({
        openContent: {
            type: Boolean,
            default: true,
        },
        height: {
            type: Number,
            default: 80,
        },
        small: {
            type: Boolean,
            default: false,
        }
    })

    const isToggle = ref(false);

</script>

<template>
    <div class="drop-down">
        <div 
            class="drop-down__up"
            @click="() => isToggle = !isToggle"
        >
            <div class="drop-down__icon" v-if="$slots.icon">
                    <slot name="icon"></slot>
                </div>
                <div class="drop-down__name">
                    <basic-text
                        :size='small ? "small" :  "medium"'
                        font='regular'
                    >
                        <slot name="name"></slot>
                    </basic-text>
                </div>
            <div class="drop-down__arrow">

            </div>
        </div>
        <div 
            class="drop-down__content"
            :style="height ? `height: ${height}px` : ''"
            v-if="isToggle && openContent"
        >
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style lang="scss">
    .drop-down {
        background-color: white;
        position: relative;
        cursor: pointer;
        width: 100%;
        height: 40px;
        outline: 1px solid var(--color-gray-type-1);
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__up {
            padding: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
        }
        &__name {
            text-align: center;
            color: var(--color-gray-type-2);
        }
        &__icon {

        }
        &__arrow {
            position: relative;
            min-width: 18px;
            height: 18px;
            background-color: #F0F9FF;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;

            &::before {
                transform: rotate(-45deg);
                left: 7px;
            }
            &::after {
                transform: rotate(45deg);
                right: 7px;
            }
            &::before, &::after {
                position: absolute;
                border-radius: 2px;
                background-color: var(--color-main-type-1);
                content: '';
                height: 5px;
                width: 1px;
            }
        }
        &__content {
            outline: 1px solid var(--color-gray-type-1);
            position: absolute;
            left: 0;
            top: 38px;
            width: 100%;
            overflow: auto;
            background-color: white;
        }
    }

</style>