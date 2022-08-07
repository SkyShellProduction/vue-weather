<template>
    <ul class="app__list" v-if="list.length > 0">
        <li v-for="item in list" :key="item.id">
            <router-link class="app__list-link" :to="`/favorite/${item.id}`">{{ item.text }}</router-link>
        </li>
    </ul>
</template>
<style lang="scss">
.app__list-link {
    background: rgba(196, 196, 196, 0.5);
    display: block;
    width: 100%;
    padding: 10px 15px;
    font-size: 20px;
    text-transform: capitalize;
    margin: 10px 0;
    color: #000;
}
</style>
<script setup> 
    const props = defineProps({
        list: {
            type: Array,
            default: []
        }
    })
</script>