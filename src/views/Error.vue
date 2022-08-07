<template>
    <div class="app__content">
        <p class="error">
            <span class="glitch special1">404 Page Not Found</span>
            <span class="glitch special2">404 Page Not Found</span
            >
        </p>
        <img src="@/assets/images/error.jpg" alt="" class="error__image">
    </div>
</template>
<style lang="scss">
.app__content {
    position: relative;
    padding: 15px 15px 31px;
}
.error {
    text-align: center;
    font-size: 40px;
    position: relative;
    margin-bottom: 30px;
    user-select: none;
    &__image{
        max-width: 250px;
        width: 100%;
        height: 250px;
        margin: 0 auto;
        border-radius: 50%;
        object-fit: cover;
        object-position: left;
    }
}

.glitch {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    left: 0;
    top: 0;
    z-index: var(--index);
}
.special1 {
    text-shadow: inset 0 0 15px rgb(211, 32, 59);
    z-index: 1;
    position: relative;
}
.special2 {
    z-index: 2;
    animation: glitch 3s cubic-bezier(0.68, -0.6, 0.32, 1.6) backwards infinite;
}
@keyframes glitch {
    0% {
        transform: translateX(-1%);
        text-shadow: 0 0 15px rgb(211, 32, 59);
    }
    5% {
        transform: translateX(1%);
        text-shadow: 0 0 15px rgb(211, 32, 59);
    }
    10% {
        transform: translateX(0%);
        text-shadow: none;
    }
}
</style>