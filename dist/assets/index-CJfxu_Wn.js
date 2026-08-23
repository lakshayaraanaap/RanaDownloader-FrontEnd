import{j as n,m as b,A as be}from"./animations-C2rKW8Fq.js";import{a as Zt,r as f,u as Pe,L as H,N as Fe,b as Oe,O as Qn,c as Zn,d as en,B as es,R as ts,e as B}from"./vendor-DFYEOl59.js";import{D as ue,S as ns,M as tn,H as ss,U as Ee,L as rs,X as nn,a as as,T as sn,F as rn,I as an,G as is,C as os,b as ls,A as cs,B as ds,c as us,V as on,d as ps,e as ms,f as hs,P as fs,g as xs,h as gs,i as ys,j as bs,k as ln,l as ws,m as vs,n as js,o as Ns,Y as Ss,p as cn,q as dn,Q as Rs,r as un,s as Ae,t as pn,u as ks,v as mn,w as Ve,Z as mt,x as Es,y as hn,z as Ts,E as Ps,J as ot,K as Os,N as As,O as fn,R as xn,W as gn,_ as ve,$ as te,a0 as We,a1 as Ge,a2 as ht,a3 as Cs,a4 as lt,a5 as Ds,a6 as zs,a7 as _s,a8 as Ls,a9 as Fs,aa as Is,ab as Us}from"./ui-DEjIErFX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();var yn,Pt=Zt;yn=Pt.createRoot,Pt.hydrateRoot;const bn=f.createContext();function qs({children:e}){const[t,s]=f.useState(()=>typeof window<"u"&&localStorage.getItem("rana-theme")||"dark");f.useEffect(()=>{document.documentElement.setAttribute("data-bs-theme",t),document.documentElement.classList.toggle("light-theme",t==="light"),localStorage.setItem("rana-theme",t)},[t]);const r=()=>s(a=>a==="dark"?"light":"dark");return n.jsx(bn.Provider,{value:{theme:t,toggleTheme:r},children:e})}const Bs=()=>f.useContext(bn),wn=f.createContext();let Ms=0;function Hs({children:e}){const[t,s]=f.useState([]),r=f.useCallback((o,d="info",m=3e3)=>{const u=++Ms;s(p=>[...p,{id:u,message:o,type:d}]),setTimeout(()=>{s(p=>p.filter(y=>y.id!==u))},m)},[]),a=f.useCallback(o=>{s(d=>d.filter(m=>m.id!==o))},[]),i=f.useMemo(()=>({success:o=>r(o,"success"),error:o=>r(o,"error"),info:o=>r(o,"info"),warning:o=>r(o,"warning")}),[r]),l=Zt.createPortal(n.jsx("div",{className:"toast-container-wrapper","aria-live":"polite",children:t.map(o=>n.jsxs("div",{className:`toast-notification toast-${o.type}`,onClick:()=>a(o.id),role:"alert",children:[n.jsxs("span",{className:"toast-icon",children:[o.type==="success"&&"✓",o.type==="error"&&"✕",o.type==="warning"&&"⚠",o.type==="info"&&"ℹ"]}),n.jsx("span",{className:"toast-message",children:o.message})]},o.id))}),document.body);return n.jsxs(wn.Provider,{value:i,children:[e,l]})}const ie=()=>f.useContext(wn);function vn(e,t){return function(){return e.apply(t,arguments)}}const{toString:$s}=Object.prototype,{getPrototypeOf:we}=Object,{iterator:Ce,toStringTag:jn}=Symbol,Me=(({hasOwnProperty:e})=>(t,s)=>e.call(t,s))(Object.prototype),Te=(e,t)=>{let s=e;const r=[];for(;s!=null&&s!==Object.prototype;){if(r.indexOf(s)!==-1)return!1;if(r.push(s),Me(s,t))return!0;s=we(s)}return!1},Vs=(e,t)=>e!=null&&Te(e,t)?e[t]:void 0,ft=(e=>t=>{const s=$s.call(t);return e[s]||(e[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),J=e=>(e=e.toLowerCase(),t=>ft(t)===e),Ke=e=>t=>typeof t===e,{isArray:me}=Array,he=Ke("undefined");function je(e){return e!==null&&!he(e)&&e.constructor!==null&&!he(e.constructor)&&M(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Nn=J("ArrayBuffer");function Ws(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Nn(e.buffer),t}const Gs=Ke("string"),M=Ke("function"),Sn=Ke("number"),Ne=e=>e!==null&&typeof e=="object",Ks=e=>e===!0||e===!1,Ue=e=>{if(!Ne(e))return!1;const t=we(e);return(t===null||t===Object.prototype||we(t)===null)&&!Te(e,jn)&&!Te(e,Ce)},Js=e=>{if(!Ne(e)||je(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Xs=J("Date"),Ys=J("File"),Qs=e=>!!(e&&typeof e.uri<"u"),Zs=e=>e&&typeof e.getParts<"u",er=J("Blob"),tr=J("FileList"),nr=J("Set"),sr=e=>Ne(e)&&M(e.pipe);function rr(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Ot=rr(),At=typeof Ot.FormData<"u"?Ot.FormData:void 0,ar=e=>{if(!e)return!1;if(At&&e instanceof At)return!0;const t=we(e);if(!t||t===Object.prototype||!M(e.append))return!1;const s=ft(e);return s==="formdata"||s==="object"&&M(e.toString)&&e.toString()==="[object FormData]"},ir=J("URLSearchParams"),[or,lr,cr,dr]=["ReadableStream","Request","Response","Headers"].map(J),ur=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function De(e,t,{allOwnKeys:s=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),me(e))for(r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else{if(je(e))return;const i=s?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let o;for(r=0;r<l;r++)o=i[r],t.call(null,e[o],o,e)}}function Rn(e,t){if(je(e))return null;t=t.toLowerCase();const s=Object.keys(e);let r=s.length,a;for(;r-- >0;)if(a=s[r],t===a.toLowerCase())return a;return null}const de=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kn=e=>!he(e)&&e!==de;function ct(...e){const{caseless:t,skipUndefined:s}=kn(this)&&this||{},r={},a=(i,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;const o=t&&typeof l=="string"&&Rn(r,l)||l,d=Me(r,o)?r[o]:void 0;Ue(d)&&Ue(i)?r[o]=ct(d,i):Ue(i)?r[o]=ct({},i):me(i)?r[o]=i.slice():(!s||!he(i))&&(r[o]=i)};for(let i=0,l=e.length;i<l;i++){const o=e[i];if(!o||je(o)||(De(o,a),typeof o!="object"||me(o)))continue;const d=Object.getOwnPropertySymbols(o);for(let m=0;m<d.length;m++){const u=d[m];Nr.call(o,u)&&a(o[u],u)}}return r}const pr=(e,t,s,{allOwnKeys:r}={})=>(De(t,(a,i)=>{s&&M(a)?Object.defineProperty(e,i,{__proto__:null,value:vn(a,s),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{__proto__:null,value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),mr=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),hr=(e,t,s,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),s&&Object.assign(e.prototype,s)},fr=(e,t,s,r)=>{let a,i,l;const o={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)l=a[i],(!r||r(l,e,t))&&!o[l]&&(t[l]=e[l],o[l]=!0);e=s!==!1&&we(e)}while(e&&(!s||s(e,t))&&e!==Object.prototype);return t},xr=(e,t,s)=>{e=String(e),(s===void 0||s>e.length)&&(s=e.length),s-=t.length;const r=e.indexOf(t,s);return r!==-1&&r===s},gr=e=>{if(!e)return null;if(me(e))return e;let t=e.length;if(!Sn(t))return null;const s=new Array(t);for(;t-- >0;)s[t]=e[t];return s},yr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&we(Uint8Array)),br=(e,t)=>{const r=(e&&e[Ce]).call(e);let a;for(;(a=r.next())&&!a.done;){const i=a.value;t.call(e,i[0],i[1])}},wr=(e,t)=>{let s;const r=[];for(;(s=e.exec(t))!==null;)r.push(s);return r},vr=J("HTMLFormElement"),jr=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,r,a){return r.toUpperCase()+a}),{propertyIsEnumerable:Nr}=Object.prototype,Sr=J("RegExp"),En=(e,t)=>{const s=Object.getOwnPropertyDescriptors(e),r={};De(s,(a,i)=>{let l;(l=t(a,i,e))!==!1&&(r[i]=l||a)}),Object.defineProperties(e,r)},Rr=e=>{En(e,(t,s)=>{if(M(e)&&["arguments","caller","callee"].includes(s))return!1;const r=e[s];if(M(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},kr=(e,t)=>{const s={},r=a=>{a.forEach(i=>{s[i]=!0})};return me(e)?r(e):r(String(e).split(t)),s},Er=()=>{},Tr=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Pr(e){return!!(e&&M(e.append)&&e[jn]==="FormData"&&e[Ce])}const Or=e=>{const t=new WeakSet,s=r=>{if(Ne(r)){if(t.has(r))return;if(je(r))return r;if(!("toJSON"in r)){t.add(r);let a;if(nr(r)){a=[];for(const i of r){const l=s(i);!he(l)&&a.push(l)}}else a=me(r)?[]:{},De(r,(i,l)=>{const o=s(i);!he(o)&&(a[l]=o)});return t.delete(r),a}}return r};return s(e)},Ar=J("AsyncFunction"),Cr=e=>e&&(Ne(e)||M(e))&&M(e.then)&&M(e.catch),Tn=((e,t)=>e?setImmediate:t?((s,r)=>(de.addEventListener("message",({source:a,data:i})=>{a===de&&i===s&&r.length&&r.shift()()},!1),a=>{r.push(a),de.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",M(de.postMessage)),Dr=typeof queueMicrotask<"u"?queueMicrotask.bind(de):typeof process<"u"&&process.nextTick||Tn,Pn=e=>e!=null&&M(e[Ce]),zr=e=>e!=null&&Te(e,Ce)&&Pn(e),c={isArray:me,isArrayBuffer:Nn,isBuffer:je,isFormData:ar,isArrayBufferView:Ws,isString:Gs,isNumber:Sn,isBoolean:Ks,isObject:Ne,isPlainObject:Ue,isEmptyObject:Js,isReadableStream:or,isRequest:lr,isResponse:cr,isHeaders:dr,isUndefined:he,isDate:Xs,isFile:Ys,isReactNativeBlob:Qs,isReactNative:Zs,isBlob:er,isRegExp:Sr,isFunction:M,isStream:sr,isURLSearchParams:ir,isTypedArray:yr,isFileList:tr,forEach:De,merge:ct,extend:pr,trim:ur,stripBOM:mr,inherits:hr,toFlatObject:fr,kindOf:ft,kindOfTest:J,endsWith:xr,toArray:gr,forEachEntry:br,matchAll:wr,isHTMLForm:vr,hasOwnProperty:Me,hasOwnProp:Me,hasOwnInPrototypeChain:Te,getSafeProp:Vs,reduceDescriptors:En,freezeMethods:Rr,toObjectSet:kr,toCamelCase:jr,noop:Er,toFiniteNumber:Tr,findKey:Rn,global:de,isContextDefined:kn,isSpecCompliantForm:Pr,toJSONObject:Or,isAsyncFn:Ar,isThenable:Cr,setImmediate:Tn,asap:Dr,isIterable:Pn,isSafeIterable:zr},_r=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Lr=e=>{const t={};let s,r,a;return e&&e.split(`
`).forEach(function(l){a=l.indexOf(":"),s=l.substring(0,a).trim().toLowerCase(),r=l.substring(a+1).trim();const o=c.hasOwnProp(t,s);!s||o&&c.hasOwnProp(_r,s)||(s==="set-cookie"?o?t[s].push(r):t[s]=[r]:t[s]=o?t[s]+", "+r:r)}),t};function Fr(e){let t=0,s=e.length;for(;t<s;){const r=e.charCodeAt(t);if(r!==9&&r!==32)break;t+=1}for(;s>t;){const r=e.charCodeAt(s-1);if(r!==9&&r!==32)break;s-=1}return t===0&&s===e.length?e:e.slice(t,s)}const Ir=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Ur=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function xt(e,t){return c.isArray(e)?e.map(s=>xt(s,t)):Fr(String(e).replace(t,""))}const qr=e=>xt(e,Ir),Br=e=>xt(e,Ur);function On(e){const t=Object.create(null);return c.forEach(e.toJSON(),(s,r)=>{t[r]=Br(s)}),t}const Ct=Symbol("internals");function ke(e){return e&&String(e).trim().toLowerCase()}function qe(e){return e===!1||e==null?e:c.isArray(e)?e.map(qe):qr(String(e))}function Mr(e){const t=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=s.exec(e);)t[r[1]]=r[2];return t}const Hr=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Ze(e){let t=0,s=e.length;for(;t<s;){const r=e.charCodeAt(t);if(r!==9&&r!==32)break;t+=1}for(;s>t;){const r=e.charCodeAt(s-1);if(r!==9&&r!==32)break;s-=1}return t===0&&s===e.length?e:e.slice(t,s)}function $r(e){const t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let s="";for(let r=1;r<t;r++){const a=e.charCodeAt(r);if(a===34||a===92&&(r+=1,r>=t))return e;s+=e[r]}return s}function Vr(e){const t=Object.create(null),s=String(e);let r=0,a=!1,i=!1;function l(o){const d=Ze(s.slice(r,o)),m=d.indexOf("=");if(m<1)return;const u=Ze(d.slice(0,m));if(!Hr.test(u))return;const p=u.toLowerCase();if(p==="__proto__"||p==="constructor"||p==="prototype")return;const y=Ze(d.slice(m+1));t[p]=$r(y)}for(let o=0;o<s.length;o++){const d=s.charCodeAt(o);a?i?i=!1:d===92?i=!0:d===34&&(a=!1):d===34?a=!0:(d===44||d===59)&&(l(o),r=o+1)}return l(s.length),t}const Wr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function et(e,t,s,r,a){if(c.isFunction(r))return r.call(this,t,s);if(a&&(t=s),!!c.isString(t)){if(c.isString(r))return t.indexOf(r)!==-1;if(c.isRegExp(r))return r.test(t)}}function Gr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,s,r)=>s.toUpperCase()+r)}function Kr(e,t){const s=c.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+s,{__proto__:null,value:function(a,i,l){return this[r].call(this,t,a,i,l)},configurable:!0})})}let q=class{constructor(t){t&&this.set(t)}set(t,s,r){const a=this;function i(o,d,m){const u=ke(d);if(!u)return;const p=c.findKey(a,u);(!p||a[p]===void 0||m===!0||m===void 0&&a[p]!==!1)&&(a[p||d]=qe(o))}const l=(o,d)=>c.forEach(o,(m,u)=>i(m,u,d));if(c.isPlainObject(t)||t instanceof this.constructor)l(t,s);else if(c.isString(t)&&(t=t.trim())&&!Wr(t))l(Lr(t),s);else if(c.isObject(t)&&c.isSafeIterable(t)){let o=Object.create(null),d,m;for(const u of t){if(!c.isArray(u))throw new TypeError("Object iterator must return a key-value pair");m=u[0],c.hasOwnProp(o,m)?(d=o[m],o[m]=c.isArray(d)?[...d,u[1]]:[d,u[1]]):o[m]=u[1]}l(o,s)}else t!=null&&i(s,t,r);return this}get(t,s){if(t=ke(t),t){const r=c.findKey(this,t);if(r){const a=this[r];if(!s)return a;if(s===!0)return Mr(a);if(c.isFunction(s))return s.call(this,a,r);if(c.isRegExp(s))return s.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,s){if(t=ke(t),t){const r=c.findKey(this,t);return!!(r&&this[r]!==void 0&&(!s||et(this,this[r],r,s)))}return!1}delete(t,s){const r=this;let a=!1;function i(l){if(l=ke(l),l){const o=c.findKey(r,l);o&&(!s||et(r,r[o],o,s))&&(delete r[o],a=!0)}}return c.isArray(t)?t.forEach(i):i(t),a}clear(t){const s=Object.keys(this);let r=s.length,a=!1;for(;r--;){const i=s[r];(!t||et(this,this[i],i,t,!0))&&(delete this[i],a=!0)}return a}normalize(t){const s=this,r={};return c.forEach(this,(a,i)=>{const l=c.findKey(r,i);if(l){s[l]=qe(a),delete s[i];return}const o=t?Gr(i):String(i).trim();o!==i&&delete s[i],s[o]=qe(a),r[o]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const s=Object.create(null);return c.forEach(this,(r,a)=>{r!=null&&r!==!1&&(s[a]=t&&c.isArray(r)?r.join(", "):r)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,s])=>t+": "+s).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return c.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return Vr(t)}static concat(t,...s){const r=new this(t);return s.forEach(a=>r.set(a)),r}static accessor(t){const r=(this[Ct]=this[Ct]={accessors:{}}).accessors,a=this.prototype;function i(l){const o=ke(l);r[o]||(Kr(a,l),r[o]=!0)}return c.isArray(t)?t.forEach(i):i(t),this}};q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.reduceDescriptors(q.prototype,({value:e},t)=>{let s=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[s]=r}}});c.freezeMethods(q);const He="[REDACTED ****]";function Jr(e){if(c.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(c.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function Xr(e,t){const s=new Set(t.map(i=>String(i).toLowerCase())),r=[],a=i=>{if(i===null||typeof i!="object"||c.isBuffer(i))return i;if(r.indexOf(i)!==-1)return;i instanceof q&&(i=i.toJSON()),r.push(i);let l;if(c.isArray(i))l=[],i.forEach((o,d)=>{const m=a(o);c.isUndefined(m)||(l[d]=m)});else{if(!c.isPlainObject(i)&&Jr(i))return r.pop(),i;l=Object.create(null);for(const[o,d]of Object.entries(i)){const m=s.has(o.toLowerCase())?He:a(d);c.isUndefined(m)||(l[o]=m)}}return r.pop(),l};return a(e)}function Dt(e){try{return String(e)}catch{return""}}function Yr(e){return e.errors.map(s=>{try{return s&&s.message?Dt(s.message):Dt(s)}catch{return""}}).filter(Boolean).join("; ")||e.name||"AggregateError"}let x=class An extends Error{static from(t,s,r,a,i,l){let o=t.message;!o&&c.isArray(t.errors)&&t.errors.length&&(o=Yr(t));const d=new An(o,s||t.code,r,a,i);return Object.defineProperty(d,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),d.name=t.name,t.status!=null&&d.status==null&&(d.status=t.status),l&&Object.assign(d,l),d}constructor(t,s,r,a,i){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,s&&(this.code=s),r&&(this.config=r),a&&(this.request=a),i&&(this.response=i,this.status=i.status)}toJSON(){const t=this.config,s=t&&c.hasOwnProp(t,"redact")?t.redact:void 0,r=c.isArray(s)&&s.length>0?Xr(t,s):c.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};x.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";x.ERR_BAD_OPTION="ERR_BAD_OPTION";x.ECONNABORTED="ECONNABORTED";x.ETIMEDOUT="ETIMEDOUT";x.ECONNREFUSED="ECONNREFUSED";x.ERR_NETWORK="ERR_NETWORK";x.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";x.ERR_DEPRECATED="ERR_DEPRECATED";x.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";x.ERR_BAD_REQUEST="ERR_BAD_REQUEST";x.ERR_CANCELED="ERR_CANCELED";x.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";x.ERR_INVALID_URL="ERR_INVALID_URL";x.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Qr=null,Cn=100;function dt(e){return c.isPlainObject(e)||c.isArray(e)}function Dn(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function tt(e,t,s){return e?e.concat(t).map(function(a,i){return a=Dn(a),!s&&i?"["+a+"]":a}).join(s?".":""):t}function Zr(e){return c.isArray(e)&&!e.some(dt)}const ea=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function Je(e,t,s){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,s=c.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(j,S){return!c.isUndefined(S[j])});const r=s.metaTokens,a=s.visitor||N,i=s.dots,l=s.indexes,o=s.Blob||typeof Blob<"u"&&Blob,d=s.maxDepth===void 0?Cn:s.maxDepth,m=o&&c.isSpecCompliantForm(t),u=[];if(!c.isFunction(a))throw new TypeError("visitor must be a function");function p(h){if(h===null)return"";if(c.isDate(h))return h.toISOString();if(c.isBoolean(h))return h.toString();if(!m&&c.isBlob(h))throw new x("Blob is not supported. Use a Buffer instead.");if(c.isArrayBuffer(h)||c.isTypedArray(h)){if(m&&typeof o=="function")return new o([h]);throw new x("Blob is not supported. Use a Buffer instead.",x.ERR_NOT_SUPPORT)}return h}function y(h){if(h>d)throw new x("Object is too deeply nested ("+h+" levels). Max depth: "+d,x.ERR_FORM_DATA_DEPTH_EXCEEDED)}function w(h,j){if(d===1/0)return JSON.stringify(h);const S=[];return JSON.stringify(h,function(_,O){if(!c.isObject(O))return O;for(;S.length&&S[S.length-1]!==this;)S.pop();return S.push(O),y(j+S.length-1),O})}function N(h,j,S){let k=h;if(c.isReactNative(t)&&c.isReactNativeBlob(h))return t.append(tt(S,j,i),p(h)),!1;if(h&&!S&&typeof h=="object"){if(c.endsWith(j,"{}"))j=r?j:j.slice(0,-2),h=w(h,1);else if(c.isArray(h)&&Zr(h)||(c.isFileList(h)||c.endsWith(j,"[]"))&&(k=c.toArray(h)))return j=Dn(j),k.forEach(function(O,A){!(c.isUndefined(O)||O===null)&&t.append(l===!0?tt([j],A,i):l===null?j:j+"[]",p(O))}),!1}return dt(h)?!0:(t.append(tt(S,j,i),p(h)),!1)}const v=Object.assign(ea,{defaultVisitor:N,convertValue:p,isVisitable:dt});function g(h,j,S=0){if(!c.isUndefined(h)){if(y(S),u.indexOf(h)!==-1)throw new Error("Circular reference detected in "+j.join("."));u.push(h),c.forEach(h,function(_,O){(!(c.isUndefined(_)||_===null)&&a.call(t,_,c.isString(O)?O.trim():O,j,v))===!0&&g(_,j?j.concat(O):[O],S+1)}),u.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return g(e),t}function zt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(r){return t[r]})}function gt(e,t){this._pairs=[],e&&Je(e,this,t)}const zn=gt.prototype;zn.append=function(t,s){this._pairs.push([t,s])};zn.toString=function(t){const s=t?r=>t.call(this,r,zt):zt;return this._pairs.map(function(a){return s(a[0])+"="+s(a[1])},"").join("&")};function ta(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function _n(e,t,s){if(!t)return e;e=e||"";const r=c.isFunction(s)?{serialize:s}:s,a=c.getSafeProp(r,"encode")||ta,i=c.getSafeProp(r,"serialize");let l;if(i?l=i(t,r):l=c.isURLSearchParams(t)?t.toString():new gt(t,r).toString(a),l){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+l}return e}class _t{constructor(){this.handlers=[]}use(t,s,r){return this.handlers.push({fulfilled:t,rejected:s,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(r){r!==null&&t(r)})}}const yt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},na=typeof URLSearchParams<"u"?URLSearchParams:gt,sa=typeof FormData<"u"?FormData:null,ra=typeof Blob<"u"?Blob:null,aa={isBrowser:!0,classes:{URLSearchParams:na,FormData:sa,Blob:ra},protocols:["http","https","file","blob","url","data"]},bt=typeof window<"u"&&typeof document<"u",ut=typeof navigator=="object"&&navigator||void 0,ia=bt&&(!ut||["ReactNative","NativeScript","NS"].indexOf(ut.product)<0),oa=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",la=bt&&window.location.href||"http://localhost",ca=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:bt,hasStandardBrowserEnv:ia,hasStandardBrowserWebWorkerEnv:oa,navigator:ut,origin:la},Symbol.toStringTag,{value:"Module"})),I={...ca,...aa};function da(e,t){return Je(e,new I.classes.URLSearchParams,{visitor:function(s,r,a,i){return I.isNode&&c.isBuffer(s)?(this.append(r,s.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}const Lt=Cn;function Ln(e){if(e>Lt)throw new x("FormData field is too deeply nested ("+e+" levels). Max depth: "+Lt,x.ERR_FORM_DATA_DEPTH_EXCEEDED)}function ua(e){const t=[],s=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=s.exec(e))!==null;)Ln(t.length),t.push(r[0]==="[]"?"":r[1]||r[0]);return t}function pa(e){const t={},s=Object.keys(e);let r;const a=s.length;let i;for(r=0;r<a;r++)i=s[r],t[i]=e[i];return t}function Fn(e){function t(s,r,a,i){Ln(i);let l=s[i++];if(l==="__proto__")return!0;const o=Number.isFinite(+l),d=i>=s.length;return l=!l&&c.isArray(a)?a.length:l,d?(c.hasOwnProp(a,l)?a[l]=c.isArray(a[l])?a[l].concat(r):[a[l],r]:a[l]=r,!o):((!c.hasOwnProp(a,l)||!c.isObject(a[l]))&&(a[l]=[]),t(s,r,a[l],i)&&c.isArray(a[l])&&(a[l]=pa(a[l])),!o)}if(c.isFormData(e)&&c.isFunction(e.entries)){const s={};return c.forEachEntry(e,(r,a)=>{t(ua(r),a,s,0)}),s}return null}const ye=(e,t)=>e!=null&&c.hasOwnProp(e,t)?e[t]:void 0;function ma(e,t,s){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(s||JSON.stringify)(e)}const ze={transitional:yt,adapter:["xhr","http","fetch"],transformRequest:[function(t,s){const r=s.getContentType()||"",a=r.indexOf("application/json")>-1,i=c.isObject(t);if(i&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return a?JSON.stringify(Fn(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t)||c.isReadableStream(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(i){const d=ye(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return da(t,d).toString();if((o=c.isFileList(t))||r.indexOf("multipart/form-data")>-1){const m=ye(this,"env"),u=m&&m.FormData;return Je(o?{"files[]":t}:t,u&&new u,d)}}return i||a?(s.setContentType("application/json",!1),ma(t)):t}],transformResponse:[function(t){const s=ye(this,"transitional")||ze.transitional,r=s&&s.forcedJSONParsing,a=ye(this,"responseType"),i=a==="json";if(c.isResponse(t)||c.isReadableStream(t))return t;if(t&&c.isString(t)&&(r&&!a||i)){const o=!(s&&s.silentJSONParsing)&&i;try{return JSON.parse(t,ye(this,"parseReviver"))}catch(d){if(o)throw d.name==="SyntaxError"?x.from(d,x.ERR_BAD_RESPONSE,this,null,ye(this,"response")):d}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:I.classes.FormData,Blob:I.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};c.forEach(["delete","get","head","post","put","patch","query"],e=>{ze.headers[e]={}});function nt(e,t){const s=this||ze,r=t||s,a=q.from(r.headers);let i=r.data;return c.forEach(e,function(o){i=o.call(s,i,a.normalize(),t?t.status:void 0)}),a.normalize(),i}function In(e){return!!(e&&e.__CANCEL__)}let _e=class extends x{constructor(t,s,r){super(t??"canceled",x.ERR_CANCELED,s,r),this.name="CanceledError",this.__CANCEL__=!0}};function Un(e,t,s){const r=s.config.validateStatus;!s.status||!r||r(s.status)?e(s):t(new x("Request failed with status code "+s.status,s.status>=400&&s.status<500?x.ERR_BAD_REQUEST:x.ERR_BAD_RESPONSE,s.config,s.request,s))}function ha(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function fa(e,t){e=e||10;const s=new Array(e),r=new Array(e);let a=0,i=0,l;return t=t!==void 0?t:1e3,function(d){const m=Date.now(),u=r[i];l||(l=m),s[a]=d,r[a]=m;let p=i,y=0;for(;p!==a;)y+=s[p++],p=p%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),m-l<t)return;const w=u&&m-u;return w?Math.round(y*1e3/w):void 0}}function xa(e,t){let s=0,r=1e3/t,a,i;const l=(m,u=Date.now())=>{s=u,a=null,i&&(clearTimeout(i),i=null),e(...m)};return[(...m)=>{const u=Date.now(),p=u-s;p>=r?l(m,u):(a=m,i||(i=setTimeout(()=>{i=null,l(a)},r-p)))},()=>a&&l(a)]}const $e=(e,t,s=3)=>{let r=0;const a=fa(50,250);return xa(i=>{if(!i||typeof i.loaded!="number")return;const l=i.loaded,o=i.lengthComputable?i.total:void 0,d=Math.max(0,o!=null?Math.min(l,o):l),m=Math.max(0,d-r),u=a(m);r=Math.max(r,d);const p={loaded:d,total:o,progress:o?d/o:void 0,bytes:m,rate:u||void 0,estimated:u&&o?(o-d)/u:void 0,event:i,lengthComputable:o!=null,[t?"download":"upload"]:!0};e(p)},s)},Ft=(e,t)=>{const s=e!=null;return[r=>t[0]({lengthComputable:s,total:e,loaded:r}),t[1]]},It=(e,t=c.asap)=>(...s)=>t(()=>e(...s)),ga=I.hasStandardBrowserEnv?((e,t)=>s=>(s=new URL(s,I.origin),e.protocol===s.protocol&&e.host===s.host&&(t||e.port===s.port)))(new URL(I.origin),I.navigator&&/(msie|trident)/i.test(I.navigator.userAgent)):()=>!0,ya=I.hasStandardBrowserEnv?{write(e,t,s,r,a,i,l){if(typeof document>"u")return;const o=[`${e}=${encodeURIComponent(t)}`];c.isNumber(s)&&o.push(`expires=${new Date(s).toUTCString()}`),c.isString(r)&&o.push(`path=${r}`),c.isString(a)&&o.push(`domain=${a}`),i===!0&&o.push("secure"),c.isString(l)&&o.push(`SameSite=${l}`),document.cookie=o.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let s=0;s<t.length;s++){const r=t[s].replace(/^\s+/,""),a=r.indexOf("=");if(a!==-1&&r.slice(0,a)===e)try{return decodeURIComponent(r.slice(a+1))}catch{return r.slice(a+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ba(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function wa(e,t){if(!t)return e;let s=e.length;for(;s>0&&e.charCodeAt(s-1)===47;)s--;return e.slice(0,s)+"/"+t.replace(/^\/+/,"")}const va=/^https?:(?!\/\/)/i,ja=/[\t\n\r]/g;function Na(e){let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t)}function Sa(e){return Na(e).replace(ja,"")}function Ra(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,s,r="")=>`${s}${r}${He}`)}function ka(e){const t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${He}@`),s=t.indexOf("#"),a=(s===-1?t:t.slice(0,s)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${He}`);return s===-1?a:`${a}#${Ra(t.slice(s+1))}`}function Ut(e,t){if(typeof e=="string"){const s=Sa(e);if(va.test(s))throw new x(`Invalid URL ${JSON.stringify(ka(s))}: missing "//" after protocol`,x.ERR_INVALID_URL,t)}}function qn(e,t,s,r){Ut(t,r);let a=!ba(t);return e&&(a||s===!1)?(Ut(e,r),wa(e,t)):t}const qt=e=>e instanceof q?{...e}:e,Ea=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function fe(e,t){e=e||{},t=t||{};const s=Object.create(null);Object.defineProperty(s,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(u,p,y,w){return c.isPlainObject(u)&&c.isPlainObject(p)?c.merge.call({caseless:w},u,p):c.isPlainObject(p)?c.merge({},p):c.isArray(p)?p.slice():p}function a(u,p,y,w){if(c.isUndefined(p)){if(!c.isUndefined(u))return r(void 0,u,y,w)}else return r(u,p,y,w)}function i(u,p){if(!c.isUndefined(p))return r(void 0,p)}function l(u,p){if(c.isUndefined(p)){if(!c.isUndefined(u))return r(void 0,u)}else return r(void 0,p)}function o(u){const p=c.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!c.isUndefined(p))if(c.isPlainObject(p)){if(c.hasOwnProp(p,u))return p[u]}else return;const y=c.hasOwnProp(e,"transitional")?e.transitional:void 0;if(c.isPlainObject(y)&&c.hasOwnProp(y,u))return y[u]}function d(u,p,y){if(c.hasOwnProp(t,y))return r(u,p);if(c.hasOwnProp(e,y))return r(void 0,u)}const m={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,allowedSocketPaths:l,responseEncoding:l,validateStatus:d,headers:(u,p,y)=>a(qt(u),qt(p),y,!0)};return c.forEach(Ea({...e,...t}),function(p){if(p==="__proto__"||p==="constructor"||p==="prototype")return;const y=c.hasOwnProp(m,p)?m[p]:a,w=c.hasOwnProp(e,p)?e[p]:void 0,N=c.hasOwnProp(t,p)?t[p]:void 0,v=y(w,N,p);c.isUndefined(v)&&y!==d||(s[p]=v)}),c.hasOwnProp(t,"validateStatus")&&c.isUndefined(t.validateStatus)&&o("validateStatusUndefinedResolves")===!1&&(c.hasOwnProp(e,"validateStatus")?s.validateStatus=r(void 0,e.validateStatus):delete s.validateStatus),s}const Ta=["content-type","content-length"];function Pa(e,t,s){if(s!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([r,a])=>{Ta.includes(r.toLowerCase())&&e.set(r,a)})}const Oa=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,s)=>String.fromCharCode(parseInt(s,16)));function Bn(e){const t=fe({},e),s=y=>c.hasOwnProp(t,y)?t[y]:void 0,r=s("data");let a=s("withXSRFToken");const i=s("xsrfHeaderName"),l=s("xsrfCookieName");let o=s("headers");const d=s("auth"),m=s("baseURL"),u=s("allowAbsoluteUrls"),p=s("url");if(t.headers=o=q.from(o),t.url=_n(qn(m,p,u,t),s("params"),s("paramsSerializer")),d){const y=c.getSafeProp(d,"username")||"",w=c.getSafeProp(d,"password")||"";try{o.set("Authorization","Basic "+btoa(y+":"+(w?Oa(w):"")))}catch(N){throw x.from(N,x.ERR_BAD_OPTION_VALUE,e)}}if(c.isFormData(r)&&(I.hasStandardBrowserEnv||I.hasStandardBrowserWebWorkerEnv||c.isReactNative(r)?o.setContentType(void 0):c.isFunction(r.getHeaders)&&Pa(o,r.getHeaders(),s("formDataHeaderPolicy"))),I.hasStandardBrowserEnv&&(c.isFunction(a)&&(a=a(t)),a===!0||a==null&&ga(t.url))){const w=i&&l&&ya.read(l);w&&o.set(i,w)}return t}const Aa=typeof XMLHttpRequest<"u",Ca=Aa&&function(e){return new Promise(function(s,r){const a=Bn(e);let i=a.data;const l=q.from(a.headers).normalize();let{responseType:o,onUploadProgress:d,onDownloadProgress:m}=a,u,p,y,w,N;function v(){w&&w(),N&&N(),a.cancelToken&&a.cancelToken.unsubscribe(u),a.signal&&a.signal.removeEventListener("abort",u)}let g=new XMLHttpRequest;g.open(a.method.toUpperCase(),a.url,!0),g.timeout=a.timeout;function h(){if(!g)return;const S=q.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),_={data:!o||o==="text"||o==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:S,config:e,request:g};Un(function(A){s(A),v()},function(A){r(A),v()},_),g=null}"onloadend"in g?g.onloadend=h:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.startsWith("file:"))||setTimeout(h)},g.onabort=function(){g&&(r(new x("Request aborted",x.ECONNABORTED,e,g)),v(),g=null)},g.onerror=function(k){const _=k&&k.message?k.message:"Network Error",O=new x(_,x.ERR_NETWORK,e,g);O.event=k||null,r(O),v(),g=null},g.ontimeout=function(){let k=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const _=a.transitional||yt;a.timeoutErrorMessage&&(k=a.timeoutErrorMessage),r(new x(k,_.clarifyTimeoutError?x.ETIMEDOUT:x.ECONNABORTED,e,g)),v(),g=null},i===void 0&&l.setContentType(null),"setRequestHeader"in g&&c.forEach(On(l),function(k,_){g.setRequestHeader(_,k)}),c.isUndefined(a.withCredentials)||(g.withCredentials=!!a.withCredentials),o&&o!=="json"&&(g.responseType=a.responseType),m&&([y,N]=$e(m,!0),g.addEventListener("progress",y)),d&&g.upload&&([p,w]=$e(d),g.upload.addEventListener("progress",p),g.upload.addEventListener("loadend",w)),(a.cancelToken||a.signal)&&(u=S=>{g&&(r(!S||S.type?new _e(null,e,g):S),g.abort(),v(),g=null)},a.cancelToken&&a.cancelToken.subscribe(u),a.signal&&(a.signal.aborted?u():a.signal.addEventListener("abort",u)));const j=ha(a.url);if(j&&!I.protocols.includes(j)){r(new x("Unsupported protocol "+j+":",x.ERR_BAD_REQUEST,e)),v();return}g.send(i||null)})},Da=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const s=new AbortController;let r=!1;const a=function(d){if(!r){r=!0,l();const m=d instanceof Error?d:this.reason;s.abort(m instanceof x?m:new _e(m instanceof Error?m.message:m))}};let i=t&&setTimeout(()=>{i=null,a(new x(`timeout of ${t}ms exceeded`,x.ETIMEDOUT))},t);const l=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(a):d.removeEventListener("abort",a)}),e=null)};e.forEach(d=>{if(!r){if(d.aborted){a.call(d);return}d.addEventListener("abort",a,{once:!0})}});const{signal:o}=s;return o.unsubscribe=()=>c.asap(l),o},za=function*(e,t){let s=e.byteLength;if(s<t){yield e;return}let r=0,a;for(;r<s;)a=r+t,yield e.slice(r,a),r=a},_a=async function*(e,t){for await(const s of La(e))yield*za(s,t)},La=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:s,value:r}=await t.read();if(s)break;yield r}}finally{await t.cancel()}},Bt=(e,t,s,r)=>{const a=_a(e,t);let i=0,l,o=d=>{l||(l=!0,r&&r(d))};return new ReadableStream({async pull(d){try{const{done:m,value:u}=await a.next();if(m){o(),d.close();return}let p=u.byteLength;if(s){let y=i+=p;s(y)}d.enqueue(new Uint8Array(u))}catch(m){throw o(m),m}},cancel(d){return o(d),a.return()}},{highWaterMark:2})},Mt=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,Mn=(e,t,s)=>t+2<s&&Mt(e.charCodeAt(t+1))&&Mt(e.charCodeAt(t+2)),Ht=e=>e<=57?e-48:(e&223)-55,Fa=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,Ia=e=>e===9||e===10||e===12||e===13||e===32,Ua=e=>{const t=Math.floor(e/4),s=e%4;return t*3+(s===2?1:s===3?2:0)},qa=e=>{const t=e.length;let s=0;return t>0&&e.charCodeAt(t-1)===61&&(s++,t>1&&e.charCodeAt(t-2)===61&&s++),Math.floor((t-s)*3/4)},Ba=e=>{const t=e.length;let s=0,r=0,a=!1;for(let i=0;i<t;i++){let l=e.charCodeAt(i);if(l===37&&Mn(e,i,t)&&(l=Ht(e.charCodeAt(i+1))*16+Ht(e.charCodeAt(i+2)),i+=2),!Ia(l)){if(l===61){r++;continue}if(!Fa(l)||r>0){a=!0;continue}s++}}return a||r>2||r>0&&(s+r)%4!==0||s%4===1?qa(e):Ua(s)},Ma=(e,t)=>{if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const s=e.indexOf(",");if(s<0)return 0;const r=e.slice(5,s),a=e.slice(s+1);if(/;base64/i.test(r))return t(a);let l=0;for(let o=0,d=a.length;o<d;o++){const m=a.charCodeAt(o);if(m===37&&Mn(a,o,d))l+=1,o+=2;else if(m<128)l+=1;else if(m<2048)l+=2;else if(m>=55296&&m<=56319&&o+1<d){const u=a.charCodeAt(o+1);u>=56320&&u<=57343?(l+=4,o++):l+=3}else l+=3}return l};function Ha(e){const t=typeof e=="string"?e.indexOf("#"):-1;return Ma(t===-1?e:e.slice(0,t),Ba)}const wt="1.19.0",$t=64*1024,{isFunction:Ie}=c,$a=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,s)=>String.fromCharCode(parseInt(s,16))),Vt=e=>{if(!c.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},Wt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Va=e=>{const t=e.indexOf("://");let s=e;return t!==-1&&(s=s.slice(t+3)),s.includes("@")||s.includes(":")},Wa=e=>{const t=c.global!==void 0&&c.global!==null?c.global:globalThis,{ReadableStream:s,TextEncoder:r}=t;e=c.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:a,Request:i,Response:l}=e,o=a?Ie(a):typeof fetch=="function",d=Ie(i),m=Ie(l);if(!o)return!1;const u=o&&Ie(s),p=o&&(typeof r=="function"?(h=>j=>h.encode(j))(new r):async h=>new Uint8Array(await new i(h).arrayBuffer())),y=d&&u&&Wt(()=>{let h=!1;const j=new i(I.origin,{body:new s,method:"POST",get duplex(){return h=!0,"half"}}),S=j.headers.has("Content-Type");return j.body!=null&&j.body.cancel(),h&&!S}),w=m&&u&&Wt(()=>c.isReadableStream(new l("").body)),N={stream:w&&(h=>h.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(h=>{!N[h]&&(N[h]=(j,S)=>{let k=j&&j[h];if(k)return k.call(j);throw new x(`Response type '${h}' is not supported`,x.ERR_NOT_SUPPORT,S)})});const v=async h=>{if(h==null)return 0;if(c.isBlob(h))return h.size;if(c.isSpecCompliantForm(h))return(await new i(I.origin,{method:"POST",body:h}).arrayBuffer()).byteLength;if(c.isArrayBufferView(h)||c.isArrayBuffer(h))return h.byteLength;if(c.isURLSearchParams(h)&&(h=h+""),c.isString(h))return(await p(h)).byteLength},g=async(h,j)=>{const S=c.toFiniteNumber(h.getContentLength());return S??v(j)};return async h=>{let{url:j,method:S,data:k,signal:_,cancelToken:O,timeout:A,onDownloadProgress:X,onUploadProgress:xe,responseType:W,headers:Q,withCredentials:ge="same-origin",fetchOptions:E,maxContentLength:C,maxBodyLength:G}=Bn(h);const Y=c.isNumber(C)&&C>-1,oe=c.isNumber(G)&&G>-1,le=P=>c.hasOwnProp(h,P)?h[P]:void 0;let ne=a||fetch;W=W?(W+"").toLowerCase():"text";let L=Da([_,O&&O.toAbortSignal()],A),T=null;const $=L&&L.unsubscribe&&(()=>{L.unsubscribe()});let se,re=null;const St=()=>new x("Request body larger than maxBodyLength limit",x.ERR_BAD_REQUEST,h,T);try{let P;const K=le("auth");if(K){const R=c.getSafeProp(K,"username")||"",V=c.getSafeProp(K,"password")||"";P={username:R,password:V}}if(Va(j)){const R=new URL(j,I.origin);if(!P&&(R.username||R.password)){const V=Vt(R.username),ae=Vt(R.password);P={username:V,password:ae}}(R.username||R.password)&&(R.username="",R.password="",j=R.href)}if(P&&(Q.delete("authorization"),Q.set("Authorization","Basic "+btoa($a((P.username||"")+":"+(P.password||""))))),Y&&typeof j=="string"&&j.startsWith("data:")&&Ha(j)>C)throw new x("maxContentLength size of "+C+" exceeded",x.ERR_BAD_RESPONSE,h,T);if(oe&&S!=="get"&&S!=="head"){const R=await v(k);if(typeof R=="number"&&isFinite(R)&&(se=R,R>G))throw St()}const Le=oe&&(c.isReadableStream(k)||c.isStream(k)),Rt=(R,V,ae)=>Bt(R,$t,ce=>{if(oe&&ce>G)throw re=St();V&&V(ce)},ae);if(y&&S!=="get"&&S!=="head"&&(xe||Le)){if(se=se??await g(Q,k),se!==0||Le){let R=new i(j,{method:"POST",body:k,duplex:"half"}),V;if(c.isFormData(k)&&(V=R.headers.get("content-type"))&&Q.setContentType(V),R.body){const[ae,ce]=xe&&Ft(se,$e(It(xe)))||[];k=Rt(R.body,ae,ce)}}}else if(Le&&!d&&u&&S!=="get"&&S!=="head")k=Rt(k);else if(Le&&d&&!y&&S!=="get"&&S!=="head")throw new x("Stream request bodies are not supported by the current fetch implementation",x.ERR_NOT_SUPPORT,h,T);c.isString(ge)||(ge=ge?"include":"omit");const Xn=d&&"credentials"in i.prototype;if(c.isFormData(k)){const R=Q.getContentType();R&&/^multipart\/form-data/i.test(R)&&!/boundary=/i.test(R)&&Q.delete("content-type")}Q.set("User-Agent","axios/"+wt,!1);const kt={...E,signal:L,method:S.toUpperCase(),headers:On(Q.normalize()),body:k,duplex:"half",credentials:Xn?ge:void 0};T=d&&new i(j,kt);let Z=await(d?ne(T,E):ne(j,kt));const Et=q.from(Z.headers);if(Y){const R=c.toFiniteNumber(Et.getContentLength());if(R!=null&&R>C)throw new x("maxContentLength size of "+C+" exceeded",x.ERR_BAD_RESPONSE,h,T)}const Qe=w&&(W==="stream"||W==="response");if(w&&Z.body&&(X||Y||Qe&&$)){const R={};["status","statusText","headers"].forEach(Re=>{R[Re]=Z[Re]});const V=c.toFiniteNumber(Et.getContentLength()),[ae,ce]=X&&Ft(V,$e(It(X),!0))||[];let Tt=0;const Yn=Re=>{if(Y&&(Tt=Re,Tt>C))throw new x("maxContentLength size of "+C+" exceeded",x.ERR_BAD_RESPONSE,h,T);ae&&ae(Re)};Z=new l(Bt(Z.body,$t,Yn,()=>{ce&&ce(),$&&$()}),R)}W=W||"text";let ee=await N[c.findKey(N,W)||"text"](Z,h);if(Y&&!w&&!Qe){let R;if(ee!=null&&(typeof ee.byteLength=="number"?R=ee.byteLength:typeof ee.size=="number"?R=ee.size:typeof ee=="string"&&(R=typeof r=="function"?new r().encode(ee).byteLength:ee.length)),typeof R=="number"&&R>C)throw new x("maxContentLength size of "+C+" exceeded",x.ERR_BAD_RESPONSE,h,T)}return!Qe&&$&&$(),await new Promise((R,V)=>{Un(R,V,{data:ee,headers:q.from(Z.headers),status:Z.status,statusText:Z.statusText,config:h,request:T})})}catch(P){if($&&$(),L&&L.aborted&&L.reason instanceof x){const K=L.reason;throw K.config=h,T&&(K.request=T),P!==K&&Object.defineProperty(K,"cause",{__proto__:null,value:P,writable:!0,enumerable:!1,configurable:!0}),K}if(re)throw T&&!re.request&&(re.request=T),re;if(P instanceof x)throw T&&!P.request&&(P.request=T),P;if(P&&P.name==="TypeError"&&/Load failed|fetch/i.test(P.message)){const K=new x("Network Error",x.ERR_NETWORK,h,T,P&&P.response);throw Object.defineProperty(K,"cause",{__proto__:null,value:P.cause||P,writable:!0,enumerable:!1,configurable:!0}),K}throw x.from(P,P&&P.code,h,T,P&&P.response)}}},Ga=new Map,Hn=e=>{let t=e&&e.env||{};const{fetch:s,Request:r,Response:a}=t,i=[r,a,s];let l=i.length,o=l,d,m,u=Ga;for(;o--;)d=i[o],m=u.get(d),m===void 0&&u.set(d,m=o?new Map:Wa(t)),u=m;return m};Hn();const vt={http:Qr,xhr:Ca,fetch:{get:Hn}};c.forEach(vt,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const Gt=e=>`- ${e}`,Ka=e=>c.isFunction(e)||e===null||e===!1;function Ja(e,t){e=c.isArray(e)?e:[e];const{length:s}=e;let r,a;const i={};for(let l=0;l<s;l++){r=e[l];let o;if(a=r,!Ka(r)&&(a=vt[(o=String(r)).toLowerCase()],a===void 0))throw new x(`Unknown adapter '${o}'`);if(a&&(c.isFunction(a)||(a=a.get(t))))break;i[o||"#"+l]=a}if(!a){const l=Object.entries(i).map(([d,m])=>`adapter ${d} `+(m===!1?"is not supported by the environment":"is not available in the build"));let o=s?l.length>1?`since :
`+l.map(Gt).join(`
`):" "+Gt(l[0]):"as no adapter specified";throw new x("There is no suitable adapter to dispatch the request "+o,x.ERR_NOT_SUPPORT)}return a}const $n={getAdapter:Ja,adapters:vt};function st(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _e(null,e)}function rt(e){return st(e),e.headers=q.from(e.headers),e.data=nt.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),$n.getAdapter(e.adapter||ze.adapter,e)(e).then(function(r){st(e),e.response=r;try{r.data=nt.call(e,e.transformResponse,r)}finally{delete e.response}return r.headers=q.from(r.headers),r},function(r){if(!In(r)&&(st(e),r&&r.response)){e.response=r.response;try{r.response.data=nt.call(e,e.transformResponse,r.response)}finally{delete e.response}r.response.headers=q.from(r.response.headers)}return Promise.reject(r)})}const Xe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Xe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Kt={};Xe.transitional=function(t,s,r){function a(i,l){return"[Axios v"+wt+"] Transitional option '"+i+"'"+l+(r?". "+r:"")}return(i,l,o)=>{if(t===!1)throw new x(a(l," has been removed"+(s?" in "+s:"")),x.ERR_DEPRECATED);return s&&!Kt[l]&&(Kt[l]=!0,console.warn(a(l," has been deprecated since v"+s+" and will be removed in the near future"))),t?t(i,l,o):!0}};Xe.spelling=function(t){return(s,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Xa(e,t,s){if(typeof e!="object"||e===null)throw new x("options must be an object",x.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const i=r[a],l=Object.prototype.hasOwnProperty.call(t,i)?t[i]:void 0;if(l){const o=e[i],d=o===void 0||l(o,i,e);if(d!==!0)throw new x("option "+i+" must be "+d,x.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new x("Unknown option "+i,x.ERR_BAD_OPTION)}}const Be={assertOptions:Xa,validators:Xe},U=Be.validators;let pe=class{constructor(t){this.defaults=t||{},this.interceptors={request:new _t,response:new _t}}async request(t,s){try{return await this._request(t,s)}catch(r){if(r instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const i=(()=>{if(!a.stack)return"";const l=a.stack.indexOf(`
`);return l===-1?"":a.stack.slice(l+1)})();try{if(!r.stack)r.stack=i;else if(i){const l=i.indexOf(`
`),o=l===-1?-1:i.indexOf(`
`,l+1),d=o===-1?"":i.slice(o+1);String(r.stack).endsWith(d)||(r.stack+=`
`+i)}}catch{}}throw r}}_request(t,s){typeof t=="string"?(s=s||{},s.url=t):s=t||{},s=fe(this.defaults,s);const{transitional:r,paramsSerializer:a,headers:i}=s;r!==void 0&&Be.assertOptions(r,{silentJSONParsing:U.transitional(U.boolean),forcedJSONParsing:U.transitional(U.boolean),clarifyTimeoutError:U.transitional(U.boolean),legacyInterceptorReqResOrdering:U.transitional(U.boolean),advertiseZstdAcceptEncoding:U.transitional(U.boolean),validateStatusUndefinedResolves:U.transitional(U.boolean)},!1),a!=null&&(c.isFunction(a)?s.paramsSerializer={serialize:a}:Be.assertOptions(a,{encode:U.function,serialize:U.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),Be.assertOptions(s,{baseUrl:U.spelling("baseURL"),withXsrfToken:U.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let l=i&&c.merge(i.common,i[s.method]);i&&c.forEach(["delete","get","head","post","put","patch","query","common"],N=>{delete i[N]}),s.headers=q.concat(l,i);const o=[];let d=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(s)===!1)return;d=d&&v.synchronous;const g=s.transitional||yt;g&&g.legacyInterceptorReqResOrdering?o.unshift(v.fulfilled,v.rejected):o.push(v.fulfilled,v.rejected)});const m=[];this.interceptors.response.forEach(function(v){m.push(v.fulfilled,v.rejected)});let u,p=0,y;if(!d){const N=[rt.bind(this),void 0];for(N.unshift(...o),N.push(...m),y=N.length,u=Promise.resolve(s);p<y;)u=u.then(N[p++],N[p++]);return u}y=o.length;let w=s;for(;p<y;){const N=o[p++],v=o[p++];try{w=N?N(w):w}catch(g){if(!v){u=Promise.reject(g);break}try{const h=v.call(this,g);c.isThenable(h)&&(u=Promise.resolve(h).then(()=>rt.call(this,w)))}catch(h){u=Promise.reject(h)}break}}if(!u)try{u=rt.call(this,w)}catch(N){u=Promise.reject(N)}for(p=0,y=m.length;p<y;)u=u.then(m[p++],m[p++]);return u}getUri(t){t=fe(this.defaults,t);const s=qn(t.baseURL,t.url,t.allowAbsoluteUrls,t);return _n(s,t.params,t.paramsSerializer)}};c.forEach(["delete","get","head","options"],function(t){pe.prototype[t]=function(s,r){return this.request(fe(r||{},{method:t,url:s,data:r&&c.hasOwnProp(r,"data")?r.data:void 0}))}});c.forEach(["post","put","patch","query"],function(t){function s(r){return function(i,l,o){return this.request(fe(o||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}pe.prototype[t]=s(),t!=="query"&&(pe.prototype[t+"Form"]=s(!0))});let Ya=class Vn{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(i){s=i});const r=this;this.promise.then(a=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](a);r._listeners=null}),this.promise.then=a=>{let i;const l=new Promise(o=>{r.subscribe(o),i=o}).then(a);return l.cancel=function(){r.unsubscribe(i)},l},t(function(i,l,o){r.reason||(r.reason=new _e(i,l,o),s(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const s=this._listeners.indexOf(t);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const t=new AbortController,s=r=>{t.abort(r)};return this.subscribe(s),t.signal.unsubscribe=()=>this.unsubscribe(s),t.signal}static source(){let t;return{token:new Vn(function(a){t=a}),cancel:t}}};function Qa(e){return function(s){return e.apply(null,s)}}function Za(e){return c.isObject(e)&&e.isAxiosError===!0}const pt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(pt).forEach(([e,t])=>{pt[t]=e});function Wn(e){const t=new pe(e),s=vn(pe.prototype.request,t);return c.extend(s,pe.prototype,t,{allOwnKeys:!0}),c.extend(s,t,null,{allOwnKeys:!0}),s.create=function(a){return Wn(fe(e,a))},s}const z=Wn(ze);z.Axios=pe;z.CanceledError=_e;z.CancelToken=Ya;z.isCancel=In;z.VERSION=wt;z.toFormData=Je;z.AxiosError=x;z.Cancel=z.CanceledError;z.all=function(t){return Promise.all(t)};z.spread=Qa;z.isAxiosError=Za;z.mergeConfig=fe;z.AxiosHeaders=q;z.formToJSON=e=>Fn(c.isHTMLForm(e)?new FormData(e):e);z.getAdapter=$n.getAdapter;z.HttpStatusCode=pt;z.default=z;const{Axios:Po,AxiosError:Oo,CanceledError:Ao,isCancel:Co,CancelToken:Do,VERSION:zo,all:_o,Cancel:Lo,isAxiosError:Fo,spread:Io,toFormData:Uo,AxiosHeaders:qo,HttpStatusCode:Bo,formToJSON:Mo,getAdapter:Ho,mergeConfig:$o,create:Vo}=z,jt="http://localhost:5000/api",Jt="RanaDownloader",ei="Fast • Secure • Easy",ti=[{id:"youtube",name:"YouTube",icon:"Youtube",color:"#FF0000",description:"Save YouTube videos and audio in multiple formats and qualities."},{id:"facebook",name:"Facebook",icon:"Facebook",color:"#1877F2",description:"Download Facebook videos, reels, and stories with ease."},{id:"instagram",name:"Instagram",icon:"Instagram",color:"#E4405F",description:"Download Instagram reels, stories, posts, and IGTV videos in HD quality."},{id:"twitter",name:"X (Twitter)",icon:"Twitter",color:"#1DA1F2",description:"Download videos and GIFs from X (Twitter) posts instantly."},{id:"reddit",name:"Reddit",icon:"MessageCircle",color:"#FF4500",description:"Download Reddit videos and GIFs from posts and comments."},{id:"threads",name:"Threads",icon:"AtSign",color:"#000000",description:"Save photos and videos from Threads posts in high quality."},{id:"pinterest",name:"Pinterest",icon:"Pin",color:"#E60023",description:"Download Pinterest pins, images, and idea videos in HD."},{id:"linkedin",name:"LinkedIn",icon:"Linkedin",color:"#0A66C2",description:"Save LinkedIn post images and videos with one click."},{id:"snapchat",name:"Snapchat",icon:"Ghost",color:"#FFFC00",description:"Download public Snapchat stories and Spotlight videos."},{id:"sharechat",name:"ShareChat",icon:"Share2",color:"#02B54C",description:"Download ShareChat videos, images, and status posts."},{id:"tiktok",name:"TikTok",icon:"Music2",color:"#FE2C55",description:"Save TikTok videos without watermark, plus audio as MP3."},{id:"vimeo",name:"Vimeo",icon:"PlayCircle",color:"#1AB7EA",description:"Download Vimeo videos in every quality, plus audio as MP3."},{id:"dailymotion",name:"Dailymotion",icon:"Clapperboard",color:"#00AAFF",description:"Save Dailymotion videos and clips in MP4 with audio extraction."},{id:"twitch",name:"Twitch",icon:"Twitch",color:"#9146FF",description:"Download Twitch clips and VODs in every available quality."},{id:"bilibili",name:"Bilibili",icon:"Tv",color:"#FB7299",description:"Grab Bilibili videos — upload cookies for members-only streams."},{id:"vk",name:"VK",icon:"Video",color:"#0077FF",description:"Download VK and VK Video clips in all resolutions."},{id:"rumble",name:"Rumble",icon:"MonitorPlay",color:"#85C710",description:"Save Rumble videos and Shorts up to 1080p, plus audio."},{id:"bluesky",name:"Bluesky",icon:"Bird",color:"#1185FE",description:"Download videos posted on Bluesky straight from the post link."}],ni=[{id:1,icon:"Zap",title:"Fast Downloads",description:"Lightning-fast download speeds powered by optimized servers."},{id:2,icon:"Shield",title:"Secure Experience",description:"Your data is encrypted and never stored on our servers."},{id:3,icon:"Smartphone",title:"Mobile Friendly",description:"Works perfectly on all devices - phones, tablets, and desktops."},{id:4,icon:"FileVideo",title:"Multiple Formats",description:"Choose from MP4, MP3, WEBM, and more format options."},{id:5,icon:"Diamond",title:"HD Quality Support",description:"Download content in the highest quality available up to 4K."},{id:6,icon:"Moon",title:"Dark Mode",description:"Easy on your eyes with a beautiful dark theme interface."},{id:7,icon:"Clock",title:"Download History",description:"Keep track of all your downloads with our history feature."},{id:8,icon:"Link",title:"Copy Link",description:"Quickly copy shareable links with a single click."},{id:9,icon:"QrCode",title:"QR Code Sharing",description:"Generate QR codes to share downloads with friends."},{id:10,icon:"LayoutGrid",title:"Responsive Design",description:"A seamless experience across all screen sizes and devices."}],Xt=[{id:1,question:"Is RanaDownloader free to use?",answer:"Yes, RanaDownloader is completely free to use. There are no hidden charges or premium plans required for basic functionality."},{id:2,question:"Do I need to create an account?",answer:"No, RanaDownloader does not require any registration. Simply paste the URL and start downloading."},{id:3,question:"Is it safe to use RanaDownloader?",answer:"Absolutely. RanaDownloader uses encrypted connections and does not store any of your data or download history on external servers."},{id:4,question:"What platforms are supported?",answer:"RanaDownloader supports YouTube, Facebook, Instagram, X (Twitter), Reddit, Threads, Pinterest, LinkedIn, Snapchat, ShareChat, TikTok, Vimeo, Dailymotion, Twitch, Bilibili, VK, Rumble, and Bluesky. We are constantly working to add more platforms."},{id:5,question:"What download formats are available?",answer:"Depending on the source platform, you can download in MP4, MP3, WEBM, and other formats. Available qualities range from 360p to 4K."},{id:6,question:"Can I use RanaDownloader on mobile?",answer:"Yes! RanaDownloader is fully responsive and works great on all mobile devices, tablets, and desktops."},{id:7,question:"Are there any download limits?",answer:"We aim to provide unlimited downloads. However, to maintain service quality, we may implement fair usage policies during peak times."}],si=[{value:"18+",label:"Platforms"},{value:"4K",label:"Max Quality"},{value:"MP4/MP3",label:"Formats"},{value:"100%",label:"Free"}],F=z.create({baseURL:jt,timeout:6e4,headers:{"Content-Type":"application/json"}}),ri=z.create({baseURL:jt});F.interceptors.request.use(e=>{const t=localStorage.getItem("rana-token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));let at=null;async function ai(){const e=localStorage.getItem("rana-refresh");if(!e)throw new Error("no refresh token");return at||(at=ri.post("/auth/refresh",{refreshToken:e}).then(t=>{const{accessToken:s,refreshToken:r}=t.data.data;return localStorage.setItem("rana-token",s),localStorage.setItem("rana-refresh",r),s}).finally(()=>{at=null})),at}function ii(){localStorage.removeItem("rana-token"),localStorage.removeItem("rana-refresh")}F.interceptors.response.use(e=>e.data,async e=>{var i,l,o,d,m;const t=e.config,s=(i=e.response)==null?void 0:i.status,r=(t==null?void 0:t.url)||"";if(s===401&&t&&!t._retriedAfterRefresh&&!r.startsWith("/auth/")&&localStorage.getItem("rana-refresh"))try{const u=await ai();return t._retriedAfterRefresh=!0,t.headers.Authorization=`Bearer ${u}`,F(t)}catch{ii()}if(((l=e.config)==null?void 0:l.responseType)==="blob"&&((o=e.response)==null?void 0:o.data)instanceof Blob)return e.response.data.text().then(u=>{try{return Promise.reject(new Error(JSON.parse(u).message))}catch{return Promise.reject(new Error(u||"Download failed"))}});const a=((m=(d=e.response)==null?void 0:d.data)==null?void 0:m.message)||e.message||"Something went wrong. Please try again.";return Promise.reject(new Error(a))});const oi=e=>F.post("/auth/register",e),li=e=>F.post("/auth/login",e),ci=()=>F.post("/auth/logout"),di=e=>F.post("/auth/forgot-password",{email:e}),ui=e=>F.post("/auth/reset-password",e),pi=()=>F.get("/users/profile"),mi=e=>F.put("/users/profile",e),hi=()=>F.delete("/users/profile"),fi=e=>F.put("/users/change-password",e),xi=e=>F.post("/analyze",{url:e},{timeout:12e4}),gi=(e,t)=>F.post("/download",e,{responseType:"blob",timeout:6e5,onDownloadProgress:t?s=>t({loaded:s.loaded,total:s.total}):void 0}),yi=({url:e,mediaUrl:t,ext:s,filename:r})=>{const a=new URLSearchParams;return e&&a.set("url",e),t&&a.set("mediaUrl",t),a.set("ext",s),r&&a.set("filename",r),`${jt}/download/direct?${a.toString()}`},bi=e=>!!(e!=null&&e._directUrl)&&!e._transcodeHeight&&!/\.(m3u8|mpd)(\?|$)/i.test(e._directUrl),wi=e=>F.get("/history",{params:e}),vi=e=>F.delete(`/history/${e}`),ji=e=>F.post("/contact",e),Ni=e=>F.post("/cookies",e,{headers:{"Content-Type":"text/plain"}}),Gn=f.createContext(null);function Si({children:e}){const[t,s]=f.useState(null),[r,a]=f.useState(localStorage.getItem("rana-token")),[i,l]=f.useState(!0);f.useEffect(()=>{r?pi().then(u=>s(u.data)).catch(()=>{localStorage.removeItem("rana-token"),a(null),s(null)}).finally(()=>l(!1)):l(!1)},[r]);const o=async(u,p)=>{const y=await li({email:u,password:p}),{user:w,accessToken:N,refreshToken:v}=y.data;return localStorage.setItem("rana-token",N),localStorage.setItem("rana-refresh",v),a(N),s(w),w},d=async(u,p,y)=>{const w=await oi({name:u,email:p,password:y}),{user:N,accessToken:v,refreshToken:g}=w.data;return localStorage.setItem("rana-token",v),localStorage.setItem("rana-refresh",g),a(v),s(N),N},m=async()=>{try{await ci()}catch{}localStorage.removeItem("rana-token"),localStorage.removeItem("rana-refresh"),a(null),s(null)};return n.jsx(Gn.Provider,{value:{user:t,token:r,loading:i,login:o,register:d,logout:m,setUser:s},children:e})}function Se(){const e=f.useContext(Gn);if(!e)throw new Error("useAuth must be used within AuthProvider");return e}const Ri=[{to:"/",label:"Home"},{to:"/downloader",label:"Downloader"},{to:"/faq",label:"FAQ"},{to:"/contact",label:"Contact"},{to:"/about",label:"About"}];function ki(){var u;const[e,t]=f.useState(!1),[s,r]=f.useState(!1),{theme:a,toggleTheme:i}=Bs(),{user:l,logout:o}=Se(),d=Pe();f.useEffect(()=>{const p=()=>r(window.scrollY>20);return window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[]),f.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]);const m=async()=>{await o(),t(!1),d("/")};return n.jsxs(b.nav,{initial:{y:-100},animate:{y:0},transition:{duration:.5,ease:"easeOut"},className:`navbar-wrapper ${s?"scrolled":""}`,children:[n.jsx("div",{className:"container",children:n.jsxs("div",{className:"navbar-inner",children:[n.jsxs(H,{to:"/",className:"navbar-brand",onClick:()=>t(!1),children:[n.jsx(ue,{size:28,className:"brand-icon"}),n.jsxs("span",{className:"brand-text",children:["Rana",n.jsx("span",{className:"gradient-text",children:"Downloader"})]})]}),n.jsxs("div",{className:`navbar-links ${e?"open":""}`,children:[Ri.map(p=>n.jsx(Fe,{to:p.to,className:({isActive:y})=>`nav-link-item ${y?"active":""}`,onClick:()=>t(!1),children:p.label},p.to)),n.jsxs("div",{className:"nav-actions",children:[n.jsx("button",{className:"theme-toggle-btn",onClick:i,"aria-label":"Toggle theme",children:a==="dark"?n.jsx(ns,{size:18}):n.jsx(tn,{size:18})}),l?n.jsxs(n.Fragment,{children:[n.jsxs(Fe,{to:"/history",className:({isActive:p})=>`nav-link-item ${p?"active":""}`,onClick:()=>t(!1),children:[n.jsx(ss,{size:16})," History"]}),n.jsxs(Fe,{to:"/profile",className:({isActive:p})=>`nav-link-item ${p?"active":""}`,onClick:()=>t(!1),children:[n.jsx(Ee,{size:16})," ",((u=l.name)==null?void 0:u.split(" ")[0])||"Profile"]}),n.jsxs("button",{className:"btn-nav-logout",onClick:m,children:[n.jsx(rs,{size:16})," Logout"]})]}):n.jsxs(n.Fragment,{children:[n.jsx(Fe,{to:"/login",className:({isActive:p})=>`nav-link-item ${p?"active":""}`,onClick:()=>t(!1),children:"Sign In"}),n.jsx(H,{to:"/register",className:"btn-gradient nav-cta",onClick:()=>t(!1),children:"Get Started"})]})]})]}),n.jsx("button",{className:"navbar-toggle",onClick:()=>t(!e),"aria-label":"Toggle menu",children:e?n.jsx(nn,{size:24}):n.jsx(as,{size:24})})]})}),n.jsx(be,{children:e&&n.jsx(b.div,{className:"mobile-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>t(!1)})}),n.jsx("style",{children:`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 0;
          transition: all 0.3s ease;
        }
        .navbar-wrapper.scrolled {
          background: var(--glass);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
          padding: 10px 0;
          box-shadow: var(--shadow-lg);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text) !important;
          font-size: 1.4rem;
          font-weight: 800;
          font-family: 'Poppins', sans-serif;
        }
        .brand-icon { color: var(--primary); }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-link-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 50px;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition);
          text-decoration: none;
        }
        .nav-link-item:hover, .nav-link-item.active {
          color: var(--text);
          background: rgba(79, 70, 229, 0.1);
        }
        .nav-link-item.active { color: var(--primary); }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-left: 8px;
        }
        .theme-toggle-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          background: var(--glass);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }
        .theme-toggle-btn:hover {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
        }
        .nav-cta {
          padding: 10px 24px !important;
          font-size: 0.9rem !important;
        }
        .btn-nav-logout {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 50px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-nav-logout:hover {
          border-color: #EF4444;
          color: #EF4444;
        }
        .navbar-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
          padding: 8px;
        }
        .mobile-overlay {
          display: none;
        }
        @media (max-width: 991px) {
          .navbar-toggle { display: block; }
          .navbar-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 300px;
            height: 100vh;
            background: var(--surface);
            flex-direction: column;
            align-items: flex-start;
            padding: 80px 24px 24px;
            gap: 4px;
            transition: right 0.3s ease;
            z-index: 1001;
            border-left: 1px solid var(--border);
          }
          .navbar-links.open { right: 0; }
          .nav-link-item { width: 100%; text-align: left; padding: 12px 16px; border-radius: 12px; }
          .nav-actions { flex-direction: column; width: 100%; margin-left: 0; margin-top: 16px; }
          .nav-cta { width: 100%; text-align: center; }
          .btn-nav-logout { width: 100%; justify-content: center; }
          .mobile-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
          }
        }
      `})]})}const Ei={Product:[{to:"/downloader",label:"Downloader"},{to:"/faq",label:"FAQ"},{to:"/about",label:"About"}],Legal:[{to:"/privacy",label:"Privacy Policy"},{to:"/terms",label:"Terms of Service"}],Support:[{to:"/contact",label:"Contact Us"},{to:"/faq",label:"Help Center"}]},Ti=[{icon:sn,href:"#",label:"Twitter"},{icon:rn,href:"#",label:"Facebook"},{icon:an,href:"#",label:"Instagram"},{icon:is,href:"#",label:"GitHub"}];function Pi(){return n.jsxs("footer",{className:"footer",children:[n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"footer-grid",children:[n.jsxs("div",{className:"footer-brand",children:[n.jsxs(H,{to:"/",className:"footer-logo",children:[n.jsx(ue,{size:24}),n.jsx("span",{children:Jt})]}),n.jsx("p",{className:"footer-tagline",children:ei}),n.jsx("p",{className:"footer-desc",children:"Fast, secure, and easy media downloading experience with a beautiful interface."}),n.jsx("div",{className:"social-links",children:Ti.map(({icon:e,href:t,label:s})=>n.jsx("a",{href:t,"aria-label":s,className:"social-link",children:n.jsx(e,{size:18})},s))})]}),Object.entries(Ei).map(([e,t])=>n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{className:"footer-col-title",children:e}),n.jsx("ul",{className:"footer-links",children:t.map(({to:s,label:r})=>n.jsx("li",{children:n.jsx(H,{to:s,className:"footer-link",children:r})},r))})]},e))]}),n.jsx("div",{className:"footer-bottom",children:n.jsxs("p",{children:["© ",new Date().getFullYear()," ",Jt,". All rights reserved."]})})]}),n.jsx("style",{children:`
        .footer {
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 80px 0 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 60px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text);
          font-size: 1.3rem;
          font-weight: 800;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 12px;
        }
        .footer-logo svg { color: var(--primary); }
        .footer-tagline {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }
        .footer-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .social-links {
          display: flex;
          gap: 10px;
        }
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: var(--transition);
        }
        .social-link:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: #fff;
          transform: translateY(-2px);
        }
        .footer-col-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--text);
        }
        .footer-links {
          list-style: none;
          padding: 0;
        }
        .footer-links li { margin-bottom: 10px; }
        .footer-link {
          color: var(--text-muted);
          font-size: 0.95rem;
          transition: var(--transition);
        }
        .footer-link:hover {
          color: var(--primary);
          padding-left: 4px;
        }
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding: 24px 0;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `})]})}function Oi(){const[e,t]=f.useState(!1);return f.useEffect(()=>{const r=()=>t(window.scrollY>400);return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]),{visible:e,scrollToTop:()=>{window.scrollTo({top:0,behavior:"smooth"})}}}function Ai(){const{visible:e,scrollToTop:t}=Oi();return e?n.jsx(b.button,{className:"back-to-top",onClick:t,initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":"Scroll to top",children:n.jsx(os,{size:24})}):null}function Ci(){const[e,t]=f.useState(0);return f.useEffect(()=>{const s=()=>{const r=window.scrollY,a=document.documentElement.scrollHeight-window.innerHeight;t(a>0?r/a*100:0)};return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]),e}function Di(){const e=Oe(),t=Ci();return f.useEffect(()=>{window.scrollTo(0,0)},[e.pathname]),n.jsxs("div",{className:"app-layout",children:[n.jsx("div",{className:"scroll-progress",style:{width:`${t}%`}}),n.jsx(ki,{}),n.jsx("main",{children:n.jsx(Qn,{})}),n.jsx(Pi,{}),n.jsx(Ai,{})]})}function Nt({text:e="Loading..."}){return n.jsx(b.div,{className:"loader-wrapper",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{className:"loader"}),n.jsx("p",{style:{marginTop:16,color:"var(--text-muted)",fontWeight:500},children:e})]})})}function Yt({children:e}){const{user:t,loading:s}=Se(),r=Oe();return s?n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:n.jsx(Nt,{text:"Loading..."})}):t?e:n.jsx(Zn,{to:"/login",replace:!0,state:{from:r.pathname+r.search}})}function zi(){const[e,t]=f.useState(""),s=Pe(),r=a=>{a.preventDefault(),e.trim()&&s(`/downloader?url=${encodeURIComponent(e.trim())}`)};return n.jsxs("section",{className:"hero-section",children:[n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"}),n.jsx("div",{className:"shape shape-3"}),n.jsx("div",{className:"shape shape-4"}),n.jsx("div",{className:"shape shape-5"})]}),n.jsx("div",{className:"container",children:n.jsxs("div",{className:"hero-content",children:[n.jsxs(b.div,{className:"hero-badge",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[n.jsx(ls,{size:14}),n.jsx("span",{children:"Trusted by 500K+ users worldwide"})]}),n.jsxs(b.h1,{className:"hero-title",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:["Download Media"," ",n.jsx("span",{className:"gradient-text",children:"in Seconds"})]}),n.jsx(b.p,{className:"hero-subtitle",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Fast, Secure and Easy Media Downloader with a beautiful interface."}),n.jsx(b.form,{className:"hero-form",onSubmit:r,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:n.jsxs("div",{className:"hero-input-wrapper",children:[n.jsx(ue,{size:20,className:"input-icon"}),n.jsx("input",{type:"url",className:"hero-input",placeholder:"Paste your URL here...",value:e,onChange:a=>t(a.target.value),required:!0}),n.jsxs("button",{type:"submit",className:"btn-gradient hero-btn",children:[n.jsx("span",{children:"Download"}),n.jsx(cs,{size:18})]})]})}),n.jsx(b.div,{className:"hero-stats",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:si.map(a=>n.jsxs("div",{className:"stat-card",children:[n.jsx("span",{className:"stat-value gradient-text",children:a.value}),n.jsx("span",{className:"stat-label",children:a.label})]},a.label))})]})}),n.jsx("style",{children:`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: var(--gradient-hero);
          overflow: hidden;
          padding-top: 80px;
        }
        .shape-1 { width: 400px; height: 400px; background: var(--primary); top: -100px; left: -100px; animation: float1 8s ease-in-out infinite; }
        .shape-2 { width: 300px; height: 300px; background: var(--secondary); top: 50%; right: -80px; animation: float2 10s ease-in-out infinite; }
        .shape-3 { width: 200px; height: 200px; background: var(--accent); bottom: -50px; left: 30%; animation: float1 12s ease-in-out infinite; }
        .shape-4 { width: 150px; height: 150px; background: var(--primary); top: 30%; left: 50%; animation: float2 9s ease-in-out infinite; }
        .shape-5 { width: 250px; height: 250px; background: var(--accent); top: 10%; right: 20%; animation: float1 11s ease-in-out infinite; }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -30px) rotate(5deg); }
          66% { transform: translate(-15px, 20px) rotate(-3deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, 20px) rotate(-5deg); }
          66% { transform: translate(15px, -25px) rotate(3deg); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: var(--glass);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 28px;
        }
        .hero-title {
          font-size: 3.8rem;
          font-weight: 900;
          margin-bottom: 20px;
          line-height: 1.1;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }
        .hero-form {
          margin-bottom: 60px;
        }
        .hero-input-wrapper {
          display: flex;
          align-items: center;
          background: var(--glass);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          padding: 8px 8px 8px 24px;
          max-width: 640px;
          margin: 0 auto;
          transition: var(--transition);
        }
        .hero-input-wrapper:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15);
        }
        .input-icon { color: var(--text-muted); flex-shrink: 0; }
        .hero-input {
          flex: 1;
          background: none;
          border: none;
          color: var(--text);
          font-size: 1rem;
          padding: 12px 16px;
          outline: none;
          min-width: 0;
        }
        .hero-input::placeholder { color: var(--text-muted); }
        .hero-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px !important;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }
        .stat-card {
          text-align: center;
        }
        .stat-value {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          font-family: 'Poppins', sans-serif;
        }
        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.4rem; }
          .hero-subtitle { font-size: 1rem; }
          .hero-input-wrapper { flex-direction: column; border-radius: 20px; padding: 12px; }
          .hero-input { width: 100%; text-align: center; padding: 12px; }
          .input-icon { display: none; }
          .hero-btn { width: 100%; justify-content: center; border-radius: 14px !important; }
          .hero-stats { gap: 24px; }
          .stat-value { font-size: 1.5rem; }
        }
      `})]})}const _i={Zap:mt,Shield:Ve,Smartphone:mn,FileVideo:ks,Diamond:pn,Moon:tn,Clock:Ae,Link:un,QrCode:Rs,LayoutGrid:dn,Star:cn,Instagram:an,Youtube:Ss,Facebook:rn,Music2:Ns,Twitter:sn,PlayCircle:js,Clapperboard:vs,MessageCircle:ws,MessageSquare:ln,AtSign:bs,Camera:ys,Linkedin:gs,Ghost:xs,Pin:fs,Share2:hs,Twitch:ms,Tv:ps,Video:on,MonitorPlay:us,Bird:ds};function Kn(e){return _i[e]||cn}function Li({icon:e,title:t,description:s,index:r}){const a=Kn(e);return n.jsxs(b.div,{className:"col-lg-3 col-md-4 col-sm-6",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.5,delay:r*.05},children:[n.jsxs("div",{className:"feature-card glass-card",children:[n.jsx("div",{className:"feature-icon-wrap",children:n.jsx(a,{size:24})}),n.jsx("h3",{className:"feature-title",children:t}),n.jsx("p",{className:"feature-desc",children:s})]}),n.jsx("style",{children:`
        .feature-card {
          padding: 28px;
          height: 100%;
          text-align: center;
        }
        .feature-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin: 0 auto 18px;
          transition: var(--transition);
        }
        .feature-card:hover .feature-icon-wrap {
          transform: scale(1.1) rotate(5deg);
        }
        .feature-title {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .feature-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }
      `})]})}function Fi({platform:e,index:t}){const s=Kn(e.icon);return n.jsxs(b.div,{className:"col-lg-4 col-md-6",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.5,delay:t*.1},children:[n.jsx(H,{to:"/downloader",className:"platform-card-link",children:n.jsxs("div",{className:"platform-card glass-card",children:[n.jsx("div",{className:"platform-icon-wrap",style:{background:e.color},children:n.jsx(s,{size:28,color:"#fff"})}),n.jsx("h3",{className:"platform-name",children:e.name}),n.jsx("p",{className:"platform-desc",children:e.description}),n.jsx("div",{className:"platform-arrow",children:"→"})]})}),n.jsx("style",{children:`
        .platform-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .platform-card {
          padding: 32px;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .platform-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .platform-card:hover::after {
          transform: scaleX(1);
        }
        .platform-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          transition: var(--transition);
        }
        .platform-card:hover .platform-icon-wrap {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .platform-name {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .platform-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .platform-arrow {
          font-size: 1.2rem;
          color: var(--primary);
          font-weight: 700;
          opacity: 0;
          transform: translateX(-10px);
          transition: var(--transition);
        }
        .platform-card:hover .platform-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `})]})}function Ii({item:e,isOpen:t,onToggle:s}){return n.jsxs("div",{className:`faq-item ${t?"open":""}`,children:[n.jsxs("button",{className:"faq-question",onClick:s,"aria-expanded":t,children:[n.jsx("span",{children:e.question}),n.jsx(b.span,{className:"faq-chevron",animate:{rotate:t?180:0},transition:{duration:.3},children:n.jsx(Es,{size:20})})]}),n.jsx(be,{children:t&&n.jsx(b.div,{className:"faq-answer",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:n.jsx("p",{children:e.answer})})})]})}function Jn({limit:e}){const[t,s]=f.useState(null),r=e?Xt.slice(0,e):Xt,a=i=>s(l=>l===i?null:i);return n.jsxs("div",{className:"faq-list",children:[r.map(i=>n.jsx(Ii,{item:i,isOpen:t===i.id,onToggle:()=>a(i.id)},i.id)),n.jsx("style",{children:`
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          background: var(--glass);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          overflow: hidden;
          transition: var(--transition);
        }
        .faq-item:hover, .faq-item.open {
          border-color: rgba(79, 70, 229, 0.3);
        }
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background: none;
          border: none;
          color: var(--text);
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          text-align: left;
          font-family: 'Poppins', sans-serif;
          gap: 16px;
        }
        .faq-chevron {
          color: var(--primary);
          flex-shrink: 0;
        }
        .faq-answer {
          overflow: hidden;
        }
        .faq-answer p {
          padding: 0 24px 20px;
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
        }
      `})]})}const Qt=[{num:"01",title:"Paste URL",desc:"Copy and paste the media URL from any supported platform."},{num:"02",title:"Validate URL",desc:"Our system validates the URL and checks for availability."},{num:"03",title:"Fetch Metadata",desc:"We fetch available formats, qualities, and media information."},{num:"04",title:"Download",desc:"Choose your preferred format and download where permitted."}],Ui=[{icon:mt,title:"Lightning Fast",desc:"Optimized servers ensure blazing fast download speeds."},{icon:Ve,title:"Secure",desc:"End-to-end encryption keeps your downloads safe."},{icon:dn,title:"Simple UI",desc:"Clean, intuitive interface designed for everyone."},{icon:pn,title:"Free to Use",desc:"All features available without any hidden charges."},{icon:Ae,title:"No Registration",desc:"Start downloading instantly - no account required."},{icon:mn,title:"Cross Platform",desc:"Works on desktop, tablet, and mobile devices."}],qi={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}};function Bi(){return n.jsxs(b.div,{...qi,children:[n.jsx(zi,{}),n.jsx("section",{className:"section",id:"platforms",children:n.jsxs("div",{className:"container",children:[n.jsxs(b.div,{className:"text-center",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[n.jsxs("h2",{className:"section-title",children:["Supported ",n.jsx("span",{className:"gradient-text",children:"Platforms"})]}),n.jsx("p",{className:"section-subtitle",children:"Download media from your favorite platforms with ease. Fast, secure, and reliable."})]}),n.jsx("div",{className:"row g-4",children:ti.map((e,t)=>n.jsx(Fi,{platform:e,index:t},e.id))})]})}),n.jsx("section",{className:"section",style:{background:"var(--surface)"},id:"features",children:n.jsxs("div",{className:"container",children:[n.jsxs(b.div,{className:"text-center",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[n.jsxs("h2",{className:"section-title",children:["Powerful ",n.jsx("span",{className:"gradient-text",children:"Features"})]}),n.jsx("p",{className:"section-subtitle",children:"Everything you need for a seamless media downloading experience."})]}),n.jsx("div",{className:"row g-4",children:ni.map((e,t)=>n.jsx(Li,{icon:e.icon,title:e.title,description:e.description,index:t},e.id))})]})}),n.jsx("section",{className:"section",id:"how-it-works",children:n.jsxs("div",{className:"container",children:[n.jsxs(b.div,{className:"text-center",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[n.jsxs("h2",{className:"section-title",children:["How It ",n.jsx("span",{className:"gradient-text",children:"Works"})]}),n.jsx("p",{className:"section-subtitle",children:"Four simple steps to download your favorite media content."})]}),n.jsx("div",{className:"steps-timeline",children:Qt.map((e,t)=>n.jsxs(b.div,{className:"step-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:t*.15},children:[n.jsx("div",{className:"step-num gradient-text",children:e.num}),n.jsx("h3",{className:"step-title",children:e.title}),n.jsx("p",{className:"step-desc",children:e.desc}),t<Qt.length-1&&n.jsx("div",{className:"step-line"})]},e.num))})]})}),n.jsx("section",{className:"section",style:{background:"var(--surface)"},id:"why-choose",children:n.jsxs("div",{className:"container",children:[n.jsxs(b.div,{className:"text-center",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[n.jsxs("h2",{className:"section-title",children:["Why Choose ",n.jsx("span",{className:"gradient-text",children:"RanaDownloader"})]}),n.jsx("p",{className:"section-subtitle",children:"The best media downloading experience, built with you in mind."})]}),n.jsx("div",{className:"row g-4",children:Ui.map((e,t)=>n.jsx(b.div,{className:"col-lg-4 col-md-6",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:t*.1},children:n.jsxs("div",{className:"glass-card why-card",children:[n.jsx(e.icon,{size:28,className:"gradient-text"}),n.jsx("h3",{children:e.title}),n.jsx("p",{children:e.desc})]})},e.title))})]})}),n.jsx("section",{className:"section",id:"faq",children:n.jsxs("div",{className:"container",children:[n.jsxs(b.div,{className:"text-center",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[n.jsxs("h2",{className:"section-title",children:["Frequently Asked ",n.jsx("span",{className:"gradient-text",children:"Questions"})]}),n.jsx("p",{className:"section-subtitle",children:"Got questions? We have answers."})]}),n.jsx(Jn,{limit:5})]})}),n.jsx("section",{className:"section cta-section",children:n.jsx("div",{className:"container",children:n.jsxs(b.div,{className:"cta-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[n.jsx("h2",{className:"cta-title",children:"Ready to Start Downloading?"}),n.jsx("p",{className:"cta-desc",children:"Experience the fastest and most secure media downloader available."}),n.jsx(H,{to:"/downloader",className:"btn-gradient",children:"Get Started Now"})]})})}),n.jsx("style",{children:`
        .steps-timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }
        .step-card {
          text-align: center;
          padding: 32px 20px;
          position: relative;
        }
        .step-num {
          font-size: 3rem;
          font-weight: 900;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 12px;
        }
        .step-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .step-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .step-line {
          display: none;
        }
        .why-card {
          padding: 28px;
          text-align: center;
          height: 100%;
        }
        .why-card svg { margin-bottom: 16px; }
        .why-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
        .why-card p { color: var(--text-muted); font-size: 0.9rem; margin: 0; line-height: 1.6; }
        .cta-section { padding: 60px 0 100px; }
        .cta-card {
          background: var(--gradient-primary);
          border-radius: var(--radius-lg);
          padding: 60px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .cta-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
          position: relative;
        }
        .cta-desc {
          color: rgba(255,255,255,0.85);
          font-size: 1.1rem;
          margin-bottom: 28px;
          position: relative;
        }
        .cta-card .btn-gradient {
          position: relative;
          background: #fff;
          color: var(--primary);
          font-weight: 700;
        }
        .cta-card .btn-gradient:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .steps-timeline { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .steps-timeline { grid-template-columns: 1fr; }
          .cta-card { padding: 40px 24px; }
          .cta-title { font-size: 1.6rem; }
        }
      `})]})}function Mi({onAnalyze:e,loading:t}){const[s,r]=f.useState(""),a=i=>{i.preventDefault(),s.trim()&&e(s.trim())};return n.jsxs(b.div,{className:"downloader-form-wrap",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:[n.jsx("form",{className:"downloader-form",onSubmit:a,children:n.jsxs("div",{className:"dl-input-wrapper",children:[n.jsx(un,{size:20,className:"dl-input-icon"}),n.jsx("input",{type:"text",className:"dl-input",placeholder:"Paste video URL here (YouTube, Instagram, Facebook, X, Reddit, TikTok, Pinterest, LinkedIn, Threads, Snapchat, ShareChat)...",value:s,onChange:i=>r(i.target.value),disabled:t,required:!0}),n.jsx("button",{type:"submit",className:"btn-gradient dl-btn",disabled:t,children:t?n.jsx(hn,{size:18,className:"spin"}):n.jsxs(n.Fragment,{children:[n.jsx(Ts,{size:18}),n.jsx("span",{children:"Analyze"})]})})]})}),n.jsx("style",{children:`
        .downloader-form-wrap {
          width: 100%;
          max-width: 750px;
          margin: 0 auto;
        }
        .dl-input-wrapper {
          display: flex;
          align-items: center;
          background: var(--glass);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          padding: 8px 8px 8px 24px;
          transition: var(--transition);
        }
        .dl-input-wrapper:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15);
        }
        .dl-input-icon { color: var(--text-muted); flex-shrink: 0; }
        .dl-input {
          flex: 1;
          background: none;
          border: none;
          color: var(--text);
          font-size: 1rem;
          padding: 12px 16px;
          outline: none;
          min-width: 0;
        }
        .dl-input::placeholder { color: var(--text-muted); }
        .dl-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px !important;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 768px) {
          .dl-input-wrapper {
            flex-direction: column;
            border-radius: 20px;
            padding: 12px;
          }
          .dl-input { width: 100%; text-align: center; padding: 12px; }
          .dl-input-icon { display: none; }
          .dl-btn { width: 100%; justify-content: center; border-radius: 14px !important; }
        }
      `})]})}function Hi(e){const t=(e||"").toLowerCase();if(t.includes("original"))return{text:"MAX",color:"#8b5cf6"};if(t.includes("normal"))return{text:"Med",color:"#3b82f6"};if(t.includes("low"))return{text:"Low",color:"#9ca3af"};if(t.includes("4k")||t.includes("2160"))return{text:"4K",color:"#f59e0b"};if(t.includes("2k")||t.includes("1440"))return{text:"2K",color:"#10b981"};if(t.includes("1080"))return{text:"FHD",color:"#6366f1"};if(t.includes("720"))return{text:"HD",color:"#3b82f6"};if(t.includes("480"))return{text:"SD",color:"#6b7280"};if(t.includes("360"))return{text:"360p",color:"#9ca3af"};if(t.includes("240")||t.includes("144"))return{text:"Low",color:"#9ca3af"};const s=parseInt(e)||0;return s>=2160?{text:"4K",color:"#f59e0b"}:s>=1440?{text:"2K",color:"#10b981"}:s>=1080?{text:"FHD",color:"#6366f1"}:s>=720?{text:"HD",color:"#3b82f6"}:s>=480?{text:"SD",color:"#6b7280"}:{text:"Best",color:"#8b5cf6"}}function $i(e){if((e.label||"").toLowerCase().includes("embedded"))return{text:"AAC",color:"#6366f1"};const s=parseInt(e.abr||e.quality)||0;return s>=256?{text:"High",color:"#10b981"}:s>=128?{text:"Med",color:"#3b82f6"}:s>=64?{text:"Low",color:"#9ca3af"}:{text:"Med",color:"#3b82f6"}}function Vi({video:e,onDownload:t,downloading:s}){if(!e)return null;const r=e.formats&&e.formats.length>0,a=e.audioFormats&&e.audioFormats.length>0,i=e.images&&e.images.length>0,l=!r&&!i&&!a;return n.jsxs(b.div,{className:"video-preview glass-card",initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.5},children:[n.jsxs("div",{className:"vp-grid",children:[n.jsxs("div",{className:"vp-thumbnail-wrap",children:[e.thumbnail?n.jsxs(n.Fragment,{children:[n.jsx("img",{src:e.thumbnail,alt:e.title,className:"vp-thumbnail"}),n.jsx("a",{className:"vp-thumb-download",href:e.thumbnail,download:!0,target:"_blank",rel:"noopener noreferrer",title:"Download thumbnail",children:n.jsx(Ps,{size:18})})]}):n.jsx("div",{className:"vp-thumbnail-placeholder",children:n.jsx(ot,{size:48})}),e.duration&&n.jsxs("span",{className:"vp-duration",children:[n.jsx(Ae,{size:12})," ",e.duration]})]}),n.jsxs("div",{className:"vp-info",children:[n.jsx("h3",{className:"vp-title",children:e.title||"Untitled"}),e.platform&&n.jsx("span",{className:"vp-platform",children:e.platform}),e.author&&n.jsxs("p",{className:"vp-author",children:["By ",e.author]})]})]}),r&&n.jsxs("div",{className:"vp-section",children:[n.jsxs("div",{className:"vp-section-header",children:[n.jsx(on,{size:18}),n.jsx("h4",{children:"Video Quality"}),n.jsx("span",{className:"vp-count",children:e.formats.length})]}),n.jsx("div",{className:"vp-format-list",children:n.jsx(be,{mode:"popLayout",children:e.formats.map((o,d)=>{var u;const m=Hi(o.quality);return n.jsxs(b.button,{className:"vp-format-btn",onClick:()=>t(o,"video"),disabled:s,whileHover:{scale:1.01},whileTap:{scale:.99},initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{delay:d*.03},children:[n.jsxs("div",{className:"vp-format-left",children:[n.jsx("span",{className:"vp-quality-badge",style:{background:m.color},children:m.text}),n.jsxs("div",{className:"vp-format-details",children:[n.jsx("span",{className:"vp-format-quality",children:o.label||o.quality}),n.jsxs("span",{className:"vp-format-meta",children:[(u=o.ext)==null?void 0:u.toUpperCase(),o.fps&&` • ${o.fps}fps`,o.type&&` • ${o.type}`]})]})]}),n.jsxs("div",{className:"vp-format-right",children:[o.size&&n.jsx("span",{className:"vp-format-size",children:o.size}),n.jsx(ue,{size:16,className:"vp-download-icon"})]})]},`vid-${o.itag||d}`)})})})]}),a&&n.jsxs("div",{className:"vp-section",children:[n.jsxs("div",{className:"vp-section-header",children:[n.jsx(Os,{size:18}),n.jsx("h4",{children:"Audio"}),n.jsx("span",{className:"vp-count",children:e.audioFormats.length})]}),n.jsx("div",{className:"vp-format-list",children:n.jsx(be,{mode:"popLayout",children:e.audioFormats.map((o,d)=>{var u;const m=$i(o);return n.jsxs(b.button,{className:"vp-format-btn",onClick:()=>t(o,"audio"),disabled:s,whileHover:{scale:1.01},whileTap:{scale:.99},initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{delay:d*.03},children:[n.jsxs("div",{className:"vp-format-left",children:[n.jsx("span",{className:"vp-quality-badge",style:{background:m.color},children:m.text}),n.jsxs("div",{className:"vp-format-details",children:[n.jsx("span",{className:"vp-format-quality",children:o.label||o.quality}),n.jsxs("span",{className:"vp-format-meta",children:[(u=o.ext)==null?void 0:u.toUpperCase(),o.type&&` • ${o.type}`]})]})]}),n.jsxs("div",{className:"vp-format-right",children:[o.size&&n.jsx("span",{className:"vp-format-size",children:o.size}),n.jsx(ue,{size:16,className:"vp-download-icon"})]})]},`aud-${o.itag||d}`)})})})]}),i&&n.jsxs("div",{className:"vp-section",children:[n.jsxs("div",{className:"vp-section-header",children:[n.jsx(As,{size:18}),n.jsx("h4",{children:"Images"}),n.jsx("span",{className:"vp-count",children:e.images.length})]}),n.jsx("div",{className:"vp-images-grid",children:e.images.map((o,d)=>n.jsxs(b.div,{className:"vp-image-card",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:d*.05},children:[n.jsx("img",{src:o.thumbnail||o._largeUrl||o.url||o._directUrl,alt:o.label,className:"vp-image-thumb",loading:"lazy",onError:m=>{const u=o._directUrl||o.url;u&&m.target.src!==u&&(m.target.src=u)}}),n.jsx("div",{className:"vp-image-overlay",children:n.jsxs("button",{className:"vp-image-download-btn",onClick:()=>t(o,"image"),disabled:s,children:[n.jsx(ue,{size:18}),n.jsx("span",{children:"Download"})]})}),n.jsx("span",{className:"vp-image-label",children:o.label})]},o.itag||d))})]}),l&&n.jsxs("div",{className:"vp-no-formats",children:[n.jsx(fn,{size:20}),n.jsx("span",{children:"No media found for this post."})]}),e.url&&n.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"vp-original-link",children:[n.jsx(xn,{size:14}),"View Original"]}),n.jsx("style",{children:`
        .video-preview { padding: 28px; max-width: 750px; margin: 0 auto; }
        .vp-grid { display: flex; gap: 20px; margin-bottom: 20px; }
        .vp-thumbnail-wrap { position: relative; flex-shrink: 0; width: 200px; border-radius: 12px; overflow: hidden; }
        .vp-thumbnail { width: 100%; height: 130px; object-fit: cover; display: block; }
        .vp-thumb-download {
          position: absolute; top: 6px; right: 6px;
          background: rgba(0,0,0,0.7); color: #fff;
          width: 32px; height: 32px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s, transform 0.2s;
          text-decoration: none; cursor: pointer;
        }
        .vp-thumbnail-wrap:hover .vp-thumb-download { opacity: 1; }
        .vp-thumb-download:hover { background: var(--primary); transform: scale(1.1); }
        .vp-thumbnail-placeholder { width: 100%; height: 130px; background: var(--bg); display: flex; align-items: center; justify-content: center; color: var(--text-muted); }
        .vp-duration { position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.8); color: #fff; padding: 4px 8px; border-radius: 6px; font-size: 0.75rem; display: flex; align-items: center; gap: 4px; }
        .vp-info { flex: 1; }
        .vp-title { font-size: 1.15rem; font-weight: 700; margin-bottom: 8px; line-height: 1.4; }
        .vp-platform { display: inline-block; padding: 4px 12px; background: var(--gradient-primary); color: #fff; border-radius: 50px; font-size: 0.8rem; font-weight: 600; margin-bottom: 8px; }
        .vp-author { color: var(--text-muted); font-size: 0.9rem; margin: 0; }

        .vp-section {
          border-top: 1px solid var(--border); padding-top: 20px; margin-top: 20px;
        }
        .vp-section-header {
          display: flex; align-items: center; gap: 10px; margin-bottom: 14px;
        }
        .vp-section-header h4 {
          font-size: 1.05rem; font-weight: 700; margin: 0; flex: 1;
        }
        .vp-count {
          background: var(--bg); border: 1px solid var(--border); padding: 2px 10px;
          border-radius: 50px; font-size: 0.75rem; font-weight: 600; color: var(--text-muted);
        }

        .vp-format-list { display: flex; flex-direction: column; gap: 8px; }
        .vp-format-btn {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 16px; background: var(--bg); border: 1px solid var(--border);
          border-radius: 12px; color: var(--text); cursor: pointer; transition: var(--transition); text-align: left;
        }
        .vp-format-btn:hover:not(:disabled) { border-color: var(--primary); background: rgba(79,70,229,0.05); }
        .vp-format-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .vp-format-left { display: flex; align-items: center; gap: 12px; }
        .vp-quality-badge { padding: 4px 10px; border-radius: 8px; color: #fff; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; min-width: 50px; text-align: center; }
        .vp-format-details { display: flex; flex-direction: column; gap: 2px; }
        .vp-format-quality { font-weight: 700; font-size: 0.95rem; }
        .vp-format-meta { font-size: 0.8rem; color: var(--text-muted); }
        .vp-format-right { display: flex; align-items: center; gap: 10px; }
        .vp-format-size { color: var(--text-muted); font-size: 0.85rem; font-weight: 500; }
        .vp-download-icon { color: var(--primary); }

        .vp-images-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
        .vp-image-card {
          position: relative; border-radius: 12px; overflow: hidden; aspect-ratio: 1;
          border: 1px solid var(--border); cursor: pointer; transition: var(--transition);
        }
        .vp-image-card:hover { border-color: var(--primary); transform: translateY(-2px); }
        .vp-image-thumb { width: 100%; height: 100%; object-fit: cover; display: block; }
        .vp-image-overlay {
          position: absolute; inset: 0; background: rgba(0,0,0,0.5);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s;
        }
        .vp-image-card:hover .vp-image-overlay { opacity: 1; }
        .vp-image-download-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 10px 20px; background: var(--gradient-primary); color: #fff;
          border: none; border-radius: 8px; font-size: 0.9rem; font-weight: 600;
          cursor: pointer; transition: var(--transition);
        }
        .vp-image-download-btn:hover { transform: scale(1.05); }
        .vp-image-download-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .vp-image-label {
          position: absolute; bottom: 6px; left: 6px;
          background: rgba(0,0,0,0.7); color: #fff; padding: 3px 8px;
          border-radius: 6px; font-size: 0.7rem; font-weight: 600;
        }

        .vp-no-formats { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 24px; text-align: center; color: var(--text-muted); border-top: 1px solid var(--border); }
        .vp-original-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 16px; font-size: 0.9rem; font-weight: 500; }

        @media (max-width: 576px) {
          .vp-grid { flex-direction: column; }
          .vp-thumbnail-wrap { width: 100%; }
          .vp-thumbnail { height: 200px; }
          .vp-images-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `})]})}const D={PREPARING:"preparing",DOWNLOADING:"downloading",DONE:"done",ERROR:"error"};function it(e){return e===0?"0 B":e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/(1024*1024)).toFixed(1)} MB`:`${(e/(1024*1024*1024)).toFixed(2)} GB`}function Wi({open:e,onClose:t,status:s,loaded:r,total:a,fileName:i,errorMessage:l,hintText:o}){const d=f.useRef(null);f.useEffect(()=>{if(s===D.DONE){const u=setTimeout(t,2200);return()=>clearTimeout(u)}},[s,t]);const m=a>0?Math.min(Math.round(r/a*100),100):0;return n.jsx(be,{children:e&&n.jsxs(b.div,{ref:d,className:"dl-popup-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:u=>{u.target===d.current&&s!==D.DOWNLOADING&&t()},children:[n.jsxs(b.div,{className:"dl-popup glass-card",initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{type:"spring",damping:25,stiffness:300},children:[n.jsx("button",{className:"dl-popup-close",onClick:t,disabled:s===D.DOWNLOADING,children:n.jsx(nn,{size:18})}),n.jsxs("div",{className:"dl-popup-icon",children:[s===D.PREPARING&&n.jsx(hn,{size:40,className:"spin"}),s===D.DOWNLOADING&&n.jsx(ue,{size:40}),s===D.DONE&&n.jsx(gn,{size:40,className:"text-green"}),s===D.ERROR&&n.jsx(fn,{size:40,className:"text-red"})]}),n.jsxs("h3",{className:"dl-popup-title",children:[s===D.PREPARING&&"Preparing Download...",s===D.DOWNLOADING&&"Downloading",s===D.DONE&&"Download Complete",s===D.ERROR&&"Download Failed"]}),i&&n.jsx("p",{className:"dl-popup-file",children:i}),(s===D.DOWNLOADING||s===D.DONE)&&a>0&&n.jsxs("div",{className:"dl-popup-progress-wrap",children:[n.jsx("div",{className:"dl-popup-progress-bar",children:n.jsx(b.div,{className:"dl-popup-progress-fill",initial:{width:0},animate:{width:`${m}%`},transition:{duration:.3}})}),n.jsxs("div",{className:"dl-popup-progress-info",children:[n.jsxs("span",{children:[it(r)," / ",it(a)]}),n.jsxs("span",{children:[m,"%"]})]})]}),s===D.DOWNLOADING&&a===0&&n.jsxs("div",{className:"dl-popup-progress-wrap",children:[n.jsx("div",{className:"dl-popup-progress-indeterminate"}),n.jsx("div",{className:"dl-popup-progress-info",children:n.jsxs("span",{children:[it(r)," downloaded"]})})]}),s===D.PREPARING&&n.jsx("p",{className:"dl-popup-hint",children:"Fetching from server, this may take a moment..."}),s===D.DONE&&n.jsx("p",{className:"dl-popup-hint text-green",children:o||"File saved to your downloads folder"}),s===D.ERROR&&n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"dl-popup-hint text-red",children:l||"Something went wrong"}),n.jsx("button",{className:"btn-gradient-outline",onClick:t,style:{marginTop:12},children:"Close"})]})]}),n.jsx("style",{children:`
            .dl-popup-overlay {
              position: fixed; inset: 0; z-index: 9999;
              background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(6px);
              display: flex; align-items: center; justify-content: center;
              padding: 20px;
            }
            .dl-popup {
              width: 100%; max-width: 420px; padding: 32px; text-align: center;
              position: relative; cursor: default;
            }
            .dl-popup:hover { transform: none; box-shadow: var(--shadow-lg); }
            .dl-popup-close {
              position: absolute; top: 12px; right: 12px;
              background: none; border: none; color: var(--text-muted);
              cursor: pointer; padding: 4px; border-radius: 6px; transition: var(--transition);
            }
            .dl-popup-close:hover:not(:disabled) { color: var(--text); background: var(--surface); }
            .dl-popup-close:disabled { opacity: 0.3; cursor: not-allowed; }
            .dl-popup-icon {
              margin-bottom: 16px; color: var(--primary);
              display: flex; justify-content: center;
            }
            .dl-popup-icon .text-green { color: #10b981; }
            .dl-popup-icon .text-red { color: #EF4444; }
            .dl-popup-icon .spin { animation: spin 1s linear infinite; }
            .dl-popup-title {
              font-size: 1.2rem; font-weight: 700; margin-bottom: 6px;
            }
            .dl-popup-file {
              color: var(--text-muted); font-size: 0.85rem;
              word-break: break-all; margin-bottom: 16px; max-height: 40px; overflow: hidden;
            }
            .dl-popup-progress-wrap { margin: 8px 0 4px; }
            .dl-popup-progress-bar {
              width: 100%; height: 8px; background: var(--surface);
              border-radius: 50px; overflow: hidden;
            }
            .dl-popup-progress-fill {
              height: 100%; background: var(--gradient-primary);
              border-radius: 50px;
            }
            .dl-popup-progress-indeterminate {
              width: 100%; height: 8px; background: var(--surface);
              border-radius: 50px; overflow: hidden; position: relative;
            }
            .dl-popup-progress-indeterminate::after {
              content: ''; position: absolute; inset: 0;
              background: var(--gradient-primary);
              animation: indeterminate 1.5s ease-in-out infinite;
              border-radius: 50px;
            }
            @keyframes indeterminate {
              0% { width: 0; left: 0; }
              50% { width: 60%; left: 20%; }
              100% { width: 0; left: 100%; }
            }
            .dl-popup-progress-info {
              display: flex; justify-content: space-between;
              font-size: 0.8rem; color: var(--text-muted); margin-top: 8px;
            }
            .dl-popup-hint {
              color: var(--text-muted); font-size: 0.85rem; margin-top: 8px;
            }
            .dl-popup-hint.text-green { color: #10b981; font-weight: 600; }
            .dl-popup-hint.text-red { color: #EF4444; }
          `})]})})}const Gi={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}};function Ki(){const[e]=en(),t=Oe(),s=ie(),{user:r}=Se(),[a,i]=f.useState(!1),[l,o]=f.useState(null),[d,m]=f.useState(!1),[u,p]=f.useState(null),[y,w]=f.useState(!1),[N,v]=f.useState(D.PREPARING),[g,h]=f.useState(0),[j,S]=f.useState(0),[k,_]=f.useState(""),[O,A]=f.useState(""),[X,xe]=f.useState(!1),W=f.useCallback(async E=>{if(!(!E||!E.trim())){i(!0),p(null),o(null);try{const G=(await xi(E)).data.analysis;o(G),s.success("Media analyzed successfully!")}catch(C){p(C.message||"Failed to analyze the URL. Please check and try again."),s.error(C.message||"Analysis failed")}finally{i(!1)}}},[s]);f.useEffect(()=>{const E=e.get("url");E&&W(E)},[W,e]);const Q=async(E,C="video")=>{const G=C==="image"?E.ext||"jpg":C==="audio"?E.ext||"m4a":E.ext||"mp4",Y=C==="image"?E.label||"Photo":C==="audio"?"Audio":"Video",oe=(E.quality||"").replace(/[^a-zA-Z0-9]/g,"-"),le=`${l.title||"download"}_${oe||C}`.replace(/[<>:"/\\|?*]+/g,"_").substring(0,180),ne=`${le}.${G}`;if(bi(E)){try{const L=yi({url:l.url,mediaUrl:E._directUrl,ext:G,filename:le}),T=document.createElement("a");T.href=L,T.rel="noopener",document.body.appendChild(T),T.click(),document.body.removeChild(T),w(!0),v(D.DONE),h(0),S(0),_(ne),A(""),xe(!0),s.success(`${Y} download started!`)}catch(L){s.error(L.message||"Could not start download")}return}w(!0),v(D.PREPARING),h(0),S(0),_(ne),A(""),xe(!1),m(!0);try{const L=await gi({url:l.url,quality:E.quality,mode:C,mediaUrl:E._directUrl,cookies:l._cookies},({loaded:se,total:re})=>{h(se),re&&S(re),v(D.DOWNLOADING)}),T=window.URL.createObjectURL(L),$=document.createElement("a");$.href=T,$.download=ne,document.body.appendChild($),$.click(),document.body.removeChild($),window.URL.revokeObjectURL(T),v(D.DONE),s.success(`${Y} downloaded!`)}catch(L){v(D.ERROR),A(L.message||"Download failed"),s.error(L.message||"Download failed")}finally{m(!1)}},ge=f.useCallback(()=>w(!1),[]);return n.jsxs(b.div,{...Gi,children:[n.jsx("section",{className:"section dl-page",children:n.jsxs("div",{className:"container",children:[n.jsxs(b.div,{className:"text-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[n.jsx("h1",{className:"section-title",style:{fontSize:"2.5rem",marginTop:80},children:n.jsx("span",{className:"gradient-text",children:"Media Downloader"})}),n.jsx("p",{className:"section-subtitle",children:"Paste a URL from any supported platform to get started."})]}),n.jsx(Mi,{onAnalyze:W,loading:a}),n.jsxs("div",{style:{marginTop:40},children:[a&&n.jsx(Nt,{text:"Analyzing URL..."}),u&&(()=>{const E=u.toLowerCase(),C=E.includes("cookies")||E.includes("twitter")||E.includes("authentication"),G=E.includes("facebook")||E.includes("fb.com"),Y=E.includes("instagram")||E.includes("instagr"),oe=C||G||Y,le=G?"facebook.com":Y?"instagram.com":"x.com";return n.jsxs(b.div,{className:"error-card glass-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[n.jsx("p",{className:"error-text",children:u}),oe?n.jsx("div",{style:{marginTop:12},children:r?n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,alignItems:"center"},children:[n.jsxs("label",{className:"btn-gradient",style:{cursor:"pointer",minWidth:220},children:["Upload cookies.txt",n.jsx("input",{type:"file",accept:".txt",style:{display:"none"},onChange:async ne=>{const L=ne.target.files[0];if(L)try{const T=await L.text();await Ni(T),s.success("Cookies uploaded! Try the link again."),p(null)}catch(T){s.error(T.message||"Failed to upload cookies")}}})]}),n.jsxs("p",{className:"dl-hint",style:{margin:"8px 0 0",fontSize:"0.82rem",lineHeight:1.5},children:["1. Install"," ",n.jsx("a",{href:"https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--accent, #6366f1)"},children:'"Get cookies.txt LOCALLY"'})," ","Chrome extension",n.jsx("br",{}),"2. Log into ",n.jsx("strong",{children:le})," in Chrome",n.jsx("br",{}),"3. Visit ",n.jsx("strong",{children:le}),", click the extension icon, export",n.jsx("br",{}),"4. Upload the exported file above"]})]}):n.jsxs("p",{className:"dl-hint",style:{fontSize:"0.9rem",lineHeight:1.5},children:["This platform requires login cookies."," ",n.jsx(H,{to:"/login",state:{from:t.pathname+t.search},className:"auth-link",children:"Log in"})," ","to enable cookie uploads."]})}):n.jsx("button",{className:"btn-gradient-outline",onClick:()=>p(null),style:{marginTop:12},children:"Try Again"})]})})(),!a&&l&&n.jsx(Vi,{video:l,onDownload:Q,downloading:d}),!a&&!l&&!u&&n.jsxs(b.div,{className:"dl-placeholder",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:[n.jsx("div",{className:"dl-placeholder-cards row g-3",children:["YouTube","Facebook","X (Twitter)","Pinterest","Instagram","LinkedIn","Reddit","Snapchat","Threads","ShareChat","TikTok","Vimeo","Dailymotion","Twitch","Bilibili","VK","Rumble","Bluesky"].map(E=>n.jsx("div",{className:"col-md-4 col-sm-6",children:n.jsx("div",{className:"dl-placeholder-card glass-card",children:n.jsx("span",{children:E})})},E))}),n.jsx("p",{className:"dl-hint",children:"Supported platforms — paste a link to begin"})]})]})]})}),n.jsx("style",{children:`
        .dl-page { padding-top: 40px; min-height: 100vh; }
        .error-card {
          padding: 28px;
          text-align: center;
          max-width: 500px;
          margin: 0 auto;
          border-color: rgba(239, 68, 68, 0.3) !important;
        }
        .error-text { color: #EF4444; font-weight: 600; font-size: 1.05rem; }
        .dl-placeholder { text-align: center; }
        .dl-placeholder-card {
          padding: 20px;
          text-align: center;
          cursor: default;
          font-weight: 600;
          font-size: 0.95rem;
        }
        .dl-hint {
          margin-top: 20px;
          color: var(--text-muted);
          font-size: 0.85rem;
        }
      `}),n.jsx(Wi,{open:y,onClose:ge,status:N,loaded:g,total:j,fileName:k,errorMessage:O,hintText:X?"Download started — check your browser's download manager":void 0})]})}const Ye=`
  .auth-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 16px 40px;
  }
  .auth-card {
    width: 100%;
    max-width: 440px;
    padding: 40px 32px;
    text-align: center;
  }
  .auth-title {
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 8px;
  }
  .auth-subtitle {
    color: var(--text-muted);
    margin-bottom: 32px;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  .auth-form { display: flex; flex-direction: column; gap: 16px; }
  .auth-field {
    position: relative;
    display: flex;
    align-items: center;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 0 16px;
    transition: border-color 0.2s;
  }
  .auth-field:focus-within { border-color: var(--primary); }
  .auth-icon { color: var(--text-muted); flex-shrink: 0; }
  .auth-field input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    padding: 14px 12px;
    color: var(--text);
    font-size: 0.95rem;
  }
  .auth-field input::placeholder { color: var(--text-muted); }
  .auth-eye {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 4px;
    display: flex;
  }
  .auth-options {
    display: flex;
    justify-content: flex-end;
  }
  .auth-link {
    color: var(--primary);
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .auth-link:hover { text-decoration: underline; }
  .auth-submit {
    width: 100%;
    padding: 14px;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 12px;
    margin-top: 8px;
  }
  .auth-submit:disabled { opacity: 0.6; cursor: not-allowed; }
  .auth-footer-text {
    margin-top: 24px;
    color: var(--text-muted);
    font-size: 0.9rem;
  }
`;function Ji(){var N;const[e,t]=f.useState(""),[s,r]=f.useState(""),[a,i]=f.useState(!1),[l,o]=f.useState(!1),{login:d}=Se(),m=ie(),u=Pe(),y=((N=Oe().state)==null?void 0:N.from)||"/downloader",w=async v=>{v.preventDefault(),o(!0);try{await d(e,s),m.success("Welcome back!"),u(y,{replace:!0})}catch(g){m.error(g.message||"Login failed")}finally{o(!1)}};return n.jsx(b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n.jsxs("section",{className:"auth-page",children:[n.jsx("div",{className:"container",children:n.jsxs("div",{className:"auth-card glass-card",children:[n.jsx("h2",{className:"auth-title",children:"Welcome Back"}),n.jsx("p",{className:"auth-subtitle",children:"Sign in to your account"}),n.jsxs("form",{onSubmit:w,className:"auth-form",children:[n.jsxs("div",{className:"auth-field",children:[n.jsx(ve,{size:18,className:"auth-icon"}),n.jsx("input",{type:"email",placeholder:"Email address",value:e,onChange:v=>t(v.target.value),required:!0})]}),n.jsxs("div",{className:"auth-field",children:[n.jsx(te,{size:18,className:"auth-icon"}),n.jsx("input",{type:a?"text":"password",placeholder:"Password",value:s,onChange:v=>r(v.target.value),required:!0}),n.jsx("button",{type:"button",className:"auth-eye",onClick:()=>i(!a),children:a?n.jsx(We,{size:18}):n.jsx(Ge,{size:18})})]}),n.jsx("div",{className:"auth-options",children:n.jsx(H,{to:"/forgot-password",className:"auth-link",children:"Forgot Password?"})}),n.jsx("button",{type:"submit",className:"btn-gradient auth-submit",disabled:l,children:l?"Signing in...":"Sign In"})]}),n.jsxs("p",{className:"auth-footer-text",children:["Don't have an account? ",n.jsx(H,{to:"/register",className:"auth-link",children:"Sign Up"})]})]})}),n.jsx("style",{children:Ye})]})})}function Xi(){const[e,t]=f.useState(""),[s,r]=f.useState(""),[a,i]=f.useState(""),[l,o]=f.useState(""),[d,m]=f.useState(!1),[u,p]=f.useState(!1),{register:y}=Se(),w=ie(),N=Pe(),v=async g=>{if(g.preventDefault(),a!==l)return w.error("Passwords do not match");p(!0);try{await y(e,s,a),w.success("Account created! Welcome!"),N("/downloader")}catch(h){w.error(h.message||"Registration failed")}finally{p(!1)}};return n.jsx(b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n.jsxs("section",{className:"auth-page",children:[n.jsx("div",{className:"container",children:n.jsxs("div",{className:"auth-card glass-card",children:[n.jsx("h2",{className:"auth-title",children:"Create Account"}),n.jsx("p",{className:"auth-subtitle",children:"Join RanaDownloader for free"}),n.jsxs("form",{onSubmit:v,className:"auth-form",children:[n.jsxs("div",{className:"auth-field",children:[n.jsx(Ee,{size:18,className:"auth-icon"}),n.jsx("input",{type:"text",placeholder:"Full name",value:e,onChange:g=>t(g.target.value),required:!0,minLength:2})]}),n.jsxs("div",{className:"auth-field",children:[n.jsx(ve,{size:18,className:"auth-icon"}),n.jsx("input",{type:"email",placeholder:"Email address",value:s,onChange:g=>r(g.target.value),required:!0})]}),n.jsxs("div",{className:"auth-field",children:[n.jsx(te,{size:18,className:"auth-icon"}),n.jsx("input",{type:d?"text":"password",placeholder:"Password (min 8 characters)",value:a,onChange:g=>i(g.target.value),required:!0,minLength:8}),n.jsx("button",{type:"button",className:"auth-eye",onClick:()=>m(!d),children:d?n.jsx(We,{size:18}):n.jsx(Ge,{size:18})})]}),n.jsxs("div",{className:"auth-field",children:[n.jsx(te,{size:18,className:"auth-icon"}),n.jsx("input",{type:d?"text":"password",placeholder:"Confirm password",value:l,onChange:g=>o(g.target.value),required:!0,minLength:8})]}),n.jsx("button",{type:"submit",className:"btn-gradient auth-submit",disabled:u,children:u?"Creating account...":"Create Account"})]}),n.jsxs("p",{className:"auth-footer-text",children:["Already have an account? ",n.jsx(H,{to:"/login",className:"auth-link",children:"Sign In"})]})]})}),n.jsx("style",{children:Ye})]})})}function Yi(){const[e,t]=f.useState(""),[s,r]=f.useState(!1),[a,i]=f.useState(!1),l=ie(),o=async d=>{d.preventDefault(),r(!0);try{await di(e),i(!0),l.success("Reset link sent to your email")}catch(m){l.error(m.message||"Failed to send reset link")}finally{r(!1)}};return n.jsx(b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n.jsxs("section",{className:"auth-page",children:[n.jsx("div",{className:"container",children:n.jsxs("div",{className:"auth-card glass-card",children:[n.jsx("h2",{className:"auth-title",children:"Forgot Password"}),n.jsx("p",{className:"auth-subtitle",children:a?`If an account exists for ${e}, a reset link has been sent.`:"Enter your email to receive a reset link"}),a?n.jsx("button",{className:"btn-gradient auth-submit",onClick:()=>i(!1),children:"Send Again"}):n.jsxs("form",{onSubmit:o,className:"auth-form",children:[n.jsxs("div",{className:"auth-field",children:[n.jsx(ve,{size:18,className:"auth-icon"}),n.jsx("input",{type:"email",placeholder:"Email address",value:e,onChange:d=>t(d.target.value),required:!0})]}),n.jsx("button",{type:"submit",className:"btn-gradient auth-submit",disabled:s,children:s?"Sending...":"Send Reset Link"})]}),n.jsx("p",{className:"auth-footer-text",children:n.jsxs(H,{to:"/login",className:"auth-link",children:[n.jsx(ht,{size:14})," Back to Sign In"]})})]})}),n.jsx("style",{children:Ye})]})})}function Qi(){const[e]=en(),t=e.get("token"),[s,r]=f.useState(""),[a,i]=f.useState(""),[l,o]=f.useState(!1),[d,m]=f.useState(!1),[u,p]=f.useState(!1),y=ie(),w=Pe(),N=async v=>{if(v.preventDefault(),s!==a)return y.error("Passwords do not match");if(!t)return y.error("Invalid or missing reset token");m(!0);try{await ui({token:t,password:s}),p(!0),y.success("Password reset successful")}catch(g){y.error(g.message||"Reset failed")}finally{m(!1)}};return n.jsx(b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n.jsxs("section",{className:"auth-page",children:[n.jsx("div",{className:"container",children:n.jsxs("div",{className:"auth-card glass-card",children:[n.jsx("h2",{className:"auth-title",children:"Reset Password"}),n.jsx("p",{className:"auth-subtitle",children:u?"Your password has been reset successfully":"Enter your new password below"}),!t&&!u&&n.jsx("p",{style:{color:"#EF4444",fontWeight:600,marginBottom:20},children:"No reset token found. Please use the link from your email."}),u?n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx(gn,{size:48,style:{color:"#22C55E",marginBottom:16}}),n.jsx("button",{className:"btn-gradient auth-submit",onClick:()=>w("/login"),children:"Go to Sign In"})]}):n.jsxs("form",{onSubmit:N,className:"auth-form",children:[n.jsxs("div",{className:"auth-field",children:[n.jsx(te,{size:18,className:"auth-icon"}),n.jsx("input",{type:l?"text":"password",placeholder:"New password (min 8 characters)",value:s,onChange:v=>r(v.target.value),required:!0,minLength:8}),n.jsx("button",{type:"button",className:"auth-eye",onClick:()=>o(!l),children:l?n.jsx(We,{size:18}):n.jsx(Ge,{size:18})})]}),n.jsxs("div",{className:"auth-field",children:[n.jsx(te,{size:18,className:"auth-icon"}),n.jsx("input",{type:l?"text":"password",placeholder:"Confirm new password",value:a,onChange:v=>i(v.target.value),required:!0,minLength:8})]}),n.jsx("button",{type:"submit",className:"btn-gradient auth-submit",disabled:d||!t,children:d?"Resetting...":"Reset Password"})]}),n.jsx("p",{className:"auth-footer-text",children:n.jsxs(H,{to:"/login",className:"auth-link",children:[n.jsx(ht,{size:14})," Back to Sign In"]})})]})}),n.jsx("style",{children:Ye})]})})}function Zi(){const{user:e,setUser:t,logout:s}=Se(),r=ie(),[a,i]=f.useState((e==null?void 0:e.name)||""),[l,o]=f.useState((e==null?void 0:e.email)||""),[d,m]=f.useState(!1),[u,p]=f.useState(""),[y,w]=f.useState(""),[N,v]=f.useState(!1),[g,h]=f.useState(!1),[j,S]=f.useState(!1),k=async A=>{A.preventDefault(),m(!0);try{const X=await mi({name:a,email:l});t(X.data),r.success("Profile updated")}catch(X){r.error(X.message||"Update failed")}finally{m(!1)}},_=async A=>{A.preventDefault(),h(!0);try{await fi({currentPassword:u,newPassword:y}),r.success("Password changed"),p(""),w("")}catch(X){r.error(X.message||"Change failed")}finally{h(!1)}},O=async()=>{if(window.confirm("Are you sure you want to delete your account? This cannot be undone.")){S(!0);try{await hi(),r.success("Account deleted"),s()}catch(A){r.error(A.message||"Delete failed")}finally{S(!1)}}};return n.jsx(b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n.jsxs("section",{className:"profile-page",children:[n.jsxs("div",{className:"container",children:[n.jsx("h1",{className:"section-title",style:{fontSize:"2rem",marginTop:80,marginBottom:32},children:n.jsx("span",{className:"gradient-text",children:"My Profile"})}),n.jsxs("div",{className:"profile-grid",children:[n.jsxs("div",{className:"glass-card profile-card",children:[n.jsxs("h3",{className:"profile-card-title",children:[n.jsx(Ee,{size:20})," Personal Info"]}),n.jsxs("form",{onSubmit:k,className:"profile-form",children:[n.jsxs("div",{className:"auth-field",children:[n.jsx(Ee,{size:18,className:"auth-icon"}),n.jsx("input",{type:"text",value:a,onChange:A=>i(A.target.value),required:!0,minLength:2})]}),n.jsxs("div",{className:"auth-field",children:[n.jsx(ve,{size:18,className:"auth-icon"}),n.jsx("input",{type:"email",value:l,onChange:A=>o(A.target.value),required:!0})]}),n.jsxs("button",{type:"submit",className:"btn-gradient profile-btn",disabled:d,children:[n.jsx(Cs,{size:16})," ",d?"Saving...":"Save Changes"]})]})]}),n.jsxs("div",{className:"glass-card profile-card",children:[n.jsxs("h3",{className:"profile-card-title",children:[n.jsx(te,{size:20})," Change Password"]}),n.jsxs("form",{onSubmit:_,className:"profile-form",children:[n.jsxs("div",{className:"auth-field",children:[n.jsx(te,{size:18,className:"auth-icon"}),n.jsx("input",{type:N?"text":"password",placeholder:"Current password",value:u,onChange:A=>p(A.target.value),required:!0})]}),n.jsxs("div",{className:"auth-field",children:[n.jsx(te,{size:18,className:"auth-icon"}),n.jsx("input",{type:N?"text":"password",placeholder:"New password (min 8 characters)",value:y,onChange:A=>w(A.target.value),required:!0,minLength:8}),n.jsx("button",{type:"button",className:"auth-eye",onClick:()=>v(!N),children:N?n.jsx(We,{size:18}):n.jsx(Ge,{size:18})})]}),n.jsxs("button",{type:"submit",className:"btn-gradient profile-btn",disabled:g,children:[n.jsx(te,{size:16})," ",g?"Changing...":"Change Password"]})]})]}),n.jsxs("div",{className:"glass-card profile-card danger-card",children:[n.jsxs("h3",{className:"profile-card-title",style:{color:"#EF4444"},children:[n.jsx(lt,{size:20})," Danger Zone"]}),n.jsx("p",{className:"danger-text",children:"Permanently delete your account and all associated data."}),n.jsxs("button",{className:"btn-danger",onClick:O,disabled:j,children:[n.jsx(lt,{size:16})," ",j?"Deleting...":"Delete Account"]})]})]})]}),n.jsx("style",{children:eo})]})})}const eo=`
  .profile-page { min-height: 100vh; padding-bottom: 60px; }
  .profile-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 24px;
    max-width: 900px;
    margin: 0 auto;
  }
  .profile-card { padding: 28px; }
  .profile-card-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .profile-form { display: flex; flex-direction: column; gap: 14px; }
  .profile-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px;
    font-weight: 600;
    border-radius: 12px;
    margin-top: 4px;
  }
  .profile-btn:disabled { opacity: 0.6; cursor: not-allowed; }
  .danger-card { border-color: rgba(239, 68, 68, 0.3) !important; }
  .danger-text { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 16px; }
  .btn-danger {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 12px;
    background: #EF4444;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  .btn-danger:hover { background: #DC2626; }
  .btn-danger:disabled { opacity: 0.6; cursor: not-allowed; }
  .auth-field {
    position: relative;
    display: flex;
    align-items: center;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 0 16px;
    transition: border-color 0.2s;
  }
  .auth-field:focus-within { border-color: var(--primary); }
  .auth-icon { color: var(--text-muted); flex-shrink: 0; }
  .auth-field input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    padding: 14px 12px;
    color: var(--text);
    font-size: 0.95rem;
    width: 100%;
  }
  .auth-field input::placeholder { color: var(--text-muted); }
  .auth-eye {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 4px;
    display: flex;
  }
  @media (max-width: 576px) {
    .profile-grid { grid-template-columns: 1fr; }
  }
`;function to(){const[e,t]=f.useState([]),[s,r]=f.useState(1),[a,i]=f.useState(1),[l,o]=f.useState(!0),d=ie(),m=f.useCallback(async(p=1)=>{var y;o(!0);try{const w=await wi({page:p,limit:10});t(w.data),i(((y=w.meta)==null?void 0:y.totalPages)||1),r(p)}catch(w){d.error(w.message||"Failed to load history")}finally{o(!1)}},[d]);f.useEffect(()=>{m(1)},[m]);const u=async p=>{try{await vi(p),t(y=>y.filter(w=>w._id!==p)),d.success("Entry deleted")}catch(y){d.error(y.message||"Delete failed")}};return n.jsx(b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n.jsxs("section",{className:"history-page",children:[n.jsxs("div",{className:"container",children:[n.jsx("h1",{className:"section-title",style:{fontSize:"2rem",marginTop:80,marginBottom:32},children:n.jsx("span",{className:"gradient-text",children:"Download History"})}),l?n.jsx(Nt,{text:"Loading history..."}):e.length===0?n.jsxs("div",{className:"glass-card empty-state",children:[n.jsx(ot,{size:48,style:{color:"var(--text-muted)",marginBottom:16}}),n.jsx("p",{children:"No download history yet."}),n.jsx(H,{to:"/downloader",className:"btn-gradient",style:{marginTop:16,display:"inline-block",textDecoration:"none",padding:"10px 24px",borderRadius:50},children:"Start Downloading"})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"history-list",children:e.map(p=>n.jsxs(b.div,{className:"glass-card history-item",initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[n.jsxs("div",{className:"history-info",children:[p.thumbnail?n.jsx("img",{src:p.thumbnail,alt:"",className:"history-thumb"}):n.jsx("div",{className:"history-thumb-placeholder",children:n.jsx(ot,{size:20})}),n.jsxs("div",{className:"history-details",children:[n.jsx("h4",{className:"history-title",children:p.title||"Untitled"}),n.jsxs("p",{className:"history-meta",children:[n.jsx("span",{className:"history-platform",children:p.platform}),n.jsx(Ae,{size:12}),new Date(p.createdAt).toLocaleDateString()]})]})]}),n.jsxs("div",{className:"history-actions",children:[n.jsx("a",{href:p.originalUrl,target:"_blank",rel:"noopener noreferrer",className:"history-action-btn",children:n.jsx(xn,{size:16})}),n.jsx("button",{className:"history-action-btn danger",onClick:()=>u(p._id),children:n.jsx(lt,{size:16})})]})]},p._id))}),a>1&&n.jsxs("div",{className:"pagination",children:[n.jsx("button",{className:"page-btn",disabled:s<=1,onClick:()=>m(s-1),children:"Prev"}),n.jsxs("span",{className:"page-info",children:[s," / ",a]}),n.jsx("button",{className:"page-btn",disabled:s>=a,onClick:()=>m(s+1),children:"Next"})]})]})]}),n.jsx("style",{children:no})]})})}const no=`
  .history-page { min-height: 100vh; padding-bottom: 60px; }
  .empty-state {
    text-align: center;
    padding: 60px 24px;
    max-width: 400px;
    margin: 0 auto;
    color: var(--text-muted);
  }
  .history-list {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .history-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    gap: 16px;
  }
  .history-info {
    display: flex;
    align-items: center;
    gap: 14px;
    flex: 1;
    min-width: 0;
  }
  .history-thumb {
    width: 60px;
    height: 42px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
  }
  .history-thumb-placeholder {
    width: 60px;
    height: 42px;
    background: var(--bg);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    flex-shrink: 0;
  }
  .history-details { min-width: 0; }
  .history-title {
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .history-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-muted);
    font-size: 0.8rem;
    margin: 0;
  }
  .history-platform {
    background: var(--gradient-primary);
    color: #fff;
    padding: 2px 8px;
    border-radius: 50px;
    font-size: 0.7rem;
    font-weight: 600;
  }
  .history-actions { display: flex; gap: 8px; flex-shrink: 0; }
  .history-action-btn {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;
  }
  .history-action-btn:hover { border-color: var(--primary); color: var(--primary); }
  .history-action-btn.danger:hover { border-color: #EF4444; color: #EF4444; }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 32px;
  }
  .page-btn {
    padding: 8px 20px;
    border-radius: 50px;
    border: 1px solid var(--border);
    background: var(--glass);
    color: var(--text);
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
  }
  .page-btn:hover:not(:disabled) { border-color: var(--primary); }
  .page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .page-info { color: var(--text-muted); font-size: 0.9rem; }
  @media (max-width: 576px) {
    .history-item { flex-direction: column; align-items: flex-start; }
    .history-actions { align-self: flex-end; }
  }
`,so={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}},ro=[{icon:mt,title:"Speed",desc:"We prioritize fast, optimized download experiences."},{icon:Ve,title:"Security",desc:"Your privacy and safety are our top concerns."},{icon:Ds,title:"Simplicity",desc:"We believe great tools should be easy to use."},{icon:zs,title:"Accessibility",desc:"Available to everyone, on every device."}];function ao(){return n.jsxs(b.div,{...so,children:[n.jsx("section",{className:"section about-page",children:n.jsxs("div",{className:"container",children:[n.jsxs(b.div,{className:"text-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[n.jsxs("h1",{className:"section-title",style:{fontSize:"2.8rem",marginTop:80},children:["About ",n.jsx("span",{className:"gradient-text",children:"RanaDownloader"})]}),n.jsx("p",{className:"section-subtitle",children:"Making media downloading fast, secure, and accessible for everyone."})]}),n.jsxs(b.div,{className:"about-intro glass-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[n.jsx("h2",{children:"Our Story"}),n.jsx("p",{children:"RanaDownloader was created with a simple mission: to provide a fast, secure, and user-friendly media downloading experience. We believe that accessing your favorite content should be simple and straightforward."}),n.jsx("p",{children:"Built with modern technologies and a focus on user experience, we continuously work to improve our platform and add support for more services."})]}),n.jsx("div",{className:"row g-4",style:{marginTop:60},children:ro.map((e,t)=>n.jsx(b.div,{className:"col-lg-3 col-md-6",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:t*.1},children:n.jsxs("div",{className:"glass-card about-value-card",children:[n.jsx(e.icon,{size:32,className:"gradient-text"}),n.jsx("h3",{children:e.title}),n.jsx("p",{children:e.desc})]})},e.title))}),n.jsx(b.div,{className:"about-mission glass-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},style:{marginTop:60},children:n.jsxs("div",{className:"row align-items-center",children:[n.jsxs("div",{className:"col-md-6",children:[n.jsx("h2",{children:"Our Mission"}),n.jsx("p",{children:"To empower users with a reliable, fast, and secure tool for downloading media content while respecting platform terms of service and user privacy."}),n.jsx("p",{children:"We are committed to transparency, security, and providing the best possible experience for our users across all devices."})]}),n.jsx("div",{className:"col-md-6",style:{textAlign:"center"},children:n.jsx("div",{className:"mission-stats",children:n.jsx("div",{className:"mission-stat",children:n.jsx(_s,{size:40,className:"gradient-text"})})})})]})})]})}),n.jsx("style",{children:`
        .about-page { padding-top: 40px; }
        .about-intro {
          padding: 36px;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .about-intro h2 { font-size: 1.6rem; margin-bottom: 16px; }
        .about-intro p { color: var(--text-muted); line-height: 1.8; font-size: 1.05rem; }
        .about-value-card {
          padding: 28px;
          text-align: center;
          height: 100%;
        }
        .about-value-card svg { margin-bottom: 14px; }
        .about-value-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
        .about-value-card p { color: var(--text-muted); font-size: 0.9rem; margin: 0; }
        .about-mission { padding: 40px; }
        .about-mission h2 { font-size: 1.6rem; margin-bottom: 16px; }
        .about-mission p { color: var(--text-muted); line-height: 1.8; }
        .mission-stats { padding: 40px; }
        .mission-stat { display: flex; justify-content: center; }
      `})]})}const io={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}};function oo(){return n.jsxs(b.div,{...io,children:[n.jsx("section",{className:"section faq-page",children:n.jsxs("div",{className:"container",children:[n.jsxs(b.div,{className:"text-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[n.jsxs("h1",{className:"section-title",style:{fontSize:"2.5rem",marginTop:80},children:["Frequently Asked ",n.jsx("span",{className:"gradient-text",children:"Questions"})]}),n.jsx("p",{className:"section-subtitle",children:"Everything you need to know about RanaDownloader."})]}),n.jsx(Jn,{})]})}),n.jsx("style",{children:`
        .faq-page { padding-top: 40px; min-height: 100vh; }
      `})]})}function lo(){const e=ie(),[t,s]=f.useState({name:"",email:"",message:""}),[r,a]=f.useState(!1),i=o=>s(d=>({...d,[o.target.name]:o.target.value})),l=async o=>{o.preventDefault(),a(!0);try{await ji(t),e.success("Message sent successfully! We'll get back to you soon."),s({name:"",email:"",message:""})}catch(d){e.error(d.message||"Failed to send message. Please try again.")}finally{a(!1)}};return n.jsxs(b.form,{className:"contact-form glass-card",onSubmit:l,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{htmlFor:"name",children:[n.jsx(Ee,{size:16})," Name"]}),n.jsx("input",{id:"name",name:"name",type:"text",className:"form-input",placeholder:"Your name",value:t.name,onChange:i,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{htmlFor:"email",children:[n.jsx(ve,{size:16})," Email"]}),n.jsx("input",{id:"email",name:"email",type:"email",className:"form-input",placeholder:"your@email.com",value:t.email,onChange:i,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{htmlFor:"message",children:[n.jsx(ln,{size:16})," Message"]}),n.jsx("textarea",{id:"message",name:"message",className:"form-input form-textarea",placeholder:"Your message...",rows:5,value:t.message,onChange:i,required:!0})]}),n.jsx("button",{type:"submit",className:"btn-gradient",disabled:r,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:r?n.jsx("span",{className:"loader",style:{width:20,height:20,borderWidth:2}}):n.jsxs(n.Fragment,{children:[n.jsx(Ls,{size:18}),"Send Message"]})}),n.jsx("style",{children:`
        .contact-form {
          padding: 36px;
          max-width: 600px;
          margin: 0 auto;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text);
        }
        .form-input {
          width: 100%;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px 16px;
          color: var(--text);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition);
          font-family: inherit;
        }
        .form-input::placeholder { color: var(--text-muted); }
        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
        }
        .form-textarea { resize: vertical; min-height: 120px; }
      `})]})}const co={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}},uo=[{icon:ve,label:"Email",value:"support@ranadownloader.com"},{icon:Fs,label:"Location",value:"Available Worldwide"},{icon:Ae,label:"Response Time",value:"Within 24 hours"}];function po(){return n.jsxs(b.div,{...co,children:[n.jsx("section",{className:"section contact-page",children:n.jsxs("div",{className:"container",children:[n.jsxs(b.div,{className:"text-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[n.jsxs("h1",{className:"section-title",style:{fontSize:"2.5rem",marginTop:80},children:["Get In ",n.jsx("span",{className:"gradient-text",children:"Touch"})]}),n.jsx("p",{className:"section-subtitle",children:"Have a question or feedback? We would love to hear from you."})]}),n.jsxs("div",{className:"row g-4 align-items-start",style:{marginTop:40},children:[n.jsx("div",{className:"col-lg-4",children:n.jsx("div",{className:"contact-info-list",children:uo.map((e,t)=>n.jsxs(b.div,{className:"contact-info-item glass-card",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.4,delay:t*.1},children:[n.jsx("div",{className:"contact-info-icon",children:n.jsx(e.icon,{size:20})}),n.jsxs("div",{children:[n.jsx("h4",{children:e.label}),n.jsx("p",{children:e.value})]})]},e.label))})}),n.jsx("div",{className:"col-lg-8",children:n.jsx(lo,{})})]})]})}),n.jsx("style",{children:`
        .contact-page { padding-top: 40px; min-height: 100vh; }
        .contact-info-list { display: flex; flex-direction: column; gap: 16px; }
        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
        }
        .contact-info-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }
        .contact-info-item h4 { font-size: 1rem; font-weight: 700; margin-bottom: 2px; }
        .contact-info-item p { color: var(--text-muted); font-size: 0.9rem; margin: 0; }
      `})]})}const mo={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}},ho=[{title:"Information We Collect",content:"We do not collect personal information. RanaDownloader processes URLs in real-time and does not store user data, download history, or personal identifiers on our servers."},{title:"How We Use Information",content:"Any temporary data processed during downloads is immediately discarded after the operation is complete. We do not sell, share, or monetize any user data."},{title:"Cookies",content:"We may use essential cookies to maintain theme preferences and basic site functionality. These cookies do not track user behavior or collect personal data."},{title:"Third-Party Services",content:"Our service may interact with third-party platforms to fetch media metadata. These interactions are governed by the respective platform terms of service."},{title:"Data Security",content:"We implement industry-standard security measures to protect any data processed through our service. All connections are encrypted using TLS."},{title:"Changes to This Policy",content:"We may update this privacy policy from time to time. Changes will be reflected on this page with an updated revision date."}];function fo(){return n.jsxs(b.div,{...mo,children:[n.jsx("section",{className:"section privacy-page",children:n.jsxs("div",{className:"container",children:[n.jsxs(b.div,{className:"text-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[n.jsx("div",{className:"privacy-icon",children:n.jsx(Ve,{size:40})}),n.jsxs("h1",{className:"section-title",style:{fontSize:"2.5rem",marginTop:20},children:["Privacy ",n.jsx("span",{className:"gradient-text",children:"Policy"})]}),n.jsxs("p",{className:"section-subtitle",children:["Your privacy is important to us. Last updated: ",new Date().toLocaleDateString(),"."]})]}),n.jsx("div",{className:"privacy-content",children:ho.map((e,t)=>n.jsxs(b.div,{className:"privacy-section glass-card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:t*.05},children:[n.jsx("h3",{children:e.title}),n.jsx("p",{children:e.content})]},e.title))})]})}),n.jsx("style",{children:`
        .privacy-page { padding-top: 40px; min-height: 100vh; }
        .privacy-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin: 80px auto 20px;
        }
        .privacy-content {
          max-width: 800px;
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .privacy-section {
          padding: 28px;
        }
        .privacy-section h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .privacy-section p {
          color: var(--text-muted);
          line-height: 1.8;
          margin: 0;
          font-size: 0.95rem;
        }
      `})]})}const xo={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}},go=[{title:"Acceptance of Terms",content:"By accessing or using RanaDownloader, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our service."},{title:"Service Description",content:'RanaDownloader provides a web-based tool for downloading media content from supported platforms. Our service is provided "as is" and may be modified or discontinued at any time.'},{title:"User Responsibilities",content:"Users are responsible for ensuring they have the legal right to download any content. RanaDownloader does not condone copyright infringement. Always respect content creators and platform terms of service."},{title:"Prohibited Activities",content:"Users may not use RanaDownloader for illegal purposes, to distribute copyrighted material without authorization, or to attempt to bypass platform security measures."},{title:"Intellectual Property",content:"RanaDownloader and its original content, features, and functionality are owned by RanaDownloader and are protected by international copyright, trademark, and other intellectual property laws."},{title:"Limitation of Liability",content:"RanaDownloader shall not be liable for any damages arising from the use or inability to use our service. Users download content at their own risk and discretion."},{title:"Termination",content:"We reserve the right to terminate or restrict access to our service at our sole discretion, without notice, for any reason."}];function yo(){return n.jsxs(b.div,{...xo,children:[n.jsx("section",{className:"section terms-page",children:n.jsxs("div",{className:"container",children:[n.jsxs(b.div,{className:"text-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[n.jsx("div",{className:"terms-icon",children:n.jsx(Is,{size:40})}),n.jsxs("h1",{className:"section-title",style:{fontSize:"2.5rem",marginTop:20},children:["Terms of ",n.jsx("span",{className:"gradient-text",children:"Service"})]}),n.jsx("p",{className:"section-subtitle",children:"Please read these terms carefully before using RanaDownloader."})]}),n.jsx("div",{className:"terms-content",children:go.map((e,t)=>n.jsxs(b.div,{className:"terms-section glass-card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:t*.05},children:[n.jsx("h3",{children:e.title}),n.jsx("p",{children:e.content})]},e.title))})]})}),n.jsx("style",{children:`
        .terms-page { padding-top: 40px; min-height: 100vh; }
        .terms-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin: 80px auto 20px;
        }
        .terms-content {
          max-width: 800px;
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .terms-section { padding: 28px; }
        .terms-section h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 10px; }
        .terms-section p { color: var(--text-muted); line-height: 1.8; margin: 0; font-size: 0.95rem; }
      `})]})}const bo={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}};function wo(){return n.jsxs(b.div,{...bo,children:[n.jsx("section",{className:"section not-found-page",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"not-found-content",children:[n.jsx(b.h1,{className:"not-found-code gradient-text",initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5},children:"404"}),n.jsx(b.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:"Page Not Found"}),n.jsx(b.p,{className:"not-found-desc",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:"The page you are looking for does not exist or has been moved."}),n.jsxs(b.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},style:{display:"flex",gap:12,justifyContent:"center",marginTop:24},children:[n.jsxs(H,{to:"/",className:"btn-gradient",children:[n.jsx(Us,{size:18,style:{marginRight:8}}),"Go Home"]}),n.jsxs("button",{className:"btn-gradient-outline",onClick:()=>window.history.back(),children:[n.jsx(ht,{size:18,style:{marginRight:8}}),"Go Back"]})]})]})})}),n.jsx("style",{children:`
        .not-found-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .not-found-content { text-align: center; }
        .not-found-code {
          font-size: 8rem;
          font-weight: 900;
          font-family: 'Poppins', sans-serif;
          line-height: 1;
          margin-bottom: 16px;
        }
        .not-found-content h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .not-found-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          max-width: 400px;
        }
        @media (max-width: 576px) {
          .not-found-code { font-size: 5rem; }
        }
      `})]})}function vo(){const e=Oe();return n.jsx(be,{mode:"wait",children:n.jsx(ts,{location:e,children:n.jsxs(B,{path:"/",element:n.jsx(Di,{}),children:[n.jsx(B,{index:!0,element:n.jsx(Bi,{})}),n.jsx(B,{path:"downloader",element:n.jsx(Ki,{})}),n.jsx(B,{path:"login",element:n.jsx(Ji,{})}),n.jsx(B,{path:"register",element:n.jsx(Xi,{})}),n.jsx(B,{path:"forgot-password",element:n.jsx(Yi,{})}),n.jsx(B,{path:"reset-password",element:n.jsx(Qi,{})}),n.jsx(B,{path:"profile",element:n.jsx(Yt,{children:n.jsx(Zi,{})})}),n.jsx(B,{path:"history",element:n.jsx(Yt,{children:n.jsx(to,{})})}),n.jsx(B,{path:"about",element:n.jsx(ao,{})}),n.jsx(B,{path:"faq",element:n.jsx(oo,{})}),n.jsx(B,{path:"contact",element:n.jsx(po,{})}),n.jsx(B,{path:"privacy",element:n.jsx(fo,{})}),n.jsx(B,{path:"terms",element:n.jsx(yo,{})}),n.jsx(B,{path:"*",element:n.jsx(wo,{})})]})},e.pathname)})}function jo(){return n.jsx(qs,{children:n.jsx(Hs,{children:n.jsx(Si,{children:n.jsx(es,{children:n.jsx(vo,{})})})})})}yn(document.getElementById("root")).render(n.jsx(f.StrictMode,{children:n.jsx(jo,{})}));
