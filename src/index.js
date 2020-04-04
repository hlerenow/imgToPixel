import ImgToCanvas from './imgToCanvas'

class ImgToPixel {
  constructor(props) {
    return new ImgToCanvas(props)
  }
}

ImgToPixel.prototype.version = process.env._VERSION_

export {
  ImgToPixel
}

export default ImgToPixel
