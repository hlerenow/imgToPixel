[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Version](https://img.shields.io/npm/v/imgtopixel.svg)](https://www.npmjs.com/package/imgtopixel)
[![npm](https://img.shields.io/npm/dt/imgtopixel.svg)](https://www.npmjs.com/package/imgtopixel)

# ImageToPixel

Convert image to pixel value, Run only in the browser

## [Demo](https://hlerenow.github.io/imgToPixel/example/)

## Installation

```
npm install imgtopixel --save
```

## Usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ImgToPixcel</title>
  </head>
  <body>
      <img id="img" src="http://statics.h-five.com/withme.jpg" />
      <canvas width="750" height="884" id="domCanvas"></canvas>
  </body>
</html>
```

```javascript
  import ImgToPixel from 'imgtopixel'

 let canvas = document.getElementById('domCanvas')
let canvasCtx = canvas.getContext('2d')
let globalImg = document.getElementById('img')
let globalImgHandle = null

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
```
