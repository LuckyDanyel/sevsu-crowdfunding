<script lang="ts">
import { ref, unref } from 'vue';
import { BasicButton, BasicIcon, BasicText } from 'UI';
import InputCommon from '@/components/inputs/InputCommon.vue';
import AuthHeaderItem from './AuthHeaderItem.vue';
import AuthBlock from './AuthBlock.vue';

    export default {
        components: {
            AuthBlock,
            BasicButton,
            InputCommon,
            BasicIcon,
            BasicText,
            AuthHeaderItem,            
        },
        setup(porps, { emit }) {
            const inputCode = ref('');

            const sendCode = () => {
                emit('sendCode', unref(inputCode));
            }

            return {
                inputCode,
                sendCode,
            }
        }
    }

</script>

<template>
    <div class="auth-header-email">
        <auth-block>
            <template #label> Подверждение Email </template>
            <template #content-up>
                <auth-header-item>
                    <input-common :placeholder='`Введите код`' v-model="inputCode">
                        <template #icon> <basic-icon type-icon='email' /> </template>
                    </input-common>
                </auth-header-item>
                <basic-button @click="sendCode"> Отправить код </basic-button>
            </template>
        </auth-block>
    </div>
</template>