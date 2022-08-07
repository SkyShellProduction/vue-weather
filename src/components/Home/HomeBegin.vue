<template>
    <p class="app__location">
        <img src="@/assets/images/icons/location.svg" alt="" />
        <span>{{ info.name }}</span>
        <router-link to="/favorite" class="app__add"
            ><img src="@/assets/images/icons/add.svg" alt="" />
        </router-link>
    </p>
    <div class="app__city-time" ref="clockData"></div>
    <div class="app__forecast">
        <img src="@/assets/images/icons/weather.svg" alt="" />
        <span>{{info.weather ? info.weather[0].description : ''}}</span>
    </div>
    <div class="app__temperature">{{info.main?.temp}}℃</div>
    <div class="app__changes">
        <p class="app__changes-max">
            <img src="@/assets/images/icons/arrowup.svg" alt="" />
            <span>{{info.main?.temp_max}}℃</span>
        </p>
        <p class="app__changes-min">
            <img src="@/assets/images/icons/arrowdown.svg" alt="" />
            <span>{{info.main?.temp_min}}℃</span>
        </p>
    </div>
</template>
<style lang="scss">
    .app {
        &__location {
            margin-top: 21px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            line-height: 22px;
            margin-bottom: 10px;
            position: relative;
        }
        &__city-time {
            font-size: 14px;
            line-height: 22px;
            text-align: center;
            margin-bottom: 36px;
        }
        &__forecast {
            font-size: 16px;
            line-height: 22px;
            display: flex;
            justify-content: center;
            align-items: center;
            grid-gap: 25px;
            margin-bottom: 28px;
        }
        &__temperature {
            font-size: 60px;
            line-height: 100%;
            text-align: center;
            margin-bottom: 18px;
        }
        &__changes {
            display: flex;
            justify-content: center;
            grid-gap: 65px;
            margin-bottom: 40px;
            font-size: 23px;
        }
        &__changes p {
            display: flex;
            align-items: center;
        }
        &__add {
            position: absolute;
            top: 0px;
            right: 16px;
        }
    }
        .app.white .app__add{
            background-color: #fff;
        }
</style>
<script setup>
const { onMounted, ref } = require("@vue/runtime-core");
import {clock} from '@/assets/js/date';
    let clockData = ref(null);   
    onMounted(() => {
        clock(clockData.value);
    });
    const props = defineProps({
        info: {
            type: Object,
            default: {}
        }
    })
</script>
