'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixelIndexObj = require('./pixelIndexObj');

var _pixelIndexObj2 = _interopRequireDefault(_pixelIndexObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImgToCanvas = function () {
  function ImgToCanvas() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        imgObj = _ref.imgObj;

    _classCallCheck(this, ImgToCanvas);

    if (!imgObj) {
      throw new Error('imgObj 不能为空');
    }
    this._canvasDom = null;
    this._canvasCtx = null;
    this._sourceImgObj = imgObj;
    this._imgType = 'url';
    this._imgNatureWidth = 0;
    this._imgNatureHeight = 0;
    this._imgWidth = 0;
    this._imgHeight = 0;
    this._imgSize = 0;
    this._sourcePixelData = [];

    /* 图片资源是否加载完成 */
    this._readyOK = false;
    this._readyFuncQueue = [];
    /* 检查图片资源类型 */
    this.init();
  }

  /* 检查图片类型 */


  _createClass(ImgToCanvas, [{
    key: 'checkImgObjType',
    value: function checkImgObjType(imgObj) {
      var type = '';
      if (typeof imgObj === 'string') {
        type = 'url';
      } else if (imgObj instanceof Image) {
        type = 'ImageObj';
      }

      return type;
    }

    /* 加载一个url图片 */

  }, {
    key: 'loadImagByUrl',
    value: function loadImagByUrl() {
      var _this = this;

      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      var p = new Promise(function (resolve, reject) {
        img.onload = function () {
          _this._imgNatureWidth = img.naturalWidth || img.width;
          _this._imgNatureHeight = img.naturalHeight || img.height;
          _this._imgWidth = img.naturalWidth || img.width;
          _this._imgHeight = img.naturalHeight || img.height;
          resolve(img);
        };

        img.onerror = function () {
          reject();
        };
      });
      return p;
    }

    /* 创建画布 */

  }, {
    key: 'createCanvas',
    value: function createCanvas() {
      var canvasDom = document.createElement('canvas');
      canvasDom.width = 100;
      canvasDom.height = 100;
      var ctx = canvasDom.getContext('2d');
      return {
        dom: canvasDom,
        ctx: ctx
      };
    }
  }, {
    key: 'updateCanvasSize',
    value: function updateCanvasSize(w, h) {
      this._canvasDom.style.width = w + 'px';
      this._canvasDom.style.height = h + 'px';
      this._canvasDom.width = w;
      this._canvasDom.height = h;
      this._canvasCtx.width = w;
      this._canvasCtx.height = h;
    }
  }, {
    key: 'drawImg',
    value: function drawImg(img, w, h) {
      this._canvasCtx.drawImage(img, 0, 0, w, h);
    }

    /*  初始化 */

  }, {
    key: 'init',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var canvas, img, _img;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                canvas = this.createCanvas();

                this._canvasDom = canvas.dom;
                this._canvasCtx = canvas.ctx;
                this._imgType = this.checkImgObjType(this._sourceImgObj);

                if (!(this._imgType === 'url')) {
                  _context.next = 11;
                  break;
                }

                _context.next = 7;
                return this.loadImagByUrl(this._sourceImgObj);

              case 7:
                img = _context.sent;

                this._sourceImgObj = img;
                _context.next = 17;
                break;

              case 11:
                this._sourceImgObj = this._sourceImgObj;
                _img = this._sourceImgObj;

                this._imgNatureWidth = _img.naturalWidth || _img.width;
                this._imgNatureHeight = _img.naturalHeight || _img.height;
                this._imgWidth = _img.naturalWidth || _img.width;
                this._imgHeight = _img.naturalHeight || _img.height;

              case 17:
                this._readyOK = true;
                this.updateCanvasSize(this._imgNatureWidth, this._imgNatureHeight);
                this.runReadyQueue();

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref2.apply(this, arguments);
      }

      return init;
    }()

    /* 获取图片的像素值 */

  }, {
    key: 'getPixel',
    value: function getPixel() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          width = _ref3.width,
          height = _ref3.height;

      width = width || this._imgNatureWidth;
      height = height || this._imgNatureHeight;
      this.updateCanvasSize(width, height);
      this.drawImg(this._sourceImgObj, width, height);
      var myImageData = this._canvasCtx.getImageData(0, 0, width, height);
      this._sourcePixelData = myImageData;
      return new _pixelIndexObj2.default(this._sourcePixelData);
    }

    /* 图片资源准备完成出发 */

  }, {
    key: 'ready',
    value: function ready(func) {
      if (this._readyOK) {
        func.call(this, this);
      } else {
        this._readyFuncQueue.push(func.bind(this, this));
      }
    }
  }, {
    key: 'runReadyQueue',
    value: function runReadyQueue() {
      this._readyFuncQueue.map(function (item) {
        item();
      });
    }
  }]);

  return ImgToCanvas;
}();

ImgToCanvas.prototype.version = '0.0.1';

exports.default = ImgToCanvas;