<script lang="ts">
    import { computed, toRefs, unref, PropType } from 'vue';
    import { BasicIcon } from '@/UI';
    export default {
        components: {
            BasicIcon,
        },
        emits: ['update:modelValue'],
        props: {
            modelValue: {
                type: Array as PropType<number[] | string[]>,
                required: true,
            },
            value: {
                type: [Number, String],
                required: true,
            },
            isHover: {
                type: Boolean,
                default: false,
            }
        },
        setup(props, { emit }) {
            const { value, modelValue } = toRefs(props);

            const isChecked = computed(() => unref(modelValue).indexOf(unref(value)) !== -1);

            const selectedValue = () => {
                if(unref(isChecked)) {
                    const valuesWithoutCurrent = unref(modelValue).filter((valueItem) => valueItem !== unref(value));
                    emit('update:modelValue', valuesWithoutCurrent)
                    return;
                }
                emit('update:modelValue', [...unref(modelValue), unref(value)])
            }

            return {
                isChecked,
                selectedValue,
            }
        },
    }
</script>

<template>
    <div class="check-box-common">
        <label
            @change.stop="selectedValue"
            class="check-box-common__label"
        >
            <div 
                class="check-box-common__checkbox"
                :class=" isHover ? 'check-box-common__checkbox_hover' : '' "
            >
                <div class="check-box-common__checkbox-icon">
                    <basic-icon v-if="isChecked" size='16' type-icon='box' color='full-color-ui'></basic-icon>
                </div>
            </div>
            <input class="check-box-common__input" type="checkbox">
            <slot></slot>
        </label>
    </div>
</template>

<style lang="scss">
    .check-box-common {
        position: relative;
        &__checkbox {
            position: relative;
            width: 16px;
            height: 16px;
            border-radius: 4px;
            border: 1px solid #D8D8D8;
            background-color: white;
            margin-right: 10px;
            &-icon {
                position: absolute;
                top: -2px;
                left: -1px;
            }
            &_hover {
                border-color: var(--color-main-type-1);
                background-color: var(--color-button-bg-hover);
            }
        }
        &__label {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        &__input {
            display: none;
        }
    }
</style>