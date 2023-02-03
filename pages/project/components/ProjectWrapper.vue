<script lang="ts" setup>
    import { PropType, unref } from 'vue';
    import LocationProject from '@/components/location/LocationProject.vue';
    import Carusel from '@/components/carusel/Carusel.vue';
    import ProjectInfo from '~~/components/project/ProjectInfo.vue';
    import ProjectModel from '@/components/project/model/ProjectModel';
    import { IProject } from '@/components/project/types';
    import useLogicAuthUser from '@/composoble/useLogicAuthUser';
    import ProjectButtonSupported from './ProjectButtonSupported.vue';
    import ProjectBlockDown from './ProjectBlockDown.vue';

    const { project } = defineProps({
        project: {
            type: Object as PropType<IProject>,
            required: true,
        },
    })
    const { 
        isLogged, 
        getUserLikesProject, 
        loadingUserUpdates, 
        likesProjectByUser,
    } = useLogicAuthUser();


    const projectModel = new ProjectModel(project);


    const isUserSupportedProject = computed(() => unref(likesProjectByUser).indexOf(projectModel.id) !== -1);


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