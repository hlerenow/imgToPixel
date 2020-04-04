import PixelIndexObj from './pixelIndexObj'

class ImgToCanvas {
  constructor({
    imgObj
  } = {}) {
    if (!imgObj) {
      throw new Error('imgObj 不能为空')
    }
    this._canvasDom = null
    this._canvasCtx = null
    this._sourceImgObj = imgObj
    this._imgType = 'url'
    this._imgNatureWidth = 0
    this._imgNatureHeight = 0
    this._imgWidth = 0
    this._imgHeight = 0
    this._imgSize = 0
    this._sourcePixelData = []

    /* 图片资源是否加载完成 */
    this._readyOK = false
    this._readyFuncQueue = []
    /* 检查图片资源类型 */
    this.init()
  }

  /* 检查图片类型 */
  checkImgObjType(imgObj) {
    let type = ''
    if (typeof imgObj === 'string') {
      type = 'url'
    } else if (imgObj instanceof Image) {
      type = 'ImageObj'
    }

    return type
  }

  /* 加载一个url图片 */
  loadImagByUrl(url = '') {
    var img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = url
    let p = new Promise((resolve, reject) => {
      img.onload = () => {
        this._imgNatureWidth = img.naturalWidth || img.width
        this._imgNatureHeight = img.naturalHeight || img.height
        this._imgWidth = img.naturalWidth || img.width
        this._imgHeight = img.naturalHeight || img.height
        resolve(img)
      }

      img.onerror = function(e) {
        reject(e)
      }
    })
    return p
  }

  /* 创建画布 */
  createCanvas() {
    let canvasDom = document.createElement('canvas')
    canvasDom.width = 100
    canvasDom.height = 100
    let ctx = canvasDom.getContext('2d')
    return {
      dom: canvasDom,
      ctx: ctx
    }
  }

  updateCanvasSize(w, h) {
    this._canvasDom.style.width = w + 'px'
    this._canvasDom.style.height = h + 'px'
    this._canvasDom.width = w
    this._canvasDom.height = h
    this._canvasCtx.width = w
    this._canvasCtx.height = h
  }

  drawImg(img, w, h) {
    this._canvasCtx.drawImage(img, 0, 0, w, h)
  }

  /* 初始化 */
  async init() {
    let canvas = this.createCanvas()
    this._canvasDom = canvas.dom
    this._canvasCtx = canvas.ctx
    this._imgType = this.checkImgObjType(this._sourceImgObj)
    if (this._imgType === 'url') {
      let img = await this.loadImagByUrl(this._sourceImgObj)
      this._sourceImgObj = img
    } else {
      this._sourceImgObj = this._sourceImgObj
      let img = this._sourceImgObj
      this._imgNatureWidth = img.naturalWidth || img.width
      this._imgNatureHeight = img.naturalHeight || img.height
      this._imgWidth = img.naturalWidth || img.width
      this._imgHeight = img.naturalHeight || img.height
    }
    this._readyOK = true
    this.updateCanvasSize(this._imgNatureWidth, this._imgNatureHeight)
    this.runReadyQueue()
  }

  /* 获取图片的像素值 */
  getPixel({
    width,
    height
  } = {}) {
    width = width || this._imgNatureWidth
    height = height || this._imgNatureHeight
    this.updateCanvasSize(width, height)
    this.drawImg(this._sourceImgObj, width, height)
    let myImageData = this._canvasCtx.getImageData(0, 0, width, height)
    this._sourcePixelData = myImageData
    return new PixelIndexObj(this._sourcePixelData)
  }

  /* 图片资源准备完成出发 */
  ready(func) {
    if (this._readyOK) {
      func.call(this, this)
    } else {
      this._readyFuncQueue.push(func.bind(this, this))
    }
  }

  runReadyQueue() {
    this._readyFuncQueue.map((item) => {
      item()
    })
  }
}

ImgToCanvas.prototype.version = process.env._VERSION_

export {
  ImgToCanvas
}

export default ImgToCanvas
