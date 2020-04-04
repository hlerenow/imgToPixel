import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

var PixelIndexObj = /*#__PURE__*/function () {
  function PixelIndexObj(pixelArry, width, height) {
    _classCallCheck(this, PixelIndexObj);

    this._pixelArry = pixelArry || [];
  }

  _createClass(PixelIndexObj, [{
    key: "xyToIndex",
    value: function xyToIndex(x, y) {
      var _pixelArry = this._pixelArry;
      var _w = _pixelArry.width;
      var index = 0;
      index = _w * (y - 1) * 4 + (x - 1) * 4;
      /* 超出范围索引 */

      if (index < 0 || index >= _pixelArry.data.length) {
        console.warn('超出图片像素索引范围');
        return -1;
      } else {
        return index;
      }
    }
  }, {
    key: "get",
    value: function get(x, y) {
      var _pixelArry = this._pixelArry;
      var index = this.xyToIndex(x, y);

      if (index > -1) {
        return {
          r: _pixelArry.data[index],
          g: _pixelArry.data[index + 1],
          b: _pixelArry.data[index + 2],
          a: _pixelArry.data[index + 3] / 255
        };
      } else {
        return {
          r: -1,
          g: -1,
          b: -1,
          a: -1
        };
      }
    }
  }, {
    key: "set",
    value: function set(x, y, rgbaObj) {
      var _pixelArry = this._pixelArry;
      var index = this.xyToIndex(x, y);

      if (index < 0) {
        return false;
      } else {
        _pixelArry.data[index] = rgbaObj.r;
        _pixelArry.data[index + 1] = rgbaObj.g;
        _pixelArry.data[index + 2] = rgbaObj.b;
        _pixelArry.data[index + 3] = parseInt(rgbaObj.a * 255 || 255);
        return _pixelArry;
      }
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this._pixelArry;
    }
  }]);

  return PixelIndexObj;
}();

export default PixelIndexObj;