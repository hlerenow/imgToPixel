import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PixelIndexObj = /*#__PURE__*/function () {
  function PixelIndexObj(_ref) {
    var pixelArry = _ref.pixelArry,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, PixelIndexObj);

    this._pixelArry = pixelArry || [];
    this._pixelW = width;
    this._pixelH = height;
  }

  _createClass(PixelIndexObj, [{
    key: "xyToIndex",
    value: function xyToIndex(x, y) {
      var _pixelArry = this._pixelArry;
      var _w = _pixelArry.width;
      var index = 0;
      index = _w * y * 4 + x * 4;
      /* 超出范围索引 */

      if (index < 0 || index >= _pixelArry.data.length) {
        // console.warn('超出图片像素索引范围', x, y, index, _pixelArry.data.length)
        return -1;
      } else {
        return index;
      }
    }
  }, {
    key: "indexToXy",
    value: function indexToXy(index) {
      var width = this._pixelArry.width;
      var x = index % (width * 4) / 4;
      var y = Math.floor(index / (width * 4));
      return {
        x: x,
        y: y
      };
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
    key: "getByIndex",
    value: function getByIndex(index) {
      var _pixelArry = this._pixelArry;
      return {
        r: _pixelArry.data[index],
        g: _pixelArry.data[index + 1],
        b: _pixelArry.data[index + 2],
        a: _pixelArry.data[index + 3] / 255
      };
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
    key: "setSourceData",
    value: function setSourceData(data) {
      this._pixelArry = data;
    }
  }, {
    key: "getAllPixel",
    value: function getAllPixel() {
      return this._pixelArry;
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return this._pixelArry.data.length;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return {
        width: this._pixelW,
        height: this._pixelH
      };
    }
  }, {
    key: "forEach",
    value: function forEach(func) {
      func = func || function () {};

      var w = this._pixelArry.width;
      var h = this._pixelArry.height;

      for (var i = 0; i < w; i++) {
        for (var j = 0; j < h; j++) {
          var resColor = func(i, j, _objectSpread({}, this.get(i, j)), w, h);

          if (resColor) {
            this.set(i, j, resColor);
          }
        }
      }

      return this._pixelArry;
    } // 异步处理数据

  }, {
    key: "forEachAsync",
    value: function forEachAsync(func) {
      var _this = this;

      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
      // 4 数据 描述一个像素颜色
      count = count * 4;
      return new Promise(function (resolve) {
        var index = 0;

        _this.chunk(func, _this._pixelArry.data, index, count, resolve);
      });
    }
  }, {
    key: "chunk",
    value: function chunk(func, data, index, count, cb) {
      var _this2 = this;

      var w = this._pixelArry.width;
      var h = this._pixelArry.height;

      if (data.length > index) {
        var maxIndex = index + count;
        maxIndex = maxIndex > data.length ? data.length : maxIndex;

        for (var j = index; j < maxIndex; j += 4) {
          var _this$indexToXy = this.indexToXy(j),
              x = _this$indexToXy.x,
              y = _this$indexToXy.y;

          var colorObj = this.getByIndex(j);
          var resColor = func(x, y, colorObj, w, h);
          index += 4;
          this.set(x, y, resColor);
        }

        setTimeout(function () {
          _this2.chunk(func, data, index, count, cb);
        }, 0);
      } else {
        cb(data);
      }
    }
  }]);

  return PixelIndexObj;
}();

export default PixelIndexObj;