<script lang="ts" setup>
import { PropType } from 'vue';
import Carusel from '@/components/carusel/Carusel.vue';
import NoPhotoImage from './img/no-photo.svg';
import { IFileImage } from '@/src/types';

const emit = defineEmits(['update:modelValue']);

const { modelValue } = defineProps({
    modelValue: {
        type: Array as PropType<IFileImage[]>,
        default: [],
    }
})

const takenImages = ref<IFileImage[]>(modelValue);

const addImagesHandler = (event: Event) => {
    const files: [string, File][] = Object.entries(event.target?.files || {});

    const getSrc = async (file: File): Promise<string> => {
        return new Promise((res, rej) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                res(fileReader.result as string);
            }

        })
    }
    const getArrayBuffer = async (file: File): Promise<ArrayBuffer> => {
        return new Promise((res, rej) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = () => {
                res(fileReader.result as ArrayBuffer);
            }
        })
    }

    files.forEach(async (couples) => {
        const [index, file]: [string, File] = couples;
        const buffer = await getArrayBuffer(file)
        const src = await getSrc(file);
        const extension = `.${file.type.split('/')[1]}`;
        takenImages.value.push({ src, buffer, extension: `${extension}` });
        emit('update:modelValue', unref(takenImages));
    });
}

const deletePhotoHandler = (index: number) => {
    takenImages.value = unref(takenImages).filter((image, indexImage) => index !== indexImage );
}

const imagesSlider = computed(() => takenImages.value.map((image) => image.src));

</script>

<template>
    <div class="create-project-images">
        <carusel
            class="create-project-images__carusel-no-photo"
            v-if="!takenImages.length"
            :images="[NoPhotoImage]"
            :is-visible-down="false"
        >
        </carusel>
        <carusel
            :images="imagesSlider"
            :items-show="takenImages.length > 7 ? 7.5 : takenImages.length"
            :isSlideSmallPhoto="false"
            @takeImageSmall="deletePhotoHandler"
        >
            <template #photo-small-content>
                <div class="create-project-images__delete">
                    <div class="create-project-images__delete-bg"></div>
                    <div class="create-project-images__circle"></div>
                    <div class="create-project-images__mark"></div>
                </div>
            </template>
            <template #content>
                <label for="files">
                    <div class="create-project-images__add">
                        <div class="create-project-images__mark"></div>
                        <div class="create-project-images__circle"></div>
                    </div>
                </label>
                <input 
                    id="files" 
                    type="file" 
                    @change="addImagesHandler" 
                    name="images" 
                    style="display: none;"
                    :key="takenImages.length"
                    multiple
                >
            </template>
        </carusel>
    </div>
</template>

<style lang="scss">
    .create-project-images {
        &__add {
            width: 50px;
            height: 50px;
            border-radius: 5px;
            background-color: var(--color-gray-type-1);
            box-sizing: content-box;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        &__delete {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                .create-project-images__circle, .create-project-images__mark, .create-project-images__delete-bg {
                    display: flex;
                }
            }

            .create-project-images__circle, .create-project-images__mark {
                display: none;
                z-index: 2;
            }

            .create-project-images__circle {
                border-color: var(--color-ui-element-1);
            }
            .create-project-images__mark {

                &::after, &::before {
                    background-color: var(--color-ui-element-1);
                }
                &::after {
                    transform: rotate(-45deg);
                }
                &::before {
                    transform: rotate(45deg);
                }
            }
        }
        
        &__delete-bg {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.7;
            position: absolute;      
            display: none;
            z-index: 1;
        }
        &__mark {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 8px;
            height: 8px;
            &::before {
                transform: rotate(90deg);
            }
            &::after, &::before {
                content: '';
                position: absolute;
                width: 2px;
                height: 8px;
                border-radius: 2px;
                background-color: var(--color-gray-type-2);
            }
        }
        &__circle {
            width: 20px;
            height: 20px;
            border-radius: 100%;
            border: 2px solid var(--color-gray-type-2);
            box-sizing: border-box;
        }
    }
</style>