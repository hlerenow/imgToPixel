'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PixelIndexObj = function () {
  function PixelIndexObj(pixelArry, width, height) {
    _classCallCheck(this, PixelIndexObj);

    this._pixelArry = pixelArry || [];
  }

  _createClass(PixelIndexObj, [{
    key: 'xyToIndex',
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
    key: 'get',
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
    key: 'set',
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
    key: 'getAll',
    value: function getAll() {
      return this._pixelArry;
    }
  }]);

  return PixelIndexObj;
}();

exports.default = PixelIndexObj;