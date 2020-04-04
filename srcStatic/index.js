/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let canvas = document.getElementById('domCanvas')
let canvasCtx = canvas.getContext('2d')
let img = document.getElementById('img')
let a = new ImgToPixel({
  imgObj: 'http://statics.h-five.com/withme.jpg'
  // imgObj: img
})

a.ready((handle) => {
  let pixObj = handle.getPixel({
  })
  console.log(a)
  console.log(pixObj)
  /* get pixel value by x, y */
  console.log(pixObj.get(481, 256))
  /* color Object */
  let obj = {
    r: 255,
    g: 0,
    b: 0,
    a: 1
  }
  /* set pixel value by x, y */
  pixObj.set(1, 1, obj)
  pixObj.set(1, a._imgHeight, obj)
  pixObj.set(a._imgWidth, 1, obj)
  pixObj.set(a._imgWidth, a._imgHeight, obj)

  pixObj.set(481, 256, obj)
  pixObj.set(481, 257, obj)
  pixObj.set(481, 258, obj)
  pixObj.set(481, 259, obj)

  pixObj.set(482, 256, obj)
  pixObj.set(483, 257, obj)
  pixObj.set(484, 258, obj)
  pixObj.set(485, 259, obj)
  canvasCtx.clearRect(0, 0, a._imgWidth, a._imgHeight)
  canvasCtx.putImageData(pixObj.set(481, 256, obj), 0, 0)
})
