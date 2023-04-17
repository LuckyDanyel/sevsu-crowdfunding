<script lang="ts">
import { ref } from "vue";
export default {
    name: 'dialog-modal',
    setup() {
        const show = ref(false);
        const close = () => {
            show.value = false;
        }
        return {
            show,
            close,
        }
    }
}
</script>

<template>
  <div 
    class="dialog"
  >
    <div class="dialog__button" @click="() => show = true">
        <slot name="button"></slot>
    </div>
    <div class="dialog__container" v-if="show">
        <div class="dialog__content" v-click-outside="close">
            <div class="dialog__wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
    .dialog__container {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
        overflow: auto;
        padding-top: 20px;
        z-index: 9999999;
    }
    .dialog__content {
        margin: auto;
        min-height: 50px;
        min-width: 300px;
    }
</style>