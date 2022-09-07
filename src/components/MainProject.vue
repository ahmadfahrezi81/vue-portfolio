<template>
    <div class="section-mainProject">
        <div class="section_head">
            <span class="section_head_title">Some things I’ve built</span>
            <span class="section_head_number">2</span>
        </div>

        <div class="section_body">
            <div class="card-body" v-for="i in 3" :key="i">
                <h3>Web App</h3>
                <h1>Atask</h1>

                <div class="content">
                    <div class="content-body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Provident, voluptatum. Beatae assumenda
                            aliquam, nisi eos atque placeat, quas nam corporis
                            fugiat repudiandae quia necessitatibus maxime! Nemo
                            assumenda officia debitis deserunt!
                        </p>
                        <div class="content-footer">
                            <div class="built-with">
                                <span v-for="i in 4" :key="i">HTML</span>
                            </div>
                            <div class="links-to-go">
                                <i class="fa-brands fa-github"></i>
                                <i class="fa-solid fa-up-right-from-square"></i>
                            </div>
                        </div>
                    </div>
                    <div class="image-body">
                        <img src="/photo.png" alt="photo" class="img-photo" />
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
.section_body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card-body {
    background: aliceblue;
    padding: 3.5rem;
    width: 68.75rem;
    height: 35rem;
    border-radius: 1.8rem;
    background: linear-gradient(125deg, #f9ccf7, #ffeec3);
    color: #232320;
    margin: 2rem;

    h3 {
        text-transform: uppercase;
        font-size: 1.5rem;
        margin: 0;
    }

    h1 {
        font-size: 4rem;
        font-weight: 400;
        margin: 0 0;
    }
    .content {
        display: flex;
        align-items: center;
        margin-top: -2rem;

        .content-body {
            background: linear-gradient(#fefbf6, rgba(254, 251, 246, 0.56));
            padding: 2.5rem;
            width: 32.18rem;
            border-radius: 1rem;
            position: relative;
            z-index: 1;

            p {
                margin-bottom: 2rem;
                font-size: 1.2rem;
            }

            .content-footer {
                display: flex;
                justify-content: space-between;

                .built-with {
                    display: flex;
                    gap: 2rem;
                }

                .links-to-go {
                    display: flex;
                    column-gap: 1rem;
                    font-size: 1.8rem;

                    i {
                        cursor: pointer;
                    }
                }
            }
        }

        .image-body {
            position: relative;
            margin-left: -5rem;
        }
    }
}
</style>
