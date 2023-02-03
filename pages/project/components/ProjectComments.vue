<script lang="ts" setup>
    import { PropType, unref } from 'vue';
    import UserDisplay from '@/components/user/userDisplay/UserDisplay.vue';
    import { BasicText, BasicButton } from 'UI';
    import InputArea from '@/components/inputs/InputArea.vue';
    import ProjectModelCommentUser from '../model/ProjectModelCommentUser';

    const props = defineProps({
        comments: {
            type: Array as PropType<ProjectModelCommentUser[]>,
            default: () => [],
        }
    })
    
    const { comments } = toRefs(props);

    const message = ref('');

    const numberPage = ref(1);

    const commentsPagination = computed(() => unref(comments));

   

</script>

<template>
    <div class="project-comments">
        <div class="project-comments__container">
            <div 
                class="project-comments__user"
                v-for="comment in commentsPagination"
                :key="comment.id"
            >
                <user-display
                    :name="comment.user.name"
                    :icon="comment.user.icon"
                />
                <basic-text size='medium-large' class="project-comments__text"> 
                    {{ comment.text }}
                </basic-text>
                <basic-text font='semi-bold' class="project-comments__date">
                    {{ comment.messageDate }}
                </basic-text>
            </div>
            <div class="project-comments__more-comments">
                <basic-button> Показать больше </basic-button>
            </div>
        </div>
        <div class="project-comments__add-comment">
            <input-area 
                v-model="message" 
                class="project-comments__message"
                placeholder="Написать комментарий"
            ></input-area>
            <basic-button class="project-comments__add"> Добавить </basic-button>
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