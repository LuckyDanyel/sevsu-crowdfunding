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
        background-color: var(--color-button-bg);
        border: 1px solid var(--color-button-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        &:hover {
            color: var(--color-button-bg-hover);
        }
        &:active {
            background-color: var(--color-button-bg-active);

            .basic-button__text {
                color: var(--color-button-text-active);
            }
        }
        &__text {
            color: var(--color-button-text);
        }
        &_reverse {
            background-color: white;

            .basic-button__text {
                color: var(--color-gray-type-2);
            }
            &:active {
                background-color: var(--color-button-bg-hover);

                .basic-button__text {
                    color: var(--color-gray-type-2);
                }
            }
        }
    }
</style>
