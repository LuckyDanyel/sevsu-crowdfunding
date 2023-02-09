<script lang="ts">
    import { unref, toRefs, computed } from 'vue';
    import { BasicText } from 'UI';

    export default {
        emits: ['update:modelValue'],
        props: {
            modelValue: {
                type: Number,
                default: 1,
            },
            amount: {
                type: Number,
                required: true,
            }
        },
        components: {
            BasicText,
        },

        setup(props, { emit }) {
            const { modelValue, amount } = toRefs(props);
            const withItem = 40;
            const limitation = 5;

            const calulateMoving = computed(() => {
                if((unref(amount) - unref(modelValue)) < 2) return (unref(amount) - limitation) * withItem;
                if(unref(modelValue) - limitation < -2 ) return 0;

                return (unref(modelValue) - 3) * withItem;
            });

            const handlerArrowLeft = () => {
                emit('update:modelValue', unref(modelValue) - 1)
            }
            const handlerArrowRight = () => {
                emit('update:modelValue', unref(modelValue) + 1)
            }

            return {
                handlerArrowLeft,
                handlerArrowRight,
                calulateMoving,
                limitation,
                withItem,
            }
        },
    }

</script>

<template>
    <div class="pagination">
        <div class="pagination__wrapper">
            <div 
                class="pagination__item-arrow" 
                v-if="modelValue === 1"
            >
                <div 
                    class="pagination__arrow pagination__arrow_left pagination__arrow_disabled" 
                ></div>
            </div>
            <div 
                v-else
                class="pagination__item-arrow" 
                @click="handlerArrowLeft"
            >
                <div class="pagination__arrow pagination__arrow_left"></div>
            </div>
            <div class="pagination__hide" :style="`max-width: ${limitation * withItem}px`">
                    <div class="pagination__container" :style="`transform: translateX(-${calulateMoving}px)`">
                        <basic-text 
                            size='medium-large' 
                            class="pagination__item"
                            :class="number === modelValue ? 'pagination_active' : '' "
                            v-for="number in amount"
                            @click="() => $emit('update:modelValue', number)"
                        >  {{ number }} </basic-text>
                    </div>
            </div>
            <div 
                class="pagination__item-arrow" 
                v-if="modelValue === amount"
            >
                <div class="pagination__arrow pagination__arrow_right pagination__arrow_disabled" ></div>
            </div>
            <div 
                v-else
                class="pagination__item-arrow" 
                @click="handlerArrowRight"
            >
                <div class="pagination__arrow pagination__arrow_right"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .pagination {
        &__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__arrow {
            width: 8px;
            height: 8px;
            border: 2px solid var(--color-main-type-1);
            border-top: none;
            border-left: none;
            border-radius: 1px;

            &_right {
                transform: rotate(-45deg);
            }
            &_left {
                transform: rotate(135deg);
            }
            &_disabled {
                border-color: var(--color-gray-type-3) !important;
            }
        }
        &__container {
            display: inline-flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            overflow: hidden;
        }
        &__hide {
            overflow: hidden;
        }
        &__item-arrow {
            height: 32px;
            width: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            &:hover {
                .pagination__arrow {
                    border-color: black;
                }
            }
        }
        &__item {
            height: 32px;
            min-width: 32px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-gray-type-3);
            cursor: pointer;

            &:hover {
                color: var(--color-main-type-1);
            }
        }
        &_active {
            background-color: var(--color-button-bg);
            color: var(--color-main-type-1);
        }
    }
</style>