<script lang="ts" setup>
    import { PropType } from 'vue';
    import { ICategoryProject } from '@/src/types';
    import { DropDown, ItemBackground, BasicText } from '@/UI';
    import CheckBoxList from '@/components/inputs/CheckboxList.vue';

    const emit = defineEmits(['update:modelValue']);

    const props = defineProps({
        categories: {
            type: Array as PropType<ICategoryProject[]>,
            default: [],
        },
        modelValue: {
            type: Array as PropType<ICategoryProject[]>,
            default: [],
        }
    });
    const { categories } = props;
    const { modelValue } = toRefs(props);

    const takenCategories = computed({
        get: () => unref(modelValue).map((category) => category.id),
        set: (categoriesIds) => {
            emit('update:modelValue', categories.filter((category) => categoriesIds.includes(category.id)));
        }
    })

    const textCategories = computed(() => {
        if(takenCategories.value.length === 1) {
            return 'Выбрана одна категория';
        }
        if(takenCategories.value.length === 2) {
            return 'Выбраны две категории';
        }
        return 'Выберите категории'
    })


</script>

<template>
    <div class="categories-drop">
        <div class="categories-drop__wrapper">
            <drop-down>
                <template #name> {{ textCategories }} </template>
                <template #content>
                    <item-background 
                        class="categories-drop__item" 
                        v-for="category in categories"
                        :key="category.id"
                    >
                        <template v-slot:default="{ isHover }">
                            <check-box-list
                                v-model="takenCategories"
                                :value="category.id"
                                :is-hover="isHover"
                            > 
                                <basic-text 
                                    font="regular" 
                                    size='small' 
                                    :is-hover="isHover"
                                > {{ category.text }} </basic-text> 
                            </check-box-list>
                        </template>
                </item-background>
                </template>
            </drop-down>
        </div>
    </div>
</template>

<style lang="scss">
    .categories-drop {
        &__item {
            padding: 8px;
        }
    }
</style>