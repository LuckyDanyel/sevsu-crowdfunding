<script lang="ts" setup>
    import { PropType } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useResponseState } from '@/pages/user/modification/store/responseState/responseState';
    import { IResponseEmailConfirm } from '../types';

    const { baseResponse } = useResponseState();


</script>

<template>
    <div class="confirm-email">
        Электронная почта была подтверждена
    </div>
</template>