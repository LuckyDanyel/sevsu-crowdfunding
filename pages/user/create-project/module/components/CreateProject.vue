<script lang="ts">
    import { storeToRefs } from 'pinia';
    import LocationProject from 'UI/locations/LocationProject.vue';
    import { IFileImage } from '@/src/types';
    import { IProjectInfo } from '@/src/models/project/projectModelInfo/types';
    import ProjectImages from '@/components/project/modification/ProjectImages.vue';
    import ProjectParrams from '@/components/project/modification/ProjectParrams.vue';
    import ProjectCategories from '@/components/project/modification/ProjectCategories.vue';
    import ProjectDescription from '@/components/project/modification/ProjectDescription.vue';
    import { useUserProjectsStore } from '@/pages/user/store/userProjectStore';
    import { useNotification } from '@kyvg/vue3-notification';
    import useCreateProject from '../use/useCreateProject';
    import { BasicButton, BasicLoader } from '@/UI';
    import { TCategory } from '~/src/types/Categories';

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
        async setup() {
            const { getCategories: categories } = storeToRefs(useUserProjectsStore());

            const { notify } = useNotification();

            const projectParams = ref<IProjectInfo<TCategory> | null>(null);
            const takenImages = ref<IFileImage[]>([]);
            const description = ref('');
            const isValidateParams = ref(false);
            
            const isValidateAllParams = computed(() => (unref(isValidateParams) && unref(description) && unref(takenImages).length))

            const { createProject, loadingProject } = useCreateProject(takenImages, projectParams, description);

            const createProjectHandler = () => {
                if(unref(isValidateAllParams)) {
                    createProject();
                    return;
                }
                notify({
                    title: 'Заполните все поля!',
                    text: 'Для успешного создания новго проекта - требуется заполнить все поля!',
                    type: 'error',
                    duration: 4000,
                })
            }

            return {
                takenImages,
                categories,
                projectParams,
                createProject,
                createProjectHandler,
                loadingProject,
                description,
                isValidateParams,
            }
        }
    }

</script>

<template>
    <div class="create-project">
        <location-project>
            <template #left>
                <project-images
                    v-model="takenImages"
                ></project-images>
            </template>
            <template #right>
                <project-parrams
                    :categories="categories"
                    @is-validate-params="($event) => isValidateParams = $event"
                    v-model="projectParams"
                ></project-parrams>
            </template>
            <template #down>
                <div class="create-project__description">
                    <project-description
                        v-model="description"
                    ></project-description>
                </div>
                <div class="create-project__button-wrapper">
                    <div class="create-project__button" v-if="!loadingProject">
                        <basic-button @click="createProjectHandler"> Отправить на проверку </basic-button>
                    </div>
                    <div class="create-project__button" v-if="loadingProject">
                        <basic-button>
                            <basic-loader></basic-loader>
                        </basic-button>
                    </div>
                </div>
            </template>
        </location-project>
    </div>
</template>

<style lang="scss">
    .create-project {
        &__description {
            margin-bottom: 16px;
        }
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