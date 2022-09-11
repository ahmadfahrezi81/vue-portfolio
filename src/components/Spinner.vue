<template>
    <div class="spinner-box">
        <div class="configure-border-1">
            <div class="configure-core"></div>
        </div>
        <div class="configure-border-2">
            <div class="configure-core"></div>
        </div>
        <span>A</span>
    </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.spinner-box {
    width: 100%;
    height: 100vh;
    // margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    span {
        position: absolute;
        text-align: center;
        font-size: 2.5rem;
        font-weight: bold;
    }

    .configure-border-1 {
        width: 110px;
        height: 110px;
        padding: 3px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid #232330;
        border-radius: 2rem;
        animation: configure-clockwise 3s ease-in-out infinite alternate;
    }

    .configure-border-2 {
        border-radius: 2rem;
        width: 110px;
        height: 110px;
        padding: 3px;
        left: -115px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid #232330;
        transform: rotate(45deg);
        animation: configure-xclockwise 3s ease-in-out infinite alternate;
    }
    .configure-core {
        width: 100%;
        height: 100%;
    }

    @keyframes configure-clockwise {
        0% {
            transform: rotate(0);
        }
        25% {
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(180deg);
        }
        75% {
            transform: rotate(270deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes configure-xclockwise {
        0% {
            transform: rotate(45deg);
        }
        25% {
            transform: rotate(-45deg);
        }
        50% {
            transform: rotate(-135deg);
        }
        75% {
            transform: rotate(-225deg);
        }
        100% {
            transform: rotate(-315deg);
        }
    }
}
</style>
