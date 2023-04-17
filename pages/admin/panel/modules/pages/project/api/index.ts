import { basicUrl, tokenType } from "@/src/api/constants";
import { TProjectStatus } from "@/src/models/project/projectModelAbstract/types";

export const addStatusProject = async (token: string, idProject: string, status: TProjectStatus) => {
    const url = `${basicUrl}api/v1/project_management/change_status/${idProject}/`;
    const request = {
        "status": "approve",
    }
}