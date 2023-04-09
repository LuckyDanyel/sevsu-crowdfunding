import { IProjectInfo } from '@/src/models/project/projectModelInfo/types';
import { IFiles } from '@/src/types';
import { Ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthUser } from '@src/store';
import { cteateProjectApi, uploadImagesYandex } from '../api/index';


export default function(images: Ref<IFiles[]>, project: Ref<Partial<IProjectInfo>>) {
    const loadingProject = ref(false);

    const { token } = storeToRefs(useAuthUser());

    const createProject = async () => {
        try {
            loadingProject.value = true;
            const projectFull: IProjectInfo = {
                ...unref(project),
                images: unref(images).map((image) => image.extension),
            } as IProjectInfo
            const uploadLinks = await cteateProjectApi(projectFull, unref(token));
            const response = await uploadImagesYandex(unref(images), uploadLinks)
        } catch (error) {
            
        }
        finally {
            loadingProject.value = false;
        }
    }

    return {
        createProject,
    }
}