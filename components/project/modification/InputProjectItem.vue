<script lang="ts" setup>
    import { BasicText } from 'UI';

</script>

<template>
    <div class="input-project-item">
        <slot></slot>
        <div class="input-project-item__name">
            <basic-text size='small' :style="`color: var(--color-gray-type-3);`">
                <slot name="name"></slot>
            </basic-text>
        </div>
    </div>
</template>

<style lang="scss">
    .input-project-item {
        &__name {
            padding-left: 4px;
            margin-top: 4px;
        }
    }

</style>