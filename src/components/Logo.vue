<template>
    <div class="spinner-box unselectable">
        <div
            class="configure-border-1"
            :style="[
                !view.topOfPage || inMenu
                    ? {
                          border: '2px solid white',
                      }
                    : {
                          border: '2px solid black',
                      },
            ]"
        >
            <div class="configure-core"></div>
        </div>
        <div
            class="configure-border-2"
            :style="[
                !view.topOfPage || inMenu
                    ? {
                          border: '2px solid white',
                      }
                    : {
                          border: '2px solid black',
                      },
            ]"
        >
            <div class="configure-core"></div>
        </div>
        <span
            :style="[
                !view.topOfPage || inMenu
                    ? {
                          color: 'white',
                      }
                    : {
                          color: 'black',
                      },
            ]"
            >A</span
        >
    </div>
</template>
<script>
export default {
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            // Any code to be executed when the window is scrolled
            if (window.pageYOffset > 0) {
                console.log("nothing from logo");
                this.view.topOfPage = false;
            } else {
                console.log("scrop from logo");
                this.view.topOfPage = true;
            }
        },
    },
    props: {
        inMenu: Boolean,
    },
    data() {
        return {
            view: {
                topOfPage: window.pageYOffset === 0,
                inMenu: this.inMenu,
            },
        };
    },
};
</script>

<style lang="scss" scoped>
@media (max-width: 640px) {
    .spinner-box {
        cursor: pointer;
    }
}
.unselectable {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.spinner-box {
    z-index: 100;
    // cursor: pointer;
    width: 50px;
    height: 50px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;

    span {
        position: absolute;
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
    }

    .configure-border-1 {
        width: 50px;
        height: 50px;
        padding: 3px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid black;
        border-radius: 1rem;
        animation: configure-clockwise 3s ease-in-out infinite alternate;
    }

    .configure-border-2 {
        border-radius: 1rem;
        width: 50px;
        height: 50px;
        // width: 38px;
        // height: 38px;
        padding: 3px;
        left: -115px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid black;
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
