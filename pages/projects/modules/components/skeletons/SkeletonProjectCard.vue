<script lang="ts" setup>
import { Skeleton } from '@/UI';


</script>

<template>
    <div class="skeleton-project-card">
        <skeleton
            :height="200"
            :width="0"
            class="skeleton-project-card__margin"
        ></skeleton>

        <skeleton
            :height="25"
            :width="0"
            class="skeleton-project-card__margin"
        ></skeleton>

        <div class="skeleton-project-card__flex" style="max-width: 80%;">
            <skeleton
                :height="25"
                :width="100"
                class="skeleton-project-card__margin"
            ></skeleton>
            <skeleton
                :height="25"
                :width="100"
                class="skeleton-project-card__margin"
            ></skeleton>
        </div>

        <skeleton
            :height="100"
            :width="0"
            class="skeleton-project-card__margin"
        ></skeleton>

        <div class="skeleton-project-card__flex" style="max-width: 50%;">
            <skeleton
                :height="20"
                :width="60"
                class="skeleton-project-card__margin"
            ></skeleton>

            <skeleton
                :height="20"
                :width="60"
                class="skeleton-project-card__margin"
            ></skeleton>
        </div>

        <skeleton
            :height="36"
            :width="0"
            class="skeleton-project-card__margin"
        ></skeleton>
    </div>

</template>

<style lang="scss">
    .skeleton-project-card {
        max-width: 300px;
        width: 100%;
        &__flex {
            display: flex;
            max-width: 80%;
        }
        &__margin {
            margin-bottom: 12px;
        }
    }

</style>