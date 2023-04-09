import { getCommentsByProject } from "@/src/api/project";
import { UserModelComment } from "@/src/models/user";

export default function(idProject: string) {
    const comments = ref<UserModelComment[]>([]);
    const loadingComments = ref(false);

    const getCommentsByFirstClick = async () => {
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

    };

    return {
        getCommentsByFirstClick,
        loadingComments,
        comments,
        addComment,
    }

}