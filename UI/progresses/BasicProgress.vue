<script lang="ts">
    export default {
        props: {
            procent: Number,    
        },
    }
</script>

<template>
    <div class="progress">
        <div class="progress__wrapper"></div>
        <div class="progress__value" :style="{ width: procent + '%', }"></div>
    </div>
</template>

<style lang="scss">
    .progress {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        height: 100%;
        background-color: var(--color-ui-element-4);
        &__wrapper-value {
            border-radius: 12px;
            position: relative;
            height: 100%;
        }
        &__container {
            display: flex;
            align-items: center;
            height: 100%;
        }
        &__value {
            position: absolute;
            background-color: var(--color-green-1);
            border: 1px solid var(--color-green-1);
            border-radius: 8px;
            top: 0;
            left: 0;
            height: 100%;
        }
    }
</style>