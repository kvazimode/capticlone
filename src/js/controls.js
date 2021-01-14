let isPaused = true
let reqID
let startTime = 0
let stopTime = 0
let haltTime = 0
let playTime = 0
let fTime = 0
let documentStamp = 0
let lastStamp = 0
const buttonPause = document.querySelector('.pause')
const buttonRestart = document.querySelector('.restart')

function loop(stamp, draw) {
    reqID = undefined
    documentStamp = stamp
    playTime = documentStamp - haltTime
    fTime = documentStamp - lastStamp
    draw(playTime, fTime)
    start(draw)
    lastStamp = stamp
}

function start(draw) {
    if (!reqID) {
        reqID = requestAnimationFrame((stamp) => {
            loop(stamp, draw)
        })
    }
}
function stop() {
    if (reqID) {
        cancelAnimationFrame(reqID)
        reqID = undefined
    }
}

function pauseHandler(draw) {
    if (!isPaused) {
        stopTime = performance.now()
        stop()
    } else {
        startTime = performance.now()
        haltTime += startTime - stopTime
        start(draw)
    }
    isPaused = !isPaused
}

function restartHandler(draw) {
    playTime = 0
    if (isPaused) {
        haltTime = performance.now()
        isPaused = !isPaused
        start(draw)
    } else {
        start(draw)
    }
}

export default function addControls(draw) {
    buttonPause.addEventListener('click', () => {
        pauseHandler(draw)
    })
    buttonRestart.addEventListener('click', () => {
        restartHandler(draw)
    })
}
