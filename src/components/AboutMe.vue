<template>
    <div class="section_head">
        <span class="section_head_title">About Me</span>
        <span class="section_head_number">1</span>
    </div>
    <div class="section_body">
        <img src="profile.png" alt="portfolio" />

        <div class="para">
            <h3>I’m Ahmad, a Full Stack Dev.</h3>
            <p>
                I’ve spent the past 12+ years working across different areas of
                digital design; front-end development, email design, marketing
                site pages, app UI/UX, to my current role designing products for
                mobile platforms.
            </p>
            <p>
                These days my time is spent researching, designing, prototyping,
                and coding. I also help designers get started with their
                careers. Out of the office you’ll find me dreaming of soccer,
                playing bass guitar, and petting all the good dogs.
            </p>
        </div>

        <div class="tech">
            <h3>Technology I'm experience with:</h3>
            <div class="tech_skills">
                <span v-for="(skill, i) in skills" :key="i">{{ skill }}</span>
            </div>
        </div>
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
.section_body {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    padding: 1rem;
    row-gap: 2rem;

    img {
        box-shadow: 5px 5px #232330;
        border-radius: 1rem;
        width: 300px;
        justify-self: center;
    }

    .para {
        h3 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1.1rem;
        }
    }

    .tech {
        h3 {
            font-size: 1.5rem;
            margin: 0;
            margin-bottom: 0.5rem;
            margin-left: 0.3rem;
        }

        &_skills {
            font-size: 0.8rem;
            font-weight: 600;
            display: flex;
            flex-wrap: wrap;

            span {
                padding: 0.5rem 1rem;
                margin: 0.3rem;

                display: inline-block;
                border: 2px solid #232330;
                box-shadow: 2px 2px #232330;
                border-radius: 0.5rem;
            }
        }
    }
}

@media (min-width: 800px) {
    .section_body {
        display: grid;
        grid-template-areas:
            "img para"
            "tech tech";

        grid-template-columns: 2fr 3fr;
        column-gap: 2rem;
        padding: 0 2vw;

        margin: 0 10vw;

        .para {
            grid-area: para;
            // margin-right: 4rem;
        }

        img {
            grid-area: img;
            // margin-left: 4rem;

            // width: 340px;
            // justify-self: center;
        }

        .tech {
            grid-area: tech;

            &_skills {
                font-size: 1rem;

                span {
                    padding: 0.5rem 2rem;
                    margin: 0.5rem;
                }
            }
        }
    }
}

@media (min-width: 1000px) {
    .section_body {
        img {
            width: 340px;
        }
    }
}
</style>
