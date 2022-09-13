<template>
    <div class="section_mainProject">
        <div class="section_head">
            <span class="section_head_title">Some things I’ve built</span>
            <span class="section_head_number">2</span>
        </div>

        <div class="section_body">
            <div class="card" v-for="i in 1" :key="i">
                <div class="card_title">
                    <h3>Web App</h3>
                    <h1>Atask</h1>
                </div>

                <img src="/photo.png" class="card_img" />

                <div class="card_para">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident, voluptatum. Beatae assumenda aliquam, nisi
                        eos atque placeat, quas nam corporis fugiat repudiandae
                        quia necessitatibus maxime!
                    </p>
                    <div class="card_para_footer">
                        <div class="built_with">
                            <span v-for="i in 6" :key="i">HTML</span>
                        </div>
                        <div class="links">
                            <i class="fa-brands fa-github"></i>
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    margin: 0 5vw;
    background: linear-gradient(125deg, #f9ccf7, #ffeec3);
    border-radius: 1rem;

    &_title {
        margin-bottom: 1rem;

        h3 {
            text-transform: uppercase;
            font-size: 1rem;
            // margin: 0;
        }

        h1 {
            font-size: 2.3rem;
            font-weight: 600;
            // margin: 0;
        }

        * {
            margin: 0;
        }
    }

    &_img {
        width: 100%;
    }

    &_para {
        padding: 2rem;
        // background: aliceblue;
        background: linear-gradient(#fefbf6, rgba(254, 251, 246, 0.56));

        border-radius: 1rem;

        &_footer {
            display: flex;
            justify-content: space-between;
            align-items: center;

            column-gap: 2rem;

            .built_with {
                display: flex;
                column-gap: 0.5rem;
                flex-wrap: wrap;
            }

            .links {
                display: flex;
                align-items: center;
                column-gap: 0.5rem;
                font-size: 1.3rem;

                i {
                    cursor: pointer;
                }
            }
        }
    }
}

@media (max-width: 700px) {
    .card {
        &_para {
            margin-top: -0.5rem;

            &_footer {
                flex-direction: column;
                row-gap: 2rem;
            }
        }
    }
}

@media (min-width: 700px) {
    .section_body {
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
    }

    .card {
        display: grid;
        grid-template-areas:
            "title title"
            "para img";

        grid-template-columns: 2fr 3fr;
        align-items: center;
        padding: 2.5rem;

        &_title {
            grid-area: title;

            h3 {
                font-size: 1.2rem;
            }

            h1 {
                font-size: 3rem;
            }
        }

        &_img {
            grid-area: img;
            // min-width: 400px;
        }

        &_para {
            grid-area: para;
            min-width: 350px;
            margin-right: -10vw;
        }
    }
}

@media (min-width: 1050px) {
    .card {
        width: 1000px;
        // height: 476px;

        &_title {
            margin-bottom: -3rem;
        }

        &_img {
            height: 90%;
            width: auto;
            // align-self: flex-end;
            justify-self: end;
        }
    }
}
</style>
