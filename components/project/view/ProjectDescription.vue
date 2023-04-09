<script lang="ts" setup>
    defineProps({
        description: {
            type: String,
            default: '',
        }
    })
</script>


<template>
    <div class="project-description">
        <pre class="project-description__text">
            {{ description }}
        </pre>
    </div>
</template>

<style lang="scss">
    .project-description {
        &__text {
            white-space: pre-line;
            font: 14px 'OpenSansRegular';
            line-height: 28px;
        }
    }

</style>