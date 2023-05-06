<script lang="ts" setup>
    import { Skeleton } from '@/UI';

</script>

<template>
    <div class="applications-skeleton">
        <div 
            class="applications-skeleton__item"
            v-for="index in 15"
        >
            <skeleton
                :width="0"
                :height="35"
            ></skeleton>
        </div>
    </div>
</template>

<style lang="scss">
    .applications-skeleton {
        margin-top: 8px;
        &__item {
            margin-bottom: 8px;
        }
    }
</style>