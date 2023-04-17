<script lang="ts" setup>
    import { BasicText, BasicTooltip } from 'UI';

    defineProps({
        icon: String,
    })

</script>


<template>
    <div class="user-project-title">
        <basic-tooltip :top="-9">
            <template #button-hover>
                <div class="user-project-title__container">
                    <div class="user-project-title__icon" :style="`background-image: url(${icon});`"></div>
                    <basic-text class="user-project-title__text">
                        <slot></slot>
                    </basic-text>
                </div>
            </template>
            <template #hover-content>
                <slot></slot>
            </template>
        </basic-tooltip>
    </div>
</template>

<style lang="scss" scoped>
    .user-project-title {
        width: 100%;
        &__container {
            display: flex;
            align-items: center;
            width: 100%;
            cursor: pointer;
            overflow: hidden;
        }
        &__icon {
            min-width: 24px;
            height: 24px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 100%;
            margin-right: 8px;
        }
        &__text {
            color: black;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

</style>