<script lang="ts">
    import { LocationProject, WhiteButton } from '@/UI';
    import { storeToRefs } from 'pinia';
    import Carusel from '@/components/carusel/Carusel.vue';
    import ProjectInfo from '@/components/project/view/ProjectInfo.vue';
    import ProjectModelInfo from '@/src/models/project/projectModelInfo';
    import { useNotification } from "@kyvg/vue3-notification";
    import ProjectDescriptionView from '~/components/project/view/ProjectDescription.vue';
    import ProjectActions from './components/ProjectActions.vue';
    import { useAdminStore } from '../../store/useAdminPageStore';

    export default {
        props: {
            projectModel: {
                type: ProjectModelInfo,
                required: true,
            }
        },
        components: {
            LocationProject,
            Carusel,
            ProjectInfo,
            ProjectActions,
            WhiteButton,
            ProjectDescriptionView,
        },
        setup(props, { emit }) {

            const { notify }  = useNotification();

            const goAuthorProject = (author: ProjectModelInfo['author']) => {
                window.open(`/projects?userId=${author.id}`, '_blank');
            };

            const addStatusHandler = (text: string, id: string) => {
                notify({
                    title: text,
                    text: '',
                    type: 'success',
                    duration: 2000,
                });
                emit('delteProject', id);
            }


            return {
                goAuthorProject,
                addStatusHandler,
            }
        }
    }

</script>

<template>
    <div class="project-wrapper" v-if="projectModel">
        <white-button class="project-wrapper__button-back" @click="$emit('back')"> Назад </white-button>
        <location-project>
            <template #left>
                <carusel
                    :images="projectModel?.images || []"
                    :items-show="projectModel?.images?.length > 7 ? 7.5 : projectModel?.images?.length"
                >
                </carusel>
            </template>
            <template #right>
                <project-info
                    :project="projectModel"
                    @author-click="goAuthorProject"
                ></project-info>
            </template>
            <template #down>
                <div class="project-wrapper__content">
                    <project-description-view
                        :description="projectModel.description"
                    ></project-description-view>
                </div>
            </template>
        </location-project>
        <div class="project-wrapper__buttons">
            <project-actions
                @approve="addStatusHandler('Проект успешно подтвержден', projectModel.id)"
                @cancel="addStatusHandler('Проект успешно отклонен', projectModel.id)"
                :project="projectModel"
            ></project-actions>
        </div>
    </div>
</template>

<style lang="scss">
    .project-wrapper {
        &__button-back {
            margin-bottom: 12px;
        }
        &__content {
            display: flex;
            flex-direction: column;
            margin-top: 32px;
            padding: 32px;
            border-radius: 20px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
            min-height: 300px;
            margin-bottom: 16px;
        }
    }

</style>
