<template>
    <div class="app__dates" v-if="info.list">

        <div class="app__item" v-for="item, i in info.list" :key="item">
            <div class="app__day">{{days[i]}}</div>
            <img
                src="@/assets/images/icons/weather.svg"
                alt=""
                class="app__weather-icon"
            />
            <div class="app__temp">
                <p>{{item.main.temp_max}}℃</p>
                <p>{{item.main.temp_max}}℃</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.app {
    &__dates {
        background: rgba(142, 141, 141, 0.7);
        padding: 34px 22px;
        border-radius: 5px;
        margin-bottom: 28px;
        backdrop-filter: blur(2px);
    }
    &__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    }
    &__item:last-child {
        margin-bottom: 0;
    }
    &__weather-icon {
        width: 25px;
    }
    &__temp {
        display: flex;
        grid-gap: 20px;
        font-size: 16px;
        line-height: 22px;
    }
    &__temp p:last-child {
        color: #002c25;
    }
}
</style>
<script setup>
    import {getDays} from '@/assets/js/date';
    const days = getDays();
    const props = defineProps({
        info: {
            type: Object,
            default: {}
        }
    })
</script>