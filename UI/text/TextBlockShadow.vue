<script lang="ts" setup>
    import BasicText from './BasicText.vue';

</script>

<template>
    <span class="basic-block-shadow">
        <basic-text font='regular' size='small' class="basic-block-shadow__text">
            <slot></slot>
        </basic-text>
    </span>
</template>

<style lang="scss" scoped>
    .basic-block-shadow {
        border-radius: 4px;
        padding: 6px 12px;
        background-color: white;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
        display: inline-flex;
        justify-content: center;
        align-items: center;

        &__text {
            color: var(--color-gray-type-2)
        }
    }
</style>