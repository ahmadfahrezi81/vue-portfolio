<template>
    <div class="navbar">
        <ul class="nav_option">
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
        <Logo @click="handleClick" class="logo" />
        <button class="resume">Resume</button>
        <div v-if="isActive" class="full_menu">
            <ul class="mobile_option">
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
            <button class="mobile_resume">Resume</button>

            <span class="close" @click="handleClick">
                <i class="fa-solid fa-xmark"></i>
            </span>
        </div>
    </div>
</template>
<script>
import Spinner from "./Spinner.vue";
import Logo from "./Logo.vue";
import { ref } from "vue";
export default {
    setup() {
        const isActive = ref(false);

        const handleClick = () => {
            isActive.value = !isActive.value;
        };

        return { handleClick, isActive };
    },
    components: { Spinner, Logo },
};
</script>
<style lang="scss" scoped>
.navbar {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    justify-items: center;
    align-items: center;
    padding: 0 2rem;

    .nav_option {
        justify-self: start;
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
            // transition: transform 0.5s ease;
        }

        li:hover {
            // transform: translateY(-5px);
            transform: scale(1.05);
            border-bottom: 5px #dae0ff solid;
        }
    }

    .resume {
        justify-self: end;
        border: none;
        background: #fff1da;
        font-size: 1.3rem;
        border-radius: 2rem;
        padding: 0.5rem 4rem;
        transition: all 0.2s ease;
        cursor: pointer;
        // height: fit-content;
    }
    .resume:hover {
        transform: translateY(-5px);
    }
    .full_menu {
        display: none;
    }
}

@media (max-width: 640px) {
    .navbar {
        display: flex;
        justify-content: center;

        .nav_option {
            display: none;
        }

        .resume {
            display: none;
        }

        .full_menu {
            // display: none;
            z-index: 99;
            position: absolute;
            background: aliceblue;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: grid;
            grid-template-rows: 4fr 2fr 1fr;
            align-items: center;
            justify-items: center;

            .mobile_option {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1.3rem;
                list-style: none;
                margin: 0;
                padding: 0;
                align-self: flex-end;

                li {
                    font-size: 1.8rem;
                    cursor: pointer;
                }
            }

            .mobile_resume {
                // margin-top: 4rem;
                border: none;
                background: #fff1da;
                font-size: 1.5rem;
                border-radius: 2rem;
                padding: 0.5rem 6rem;
                transition: all 0.2s ease;
                cursor: pointer;
            }

            .close {
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
}
</style>
