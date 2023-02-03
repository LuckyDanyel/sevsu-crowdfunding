<script lang="ts"> 
import AuthHeader from '@/modules/authHeader/AuthHeader.vue';
    export default defineNuxtComponent({
        components: {
            AuthHeader,
        },
        async setup() {
          
        },
    })

</script>

<template>
    <NuxtLayout name="white-layout">
        <template #header-right>
            <auth-header />
        </template>
        <div class="project-page">
        </div>
    </NuxtLayout>
</template>