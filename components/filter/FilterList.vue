<script lang="ts">
    import { PropType, computed, toRefs, unref } from 'vue';
    import { BasicText, ItemBackground } from 'UI';
    import CheckBoxList from '@/components/inputs/CheckboxList.vue';

    export default {
        emits: ['update:modelValue'],
        components: {
            CheckBoxList,
            BasicText,
            ItemBackground,
        },
        props: {
            listFilters: {
                type: Array as PropType<{ id: number, label: string }[]>
            },
            modelValue: {
                type: Array as PropType<number[]>,
                required: true,
            },
        },
        setup(props, { emit }) {
            const { modelValue } = toRefs(props);
            const selectedValue = computed({
                get: () => unref(modelValue),
                set: (values) => emit('update:modelValue', values),
            })

            return {
                selectedValue,
            }
        },
    }

</script>

<template>
    <div class="filter-common">
        <h3 class="filter-common__header filter-common__item"> 
            <basic-text font="semi-bold" size="medium-large"> <slot name="header"></slot> </basic-text> 
        </h3>
        <ul>
            <item-background 
                class="filter-common__item" 
                v-for="filterItem in listFilters"
                :key="filterItem.id"
            >
                <template v-slot:default="{ isHover }">
                    <check-box-list
                        v-model="selectedValue"
                        :value="filterItem.id"
                        :is-hover="isHover"
                    > 
                        <basic-text 
                            font="regular" 
                            size="medium" 
                            :is-hover="isHover"
                        > {{ filterItem.label }} </basic-text> 
                    </check-box-list>
                </template>
            </item-background>
        </ul>
    </div>
</template>

<style lang="scss">
    .filter-common {
        padding: 16px 0;
        background-color: white;
        max-width: 270px;
        width: 100%;
        box-shadow: 0px 2px 2px rgba(0, 40, 85, 0.04), 0px 2px 8px rgba(0, 40, 85, 0.16);
        border-radius: 8px;

        &__item {
            padding-left: 16px;
            padding-right: 16px;
        }
        &__header {
            margin-bottom: 6px;
        }
    }
</style>