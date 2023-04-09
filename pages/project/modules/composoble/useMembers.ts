import { unref } from 'vue';
import { UserModelMember } from '@/src/models/user';
import { getMembersByProject } from '@/src/api/project';

export default function (idProject: string) {
    const loadingMembers = ref(false);
    const members = ref<UserModelMember[]>([]);


    const getMembersByFirstClick = async () => {
        try {
            loadingMembers.value = true;
            const membersResponse = await getMembersByProject(idProject);
            members.value = membersResponse.map((member) => new UserModelMember(member));
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