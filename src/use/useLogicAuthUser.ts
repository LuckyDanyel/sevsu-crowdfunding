import { storeToRefs } from "pinia";
import { useAuthUser } from "@/store/authUser";

export default function() { // Данный use лучше использовать одни раз на странице, так как тут стоит watch
    const loadingUserUpdates = ref(false);
    const { getUserLikesProject } = useAuthUser();
    const { isLogged, likesProjectByUser } = storeToRefs(useAuthUser());

    watch(isLogged, async (value) => {
        if(value) {
            try {
                loadingUserUpdates.value = true;
                await getUserLikesProject();
            } catch (error) {
                
            } finally {
                loadingUserUpdates.value = false;
            }
        }
    });

    return {
        isLogged,
        likesProjectByUser,
        loadingUserUpdates,
        getUserLikesProject,
    }
}