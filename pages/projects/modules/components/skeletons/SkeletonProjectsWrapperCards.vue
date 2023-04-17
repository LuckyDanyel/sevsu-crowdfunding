<script lang="ts" setup>
    import SkeletonProjectCard from './SkeletonProjectCard.vue';

</script>
<template>
    <div class="projects-wrapper">
        <div class="projects-wrapper__cards-container">
            <skeleton-project-card
                v-for="index in 6"
                class="projects-wrapper__card"
            ></skeleton-project-card>
        </div>
    </div>
</template>

<style lang="scss" setup>
    .projects-wrapper {
        width: 100%;
        &__card {
            min-width: 300px;
            &:not(:nth-child(3n+3)) {
                margin-right: 24px;
            }
            margin-bottom: 24px;
        }
        &__cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
    }
</style>