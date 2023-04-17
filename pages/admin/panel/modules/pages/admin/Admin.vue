<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import Project from '../project/Project.vue';
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
            <aplications></aplications>
            <users v-if="pageView ==='users'"></users>
            <project v-if="pageView === 'project'"></project>
        </client-only>
    </div>
</template>