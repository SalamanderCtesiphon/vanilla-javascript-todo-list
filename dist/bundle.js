(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(541),t.b),l=i()(o()),p=s()(d);l.push([e.id,'@font-face {\n  font-family: "MyFont";\n  src: url('+p+");\n  font-weight: 600;\n  font-style: normal;\n  letter-spacing: 3rem;\n}\n\n\n* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'MyFont';\n}\n\n.projectHeader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  color: white;\n  height: 6vh;\n  width: 100vw;\n}\n\n.pageView {\n  height: 88vh;\n  width: 100vw;\n  display: flex;\n}\n\n.side-bar {\n  background-color: rgba(128, 128, 128, 0.638);\n  height: 88vh;\n  width: 20vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 10vh;\n}\n\n.newProjBtn {\n  border: 1px solid black;\n  border-radius: 1vh;\n  width: 10vw;\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  color: white;\n  cursor: pointer;\n}\n\n.newProjForm {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 20vh;\n  width: auto;\n}\n\n.display {\n  width: 80vw;\n  padding: 5vh;\n  display: flex;\n}\n\n.projectDiv {\n  border: 1px solid black;\n  width: 10vw;\n  height: 20vh;\n  margin: 5vh;\n}\n\n.projectFooter {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  color: white;\n  height: 6vh;\n  width: 100vw;\n}\n\n.footer-link {\n  cursor: pointer;\n  text-decoration: none;\n  color: white;\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=o(h,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},541:(e,n,t)=>{e.exports=t.p+"ec7b3653f4b64c1ea8e3.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),h=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=[],v=document.getElementById("content"),g=document.createElement("h1");g.textContent="Project Manager",g.classList.add("projectHeader");const y=document.createElement("div");y.classList.add("pageView");const w=document.createElement("div");w.classList.add("display");const b=document.createElement("div");b.classList.add("side-bar");const x=document.createElement("div");x.classList.add("newProjBtn"),x.textContent="Add a new project",x.addEventListener("click",(()=>{const e=document.querySelector(".newProjBtn");e.style.display="none";const n=document.createElement("form"),t=document.querySelector(".side-bar"),r=document.createElement("label"),o=document.createElement("input"),a=document.createElement("button");a.classList.add("newProjBtn"),a.addEventListener("click",(t=>{t.preventDefault(),e.style.display="flex",n.style.display="none";const r={title:o.value,description:void 0,dueDate:void 0,priority:void 0};m.push(r);const a=document.querySelector(".display"),i=document.createElement("div");i.classList.add("projectDiv");const c=document.createElement("h3"),s=document.createElement("button");m.forEach((e=>{c.textContent=`${e.title}`,s.addEventListener("click",(e=>{console.log(e)})),s.classList.add("newProjBtn"),s.textContent="add todos",i.appendChild(c),i.appendChild(s),a.appendChild(i)}))})),n.classList.add("newProjForm"),r.textContent="New Project Title:",a.textContent="Submit",n.appendChild(r),n.appendChild(o),n.appendChild(a),t.appendChild(n)})),b.appendChild(x);const j=document.createElement("div");j.classList.add("projectFooter");const C=(new Date).getFullYear();j.innerHTML=`<a href="https://github.com/SalamanderCtesiphon" class="footer-link">\n<h5>Seamus Quixote  &#169;  <a href="https://www.theodinproject.com/" class="footer-link"> The Odin Project</a>  <span id="currentYear">${C}</span> </h5>\n</a>`,j.classList.add("footer-link"),y.appendChild(b),y.appendChild(w),v.appendChild(g),v.appendChild(y),v.appendChild(j)})()})();