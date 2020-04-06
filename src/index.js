import PixelIndexObj from './libs/pixelIndexObj'
import EffectFunction from './libs/effectFunction'
class ImgToPixel extends PixelIndexObj {
  // 通过url获取一个图片对象
  static getImgObjByUrl(url = '', cb) {
    var img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = url
    let p = new Promise((resolve, reject) => {
      img.onload = () => {
        resolve(img)
        if (cb && typeof cb === 'function') {
          cb(img)
        }
      }
      img.onerror = function(e) {
        reject(e)
        if (cb && typeof cb === 'function') {
          cb(null, e)
        }
      }
    })
    return p
  }

  // 将文件返回一个图片对象
  static getImgObjByFile(file, cb) {
    return new Promise(function(resolve, reject) {
      let reader = new FileReader()
      reader.onload = function(evt) {
        var base64 = evt.target.result
        if (cb && typeof cb === 'function') {
          let p = this.getImgObjByUrl(base64)
          cb(p)
        }
        resolve(base64)
      }
      reader.readAsDataURL(file)
    })
  }

  constructor(options) {
    super(options)
    let {
      imgObj,
      width,
      height
    } = options
    if (!imgObj) {
      throw new Error('imgObj 不能为空')
    }
    this._canvasDom = null
    this._canvasCtx = null
    this._sourceImgObj = imgObj
    this._imgNatureWidth = 0
    this._imgNatureHeight = 0
    this._imgWidth = width || 0
    this._imgHeight = height || 0
    this._imgSize = 0
    this._sourcePixelData = []

    this.init()
  }

  /* 初始化 */
  async init() {
    let canvas = this.createCanvas()
    this._canvasDom = canvas.dom
    this._canvasCtx = canvas.ctx
    this._imgType = this.checkImgObjType(this._sourceImgObj)
    if (!this._imgType) {
      console.error('not support imgObj.')
      return
    }

    this._sourceImgObj = this._sourceImgObj
    const img = this._sourceImgObj
    this._imgNatureWidth = img.naturalWidth || img.width
    this._imgNatureHeight = img.naturalHeight || img.height
    this._imgWidth = this._imgWidth || img.naturalWidth
    this._imgHeight = this._imgHeight || img.naturalHeight
    this.updateCanvasSize(this._imgNatureWidth, this._imgNatureHeight)
    let res = this.getSourcePixel({
      width: this._imgWidth,
      height: this._imgHeight
    })
    this.setSourceData(res)
  }

  /* 创建画布 */
  createCanvas(w = 100, h = 100) {
    let canvasDom = document.createElement('canvas')
    canvasDom.width = w
    canvasDom.height = h
    let ctx = canvasDom.getContext('2d')
    return {
      dom: canvasDom,
      ctx: ctx
    }
  }

  /* 检查图片类型 */
  checkImgObjType(imgObj) {
    let type = false
    if (imgObj instanceof Image) {
      type = 'ImageObj'
    }
    return type
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

  /* 获取图片最原始的像素值 */
  getSourcePixel({
    width,
    height
  } = {}) {
    width = width || this._imgNatureWidth
    height = height || this._imgNatureHeight
    this.updateCanvasSize(width, height)
    this.drawImg(this._sourceImgObj, width, height)
    let myImageData = this._canvasCtx.getImageData(0, 0, width, height)
    this._sourcePixelData = myImageData
    return this._sourcePixelData
  }

  // imgObj to toBase64
  toBase64(type = 'image/png', quality) {
    const canvasCtx = this._canvasCtx
    const canvasDom = this._canvasDom
    const w = this._imgNatureWidth
    const h = this._imgNatureHeight
    canvasCtx.clearRect(0, 0, w, h)
    canvasCtx.putImageData(this.getAllPixel(), 0, 0)
    return canvasDom.toDataURL(type, quality)
  }
}

ImgToPixel.prototype.version = process.env._VERSION_

ImgToPixel.EffectFunction = EffectFunction

export {
  ImgToPixel
}

export default ImgToPixel
