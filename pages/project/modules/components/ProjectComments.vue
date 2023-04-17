<script lang="ts" setup>
    import { PropType, unref } from 'vue';
    import UserDisplay from '@/components/user/userDisplay/UserDisplay.vue';
    import { BasicText, BasicButton } from 'UI';
    import InputArea from '@/components/inputs/InputArea.vue';
    import UserModelComment from '@src/models/user/userModelComment';
    import { addCommentProject } from '../api/index';
    import useComments from '../composoble/useComments';

    const props = defineProps({
        idProject: {
            type: String,
            default: '',
        },
    })

    const { idProject } = props;

    const { getComments, loadingComments, comments, addComment } = useComments(idProject);
    await getComments();
    const message = ref('');

    const numberPage = ref(1);

    const limitation = 10;

    const commentsPagination = computed(() => {
        return unref(comments).filter((comment, index) => index < unref(numberPage) * limitation);
    });

    const addCommentProject = () => {
        addComment(unref(message));
    }

    const isNextComment = computed(() => !!unref(comments)[unref(numberPage) * limitation])
   

</script>

<template>
    <div class="project-comments">
        <div class="project-comments__container">
            <div 
                class="project-comments__user"
                v-for="userCommnet in commentsPagination"
                :key="userCommnet.id"
            >
                <user-display
                    :name="userCommnet.user.name"
                    :icon="userCommnet.user.icon"
                />
                <basic-text size='medium-large' class="project-comments__text"> 
                    {{ userCommnet.text }}
                </basic-text>
                <basic-text font='semi-bold' class="project-comments__date">
                    {{ userCommnet.dateCommentText }}
                </basic-text>
            </div>
            <div class="project-comments__more-comments" v-if="isNextComment" @click="() => numberPage = numberPage + 1">
                <basic-button> Показать больше </basic-button>
            </div>
        </div>
        <div class="project-comments__add-comment">
            <input-area 
                v-model="message" 
                class="project-comments__message"
                placeholder="Написать комментарий"
            ></input-area>
            <basic-button class="project-comments__add" @click="addCommentProject"> Добавить </basic-button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .project-comments {
        &__container {
            height: 450px;
            overflow: auto;
        }
        &__add-comment {
            margin-top: 20px;
            display: flex;
        }
        &__message {
            flex: 3;
        }
        &__add {
            flex: 1;
            margin-left: 20px;
        }
        &__text {
            margin: 12px 0;
        }
        &__date {
            color: var(--color-gray-type-2);
        }
        &__user {
            margin-bottom: 30px;
        }
    }

</style>