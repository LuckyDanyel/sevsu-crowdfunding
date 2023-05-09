<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import Users from '../users/Users.vue';
import { useAdminStore } from '../../store/useAdminPageStore';
import Aplications from '../aplications/Aplications.vue';
import AdminPanel from '../../components/AdminPanel.vue';

const { pageView } = storeToRefs(useAdminStore());

</script>

<template>
    <div class="admin">
        <admin-panel></admin-panel>
        <client-only>
            <aplications v-if="pageView === 'applications'"></aplications>
            <users v-if="pageView ==='users'"></users>
        </client-only>
    </div>
</template>