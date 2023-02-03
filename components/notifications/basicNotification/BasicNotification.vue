<script lang="ts" setup></script>

<template>
    <notifications position="bottom right"/>
</template>

<style lang="scss">
    .vue-notification {
        background: #44a4fc;
        border-left: 5px solid #187fe7;
        border-radius: 8px;
        padding: 12px;
        padding-left: 40px;

    .notification-title {
        font-family: 'OpenSansSemiBold';
        font-size: 14px;
        margin-bottom: 2px;
    }
    .notification-content {
        font-size: 12px;
        font-family: 'OpenSansRegular';
        color: var(--color-gray-type-2);
    }
    &.success {
        background: white;
        border-left: none;
        background-image: url('./images/good.svg');
        background-repeat: no-repeat;
        background-position: 12px 12px;

        .notification-title {
            color: var(--color-green-2);
        }
    }

    &.warn {
        background: white;
        border-left: none;
        background-image: url('./images/varning.svg');
        background-repeat: no-repeat;
        background-position: 12px 12px;

        .notification-title {
            color: var(--color-orange);
        }
    }

    &.error {
        background: white;
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