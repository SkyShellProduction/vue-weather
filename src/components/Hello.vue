<template>
    <div class="hello" :class="{active: showHello}">
        <h3>MyWeatherApp</h3>
        <p>Loading, please be patient</p>
    </div>
</template>
<style lang="scss">
.hello {
    position: absolute;
    background: #fff;
    z-index: -10;
    opacity: 0;
    transition: 0.2s linear;
    font-size: 40px;
    top: 48px;
    left: 6px;
    right: 6px;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &.active {
        z-index: 10;
        opacity: 1;
    }
    & p {
        font-size: 16px;
    }
}
</style>
<script>
    export default {
        computed: {
            showHello() {
                return this.$store.state.showHello
            }
        },
    }
</script>