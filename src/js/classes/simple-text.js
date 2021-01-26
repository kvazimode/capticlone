class SimpleText {
    constructor(params) {
      this.font = params.font
      this.txtFill = params.txtFill
      this.text = params.text
      this.x = params.x
      this.y = params.y
      this.weight = params.weight
    }
  
    draw(ctx) {
      ctx.font = this.font
      ctx.fillStyle = this.txtFill
      ctx.fillText(this.text, this.x, this.y)
    }
  
  }

export default SimpleText
