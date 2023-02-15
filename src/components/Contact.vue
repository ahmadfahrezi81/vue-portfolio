<template>
    <div class="section_contact">
        <div class="section_head" id="Contact">
            <span class="section_head_title">What's Next</span>
            <span class="section_head_number">3</span>
        </div>

        <div class="section_body">
            <h1>Let's chat</h1>
            <p>Have an exciting project in mind or just want to talk?</p>
            <p>Feel free to say hi! <span>&#128071;</span></p>
            <a href="mailto:ahmadfahrezi8127@gmail.com" target="_blank">
                <button>Say hello <span>&#128075;</span></button>
            </a>

            <!-- <button>Say hello <span>&#128075;</span></button> -->
            <!-- <a href="mailto:ahmadfahrezi8127@gmail.com" target="_blank">
                <i class="fa-solid fa-envelope"></i>
            </a> -->
        </div>

        <a
            href="https://github.com/Anti-glitches/vue-portfolio"
            target="_blank"
            class="section_footer"
        >
            <p class="tag">Designed & Built by Ahmad Fahrezi</p>
            <p>
                <i class="fa-brands fa-github"></i>
                <span>@Anti-glitches</span>
            </p>
        </a>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.section_contact {
    // height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .section_body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: 15vh;
        // padding: 0 1rem;
        margin: 0 8vw;

        h1 {
            font-weight: 700;
            font-size: 60px;
            margin: 60px 0;
        }

        p {
            font-size: 25px;
            text-align: center;
            margin: 0;

            span {
                display: inline-block;
                animation: downAnimate 0.5s alternate ease-in;
                animation-iteration-count: infinite;
            }

            @keyframes downAnimate {
                0% {
                    transform: translateY(0px);
                }
                100% {
                    transform: translateY(10px);
                }
            }
        }

        button {
            margin: 40px 0;
            padding: 20px 40px;
            border: 3px solid black;
            border-radius: 10px;
            font-size: 20px;
            font-weight: 700;
            background: none;
            cursor: pointer;
            transition: 0.5s ease all;

            span {
                display: inline-block;
            }
        }

        button:hover {
            transform: scale(1.1);
        }

        button:hover span {
            animation: shake 0.5s alternate ease-in-out;
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

    .section_footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: fit-content;
        cursor: pointer;
        transition: 0.3s all ease;
        text-decoration: none;
        color: #232330;

        p {
            margin: 0;
        }

        p.tag {
            font-weight: 700;
        }

        p:last-child {
            display: flex;
            align-items: center;

            i {
                font-size: 1.3rem;
            }

            span {
                margin-left: 2px;
            }
        }
    }

    .section_footer:hover {
        color: #2c63d8;
    }

    a {
        margin-bottom: 2rem;
    }
}
</style>
