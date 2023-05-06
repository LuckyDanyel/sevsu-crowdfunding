<script lang="ts" setup>
    import { Skeleton } from '@/UI';

</script>

<template>
    <div class="user-projects-skeleton">
        <div 
            class="user-projects-skeleton__item"
            v-for="index in 12"
        >
            <skeleton
                :width="0"
                :height="35"
            ></skeleton>
        </div>
    </div>
</template>

<style lang="scss">
    .user-projects-skeleton {
        margin-top: 8px;
        &__item {
            margin-bottom: 8px;
        }
    }
</style>