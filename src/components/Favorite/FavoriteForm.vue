<template>
    <form action="" class="app__form" @submit.prevent="searchWeather">
        <router-link to="/" class="app__back"
            ><img src="@/assets/images/icons/back.svg" alt=""
        /></router-link>
        <input
            type="text"
            class="app__input"
            placeholder="Введите город/регион"
            required
            minlength="3"
            v-model="search"
        />
        <button class="app__btn">
            <img src="@/assets/images/icons/search.svg" alt="" />
        </button>
    </form>
</template>
<style lang="scss">
    
    .app__form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        grid-gap: 5px;
    }

    .app__input {
        flex-grow: 1;
        width: 100%;
        display: block;
        padding: 5px 10px;
        font-size: 16px;
        line-height: 100%;
        background: rgba(196, 196, 196, 0.5);
    }
    .app__btn{
        cursor: pointer;
        background: transparent;
    }
</style>

<script setup>
const { ref }=require("@vue/reactivity");
const { computed }=require("@vue/runtime-core");
const { useStore }=require("vuex");
const store = useStore();
    let search = computed({
        get: () => store.state.search,
        set: val => store.commit('setSearch', val)
    })
    function searchWeather() {
        store.dispatch('searchResult', search.value);
    }
    
</script>