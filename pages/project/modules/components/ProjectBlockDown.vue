<script lang="ts" setup>
    import ProjectDescription from '@/components/project/view/ProjectDescription.vue';
    import { TextTabs } from 'UI';
    import ProjectMembers from './ProjectMembers.vue';
    import ProjectComments from './ProjectComments.vue';
    import useMembers from '../composoble/useMembers';
    import useComments from '../composoble/useComments';

    const props = defineProps({
        description: {
            type: String,
            default: '',
        },
        isLogged: {
            type: Boolean,
            default: false,
        },
        idProject: {
            type: String,
            default: '',
        }
    })

    const { idProject } = props
    const { isLogged } = toRefs(props);

    const viewComponent = ref<'description' | 'members' | 'comments'>('description');

    const { getMembersByFirstClick, loadingMembers, members, } = useMembers(idProject);
    const { getCommentsByFirstClick, loadingComments, comments, addComment } = useComments(idProject);

    const hanlderMembers = () => {
        viewComponent.value = 'members';
        getMembersByFirstClick();
    }

    const handlerCommnents = () => {
        viewComponent.value = 'comments';
        getCommentsByFirstClick();
    }

    watch(isLogged, (value) => {
        if(!value) {
            viewComponent.value = 'description';
        }
    });

</script>


<template>
    <div class="project-down">
        <div class="project-down__tabs">
            <text-tabs
                :is-active="viewComponent === 'description'"
                @click="() => viewComponent = 'description'"
            > 
                Описание 
            </text-tabs>
            <div v-if="isLogged" class="project-down__logged-content">
                <text-tabs 
                    :is-active="viewComponent === 'members'"
                    @click="hanlderMembers"
                > 
                    Участники 
                </text-tabs>
                <text-tabs
                    :is-active="viewComponent === 'comments'"
                    @click="handlerCommnents"
                > 
                    Комментарии 
                </text-tabs>
            </div>
        </div>
        <div class="project-down__content">
            <project-description
                :description="description"
                v-if="viewComponent === 'description'"
            ></project-description>
            <project-members
                :members="members"
                v-if="viewComponent === 'members'"
            ></project-members>

            <project-comments
                :comments="comments"
                v-if="viewComponent === 'comments'"
            ></project-comments>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .project-down {
        &__logged-content {
            display: flex;
        }
        &__tabs {
            display: flex;
            justify-content: center;
        }
        &__content {
            display: flex;
            flex-direction: column;
            margin-top: 32px;
            padding: 32px;
            border-radius: 20px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
            min-height: 580px;
        }
        
    }

</style>