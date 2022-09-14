<template>
    <div class="section_otherNotable">
        <div class="section_head">
            <span class="section_head_title">Other Notable Project</span>
            <span class="section_head_number">2.5</span>
        </div>

        <div class="section_body">
            <div class="notable_cards">
                <div class="notable_card" v-for="i in 4" :key="i">
                    <h1>Title</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Illo nihil, porro deserunt magni eveniet atque
                        cupiditate natus amet, officia autem quam repudiandae
                        magnam delectus ipsa, laboriosam assumenda quaerat
                        accusantium officiis.
                    </p>
                    <div class="notable_footer">
                        <div class="built-with">
                            <span v-for="i in 4" :key="i">HTML</span>
                        </div>
                        <div class="links-to-go">
                            <i class="fa-brands fa-github"></i>
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </div>
                    </div>
                </div>
            </div>

            <button class="explore_all" @click="toRecent">
                Explore All <span>&#129517;</span>
            </button>
        </div>
    </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
    setup() {
        const router = useRouter();

        const toRecent = () => {
            router.push("/recent");
        };

        return { toRecent };
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
        display: inline-block;
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
        }
    }

    button.explore_all:hover {
        transform: translateY(-10px);
        box-shadow: 0px 15px 6px rgb(228, 228, 228);
    }

    button.explore_all:hover span {
        animation: rotateAnimate 1.3s alternate linear;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
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
    margin: 3rem 5vw;

    .notable_card {
        display: block;
        padding: 2rem;
        border: 0.15rem solid black;
        border-radius: 10px;
        box-shadow: 2px 2px #232330;
        transition: all 0.4s ease;

        h1 {
            margin: 0.5rem 0;
            font-size: 2rem;
        }

        p {
            margin: 0;
            font-size: 1.1rem;
        }

        .notable_footer {
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            column-gap: 1rem;

            // flex-direction: column;
            // row-gap: 1rem;

            .built-with {
                display: flex;
                flex-wrap: wrap;
                column-gap: 0.5rem;
            }

            .links-to-go {
                display: flex;
                column-gap: 0.8rem;
                font-size: 1.3rem;
                margin-right: 1rem;

                i {
                    cursor: pointer;
                }
            }
        }
    }

    .notable_card:hover {
        transform: scale(1.03);
    }
}
</style>
