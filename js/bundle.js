!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13)},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){var n=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Показать все",r=document.querySelector(e),i=document.querySelector(t),c=i.querySelector(".expand-button__text"),s=i.querySelector(".expand-button__icon"),a=!1;c.textContent=o,r.style.maxHeight=n,i.addEventListener("click",(function(){a=!a,s.style.transform=a?"rotate(180deg)":"rotate(0deg)",c.textContent=a?"Скрыть":o,r.style.maxHeight=a?"".concat(r.scrollHeight,"px"):n}))};n(".main__text",".main__expand-button","65px","Читать далее"),n(".brands__wrapper",".block1-button","160px"),n(".devices__wrapper",".block2-button","160px")},function(e,t){var n,o=document.querySelector(".swiper.brands"),r=o.querySelector(".brands__wrapper"),i=document.querySelector(".swiper.devices"),c=i.querySelector(".devices__wrapper"),s=document.querySelector(".service"),a=s.querySelectorAll(".service__wrapper");function l(){window.innerWidth>768&&n?(console.log("---\x3e PC"),n instanceof Swiper&&(n.destroy(!0,!0),n=null),o.classList.add("brands"),i.classList.add("devices"),s.classList.add("service"),r.classList.add("brands__wrapper"),c.classList.add("devices__wrapper"),a.forEach((function(e){e.classList.add("service__wrapper")}))):window.innerWidth<=768&&!n&&(console.log("---\x3e Mobile"),n=new Swiper(".swiper",{spaceBetween:16,slidesPerView:"auto",grabCursor:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}}),console.log("Swiper initialized:",n),o.classList.remove("brands"),i.classList.remove("devices"),s.classList.remove("service"),r.classList.remove("brands__wrapper"),c.classList.remove("devices__wrapper"),a.forEach((function(e){e.classList.remove("service__wrapper")})))}l(),window.addEventListener("resize",l)},function(e,t){var n=document.querySelector("body"),o=document.querySelector(".aside"),r=document.querySelector(".aside-bg"),i=document.querySelector(".callback"),c=document.querySelector(".feedback"),s=document.querySelector(".header__button--icon--burger"),a=o.querySelector(".aside__button--icon--close");function l(){return o.classList.contains("modalOpen")}function d(){!l()||i.classList.contains("modalOpen")||c.classList.contains("modalOpen")||(o.classList.remove("modalOpen"),window.innerWidth<1440&&(n.style.overflow="scroll",r.classList.remove("bg-open"),setTimeout((function(){r.style.display="none"}),200)))}function u(){l()||(o.classList.add("modalOpen"),window.innerWidth<1440&&(n.style.overflow="hidden",r.style.display="block",setTimeout((function(){r.classList.add("bg-open")}),5)))}function p(){window.innerWidth>=1440?u():d()}s.addEventListener("click",u),a.addEventListener("click",d),r.addEventListener("click",d),document.addEventListener("keydown",(function(e){"Escape"===e.key&&d()})),setTimeout((function(){o.style.transition="transform 0.15s ease-in-out"}),50),p(),window.addEventListener("resize",p)},function(e,t){var n=document.querySelector(".modal-bg");function o(e,t,o){var r=document.querySelector(e),i=document.querySelector(t),c=i.querySelector(o);function s(){return i.classList.contains("modalOpen")}function a(){s()&&(i.classList.remove("modalOpen"),n.classList.remove("bg-open"),c.style.display="none",setTimeout((function(){n.style.display="none"}),200))}r.addEventListener("click",(function(){s()||(n.style.display="block",c.style.display="flex",i.classList.add("modalOpen"),setTimeout((function(){n.classList.add("bg-open")}),5))})),c.addEventListener("click",a),n.addEventListener("click",a),document.addEventListener("keydown",(function(e){"Escape"===e.key&&a()})),window.addEventListener("load",(function(){i.style.transition="transform 0.15s ease-in-out"}))}o(".aside__callback-button",".callback",".callback__button--close"),o(".aside__feedback-button",".feedback",".feedback__button--close")}]);
//# sourceMappingURL=bundle.js.map