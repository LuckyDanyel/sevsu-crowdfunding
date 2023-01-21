<script lang="ts">
    import Links from './links/Links';
    import { useRoute } from 'vue-router';

    export default {
        setup() {
            const route = useRoute();
            const currentNamePage = route.name;
            return {
                Links,
                currentNamePage,
            }
        }
    }
</script>


<template>
    <header class="header">
        <div class="header__container">
            <nav class="header__menu">
                <a
                    v-for="link in Links" 
                    :key="link.id"
                    :href="`/${link.namePage}`"
                    :class="(currentNamePage === link.namePage) ? 'header__item_active' : ''"
                    class="header__item"
                >
                    <basic-text size="medium-large" font="semi-bold"> {{ link.text }} </basic-text>
                </a>
            </nav>
            <slot name="right"></slot>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        background-color: white;
        &__container {
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            max-width: var(--width-main-container);
        }
        &__menu {
            display: flex;
        }
        &__item {
            margin-right: 12px;
            &_active {
                padding-bottom: 2px;
                border-bottom: 2px solid black;
            }
        }
        &__login {
            color: var(--color-main-type-4);
            cursor: pointer;
        }
    }
</style>