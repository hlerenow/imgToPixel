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
    <title>ImgToPixel</title>
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
  handle.forEach(ImgToPixel.EffectFunction.Gray)

  // 图片太大时 采用异步处理
  handle.forEachAsync(ImgToPixel.EffectFunction.Gray, 1000)
    .then(() => {
      let base64Img = handle.toBase64()
    })

  let base64Img = handle.toBase64()
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
      handle.forEach(ImgToPixel.EffectFunction.Gray)

      // 图片太大时 采用异步处理
      handle.forEachAsync(ImgToPixel.EffectFunction.Gray, 1000)
        .then(() => {
          let base64Img = handle.toBase64()
        })

      let base64Img = handle.toBase64()
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

```
