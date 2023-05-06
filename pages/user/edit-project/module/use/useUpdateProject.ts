import { IFileImage } from "@/components/project/modification"
import { IProjectInfo } from "@/src/models/project/projectModelInfo/types"
import { TCategory } from "@/src/types/Categories"

export default function() {

    const loadingUpdateProject = ref(false);

    const updateProject = (images: IFileImage[], projectInfo: IProjectInfo<TCategory>) => {
        const imagesWithUpload = images.filter((image) => image.buffer === null);
        const imagesWithBuffer = images.filter((image) => !!image.buffer);
        console.log(imagesWithUpload, 'upload');
        console.log(imagesWithBuffer, 'Buffer');
    }

    return {
        updateProject,
        loadingUpdateProject,
    };

}