<script lang="ts" setup>
    import { IBaseResponseModification } from './types';

    const { query } = useRoute();
    const data: string = query.data as string;
    const baseResponse: IBaseResponseModification = JSON.parse(data);

</script>

<template>
    <NuxtLayout name="main-layout">
        
    </NuxtLayout>
</template>