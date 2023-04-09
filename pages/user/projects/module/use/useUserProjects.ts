
import { storeToRefs } from "pinia";
import { useAuthUser } from "@src/store";
import { getUserPorjects } from "../api";
import { ProjectModelCard } from '@/src/models/project';

export default async function() {
    const projectsModelUser = ref<ProjectModelCard[]>([]);
    const { token } = storeToRefs(useAuthUser());
    const projectsUser = await getUserPorjects(unref(token));
    projectsModelUser.value = projectsUser.map((project) => new ProjectModelCard(project));
    
    return {
        projectsModelUser,
    }
}