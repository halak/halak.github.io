!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=new Map,o=new Map;function c(e){var t;const n=null!==(t=e.dataset.src)&&void 0!==t?t:"",c=r.get(n);if(void 0!==c){const t=new c(e);o.set(e,t),t.start()}}function u(e,t){e.filter(e=>e.isIntersecting).forEach(e=>{const n=e.target;c(n),t.unobserve(n)})}t.register=function(e){return function(t){r.set(e,t)}},t.configureCanvases=function(){const e=document.querySelectorAll("canvas[data-src]");if(0===e.length)return;const t=window.IntersectionObserver?new window.IntersectionObserver(u,{}):null;null!==t?e.forEach(e=>t.observe(e)):e.forEach(e=>c(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(2);const r=n(0);document.addEventListener("DOMContentLoaded",()=>r.configureCanvases())},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,c=arguments.length,u=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(c<3?o(u):c>3?o(t,n,u):o(t,n))||u);return c>3&&u&&Object.defineProperty(t,n,u),u};Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);let c=class{constructor(e){const t=e.getContext("2d");t.fillStyle="rgb(200,0,0)",t.fillRect(10,10,50,50)}start(){}stop(){}};c=r([o.register("hello")],c),t.Hello=c}]);
//# sourceMappingURL=main.js.map