<template>
    <div class="section_contact">
        <div class="section_head">
            <span class="section_head_title">What's Next</span>
            <span class="section_head_number">3</span>
        </div>

        <div class="section_body">
            <h1>Let's chat</h1>
            <p>Have an exciting project in mind or just want to talk?</p>
            <p>Feels free to say hi! <span>&#128071;</span></p>
            <button>Say hello <span>&#128075;</span></button>
        </div>

        <div class="section_footer">
            <p class="tag">Designed & Built by Ahmad Fahrezi</p>
            <p>
                <i class="fa-brands fa-github"></i>
                <span>@Anti-glitches</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.section_contact {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .section_body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 40px 0;
        text-align: center;

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
            animation: shake 0.5s alternate;
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
}
</style>
