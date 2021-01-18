class BgImg {
  constructor(img) {
    this.img = img
    this.weight = 1
  }

  draw(ctx) {
    ctx.drawImage(this.img, 0, 0, 1280, 720)
  }
}

export default BgImg
