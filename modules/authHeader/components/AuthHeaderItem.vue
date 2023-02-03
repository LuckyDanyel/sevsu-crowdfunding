<script lang="ts" setup>
import { BasicText } from 'UI';

</script>

<template>
    <div class="auth-header-item">
        <div class="auth-header-item__content">
            <slot></slot>
        </div>
        <basic-text class="auth-header-item__text">
            <slot name="text"></slot>
        </basic-text>
    </div>

</template>

<style lang="scss" scoped>
    .auth-header-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        &__content {
            width: 100%;
            margin-bottom: 16px;
        }
        &__text {
            color: var(--color-gray-type-2);
        }
    }
</style>