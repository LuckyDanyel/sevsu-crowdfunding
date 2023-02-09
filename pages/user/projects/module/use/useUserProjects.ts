
import { Pinia } from "pinia";
import { useAuthUser } from "@src/store";
import { getUserPorjects } from "../api";
import ProjectModelUser from "../model/ProjectUser";

export default async function() {
    const projectsModelUser = ref<ProjectModelUser[]>([]);
    const { token } = useAuthUser();
    const projectsUser = await getUserPorjects(token);
    projectsModelUser.value = projectsUser.map((project) => new ProjectModelUser(project));
    
    return {
        projectsModelUser,
    }
}