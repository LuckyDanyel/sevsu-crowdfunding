<script lang="ts" setup>
    import { useAuthUser } from '@/src/store';
    import { storeToRefs } from 'pinia';
    import { BasicLoader, BasicButton } from 'UI';
    import { addLikesProject } from '../api';

    const emit = defineEmits(['addLike']);

    const { idProject } = defineProps({
        isLogged: {
            type: Boolean,
            default: false,
        },
        isUserSupportedProject: {
            type: Boolean,
            default: false,
        },
        loadingLikes: {
            type: Boolean,
            default: false,
        },
        idProject: {
            type: String,
            required: true,
        }
    })
    const { token } = storeToRefs(useAuthUser());
    const { getUserLikesProject, setLoadingLikes } = useAuthUser();

    const addLikesHandler = async () => {
        try {
            setLoadingLikes(true)
            await addLikesProject(idProject, unref(token));
            await getUserLikesProject();
            emit('addLike');
        } catch (error) {
        } finally {
            setLoadingLikes(false);
        }
    }

</script>

<template>
    <div class="project-button-support" v-if="isLogged">
        <div class="project-button-support__container">
            <basic-button 
                v-if="isUserSupportedProject"
                :bg-color="'var(--color-green-1)'"
                :text-color="'white'"
            > Проект поддержан </basic-button>

            <basic-button 
                v-else
                @click="addLikesHandler"
            > Поддержать проект </basic-button>
    
            <div class="project-button-support__loader" v-show="loadingLikes">
                <basic-button class="project-button-support__fake" :is-active="false"> </basic-button>
                <basic-loader :loading="loadingLikes"></basic-loader>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .project-button-support {
        &__container {
            position: relative;
        }
        &__loader {
            width: 100%;
            height: 100%;
            top: 0;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__fake {
            position: absolute;
        }
    }

</style>