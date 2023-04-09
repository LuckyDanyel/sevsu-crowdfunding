<script lang="ts">
    import { getCategories } from '@/src/api/project';
    import LocationProject from 'UI/locations/LocationProject.vue';
    import { IFiles } from '@/src/types';
    import { IProjectInfo } from '@/src/models/project/projectModelInfo/types';
    import ProjectImages from '@/components/project/modification/ProjectImages.vue';
    import ProjectParrams from '@/components/project/modification/ProjectParrams.vue';
    import ProjectCategories from '@/components/project/modification/ProjectCategories.vue';
    import useCreateProject from '../use/useCreateProject';
    import { BasicButton } from '@/UI';

    export default {
        components: {
            ProjectImages,
            ProjectParrams,
            ProjectCategories,
            LocationProject,
            BasicButton,
        },
        async setup() {
            const takenImages = ref<IFiles[]>([]);
            const categories = await getCategories();

            const projectParams = ref<IProjectInfo | null>(null);

            const { createProject } = useCreateProject(takenImages, projectParams);

            return {
                takenImages,
                categories,
                projectParams,
                createProject,
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
                    <div class="create-project__button">
                        <basic-button @click="createProject"> Отправить на проверку </basic-button>
                    </div>
                </div>
            </template>
        </location-project>
    </div>
</template>

<style lang="scss"></style>