!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/Volumes/dev/mygithub/imgToPixel/dist",e(e.s=5)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(i,o){try{var a=e[i](o),u=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),u=n(a),c=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=r(4),h=n(s),l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.imgObj;if(o(this,t),!r)throw new Error("imgObj 不能为空");this._canvasDom=null,this._canvasCtx=null,this._sourceImgObj=r,this._imgType="url",this._imgNatureWidth=0,this._imgNatureHeight=0,this._imgWidth=0,this._imgHeight=0,this._imgSize=0,this._sourcePixelData=[],this._readyOK=!1,this._readyFuncQueue=[],this.init()}return c(t,[{key:"checkImgObjType",value:function(t){var e="";return"string"==typeof t?e="url":t instanceof Image&&(e="ImageObj"),e}},{key:"loadImagByUrl",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=new Image;return r.crossOrigin="Anonymous",r.src=e,new Promise(function(e,n){r.onload=function(){t._imgNatureWidth=r.naturalWidth||r.width,t._imgNatureHeight=r.naturalHeight||r.height,t._imgWidth=r.naturalWidth||r.width,t._imgHeight=r.naturalHeight||r.height,e(r)},r.onerror=function(){n()}})}},{key:"createCanvas",value:function(){var t=document.createElement("canvas");return t.width=100,t.height=100,{dom:t,ctx:t.getContext("2d")}}},{key:"updateCanvasSize",value:function(t,e){this._canvasDom.style.width=t+"px",this._canvasDom.style.height=e+"px",this._canvasDom.width=t,this._canvasDom.height=e,this._canvasCtx.width=t,this._canvasCtx.height=e}},{key:"drawImg",value:function(t,e,r){this._canvasCtx.drawImage(t,0,0,e,r)}},{key:"init",value:function(){function t(){return e.apply(this,arguments)}var e=i(u.default.mark(function t(){var e,r,n;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.createCanvas(),this._canvasDom=e.dom,this._canvasCtx=e.ctx,this._imgType=this.checkImgObjType(this._sourceImgObj),"url"!==this._imgType){t.next=11;break}return t.next=7,this.loadImagByUrl(this._sourceImgObj);case 7:r=t.sent,this._sourceImgObj=r,t.next=17;break;case 11:this._sourceImgObj=this._sourceImgObj,n=this._sourceImgObj,this._imgNatureWidth=n.naturalWidth||n.width,this._imgNatureHeight=n.naturalHeight||n.height,this._imgWidth=n.naturalWidth||n.width,this._imgHeight=n.naturalHeight||n.height;case 17:this._readyOK=!0,this.updateCanvasSize(this._imgNatureWidth,this._imgNatureHeight),this.runReadyQueue();case 20:case"end":return t.stop()}},t,this)}));return t}()},{key:"getPixel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,r=t.height;e=e||this._imgNatureWidth,r=r||this._imgNatureHeight,this.updateCanvasSize(e,r),this.drawImg(this._sourceImgObj,e,r);var n=this._canvasCtx.getImageData(0,0,e,r);return this._sourcePixelData=n,new h.default(this._sourcePixelData)}},{key:"ready",value:function(t){this._readyOK?t.call(this,this):this._readyFuncQueue.push(t.bind(this,this))}},{key:"runReadyQueue",value:function(){this._readyFuncQueue.map(function(t){t()})}}]),t}();l.prototype.version="0.0.1",e.default=l},function(t,e,r){t.exports=r(2)},function(t,e,r){var n=function(){return this}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(3),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";function r(t,e,r,n){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),u=new d(n||[]);return a._invoke=s(t,r,u),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function o(){}function a(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(r,i,o,a){var u=n(t[r],t,i);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(s).then(function(t){c.value=t,o(c)},a)}a(u.arg)}function r(t,r){function n(){return new Promise(function(n,i){e(t,r,n,i)})}return i=i?i.then(n,n):n()}var i;this._invoke=r}function s(t,e,r){var i=k;return function(o,a){if(i===L)throw new Error("Generator is already running");if(i===E){if("throw"===o)throw a;return p()}for(r.method=o,r.arg=a;;){var u=r.delegate;if(u){var c=h(u,r);if(c){if(c===P)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===k)throw i=E,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=L;var s=n(t,e,r);if("normal"===s.type){if(i=r.done?E:I,s.arg===P)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(i=E,r.method="throw",r.arg=s.arg)}}}function h(t,e){var r=t.iterator[e.method];if(r===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,h(t,e),"throw"===e.method))return P;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return P}var i=n(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,P;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,P):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,P)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function g(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(m.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}return{next:p}}function p(){return{value:y,done:!0}}var y,v=Object.prototype,m=v.hasOwnProperty,_="function"==typeof Symbol?Symbol:{},w=_.iterator||"@@iterator",x=_.asyncIterator||"@@asyncIterator",b=_.toStringTag||"@@toStringTag",O="object"==typeof t,j=e.regeneratorRuntime;if(j)return void(O&&(t.exports=j));j=e.regeneratorRuntime=O?t.exports:{},j.wrap=r;var k="suspendedStart",I="suspendedYield",L="executing",E="completed",P={},N={};N[w]=function(){return this};var T=Object.getPrototypeOf,C=T&&T(T(g([])));C&&C!==v&&m.call(C,w)&&(N=C);var H=a.prototype=i.prototype=Object.create(N);o.prototype=H.constructor=a,a.constructor=o,a[b]=o.displayName="GeneratorFunction",j.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},j.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(H),t},j.awrap=function(t){return{__await:t}},u(c.prototype),c.prototype[x]=function(){return this},j.AsyncIterator=c,j.async=function(t,e,n,i){var o=new c(r(t,e,n,i));return j.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},u(H),H[b]="Generator",H[w]=function(){return this},H.toString=function(){return"[object Generator]"},j.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},j.values=g,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(f),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return o.type="throw",o.arg=t,r.next=e,n&&(r.method="next",r.arg=y),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=m.call(i,"catchLoc"),u=m.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,P):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),P},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),f(r),P}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;f(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:g(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=y),P}}}(function(){return this}()||Function("return this")())},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function(){function t(e,r,i){n(this,t),this._pixelArry=e||[]}return i(t,[{key:"xyToIndex",value:function(t,e){var r=this._pixelArry,n=r.width,i=0;return i=n*(e-1)*4+4*(t-1),i<0||i>=r.data.length?(console.warn("超出图片像素索引范围"),-1):i}},{key:"get",value:function(t,e){var r=this._pixelArry,n=this.xyToIndex(t,e);return n>-1?{r:r.data[n],g:r.data[n+1],b:r.data[n+2],a:r.data[n+3]/255}:{r:-1,g:-1,b:-1,a:-1}}},{key:"set",value:function(t,e,r){var n=this._pixelArry,i=this.xyToIndex(t,e);return!(i<0)&&(n.data[i]=r.r,n.data[i+1]=r.g,n.data[i+2]=r.b,n.data[i+3]=parseInt(255*r.a||255),n)}},{key:"getAll",value:function(){return this._pixelArry}}]),t}();e.default=o},function(t,e,r){"use strict";var n,i,o=r(0),a=function(t){return t&&t.__esModule?t:{default:t}}(o);!function(o,a){void 0!==t&&t.exports;n=a,void 0!==(i="function"==typeof n?n.call(e,r,e,t):n)&&(t.exports=i),window&&(window.ImgToCanvas=a())}(0,function(){return a.default})}]);