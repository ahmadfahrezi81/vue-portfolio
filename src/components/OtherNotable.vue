<template>
    <div class="section_otherNotable">
        <div class="section_head">
            <span class="section_head_title">Other Notable Project</span>
            <span class="section_head_number">2.5</span>
        </div>

        <div class="section_body">
            <div class="notable_cards">
                <div
                    class="notable_card"
                    v-for="(item, i) in otherNotable"
                    :key="i"
                >
                    <h1>{{ item.name }}</h1>
                    <p>
                        {{ item.desc }}
                    </p>
                    <div class="notable_footer">
                        <div class="built-with">
                            <span v-for="(stack, i) in item.stacks" :key="i">{{
                                stack
                            }}</span>
                        </div>
                        <div class="links-to-go">
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

            <button class="explore_all" @click="toRecent">
                Explore All <span>&#128506;</span>
            </button>
        </div>
    </div>
</template>
<script>
import { useRouter } from "vue-router";
import userData from "../assets/data.json";
export default {
    setup() {
        const router = useRouter();

        const toRecent = () => {
            router.push("/recent");
        };

        const otherNotable = userData.otherNotable.map((item) => {
            const obj = userData.recent.find((o) => o.name === item.name);
            return { ...obj, ...item };
        });

        return { toRecent, otherNotable };
    },
};
</script>
<style lang="scss" scoped>
// .section_otherNotable {
//     margin: 10vh 0;
// }

.section_body {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    // margin-bottom: 40px;

    button.explore_all {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15rem;
        padding: 0.9rem 2rem;
        border: 0.15rem solid black;
        border-radius: 10rem;
        background: none;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.5s ease all;

        span {
            display: inline-block;
            font-size: 1.5rem;
            margin-left: 0.5rem;
            transition: 0.5s ease all;
        }
    }

    button.explore_all:hover {
        transform: translateY(-10px);
        box-shadow: 0px 15px 6px rgb(228, 228, 228);
    }

    button.explore_all:hover span {
        // animation: rotateAnimate 1.3s alternate linear;
        // animation-iteration-count: 1;
        // animation-fill-mode: forwards;
        transform: scale(1.15);
    }

    @keyframes rotateAnimate {
        0% {
            transform: rotate(-0.1turn);
        }
        40% {
            transform: rotate(0.32turn);
        }
        60% {
            transform: rotate(0turn);
        }
        80% {
            transform: rotate(0.3turn);
        }
        100% {
            transform: rotate(0.13turn);
        }
    }
}

.notable_cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    gap: 1.5rem 2.5rem;
    margin: 3rem 12vw;

    .notable_card {
        // display: block;
        // position: relative;
        // height: 100%;
        // display: flex;
        // flex-direction: column;

        display: grid;
        // grid-auto-rows: repeat(3, fit-content);

        padding: 2rem;
        border: 0.15rem solid black;
        border-radius: 10px;
        box-shadow: 2px 2px #232330;
        transition: all 0.4s ease;

        h1 {
            margin: 0.5rem 0;
            font-size: 1.5rem;
        }

        p {
            margin: 0;
            font-size: 1rem;
        }

        .notable_footer {
            align-self: flex-end;

            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            column-gap: 1rem;

            // flex-direction: column;
            // row-gap: 1rem;

            .built-with {
                display: flex;
                column-gap: 0.7rem;
                flex-wrap: wrap;

                span {
                    font-weight: bold;
                    font-size: 0.95rem;
                }
            }

            .links-to-go {
                display: flex;
                column-gap: 0.8rem;
                font-size: 1.3rem;
                margin-right: 1rem;

                i {
                    cursor: pointer;

                    &:hover {
                        color: #2c63d8;
                    }
                }
            }
        }
    }

    .notable_card:hover {
        transform: scale(1.03);
    }
}

@media (max-width: 900px) {
    .notable_cards {
        margin: 3rem 8vw;
    }
}
</style>
