export default [
  {
    type: `TextBox`,
    start: 2000,
    end: 8000,
    font: `30px Arial`,
    bgFill: `orange`,
    txtFill: `white`,
    text: `Some Text`,
    weight: 3
  },
  {
    type: `Highlight`,
    start: 4000,
    end: 8000,
    lineWidth: 4,
    x: 200,
    y: 300,
    w: 150,
    h: 50,
    weight: 2,
    mod: {
      duration: 500,
      max_alpha: 0.8
    }
  }
]
