<script lang="ts" setup>
    import { Skeleton } from '@/UI';

</script>

<template>

    <div class="skeleton-filters">
        <skeleton
            :height="250"
            :width="0"
        ></skeleton>
    </div>

</template>

<style lang="scss">
    .skeleton-filters {
        max-width: 270px;
        width: 100%;
    }
</style>