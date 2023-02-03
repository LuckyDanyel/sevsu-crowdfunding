<script lang="ts" setup>
    import useTable from './use/useTable';
    import { propsTable } from './types/props';
    const props = defineProps({ ...propsTable })
    const { getStyles } = useTable(props);

</script>


<template>
    <div 
        class="table-title"
        :style="getStyles()"
    >
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .table-title {
        background-color: #EBEEF1;
        flex: 1;
        color: var(--color-table-heading);
        font-size: 11px;
        font-family: 'OpenSansSemiBold';
        text-transform: uppercase;
        padding: 12px 16px;
    }
</style>