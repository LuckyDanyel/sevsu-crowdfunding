<script lang="ts">
    import { ref } from 'vue';

    export default {
        setup() {
            const isHover = ref(false);
            return {
                isHover,
            }
        },
    }

</script>

<template>
    <li
        class="basic-item" 
        :class="isHover ? 'basic-item_hover' : ''"
        @mouseenter="() => isHover = true"
        @mouseleave="() => isHover = false"
    >
        <slot :isHover="isHover"></slot>
    </li>
</template>

<style lang="scss">
    .basic-item {
        padding: 8px 0px;
        &_hover {
            background-color: var(--color-main-type-3)
        }
    }
</style>