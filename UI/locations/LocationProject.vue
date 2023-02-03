<template>
    <div class="location-project">
        <div class="location-project__up">
            <div class="location-project__left">
                <slot name="left"></slot>
            </div>
            <div class="location-project__right">
                <slot name="right"></slot>
            </div>
        </div>
        <div class="location-project__down">
            <slot name="down"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .location-project {
        width: 100%;
        &__up {
            display: flex;
            justify-content: space-between;
        }
        &__left {
            flex: 1;
        }
        &__right {
            flex: 1;
        }
        &__down {
            margin-top: 16px;
        }
    }
</style>