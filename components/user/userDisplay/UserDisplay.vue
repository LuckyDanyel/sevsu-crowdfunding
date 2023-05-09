<script lang="ts" setup>
    import { PropType } from 'vue';
    import { BasicText, BasicIcon } from 'UI';

    defineProps({
        name: {
            type: String,
            default: '',
        },
        roleName: {
            type: String,
            default: '',
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        email: {
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
            :style="icon ? `background-image: url('${icon}');` : ''"
        ></div>
        <div>
            <basic-text 
                font='semi-bold'
                :class="`user-display__profile-name_${size}`"
            > {{ name }} </basic-text>
            <basic-text 
                class="user-display__profile-gray" 
                :class="`user-display__profile-gray_${size}`" 
                v-if="email"
            > {{ email}} </basic-text>
        </div>
        <div class="user-display__admin" v-if="isAdmin">
           <div class="user-display__admin-icon"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.user-display {
    display: flex;
    position: relative;
    align-items: center;
    &__admin-icon {
        width: 16px;
        height: 12px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('./img/coron.svg');
    }
    &__admin {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        position: absolute;
        top: -6px;
        left: 0;
    }
    &__profile-gray {
        color: var(--color-gray-type-2);
        font-size: 12px;
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
        min-width: 40px;
        height: 40px;
        border-radius: 100%;
        overflow: hidden;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: 8px;
        background-image: url('../img/profile-no-photo.svg');

        &_small {
            height: 30px;
            min-width: 30px;
        }
    }
}
</style>