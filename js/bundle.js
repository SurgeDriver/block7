!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14)},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){var n=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Показать все",r=document.querySelector(e),c=document.querySelector(t),i=c.querySelector(".expand-button__text"),s=c.querySelector(".expand-button__icon"),a=!1;i.textContent=o,c.addEventListener("click",(function(){a=!a,s.style.transform=a?"rotate(180deg)":"rotate(0deg)",i.textContent=a?"Скрыть":o,r.style.maxHeight=a?"".concat(r.scrollHeight,"px"):n}))};n(".main__text",".main__expand-button","65px","Читать далее"),n(".brands__wrapper",".brands-button","160px"),n(".devices__wrapper",".devices-button","160px")},function(e,t){var n,o=document.querySelector(".brands"),r=document.querySelector(".devices"),c=document.querySelector(".service"),i=o.querySelector(".brands__wrapper"),s=r.querySelector(".devices__wrapper"),a=c.querySelectorAll(".service__wrapper");function d(){window.innerWidth>768&&n?(n.forEach((function(e){e.destroy(!0,!0),e=null})),n=null,o.classList.add("brands"),r.classList.add("devices"),c.classList.add("service"),i.classList.add("brands__wrapper"),s.classList.add("devices__wrapper"),a.forEach((function(e){e.classList.add("service__wrapper")}))):window.innerWidth<=768&&!n&&(n=new Swiper(".swiper",{spaceBetween:16,slidesPerView:"auto",grabCursor:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}}),o.classList.remove("brands"),r.classList.remove("devices"),c.classList.remove("service"),i.classList.remove("brands__wrapper"),s.classList.remove("devices__wrapper"),a.forEach((function(e){e.classList.remove("service__wrapper")})))}d(),window.addEventListener("resize",d)},function(e,t){var n=document.querySelector("body"),o=document.querySelector(".aside"),r=document.querySelector(".aside-bg"),c=document.querySelector(".callback"),i=document.querySelector(".feedback"),s=document.querySelector(".header__button--icon--burger"),a=o.querySelector(".aside__button--icon--close");function d(){return o.classList.contains("modalOpen")}function l(){!d()||c.classList.contains("modalOpen")||i.classList.contains("modalOpen")||(o.classList.remove("modalOpen"),window.innerWidth<1440&&(n.style.overflow="scroll",r.classList.remove("bg-open"),setTimeout((function(){r.style.display="none"}),200)))}function u(){d()||(o.classList.add("modalOpen"),window.innerWidth<1440&&(n.style.overflow="hidden",r.style.display="block",setTimeout((function(){r.classList.add("bg-open")}),5)))}function f(){window.innerWidth>=1440?u():l()}s.addEventListener("click",u),a.addEventListener("click",l),r.addEventListener("click",l),document.addEventListener("keydown",(function(e){"Escape"===e.key&&l()})),setTimeout((function(){o.style.transition="transform 0.15s ease-in-out"}),50),f(),window.addEventListener("resize",f)},function(e,t){var n=document.querySelector(".modal-bg");function o(e,t,o){var r=document.querySelectorAll(e),c=document.querySelector(t),i=c.querySelector(o);function s(){return c.classList.contains("modalOpen")}function a(){s()&&(c.classList.remove("modalOpen"),n.classList.remove("bg-open"),i.style.display="none",setTimeout((function(){n.style.display="none"}),200))}function d(){s()||(n.style.display="block",i.style.display="flex",c.classList.add("modalOpen"),setTimeout((function(){n.classList.add("bg-open")}),5))}r.forEach((function(e){e.addEventListener("click",d)})),i.addEventListener("click",a),n.addEventListener("click",a),document.addEventListener("keydown",(function(e){"Escape"===e.key&&a()})),window.addEventListener("load",(function(){c.style.transition="transform 0.15s ease-in-out"}))}o(".aside__callback-button, .header__button--icon--callback",".callback",".callback__button--close"),o(".aside__feedback-button, .header__button--icon--feedback",".feedback",".feedback__button--close")}]);
//# sourceMappingURL=bundle.js.map