import { unref } from 'vue';
import { IProjectMember } from '../types';
import { getMembersByProject } from "@/api/project";

export default function (idProject: number) {
    const loadingMembers = ref(false);
    const members = ref<IProjectMember[]>([]);


    const getMembersByFirstClick = async () => {
        try {
            loadingMembers.value = true;
            const membersResponse = await getMembersByProject(idProject);
            members.value = membersResponse;
        } catch (error) {
            
        } finally {
            loadingMembers.value = false;
        }
    }

    const getMoreMembers = async (numberPage: number) => {
        console.log('moreMembers', numberPage);
    }

    return {
        loadingMembers,
        members,
        getMembersByFirstClick,
        getMoreMembers,
    }
}