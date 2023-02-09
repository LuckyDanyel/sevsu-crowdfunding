import { basicUrl } from "@/src/api/constants";
import { projectsUser } from "./dataProjects";
import { IProjectCardUser } from "./types";

export const getUserPorjects = async (token: string): Promise<IProjectCardUser[]> => {
    return projectsUser;
}