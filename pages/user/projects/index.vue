<script lang="ts" setup>
import AuthHeader from '@modules/authHeader/AuthHeader.vue';

    definePageMeta({
        middleware: ['authorization']
    })



</script>

<template>
    <NuxtLayout name="main-layout">
        <template #header-right>
            <auth-header></auth-header>
        </template>
        <div class="user-projects">
            <h1> user - projects </h1>
        </div>
    </NuxtLayout>
</template>