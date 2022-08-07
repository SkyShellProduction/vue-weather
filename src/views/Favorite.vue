<template>
    <div class="app__search">
        <FavoriteForm />
        <p class="undefined"  v-show="undef">Ничего не найдено</p>
        <h3 class="app__favorite">Избранное</h3>
        <FavoriteList :list="founds"/>
    </div>
</template>
<style lang="scss">
.app__search {
    background: #fff;
    overflow: auto;
    width: 100%;
    flex-grow: 1;
    height: 100%;
    padding: 15px 15px 31px;
}
.app__favorite {
     margin: 15px;
     color: #000;
}
.undefined {
    font-size: 20px;
    text-align: center;
    margin: 15px 0;
    color: #000;
    text-transform: uppercase;
}
</style>
<script setup>
    import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import FavoriteForm from '../components/Favorite/FavoriteForm.vue';
    import FavoriteList from '../components/Favorite/FavoriteList.vue';
    const undef = computed(() => useStore().state.undef);
    const founds = computed(() => useStore().state.foundCities);
</script>