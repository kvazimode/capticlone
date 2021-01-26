export default [
  {
    type: `TextBox`,
    start: 5500,
    end: 10000,
    font: `30px Arial`,
    bgFill: `orange`,
    txtFill: `white`,
    text: `Some Text`,
    weight: 3
  },
  {
    type: `SimpleText`,
    start: 0,
    end: 5000,
    font: `36px Arial`,
    txtFill: `black`,
    text: `Demo Reel`,
    x: 320,
    y: 200,
    weight: 1
  },
  {
    type: `SimpleText`,
    start: 2000,
    end: 5000,
    font: `36px Arial`,
    txtFill: `black`,
    text: `Demonstration of script drawing everything`,
    x: 320,
    y: 400,
    weight: 1
  },
  {
    type: `SimpleText`,
    start: 15000,
    end: 20000,
    font: `36px Arial`,
    txtFill: `black`,
    text: `fin`,
    x: 700,
    y: 600,
    weight: 1
  },
  {
    type: `Highlight`,
    start: 8000,
    end: 10000,
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
