<template>
    <div v-if="!loading">
        <Navbar />
        <!-- <HomeView /> -->
        <router-view />
        <div id="technology">IT SHOULD SCROLL TO HERE</div>
    </div>
    <div v-else>
        <Spinner />
    </div>
</template>
<script>
import HomeView from "./views/HomeView.vue";
import Navbar from "./components/Navbar.vue";
import Spinner from "./components/Spinner.vue";
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";

export default {
    setup() {
        const loading = ref(true);

        onMounted(() => {
            setTimeout(() => {
                loading.value = false;
            }, 100); //2100
        });

        return { loading };
    },
    components: {
        HomeView,
        Navbar,
        Spinner,
    },
};
</script>
