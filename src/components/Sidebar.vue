<template>
    <!-- <button @click="showSidebar = !showSidebar">Show</button> -->
    <div class="icons" v-if="isOpen">
        <div class="icon">
            <i class="fa-brands fa-github"></i>
        </div>
        <div class="icon">
            <i class="fa-brands fa-twitter"></i>
        </div>
        <div class="icon">
            <i class="fa-regular fa-envelope"></i>
        </div>
        <div class="icon">
            <i class="fa-brands fa-linkedin"></i>
        </div>
        <div class="icon">
            <i class="fa-brands fa-dribbble"></i>
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
                console.log(window.innerWidth);

                isOpen.value = window.innerWidth > 640;
            });
        });

        return { isOpen, handleOpen };
    },
};
</script>
<style lang="scss">
body {
    height: 200vh;
}

.sidebar_arrow {
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

    i.fa-caret-left:hover {
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

    i.fa-caret-right:hover {
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
    border-radius: 1rem;

    .icon {
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        width: fit-content;
        cursor: pointer;
    }

    .icon:hover {
        background: rgb(177, 219, 255);
    }
}
</style>
