<template>
    <div class="about">
        <Recent />
    </div>
</template>
<script>
import Recent from "../components/Recent.vue";
export default {
    components: { Recent },
};
</script>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
