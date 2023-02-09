<script lang="ts" setup>
    import { PropType } from 'vue';
    import { BasicText } from '../text';

    defineProps({
        direction: {
            type: String as PropType<'top' | 'left' | 'right' | 'bottom'>,
            default: 'left',
        },
        top: {
            type: Number,
            default: 0,
        }
    })

    const isHover = ref(false);

</script>

<template>
    <div class="basic-tooltip">
        <div 
            class="basic-tooltip__button" 
            @mouseenter="() => isHover = true" 
            @mouseleave="() => isHover = false"
        >
            <slot name="button-hover"></slot>
        </div>
        <div class="basic-tooltip__content" v-show="isHover" :style="`top: ${top}px;`">
            <basic-text>
                <slot name="hover-content"></slot>
            </basic-text>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .basic-tooltip {
        position: relative;

        &__content {
            padding: 12px;
            position: absolute;
            top: 0px;
            left: calc(100% + 8px);
            border-radius: 8px;
            white-space: nowrap;
            background-color: white;
            box-shadow: 3px 0px 7px rgba(0, 0, 0, 0.25);
            z-index: 2;
        }
    }

</style>