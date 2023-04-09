import { defineStore } from 'pinia';
import { IBaseResponseModification } from '../../types';


export const useResponseState = defineStore({
    id: 'base-response',
    state: () : { baseResponse: IBaseResponseModification } => {
        return {
            baseResponse: {
                type_modification: ''
            }
        }
    },
    actions: {
        setDefaultState(baseResponse: IBaseResponseModification) {
            this.baseResponse = baseResponse;
        }
    },
})