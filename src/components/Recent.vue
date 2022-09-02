<template lang="">
    <section>
        <h1>Recent Project:</h1>
        <div class="table-head">
            <h3>Year</h3>
            <h3>Project Name</h3>
            <h3>Built with</h3>
            <h3>Link to</h3>
        </div>
        <div class="table-body">
            <div class="table-row" v-for="i in 3" :key="i">
                <p class="table-row-year">2022</p>
                <p class="table-row-title">Atask</p>
                <p class="table-row-tech">
                    <span v-for="i in 6" :key="i">HTML</span>
                </p>
                <div class="table-row-links">
                    <i class="fa-solid fa-up-right-from-square"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
section {
    width: 65.25rem;

    .table-head {
        display: grid;
        grid-template-columns: 1fr 2fr 3fr 1fr;
        grid-auto-flow: column;
        border-bottom: 3px solid;
        padding: 0 2rem;
        font-size: 1.2rem;
    }

    .table-row {
        display: grid;
        grid-template-columns: 1fr 2fr 3fr 1fr;
        grid-auto-flow: column;
        padding: 0 2rem;
        align-items: center;

        .table-row-year {
            font-size: 1.5rem;
            font-weight: 700;
            background: -webkit-linear-gradient(
                rgba(194, 96, 255, 1),
                rgba(44, 44, 255, 1)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .table-row-title {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .table-row-tech {
            display: grid;
            padding-right: 10rem;
            grid-template-columns: repeat(3, min-content);
            gap: 0.4rem;
        }

        .table-row-links {
            display: flex;
            column-gap: 1rem;
            font-size: 1.4rem;

            i {
                cursor: pointer;
            }
        }
    }
}
</style>
