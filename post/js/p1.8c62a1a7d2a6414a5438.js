(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"})();const t=e.p+"images/lazy.png";!async function(){const e=document.createElement("h2");e.innerHTML="This elements was created by js";const r=await(n=t,new Promise(((e,t)=>{const r=new Image;r.onload=()=>e(r),r.onerror=t,r.src=n})));var n;document.body.appendChild(e),document.body.appendChild(r)}()})();