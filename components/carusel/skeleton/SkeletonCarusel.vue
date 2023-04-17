<script lang="ts" setup>
import { Skeleton } from '@/UI';


</script>

<template>
    <div class="skeleton-carusel">
        <skeleton
            :height="470"
            :width="550"
            class="skeleton-carusel__margin"
        ></skeleton>
        
        <skeleton
            :height="50"
            :width="550"
            class="skeleton-carusel__margin"
        ></skeleton>
    </div>
</template>

<style lang="scss">
    .skeleton-carusel {
        &__margin {
            margin-bottom: 12px;
        }
    }

</style>