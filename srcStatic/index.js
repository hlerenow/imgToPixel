/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

let canvas = document.getElementById('domCanvas')
let canvasCtx = canvas.getContext('2d')
let globalImg = document.getElementById('img')
let globalImgHandle = null

function getImgDomSize() {
  let style = getComputedStyle(globalImg, null)
  let w = parseInt(style.width)
  let h = parseInt(style.height)

  return {
    w: w,
    h: h
  }
}

function updateSourceImg(url) {
  globalImg.src = url
}

function updateCanvasSize() {
  let style = getComputedStyle(globalImg, null)
  let w = parseInt(style.width)
  let h = parseInt(style.height)
  canvas.with = w
  canvas.hight = h
  canvas.style.width = w + 'px'
  canvas.style.height = h + 'px'
  canvas.width = w
  canvas.height = h
  canvas.width = w
  canvas.height = h
}

function changeImgContent() {
  let pixObj = globalImgHandle
  let pixelSize = pixObj.getSize()

  pixObj.forEach(ImgToPixel.EffectFunction.Gray)
  updateCanvasSize()
  canvasCtx.clearRect(0, 0, 999, 999)
  canvasCtx.putImageData(pixObj.getAllPixel(), 0, 0)
}

// url 加载方式
ImgToPixel.getImgObjByUrl('http://statics.h-five.com/withme.jpg', function(img) {
  let imgSize = getImgDomSize()
  let handle = new ImgToPixel({
    imgObj: img,
    width: imgSize.w,
    height: imgSize.h
  })
  globalImgHandle = handle
  changeImgContent()
})

// 图片文件的方式加载
let fileBox = document.getElementById('fileBox')
fileBox.addEventListener('change', function(evt) {
  let file = evt.target.files[0]
  let img = ImgToPixel.getImgObjByFile(file).then((data) => {
    img = data
    updateSourceImg(img)
    ImgToPixel.getImgObjByUrl(img, function(img) {
      let imgSize = getImgDomSize()
      let handle = new ImgToPixel({
        imgObj: img,
        width: imgSize.w,
        height: imgSize.h
      })
      globalImgHandle = handle
      changeImgContent()
    })
  })
})
