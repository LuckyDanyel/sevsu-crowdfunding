<script lang="ts" setup></script>

<template>
    <notifications position="bottom right"/>
</template>

<style lang="scss">
    .vue-notification {
        border-radius: 8px !important;
        padding: 12px !important;
        padding-left: 40px !important;

    .notification-title {
        font-family: 'OpenSansSemiBold'!important;
        font-size: 14px !important;
        margin-bottom: 2px !important;
    }
    .notification-content {
        font-size: 12px !important;
        font-family: 'OpenSansRegular' !important;
        color: var(--color-gray-type-2) !important;
    }
    &.success {
        background-color: white !important;
        border-left: none !important;
        background-image: url('./images/good.svg') !important;
        background-repeat: no-repeat !important;
        background-position: 12px 12px !important;

        .notification-title {
            color: var(--color-green-2) !important;
        }
    }

    &.warn {
        background-color: white !important;
        border-left: none !important;
        background-image: url('./images/varning.svg') !important;
        background-repeat: no-repeat !important;
        background-position: 12px 12px !important; 

        .notification-title {
            color: var(--color-orange) !important;
        }
    }

    &.error {
        background-color: white !important;
        border-left: none;
        border-left-color: var(--color-red);
        background-image: url('./images/Danger.svg');
        background-repeat: no-repeat;
        background-position: 12px 12px;

        .notification-title {
            color: var(--color-red);
        }
    }

}
</style>