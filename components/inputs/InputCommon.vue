<script lang="ts">
import { ref, computed, toRefs, unref, PropType } from 'vue';
import { BasicIcon } from 'UI';
import { max } from 'date-fns';

    export default {
        components: {
            BasicIcon,
        },
        emits: ['update:modelValue'],
        props: {
            placeholder: {
                type: String,
                default: '',
            },
            modelValue: {
                type: String,
                required: true,
            },
            typeInput: {
                type: String as PropType<'' | 'hide'>,
                default: '',
            },
            ruleMask: {
                type: String as PropType<string | string[]>,
                default: '',
            },
            maxLenght: {
                type: Number,
                default: null,
            },
            height: {
                type: Number,
                default: 0,
            },
            debouceTime: {
                type: Number,
                default: 0,
            },
        },
        setup(props, { emit }) {
            const { modelValue } = toRefs(props);
            const { typeInput, debouceTime } = props;

            const hidePassword = ref(typeInput === 'hide');

            let timeout: any = null;

            const inputValue = computed({
                get: () => unref(modelValue),
                set: (value: string) => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        emit('update:modelValue', value)
                    }, debouceTime);
                },
            })

            const active = ref(false);

            return {
                active,
                inputValue,
                hidePassword,
            }
        }
    };

</script>

<template>
    <div 
        class="input-common" 
        @click="() => active = true" 
        v-click-outside="() => active = false"
        :class="active ? 'input-common_active' : ''"
        :style="height ? `height: ${height}px;` : ''"
    >
        <div class="input-common__icon">
            <slot name="icon"></slot>
        </div>
        <label 
            class="input-common__input"
        >
            <input 
                :type="hidePassword ? 'password' : 'text'" 
                :placeholder="placeholder"
                v-model="inputValue"
                v-maska
                :data-maska="ruleMask"
                :maxlength="maxLenght"
            >
        </label>
        <div 
            class="input-common__hide" 
            @click="() => hidePassword = !hidePassword"
            v-if="typeInput"
        >
            <basic-icon type-icon='hide' color='default-full-color' v-if="hidePassword" />
            <basic-icon type-icon='hide-full' v-else />
        </div>
    </div>

</template>


<style lang="scss" scoped>
    .input-common {
        width: 100%;
        border: 1px solid var(--color-gray-type-1);
        border-radius: 8px;
        overflow: hidden;
        padding-left: 8px;
        padding-right: 8px;
        display: flex;
        align-items: center;
        &_active {
            border-color: var(--color-gray-type-2);
        }
        &__icon {
            margin-right: 8px;
        }
        &__input {
            width: 100%;
            input {
                width: 100%;
                height: 40px;
                border: none;
                outline: none;
                font-size: 14px;
                font-family: 'OpenSansRegular';
                color: black;

                &::placeholder {
                    color: var(--color-gray-type-2);
                }
            }
        }
        &__hide {
            cursor: pointer;
        }
    }
</style>