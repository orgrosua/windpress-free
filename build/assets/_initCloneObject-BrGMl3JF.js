import{f as H,a as J,h as K,c as Q,i as V,L as y,M as W,b as X}from"./_MapCache-IKV2IqD2.js";import{a as g,i as l,b as m,r as j,f as Y}from"./isObject-B0rSZd8A.js";var x=Object.create,Z=function(){function t(){}return function(r){if(!g(r))return{};if(x)return x(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();function $(t,r){var e=-1,o=t.length;for(r||(r=Array(o));++e<o;)r[e]=t[e];return r}function tt(t,r,e,o){var i=!e;e||(e={});for(var f=-1,b=r.length;++f<b;){var u=r[f],c=void 0;c===void 0&&(c=t[u]),i?H(e,u,c):J(e,u,c)}return e}var et=9007199254740991;function A(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=et}function O(t){return t!=null&&A(t.length)&&!K(t)}var rt=Object.prototype;function d(t){var r=t&&t.constructor,e=typeof r=="function"&&r.prototype||rt;return t===e}function nt(t,r){for(var e=-1,o=Array(t);++e<t;)o[e]=r(e);return o}var ot="[object Arguments]";function w(t){return l(t)&&m(t)==ot}var z=Object.prototype,at=z.hasOwnProperty,ut=z.propertyIsEnumerable,T=w(function(){return arguments}())?w:function(t){return l(t)&&at.call(t,"callee")&&!ut.call(t,"callee")};function ct(){return!1}var U=typeof exports=="object"&&exports&&!exports.nodeType&&exports,B=U&&typeof module=="object"&&module&&!module.nodeType&&module,st=B&&B.exports===U,I=st?j.Buffer:void 0,it=I?I.isBuffer:void 0,P=it||ct,ft="[object Arguments]",pt="[object Array]",bt="[object Boolean]",yt="[object Date]",lt="[object Error]",jt="[object Function]",dt="[object Map]",vt="[object Number]",ht="[object Object]",_t="[object RegExp]",gt="[object Set]",mt="[object String]",xt="[object WeakMap]",At="[object ArrayBuffer]",Ot="[object DataView]",wt="[object Float32Array]",zt="[object Float64Array]",Tt="[object Int8Array]",Ut="[object Int16Array]",Bt="[object Int32Array]",It="[object Uint8Array]",Pt="[object Uint8ClampedArray]",St="[object Uint16Array]",qt="[object Uint32Array]",n={};n[wt]=n[zt]=n[Tt]=n[Ut]=n[Bt]=n[It]=n[Pt]=n[St]=n[qt]=!0,n[ft]=n[pt]=n[At]=n[bt]=n[Ot]=n[yt]=n[lt]=n[jt]=n[dt]=n[vt]=n[ht]=n[_t]=n[gt]=n[mt]=n[xt]=!1;function Et(t){return l(t)&&A(t.length)&&!!n[m(t)]}function S(t){return function(r){return t(r)}}var q=typeof exports=="object"&&exports&&!exports.nodeType&&exports,p=q&&typeof module=="object"&&module&&!module.nodeType&&module,Ft=p&&p.exports===q,v=Ft&&Y.process,h=function(){try{var t=p&&p.require&&p.require("util").types;return t||v&&v.binding&&v.binding("util")}catch{}}(),E=h&&h.isTypedArray,F=E?S(E):Et,Lt=Object.prototype,Mt=Lt.hasOwnProperty;function L(t,r){var e=V(t),o=!e&&T(t),i=!e&&!o&&P(t),f=!e&&!o&&!i&&F(t),b=e||o||i||f,u=b?nt(t.length,String):[],c=u.length;for(var a in t)(r||Mt.call(t,a))&&!(b&&(a=="length"||i&&(a=="offset"||a=="parent")||f&&(a=="buffer"||a=="byteLength"||a=="byteOffset")||Q(a,c)))&&u.push(a);return u}function M(t,r){return function(e){return t(r(e))}}function kt(t){var r=[];if(t!=null)for(var e in Object(t))r.push(e);return r}var Dt=Object.prototype,Ct=Dt.hasOwnProperty;function Nt(t){if(!g(t))return kt(t);var r=d(t),e=[];for(var o in t)o=="constructor"&&(r||!Ct.call(t,o))||e.push(o);return e}function Rt(t){return O(t)?L(t,!0):Nt(t)}var k=M(Object.getPrototypeOf,Object);function Gt(){this.__data__=new y,this.size=0}function Ht(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}function Jt(t){return this.__data__.get(t)}function Kt(t){return this.__data__.has(t)}var Qt=200;function Vt(t,r){var e=this.__data__;if(e instanceof y){var o=e.__data__;if(!W||o.length<Qt-1)return o.push([t,r]),this.size=++e.size,this;e=this.__data__=new X(o)}return e.set(t,r),this.size=e.size,this}function s(t){var r=this.__data__=new y(t);this.size=r.size}s.prototype.clear=Gt,s.prototype.delete=Ht,s.prototype.get=Jt,s.prototype.has=Kt,s.prototype.set=Vt;var D=typeof exports=="object"&&exports&&!exports.nodeType&&exports,C=D&&typeof module=="object"&&module&&!module.nodeType&&module,Wt=C&&C.exports===D,N=Wt?j.Buffer:void 0,R=N?N.allocUnsafe:void 0;function Xt(t,r){if(r)return t.slice();var e=t.length,o=R?R(e):new t.constructor(e);return t.copy(o),o}var _=j.Uint8Array;function G(t){var r=new t.constructor(t.byteLength);return new _(r).set(new _(t)),r}function Yt(t,r){var e=r?G(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}function Zt(t){return typeof t.constructor=="function"&&!d(t)?Z(k(t)):{}}export{s as S,_ as U,O as a,L as b,tt as c,G as d,Yt as e,S as f,k as g,$ as h,d as i,P as j,Rt as k,Xt as l,Zt as m,h as n,M as o,F as p,T as q};
