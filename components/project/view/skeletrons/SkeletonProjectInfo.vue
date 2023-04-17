<script lang="ts" setup>
    import { Skeleton } from '@/UI';
</script>

<template>
    <div class="skeleton-project-info">
        <skeleton
            class="skeleton-project-info__margin"
            :width="0"
            :height="55"
        ></skeleton>

        <skeleton
            class="skeleton-project-info__margin"
            :width="0"
            :height="100"
        ></skeleton>

        <skeleton
            class="skeleton-project-info__margin"
            :width="0"
            :height="30"
        ></skeleton>

        <skeleton
            class="skeleton-project-info__margin"
            :width="0"
            :height="20"
        ></skeleton>

        <skeleton
            class="skeleton-project-info__margin"
            :width="0"
            :height="20"
        ></skeleton>

        <skeleton
            class="skeleton-project-info__margin"
            :width="0"
            :height="20"
        ></skeleton>

        <skeleton
            class="skeleton-project-info__margin"
            :width="0"
            :height="20"
        ></skeleton>

        <skeleton
            class="skeleton-project-info__margin"
            :width="0"
            :height="50"
        ></skeleton>
    </div>

</template>

<style lang="scss">
    .skeleton-project-info {
        &__margin {
            margin-bottom: 16px;
        }
    }
</style>