import{b as u,__tla as m}from"../../../build-Bz6oQOy-.js";import"../../../lib-C2qaLi0h.js";import"../../../index-BHzFOpFs.js";import"../../../preload-helper-Tcd9XBoB.js";Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{let a;const c=document.querySelector('script[type="text/tailwindcss"]');c&&(d(c,o),new MutationObserver(async()=>{await o()}).observe(c,{characterData:!0,subtree:!0})),new MutationObserver(async n=>{const t=["STYLE","SCRIPT"];let s=!0;for(let e of n){const r=e.target;r.nodeType===1&&t.includes(r.tagName)&&(s=!1);for(let l of e.addedNodes){const i=l;i.nodeType===1&&t.includes(i.tagName)&&(s=!1)}}s&&await o()}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],subtree:!0,childList:!0});async function o(){const n=new Set;document.querySelectorAll("[class]").forEach(e=>{e.classList.forEach(r=>n.add(r))});const t=document.querySelector('script[type="text/tailwindcss"]'),s=t!=null&&t.textContent?atob(t.textContent):'@import "tailwindcss"';document.body&&n.size>0&&((!a||!a.isConnected)&&(a=document.createElement("style"),document.head.append(a)),a.textContent=await u({candidates:Array.from(n),entrypoint:"/index.css",volume:{"/index.css":s}}))}await o();function d(n,t){new BroadcastChannel("windpress").addEventListener("message",async s=>{const e=s.data;e.source==="windpress/dashboard"&&e.target==="windpress/observer"&&e.task==="windpress.main_css.saved"&&(n.textContent=btoa(e.payload.main_css.current),await t())})}});
