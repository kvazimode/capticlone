let preload = (data) => {
  if (Array.isArray(data)) {
    let loaded = new Array()
    for (let i=0; i < data.length; i++) {
      loaded[i] = new Image()
      loaded[i].src = data[i].link
      loaded[i].start = data[i].start
      loaded[i].end = data[i].end
    }
    return loaded
  }
  let loaded = new Image()
  loaded.src = data.src
  return loaded
}

export default preload
