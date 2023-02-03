<script lang="ts" setup>

    definePageMeta({
        middleware: ['authorization']
    })

</script>

<template>
    <NuxtLayout name="main-layout">
        <div class="user-create-project">
            <h1> create project </h1>
        </div>
    </NuxtLayout>
</template>