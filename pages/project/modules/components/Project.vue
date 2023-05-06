<script lang="ts" >
    import { unref } from 'vue';
    import { LocationProject } from 'UI';
    import Carusel from '@/components/carusel/Carusel.vue';
    import ProjectInfo from '@/components/project/view/ProjectInfo.vue';
    import ProjectModelInfo from '@/src/models/project/projectModelInfo';
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
        async setup(props, { emit }) {
            const { id } = props;
            const { 
                isLogged, 
                getUserLikesProject, 
                loadingUserUpdates, 
                likesProjectByUser,
                loadingUserLikes,
            } = useLogicAuthUser();
            let keyProjectUpdate = ref('');
            const projectModel = ref<ProjectModelInfo | null>();

            onMounted( async () => {
                const [projectResponse] = await Promise.all([getProject(id), getUserLikesProject()])
                projectModel.value = new ProjectModelInfo(projectResponse);
                emit('projectLoaded')
            })

            const isUserSupportedProject = computed(() => unref(likesProjectByUser).indexOf(unref(projectModel)?.id || '') !== -1);

            const goAuthorProject = (author: ProjectModelInfo['author']) => {
                window.location.href = `/projects?userId=${author.id}`
            };


            return {
                isLogged, 
                getUserLikesProject,
                projectModel,
                loadingUserUpdates, 
                likesProjectByUser,
                isUserSupportedProject,
                loadingUserLikes,
                keyProjectUpdate,
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
                        :is-user-supported-project="isUserSupportedProject"
                        :loading-likes="loadingUserLikes"
                        :project="projectModel"
                        @author-click="goAuthorProject"
                    >
                        <template #button>
                            <project-button-supported
                                :id-project="projectModel.id"
                                :loading-likes="loadingUserLikes"
                                :is-logged="isLogged"
                                :is-user-supported-project="isUserSupportedProject"
                                @addLike="() => projectModel?.addLike()"
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
        </template>
    </div>
</template>