'use strict'

let lastRenderTime = 0;
const TETRIMINO_SPEED = 2

function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    if (secondsSinceLastRender < 1 / TETRIMINO_SPEED) return
    lastRenderTime = currentTime
    console.log('render');
}

window.requestAnimationFrame(main)