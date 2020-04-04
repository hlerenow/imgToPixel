import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import ImgToCanvas from "./imgToCanvas";

var ImgToPixel = function ImgToPixel(props) {
  _classCallCheck(this, ImgToPixel);

  return new ImgToCanvas(props);
};

ImgToPixel.prototype.version = '1.0.0';
export { ImgToPixel };
export default ImgToPixel;