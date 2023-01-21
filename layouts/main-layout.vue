<script lang="ts">
import AuthHeader from '@/components/auth/authHeader/AuthHeader.vue';

export default {
    name: 'main-layout',
    components: {
        AuthHeader,
    }
}
</script>



<template>
    <main class="main">
        <auth-header></auth-header>
        <div class="main__content">
            <slot></slot>
        </div>
    </main>
</template>

<style lang="scss">
    .main {
        &__content {
            max-width: var(--width-main-container);
            width: 100%;
            margin: 0 auto;
            margin-top: 30px;
        }
    }
</style>