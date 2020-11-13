let canvas = document.querySelector(`#canvas`)
let p = document.querySelector(`.counter`)
let ctx = canvas.getContext(`2d`)
// ctx.globalCompositeOperation = `destination-atop`;
let img = new Image()
img.src = `001.png`
let alpha = 0
let alphaMax = 0.8

highlight = (a) => {
    let rect = new Path2D()
    ctx.fillStyle = `black`
    ctx.beginPath()
    rect.moveTo(-5, -5)
    rect.lineTo(1285, -5)
    rect.lineTo(1285, 725)
    rect.lineTo(-5, 725)
    rect.closePath()
    ctx.lineWidth = 4
    ctx.strokeStyle = `red`
    rect.moveTo(200, 150)
    rect.lineTo(270, 150)
    rect.lineTo(270, 240)
    rect.lineTo(200, 240)
    rect.closePath()
    ctx.globalAlpha = a
    ctx.fill(rect, 'evenodd')
    ctx.globalAlpha = 1
    ctx.stroke(rect)
}

textBox = (text) => {
    ctx.font = `30px Arial`
    ctx.fillStyle = `orange`
    ctx.fillRect(400, 350, 200, 50)
    ctx.fillStyle = `white`
    ctx.fillText(text, 430, 380)
}

draw = (stamp) => {
    ctx.clearRect(0, 0, 1280, 720)
    ctx.drawImage(img, 0, 0, 1280, 720)
    if (stamp >= 1000 && stamp < 6000) {
        textBox(`some text`)
    } 
    if (stamp >= 2000 && stamp < 4000) {
        if (alpha <= alphaMax) {
            highlight(alpha)
            textBox(`some text`)
            alpha += 0.02
        } else {
            highlight(alpha)
            textBox(`some text`)
        }
    } else if (stamp >= 4000 && stamp < 6000){
        if (alpha > 0) {
            highlight(alpha)
            textBox(`some text`)
            alpha -= 0.02
        }
    } 
    requestAnimationFrame(draw)
    p.textContent = stamp
}

img.onload = () => draw()
