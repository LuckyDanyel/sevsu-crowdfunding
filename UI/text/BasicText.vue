
<script lang="ts">
    import { PropType } from 'vue';
    type Tsize = 'extra-super-small' | 'extra-small' | 'small' | 'medium' | 'medium-large' | 'large';
    type Tfont = 'bold' | 'regular' | 'semi-bold' | 'extra';

    export default {
        props: {
            size: {
                type: String as PropType<Tsize>,
                default: 'medium',
            },
            font: {
                type: String as PropType<Tfont>,
                default: 'regular',
            },
            isHover: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>

<template>
    <p 
        class='text-common' 
        :class="[`text-common_${size}`, `text-common_${font}`, isHover ? 'text-common_hover' : '']"
    > <slot></slot> </p>
</template>

<style scoped lang='scss'>
    .text-common {
        // &_hover {
        //     color: var(--color-main-type-4);
        // }
        &_extra-super-small {
            font-size: 10px;
        }
        &_extra-small {
            font-size: 11px;
        }
        &_small {
            font-size: 12px;
        }
        &_medium {
            font-size: 14px;
        }
        &_medium-large {
            font-size: 16px;
        }
        &_large { 
            font-size: 18px;
        }
        &_bold {
            font-family: 'OpenSansBold', sans-serif;
        }
        &_regular {
            font-family: 'OpenSansRegular', sans-serif;
        }
        &_semi-bold {
            font-family: 'OpenSansSemiBold', sans-serif;
        }
        &_extra {
            font-family: 'OpenSansExtraBold', sans-serif;
        }
    }
</style>

