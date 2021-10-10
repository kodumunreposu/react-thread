(()=>{"use strict";var e={};const t=Symbol("Comlink.proxy"),n=Symbol("Comlink.endpoint"),r=Symbol("Comlink.releaseProxy"),a=Symbol("Comlink.thrown"),s=e=>"object"==typeof e&&null!==e||"function"==typeof e,o=new Map([["proxy",{canHandle:e=>s(e)&&e[t],serialize(e){const{port1:t,port2:n}=new MessageChannel;return i(e,t),[n,[n]]},deserialize:e=>(e.start(),l(e,[],undefined))}],["throw",{canHandle:e=>s(e)&&a in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function i(e,n=self){n.addEventListener("message",(function r(s){if(!s||!s.data)return;const{id:o,type:u,path:l}=Object.assign({path:[]},s.data),p=(s.data.argumentList||[]).map(f);let h;try{const n=l.slice(0,-1).reduce(((e,t)=>e[t]),e),r=l.reduce(((e,t)=>e[t]),e);switch(u){case"GET":h=r;break;case"SET":n[l.slice(-1)[0]]=f(s.data.value),h=!0;break;case"APPLY":h=r.apply(n,p);break;case"CONSTRUCT":h=function(e){return Object.assign(e,{[t]:!0})}(new r(...p));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;i(e,n),h=function(e,t){return m.set(e,t),e}(t,[t])}break;case"RELEASE":h=void 0;break;default:return}}catch(e){h={value:e,[a]:0}}Promise.resolve(h).catch((e=>({value:e,[a]:0}))).then((e=>{const[t,a]=d(e);n.postMessage(Object.assign(Object.assign({},t),{id:o}),a),"RELEASE"===u&&(n.removeEventListener("message",r),c(n))}))})),n.start&&n.start()}function c(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function u(e){if(e)throw new Error("Proxy has been released and is not useable")}function l(e,t=[],a=function(){}){let s=!1;const o=new Proxy(a,{get(n,a){if(u(s),a===r)return()=>h(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{c(e),s=!0}));if("then"===a){if(0===t.length)return{then:()=>o};const n=h(e,{type:"GET",path:t.map((e=>e.toString()))}).then(f);return n.then.bind(n)}return l(e,[...t,a])},set(n,r,a){u(s);const[o,i]=d(a);return h(e,{type:"SET",path:[...t,r].map((e=>e.toString())),value:o},i).then(f)},apply(r,a,o){u(s);const i=t[t.length-1];if(i===n)return h(e,{type:"ENDPOINT"}).then(f);if("bind"===i)return l(e,t.slice(0,-1));const[c,m]=p(o);return h(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},m).then(f)},construct(n,r){u(s);const[a,o]=p(r);return h(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:a},o).then(f)}});return o}function p(e){const t=e.map(d);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const m=new WeakMap;function d(e){for(const[t,n]of o)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},m.get(e)||[]]}function f(e){switch(e.type){case"HANDLER":return o.get(e.name).deserialize(e.value);case"RAW":return e.value}}function h(e,t,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}i(Object.keys(e).reduce((function(t,n){return"__esModule"==n||(t[n]=e[n]),t}),{}))})();
//# sourceMappingURL=de3d0cd312969eb3d35b.worker.js.map