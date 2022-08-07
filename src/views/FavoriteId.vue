<template>
    <div class="app__content">
        <HomeBegin :info="data.daily"/>
        <HomeDates :info="data.weekly"/>
        <HomeGrid :info="data.daily"/>
        <HomeFlex :info="data.daily"/>
    </div>
</template>
<style lang="scss">
    .app__content {
        position: relative;
        padding: 15px 15px 31px;
    }
</style>
<script setup>
    import HomeBegin from '@/components/Home/HomeBegin.vue';
    import HomeDates from '@/components/Home/HomeDates.vue';
    import HomeGrid from '@/components/Home/HomeGrid.vue';
    import HomeFlex from '@/components/Home/HomeFlex.vue';
    import { computed, onMounted } from '@vue/runtime-core';
    import { useStore } from 'vuex';
    import router from '@/router';
    const store = useStore();
    onMounted(() => {
        let id = +router.currentRoute.value.params.id;
        let idx = store.state.foundCities.findIndex(c => c.id == id);
        if(isNaN(id)) router.push('/');
        if(idx == -1) router.push('/');
        const lat = store.state.foundCities[idx].lat;
        const lon = store.state.foundCities[idx].lon;
        const APIKEY = store.state.APIKEY;
        const host = store.state.host;
        let url = `${host}/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&lang=ru&APPID=${APIKEY}`;
        let url2 = `${host}/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&lang=ru&units=metric&appid=${APIKEY}`;
        store.dispatch('getMainWeather', {url, url2});
    })
    const data = computed(() => store.state.dataPage);
</script>