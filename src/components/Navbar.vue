<template>
    <div>
        <div
            v-if="isDesktop"
            class="navbar_desktop"
            :style="[
                view.topOfPage
                    ? {
                          backgroundColor: '#FDFAF3',
                      }
                    : {
                          backgroundColor: '#01295F',
                          opacity: '0.98',
                      },
            ]"
        >
            <ul class="desktop_option">
                <router-link
                    :to="{ path: '/', hash: '#AboutMe' }"
                    :style="[
                        view.topOfPage
                            ? {
                                  color: 'black',
                              }
                            : {
                                  color: 'white',
                              },
                    ]"
                    >About</router-link
                >
                <router-link
                    :to="{ path: '/', hash: '#MainProject' }"
                    :style="[
                        view.topOfPage
                            ? {
                                  color: 'black',
                              }
                            : {
                                  color: 'white',
                              },
                    ]"
                    >Project</router-link
                >
                <router-link
                    :to="{ path: '/', hash: '#Contact' }"
                    :style="[
                        view.topOfPage
                            ? {
                                  color: 'black',
                              }
                            : {
                                  color: 'white',
                              },
                    ]"
                    >Contact</router-link
                >
            </ul>
            <Logo @click="handleHome" />

            <button class="desktop_resume" @click="openPDF">Resume</button>
            <!-- <a href="/resume.pdf"><button class="desktop_resume">Resume</button></a> -->
        </div>
        <div
            v-else
            class="navbar_mobile"
            :style="[
                view.topOfPage
                    ? {
                          backgroundColor: '#FDFAF3',
                      }
                    : {
                          backgroundColor: '#01295F',
                          opacity: '0.98',
                      },
            ]"
        >
            <div v-if="!isMenu">
                <Logo @click="handleMenu" />

                <div class="hand_animation" v-if="handIsAlive">
                    <span class="hand_point">👆</span>
                    <span class="open_msg">Open Menu Here</span>
                </div>
            </div>
            <div v-else class="mobile_menu_opened">
                <Logo @click="handleMenu" inMenu="true" />

                <ul class="mobile_option">
                    <router-link
                        @click="handleMenu"
                        :to="{ path: '/', hash: '' }"
                        >Home</router-link
                    >
                    <router-link
                        @click="handleMenu"
                        :to="{ path: '/', hash: '#AboutMe' }"
                        >About</router-link
                    >
                    <router-link
                        @click="handleMenu"
                        :to="{ path: '/', hash: '#MainProject' }"
                        >Project</router-link
                    >
                    <router-link
                        @click="handleMenu"
                        :to="{ path: '/', hash: '#Contact' }"
                        >Contact</router-link
                    >
                </ul>
                <!-- <button class="mobile_resume">Resume</button> -->

                <span class="mobile_close" @click="handleMenu">
                    <i class="fa-solid fa-xmark"></i>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, ref } from "vue";
import Logo from "./Logo.vue";
import { useRouter } from "vue-router";

export default {
    components: { Logo },
    setup() {
        const isDesktop = ref(true);
        const isMenu = ref(false);
        const handIsAlive = ref(true);
        const router = useRouter();

        setTimeout(() => {
            handIsAlive.value = false;
        }, 4000);

        onMounted(() => {
            isDesktop.value = window.innerWidth > 640;

            window.addEventListener("resize", () => {
                // console.log(window.innerWidth);

                isDesktop.value = window.innerWidth > 640;
            });
        });

        const handleMenu = () => {
            isMenu.value = !isMenu.value;
        };

        const handleHome = () => {
            document.location.href = "/";
        };

        const openPDF = () => {
            window.open("/Resume.pdf", "_blank");
        };

        return {
            isDesktop,
            isMenu,
            handIsAlive,
            handleMenu,
            handleHome,
            openPDF,
        };
    },
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
                console.log("nothing");
                this.view.topOfPage = false;
            } else {
                console.log("scrop");
                this.view.topOfPage = true;
            }
        },
    },
    data() {
        return {
            view: {
                topOfPage: true,
            },
        };
    },
};
</script>
<style lang="scss" scoped>
.onScroll {
    background-color: #fff;
}
.navbar_desktop {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    justify-items: center;
    align-items: center;
    padding: 0 12vw;

    position: fixed;
    top: 0;
    width: 100%;
    height: auto;
    // margin-bottom: 200px;
    background: #efffc3;
    z-index: 999;

    .desktop_option {
        justify-self: start; //for the grid

        display: flex;
        align-items: center;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0;

        // router-link is a tag when rendered
        a {
            font-size: 1.2rem;
            padding: 0.5rem 0;
            cursor: pointer;
        }

        a:hover {
            transform: scale(1.05);
            border-bottom: 5px #dae0ff solid;
        }
    }

    .desktop_resume {
        justify-self: end; //for grid

        border: none;
        background: #fff1da;
        font-size: 1.3rem;
        border-radius: 2rem;
        padding: 0.5rem 4rem;
        cursor: pointer;
        transition: all 0.2s ease;

        // cursor: not-allowed;
    }

    .desktop_resume:hover {
        transform: translateY(-5px);
    }
}

@media (max-width: 900px) {
    .navbar_desktop {
        padding: 0 8vw;
        background: #000;
    }
}

.navbar_mobile {
    display: flex;
    justify-content: center;

    position: fixed;
    top: 0;
    width: 100%;
    height: auto;
    // margin-bottom: 200px;
    background: #efffc3;
    z-index: 999;

    // margin-bottom: 3rem;

    .hand_animation {
        position: absolute;
        top: 6rem;
        right: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .hand_point {
            font-size: 1.5rem;
            display: inline-block;
            animation: upAnimation 0.4s alternate ease-in;
            animation-iteration-count: infinite;

            @keyframes upAnimation {
                0% {
                    transform: translateY(0px);
                }

                100% {
                    transform: translateY(-5px);
                }
            }
        }

        .open_msg {
            // border: 3px solid black;
            // padding: 0 1rem;
            // border-radius: 1rem;
            font-weight: bold;
            color: rgb(255, 66, 66);
            border-bottom: 3px solid rgb(255, 66, 66);
        }
    }

    .mobile_menu_opened {
        z-index: 199;
        position: fixed;
        // background: #ffd68f;
        // background: linear-gradient(125deg, #ccf9db, #efffc3);
        background: #01295f;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: grid;
        grid-template-rows: 2fr 4fr 2fr 1fr;
        justify-items: center;
        touch-action: none;

        .mobile_option {
            align-self: center;

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.3rem;
            list-style: none;
            margin: 0;
            padding: 0;

            a {
                color: white;
                font-size: 1.8rem;
                cursor: pointer;
            }
        }

        .mobile_resume {
            align-self: flex-start;

            border: none;
            background: #fff1da;
            font-size: 1.5rem;
            border-radius: 2rem;
            padding: 0.5rem 6rem;
            transition: all 0.2s ease;
            cursor: pointer;
        }

        .mobile_close {
            align-self: flex-end;

            width: 60px;
            height: 60px;
            border: 4px solid #fff1da;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100rem;
            cursor: pointer;

            i {
                font-size: 2rem;
                color: #fff1da;
            }
        }
    }
}
</style>
