<script lang="ts" >
    import { unref } from 'vue';
    import { LocationProject } from 'UI';
    import Carusel from '@/components/carusel/Carusel.vue';
    import ProjectInfo from '@/components/project/ProjectInfo.vue';
    import { ProjectModelInfo } from '@src/models/project';
    import { getProject } from '@/src/api/project';
    import useLogicAuthUser from '@src/use/useLogicAuthUser';
    import ProjectButtonSupported from './ProjectButtonSupported.vue';
    import ProjectBlockDown from './ProjectBlockDown.vue';


    export default defineNuxtComponent({
        components: {
            LocationProject,
            Carusel,
            ProjectInfo,
            ProjectButtonSupported,
            ProjectBlockDown,
        },
        props: {
            id: {
                type: Number,
                required: true,
            },
        },
        async setup(props) {
            const { id } = props;
            const { 
                isLogged, 
                getUserLikesProject, 
                loadingUserUpdates, 
                likesProjectByUser,
            } = useLogicAuthUser();
            const projectResponse = await getProject(id);
            const projectModel = new ProjectModelInfo(projectResponse);
            const isUserSupportedProject = computed(() => unref(likesProjectByUser).indexOf(projectModel.id) !== -1);


            return {
                isLogged, 
                getUserLikesProject,
                projectModel,
                loadingUserUpdates, 
                likesProjectByUser,
                isUserSupportedProject,
            }
        }
    })

</script>

<template>
    <div class="project-wrapper">
        <location-project>
            <template #left>
                <client-only>
                    <carusel
                        :images="projectModel.images"
                    ></carusel>
                </client-only>
            </template>
            <template #right>
                <project-info
                    :is-user-supported-project="isUserSupportedProject"
                    :loading-likes="loadingUserUpdates"
                    :project="projectModel"
                >
                    <template #button>
                        <project-button-supported
                            :loading-likes="loadingUserUpdates"
                            :is-logged="isLogged"
                            :is-user-supported-project="isUserSupportedProject"
                        ></project-button-supported>
                    </template>
                </project-info>
            </template>
            <template #down>
                <project-block-down
                    :id-project="projectModel.id"
                    :is-logged="isLogged"
                    :description="projectModel.description"
                ></project-block-down>
            </template>
        </location-project>
    </div>
</template>