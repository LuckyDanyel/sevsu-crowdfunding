import { IBaseResponseModification } from '@/pages/user/modification/types';

export interface IResponseEmailConfirm extends IBaseResponseModification {
    is_confirm: boolean;
}