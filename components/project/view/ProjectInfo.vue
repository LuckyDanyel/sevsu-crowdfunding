<script lang="ts" setup>
import {
    TextBlockShadow, 
    BasicText, 
    BasicProgress, 
    BasicIcon, 
    BasicButton, 
    BasicLoader 
} from 'UI';
import UserDisplay from '@/components/user/userDisplay/UserDisplay.vue';
import { ProjectModelInfo } from '@models/project';

    defineProps({
        project: {
            type: ProjectModelInfo,
            required: true,
        },
        loadingLikes: {
            type: Boolean,
            default: false,
        },
        isUserSupportedProject: {
            type: Boolean,
            default: false,
        },
    })
</script>

<template>
    <div class="project-info">
        <basic-text font='semi-bold' size='large' class="project-info__item"> {{ project.title }} </basic-text>

        <div class="project-info__categories project-info__item" >
            <text-block-shadow
                class="project-info__categories-info"
                v-for="category in project.categories"
                :key="category.id"
            >
                {{ category.text }}
            </text-block-shadow>
        </div>
        <div class="project-info__short-text project-info__item">
            <basic-text> {{ project.shortText }} </basic-text>
        </div>
        <div class="project-info__line"></div>
        <div class="project-info__like-stats project-info__item" >
            <div class="project-info__like-container project-info__item">
                <basic-text size='medium-large' class="project-info_color-gray"> Всего: {{ project.likes }} </basic-text>
                <basic-text size='medium-large' class="project-info_color-gray"> Собрано {{ project.procentByLikes }}% </basic-text>
            </div>
            <div class="project-info__procent">
                <basic-progress :procent="project.procentByLikes"></basic-progress>
            </div>
        </div>
        <div class="project-info__info-date">
            <div class="project-info__icon-item project-info__item">
                <basic-icon type-icon='calendar' size='24' color="color" class="project-info_margin"></basic-icon>
                <basic-text size='medium-large' class="project-info_color-gray project-info_margin"> Дата запуска проекта: </basic-text>
                <basic-text size='medium-large'> {{ project.dayStartProjectText }} </basic-text>
            </div>
            <div class="project-info__icon-item project-info__item">
                <basic-icon type-icon='calendar' size='24' color="color" class="project-info_margin"></basic-icon>
                <basic-text size='medium-large' class="project-info_color-gray project-info_margin"> Дата окончания проекта: </basic-text>
                <basic-text size='medium-large'> {{ project.dayEndProjectText }} </basic-text>
            </div>
            <div class="project-info__icon-item project-info__item">
                <basic-loader v-if="loadingLikes"></basic-loader>
                <div v-if="!loadingLikes">
                    <basic-icon v-if="isUserSupportedProject" type-icon='heart' size='24' color="full-red" class="project-info_margin"></basic-icon>
                    <basic-icon v-else type-icon='heart' size='24' color="color" class="project-info_margin"></basic-icon>
                </div>

                <basic-text size='medium-large' class="project-info_color-gray project-info_margin"> Проект поддержали: </basic-text>
                <basic-text size='medium-large'> {{ project.takenLikes }} </basic-text>
            </div>
            <div class="project-info__icon-item project-info__item">
                <basic-icon type-icon='time' size='24' color="color" class="project-info_margin"></basic-icon>
                <basic-text size='medium-large' class="project-info_color-gray project-info_margin"> До сбора осталось: </basic-text>
                <basic-text size='medium-large'> {{ project.daysToEndProject }} </basic-text>
            </div>
        </div>
        <slot name="button"></slot>
        <div class="project-info__line"></div>

        <div class="project-info__info-user">
            <user-display 
                :icon="project?.author?.icon" 
                :name="project?.author?.name" 
                :role-name="project?.author?.role?.name"
                class="project-info__info-user-item"
            ></user-display>
            <div class="project-info__user-project project-info__info-user-item">
                <basic-icon size='24' type-icon='cube' color='full-color' class="project-info__user-icon"></basic-icon>
                <basic-text font='semi-bold'> {{ project?.author?.projects }} Проектов </basic-text>
            </div>
            <basic-button  class="project-info__button project-info__info-user-item"> Посмотреть все </basic-button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .project-info {
        &__like-container {
            display: flex;
            justify-content: space-between;
        }
        &_margin {
            margin-right: 6px;
        }
        &__item {
            margin-bottom: 12px;
        }
        &__user-icon {
            margin-right: 5px;
        }
        &__info-user-item {
            flex: 1;
            display: flex;
            justify-content: center;
        }
        &__info-user {
            display: flex;
            align-items: center;
        }
        &__button {
            height: 34px;
        }
        &__user-project {
            display: flex;
            align-items: center;
        }
        &__icon-item {
            display: flex;
        }
        &__procent {
            height: 10px;
            width: 100%;
        }
        &__categories-info {
            margin-right: 12px;
        }
        &__line {
            margin-top: 12px;
            margin-bottom: 12px;
            width: 100%;
            height: 1px;
            border-bottom: 1px solid var(--color-gray-type-4);
        }
        &_color-gray {
            color: var(--color-gray-type-2);
        }
    }

</style>