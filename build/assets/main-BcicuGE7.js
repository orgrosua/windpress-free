import{c as s}from"./virtual-DAX-8-Vc.js";import{l as o}from"./logger-BTW-zIW3.js";import{L as a}from"./windpress-a09-ZfRP.js";import"./index-BCqmp6kJ.js";import"./index-BbP3371Q.js";import"./runtime-core.esm-bundler-DpP2Prln.js";import"./set-DUhaJHkD.js";import"./_MapCache-IKV2IqD2.js";import"./isObject-B0rSZd8A.js";import"./isSymbol-CDeHjQme.js";const n="#bricks-toolbar ul.group-wrapper.right",c=document.createRange().createContextualFragment(`
    <li id="windpressbricks-settings-navbar" data-balloon="WindPress \u2014 Bricks settings" data-balloon-pos="bottom">
        <span class="bricks-svg-wrapper">
            ${a}
        </span>
    </li>
`),{getVirtualRef:e}=s({},{persist:"windpress.ui.state"}),r=document.querySelector(n);r.insertBefore(c,r.firstChild);const i=document.querySelector("#windpressbricks-settings-navbar");function l(){const t=e("window.minimized",!1).value;e("window.minimized",!1).value=!t,t?i.classList.add("active"):i.classList.remove("active")}i.addEventListener("click",t=>{l()}),o("Module loaded!",{module:"settings"});
