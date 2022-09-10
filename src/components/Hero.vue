<template>
    <div class="section_hero">
        <div class="hero_text">
            <h1>Ahmad Fahrezi.</h1>
            <p>Full Stack Developer + Aspiring Software Engineering</p>
            <button>Nothing for Now</button>
        </div>
        <div class="hero_animation">
            <img class="glasses" src="glasses_doodle.png" alt="glass" />
            <!-- <img class="lower_circle" src="lower_circle.png" alt="" /> -->
            <!-- <img class="shine place1" src="shine.png" />
            <img class="shine place2" src="shine.png" />
            <img class="shine place3" src="shine.png" /> -->
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media (min-width: 641px) {
    .section_hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        column-gap: 4rem;
        padding: 0 5rem;

        .hero_animation {
            display: flex;
            justify-content: center;
            align-items: center;
            // height: 100vh;
            // border: 2px solid black;
            width: 500px;
            height: 500px;
            position: relative;

            .glasses {
                width: 420px;

                display: inline-block;
                position: absolute;
                z-index: 10;

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
                width: 400px;

                position: absolute;
                bottom: 2rem;

                filter: invert(11%) sepia(4%) saturate(4209%) hue-rotate(201deg)
                    brightness(92%) contrast(90%);

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
                // z-index: 100;
                filter: invert(73%) sepia(81%) saturate(556%) hue-rotate(10deg)
                    brightness(109%) contrast(107%);

                animation: shineShake 1.5s alternate linear;
                animation-iteration-count: infinite;

                @keyframes shineShake {
                    0% {
                        transform: scale(1) rotate(-5deg);
                    }
                    100% {
                        transform: scale(1.2);
                    }
                }
            }

            .place1 {
                width: 50px;
                top: 6rem;
                left: 2rem;
            }
            .place2 {
                width: 70px;
                top: 1.5rem;
                right: 2rem;
            }
            .place3 {
                width: 20px;
                top: 11.5rem;
                // bottom: 8rem;
                // left: 0;
                // right: 0;
            }
        }

        .hero_text {
            h1 {
                font-size: 4rem;
                color: #585858;
                margin: 0;
                // font-weight: bold;
            }

            p {
                font-size: 1.5rem;
                margin: 0;
                font-weight: 500;
            }

            button {
                margin-top: 2rem;
                border: 3px solid black;
                padding: 1rem 4rem;
            }
        }
    }
}

@media (max-width: 640px) {
    .section_hero {
        display: grid;
        grid-auto-flow: column;
        grid-template-rows: 1fr 1fr;
        // row-gap: 4rem;
        padding: 0 5vw;
        align-items: center;
        justify-items: center;

        .hero_animation {
            display: flex;
            justify-content: center;
            align-items: center;
            // height: 100vh;
            // border: 2px solid black;
            width: 100%;
            height: 100%;
            position: absolute;

            .glasses {
                // width: 100%;
                // height: auto;
                width: 100%;
                height: 100%;

                // display: inline-block;
                position: absolute;
                z-index: 10;
                object-fit: cover;

                // animation: growAnimation 2s alternate linear;
                // animation-iteration-count: infinite;

                // @keyframes growAnimation {
                //     0% {
                //         transform: scale(1);
                //     }
                //     100% {
                //         transform: scale(1.1);
                //     }
                // }
            }

            .lower_circle {
                width: 400px;

                position: absolute;
                bottom: 2rem;

                filter: invert(11%) sepia(4%) saturate(4209%) hue-rotate(201deg)
                    brightness(92%) contrast(90%);

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
                // z-index: 100;
                filter: invert(73%) sepia(81%) saturate(556%) hue-rotate(10deg)
                    brightness(109%) contrast(107%);

                animation: shineShake 1.5s alternate linear;
                animation-iteration-count: infinite;

                @keyframes shineShake {
                    0% {
                        transform: scale(1) rotate(-5deg);
                    }
                    100% {
                        transform: scale(1.2);
                    }
                }
            }

            .place1 {
                width: 50px;
                top: 6rem;
                left: 2rem;
            }
            .place2 {
                width: 70px;
                top: 1.5rem;
                right: 2rem;
            }
            .place3 {
                width: 20px;
                top: 11.5rem;
                // bottom: 8rem;
                // left: 0;
                // right: 0;
            }
        }

        .hero_text {
            text-align: center;
            // padding: 12vh 0;

            h1 {
                font-size: 3.2rem;
                color: #585858;
                margin: 0;
                // font-weight: bold;
            }

            p {
                font-size: 1.2rem;
                margin: 0;
                font-weight: 500;
            }

            button {
                margin-top: 2rem;
                border: 3px solid black;
                padding: 1rem 4rem;
            }
        }
    }
}
</style>
