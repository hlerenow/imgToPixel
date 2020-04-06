class PixelIndexObj {
  constructor({ pixelArry, width, height }) {
    this._pixelArry = pixelArry || []
    this._pixelW = width
    this._pixelH = height
  }

  xyToIndex(x, y) {
    let { _pixelArry } = this
    let _w = _pixelArry.width
    let index = 0
    index = _w * y * 4 + (x) * 4
    /* 超出范围索引 */
    if (index < 0 || index >= _pixelArry.data.length) {
      // console.warn('超出图片像素索引范围', x, y, index, _pixelArry.data.length)
      return -1
    } else {
      return index
    }
  }

  indexToXy(index) {
    let width = this._pixelArry.width
    let x = (index % (width * 4)) / 4
    let y = Math.floor(index / (width * 4))
    return { x, y }
  }

  get(x, y) {
    let { _pixelArry } = this
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

  getByIndex(index) {
    let { _pixelArry } = this

    return {
      r: _pixelArry.data[index],
      g: _pixelArry.data[index + 1],
      b: _pixelArry.data[index + 2],
      a: _pixelArry.data[index + 3] / 255
    }
  }

  set(x, y, rgbaObj) {
    let { _pixelArry } = this
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

  setSourceData(data) {
    this._pixelArry = data
  }

  getAllPixel() {
    return this._pixelArry
  }

  getLength() {
    return this._pixelArry.data.length
  }

  getSize() {
    return {
      width: this._pixelW,
      height: this._pixelH
    }
  }

  forEach(func) {
    func = func || function() {}
    let w = this._pixelArry.width
    let h = this._pixelArry.height
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < h; j++) {
        let resColor = func(i, j, { ...this.get(i, j) }, w, h)
        if (resColor) {
          this.set(i, j, resColor)
        }
      }
    }
    return this._pixelArry
  }

  // 异步处理数据
  forEachAsync(func, count = 1000) {
    // 4 数据 描述一个像素颜色
    count = count * 4
    return new Promise((resolve) => {
      let index = 0
      this.chunk(func, this._pixelArry.data, index, count, resolve)
    })
  }

  chunk(func, data, index, count, cb) {
    let w = this._pixelArry.width
    let h = this._pixelArry.height

    if (data.length > index) {
      let maxIndex = index + count
      maxIndex = maxIndex > data.length ? data.length : maxIndex
      for (let j = index; j < maxIndex; j += 4) {
        let { x, y } = this.indexToXy(j)
        let colorObj = this.getByIndex(j)
        const resColor = func(x, y, colorObj, w, h)
        index += 4
        this.set(x, y, resColor)
      }
      setTimeout(() => {
        this.chunk(func, data, index, count, cb)
      }, 0)
    } else {
      cb(data)
    }
  }
}

export default PixelIndexObj
