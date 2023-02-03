<script lang="ts" setup>
    import ProjectDescription from '~~/components/project/ProjectDescription.vue';
    import { BasicText } from 'UI';
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
            type: Number,
            default: 0,
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
            <basic-text
                class="project-down__item"
                :class="viewComponent === 'description' ? 'project-down__item_active' : '' "
                font='semi-bold' 
                size='large'
                @click="() => viewComponent = 'description'"
            > 
                Описание 
            </basic-text>
            <div v-if="isLogged" class="project-down__logged-content">
                <basic-text 
                    class="project-down__item"
                    :class="viewComponent === 'members' ? 'project-down__item_active' : '' "
                    font='semi-bold' 
                    size='large'
                    @click="hanlderMembers"
                > 
                    Участники 
                </basic-text>
                <basic-text 
                    class="project-down__item"
                    :class="viewComponent === 'comments' ? 'project-down__item_active' : '' "
                    font='semi-bold' 
                    size='large'
                    @click="handlerCommnents"
                > 
                    Комментарии 
                </basic-text>
            </div>
        </div>
        <div class="project-down__content">
            <project-description
                :description="description"
                v-if="viewComponent === 'description'"
            ></project-description>

            <project-comments
                :comments="comments"
                v-if="viewComponent === 'comments'"
            ></project-comments>
    
            <project-members
                :members="members"
                v-if="viewComponent === 'members'"
            ></project-members>
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
        &__item {
           padding: 4px 8px;
           color:  var(--color-main-type-1);
           cursor: pointer;
           &_active {
                color:  var(--color-table-heading);
                border-bottom: 2px solid var(--color-table-heading);
           }
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