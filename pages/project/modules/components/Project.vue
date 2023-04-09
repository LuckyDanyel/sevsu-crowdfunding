<script lang="ts" >
    import { unref } from 'vue';
    import { LocationProject } from 'UI';
    import Carusel from '@/components/carusel/Carusel.vue';
    import ProjectInfo from '@/components/project/view/ProjectInfo.vue';
    import { ProjectModelInfo } from '@src/models/project';
    import { getProject } from '@/src/api/project';
    import useLogicAuthUser from '@src/use/useLogicAuthUser';
    import ProjectButtonSupported from './ProjectButtonSupported.vue';
    import ProjectBlockDown from './ProjectBlockDown.vue';

    export default {
        components: {
            LocationProject,
            Carusel,
            ProjectInfo,
            ProjectButtonSupported,
            ProjectBlockDown,
        },
        props: {
            id: {
                type: String,
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
                loadingUserLikes,
            } = useLogicAuthUser();
            let projectModel: ProjectModelInfo | null = null;
            let keyProjectUpdate = ref('');
            if(process.server) {
                await getUserLikesProject();
            }
            if(process.client) {
                const projectResponse = await getProject(id);
                projectModel = new ProjectModelInfo(projectResponse);
            }
            const isUserSupportedProject = computed(() => unref(likesProjectByUser).indexOf(projectModel.id) !== -1);

            const addLikeProject = () => {
                if(projectModel) {
                    projectModel.addLike();
                    keyProjectUpdate.value = projectModel.uniqueKey;
                    console.log(projectModel.uniqueKey);
                }
            }


            return {
                isLogged, 
                getUserLikesProject,
                projectModel,
                loadingUserUpdates, 
                likesProjectByUser,
                isUserSupportedProject,
                addLikeProject,
                loadingUserLikes,
                keyProjectUpdate,
            }
        }
    }

</script>

<template>
    <div class="project-wrapper" v-if="projectModel">
        <location-project>
            <template #left>
                <client-only>
                    <carusel
                        :images="projectModel.images"
                        :items-show="projectModel.images.length > 7 ? 7.5 : projectModel.images.length"
                    >
                    </carusel>
                </client-only>
            </template>
            <template #right>
                <project-info
                    :key="keyProjectUpdate"
                    :is-user-supported-project="isUserSupportedProject"
                    :loading-likes="loadingUserLikes"
                    :project="projectModel"
                >
                    <template #button>
                        <project-button-supported
                            :id-project="projectModel.id"
                            :loading-likes="loadingUserLikes"
                            :is-logged="isLogged"
                            :is-user-supported-project="isUserSupportedProject"
                            @addLike="addLikeProject"
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


<style lang="scss">
</style>