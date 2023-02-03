<script lang="ts" setup>
    import { PropType } from 'vue';
    import { BasicText } from 'UI';

    defineProps({
        name: {
            type: String,
            default: '',
        },
        roleName: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        size: {
            type: String as PropType<'medium' | 'small'>,
            default: 'medium'
        }
    })

</script>


<template>
    <div class="user-display">
        <div 
            class="user-display__profile-icon"
            :class="`user-display__profile-icon_${size}`"
            :style="`background-image: url('${icon}');`"
        ></div>
        <div>
            <basic-text 
                font='semi-bold'
                :class="`user-display__profile-name_${size}`"
            > {{ name }} </basic-text>
            <basic-text 
                class="user-display__profile-role" 
                :class="`user-display__profile-role_${size}`" 
                v-if="roleName"
            > {{ roleName}} </basic-text>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.user-display {
    display: flex;
    align-items: center;
    &__profile-role {
        color: var(--color-gray-type-2);

        &_small {
            font-size: 11px;
        }
    }
    &__profile-name {
        &_small {
            font-size: 12px;
        }
    }
    &__profile-icon {
        background-color: black;
        min-width: 40px;
        height: 40px;
        border-radius: 100%;
        overflow: hidden;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: 8px;

        &_small {
            height: 30px;
            min-width: 30px;
        }
    }
}
</style>