<template>
    <div class="app__flex">
        <div class="app__flex-item app__sunrise">
            <img src="@/assets/images/icons/sunrise.svg" alt="" />
            <p>Восход <span>{{ unix(info.sys?.sunrise) }}</span></p>
        </div>
        <div class="app__flex-item app__sunset">
            <img src="@/assets/images/icons/sunset.svg" alt="" />
            <p>Закат <span>{{ unix(info.sys?.sunset) }}</span></p>
        </div>
    </div>
</template>
<style lang="scss">
.app {
    &__flex {
        display: flex;
        justify-content: space-around;
        background: rgba(142, 141, 141, 0.7);
        padding: 40px 0;
    }

    &__flex-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__flex-item p {
        font-size: 16px;
        line-height: 22px;
        margin-top: 19px;
    }
}
</style>
<script setup>
import unix from '@/assets/js/unix';
    const props = defineProps({
        info: {
            type: Object,
            default: {}
        }
    })
</script>