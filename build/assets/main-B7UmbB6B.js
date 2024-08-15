import{c as s}from"./virtual-kIqst80p.js";import{l as o}from"./logger-BTW-zIW3.js";import{L as n}from"./windpress-a09-ZfRP.js";import"./index-B-USwDm2.js";import"./isObject-B5R9K1Pz.js";import"./runtime-core.esm-bundler-C0d2UZ6m.js";import"./set-qX46P2hw.js";import"./_MapCache-C7aBjWBU.js";import"./isSymbol-DJmTqBMq.js";const a=document.createRange().createContextualFragment(`
    <button id="windpressbuilderius-settings-navbar" data-tooltip-content="WindPress \u2014 Builderius settings" data-tooltip-place="bottom" class="uniPanelButton">
        <span class="">
            ${n}
        </span>
    </button>
`),{getVirtualRef:i}=s({},{persist:"windpress.ui.state"}),r=document.querySelector(".uniTopPanel__rightCol");r.prepend(a);const e=document.querySelector("#windpressbuilderius-settings-navbar");function d(){const t=i("window.minimized",!1).value;i("window.minimized",!1).value=!t,t?e.classList.add("active"):e.classList.remove("active")}e.addEventListener("click",t=>{d()}),o("Module loaded!",{module:"settings"});
