import data from './data/pointer.js'
import preload from './preload-img.js'
import Pointer from './classes/pointer.js'
const pointerImg = preload(data)
let currentX = data.startCoord[0]
let currentY = data.startCoord[1]

let newX = currentX
let newY = currentY
function makePointer(stamp, fTime) {
    let obj = {}
    if (stamp <= data.showTime.start || stamp > data.showTime.end) {
        obj.draw = () => {
            return
        }
        return obj
    }
    
    let executed = false
    data.points.forEach((el) => {
        if (stamp >= el.start && stamp < (el.start + el.duration)) {
            let deltaX = el.coord[0] - currentX
            let deltaY = el.coord[1] - currentY
            let stepX = deltaX / (el.duration / fTime)
            let stepY = deltaY / (el.duration / fTime)
            newX += stepX
            newY += stepY
            executed = true
        }
    })
    if (!executed) {
        currentX = newX
        currentY = newY
    }
    
    obj = new Pointer({img: pointerImg, x: newX, y: newY})
    return obj

}

export default makePointer
