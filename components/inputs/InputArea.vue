<script lang="ts">
    import { unref, nextTick } from 'vue';
    export default {
        emits: ['update:modelValue'],
        props: {
            modelValue: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: '',
            },
            height: {
                type: Number,
                default: 40,
            }
        },
        setup(props, { emit }) {
            const { modelValue } = toRefs(props);
            const { height } = props;
            const refFakeInput = ref<HTMLElement>()
            const heightElement = ref(height + 3);
            const text = computed({
                get: () => unref(modelValue),
                set: (value) => {
                    emit('update:modelValue', value)
                },
            });

            watch(text, () => {
                nextTick(() => {
                    heightElement.value = unref(refFakeInput)!.offsetHeight;
                })
            });

            return {
                text,
                heightElement,
                refFakeInput,
            }
        }
    }

</script>

<template>
    <div class="input-area__container">
        <textarea 
            class="input-area"
            v-model="text"
            :placeholder="placeholder" 
            :style="`height: ${heightElement}px`"
        ></textarea>
        <div 
            ref="refFakeInput"
            class="input-area input-area__fake" 
            :style="`min-height: ${height + 3}px`"
        >

            {{ text }}
        </div>
    </div>
</template>

<style lang="scss">
    .input-area {
        &__container {
            position: relative;
        }
        &__fake {
            overflow-wrap: anywhere;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: -1;
        }
        width: 100%;
        display: flex;
        outline: none;
        border-radius: 10px;
        padding: 12px;
        padding-top: 10px;
        font-size: 14px;
        font-family: 'OpenSansRegular';
        resize: none;
        border: 1px solid var(--color-gray-type-1);
        overflow: hidden;
    }
</style>

