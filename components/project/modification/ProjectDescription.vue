<script lang="ts" setup>
    import InputArea from '@/components/inputs/InputArea.vue';

    const emit = defineEmits(['update:modelValue']);

    const props = defineProps({
        modelValue: {
            type: String,
            default: '',
        }
    })

    const { modelValue } = toRefs(props);

    const description = computed({
        get: () => unref(modelValue),
        set: (value) => emit('update:modelValue', value)
    })

</script>

<template>
    <div class="project-description">
       <input-area
            placeholder="Введите полное описание проекта"
            :height="120"
            v-model="description"
       ></input-area>
    </div>
</template>

<style lang="scss">
    .input-project-item {
        &__name {
            padding-left: 4px;
            margin-top: 4px;
        }
    }

</style>