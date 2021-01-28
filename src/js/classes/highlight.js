class Highlight {
  constructor(params, resolution) {
    this.lineWidth = params.lineWidth
    this.x = params.x
    this.y = params.y
    this.w = params.w
    this.h = params.h
    this.resX = resolution.x
    this.resY = resolution.y
    this.weight = params.weight
    this._alpha = 0
    this.max_alpha = params.mod.max_alpha
  }

  draw(ctx) {
    let rect = new Path2D()
    ctx.fillStyle = `black`
    ctx.beginPath()
    // outer rect, wider than frame
    rect.moveTo(-this.lineWidth, -this.lineWidth)
    rect.lineTo(this.resX + this.lineWidth, -this.lineWidth)
    rect.lineTo(this.resX + this.lineWidth, this.resY + this.lineWidth)
    rect.lineTo(-this.lineWidth, this.resY + this.lineWidth)
    rect.closePath()
    ctx.lineWidth = this.lineWidth
    ctx.strokeStyle = `red`
    // inner rect
    rect.moveTo(this.x, this.y)
    rect.lineTo(this.x + this.w, this.y)
    rect.lineTo(this.x + this.w, this.y + this.h)
    rect.lineTo(this.x, this.y + this.h)
    rect.closePath()
    ctx.globalAlpha = this._alpha
    ctx.fill(rect, 'evenodd')
    ctx.globalAlpha = 1
    ctx.stroke(rect)
  }

  set alpha(val) {
    if (val <= this.max_alpha) {
      this._alpha = val
    }
  }
}

export default Highlight
