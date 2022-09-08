<template>
    <div>
        <div v-if="isDesktop" class="navbar_desktop">
            <ul class="desktop_option">
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
            <Logo />
            <button class="desktop_resume">Resume</button>
        </div>
        <div v-else class="navbar_mobile">
            <div v-if="!isMenu">
                <Logo @click="handleMenu" />

                <div class="hand_animation" v-if="handIsAlive">
                    <span class="hand_point">👆</span>
                    <span class="open_msg">Open Menu Here</span>
                </div>
            </div>
            <div v-else class="mobile_menu_opened">
                <Logo />

                <ul class="mobile_option">
                    <li>About</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
                <button class="mobile_resume">Resume</button>

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
export default {
    components: { Logo },
    setup() {
        const isDesktop = ref(true);
        const isMenu = ref(false);
        const handIsAlive = ref(true);

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

        return { isDesktop, isMenu, handIsAlive, handleMenu };
    },
};
</script>
<style lang="scss" scoped>
.navbar_desktop {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    justify-items: center;
    align-items: center;
    padding: 0 2rem;

    .desktop_option {
        justify-self: start; //for the grid

        display: flex;
        align-items: center;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            font-size: 1.2rem;
            padding: 0.5rem 0;
            cursor: pointer;
        }

        li:hover {
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
    }
    .desktop_resume:hover {
        transform: translateY(-5px);
    }
}

.navbar_mobile {
    display: flex;
    justify-content: center;

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
            border-bottom: 3px solid #232330;
        }
    }

    .mobile_menu_opened {
        z-index: 99;
        position: absolute;
        background: #ffd68f;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: grid;
        grid-template-rows: 2fr 4fr 2fr 1fr;
        justify-items: center;

        .mobile_option {
            align-self: center;

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.3rem;
            list-style: none;
            margin: 0;
            padding: 0;

            li {
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
            align-self: flex-start;

            width: 60px;
            height: 60px;
            border: 4px solid #232330;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100rem;
            cursor: pointer;

            i {
                font-size: 2rem;
            }
        }
    }
}
</style>
