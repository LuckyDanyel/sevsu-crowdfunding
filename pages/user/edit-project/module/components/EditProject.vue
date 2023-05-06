<script lang="ts">
    import { storeToRefs } from 'pinia';
    import LocationProject from 'UI/locations/LocationProject.vue';
    import { IFileImage } from '@/components/project/modification';
    import { IProjectInfo } from '@/src/models/project/projectModelInfo/types';
    import ProjectImages from '@/components/project/modification/ProjectImages.vue';
    import ProjectParrams from '@/components/project/modification/ProjectParrams.vue';
    import ProjectCategories from '@/components/project/modification/ProjectCategories.vue';
    import { useUserProjectsStore } from '@/pages/user/store/userProjectStore';
    import { BasicButton, BasicLoader } from '@/UI';
    import { TCategory } from '~/src/types/Categories';
    import useUpdateProject from '../use/useUpdateProject';

    export default {
        components: {
            ProjectImages,
            ProjectParrams,
            ProjectCategories,
            LocationProject,
            BasicButton,
            BasicLoader,
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

            const projectParams = ref<IProjectInfo<TCategory> | null | undefined >(getProjectById(unref(idProject)));
            const getIamges = (): IFileImage[] => unref(projectParams)?.images.map((image) => ({ src: image, buffer: null, extension: ''})) || [];
            const takenImages = ref<IFileImage[]>(getIamges());

            const { updateProject, loadingUpdateProject } = useUpdateProject();

            return {
                takenImages,
                categories,
                projectParams,
                updateProject,
                loadingUpdateProject,
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
                    v-model="projectParams"
                ></project-parrams>
            </template>
            <template #down>
                <div class="create-project__button-wrapper">
                    <div class="create-project__button">
                        <basic-button v-if="!loadingUpdateProject" @click="updateProject(takenImages, projectParams)"> Отправить на проверку </basic-button>
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
            display: flex;
            justify-content: flex-end;
        }
        &__button {
            flex: 1;
            max-width: 270px;
        }
    }
</style>