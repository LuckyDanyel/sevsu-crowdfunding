<script lang="ts" >
    import { LocationProject } from 'UI';
    import Carusel from '@/components/carusel/Carusel.vue';
    import ProjectInfo from '@/components/project/view/ProjectInfo.vue';
    import ProjectModelInfo from '@/src/models/project/projectModelInfo';
    import ProjectDescriptionView from '@/components/project/view/ProjectDescription.vue';
    import { useUserProjectsStore } from '../../store/userProjectStore';

    export default {
        components: {
            LocationProject,
            Carusel,
            ProjectInfo,
            ProjectDescriptionView,
        },
        props: {
            id: {
                type: String,
                required: true,
            },
        },
        setup(props, { emit }) {
            const { id } = props;

            const { getProjectById } = useUserProjectsStore();

            const projectModel = ref<ProjectModelInfo | null>(getProjectById(id) ? new ProjectModelInfo(getProjectById(id)) : null)

            const goAuthorProject = (author: ProjectModelInfo['author']) => {
                window.open(`/projects?userId=${author.id}`, '_blank')
            };


            return {
                goAuthorProject,
                projectModel,
            }
        }
    }

</script>

<template>
    <div class="project-wrapper" v-if="projectModel">
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
                >
                </project-info>
            </template>
            <template #down>
                <project-description-view
                    :description="projectModel.description"
                ></project-description-view>
            </template>
        </location-project>
    </div>
</template>