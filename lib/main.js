import imgToCanvas from './imgToCanvas/main';

class ImgToPix {
  constructor(props) {
    return new imgToCanvas(props);
  }
}

ImgToPix.prototype.version = '0.0.1';

export default ImgToPix;