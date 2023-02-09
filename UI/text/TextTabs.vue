<script lang="ts" setup>
    import { BasicText } from 'UI';

    defineProps({
        isActive: {
            type: Boolean,
            default: false,
        }
    })

</script>

<template>
    <basic-text
        class="text-tabs"
        :class="isActive ? 'text-tabs_active' : '' "
        font='semi-bold' 
        size='large'
    > 
        <slot></slot>
    </basic-text>
</template>

<style lang="scss" scoped>
    .text-tabs {
        padding: 4px 8px;
        color:  var(--color-main-type-1);
        cursor: pointer;
        &_active {
            color:  var(--color-table-heading);
            border-bottom: 2px solid var(--color-table-heading);
        }
    }
</style>