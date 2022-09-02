<template lang="">
    <button @click="showSidebar = !showSidebar">Show</button>
    <div class="icons" v-if="showSidebar">
        <div class="icon">
            <i class="fa-brands fa-github"></i>
            <span class="icon-name">Github</span>
        </div>
        <div class="icon">
            <i class="fa-brands fa-twitter"></i>
            <span class="icon-name">Twitter</span>
        </div>
        <div class="icon">
            <i class="fa-regular fa-envelope"></i>
            <span class="icon-name">Email</span>
        </div>
        <div class="icon">
            <i class="fa-brands fa-linkedin"></i>
            <span class="icon-name">Linkedin</span>
        </div>
        <div class="icon">
            <i class="fa-brands fa-dribbble"></i>
            <span class="icon-name">Dribbble</span>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";

export default {
    setup() {
        const showSidebar = ref(false);

        return { showSidebar };
    },
};
</script>
<style lang="scss">
.icons {
    display: grid;
    row-gap: 1rem;
    width: fit-content;
    border-radius: 0 1rem 1rem 0;
    padding: 2rem 1rem 2rem 0.2rem;
    font-size: 2rem;

    .icon {
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        width: fit-content;

        .icon-name {
            // display: none;
            margin-left: 0.7rem;
            font-size: 1.2rem;
            visibility: hidden;
            opacity: 0;
            transition: all 0.2s ease;
            cursor: pointer;
        }
    }

    .icon:hover > .icon-name {
        visibility: visible;
        opacity: 1;
    }

    .icon:hover {
        background: rgb(216, 237, 255);
    }
}
</style>
