class BgImg {
  constructor(params, img) {
    this.img = img
    this.weight = params.weight
  }

  draw(ctx) {
    ctx.drawImage(this.img, 0, 0, 1280, 720)
  }
}

export default BgImg
