import{c as a}from"./virtual-BLX9NR40.js";import{l as r}from"./logger-BTW-zIW3.js";import{L as s}from"./windpress-a09-ZfRP.js";import{w as d}from"./runtime-core.esm-bundler-NvJfVFKg.js";import"./index-CSonxoTs.js";import"./isObject-B5R9K1Pz.js";import"./set-qX46P2hw.js";import"./_MapCache-C7aBjWBU.js";import"./isSymbol-DJmTqBMq.js";const c=".topbar-section.undo-redo-top-bar-section",m=document.createRange().createContextualFragment(`
    <div class="topbar-section topbar-section-bl">
        <div id="windpressbreakdance-settings-button" class="breakdance-toolbar-icon-button">
            <div class="breakdance-icon" style="width: 18px; height: 18px;">
                ${s}
            </div>
        </div>
    </div>
`),{getVirtualRef:t}=a({},{persist:"windpress.ui.state"}),o=document.querySelector(c);o.parentNode.insertBefore(m,o.previousElementSibling);const i=document.querySelector("#windpressbreakdance-settings-button");function l(){const e=t("window.minimized",!1).value;t("window.minimized",!1).value=!e}function n(e){e?i.classList.add("breakdance-toolbar-icon-button-active"):i.classList.remove("breakdance-toolbar-icon-button-active")}i.addEventListener("click",e=>{l()}),d(()=>t("window.minimized",!1).value,e=>{n(!e)}),n(!t("window.minimized",!1).value),r("Module loaded!",{module:"settings"});
