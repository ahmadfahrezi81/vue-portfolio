<template>
    <div class="section_mainProject">
        <div class="section_head" id="MainProject">
            <span class="section_head_title">Some things I’ve built</span>
            <span class="section_head_number">2</span>
        </div>

        <div class="section_body">
            <div class="card" v-for="(item, i) in MainProject" :key="i">
                <div class="card_title">
                    <h3>{{ item.type }}</h3>
                    <h1>{{ item.name }}</h1>
                </div>

                <!-- <img src="/photo.png" class="card_img" /> -->
                <img :src="item.img" class="card_img" />

                <div class="card_para">
                    <p>
                        {{ item.desc }}
                    </p>
                    <div class="card_para_footer">
                        <div class="built_with">
                            <span v-for="(stack, i) in item.stacks" :key="i"
                                >{{ stack }}
                            </span>
                        </div>
                        <div class="links">
                            <!-- <i class="fa-brands fa-github"></i>
                            <i class="fa-solid fa-up-right-from-square"></i> -->
                            <a
                                v-if="item.links.github"
                                :href="item.links.github"
                                target="_blank"
                            >
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a
                                v-if="item.links.external"
                                :href="item.links.external"
                                target="_blank"
                            >
                                <i class="fa-solid fa-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import userData from "../assets/data.json";
export default {
    setup() {
        const MainProject = userData.MainProject.map((item) => {
            const obj = userData.recent.find((o) => o.name === item.name);
            return { ...obj, ...item };
        });

        console.log(MainProject);

        return { MainProject };
    },
};
</script>
<style lang="scss" scoped>
// bg color gradient
.card:nth-child(1) {
    background: linear-gradient(125deg, #f9ccf7, #ffeec3);
}
.card:nth-child(2) {
    background: linear-gradient(125deg, #ccf9e9, #ffc3f9);
}
.card:nth-child(3) {
    background: linear-gradient(125deg, #f9f2cc, #e5ffc3);
}

.card {
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;

    margin: 0 1rem;
    margin-bottom: 2rem;

    // background: linear-gradient(125deg, #f9ccf7, #ffeec3);
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
        border-radius: 0.5rem;
    }

    &_para {
        padding: 2rem;
        // background: aliceblue;
        background: linear-gradient(#fefbf6, rgba(254, 251, 246, 0.56));

        border-radius: 1rem;

        &_footer {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            column-gap: 2rem;

            .built_with {
                display: flex;
                column-gap: 0.7rem;
                flex-wrap: wrap;

                span {
                    font-weight: bold;
                    font-size: 0.95rem;
                }
            }

            .links {
                display: flex;
                align-items: center;
                column-gap: 0.8rem;
                font-size: 1.3rem;

                i {
                    cursor: pointer;

                    &:hover {
                        color: #2c63d8;
                    }
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
                row-gap: 1rem;
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

        // border: 2px solid #232330;
        // box-shadow: 2px 2px black;

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
            border: 2px solid #232330;

            &_footer {
                align-items: center;
            }
        }
    }
}

@media (min-width: 1050px) {
    .card {
        width: 1000px;
        .card_title {
            margin-bottom: 0rem;
        }
        .card_img {
            height: 100%;
            width: 463px;
            // margin: 2rem 0;
            justify-self: end;
        }
    }
}
</style>
