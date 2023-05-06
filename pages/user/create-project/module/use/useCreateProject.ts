import { IProjectInfo } from '@/src/models/project/projectModelInfo/types';
import { IFiles } from '@/components/project/modification';
import { Ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthUser } from '@src/store';
import { useUserProjectsStore } from '@/pages/user/store/userProjectStore';
import ProjectModelCard from '@/src/models/project/projectModelCard';
import { TCategory } from '~/src/types/Categories';
import { cteateProjectApi, uploadImages } from '../api/index';


export default function(images: Ref<IFiles[]>, project: Ref<Partial<IProjectInfo<TCategory>>> | Ref<null>) {
    const loadingProject = ref(false);

    const { addProject } = useUserProjectsStore();

    const { token } = storeToRefs(useAuthUser());

    const createProject = async () => {
        try {
            if(unref(project)) {
                loadingProject.value = true;
                const projectFull: IProjectInfo<string> = {
                    ...unref(project),
                    categories: unref(project)?.categories?.map((category) => category.id),
                    images: unref(images).map((image) => image.extension),
                } as IProjectInfo<string>
                const uploadLinks = await cteateProjectApi(projectFull, unref(token));
                const response = await uploadImages(unref(images), uploadLinks)
            }
        } catch (error) {
            
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