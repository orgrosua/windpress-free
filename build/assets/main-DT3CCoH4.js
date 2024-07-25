import{c as r}from"./virtual-jm8_YD9i.js";import{l as o}from"./logger-BTW-zIW3.js";import{L as a}from"./windpress-a09-ZfRP.js";import"./index-BCqmp6kJ.js";import"./index-BbP3371Q.js";import"./runtime-core.esm-bundler-DpP2Prln.js";import"./set-DMzY-ey4.js";import"./_MapCache-DN36xuwU.js";const n="#bricks-toolbar ul.group-wrapper.right",c=document.createRange().createContextualFragment(`
    <li id="windpressbricks-settings-navbar" data-balloon="WindPress \u2014 Bricks settings" data-balloon-pos="bottom">
        <span class="bricks-svg-wrapper">
            ${a}
        </span>
    </li>
`),{getVirtualRef:i}=r({},{persist:"windpress.ui.state"}),s=document.querySelector(n);s.insertBefore(c,s.firstChild);const e=document.querySelector("#windpressbricks-settings-navbar");function l(){const t=i("window.minimized",!1).value;i("window.minimized",!1).value=!t,t?e.classList.add("active"):e.classList.remove("active")}e.addEventListener("click",t=>{l()}),o("Module loaded!",{module:"settings"});
