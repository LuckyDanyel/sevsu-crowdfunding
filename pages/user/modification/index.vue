<script lang="ts" setup>
    import ConfirmEmail from './modules/confirm-email/components/ConfirmEmail.vue';
    import { IBaseResponseModification } from './types';

    const { query } = useRoute();
    const data: string = query.data as string;
    const baseResponse: IBaseResponseModification = JSON.parse(data);

</script>

<template>
    <NuxtLayout name="main-layout">
        <confirm-email v-if="baseResponse.type_modification === 'email-confirm'"></confirm-email>
    </NuxtLayout>
</template>