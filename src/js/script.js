let canvas = document.querySelector(`#canvas`)
let p = document.querySelector(`.counter`)
let ctx = canvas.getContext(`2d`)
let documentStamp,
    lastStamp,
    startTime,
    stopTime,
    haltTime,
    playTime = 0
import objects from './objects.js'
import TextBox from './text-box.js'
import BgImg from './bg-img.js'
import Highlight from './highlight.js'
import preload from './preload-img.js'

let imgSrc = preload(objects)
let images = new Array()
for (let i=0; i<imgSrc.length; i++) {
    images[i] = new Image()
    images[i].src = imgSrc[i].link
    images[i].start = imgSrc[i].start
    images[i].end = imgSrc[i].end

}

let makeObject = (item, stamp) => {
    let fTime = documentStamp - lastStamp
    let obj = {}
    switch(item.type) {
        case `TextBox`:
            obj = new TextBox(item);
            break;
        case `BgImg`:
            images.forEach(el => {
                if (stamp >= el.start && stamp <= el.end) {
                    obj = new BgImg(item, el);
                    return
                }
            })
            
            break;
        case `Highlight`:
            obj = new Highlight(item);
            if (item.hasOwnProperty(`mod`)){
                let aniEnd = item.start + item.mod.duration
                let endAniStart = item.end - item.mod.duration
                let step = item.mod.max_alpha / (item.mod.duration / fTime)
                if (stamp >= item.start && stamp <= aniEnd) {
                    let alpha = ((stamp - item.start) / fTime) * step
                    obj.alpha = alpha
                } else if (stamp > aniEnd && stamp < endAniStart) {
                    obj.alpha = item.mod.max_alpha
                } else if (stamp >= endAniStart && stamp <= item.end) {
                    let alpha = ((item.end - stamp) / fTime) * step
                    obj.alpha = alpha
                }
            }
            break;
    }
    return obj
}

let composer = (stamp) => {
    let stack = []
    objects.forEach(item => {
        if (item.start <= stamp && item.end > stamp) {
            stack.push(makeObject(item, stamp))
        }
    })
    stack.sort((a, b) => a.weight - b.weight)
    return stack
}

let draw = (playTime) => {
    ctx.clearRect(0, 0, 1280, 720)
    let stack = composer(playTime)
    stack.forEach(el => {
        el.draw(ctx)
    })
    p.textContent = `docStamp: ${documentStamp}, playtime: ${playTime}, startTime: ${startTime}, stopTime: ${stopTime}, haltTime: ${haltTime}`
}

let isPaused = false
let reqID
const buttonPause = document.querySelector('.pause')
const buttonRestart = document.querySelector('.restart')

function loop(stamp) {
    reqID = undefined
    documentStamp = stamp
    playTime = documentStamp - haltTime
    draw(playTime)
    start()
    lastStamp = stamp
}

function start() {
    if (!reqID) {
        reqID = requestAnimationFrame(loop)
    }
}
function stop() {
    if (reqID) {
        cancelAnimationFrame(reqID)
        reqID = undefined
    }
}

function pauseHandler() {
    if (isPaused) {
        stopTime = performance.now()
        stop()
    } else {
        startTime = performance.now()
        haltTime += startTime - stopTime
        start()
    }
    isPaused = !isPaused
}

function restartHandler() {
    playTime = 0
    haltTime = performance.now()
    start()
}

buttonPause.addEventListener('click', pauseHandler)
buttonRestart.addEventListener('click', restartHandler)

