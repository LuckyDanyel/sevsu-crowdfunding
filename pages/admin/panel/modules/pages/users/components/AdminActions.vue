<script lang="ts" setup>
    import { PropType } from 'vue';
    import { UserModelAbstract } from '@/src/models/user';
    import UserChangeRole from './UserChangeRole.vue';

    defineProps({
        user: {
            type: Object as PropType<UserModelAbstract>,
            required: true,
        }
    })

</script>

<template>
    <div class="admin-actions">
        <user-change-role 
            @taken-role="($event) => $emit('takenRole', $event)"
            :user="user"
        ></user-change-role>
    </div>
</template>

<style lang="scss"></style>