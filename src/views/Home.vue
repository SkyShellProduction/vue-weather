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
    import { computed } from '@vue/runtime-core';
    import { useStore } from 'vuex';
    const data = computed(() => useStore().state.data);
</script>