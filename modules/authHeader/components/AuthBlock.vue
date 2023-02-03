<script lang="ts" setup>
import { BasicIcon, BasicText } from 'UI';

</script>

<template>
    <div class="auth-block">
        <div class="auth-block__left">
            <div class="auth-block__container">
                <div class="auth-block__info">
                    <div class="auth-block__logo">
                        <basic-icon type-logo='big'></basic-icon>
                    </div>
                    <basic-text font="extra" class="auth-block__heading"> Добро пожаловать на краудфандинговую платформу </basic-text>
                </div>
                <basic-text font="semi-bold" size="small" class="auth-block__down"> 
                    При поддержке Севастопольского Государственного Университета 
                </basic-text>
            </div>
        </div>
        <div class="auth-block__right">
            <div class="auth-block__container">
                <div class="auth-block__container-separation">
                    <basic-text font='semi-bold' class="auth-block__label">
                        <slot name="label"></slot> 
                    </basic-text>
                    <slot name="content-up"></slot>
                </div>
                <div class="auth-block__container-separation">
                    <slot name="content-down"></slot>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .auth-block {
        display: flex;
        min-width: 650px;
        max-width: 800px;
        min-height: 500px;
        max-height: 660px;
        height: 100vh;
        border-radius: 24px;
        overflow: hidden;
        &__container {
            height: 85%;
            width: calc(100% - 40px);
            padding-bottom: 26px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            align-self: flex-end;
        }
        &__left {
            flex: 1;
            display: flex;
            justify-content: center;
            background-color: var(--color-main-type-1);
        }
        &__container-separation {
            max-width: 280px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__down {
            text-align: center;
            color: white;
        }
        &__info {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__label {
            font-size: 24px;
            display: inline-block;
            margin-bottom: 24px;
        }
        &__logo {
            width: 142px;
            height: 142px;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            margin-bottom: 26px;
        }
        &__heading {
            font-size: 24px;
            color: white;
            text-align: center;
        }
        &__right {
            flex: 1;
            display: flex;
            justify-content: center;
            background-color: white;
        }
    }

</style>