<script lang="ts" setup>
import BasicText from '@/components/basic/BasicText.vue';

    defineProps({
        reverse: {
            type: Boolean,
            default: false,
        }
    })

</script>
<template>
    <div class="basic-button" :class="reverse ? 'basic-button_reverse' : '' ">
        <div calss="basic-button__text">
            <basic-text 
                :font="reverse ? 'regular' : 'semi-bold' "
                class="basic-button__text"
            >
                <slot></slot>
            </basic-text>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .basic-button {
        cursor: pointer;
        width: 100%;
        border-radius: 40px;
        background-color: var(--color-main-type-1);
        border: 1px solid var(--color-main-type-1);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        &:hover {
            opacity: 0.9;
        }
        &:active {
            background-color: var(--color-main-type-4);
        }
        &__text {
            color: white;
        }
        &_reverse {
            background-color: white;

            .basic-button__text {
                color: var(--color-gray-type-2);
            }
            &:active {
                background-color: var(--color-main-type-3);
            }
        }
    }
</style>
