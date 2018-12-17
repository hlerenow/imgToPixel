'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = require('./imgToCanvas/main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImgToPix = function ImgToPix(props) {
  _classCallCheck(this, ImgToPix);

  return new _main2.default(props);
};

ImgToPix.prototype.version = '0.0.1';

exports.default = ImgToPix;