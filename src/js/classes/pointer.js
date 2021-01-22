class Pointer {
    constructor(params) {
        this.x = params.x
        this.y = params.y
        this.img = params.img
        this.weight = 99
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y)
    }
}

export default Pointer
