import { storeToRefs } from "pinia";
import { useAuthUser } from "@src/store";

export default function() { // Данный use лучше использовать одни раз на странице, так как тут стоит watch
    const loadingUserUpdates = ref(false);
    const { getUserLikesProject, setLoadingLikes } = useAuthUser();
    const { isLogged, likesProjectByUser, loadingUserLikes } = storeToRefs(useAuthUser());

    watch(isLogged, async (value) => {
        if(value) {
            try {
                setLoadingLikes(true);
                await getUserLikesProject();
            } catch (error) {
                
            } finally {
                setLoadingLikes(false);
            }
        }
    });

    return {
        isLogged,
        likesProjectByUser,
        loadingUserUpdates,
        loadingUserLikes,
        getUserLikesProject,
    }
}