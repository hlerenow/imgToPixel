!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}("undefined"!=typeof self?self:this,function(){return n={},i.m=r={"./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */function(t,e){function s(t,e,r,n,i,o,a){try{var u=t[o](a),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,i)}t.exports=function(u){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=u.apply(t,a);function i(t){s(n,e,r,i,o,"next",t)}function o(t){s(n,e,r,i,o,"throw",t)}i(void 0)})}}},"./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */function(t,e){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},"./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */function(t,e,r){t.exports=r(/*! regenerator-runtime */"./node_modules/regenerator-runtime/runtime.js")},"./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */function(t,e,r){var n=function(a){"use strict";var s,t=Object.prototype,h=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},i=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",n=e.toStringTag||"@@toStringTag";function u(t,e,r,n){var o,a,u,s,i=e&&e.prototype instanceof m?e:m,c=Object.create(i.prototype),h=new L(n||[]);return c._invoke=(o=t,a=r,u=h,s=f,function(t,e){if(s===p)throw new Error("Generator is already running");if(s===g){if("throw"===t)throw e;return E()}for(u.method=t,u.arg=e;;){var r=u.delegate;if(r){var n=O(r,u);if(n){if(n===y)continue;return n}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(s===f)throw s=g,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);s=p;var i=l(o,a,u);if("normal"===i.type){if(s=u.done?g:d,i.arg===y)continue;return{value:i.arg,done:u.done}}"throw"===i.type&&(s=g,u.method="throw",u.arg=i.arg)}}),c}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=u;var f="suspendedStart",d="suspendedYield",p="executing",g="completed",y={};function m(){}function o(){}function c(){}var v={};v[i]=function(){return this};var _=Object.getPrototypeOf,b=_&&_(_(C([])));b&&b!==t&&h.call(b,i)&&(v=b);var x=c.prototype=m.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(s,c){var e;this._invoke=function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,i){var o=l(s[t],s,r);if("throw"!==o.type){var a=o.arg,u=a.value;return u&&"object"==typeof u&&h.call(u,"__await")?c.resolve(u.__await).then(function(t){e("next",t,n,i)},function(t){e("throw",t,n,i)}):c.resolve(u).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,i)})}i(o.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function O(t,e){var r=t.iterator[e.method];if(r===s){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=s,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,y;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=s),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function C(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(h.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=s,t.done=!0,t};return n.next=n}}return{next:E}}function E(){return{value:s,done:!0}}return o.prototype=x.constructor=c,c.constructor=o,c[n]=o.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,n in t||(t[n]="GeneratorFunction")),t.prototype=Object.create(x),t},a.awrap=function(t){return{__await:t}},w(j.prototype),j.prototype[r]=function(){return this},a.AsyncIterator=j,a.async=function(t,e,r,n,i){void 0===i&&(i=Promise);var o=new j(u(t,e,r,n),i);return a.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},w(x),x[n]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},a.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=C,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&h.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=s)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return o.type="throw",o.arg=r,n.next=t,e&&(n.method="next",n.arg=s),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var i=this.tryEntries[e],o=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var a=h.call(i,"catchLoc"),u=h.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&h.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;I(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=s),y}},a}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},"./src/imgToCanvas/index.js":
/*!**********************************!*\
  !*** ./src/imgToCanvas/index.js ***!
  \**********************************/
/*! exports provided: ImgToCanvas, default */function(t,e,r){"use strict";r.r(e),r.d(e,"ImgToCanvas",function(){return f});var n=r(/*! @babel/runtime/regenerator */"./node_modules/@babel/runtime/regenerator/index.js"),i=r.n(n),o=r(/*! @babel/runtime/helpers/asyncToGenerator */"./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),a=r.n(o),u=r(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js"),s=r.n(u),c=r(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js"),h=r.n(c),l=r(/*! ./pixelIndexObj */"./src/imgToCanvas/pixelIndexObj.js"),f=function(){function e(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).imgObj;if(s()(this,e),!t)throw new Error("imgObj 不能为空");this._canvasDom=null,this._canvasCtx=null,this._sourceImgObj=t,this._imgType="url",this._imgNatureWidth=0,this._imgNatureHeight=0,this._imgWidth=0,this._imgHeight=0,this._imgSize=0,this._sourcePixelData=[],this._readyOK=!1,this._readyFuncQueue=[],this.init()}var t;return h()(e,[{key:"checkImgObjType",value:function(t){var e="";return"string"==typeof t?e="url":t instanceof Image&&(e="ImageObj"),e}},{key:"loadImagByUrl",value:function(t){var r=this,e=0<arguments.length&&void 0!==t?t:"",n=new Image;return n.crossOrigin="Anonymous",n.src=e,new Promise(function(t,e){n.onload=function(){r._imgNatureWidth=n.naturalWidth||n.width,r._imgNatureHeight=n.naturalHeight||n.height,r._imgWidth=n.naturalWidth||n.width,r._imgHeight=n.naturalHeight||n.height,t(n)},n.onerror=function(t){e(t)}})}},{key:"createCanvas",value:function(){var t=document.createElement("canvas");t.width=100,t.height=100;var e=t.getContext("2d");return{dom:t,ctx:e}}},{key:"updateCanvasSize",value:function(t,e){this._canvasDom.style.width=t+"px",this._canvasDom.style.height=e+"px",this._canvasDom.width=t,this._canvasDom.height=e,this._canvasCtx.width=t,this._canvasCtx.height=e}},{key:"drawImg",value:function(t,e,r){this._canvasCtx.drawImage(t,0,0,e,r)}},{key:"init",value:(t=a()(i.a.mark(function t(){var e,r,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.createCanvas(),this._canvasDom=e.dom,this._canvasCtx=e.ctx,this._imgType=this.checkImgObjType(this._sourceImgObj),"url"===this._imgType)return t.next=7,this.loadImagByUrl(this._sourceImgObj);t.next=11;break;case 7:r=t.sent,this._sourceImgObj=r,t.next=17;break;case 11:this._sourceImgObj=this._sourceImgObj,n=this._sourceImgObj,this._imgNatureWidth=n.naturalWidth||n.width,this._imgNatureHeight=n.naturalHeight||n.height,this._imgWidth=n.naturalWidth||n.width,this._imgHeight=n.naturalHeight||n.height;case 17:this._readyOK=!0,this.updateCanvasSize(this._imgNatureWidth,this._imgNatureHeight),this.runReadyQueue();case 20:case"end":return t.stop()}},t,this)})),function(){return t.apply(this,arguments)})},{key:"getPixel",value:function(t){var e=0<arguments.length&&void 0!==t?t:{},r=e.width,n=e.height;r=r||this._imgNatureWidth,n=n||this._imgNatureHeight,this.updateCanvasSize(r,n),this.drawImg(this._sourceImgObj,r,n);var i=this._canvasCtx.getImageData(0,0,r,n);return this._sourcePixelData=i,new l.default(this._sourcePixelData)}},{key:"ready",value:function(t){this._readyOK?t.call(this,this):this._readyFuncQueue.push(t.bind(this,this))}},{key:"runReadyQueue",value:function(){this._readyFuncQueue.map(function(t){t()})}}]),e}();f.prototype.version="1.0.0",e.default=f},"./src/imgToCanvas/pixelIndexObj.js":
/*!******************************************!*\
  !*** ./src/imgToCanvas/pixelIndexObj.js ***!
  \******************************************/
/*! exports provided: default */function(t,e,r){"use strict";r.r(e);var n=r(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=r.n(n),o=r(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js"),a=r.n(o),u=function(){function n(t,e,r){i()(this,n),this._pixelArry=t||[]}return a()(n,[{key:"xyToIndex",value:function(t,e){var r,n=this._pixelArry;return(r=n.width*(e-1)*4+4*(t-1))<0||r>=n.data.length?(console.warn("超出图片像素索引范围"),-1):r}},{key:"get",value:function(t,e){var r=this._pixelArry,n=this.xyToIndex(t,e);return-1<n?{r:r.data[n],g:r.data[n+1],b:r.data[n+2],a:r.data[n+3]/255}:{r:-1,g:-1,b:-1,a:-1}}},{key:"set",value:function(t,e,r){var n=this._pixelArry,i=this.xyToIndex(t,e);return!(i<0)&&(n.data[i]=r.r,n.data[i+1]=r.g,n.data[i+2]=r.b,n.data[i+3]=parseInt(255*r.a||255),n)}},{key:"getAll",value:function(){return this._pixelArry}}]),n}();e.default=u}},i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s="./src/imgToCanvas/index.js");function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}var r,n});
//# sourceMappingURL=index.js.map