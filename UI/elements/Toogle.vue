<script lang="ts" setup>

    const emit = defineEmits(['update:modelValue']);

    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false,
        }
    })
    const { modelValue } = toRefs(props);

    const isToogle = computed({
        get: () => unref(modelValue),
        set: (value) => {
            emit('update:modelValue', value);
        }
    })

    const tooleHandler = () => {
        isToogle.value = !isToogle.value;
    }

</script>

<template>

    <div 
        class="toogle" 
        :class="isToogle ? 'toogle_active' : ''"
        @click="tooleHandler">
        <div 
            :class="isToogle ? 'toogle__circle_active' : ''"
            class="toogle__circle"
        ></div>
    </div>

</template>

<style lang="scss">
    .toogle {
        width: 36px;
        height: 20px;
        border-radius: 170px;
        background-color: var(--color-gray-type-1);
        display: flex;
        align-items: center;
        cursor: pointer;
        &_active {
            background-color: var(--color-ui-element-1);
        }
        &__circle {
            width: 14px;
            height: 14px;
            border-radius: 100%;
            background-color: white;
            transition: all 0.2s;
            transform: translateX(4px);

            &_active {
                transform: translateX(18px);
            }
        }
    }

</style>