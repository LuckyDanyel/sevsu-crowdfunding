import { IProjectInfo } from '@/src/models/project/projectModelInfo/types';
import { IFileImage } from '@/src/types';
import { Ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthUser } from '@src/store';
import { useUserProjectsStore } from '@/pages/user/store/userProjectStore';
import ProjectModelInfo from '@/src/models/project/projectModelInfo';
import { TCategory } from '@/src/types/Categories';
import { useNotification } from '@kyvg/vue3-notification';
import { uploadImages } from '@/pages/user/api';
import { cteateProjectApi } from '../api/index';


export default function(images: Ref<IFileImage[]>, project: Ref<Partial<IProjectInfo<TCategory>>> | Ref<null>, description: Ref<string>) {
    const loadingProject = ref(false);

    const { addProject, setAddedProjectId } = useUserProjectsStore();

    const { notify } = useNotification();

    const { token } = storeToRefs(useAuthUser());

    const createProject = async () => {
        try {
            if(unref(project)) {
                loadingProject.value = true;
                const projectFull: IProjectInfo<string> = {
                    ...unref(project),
                    categories: unref(project)?.categories?.map((category) => category.id),
                    images: unref(images).map((image) => image.extension),
                    description: unref(description),
                } as IProjectInfo<string>
                const dataProject = await cteateProjectApi(projectFull, unref(token));
                await uploadImages(unref(images), dataProject.upload_links)
                await navigateTo('/user/projects')
                addProject(dataProject);
                setAddedProjectId(dataProject.id);
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            loadingProject.value = false;
        }
    }

    return {
        createProject,
        loadingProject,
    }
}