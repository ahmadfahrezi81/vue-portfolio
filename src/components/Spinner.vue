<template>
    <div class="spinner_section">
        <div class="spinner-box">
            <div class="configure-border-1">
                <div class="configure-core"></div>
            </div>
            <div class="configure-border-2">
                <div class="configure-core"></div>
            </div>
            <span>A</span>
        </div>
        <div class="typing-slider">
            <p>Hello There &#128526;</p>
            <p>Sit back and relax </p>
        </div>
    </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
$slider-name: typing-slider;
$slides: 2;
$typing-duration: 1s;
$tab-letters: 13 18; //number of characters in each paragraph
$slider-font-size: 1.2rem;
$background: #fefbf6;

@keyframes cursor {
    from,
    to {
        border-color: transparent;
    }
    50% {
        border-color: black;
    }
}

@keyframes typing {
    from {
        width: 100%;
    }
    90%,
    to {
        width: 0;
    }
}

@keyframes slide {
    #{calc(100% / $slides)} {
        font-size: $slider-font-size;
        letter-spacing: 3px;
    }
    to {
        font-size: 0;
        letter-spacing: 0;
    }
}

.#{$slider-name} {
    font-family: Consolas, monospace;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
}

.#{$slider-name} p {
    position: relative;
    display: inline;
    font-size: 0;
    text-transform: uppercase;
    letter-spacing: 0;
    animation: slide $typing-duration * $slides step-start infinite;
}

.#{$slider-name} p::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-left: 3px solid black;
    background-color: $background;
    animation: typing $typing-duration infinite, cursor 1s infinite;
}

@each $letters in $tab-letters {
    $i: index($tab-letters, $letters);
    .#{$slider-name} p:nth-child(#{$i}) {
        animation-delay: $typing-duration * ($i - 1);
        &::after {
            animation-delay: $typing-duration * ($i - 1);
            animation-timing-function: steps(#{$letters}), step-end;
        }
    }
}

//test stop here

.spinner_section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.spinner-box {
    width: 100%;
    // height: 100vh;
    // margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    margin-bottom: 4rem;

    span {
        position: absolute;
        text-align: center;
        font-size: 2.5rem;
        font-weight: bold;
    }

    .configure-border-1 {
        width: 110px;
        height: 110px;
        padding: 3px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid #232330;
        border-radius: 2rem;
        animation: configure-clockwise 3s ease-in-out infinite alternate;
    }

    .configure-border-2 {
        border-radius: 2rem;
        width: 110px;
        height: 110px;
        padding: 3px;
        left: -115px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid #232330;
        transform: rotate(45deg);
        animation: configure-xclockwise 3s ease-in-out infinite alternate;
    }
    .configure-core {
        width: 100%;
        height: 100%;
    }

    @keyframes configure-clockwise {
        0% {
            transform: rotate(0);
        }
        25% {
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(180deg);
        }
        75% {
            transform: rotate(270deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes configure-xclockwise {
        0% {
            transform: rotate(45deg);
        }
        25% {
            transform: rotate(-45deg);
        }
        50% {
            transform: rotate(-135deg);
        }
        75% {
            transform: rotate(-225deg);
        }
        100% {
            transform: rotate(-315deg);
        }
    }
}
</style>
