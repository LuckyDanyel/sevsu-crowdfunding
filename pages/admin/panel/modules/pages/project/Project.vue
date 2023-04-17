<script lang="ts">
    import { LocationProject } from '@/UI';
    import Carusel from '@/components/carusel/Carusel.vue';
    import ProjectInfo from '@/components/project/view/ProjectInfo.vue';
    import { ProjectModelInfo } from '@src/models/project';
    import { storeToRefs } from 'pinia';
    import { useAdminStore } from '../../store/useAdminPageStore';
    import ProjectActions from './components/ProjectActions.vue';

    export default {
        components: {
            LocationProject,
            Carusel,
            ProjectInfo,
            ProjectActions,
        },
        setup(props, { emit }) {
            const { getProjectByTakenId } = storeToRefs(useAdminStore())

            const projectModel = computed(() => {
                if(unref(getProjectByTakenId)) {
                    return new ProjectModelInfo(unref(getProjectByTakenId));
                }
            })

            const goAuthorProject = (author: ProjectModelInfo['author']) => {
                window.location.href = `/projects?userId=${author.id}`
            };


            return {
                projectModel,
                goAuthorProject,
            }
        }
    }

</script>

<template>
    <div class="project-wrapper">
        <template v-if="projectModel">
            <location-project>
                <template #left>
                    <carusel
                        :images="projectModel.images"
                        :items-show="projectModel.images.length > 7 ? 7.5 : projectModel.images.length"
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
                    :project="projectModel"
                ></project-actions>
            </div>
        </template>
    </div>
</template>
