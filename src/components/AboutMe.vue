<template>
    <div class="section_head" id="AboutMe">
        <span class="section_head_title">About Me</span>
        <span class="section_head_number">1</span>
    </div>
    <div class="section_body">
        <img src="/profile.png" alt="portfolio" />

        <div class="para">
            <h3>I’m Ahmad, a Full Stack Web Dev 😎</h3>
            <p>
                I enjoy creating something both beautiful and useful. I've been
                a web developer for 3+ years. I've used a variety of frameworks
                and stacks to create full stack web applications. I am capable
                of creating seamless ui/ux designs, prototyping, and coding. I
                am confident in my abilities to assist you and advise you in
                creating your ideal website.
            </p>
            <p>
                I am currently in my second year of college, studying software
                engineering at the University of Malaya, in order to improve my
                technical understanding in computer science. In my spare time, I
                enjoy reading and listening to podcasts.
            </p>
        </div>

        <div class="tech">
            <h3>Technology I'm experience with 💻:</h3>
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
        const skills = userData.skills;

        return { skills };
    },
};
</script>
<style lang="scss" scoped>
.section_body {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // padding: 1.5rem;
    row-gap: 2rem;
    margin: 0 12vw;

    img {
        box-shadow: 3px 3px #232330;
        border-radius: 1rem;
        width: 300px;
        // margin-left: 0.5rem;
        // justify-self: center;
    }

    .para {
        h3 {
            font-size: 2rem;
            margin-top: 0;
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
            margin-left: 0rem;
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
                border: 2px solid #5b5b64;
                box-shadow: 1px 1px #5b5b64;
                border-radius: 0.5rem;
            }
        }

        .tech_skills {
            margin-left: -0.5rem;
        }
    }
}

@media (max-width: 900px) {
    .section_body {
        // flex-direction: row;
        margin: 0 8vw 0 8vw;
    }
}

@media (min-width: 800px) {
    .section_body {
        display: grid;
        grid-template-areas:
            "img para"
            "tech tech";

        grid-template-columns: 2fr 4fr;
        column-gap: 3.5rem;
        row-gap: 3rem;
        // padding: 0 2vw;

        // margin: 0 12vw;

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
