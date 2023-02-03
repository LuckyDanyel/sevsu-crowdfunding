<script lang="ts">
    export default {
        name: 'white-layout',
    }

</script>

<template>
    <NuxtLayout name="main-layout">
        <div class="white-background">
            <slot></slot>
        </div>
    </NuxtLayout>
</template>


<style lang="scss">
    .white-background {
        padding: 36px;
        border-radius: 16px;
        background-color: white;
        box-shadow: 0px 2px 2px rgba(0, 40, 85, 0.04), 0px 2px 8px rgba(0, 40, 85, 0.16);
    }
</style>