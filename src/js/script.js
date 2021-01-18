import elements from './data/elements.js'
import backgrounds from './data/backgrounds.js'
import TextBox from './text-box.js'
import BgImg from './bg-img.js'
import Highlight from './highlight.js'
import preload from './preload-img.js'
import addControls from './controls.js'
let canvas = document.querySelector(`#canvas`)
let p = document.querySelector(`.counter`)
let ctx = canvas.getContext(`2d`)

// preload bgImages
let bgImages = preload(backgrounds)

let makeObject = (item, stamp, fTime) => {
    let obj = {}
    switch(item.type) {
        case `TextBox`:
            obj = new TextBox(item);
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

let composer = (stamp, fTime) => {
    let stack = []
    elements.forEach(item => {
        if (item.start <= stamp && item.end > stamp) {
            stack.push(makeObject(item, stamp, fTime))
        }
    })
    bgImages.forEach(el => {
        if (el.start <= stamp && el.end > stamp) {
            stack.push(new BgImg(el))
        }
    })
    stack.sort((a, b) => a.weight - b.weight)
    return stack
}

function draw(playTime, fTime) {
    ctx.clearRect(0, 0, 1280, 720)
    let stack = composer(playTime, fTime)
    stack.forEach(el => {
        el.draw(ctx)
    })
    p.textContent = `fTime: ${fTime}, playtime: ${playTime}`
}

addControls(draw)
