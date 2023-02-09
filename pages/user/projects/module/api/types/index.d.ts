import { IBasicProject } from "@src/models/project/projectModelAbstract/types";
import { TProjectStatus } from "../../types";

export interface IProjectCardUser extends IBasicProject {
    image: string;
    categories?: undefined;
    shortText?: undefined;
    status: TProjectStatus;
}