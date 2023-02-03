<script lang="ts">
    import AuthHeader from '@modules/authHeader/AuthHeader.vue';
    import Projects from './modules/components/Projects.vue';

    export default defineNuxtComponent({
        components: {
            AuthHeader,
            Projects,
        },
        async setup() {
          
        }
    })

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