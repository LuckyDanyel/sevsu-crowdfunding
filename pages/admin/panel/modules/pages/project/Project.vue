<script lang="ts">
    import { LocationProject, WhiteButton } from '@/UI';
    import { storeToRefs } from 'pinia';
    import Carusel from '@/components/carusel/Carusel.vue';
    import ProjectInfo from '@/components/project/view/ProjectInfo.vue';
    import ProjectModelInfo from '@/src/models/project/projectModelInfo';
    import { useNotification } from "@kyvg/vue3-notification";
    import ProjectActions from './components/ProjectActions.vue';
    import { useAdminStore } from '../../store/useAdminPageStore';

    export default {
        components: {
            LocationProject,
            Carusel,
            ProjectInfo,
            ProjectActions,
            WhiteButton,
        },
        setup(props, { emit }) {
            const { getProjectByTakenId: projectModel } = storeToRefs(useAdminStore())
            const { setPageView, deleteProject } = useAdminStore();

            const { notify }  = useNotification();

            const goAuthorProject = (author: ProjectModelInfo['author']) => {
                window.location.href = `/projects?userId=${author.id}`
            };

            const addStatusHandler = (text: string, id: string) => {
                deleteProject(id);
                setPageView('applications');
                notify({
                    title: text,
                    text: '',
                    type: 'success',
                    duration: 2000,
                })
            }


            return {
                projectModel,
                setPageView,
                goAuthorProject,
                addStatusHandler,
            }
        }
    }

</script>

<template>
    <div class="project-wrapper" v-if="projectModel">
        <white-button class="project-wrapper__button-back" @click="setPageView('applications')"> Назад </white-button>
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
    }

</style>
