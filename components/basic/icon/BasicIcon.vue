<script lang="ts" setup>
    import { PropType } from 'vue';
    type IconT = 'profile' | 'projects' | 'exit' | 'panel' | 'arrow' | 'email' | 'lock' | 'hide' | 'hide-full';

    defineProps({
        typeIcon: {
            type: String as PropType<IconT>,
            default: '',
        },
        typeLogo: {
            type: String as PropType<'big' | 'medium'>,
            default: '',
        },
        size: {
            type: String as PropType<'medium' | 'small' | ''>,
            default: '',
        }
    })

</script>
<template>
        <div 
            :class="[
                'basic-icon',
                `basic-icon__${typeIcon}_${size}`,
                `basic-icon__size_${size}`,
                `basic-icon__logo_${typeLogo}`
            ]"
        ></div>
</template>
<style lang="scss">
    .basic-icon {
        background-position: center;
        background-repeat: no-repeat;
        &__size {
            &_small {
                width: 16px;
                height: 16px;
            }
            &_medium {
                width: 24px;
                height: 24px; 
            }
        }
        &__logo {
            &_big {
                width: 90px;
                height: 85px;
                background-image: url('./images/logo-big.svg');
            }
            &_small {

            }
        }
        &__arrow {
            &_small {
                background-image: url('./images/16/arrow.svg');
            }
        }
        &__profile {
            &_small {
                background-image: url('./images/16/profile.svg');
            }
            &_medium {
                background-image: url('./images/24/profile.svg');
            }
        }
        &__projects {
            &_small {
                background-image: url('./images/16/projects.svg');
            }
            &_medium {
                
            }
        }
        &__exit {
            &_small {
                background-image: url('./images/16/exit.svg');
            }
            &_medium {

            }            
        }
        &__panel {
            &_small {
                background-image: url('./images/16/panel.svg');
            }
            &_medium {
                
            }   
        }
        &__email {
            &_small {

            }
            &_medium {
                background-image: url('./images/24/email.svg');
            }   
        }
        &__lock {
            &_small {
                
            }
            &_medium {
                background-image: url('./images/24/lock.svg');
            }   
        }
        &__hide {
            &_small {
                
            }
            &_medium {
                background-image: url('./images/24/hide.svg');
            }   
        }
        &__hide-full {
            &_small {
                
            }
            &_medium {
                background-image: url('./images/24/hide-full.svg');
            }   
        }
    }

</style>