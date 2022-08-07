<template>
    <div class="app__grid">
        <div class="app__grid-item app__wind-speed">
            <img src="@/assets/images/icons/windspeed.svg" alt="" />
            <div>
                <h3>{{ info.wind?.speed}} км/ч</h3>
                <p>Скорость ветра</p>
            </div>
        </div>
        <div class="app__grid-item app__temperature-feel">
            <img src="@/assets/images/icons/temperature.svg" alt="" />
            <div>
                <h3>{{info.main?.feels_like}}℃</h3>
                <p>Ощущается</p>
            </div>
        </div>
        <div class="app__grid-item app__humidity">
            <img src="@/assets/images/icons/wet.svg" alt="" />
            <div>
                <h3>{{info.main?.humidity}}%</h3>
                <p>Влажность</p>
            </div>
        </div>
        <div class="app__grid-item app__visibility">
            <img src="@/assets/images/icons/visibility.svg" alt="" />
            <div>
                <h3>{{info.visibility / 1000}} км</h3>
                <p>Видимость</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.app {
    &__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        margin-bottom: 30px;
    }
    &__grid-item {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(142, 141, 141, 0.7);
        padding: 50px 0;
        grid-gap: 10px;
    }

    &__grid-item h3 {
        font-size: 14px;
        line-height: 22px;
    }

    &__grid-item p {
        font-size: 10px;
    }
}
</style>
<script setup>
    const props = defineProps({
        info: {
            type: Object,
            default: {}
        }
    })
</script>