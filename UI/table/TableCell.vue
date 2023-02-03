<script lang="ts" setup>
    import useTable from './use/useTable';
    import { propsTable } from './types/props'
    const props = defineProps({ ...propsTable })
    const { getStyles } = useTable(props);
</script>


<template>
    <div 
        class="table-cell"
        :style="getStyles()"
    >
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .table-cell {
        display: flex;
        align-items: center;
        flex: 1;
        padding: 7px 16px;
        background-color: white;
        color: #99A9BB;
        font-family: 'OpenSansRegular';
        font-size: 12px;
    }
</style>