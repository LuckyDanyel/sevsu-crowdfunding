<script lang="ts" setup>
import { ref, PropType } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { DropDown, BasicIcon } from '@/UI';

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    textDatePicker: {
        type: String,
        default: '',
    },
    textPickAdditional: {
        type: String,
        default: '',
    },
    modelValue: {
        type: Object as PropType<Date>,
        required: true,
    }
})
const { textDatePicker, textPickAdditional } = props;
const { modelValue } = toRefs(props); 

const datePick = computed({
    get: () => unref(modelValue),
    set: (date: Date) => {
        emit('update:modelValue', date);
    }
})

const dpRef = ref();
const openCalendar = () => dpRef.value.openMenu();
const closeCalendar = () => dpRef.value.closeMenu();

const getFormatWithZero = (date: number) => (date < 10 ? `0${date}` : date);

const format = (date: Date) => {
    if(date) {
        const day = getFormatWithZero(date.getDate());
        const month = getFormatWithZero(date.getMonth() + 1);
        const year = date.getFullYear();

        return `${textPickAdditional}: ${day}.${month}.${year}`;
    }
    return textDatePicker;
};

const dateText = computed(() => format(unref(datePick)));

</script>

<template>
    <div class="date-picker">
        <drop-down
            class="date-picker__fake"
            @click="openCalendar"
            :small="true"
            :open-content="false"
        >
            <template #icon>
                <basic-icon
                    size='14'
                    type-icon='calendar'
                ></basic-icon>
            </template>
            <template #name>
                {{ dateText }}
           </template>
        </drop-down>
        <Datepicker
            class="date-picker__library"
            ref="dpRef"
            v-model="datePick"
            selectText="Выбрать"
            cancelText=""
            locale="ru"
            :format="format"
            auto-apply
          />
    </div>
</template>

<style lang="scss">
    .date-picker {
        position: relative;
        &__fake {
            z-index: 1;
        }
        &__library {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }
    }
</style>


