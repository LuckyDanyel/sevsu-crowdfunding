<script lang="ts" setup>
    import { PropType } from 'vue';

    const props = defineProps({
        skeletonType: {
            type: String as PropType<'line' | 'square'>,
            default: 'line',
        },
        width: {
            type: Number,
            default: 20,
        },
        height: {
            type: Number,
            default: 20,
        },
    })

</script>

<template>

    <div class="skeleton">
        <div 
            class="skeleton__item"
            :style="width ? `max-width:${width}px; height: ${height}px;` : `width: 100%; height:${height}px` "
            :class="`skeleton__${skeletonType}`"
        ></div>
    </div>

</template>

<style lang="scss">
    .skeleton {
        width: 100%;
        &__line {
            margin-bottom:6px;
            border-radius: 6px;
            background: rgba(130, 130, 130, 0.2);
            background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.2)), color-stop(18%, rgba(130, 130, 130, 0.3)), color-stop(33%, rgba(130, 130, 130, 0.2)));
            background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
            background-size: 800px 100px;
            animation: wave-lines 2s infinite ease-out;
        }
        &__square {
            border-radius: 6px;
            background: rgba(130, 130, 130, 0.2);
            background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.2)), color-stop(18%, rgba(130, 130, 130, 0.3)), color-stop(33%, rgba(130, 130, 130, 0.2)));
            background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
            background-size: 800px 100px;
            animation: wave-squares 2s infinite ease-out;
        }
    }
    @keyframes wave-lines {
        0% {
            background-position: -468px 0;
        }
         100% {
            background-position: 468px 0;
        }
    }
    @keyframes wave-squares {
        0% {
            background-position: -468px 0;
        }
         100% {
            background-position: 468px 0;
        }
    }
</style>