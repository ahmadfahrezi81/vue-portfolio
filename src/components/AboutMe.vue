<template>
    <!-- <div>about</div> -->
    <div class="tech_skills">
        <span v-for="(skill, i) in skills" :key="i">{{ skill }}</span>
    </div>
</template>
<script>
import userData from "../assets/data.json";
export default {
    setup() {
        const skills = userData[0].skills;

        return { skills };
    },
};
</script>
<style lang="scss" scoped>
.tech_skills {
    // padding: 0 6rem;
    font-weight: 600;
    // display: flex;

    span {
        display: inline-block;
        padding: 0.5rem 2rem;
        background: rgb(191, 255, 182);
        margin: 0.5rem;
        // border: 2px solid #232330;
        border-radius: 0.5rem;

        // animation: shineShake 1.5s alternate linear;
        // animation-iteration-count: infinite;

        // @keyframes shineShake {
        //     0% {
        //         transform: scale(1) rotate(-2deg);
        //     }
        //     100% {
        //         transform: scale(1.02) rotate(2deg);
        //     }
        // }
    }

    // span:hover {
    //     animation: shineShake 0.2s alternate linear;
    //     animation-iteration-count: infinite;

    //     @keyframes shineShake {
    //         0% {
    //             transform: scale(1) rotate(-2deg);
    //         }
    //         100% {
    //             transform: scale(1.02) rotate(2deg);
    //         }
    //     }
    // }
}

@media (max-width: 500px) {
    .tech_skills {
        // padding: 0 6rem;

        font-size: 0.8rem;

        span {
            padding: 0.5rem 1rem;
            margin: 0.3rem;
        }
    }
}
</style>
