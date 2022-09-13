<template>
    <div class="section_hero">
        <div class="hero_text">
            <h1>Ahmad Fahrezi.</h1>
            <p>Full Stack Developer + Aspiring Software Engineer</p>
            <button>Nothing for Now</button>
        </div>
        <div class="hero_animation">
            <img class="glasses" src="glasses_doodle.png" alt="glass" />
            <img class="lower_circle" src="lower_circle.png" alt="" />
            <img class="shine place1" src="shine.png" />
            <img class="shine place2" src="shine.png" />
            <img class="shine place3" src="shine.png" />
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.section_hero {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    overflow: hidden;
    padding: 1rem;

    .hero_text {
        text-align: center;

        h1 {
            font-size: 3.5rem;
            color: #585858;
            margin: 0;
        }

        p {
            font-size: 1.4rem;
            margin: 0;
            font-weight: 500;
        }

        button {
            margin-top: 2rem;
            border: 3px solid black;
            border-radius: 0.5rem;
            padding: 1rem 4rem;
        }
    }
}

.hero_animation {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 400px;
    min-height: 400px;
    width: fit-content;

    .glasses {
        width: 360px;
        position: absolute;

        animation: growAnimation 2s alternate linear;
        animation-iteration-count: infinite;

        @keyframes growAnimation {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(1.1);
            }
        }
    }

    .lower_circle {
        width: 320px;
        position: absolute;

        bottom: 2rem;

        animation: tiltAnimation 2s alternate linear;
        animation-iteration-count: infinite;

        @keyframes tiltAnimation {
            0% {
                transform: rotateX(0.15turn);
            }
            100% {
                transform: rotateX(0turn);
            }
        }
    }

    .shine {
        position: absolute;
        filter: invert(79%) sepia(76%) saturate(994%) hue-rotate(4deg)
            brightness(106%) contrast(113%);

        animation: shineShake 1.5s alternate linear;
        animation-iteration-count: infinite;

        @keyframes shineShake {
            0% {
                transform: scale(1) rotate(-5deg);
            }
            100% {
                transform: scale(1.3);
            }
        }
    }

    .place1 {
        width: 50px;
        top: 4rem;
        left: 1rem;
    }

    .place2 {
        width: 60px;
        top: 1.5rem;
        right: 1rem;
    }
    .place3 {
        width: 30px;
        top: 8rem;
    }
}

@media (min-width: 700px) {
    .section_hero {
        flex-direction: row;
        // column-gap: 3rem;

        .hero_text {
            text-align: start;
            margin-top: 3rem;
            max-width: 450px;
        }
    }
}

@media (min-width: 1000px) {
    .section_hero {
        column-gap: 2rem;
    }

    .hero_animation {
        width: 500px;
        height: 500px;

        .glasses {
            width: 420px;
        }

        .lower_circle {
            width: 400px;
        }
        .place1 {
            width: 50px;
            top: 6rem;
            left: 2rem;
        }
        .place2 {
            width: 70px;
            top: 2.5rem;
            right: 2rem;
        }
        .place3 {
            width: 30px;
            top: 11rem;
        }
    }
}
</style>
