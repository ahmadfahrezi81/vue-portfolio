<template>
    <div class="section_recent">
        <div class="section_head_recent">
            <h1>Project Archive</h1>
            <p>A list of projects I’ve built &#128104;&#8205;&#128187;</p>
        </div>

        <div class="section_body">
            <div class="table_head">
                <h3 class="table_head_year">Year</h3>
                <h3>Project Name</h3>
                <h3>Built with</h3>
                <h3>Link to</h3>
            </div>
            <div class="table_body">
                <div class="table_row" v-for="i in 10" :key="i">
                    <p class="table_row_year">2022</p>
                    <p class="table_row_title">Atask</p>
                    <p class="table_row_tech">
                        <span v-for="i in 6" :key="i">HTML</span>
                    </p>
                    <div class="table_row_links">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-solid fa-up-right-from-square"></i>
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
.section_recent {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section_head_recent {
    h1 {
        margin: 0;
        font-size: 2.5rem;
    }

    p {
        margin: 0;
        font-size: 1.5rem;
    }
}
.section_body {
    width: 68.75rem;
    padding: 3rem 0;

    h3 {
        margin: 1rem 0;
    }
    .table_head {
        display: grid;
        grid-template-columns: 2fr 4fr 4fr 1fr;
        grid-auto-flow: column;
        // border-bottom: 3px solid;
        padding: 0 2rem;
        font-size: 1.2rem;
        border: 0.15rem solid black;
        border-radius: 1rem;
        background: #232330;
        color: white;
        margin-bottom: 1rem;

        &_year {
            padding-left: 2rem;
        }
    }

    .table_row {
        display: grid;
        grid-template-columns: 2fr 4fr 4fr 1fr;
        grid-auto-flow: column;
        padding: 0 2rem;
        align-items: center;
        border-radius: 1rem;

        .table_row_year {
            font-size: 1.5rem;
            font-weight: 700;
            padding-left: 2rem;
            background: -webkit-linear-gradient(
                rgba(194, 96, 255, 1),
                rgba(44, 44, 255, 1)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .table_row_title {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .table_row_tech {
            display: grid;
            padding-right: 10rem;
            grid-template-columns: repeat(3, min-content);
            gap: 0.4rem;
        }

        .table_row_links {
            display: flex;
            column-gap: 1rem;
            font-size: 1.4rem;

            i {
                cursor: pointer;
            }
        }
    }

    .table_row:hover {
        background: aliceblue;
    }
}
</style>
