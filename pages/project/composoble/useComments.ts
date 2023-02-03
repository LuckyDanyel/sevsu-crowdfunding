import { getCommentsByProject } from "@/api/project";
import { IProjectCommentUser } from "../types";

export default function(idProject: number) {
    const comments = ref<IProjectCommentUser[]>([]);
    const loadingComments = ref(false);

    const getCommentsByFirstClick = async () => {
        try {
            loadingComments.value = true;
            const commentsResponse = await getCommentsByProject(idProject);
            comments.value = commentsResponse;
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