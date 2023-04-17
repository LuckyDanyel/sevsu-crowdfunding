<script lang="ts" setup>
    import { PropType } from 'vue';
    import { BasicText } from 'UI';
    import { TProjectStatus } from '@/src/models/project/projectModelAbstract/types';

    const { status } = defineProps({
        status: {
            type: String as PropType<TProjectStatus>,
            default: 'waiting',
        }
    });

    const statusNames: Record<TProjectStatus, string> = {
        'approve': 'Подтверждено',
        'cancel': 'Отменено',
        'waiting': 'Ожидание',
    };

    const statusName = statusNames[status];

</script>

<template>
    <basic-text
        font='semi-bold'
        size='small'
        :class="`project-user-status_${status}`"
    >
        {{ statusName }}
    </basic-text>
</template>
<style lang="scss" scoped>
    .project-user-status {
        &_approve {
            color: var(--color-green-1);
        }
        &_cancel {
            color: var(--color-red);
        }
        &_waiting {
            color: var(--color-gray-type-3);
        }
    }

</style>