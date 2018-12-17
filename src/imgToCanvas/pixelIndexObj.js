class PixelIndexObj {
  constructor (pixelArry, width, height) {
    this._pixelArry = pixelArry || []
  }

  xyToIndex(x, y) {
    let {_pixelArry} = this
    let _w = _pixelArry.width
    let index = 0
    index = _w * (y - 1) * 4 + (x - 1) * 4
    /* 超出范围索引 */
    if (index < 0 || index >= _pixelArry.data.length) {
      console.warn('超出图片像素索引范围')
      return -1
    } else {
      return index
    }
  }

  get (x, y) {
    let {_pixelArry} = this
    let index = this.xyToIndex(x, y)
    if (index > -1) {
      return {
        r: _pixelArry.data[index],
        g: _pixelArry.data[index + 1],
        b: _pixelArry.data[index + 2],
        a: _pixelArry.data[index + 3] / 255
      }
    } else {
      return {
        r: -1,
        g: -1,
        b: -1,
        a: -1
      }
    }
  }

  set (x, y ,rgbaObj) {
    let {_pixelArry} = this
    let index = this.xyToIndex(x, y)
    if (index < 0) {
      return false
    } else {
      _pixelArry.data[index] = rgbaObj.r
      _pixelArry.data[index + 1] = rgbaObj.g
      _pixelArry.data[index + 2] = rgbaObj.b
      _pixelArry.data[index + 3] = parseInt(rgbaObj.a * 255 || 255)
      return _pixelArry
    }
  }

  getAll () {
    return this._pixelArry
  }
}

export default PixelIndexObj