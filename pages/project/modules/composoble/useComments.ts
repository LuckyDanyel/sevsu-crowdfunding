import { getCommentsByProject } from "@/src/api/project";
import { storeToRefs } from "pinia";
import { useAuthUser } from "@/src/store";
import { addCommentProject } from '../api/index';
import { UserModelComment } from "@/src/models/user";

export default function(idProject: string) {
    const comments = ref<UserModelComment[]>([]);
    const loadingComments = ref(false);
    const loadingComment = ref(false);
    const commentsUser = ref<UserModelComment[]>([]);

    const { token, user } = storeToRefs(useAuthUser());

    const getComments = async () => {
        try {
            loadingComments.value = true;
            const commentsResponse = await getCommentsByProject(idProject);
            comments.value = commentsResponse.map((comment) => new UserModelComment(comment));
        } catch (error) {
            
        } finally {
            loadingComments.value = false;
        }
    }
    const addComment = async (text: string) => {
        try {
            if(text) {
                loadingComment.value = true;
                const comment = await addCommentProject(unref(token), { text, projectId: idProject });
                unref(commentsUser).push(new UserModelComment(comment));
            }
        } catch (error) {
            throw error;
        } finally {
            loadingComment.value = false;
        }
    };

    return {
        getComments,
        loadingComments,
        loadingComment,
        comments,
        addComment,
        commentsUser,
    }

}