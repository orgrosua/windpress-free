import{a as l}from"./index-BCqmp6kJ.js";import{c as v,t as m,s as p}from"./set-DMzY-ey4.js";import{r as g,ak as d}from"./runtime-core.esm-bundler-DpP2Prln.js";function x(r,t){t=v(t,r);for(var o=0,s=t.length;r!=null&&o<s;)r=r[m(t[o++])];return o&&o==s?r:void 0}function u(r,t,o){var s=r==null?void 0:x(r,t);return s===void 0?o:s}function R(r,t){const o=t!=null&&t.persist?l(t.persist,r):g(r),s={};function i(a,e){return s[a]||(s[a]=d((f,n)=>({get(){return f(),u(o.value,a,e)},set(c){p(o.value,a,c),n()}}))),s[a]}return{state:o,getVirtualRef:i}}export{R as c,u as g};
