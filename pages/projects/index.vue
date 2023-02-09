<script lang="ts" setup>
    import AuthHeader from '@modules/authHeader/AuthHeader.vue';
    import Projects from './modules/components/Projects.vue';

</script>
<template>
    <NuxtLayout name="main-layout">
        <template #header-right>
            <auth-header></auth-header>
        </template>
        <projects></projects>
    </NuxtLayout>
</template>

<style lang="scss"></style>