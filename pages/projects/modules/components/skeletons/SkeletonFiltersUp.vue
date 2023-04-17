<script lang="ts" setup>
    import { Skeleton } from '@/UI';
</script>

<template>
    <div class="skeleton-filters-up">
        <skeleton
            class="skeleton-filters-up__item"
            :height="40"
            :width="0"
        ></skeleton>
        <skeleton
            class="skeleton-filters-up__item"
            :height="40"
            :width="0"
        ></skeleton>
    </div>

</template>

<style lang="scss">
    .skeleton-filters-up {
        display: flex;
        &__item {
            margin-right: 8px;
            max-width: 120px;
        }
    }
</style>