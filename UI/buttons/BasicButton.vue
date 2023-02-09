<script lang="ts" setup>
import { BasicText } from 'UI';

    defineProps({
        reverse: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        bgColor: {
            type: String,
            default: '',
        },
        textColor: {
            type: String,
            default: '',
        }
    })

</script>
<template>
    <div class="basic-button" 
        :class="[
            reverse ? 'basic-button_reverse' : '',
            isActive ? 'basic-button_active' : '',
        ]" 
        :style="`background-color: ${bgColor};`"
    >
        <div>
            <basic-text 
                :font="reverse ? 'regular' : 'semi-bold' "
                class="basic-button__text"
                :style="`color: ${textColor};`"
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
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        &:hover {
            color: var(--color-button-bg-hover);
        }
        &_active {
            &:active {
            background-color: var(--color-button-bg-active);
                .basic-button__text {
                    color: var(--color-button-text-active);
                }
            }
        }
        .basic-button__text {
            color: var(--color-button-text);
        }
        &_reverse {
            background-color: white;
            border: 1px solid var(--color-button-bg);

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
