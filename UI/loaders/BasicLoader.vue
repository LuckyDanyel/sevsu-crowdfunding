<script lang="ts" setup>
    import { PropType } from 'vue';

    defineProps({
        loading: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String as PropType<'white' | 'green'>,
            default: 'white'
        }
    })
</script>

<template>
    <span class="loader" :class="`loader__${color}`"></span>
</template>

<style>
.loader {
        width: 24px;
        height: 24px;
        border: 3px solid transparent;
        border-bottom-color: var(--color-main-type-1);
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
    }
        100% {
            transform: rotate(360deg);
        }
    } 
</style>