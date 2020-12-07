let preload = (arr) => {
  let images = []
  arr.forEach(el => {
    if (el.type === `BgImg`) {
      images.push({
        link: el.link,
        start: el.start,
        end: el.end
      })
    }
  })
  return images
}

export default preload
