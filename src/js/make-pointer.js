import data from './data/pointer.js'
import preload from 'preload.js'
const pointerImg = preload(data)
let currentX = data.startCoord[0]
let currentY = data.startCoord[1]

function makePointer(stamp, fTime) {
    if (stamp <= data.showTime.start && stamp > data.showTime.end) {
        return
    }
    let stepX = Math.abs()

}
