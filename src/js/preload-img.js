let loaded = new Array()
let preload = (arr) => {
  for (let i=0; i < arr.length; i++) {
    loaded[i] = new Image()
    loaded[i].src = arr[i].link
    loaded[i].start = arr[i].start
    loaded[i].end = arr[i].end
  }
  return loaded
}

export default preload
