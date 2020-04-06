import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import PixelIndexObj from "./libs/pixelIndexObj";
import EffectFunction from "./libs/effectFunction";

var ImgToPixel = /*#__PURE__*/function (_PixelIndexObj) {
  _inherits(ImgToPixel, _PixelIndexObj);

  var _super = _createSuper(ImgToPixel);

  _createClass(ImgToPixel, null, [{
    key: "getImgObjByUrl",
    // 通过url获取一个图片对象
    value: function getImgObjByUrl() {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var cb = arguments.length > 1 ? arguments[1] : undefined;
      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      var p = new Promise(function (resolve, reject) {
        img.onload = function () {
          resolve(img);

          if (cb && typeof cb === 'function') {
            cb(img);
          }
        };

        img.onerror = function (e) {
          reject(e);

          if (cb && typeof cb === 'function') {
            cb(null, e);
          }
        };
      });
      return p;
    } // 将文件返回一个图片对象

  }, {
    key: "getImgObjByFile",
    value: function getImgObjByFile(file, cb) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();

        reader.onload = function (evt) {
          var base64 = evt.target.result;

          if (cb && typeof cb === 'function') {
            var p = this.getImgObjByUrl(base64);
            cb(p);
          }

          resolve(base64);
        };

        reader.readAsDataURL(file);
      });
    }
  }]);

  function ImgToPixel(options) {
    var _this;

    _classCallCheck(this, ImgToPixel);

    _this = _super.call(this, options);
    var imgObj = options.imgObj,
        width = options.width,
        height = options.height;

    if (!imgObj) {
      throw new Error('imgObj 不能为空');
    }

    _this._canvasDom = null;
    _this._canvasCtx = null;
    _this._sourceImgObj = imgObj;
    _this._imgNatureWidth = 0;
    _this._imgNatureHeight = 0;
    _this._imgWidth = width || 0;
    _this._imgHeight = height || 0;
    _this._imgSize = 0;
    _this._sourcePixelData = [];

    _this.init();

    return _this;
  }
  /* 初始化 */


  _createClass(ImgToPixel, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var canvas, img, res;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                canvas = this.createCanvas();
                this._canvasDom = canvas.dom;
                this._canvasCtx = canvas.ctx;
                this._imgType = this.checkImgObjType(this._sourceImgObj);

                if (this._imgType) {
                  _context.next = 7;
                  break;
                }

                console.error('not support imgObj.');
                return _context.abrupt("return");

              case 7:
                this._sourceImgObj = this._sourceImgObj;
                img = this._sourceImgObj;
                this._imgNatureWidth = img.naturalWidth || img.width;
                this._imgNatureHeight = img.naturalHeight || img.height;
                this._imgWidth = this._imgWidth || img.naturalWidth;
                this._imgHeight = this._imgHeight || img.naturalHeight;
                this.updateCanvasSize(this._imgNatureWidth, this._imgNatureHeight);
                res = this.getSourcePixel({
                  width: this._imgWidth,
                  height: this._imgHeight
                });
                this.setSourceData(res);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
    /* 创建画布 */

  }, {
    key: "createCanvas",
    value: function createCanvas() {
      var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var canvasDom = document.createElement('canvas');
      canvasDom.width = w;
      canvasDom.height = h;
      var ctx = canvasDom.getContext('2d');
      return {
        dom: canvasDom,
        ctx: ctx
      };
    }
    /* 检查图片类型 */

  }, {
    key: "checkImgObjType",
    value: function checkImgObjType(imgObj) {
      var type = false;

      if (imgObj instanceof Image) {
        type = 'ImageObj';
      }

      return type;
    }
  }, {
    key: "updateCanvasSize",
    value: function updateCanvasSize(w, h) {
      this._canvasDom.style.width = w + 'px';
      this._canvasDom.style.height = h + 'px';
      this._canvasDom.width = w;
      this._canvasDom.height = h;
      this._canvasCtx.width = w;
      this._canvasCtx.height = h;
    }
  }, {
    key: "drawImg",
    value: function drawImg(img, w, h) {
      this._canvasCtx.drawImage(img, 0, 0, w, h);
    }
    /* 获取图片最原始的像素值 */

  }, {
    key: "getSourcePixel",
    value: function getSourcePixel() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          width = _ref.width,
          height = _ref.height;

      width = width || this._imgNatureWidth;
      height = height || this._imgNatureHeight;
      this.updateCanvasSize(width, height);
      this.drawImg(this._sourceImgObj, width, height);

      var myImageData = this._canvasCtx.getImageData(0, 0, width, height);

      this._sourcePixelData = myImageData;
      return this._sourcePixelData;
    } // imgObj to toBase64

  }, {
    key: "toBase64",
    value: function toBase64() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'image/png';
      var quality = arguments.length > 1 ? arguments[1] : undefined;
      var canvasCtx = this._canvasCtx;
      var canvasDom = this._canvasDom;
      var w = this._imgNatureWidth;
      var h = this._imgNatureHeight;
      canvasCtx.clearRect(0, 0, w, h);
      canvasCtx.putImageData(this.getAllPixel(), 0, 0);
      return canvasDom.toDataURL(type, quality);
    }
  }]);

  return ImgToPixel;
}(PixelIndexObj);

ImgToPixel.prototype.version = '1.0.1';
ImgToPixel.EffectFunction = EffectFunction;
export { ImgToPixel };
export default ImgToPixel;