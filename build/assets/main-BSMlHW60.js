import{_ as v}from"./preload-helper-Tcd9XBoB.js";import{l as D}from"./logger-BTW-zIW3.js";import{l as W,c as H,n as k,T as z,t as j,d as V,f as B,H as U}from"./highlight-in-textarea-D3BQRh7N.js";import{b as d,a as g,c as l}from"./constant-CWUMdlVX.js";import{r as _,n as m,w as A}from"./runtime-core.esm-bundler-NvJfVFKg.js";import"./isObject-B5R9K1Pz.js";import"./isSymbol-DJmTqBMq.js";import"./index-BHzFOpFs.js";(async()=>{let E=null;(async()=>(await W(v(()=>import("./wasm-CsTmP73Z.js"),[],import.meta.url)),E=await H({themes:[v(()=>import("./dark-plus-KEYLhlmT.js"),[],import.meta.url),v(()=>import("./light-plus-BsvsQ1iS.js"),[],import.meta.url)],langs:[v(()=>import("./css-CbYhyuC0.js"),[],import.meta.url)]})))();const a=document.createRange().createContextualFragment(`
    <textarea id="windpressbricks-plc-input" class="windpressbricks-plc-input" rows="2" spellcheck="false"></textarea>
`).querySelector("#windpressbricks-plc-input"),y=document.createRange().createContextualFragment(`
    <div class="windpressbricks-plc-action-container">
        <div class="actions">
        </div>
    </div>
`).querySelector(".windpressbricks-plc-action-container"),I=y.querySelector(".actions"),L=document.createRange().createContextualFragment(`
    <span id="windpressbricks-plc-class-sort" class="bricks-svg-wrapper windpressbricks-plc-class-sort" data-balloon="Automatic Class Sorting" data-balloon-pos="bottom-right">
        <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="bricks-svg icon icon-tabler icons-tabler-outline icon-tabler-reorder"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" /><path d="M16.5 8.5l2.5 2.5l2.5 -2.5" /></svg>    
    </span>
`).querySelector("#windpressbricks-plc-class-sort");I.appendChild(L);const b=_(!1),w=_(null);let C=null;k(a);let S=[];wp.hooks.addAction("windpressbricks-autocomplete-items-refresh","windpressbricks",()=>{S=wp.hooks.applyFilters("windpressbricks-autocomplete-items",[],a.value)}),wp.hooks.doAction("windpressbricks-autocomplete-items-refresh");const r=new z({containerClass:"windpressbricks-tribute-container",autocompleteMode:!0,menuItemLimit:50,noMatchTemplate:"",values:async function(e,t){const s=await wp.hooks.applyFilters("windpressbricks-autocomplete-items-query",S,e);t(s)},lookup:"value",itemClass:"class-item",menuItemTemplate:function(e){let t="";return e.original.color!==void 0&&(t+=`background-color: ${e.original.color};`),e.original.fontWeight!==void 0&&(t+=`font-weight: ${e.original.fontWeight};`),`
            <span class="class-name" data-tribute-class-name="${e.original.value}">${e.string}</span>
            <span class="class-hint" style="${t}"></span>
        `}});r.setMenuContainer=function(e){this.menuContainer=e};const q=r.events.callbacks;r.events.callbacks=function(){return{...q.call(this),up:(e,t)=>{if(this.tribute.isActive&&this.tribute.current.filteredItems){e.preventDefault(),e.stopPropagation();let s=this.tribute.current.filteredItems.length,n=this.tribute.menuSelected;s>n&&n>0?(this.tribute.menuSelected--,this.setActiveLi()):n===0&&(this.tribute.menuSelected=s-1,this.setActiveLi(),this.tribute.menu.scrollTop=this.tribute.menu.scrollHeight),N()}},down:(e,t)=>{if(this.tribute.isActive&&this.tribute.current.filteredItems){e.preventDefault(),e.stopPropagation();let s=this.tribute.current.filteredItems.length-1,n=this.tribute.menuSelected;s>n?(this.tribute.menuSelected++,this.setActiveLi()):s===n&&(this.tribute.menuSelected=0,this.setActiveLi(),this.tribute.menu.scrollTop=0),N()}}}},r.attach(a),new MutationObserver(function(e){e.forEach(function(t){t.type==="attributes"?t.target.id==="bricks-panel-element"&&t.attributeName==="style"?t.target.style.display!=="none"?b.value=!0:b.value=!1:t.attributeName==="placeholder"&&t.target.tagName==="INPUT"&&t.target.classList.contains("placeholder")&&(w.value=d.$_activeElement.value.id):t.type==="childList"&&t.addedNodes.length>0&&(t.target.id==="bricks-panel-sticky"&&t.addedNodes[0].id==="bricks-panel-element-classes"?w.value=d.$_activeElement.value.id:t.target.dataset&&t.target.dataset.controlkey==="_cssClasses"&&t.addedNodes[0].childNodes.length>0&&document.querySelector("#_cssClasses").addEventListener("input",function(s){m(()=>{a.value=s.target.value,f()})}))})}).observe(document.getElementById("bricks-panel-element"),{subtree:!0,attributes:!0,childList:!0}),A([w,b],(e,t)=>{e[0]!==t[0]&&m(()=>{var s,n;a.value=((n=(s=d.$_activeElement.value)==null?void 0:s.settings)==null?void 0:n._cssClasses)||"",f()}),e[0]&&e[1]&&m(()=>{const s=document.querySelector("#bricks-panel-element-classes");s.querySelector(".windpressbricks-plc-input")===null&&(s.appendChild(y),s.appendChild(a),C=new U(a,{highlight:[{highlight:new RegExp("(?<=\\s|^)(?:(?!\\s).)+(?=\\s|$)","g"),className:"word"},{highlight:new RegExp("(?<=\\s)\\s","g"),className:"multispace",blank:!0}]}),k.update(a))})}),a.addEventListener("input",function(e){d.$_activeElement.value.settings._cssClasses=e.target.value});function f(){m(()=>{try{C.handleInput()}catch{}k.update(a),r.hideMenu()})}a.addEventListener("highlights-updated",function(e){x()});let p=j(document.createElement("div"),{plugins:[B],allowHTML:!0,arrow:!1,duration:[500,null],followCursor:!0,trigger:"manual"});function x(){var o,M,T;if(((T=(M=(o=g.contentWindow.windpress)==null?void 0:o.loaded)==null?void 0:M.module)==null?void 0:T.classnameToCss)!==!0)return;const e=document.querySelector(".hit-container");if(e===null)return;p.reference=e;async function t(i){const c=i.textContent,u=await g.contentWindow.windpress.module.classnameToCss.generate(c);if(u===null||u.trim()==="")return null;p.setContent(E.codeToHtml(u,{lang:"css",theme:"dark-plus"})),p.show()}const s=_(null),n=V(function(i){const c=i.clientX,u=i.clientY,O=document.elementsFromPoint(c,u).find(R=>R.matches('mark[class="word"]'));s.value=O||null},10);e.addEventListener("mousemove",n),e.addEventListener("mouseleave",function(i){s.value=null}),A(s,(i,c)=>{i&&i!==c?t(i):p.hide()})}const P=new MutationObserver(function(e){e.forEach(function(t){t.type==="childList"&&t.addedNodes.length>0&&t.addedNodes.forEach(s=>{const n=s.querySelector(".class-name").dataset.tributeClassName;s.addEventListener("mouseenter",o=>{F(n)}),s.addEventListener("mouseleave",o=>{$()}),s.addEventListener("click",o=>{$()})})})});let h=null;a.addEventListener("tribute-active-true",function(e){h===null&&(h=document.querySelector(".windpressbricks-tribute-container>ul")),m(()=>{h&&P.observe(h,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]})})}),L.addEventListener("click",async function(e){var t,s,n;((n=(s=(t=g.contentWindow.windpress)==null?void 0:t.loaded)==null?void 0:s.module)==null?void 0:n.classSorter)===!0&&(a.value=await g.contentWindow.windpress.module.classSorter.sort(a.value),d.$_activeElement.value.settings._cssClasses=a.value,f())});function F(e){l.$_getElementNode(l.$_activeElement.value).classList.add(e)}function $(){const e=l.$_activeElement.value,t=l.$_getElementNode(e),s=l.$_getElementClasses(e);t.classList.value=s.join(" ")}function N(){let e=r.menu.querySelector("li.highlight>span.class-name");const t=l.$_activeElement.value,s=l.$_getElementNode(t),n=l.$_getElementClasses(t);s.classList.value=n.join(" ")+" "+e.dataset.tributeClassName}D("Module loaded!",{module:"plain-classes"})})();
