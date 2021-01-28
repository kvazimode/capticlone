class BgImg {
  constructor(img, resolution) {
    this.img = img
    this.resX = resolution.x
    this.resY = resolution.y
    this.weight = 1
  }

  draw(ctx) {
    ctx.drawImage(this.img, 0, 0, this.resX, this.resY)
  }
}

export default BgImg
