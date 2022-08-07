<template>
    <div class="mobile">
        <Hello />
        <div class="app" :style="`background-image: url(${curBg})`" :class="{white: hours >= 19}">
            <div class="app__navbar">
                <ul class="app__routes">
                    <li v-for="link in routes" :key="link">
                        <router-link :to="link.path">{{link.name}}</router-link>
                    </li>
                </ul>
            </div>
            <router-view v-slot="{ Component}">
                <transition name="fade" mode="out-in">
                    <component :is="Component" :key="$route.path"/>
                </transition>
            </router-view>
        </div>
    </div>
</template>
<script setup>
import "@/assets/styles/style.scss";
import Hello from "@/components/Hello.vue";
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import router from "./router";
const store = useStore();
const bg = store.state.imgs.imgs;
const idx = computed(() => store.state.indexImg);
const hours = new Date().getHours()
const curBg = computed(() => hours < 19 ?  bg[idx.value].bgday : bg[idx.value].bgnight);
const routes = router.options.routes.filter(c => c.name ? c: false);
const app = ref(null);
onMounted(() => {
    store.dispatch('getMainWeather', {});
})
</script>
<style lang="scss">
    .app {
        z-index: 5;
        min-height: 300px;
        height: 100%;
        max-height: 90vh;
        background: #fff;
        border-radius: inherit;
        overflow: auto;
        background-repeat: repeat;
        background-size: cover;
        position: relative;
        display: flex;
        flex-direction: column;
        background-position: center;
        // background-image: url(../images/backgrounds/sunny-night.png);
        background-blend-mode: luminosity;
        animation: weather 50s linear infinite alternate forwards;
        transition: background 0.3s;
        &.white{
            color: #fff;
        }
    }
    @keyframes weather {
        0% {
            background-position: 0% center;
        }
        100% {
            background-position: 100% center;
        }
    }
    .app__routes {
        display: flex;
        margin: 10px 0;
        justify-content: center;
        gap: 15px;
        a {
            color: #fff;
            font-size: 18px;
            &.router-link-exact-active{
                color: rgb(66, 169, 254);
            }
        }
    }
    .app::-webkit-scrollbar {
        width: 0;
    }
    .app__navbar {
        background: rgba(44, 43, 43, 0.835);
        padding: 12px 0 12px 30px;
        position: sticky;
        top: 0;
        z-index: 10;
    }

    .app__time {
        font-size: 12px;
        font-weight: bold;
    }
    .fade-enter-active, .fade-leave-active {
        transition: 0.3s linear;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
        transform: scale(1.2);
    }
    .fade-enter-to, .fade-leave-from{
        transform: scale(1);
        opacity: 1;
    }
</style>
