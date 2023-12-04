"use strict";function _regeneratorRuntime(){_regeneratorRuntime=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,i=Object.create(a.prototype),c=new G(n||[]);return o(i,"_invoke",{value:k(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h="suspendedStart",p="suspendedYield",y="executing",d="completed",m={};function g(){}function v(){}function w(){}var b={};s(b,i,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(j([])));E&&E!==r&&n.call(E,i)&&(b=E);var _=w.prototype=g.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==_typeof(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function k(e,r,n){var o=h;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=l(e,r,n);if("normal"===s.type){if(o=n.done?d:p,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function T(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator["return"]&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=l(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function B(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function j(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(_typeof(e)+" is not iterable")}return v.prototype=w,o(_,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:v,configurable:!0}),v.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},L(S.prototype),s(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(_),s(_,u,"Generator"),s(_,i,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function o(){for(;r.length;){var t=r.pop();if(t in e)return o.value=t,o.done=!1,o}return o.done=!0,o}},e.values=j,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(B),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),B(r),m}},"catch":function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;B(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function asyncGeneratorStep(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){asyncGeneratorStep(a,n,o,i,c,"next",t)}function c(t){asyncGeneratorStep(a,n,o,i,c,"throw",t)}i(undefined)}))}}function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}!function(){var t=window.crypto||window.msCrypto,e=window.localStorage,r="hexo-blog-encrypt:#"+window.location.pathname,n=p("hexo-blog-encrypt的作者们都是大帅比!"),o=p("hexo-blog-encrypt是地表最强Hexo加密插件!"),a="<hbe-prefix></hbe-prefix>",i=document.getElementById("hexo-blog-encrypt"),c=i.dataset.wpm,u=i.dataset.whm,s=i.getElementsByTagName("script").hbeData,f=s.innerText,l=s.dataset.hmacdigest;function h(t){return new Uint8Array(t.match(/[\da-f]{2}/gi).map((function(t){return parseInt(t,16)})))}function p(t){for(var e=t.length,r=0,n=new Array,o=0;o<e;){var a=t.codePointAt(o);a<128?(n[r++]=a,o++):a>127&&a<2048?(n[r++]=a>>6|192,n[r++]=63&a|128,o++):a>2047&&a<65536?(n[r++]=a>>12|224,n[r++]=a>>6&63|128,n[r++]=63&a|128,o++):(n[r++]=a>>18|240,n[r++]=a>>12&63|128,n[r++]=a>>6&63|128,n[r++]=63&a|128,o+=2)}return new Uint8Array(n)}function y(t){if("object"!==_typeof(t)||null===t||"number"!=typeof t.byteLength)throw new TypeError("Expected input to be an ArrayBuffer");for(var e,r=new Uint8Array(t),n="",o=0;o<r.length;o++)n+=1===(e=r[o].toString(16)).length?"0"+e:e;return n}function d(t){return m.apply(this,arguments)}function m(){return(m=_asyncToGenerator(_regeneratorRuntime().mark((function t(e){var r;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.createElement("script"),["type","text","src","crossorigin","defer","referrerpolicy"].forEach((function(t){e[t]&&(r[t]=e[t])})),t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return v.apply(this,arguments)}function v(){return v=_asyncToGenerator(_regeneratorRuntime().mark((function t(e){var r;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=document.createElement("div")).innerHTML=e,r.querySelectorAll("script").forEach(function(){var t=_asyncToGenerator(_regeneratorRuntime().mark((function e(t){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,d(t);case 3:e.t1=e.sent,e.t0.replaceWith.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}function w(e){var r=new TextEncoder;return t.subtle.importKey("raw",r.encode(e),{name:"PBKDF2"},!1,["deriveKey","deriveBits"])}function b(e){return t.subtle.deriveKey({name:"PBKDF2",hash:"SHA-256",salt:n.buffer,iterations:1024},e,{name:"HMAC",hash:"SHA-256",length:256},!0,["verify"])}function x(e){return t.subtle.deriveKey({name:"PBKDF2",hash:"SHA-256",salt:n.buffer,iterations:1024},e,{name:"AES-CBC",length:256},!0,["decrypt"])}function E(e){return t.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:o.buffer,iterations:512},e,128)}function _(t,e){return L.apply(this,arguments)}function L(){return(L=_asyncToGenerator(_regeneratorRuntime().mark((function e(r,n){var o,a,i,c;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new TextEncoder,a=o.encode(n),i=h(l),e.next=5,t.subtle.verify({name:"HMAC",hash:"SHA-256"},r,i,a);case 5:return c=e.sent,console.log("Verification result: ".concat(c)),c||(alert(u),console.log("".concat(u,", got "),i," but proved wrong.")),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(t,e,r){return k.apply(this,arguments)}function k(){return k=_asyncToGenerator(_regeneratorRuntime().mark((function e(n,o,i){var u,s;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=h(f),e.next=3,t.subtle.decrypt({name:"AES-CBC",iv:o},n,u.buffer).then(function(){var t=_asyncToGenerator(_regeneratorRuntime().mark((function e(t){var n,o,c,u,s,f,l;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new TextDecoder,(o=n.decode(t)).startsWith(a)){e.next=4;break}throw"Decode successfully but not start with KnownPrefix.";case 4:return(c=document.createElement("button")).textContent="Encrypt again",c.type="button",c.classList.add("hbe-button"),c.addEventListener("click",(function(){window.localStorage.removeItem(r),window.location.reload()})),document.getElementById("hexo-blog-encrypt").style.display="inline",document.getElementById("hexo-blog-encrypt").innerHTML="",e.t0=document.getElementById("hexo-blog-encrypt"),e.next=14,g(o);case 14:if(e.t1=e.sent,e.t0.appendChild.call(e.t0,e.t1),document.getElementById("hexo-blog-encrypt").appendChild(c),document.querySelectorAll("img").forEach((function(t){t.getAttribute("data-src")&&!t.src&&(t.src=t.getAttribute("data-src"))})),window.NexT&&NexT.boot&&"function"==typeof NexT.boot.refresh&&NexT.boot.refresh(),(u=document.getElementById("toc-div"))&&(u.style.display="inline"),(s=document.getElementsByClassName("toc-div-class"))&&s.length>0)for(f=0;f<s.length;f++)s[f].style.display="inline";return l=new Event("hexo-blog-decrypt"),window.dispatchEvent(l),e.next=27,_(i,o);case 27:return e.abrupt("return",e.sent);case 28:case"end":return e.stop()}}),e)})));return function(e){return t.apply(this,arguments)}}())["catch"]((function(t){return alert(c),console.log(t),!1}));case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}!function(){var n=JSON.parse(e.getItem(r));if(n){console.log("Password got from localStorage(".concat(r,"): "),n);var o=h(n.iv).buffer,a=n.dk,c=n.hmk;t.subtle.importKey("jwk",a,{name:"AES-CBC",length:256},!0,["decrypt"]).then((function(n){t.subtle.importKey("jwk",c,{name:"HMAC",hash:"SHA-256",length:256},!0,["verify"]).then((function(t){S(n,o,t).then((function(t){t||e.removeItem(r)}))}))}))}i.addEventListener("keydown",function(){var n=_asyncToGenerator(_regeneratorRuntime().mark((function o(n){var a,i,c,u,s;return _regeneratorRuntime().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!n.isComposing&&13!==n.keyCode){o.next=15;break}return a=document.getElementById("hbePass").value,o.next=4,w(a);case 4:return i=o.sent,o.next=7,b(i);case 7:return c=o.sent,o.next=10,x(i);case 10:return u=o.sent,o.next=13,E(i);case 13:s=o.sent,S(u,s,c).then((function(n){console.log("Decrypt result: ".concat(n)),n&&t.subtle.exportKey("jwk",u).then((function(n){t.subtle.exportKey("jwk",c).then((function(t){var o={dk:n,iv:y(s),hmk:t};e.setItem(r,JSON.stringify(o))}))}))}));case 15:case"end":return o.stop()}}),o)})));return function(t){return n.apply(this,arguments)}}())}()}();
//# sourceMappingURL=../maps/lib/hbe.js.map
