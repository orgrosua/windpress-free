import{c as r}from"./virtual-kIqst80p.js";import{l as o}from"./logger-BTW-zIW3.js";import{L as a}from"./windpress-a09-ZfRP.js";import"./index-B-USwDm2.js";import"./isObject-B5R9K1Pz.js";import"./runtime-core.esm-bundler-C0d2UZ6m.js";import"./set-qX46P2hw.js";import"./_MapCache-C7aBjWBU.js";import"./isSymbol-DJmTqBMq.js";const n="#bricks-toolbar ul.group-wrapper.right",c=document.createRange().createContextualFragment(`
    <li id="windpressbricks-settings-navbar" data-balloon="WindPress \u2014 Bricks settings" data-balloon-pos="bottom">
        <span class="bricks-svg-wrapper">
            ${a}
        </span>
    </li>
`),{getVirtualRef:i}=r({},{persist:"windpress.ui.state"}),s=document.querySelector(n);s.insertBefore(c,s.firstChild);const e=document.querySelector("#windpressbricks-settings-navbar");function l(){const t=i("window.minimized",!1).value;i("window.minimized",!1).value=!t,t?e.classList.add("active"):e.classList.remove("active")}e.addEventListener("click",t=>{l()}),o("Module loaded!",{module:"settings"});
