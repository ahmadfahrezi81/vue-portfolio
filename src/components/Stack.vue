<template>
    <div class="technology_stack_button" @click="handleTech">
        <i class="fa-solid fa-layer-group"></i>
        <span>stack</span>
    </div>

    <div v-if="isStack" class="technology_stack_popup">
        <div class="popup">
            <h1>Hello <span>&#128075;</span></h1>
            <i class="fa-solid fa-circle-xmark" @click="handleTech"></i>
            <p class="popup_intro">
                This site is built by <span>Ahmad Fahrezi</span>
            </p>
            <p class="popup_fork">
                <i class="fa-solid fa-code-fork"></i> Get code in the repo
                <a
                    href="https://github.com/Anti-glitches/vue-portfolio"
                    target="_blank"
                    ><b> here</b></a
                >
            </p>
            <div class="popup_stack">
                <i class="fa-solid fa-layer-group"></i>The stack in this
                project:
                <div class="stack_icons">
                    <i class="fa-brands fa-vuejs"></i>
                    <i class="fa-brands fa-js"></i>
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-sass"></i>
                </div>
            </div>
            <div class="popup_contact_menu">
                <p>Find me here:</p>
                <div class="footer_icons">
                    <a href="https://github.com/Anti-glitches" target="_blank"
                        ><i class="fa-brands fa-github"></i
                    ></a>
                    <a
                        href="https://www.linkedin.com/in/ahmadfahrezi"
                        target="_blank"
                    >
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="mailto:ahmadfahrezi8127@gmail.com" target="_blank">
                        <!-- https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example-->
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                    <a
                        href="https://twitter.com/AhmadFa31438211"
                        target="_blank"
                    >
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="">
                        <i class="fa-solid fa-globe"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";

export default {
    setup() {
        const isStack = ref(false);

        const handleTech = () => {
            isStack.value = !isStack.value;
        };

        return { isStack, handleTech };
    },
};
</script>
<style lang="scss">
.technology_stack_popup {
    position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    .popup {
        width: 400px;
        height: 500px;
        border-radius: 0.8rem;
        border: 3px solid black;
        padding: 2rem;
        background: aliceblue;
        position: inherit;

        h1 {
            margin-top: 2.5rem;

            span {
                display: inline-block;
                animation: shake 0.8s alternate ease-in-out;
                animation-iteration-count: infinite;
            }

            @keyframes shake {
                0% {
                    transform-origin: bottom right;
                    transform: rotate(0deg);
                }
                100% {
                    transform-origin: bottom right;
                    transform: rotate(50deg);
                }
            }
        }

        .fa-circle-xmark {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            font-size: 1.7rem;
            cursor: pointer;
        }

        .popup_intro {
            font-size: 1.3rem;

            span {
                font-weight: bold;
            }
        }

        .popup_fork {
            margin-top: 3rem;
            font-size: 1.2rem;

            i {
                margin-right: 0.5rem;
            }

            a {
                text-decoration: none;
                color: #232330;
                display: inline-block;
                text-decoration: underline 3px pink;
                text-underline-offset: 3px;
            }
        }

        .popup_stack {
            font-size: 1.2rem;

            i {
                margin-right: 0.5rem;
            }

            .stack_icons {
                font-size: 2.5rem;
                display: flex;
                flex-wrap: wrap;
                column-gap: 1.5rem;
                row-gap: 1.5rem;
                margin-top: 0.3rem;
            }
        }

        .popup_contact_menu {
            background: white;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: fit-content;
            padding: 1.5rem 2rem;
            border-radius: 0.8rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
                font-size: 1.2rem;
                margin-top: 0;
                margin-bottom: 0.8rem;
            }

            .footer_icons {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                align-items: center;
                justify-items: center;
                width: 100%;

                i {
                    font-size: 1.5rem;
                    cursor: pointer;
                }
            }
        }
    }
}

.technology_stack_button {
    z-index: 99;
    position: fixed;
    right: 0;
    bottom: 10%;
    min-width: 50px;
    width: fit-content;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(35, 152, 255);
    border-radius: 0.5rem 0 0 0.5rem;
    cursor: pointer;
    color: white;

    i {
        font-size: 1.5rem;
    }

    span {
        display: none;
        margin-left: 10px;
        font-size: 1.2rem;
    }
}

.technology_stack_button:hover > span {
    display: inline-block;
}
@media (max-width: 450px) {
    .technology_stack_popup {
        .popup {
            height: 100%;
            width: 100%;
        }
    }
}
</style>
