<script lang="ts">
    import { storeToRefs } from 'pinia';
    import LocationProject from 'UI/locations/LocationProject.vue';
    import { IFiles } from '@/components/project/modification';
    import { IProjectInfo } from '@/src/models/project/projectModelInfo/types';
    import ProjectImages from '@/components/project/modification/ProjectImages.vue';
    import ProjectParrams from '@/components/project/modification/ProjectParrams.vue';
    import ProjectCategories from '@/components/project/modification/ProjectCategories.vue';
    import { useUserProjectsStore } from '@/pages/user/store/userProjectStore';
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
        },
        async setup() {
            const takenImages = ref<IFiles[]>([]);
            const { getCategories: categories } = storeToRefs(useUserProjectsStore());

            const projectParams = ref<IProjectInfo<TCategory> | null>(null);


            const { createProject, loadingProject } = useCreateProject(takenImages, projectParams);

            return {
                takenImages,
                categories,
                projectParams,
                createProject,
                loadingProject,
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
                    v-model="projectParams"
                ></project-parrams>
            </template>
            <template #down>
                <div class="create-project__button-wrapper">
                    <div class="create-project__button" v-if="!loadingProject">
                        <basic-button @click="createProject"> Отправить на проверку </basic-button>
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