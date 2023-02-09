<script lang="ts">
    export default {
        name: 'white-layout-center',
    }

</script>

<template>
    <NuxtLayout name="main-layout">
        <template #header-right>
            <slot name="header-right"></slot>
        </template>
        <div class="white-background-center">
            <slot></slot>
        </div>
    </NuxtLayout>
</template>


<style lang="scss">
    .white-background-center {
        padding: 36px;
        border-radius: 16px;
        background-color: white;
        box-shadow: 0px 2px 2px rgba(0, 40, 85, 0.04), 0px 2px 8px rgba(0, 40, 85, 0.16);
        position: absolute;
        max-width: var(--width-main-container);
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
</style>