!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);const o=e=>{return`\n            <div class="form__request">\n                ${function(e){return e.map(e=>{let n=[];for(let t in e.values)Object.getOwnPropertyNames(t)&&n.push(e.values[t]);return`<div>\n            <h4>${e.name}</h4>\n            ${n.length?function(e){return`\n            <select>\n                <option value="" disabled selected>Selecione uma opção!</option>\n                ${e.map(e=>`\n            <option value="${e}">${e}</option>\n        `).join("")}\n            </select>\n        `}(n):function(e){return`\n            <textarea rows="3" placeholder="${e}"></textarea>\n        `}(e.placeholder)}\n        </div>`}).join("")}(e._embedded.request_fields)}\n            </div>\n        `};const r=()=>"\n            <h1>Explique o que você precisa</h1>\n            <h4>Peça orçamento grátis, online!</h4>\n        ";const u=document.getElementById("header"),i=document.getElementById("form");(async e=>{try{const n=await fetch(e),t=await n.json();!function(e){const n=r();e.innerHTML=n}(u),function(e,n){console.log(e);const t=o(e);n.innerHTML=t}(t,i)}catch(e){console.log("Erro ao pegar os dados da API!",e)}})("http://localhost:3000/")}]);