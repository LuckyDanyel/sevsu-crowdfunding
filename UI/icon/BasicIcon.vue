<script lang="ts" setup>
    import { PropType } from 'vue';
    type IconT = 'profile' | 'projects' | 'exit' | 'panel' | 'arrow' 
        | 'email' | 'lock' | 'hide' | 'hide-full' | 'heart' | 'message' | 'views' 
        | 'calendar' | 'time' | 'cube' | 'edit' | 'delete' | 'profiles' | 'lupa' | 'arrow-open';

    defineProps({
        typeIcon: {
            type: String as PropType<IconT>,
            default: '',
        },
        typeLogo: {
            type: String as PropType<'big' | 'small' | 'extra-small'>,
            default: '',
        },
        size: {
            type: String as PropType<'24' | '16' | '18' | '14' | ''>,
            default: '24',
        },
        color: {
            type: String as PropType<'default' | 'default-full-color' | 'green' | 'red' | 'black' | 'white' | 'color' | 'full-color' | 'full-red'>,
            default: 'default'
        },
    })

</script>
<template>
        <div
            id="basic-icon-id"
        >   
            <nuxt-icon 
                :name="`${size}/${typeIcon}`" 
                :class="[
                    `basic-icon`,
                    `basic-icon_${size}`,
                    `basic-icon_${color}`
                ]"
                v-if="typeIcon"
            > </nuxt-icon>

            <nuxt-icon 
                :class="[
                    `basic-icon__logo-${typeLogo}`
                ]"
                :name="`logo/logo-${typeLogo}`" v-if="typeLogo"
            > </nuxt-icon>
            
        </div>
</template>
<style lang="scss">
    #basic-icon-id {
        display: inline-block;
        .basic-icon_default-full-color {
            * {
                fill: var(--color-gray-type-2) !important;
            }
        }
        .basic-icon_default {
            * {
                fill: none !important;
            }
        }
        .basic-icon_red {
            * {
                fill: none !important;
                stroke: var(--color-red);
            }
        }
        .basic-icon_green {
            * {
                fill: none !important;
                stroke: var(--color-green-1);
            }
        }
        .basic-icon_white {
            * {
                fill: none !important;
                stroke: white;
            }
        }
        .basic-icon_color {
            * {
                fill: none !important;
                stroke: var(--color-ui-element-1);
            }
        }
        .basic-icon_full-red {
            * {
                stroke: var(--color-red);
                fill: var(--color-red) !important;
            }
        }
        .basic-icon_full-color {
            * {
                fill: var(--color-ui-element-1) !important;
            }
        }
        .basic-icon__logo {
            &-big {
                svg {
                    display: block;
                    width: 142px;
                    height: 142px;
                    * {
                        fill: var(--color-main-type-1) !important;
                    }
                    circle {
                        fill: white !important;
                    }
                }
            }
            &-small {
                svg {
                    display: block;
                    width: 40px;
                    height: 40px;
                    * {
                        fill: white !important;
                    }
                    circle {
                        fill: var(--color-main-type-1) !important;
                    }
                }
            }
            &-extra-small {
                svg {
                    display: block;
                    width: 20px;
                    height: 20px;
                    * {
                        fill: white !important;
                    }
                    circle {
                        fill: var(--color-main-type-1) !important;
                    }
                }
            }
        }
        .basic-icon_black {
            * {
                fill: none !important;
            }
            svg path {
                stroke: black;
                
            } 
        }
        .basic-icon_14 {
            display: inline-block;
            width: 14px;
            height: 14px;
            .nuxt-icon {
                display: inline-block;
                width: 14px;
                height: 14px;
            }
        }
        .basic-icon_16 {
            display: inline-block;
            width: 16px;
            height: 16px;
            .nuxt-icon {
                display: inline-block;
                width: 16px;
                height: 16px;
            }
        }
        .basic-icon_18 {
            display: inline-block;
            width: 18px;
            height: 18px;
            .nuxt-icon {
                display: inline-block;
                width: 18px;
                height: 18px;
            }
        }
        .basic-icon_24 {
            display: inline-block;
            width: 24px;
            height: 24px; 
            .nuxt-icon {
                display: inline-block;
                width: 24px;
                height: 24px; 
            }
        }
    }
    .basic-icon {
        svg {
            display: inline-block;
            width: 100%;
            height: 100%;
        }
    }

</style>