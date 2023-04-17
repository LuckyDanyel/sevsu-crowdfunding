<script lang="ts" setup>

    const emit = defineEmits(['update:modelValue']);

    const props = defineProps({
        modelValue: {
            type: [Number, String],
            required: true,
        },
        value: {
            type: [Number, String],
            default: 0,
        }
    })

    const { value } = props;

    const radioButtonHandler = () => {
        emit('update:modelValue', unref(value));
    }

</script>

<template>
    <div class="radio-button" @click="radioButtonHandler">
        <div class="radio-button__wrapper">
            <div class="radio-button__circle" v-if="modelValue === value"></div>
        </div>
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .radio-button {
        cursor: pointer;
        display: flex;
        align-items: center;

        &__wrapper {
            height: 16px;
            width: 16px;
            border: 1px solid var(--color-ui-element-1);
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin-right: 12px;
        }

        &__circle {
            height: 10px;
            width: 10px;
            border-radius: 100%;
            background-color: var(--color-ui-element-1);
        }
    }
</style>