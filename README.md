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
  let img = document.getElementById('img')
  let a = new ImgToPixel({
    imgObj: 'http://statics.h-five.com/withme.jpg'
    // imgObj: img
  })

  a.ready((handle) => {
    let pixObj = handle.getPixel({
    })

    let obj = {
      r: 255,
      g: 0,
      b: 0,
      a: 1
    }

    /* get pixel value by x, y */
    console.log(pixObj.get(481, 256))

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


    canvasCtx.clearRect(0,0,a._imgWidth, a._imgHeight)
    canvasCtx.putImageData(pixObj.set(481, 256, obj), 0, 0)
  })
```
