<template>
    <div>
        <!-- <Navbar /> -->
        <Recent />
        <!-- <Hero /> -->
        <!-- <AboutMe /> -->
        <!-- <Sidebar /> -->
        <!-- <Stack /> -->
        <!-- <MainProject /> -->
        <!-- <OtherNotable /> -->
        <!-- <Contact /> -->
        <!-- <Spinner /> -->
    </div>
</template>
<script>
import MainProject from "../components/MainProject.vue";
import Recent from "../components/Recent.vue";
import Sidebar from "../components/Sidebar.vue";
import Contact from "../components/Contact.vue";
import OtherNotable from "../components/OtherNotable.vue";
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";
import Stack from "../components/Stack.vue";
import Hero from "../components/Hero.vue";
import AboutMe from "../components/AboutMe.vue";

export default {
    components: {
        MainProject,
        Recent,
        Sidebar,
        Contact,
        OtherNotable,
        Navbar,
        Spinner,
        Stack,
        Hero,
        AboutMe,
    },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&family=PT+Sans:wght@400;700&family=Nerko+One&display=swap");

$base-blue: #2c63d8;

// add this later to main.css -> this is temporary
div,
button {
    font-family: "Nunito", sans-serif;
}

.section_head {
    font-family: "PT Sans", sans-serif;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    &_title {
        position: absolute;
        text-align: center;
        left: 0;
        right: 0;
        z-index: 99;
    }

    &_number {
        z-index: 1;
        font-size: 80px;
        color: #c8c8c8;
    }
}
</style>
