<script lang="ts" setup>
    import { format, parse } from 'date-fns';
    import { PropType } from 'vue';
    import { Toogle } from 'UI';
    import { formatNumber } from '@/src/services/text-modifires';
    import DatePicker from '@/components/datePicker/DatePicker.vue';
    import InputCommon from '@/components/inputs/InputCommon.vue';
    import InputArea from '@/components/inputs/InputArea.vue';
    import { ICategoryProject } from '@/src/types/Categories';
    import { IProjectInfo } from '@/src/models/project/projectModelInfo/types';
    import { TCategory } from '~/src/types/Categories';
    import ProjectCategories from './ProjectCategories.vue';
    import InputProjectItem from './InputProjectItem.vue';

    const emit = defineEmits(['update:modelValue', 'isValidateParams'])

    const { modelValue, categories } = defineProps({
        categories: {
            type: Array as PropType<ICategoryProject[]>,
            default: [],
        },
        modelValue: {
            type: Object as PropType<IProjectInfo<TCategory> | null>,
            default: null,
        }
    })

    const getDate = (date: string | undefined): Date | null => {
        if(!date) return null;

        return parse(date, 'yyyy-MM-dd', new Date());
    }

    const inputNameProject = ref(unref(modelValue)?.title || '');
    const inputDescriptionShort = ref(unref(modelValue)?.short_description || '');
    const takenCategories = ref<ICategoryProject[]>(unref(modelValue)?.categories || []);
    const takenLikes = ref(String(unref(modelValue)?.goal_likes) || '');
    const converTakenLikes = computed({
        get: () => formatNumber(String(unref(takenLikes))),
        set: (value: string) => {
            takenLikes.value = value;
        },
    })
    const dateStartProject = ref(getDate(unref(modelValue)?.start_project) || new Date());
    const dateEndProject = ref(getDate(unref(modelValue)?.end_project) || new Date());
    const enableComments = ref(true);
    const enableMembers = ref(true);

    watchEffect(() => {
        emit('update:modelValue', {
            id: unref(modelValue)?.id,
            title: unref(inputNameProject),
            short_description: unref(inputDescriptionShort),
            start_project: format(unref(dateStartProject), 'yyyy-MM-dd'),
            end_project: format(unref(dateEndProject), 'yyyy-MM-dd'),
            categories: unref(takenCategories),
            goal_likes: Number(unref(takenLikes).split(' ').join('')),
        } as Partial<IProjectInfo<TCategory>>)
        const isValid = !!(unref(inputNameProject) && unref(inputDescriptionShort) && unref(dateStartProject) && unref(takenCategories)?.length && unref(takenLikes));
        emit('isValidateParams', isValid)
    })

</script>

<template>
    <div class="project-params">
        <div class="project-params__up project-params__item">
            <div class="project-params__name">
                <input-project-item>
                    <input-common
                        v-model="inputNameProject"
                        :max-lenght="36"
                        placeholder="Введите название проекта"
                    ></input-common>
                    <template #name> Доступно символов: {{ 36 - inputNameProject.length }} </template>
                </input-project-item>
            </div>
            <div class="project-params__categories">
                <input-project-item>
                    <project-categories
                        v-model="takenCategories"
                        :categories="categories"
                    ></project-categories>
                    <template #name> Выберите до двух категорий </template>
                </input-project-item>
            </div>
        </div>
        <div class="project-params__item">
            <input-project-item>
                <input-area
                    v-model="inputDescriptionShort"
                    placeholder="Введите короткое описание проекта"
                    :maxLength="250"
                    :height="120"
                >
                </input-area>
                <template #name> Доступно символов: {{ 250 - inputDescriptionShort.length }} </template>
            </input-project-item>
            <div class="project-params__line"></div>
        </div>
        <div class="project-params__item">
            <div class="project-params__line">
                <div class="project-params__date">
                    <date-picker
                        text-date-picker="Запуск"
                        text-pick-additional="Запуск"
                        v-model="dateStartProject"
                    >
                    </date-picker>
                </div>
                <div class="project-params__date">
                    <date-picker
                        text-pick-additional="Завершение"
                        text-date-picker="Завершение"
                        v-model="dateEndProject"
                    >
                    </date-picker>
                </div>
                <div class="project-params__likes">
                    <input-project-item>
                        <input-common
                            v-model="converTakenLikes"
                            placeholder="Введите количество лайков"
                            rule-mask="['#', '##', '###', '# ###', '## ###']"
                        ></input-common>
                        <template #name> Количество лайков: {{ formatNumber(takenLikes) }} </template>
                    </input-project-item>
                </div>
            </div>
        </div>
        <!-- <div class="project-params__item">
            <div class="project-params__line">
                <toogle
                    v-model="enableComments"
                    class="project-params__enable"
                ></toogle>
                <toogle
                    v-model="enableMembers"
                    class="project-params__enable"
                ></toogle>
            </div>
        </div> -->
    </div>
</template>

<style lang="scss">
    .project-params {
        &__likes {
            min-width: 270px;
            max-width: 400px;
            width: 100%;
            margin-top: 12px;
        }
        &__enable {
            margin-right: 16px;
        }
        &__line {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--color-gray-type-4);
        }
        &__item {
            margin-bottom: 12px;
        }
        &__date {
            max-width: 150px;
            width: 100%;
            margin-right: 12px;
        }
        &__up {
            position: relative;
            z-index: 1;
            display: flex;
            justify-content: space-between;
        }
        &__name {
            max-width: 350px;
            width: 100%;
            margin-right: 12px;
        }
        &__categories {
            flex: 1;
        }
    }
</style>