<script lang="ts" setup>
    import { PropType } from 'vue';
    import { BasicText, BasicButton, BasicProgress, TextBlockShadow, BasicIcon } from 'UI';
    import ProjectModelCard from '@models/project/projectModelCard';

    defineProps({
        card: {
            type: Object as PropType<ProjectModelCard>,
            required: true,
        }
    })
</script>

<template>
    <div class="project-card">
        <div class="project-card__image" :style="`background-image: url(${card.image})`"></div>
        <div class="project-card__container">
            <h2 class="project-card__title project-card__item">
                <basic-text font='semi-bold' size='large'> {{ card.title }} </basic-text>
            </h2>
            <div class="project-card__down">
                <div class="project-card__categories project-card__item">
                    <text-block-shadow
                        v-for="category in card.categories"
                        :key="category.id"
                        class="project-card__category"
                    >
                        {{ category.text }}
                    </text-block-shadow>
                </div>
                <div class="project-card__short-text project-card__item">
                    <basic-text> {{ card.shortText }} </basic-text>
                </div>
                <div class="project-card__procent project-card__item">
                    <basic-progress :procent="card.procentByLikes"></basic-progress>
                </div>
                <div class="project-card__icons project-card__item">
                    <div class="project-card__icons-left">
                        <div class="project-card__icons-item">
                            <basic-icon type-icon='heart' size='14' class="project-card__icon"></basic-icon>
                            <basic-text size='extra-small' class="project-card__icon-text"> {{ card.takenLikes }} из {{ card.likes }}</basic-text>
                        </div>
                        <div class="project-card__icons-item">
                            <basic-icon type-icon='message' size='14' class="project-card__icon" ></basic-icon>
                            <basic-text size='extra-small' class="project-card__icon-text"> {{ card.comments }} </basic-text>
                        </div>
                    </div>
                    <div class="project-card__icons-right">
                        <div class="project-card__icons-item">
                            <basic-icon type-icon='views' size='14' class="project-card__icon"></basic-icon>
                            <basic-text size='extra-small' class="project-card__icon-text"> {{ card.views }} </basic-text>
                        </div>
                    </div>
                </div>
                <basic-button 
                    class="project-card__button project-card__item"
                    @click="() => $emit('click-button', card.id)"
                >
                    Перейти к проекту
                </basic-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .project-card {
        background-color: white;
        border-radius: 4px;
        overflow: hidden;
        max-width: 300px;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        &__title {
            height: 100%;
            display: flex;
            align-items: center;
        }
        &__container {
            display: flex;
            flex-direction: column;
            height: 100%;           
            justify-content: space-between;
        }
        &__image {
            width: 100%;
            min-height: 200px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        &__short-text {
            overflow: hidden;
            height: 115px;
        }
        &__icon {
            margin-right: 6px;
        }
        &__icons {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__icons-left {
            display: flex;
            align-items: center;
        }
        &__icons-item {
            display: flex;
            align-items: center;
            &:not(:last-child) {
                margin-right: 7px;
            }
        }
        &__icon-text {
            color: var(--color-gray-type-2);
        }
        &__category {
            margin-right: 16px;
        }
        &__button {
            height: 36px;
        }
        &__item {
            &:not(:last-child) {
                margin-bottom: 16px;
            }
        }
        &__container {
            padding: 16px;
        }
        &__procent {
            height: 8px;
        }
    }

</style>