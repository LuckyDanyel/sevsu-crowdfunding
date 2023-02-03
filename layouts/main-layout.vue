<script lang="ts">
import HeaderCommon from '@/components/header/HeaderCommon.vue';
import BasicNotification from '@/components/notifications/basicNotification/BasicNotification.vue';

export default {
    name: 'main-layout',
    components: {
        HeaderCommon,
        BasicNotification,
    }
}
</script>



<template>
    <main class="main">
        <basic-notification />
        <header-common>
            <template #right>
                <slot name="header-right"></slot>
            </template>
        </header-common>
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
            margin-top: 20px;
            padding-bottom: 16px;
        }
    }
</style>