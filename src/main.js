import imgToCanvas from './imgToCanvas/main'

class ImgToPix {
  constructor (props) {
    return new imgToCanvas(props)
  }
}

ImgToPix.prototype.version = '_VERSION_'

export default ImgToPix
