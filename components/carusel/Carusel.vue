<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

    export default defineComponent({
        name: 'Gallery',
        components: {
            Carousel,
            Slide,
            Navigation,
        },
        props: {
            images: {
                type: Array as PropType<string[]>,
                default: [],
            }
        },
        setup(props) {
            const currentSlide = ref(0);
            const myCarousel = ref<{ slideTo: (val: number) => void  } | null>(null);

            const slideTo = (value: number) => {
                currentSlide.value = value;
                myCarousel.value!.slideTo(value);
            }
            return {
                currentSlide,
                slideTo,
                myCarousel,
            }
        }
    })

</script>

<template>
    <div class="carousel">
        <div class="carousel__container">
            <Carousel v-model="currentSlide" :mouseDrag="false">
                <Slide v-for="image in images" :key="image" class="carousel__slide-big">
                    <div class="carousel__item" :style="`background-image: url(${image})`"></div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
        <div class="carousel__down">
            <div class="carousel__content">
                <slot name="content"></slot>
            </div>
            <Carousel
                :items-to-show="8.5"
                ref="myCarousel"
                v-model="currentSlide"
                :mouseDrag="false"
            >
                <Slide v-for="(image, index) in images" 
                    :key="image" 
                    class="carousel__slide-small"
                >
                    <div
                        class="carousel__item-small" 
                        :class="currentSlide === index ? 'carousel__item-small_active' : ''"
                        :style="`background-image: url(${image})`"
                        @click="slideTo(index)"
                    ></div>
                </Slide>
                <template #addons>
                    <div class="carousel__pagination" v-if="images.length > 1">
                        <div 
                            v-for="(image, index) in images"
                            class="carousel__pagination-item"
                            :class="currentSlide === index ? 'carousel__pagination-item_active' : '' "
                            @click="slideTo(index)"
                        ></div>
                    </div>
                </template>
            </Carousel>
        </div>
    </div>
</template>


<style lang="scss">
    .carousel {
        max-width: 550px;
        width: 100%;
        &__container {
            overflow: hidden;
            border-radius: 10px;
        }
        &__pagination {
            display: flex;
        }
        &__pagination-item {
            height: 5px;
            flex: 1;
            background-color: var(--color-gray-type-1);
            cursor: pointer;
            &:not(:last-child) {
                margin-right: 6px;
            }
            &:hover {
                background-color: var(--color-ui-element-3);
            }
            &_active {
                background-color: var(--color-ui-element-3);
            }
        }
        &__down {
            margin-top: 12px;
        }
        &__slide-small {
            height: 50px;
            width: 50px;
            padding-right: 11px;
            box-sizing: border-box;
            cursor: pointer;
        }
        &__item-small {
            width: 100%;
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 5px;
            &_active {
                border: 3px solid var(--color-ui-element-3);
            }
        }

        &__prev {
            left: 10px;
        }
        &__next {
            right: 10px;
        }

        &__prev, &__next {
            border-radius: 4px;
            opacity: 0.9;
            width: 45px;
            height: 65px;
            margin: 0;
            color: white;
            &:hover {
                opacity: 0.7;
            }
        }
        &__item {
            width: 100%;
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 10px;
        }
        &__track {
            display: flex;
        }
        &__slide-big {
            border-radius: 10px;
            flex-shrink: 0;
            height: 470px;
        } 
    }
</style>