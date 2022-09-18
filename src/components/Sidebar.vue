<template>
    <!-- <button @click="showSidebar = !showSidebar">Show</button> -->
    <div class="icons" v-if="isOpen">
        <div class="icon">
            <a href="https://github.com/Anti-glitches" target="_blank"
                ><i class="fa-brands fa-github"></i
            ></a>
        </div>
        <div class="icon">
            <a href="https://twitter.com/AhmadFa31438211" target="_blank">
                <i class="fa-brands fa-twitter"></i>
            </a>
        </div>
        <div class="icon">
            <a href="mailto:ahmadfahrezi8127@gmail.com" target="_blank">
                <!-- https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example-->
                <i class="fa-solid fa-envelope"></i>
            </a>
        </div>
        <div class="icon">
            <a href="https://www.linkedin.com/in/ahmadfahrezi" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
            </a>
        </div>
        <div class="icon">
            <!-- <i class="fa-brands fa-dribbble"></i> -->
            <a href="https://dribbble.com/ahmadfahrezi" target="_blank">
                <i class="fa-brands fa-dribbble"></i>
            </a>
        </div>
    </div>
    <div class="sidebar_arrow">
        <i class="fa-solid fa-caret-left" v-if="isOpen" @click="handleOpen"></i>
        <i class="fa-solid fa-caret-right" v-else @click="handleOpen"></i>
    </div>
</template>
<script>
import { ref, onMounted } from "vue";

export default {
    setup() {
        const isOpen = ref(true);

        const handleOpen = () => {
            isOpen.value = !isOpen.value;
        };

        onMounted(() => {
            isOpen.value = window.innerWidth > 640;

            window.addEventListener("resize", () => {
                // console.log(window.innerWidth);

                isOpen.value = window.innerWidth > 640;
            });

            if (isOpen) {
                onscroll = () => {
                    isOpen.value = false;
                };
            }
        });

        return { isOpen, handleOpen };
    },
};
</script>
<style lang="scss" scoped>
.sidebar_arrow {
    z-index: 100;
    position: fixed;
    top: 50%;
    bottom: 50%;
    transform: translateY(-50%);

    height: 317px; //this is the size of the sidebar
    display: flex;
    align-items: center;

    border-left: 5px solid black;

    i {
        position: relative;
        font-size: 2rem;
        cursor: pointer;
    }

    i.fa-caret-left {
        left: 6rem;
    }

    i.fa-caret-left {
        animation: leftAnimation 0.4s alternate ease-in;
        animation-iteration-count: infinite;

        @keyframes leftAnimation {
            0% {
                transform: translateX(3px);
            }
            100% {
                transform: translateX(0px);
            }
        }
    }

    i.fa-caret-right {
        left: 0rem;
    }

    i.fa-caret-right {
        animation: rightAnimation 0.4s alternate ease-in;
        animation-iteration-count: infinite;

        @keyframes rightAnimation {
            0% {
                transform: translateX(0px);
            }
            100% {
                transform: translateX(3px);
            }
        }
    }
}

.icons {
    position: fixed;
    top: 50%;
    bottom: 50%;
    transform: translateY(-50%);
    left: 1rem;
    width: fit-content;
    height: fit-content;

    display: grid;
    row-gap: 1rem;
    padding: 1.5rem 0.5rem;
    font-size: 1.5rem;

    border: 3px solid black;
    // background: #000;
    border-radius: 1rem;

    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.19);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.9px);
    -webkit-backdrop-filter: blur(8.9px);

    .icon {
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        width: fit-content;
        cursor: pointer;

        a {
            line-height: 0;
        }
    }

    .icon:hover {
        background: rgb(195, 227, 255);
    }

    .icon:hover i {
        color: rgb(27, 148, 255);
    }
}
</style>
