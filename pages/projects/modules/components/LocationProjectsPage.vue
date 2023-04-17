<script lang="ts" setup></script>

<template>
    <div class="page-projects__filters-up">
        <slot name="filters-up"></slot>
    </div>
    <div class="page-projects">
        <div class="page-projects__filters">
            <slot name="filters"></slot>
        </div>
        <slot name="cards"></slot>
    </div>
</template>

<style lang="scss" scoped>
    .page-projects {
        display: flex;
        justify-content: space-between;
        &__filters-up {
            margin-left: 300px;
            margin-bottom: 20px;
        }
        &__filters {
            max-width: 300px;
            width: 100%;
        }
    }

</style>