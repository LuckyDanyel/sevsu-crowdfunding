<script lang="ts" setup>
import { BasicText } from '../text';

    defineProps({
        isActive: {
            type: Boolean,
            default: false,
        },
    })

</script>
<template>
    <div 
        class="white-button" 
        :class="isActive ? 'white-button_active' : ''" 
    >
        <basic-text font='semi-bold' class="white-button__text"> 
            <slot></slot>
        </basic-text>
    </div>
</template>

<style lang="scss" scoped>
    .white-button {
        padding: 10px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 2px 2px rgba(0, 40, 85, 0.04), 0px 2px 8px rgba(0, 40, 85, 0.16);
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        &_active {
            background-color: var(--color-main-type-1);
            .white-button__text {
                color: white;
            }
        }
    }
</style>
