const objects = [
  {
    type: `BgImg`,
    start: 0,
    end: 8000,
    link: `./001.png`,
    weight: 1
  },
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
    type: `BgImg`,
    start: 8000,
    end: 15000,
    link: `./002.png`,
    weight: 1
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

export default objects
