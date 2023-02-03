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
        class="item-background" 
        :class="isHover ? 'item-background_hover' : ''"
        @mouseenter="() => isHover = true"
        @mouseleave="() => isHover = false"
    >
        <slot :isHover="isHover"></slot>
    </li>
</template>

<style lang="scss">
    .item-background {
        padding: 8px 0px;
        &_hover {
            background-color: var(--color-button-bg-hover)
        }
    }
</style>