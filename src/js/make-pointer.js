import data from './data/pointer.js'
import preload from './preload-img.js'
import Pointer from './classes/pointer.js'
const pointerImg = preload(data)
let currentX = data.startCoord[0]
let currentY = data.startCoord[1]

function makePointer(stamp, fTime) {
    if (stamp <= data.showTime.start && stamp > data.showTime.end) {
        return
    }
    let obj = {}
    obj = new Pointer({img: pointerImg, x: currentX, y: currentY})
    return obj

}

export default makePointer
