<script lang="ts">
    import { storeToRefs } from 'pinia';
    import LocationProject from 'UI/locations/LocationProject.vue';
    import { IFileImage } from '@/src/types';
    import { IProjectInfo } from '@/src/models/project/projectModelInfo/types';
    import ProjectImages from '@/components/project/modification/ProjectImages.vue';
    import ProjectParrams from '@/components/project/modification/ProjectParrams.vue';
    import ProjectCategories from '@/components/project/modification/ProjectCategories.vue';
    import { useUserProjectsStore } from '@/pages/user/store/userProjectStore';
    import { BasicButton, BasicLoader } from '@/UI';
    import { TCategory } from '@/src/types/Categories';
    import ProjectDescription from '@/components/project/modification/ProjectDescription.vue';
    import { useNotification } from '@kyvg/vue3-notification';
    import useUpdateProject from '../use/useUpdateProject';

    export default {
        components: {
            ProjectImages,
            ProjectParrams,
            ProjectCategories,
            LocationProject,
            BasicButton,
            BasicLoader,
            ProjectDescription,
        },
        props: {
            idProject: {
                type: String,
                required: true,
                default: '',
            }
        },
        async setup(props) {
            const { idProject } = props;
            const { getProjectById } = useUserProjectsStore();
            const { getCategories: categories } = storeToRefs(useUserProjectsStore());

            const { notify } = useNotification();

            const projectParams = ref<IProjectInfo<TCategory> | null | undefined >(getProjectById(unref(idProject)));
            const getIamges = (): IFileImage[] => unref(projectParams)?.images.map((image) => ({ src: image, buffer: null, extension: ''})) || [];
            const takenImages = ref<IFileImage[]>(getIamges());
            const description = ref(getProjectById(unref(idProject))!.description);
            const isValidProjectParams = ref(false);

            const isAllParamsValid = computed(() => unref(isValidProjectParams) && unref(description) && unref(takenImages).length)

            const { updateProject, loadingUpdateProject } = useUpdateProject();

            const updateProjectHandler = (images: IFileImage[], projectInfo: IProjectInfo<TCategory>, description: string) => {
                if(unref(isAllParamsValid)) {
                    updateProject(images, projectInfo, description);
                    return;
                }
                notify({
                    title: 'Заполните все поля!',
                    text: `Для успешного обновления проекта - требуется заполнить все поля!`,
                    type: 'error',
                    duration: 4000,
                })
            }

            return {
                takenImages,
                categories,
                projectParams,
                loadingUpdateProject,
                isValidProjectParams,
                description,
                updateProjectHandler,
            }
        }
    }

</script>

<template>
    <div class="create-project" v-if="projectParams">
        <location-project>
            <template #left>
                <project-images
                    v-model="takenImages"
                ></project-images>
            </template>
            <template #right>
                <project-parrams
                    :categories="categories"
                    @is-validate-params="($event) => isValidProjectParams = $event"
                    v-model="projectParams"
                ></project-parrams>
            </template>
            <template #down>
                <project-description
                    v-model="description"
                ></project-description>
                <div class="create-project__button-wrapper">
                    <div class="create-project__button">
                        <basic-button v-if="!loadingUpdateProject" @click="updateProjectHandler(takenImages, projectParams, description)"> Отправить на проверку </basic-button>
                        <basic-button v-if="loadingUpdateProject">
                            <basic-loader />
                        </basic-button>
                    </div>
                </div>
            </template>
        </location-project>
    </div>
</template>

<style lang="scss">
    .create-project {
        &__button-wrapper {
            margin-top: 16px;
            display: flex;
            justify-content: flex-end;
        }
        &__button {
            flex: 1;
            max-width: 270px;
        }
    }
</style>