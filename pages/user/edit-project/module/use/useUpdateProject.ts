import { IFileImage } from '@/src/types';
import { IProjectInfo } from "@/src/models/project/projectModelInfo/types"
import { TCategory } from "@/src/types/Categories"
import { uploadImages } from '@/pages/user/api';
import { storeToRefs } from 'pinia';
import { useAuthUser } from '@/src/store';
import getImageFileByUrl from '@/src/services/files/getImageFileByUrl';
import { useUserProjectsStore } from '@/pages/user/store/userProjectStore';
import { updateProjectApi } from '../api';

export default function() {

    const loadingUpdateProject = ref(false);

    const { getProjectById, deleteProject, addProject, setUpdatedProjectId } = useUserProjectsStore();

    const { token } = storeToRefs(useAuthUser());

    const updateProject = async (images: IFileImage[], projectInfo: IProjectInfo<TCategory>, description: string) => {
        try {
            loadingUpdateProject.value = true;
            const imagesWithUpload = images.filter((image) => image.buffer === null);
            const imagesWithBuffer = images.filter((image) => !!image.buffer);
            const imageFiles = await Promise.all(imagesWithUpload.map( async (img) => await getImageFileByUrl(img.src)));
            const allImages = [...imageFiles, ...imagesWithBuffer];
            const project = await updateProjectApi(unref(token), {...projectInfo, description}, allImages);
            await uploadImages(allImages, project.upload_links)
            deleteProject(project.id);
            addProject(project);
            setUpdatedProjectId(project.id);
            navigateTo('/user/projects');

        } catch (error) {
            const project = getProjectById(projectInfo.id);
            if(project) {
                const imageFiles = await Promise.all(project.images.map( async (img) => await getImageFileByUrl(img)));
                const updatedProject = await updateProjectApi(unref(token), project, imageFiles);
                await uploadImages(imageFiles, updatedProject.upload_links)
            }
            
        } finally {
            loadingUpdateProject.value = false;
        }

    }

    return {
        updateProject,
        loadingUpdateProject,
    };

}