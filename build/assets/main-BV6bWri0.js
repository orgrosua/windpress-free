import{i as ut,l as dt,r as pt,b as vt,L as mt,_ as ae,T as bt,P as ft,K as ht,M as yt,N as gt,O as kt,__tla as wt}from"./_plugin-vue_export-helper-CJvFtrfK.js";import{l as se}from"./logger-BTW-zIW3.js";import{c as Et,g as _t,_ as xt}from"./lib-FVFXNsp8.js";import{d as we,b as ie,a as $t}from"./constant-CWUMdlVX.js";import{i as C,a as Ee,q as ce,u as j,v as y,x as g,y as $,C as A,z as L,A as T,F as Ct,r as I,w as R,S as _e,J as V,K as P,E as H,M as N,Q as B,B as ue,G as Lt,H as It,D as St,T as Tt,n as Pt}from"./runtime-core.esm-bundler-NvJfVFKg.js";import{__tla as At}from"./build-6XnEkjQY.js";import{__tla as Mt}from"./oxide_parser_wasm-8nf_WcM4.js";import{g as Wt}from"./intellisense-DggKt6it.js";import{a as qt}from"./index-CSonxoTs.js";import{s as Vt}from"./set-qX46P2hw.js";import"./index-BHzFOpFs.js";import"./isObject-B5R9K1Pz.js";import"./preload-helper-Tcd9XBoB.js";import"./_MapCache-C7aBjWBU.js";import"./isSymbol-DJmTqBMq.js";Promise.all([(()=>{try{return wt}catch{}})(),(()=>{try{return At}catch{}})(),(()=>{try{return Mt}catch{}})()]).then(async()=>{ut({scope:"#windpressbricks-variable-app",rootSize:10}),dt.add(pt,vt);var de={exports:{}};(function(l,n){(function(t,p){l.exports=p()})(Et,function(){var t=["t","r","b","l","tr","br","bl","tl"],p={handles:t,minWidth:0,maxWidth:Number.MAX_SAFE_INTEGER,minHeight:0,maxHeight:Number.MAX_SAFE_INTEGER,handleWidth:12,handleZIndex:100},s=function(o,a){var e=a.value,r=a.modifiers,f,u,h,w,he,ye,Q,W,Z,J,ee,te,oe,ne,re;o.style.position="absolute",lt(),at(),o.addEventListener("mousedown",le),o.addEventListener("touchstart",le),o.onMouseDown=le;function lt(){var i=function(_){return e&&e[_]&&typeof e[_]=="number"?e[_]:null},x=function(_){return i(_)||p[_]};J=x("minWidth"),ee=x("maxWidth"),te=x("minHeight"),oe=x("maxHeight"),ne=x("handleWidth"),re=x("handleZIndex")}function at(){Object.keys(r).some(function(i){return t.includes(i)})?Z=t.filter(function(i){return r[i]}):Z=p.handles,Q=Z.map(st),Q.forEach(function(i){return o.appendChild(i)})}function st(i){var x=ne+"px",_=-ne/2+"px",q=re+1,d=document.createElement("div");return d.dataset.handle=i,d.style.position="absolute",d.style.touchAction="none",d.style.userSelect="none",d.style.zIndex=i.length===1?re:q,d.style.cursor=k(i),i.includes("t")&&(d.style.top=_,d.style.height=x,i==="t"&&(d.style.left=0,d.style.width="100%")),i.includes("b")&&(d.style.bottom=_,d.style.height=x,i==="b"&&(d.style.left=0,d.style.width="100%")),i.includes("r")&&(d.style.right=_,d.style.width=x,i==="r"&&(d.style.top=0,d.style.height="100%")),i.includes("l")&&(d.style.left=_,d.style.width=x,i==="l"&&(d.style.top=0,d.style.height="100%")),d}function le(i){if(Q.includes(i.target)){var x=i.type==="touchstart"&&i.touches.length>0,_=x?i.touches[0]:i;he=_.clientX,ye=_.clientY,f=o.offsetLeft,u=o.offsetTop,h=parseInt(window.getComputedStyle(o).getPropertyValue("width")),w=parseInt(window.getComputedStyle(o).getPropertyValue("height")),document.documentElement.style.cursor=k(i.target.dataset.handle),W=i.target.dataset.handle,document.addEventListener("mousemove",O),document.addEventListener("mouseup",F),document.addEventListener("touchmove",O),document.addEventListener("touchend",F),i.preventDefault()}}function O(i){var x=i.type==="touchmove"&&i.touches.length>0,_=x?i.touches[0]:i,q=_.clientX-he,d=_.clientY-ye;if(W.includes("t")){var ge=Math.min(oe,Math.max(te,w-d));d=w-ge,o.style.height=ge+"px",o.style.top=u+d+"px"}if(W.includes("b")){var it=Math.min(oe,Math.max(te,w+d));o.style.height=it+"px",o.style.top=u+"px"}if(W.includes("l")){var ke=Math.min(ee,Math.max(J,h-q));q=h-ke,o.style.width=ke+"px",o.style.left=f+q+"px"}if(W.includes("r")){var ct=Math.min(ee,Math.max(J,h+q));o.style.width=ct+"px",o.style.left=f+"px"}o.dispatchEvent(new CustomEvent("resize")),i.preventDefault()}function F(){document.documentElement.style.cursor="",W=null,document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",F),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",F)}},m=function(o){document.documentElement.style.cursor="",o.removeEventListener("mousedown",o.onMouseDown),o.removeEventListener("touchstart",o.onMouseDown)};function k(o){var a={t:"n",r:"e",b:"s",l:"w"};return o.split("").map(function(e){return a[e]}).join("")+"-resize"}var b=function(o){p=Object.assign({},p,o)},c={bind:s,beforeMount:s,unbind:m,unmounted:m},v=function(o,a){a&&b(a),o.directive("resizable",c)};typeof window<"u"&&window.Vue&&window.Vue.use&&(window.VResizable={setDefaults:b},window.Vue.use(v));var E={install:v};return E})})(de);var xe=de.exports;const $e=_t(xe),Ce={id:"windpressbricks-variable-app-header",class:"bg:$(builder-bg) cursor:grab bb:1|solid|$(builder-border-color)"},Le={class:"flex gap:10 align-items:center px:12 py:8"},Ie=["href"],Se={class:"font:bold flex gap:10 align-items:center cursor:default"},Te={__name:"PanelHeader",setup(l){const n=C("variableApp"),t=C("isOpen");function p(){const s=n.querySelector("#windpressbricks-variable-app-header");let m=I(!1),k=0,b=0;R(m,o=>{o?(document.body.style.userSelect="none",we.style.pointerEvents="none",s.style.cursor="grabbing"):(document.body.style.removeProperty("user-select"),we.style.removeProperty("pointer-events"),s.style.cursor="grab")});const c=o=>{m.value=!0;const a=s.getBoundingClientRect();k=o.clientX-a.left,b=o.clientY-a.top};s.removeEventListener("mousedown",c),s.addEventListener("mousedown",c);const v=o=>{if(!m.value)return;const a=s.getBoundingClientRect(),e=o.clientX,r=o.clientY,f=e-k,u=r-b,h=f<0?0:f>window.innerWidth-a.width?window.innerWidth-a.width:f,w=u<0?0:u>window.innerHeight-a.height?window.innerHeight-a.height:u;n.style.left=`${h}px`,n.style.top=`${w}px`};document.removeEventListener("mousemove",v),document.addEventListener("mousemove",v);const E=o=>{m.value=!1};document.removeEventListener("mouseup",E),document.addEventListener("mouseup",E)}return Ee(()=>{p()}),(s,m)=>{const k=ce("inline-svg"),b=ce("font-awesome-icon"),c=j("tooltip");return y(),g("div",Ce,[$("div",Le,[A((y(),g("a",{href:s.windpressbricks.site_meta.admin_url,target:"_blank",class:"flex align-items:center fg:$(builder-color-accent):hover"},[L(k,{src:T(mt),class:"inline-svg fill:current font:24"},null,8,["src"])],8,Ie)),[[c,{placement:"top",content:"Open WindPress plugin"}]]),A((y(),g("div",Se,[Ct(" WindPress ")])),[[c,{placement:"top",content:`v${s.windpressbricks._version}`}]]),A((y(),g("button",{onClick:m[0]||(m[0]=v=>t.value=!T(t)),class:"ml:auto p:6 bg:transparent bg:$(builder-bg-accent):hover r:$(builder-border-radius)"},[L(b,{icon:["fas","xmark"],class:"fg:$(builder-color)"})])),[[c,{placement:"top",content:"Close"}]])])])}}},Pe={class:"flex-grow:1"},Ae={key:0,class:"expansion-panel__body"},Me={__name:"ExpansionPanel",props:{namespace:{type:String,required:!0},name:{type:String,required:!0}},setup(l,{expose:n}){const t=l,p=I(null),s=qt(`windpressbricks-variable-app.ui.expansion-panels.${t.namespace}`,{[`${t.name}`]:!1},void 0,{mergeDefaults:!0});function m(b){s.value[t.name]=b===null?!s.value[t.name]:b}function k(){p.value.scrollIntoView()}return n({togglePanel:m,scrollIntoView:k}),(b,c)=>{const v=ce("font-awesome-icon");return y(),g("div",{ref_key:"sectionRef",ref:p,class:"expansion-panel m:10 mr:4"},[$("div",{onClick:c[0]||(c[0]=E=>T(s)[l.name]=!T(s)[l.name]),class:V([{"bg:$(builder-bg-3)!":T(s)[l.name]},"expansion-panel__header flex bg:$(builder-bg-2) bg:$(builder-bg-3):hover justify-content:space-between p:10 r:8 cursor:pointer"])},[$("div",Pe,[_e(b.$slots,"header",{},void 0,!0)]),$("div",null,[L(v,{icon:["fas","chevron-right"],class:V([{"rotate(-90)":T(s)[l.name]},"~duration:300 font:18"])},null,8,["class"])])],2),L(bt,null,{default:P(()=>[T(s)[l.name]?(y(),g("div",Ae,[_e(b.$slots,"default",{},void 0,!0)])):H("",!0)]),_:3})],512)}}},U=ae(Me,[["__scopeId","data-v-37676007"]]),We={class:"{m:10;pb:15}>div bb:1|solid|$(builder-border-color)>div:not(:last-child)"},qe={class:"variable-section-title font:14 my:10"},Ve={class:"variable-section-items flex flex:row gap:8 flex-wrap:wrap"},De=["onClick","onMouseenter"],ze={class:"font:14"},Oe=1e3,pe={__name:"CommonVariableItems",props:{variableItems:{type:Object,required:!0}},setup(l){const n=C("focusedInput"),t=C("recentVariableSelectionTimestamp"),p=C("tempInputValue");function s(b,c){performance.now()-t.value<Oe||n.value&&(n.value.value=`var(${c})`,n.value.dispatchEvent(new Event("input")),n.value.focus())}function m(b){!n.value||p.value===null||(n.value.value=p.value,n.value.dispatchEvent(new Event("input")),n.value.focus())}function k(b,c){n.value&&(n.value.value=`var(${c})`,n.value.dispatchEvent(new Event("input")),n.value.focus(),p.value=`var(${c})`,t.value=performance.now())}return(b,c)=>{const v=j("tooltip");return y(),g("div",We,[(y(!0),g(N,null,B(l.variableItems,(E,o)=>(y(),g("div",{key:o,class:""},[$("div",qe,ue(o.replace("_","-")),1),$("div",Ve,[E.length>0?(y(!0),g(N,{key:0},B(E,(a,e)=>A((y(),g("button",{key:e,onClick:r=>k(r,a.key),onMouseenter:r=>s(r,a.key),onMouseleave:m,class:"px:12 py:8 r:$(builder-border-radius) fg:$(builder-color) bg:$(builder-bg-2) bg:$(builder-bg-3):hover {opacity:.5;font:semibold}>span opacity:100:hover>span"},[$("span",ze,ue(a.label),1)],40,De)),[[v,{placement:"top",content:`var(${a.key})`}]])),128)):H("",!0)])]))),128))])}}};function X(){var n,t;if(ie.$_state.activePanel!=="element")return null;const l=(n=ie.$_state)==null?void 0:n.activeElement.id;return(t=ie.$_getIframeDoc())==null?void 0:t.getElementById(`brxe-${l}`)}function Fe({selector:l,callback:n,options:t}){const p=new MutationObserver(n),s=document.querySelector(l);if(!s){logger(`Target not found for selector: ${l}`,{module:"variable-picker",type:"error"});return}const m={childList:!0,subtree:!0};p.observe(s,Object.assign(Object.assign({},m),t))}const je={class:"{m:10;pb:15}>div bb:1|solid|$(builder-border-color)>div:not(:last-child)"},Re={class:"variable-section-title font:14 my:10"},He={key:0,class:"variable-section-items"},Ne=["onClick","onMouseenter"],Be=["onClick","onMouseenter"],Ue=1e3,Xe={__name:"ColorVariableItems",props:{variableItems:{type:Object,required:!0}},setup(l){const n=C("focusedInput"),t=C("recentColorPickerTarget"),p=C("recentVariableSelectionTimestamp"),s=C("tempInputValue");function m(o,a){var e;if(!(performance.now()-p.value<Ue)){if(!n.value){const r=X();if(!r)return;const f=[{property:"color",control:"typography"},{property:"backgroundColor",control:"background"},{property:"borderColor",control:"border"}];for(const{property:u,control:h}of f)(e=t.value)!=null&&e.closest(`[data-control="${h}"]`)&&(r.style[u]=`var(${a})`);return}n.value.value=`var(${a})`,n.value.dispatchEvent(new Event("input")),n.value.focus()}}function k(o){var a;if(!n.value||s.value===null){const e=X();if(!e)return;const r=[{property:"color",control:"typography"},{property:"backgroundColor",control:"background"},{property:"borderColor",control:"border"}];for(const{property:f,control:u}of r)(a=t.value)!=null&&a.closest(`[data-control="${u}"]`)&&(e.style[f]="");return}n.value.value=s.value,n.value.dispatchEvent(new Event("input")),n.value.focus()}function b(o,a){if(o.stopPropagation(),o.preventDefault(),!n.value){const e=t.value;E(a),p.value=performance.now(),setTimeout(()=>{const r=X();if(!r)return;const f=[{property:"color",control:"typography"},{property:"backgroundColor",control:"background"},{property:"borderColor",control:"border"}];for(const{property:u,control:h}of f)e!=null&&e.closest(`[data-control="${h}"]`)&&(r.style[u]="")},5);return}n.value.value=`var(${a})`,n.value.dispatchEvent(new Event("input")),n.value.focus(),s.value=`var(${a})`,p.value=performance.now()}function c(){document.querySelectorAll(".windpressbricks-variable-app-colorpopup").forEach(o=>{o.remove()})}function v(){if(document.querySelector(".windpressbricks-variable-app-colorpopup"))return;const o=".bricks-control-popup { display: none !important; }",a=document.createElement("style");a.id="windpressbricks-variable-app-bricks-popup",a.appendChild(document.createTextNode(o)),a.classList.add("windpressbricks-variable-app-colorpopup"),document.head.appendChild(a)}async function E(o){var e,r,f,u,h;v(),document.querySelector(".bricks-control-popup .color-palette.grid")||((r=(e=t.value)==null?void 0:e.closest(".bricks-control-preview"))==null||r.click(),await new Promise(w=>setTimeout(w,25)));const a=document.querySelector(".bricks-control-popup .color-palette.grid");a?(u=(f=a.querySelector(`[data-balloon="var(${o})"]`))==null?void 0:f.parentElement)==null||u.click():se("Failed to select color. Color grid not found.",{module:"variable-picker",type:"error"}),(h=document.querySelector("body"))==null||h.click(),await new Promise(w=>setTimeout(w,2)),document.querySelector(".bricks-control-popup")?(setTimeout(()=>{var w;(w=document.querySelector("body"))==null||w.click(),setTimeout(()=>{c()},5)},5),se("Failed to close color picker. Delaying close.",{module:"variable-picker",type:"error"})):c()}return(o,a)=>{const e=j("tooltip");return y(),g("div",je,[(y(!0),g(N,null,B(l.variableItems,(r,f)=>(y(),g("div",{key:f,class:""},[$("div",Re,ue(f),1),r.DEFAULT?(y(),g("div",He,[A($("button",{onClick:u=>b(u,r.DEFAULT.key),onMouseenter:u=>m(u,r.DEFAULT.key),onMouseleave:k,class:V([`bg:$(${r.DEFAULT.key.slice(2)})`,"w:full r:4 h:24 border:1|solid|transparent border:white:hover"])},null,42,Ne),[[e,{placement:"top",content:`var(${r.DEFAULT.key})`}]])])):H("",!0),r.shades&&Object.keys(r.shades).length>0?(y(),g("div",{key:1,class:V([[{},`grid-template-cols:repeat(${Object.keys(r.shades).length},auto)`],"variable-section-items grid r:4 overflow:hidden"])},[(y(!0),g(N,null,B(r.shades,(u,h)=>(y(),g("div",{key:h,class:"flex gap:10"},[A($("button",{onClick:w=>b(w,u.key),onMouseenter:w=>m(w,u.key),onMouseleave:k,class:V([`bg:$(${u.key.slice(2)})`,"w:full h:24 border:1|solid|transparent border:white:hover"])},null,42,Be),[[e,{placement:"top",content:`var(${u.key})`}]])]))),128))],2)):H("",!0)]))),128))])}}},K=l=>(Lt("data-v-d9172fa2"),l=l(),It(),l),Ke={id:"windpressbricks-variable-app-body",class:"rel w:full h:full overflow-y:scroll!"},Ye=K(()=>$("span",{class:"font:semibold"},"Color",-1)),Ge=K(()=>$("span",{class:"font:semibold"},"Typography",-1)),Qe=K(()=>$("span",{class:"font:semibold"},"Sizing",-1)),Ze={__name:"PanelBody",setup(l){const n=I({colors:{},typography:{},sizing:{}}),t=C("focusedInput"),p=C("recentColorPickerTarget");async function s(){const c=await $t.contentWindow.wp.hooks.applyFilters("windpress.module.design_system.main_css"),v=Wt(xt(c)),E={};v.filter(e=>e.key.startsWith("--color")).forEach(e=>{const r=e.key.slice(8),f=r.split("-");let u="";if(f.length>1){const h=f[0],w=f.slice(1).join("-");u=`${h}.shades.'${w}'`}else u=`${r}.DEFAULT`;Vt(E,u,e)}),n.value.colors=Object.keys(E).sort().reduce((e,r)=>(e[r]=E[r],e),{});const o={font_size:[],line_height:[],letter_spacing:[]};v.filter(e=>e.key.startsWith("--font-size-")&&!e.key.endsWith("--line-height")).forEach(e=>{const r=e.key.slice(12);o.font_size.push({key:e.key,label:r,value:e.value})}),v.filter(e=>e.key.startsWith("--line-height-")||e.key.endsWith("--line-height")).forEach(e=>{const r=e.key.startsWith("--line-height-")?e.key.slice(14):e.key.slice(2,-13);o.line_height.push({key:e.key,label:r,value:e.value})}),o.line_height.sort((e,r)=>e.label.startsWith("font-size-")&&!r.label.startsWith("font-size-")?1:!e.label.startsWith("font-size-")&&r.label.startsWith("font-size-")?-1:0),v.filter(e=>e.key.startsWith("--letter-spacing-")).forEach(e=>{const r=e.key.slice(17);o.letter_spacing.push({key:e.key,label:r,value:e.value})}),n.value.typography=o;const a={spacing:[],width:[],breakpoint:[]};v.filter(e=>e.key.startsWith("--spacing-")).forEach(e=>{const r=e.key.slice(10);a.spacing.push({key:e.key,label:r,value:e.value})}),v.filter(e=>e.key.startsWith("--width-")).forEach(e=>{const r=e.key.slice(8);a.width.push({key:e.key,label:r,value:e.value})}),v.filter(e=>e.key.startsWith("--breakpoint-")).forEach(e=>{const r=e.key.slice(13);a.breakpoint.push({key:e.key,label:r,value:e.value})}),n.value.sizing=a}const m=I(null),k=I(null),b=I(null);return R(t,c=>{var v,E,o,a;if(c){const e=((E=(v=c.closest("[data-controlkey]"))==null?void 0:v.dataset.controlkey)==null?void 0:E.toLocaleLowerCase())??"",r=["typography","font"].some(h=>e.includes(h)),f=["padding","margin","gap","width","height"].some(h=>e.includes(h)),u=(a=(o=c.parentElement)==null?void 0:o.parentElement)==null?void 0:a.classList.contains("color-input");["_gridTemplateColumns","_gridTemplateRows"].some(h=>e.includes(h.toLocaleLowerCase())),k.value.togglePanel(!1),b.value.togglePanel(!1),m.value.togglePanel(!1),u?(m.value.togglePanel(!0),m.value.scrollIntoView()):r?(k.value.togglePanel(!0),k.value.scrollIntoView()):f&&(b.value.togglePanel(!0),b.value.scrollIntoView())}}),R(p,c=>{c&&(m.value.togglePanel(!0),m.value.scrollIntoView())}),Ee(()=>{s()}),new BroadcastChannel("windpress").addEventListener("message",async c=>{const v=c.data;v.source==="windpress/autocomplete"&&v.task==="windpress.main_css.saved.done"&&setTimeout(()=>{s()},1e3)}),(c,v)=>(y(),g("div",Ke,[L(U,{namespace:"variable",name:"color",ref_key:"sectionColor",ref:m},{header:P(()=>[Ye]),default:P(()=>[L(Xe,{variableItems:n.value.colors},null,8,["variableItems"])]),_:1},512),L(U,{namespace:"variable",name:"typography",ref_key:"sectionTypography",ref:k},{header:P(()=>[Ge]),default:P(()=>[L(pe,{variableItems:n.value.typography},null,8,["variableItems"])]),_:1},512),L(U,{namespace:"variable",name:"spacing",ref_key:"sectionSpacing",ref:b,class:""},{header:P(()=>[Qe]),default:P(()=>[L(pe,{variableItems:n.value.sizing},null,8,["variableItems"])]),_:1},512)]))}},Je=ae(Ze,[["__scopeId","data-v-d9172fa2"]]),et={id:"windpressbricks-variable-app-container",class:"flex flex:column w:full h:full fg:$(builder-color) bg:$(builder-bg) r:10 overflow:hidden box-shadow:$(builder-box-shadow) outline:1|solid|$(builder-color-accent)"},tt={__name:"App",setup(l){const n=C("isOpen");return(t,p)=>{const s=j("resizable");return A((y(),g("div",et,[L(Te),(y(),St(Tt,null,{default:P(()=>[L(Je)]),_:1}))])),[[ft,T(n)],[s,{minWidth:300,minHeight:500},void 0,{br:!0}]])}}},ot=ae(tt,[["__scopeId","data-v-1d394937"]]),D=document.createElement("windpressbricks-variable-app");D.id="windpressbricks-variable-app",document.body.appendChild(D);const M=I(!1),z=I(null),ve=I(null),Y=I(null),nt=I(0),S=ht(ot);S.config.globalProperties.windpressbricks=window.windpressbricks,S.provide("variableApp",D),S.provide("isOpen",M),S.provide("focusedInput",z),S.provide("tempInputValue",ve),S.provide("recentColorPickerTarget",Y),S.provide("recentVariableSelectionTimestamp",nt),S.use(yt,{container:"#windpressbricks-variable-app"}).use($e),S.component("font-awesome-icon",gt).component("inline-svg",kt),S.mount("#windpressbricks-variable-app");function me(l){var n;!l.shiftKey||!l.target||((n=document==null?void 0:document.getSelection())==null||n.removeAllRanges(),l.preventDefault(),l.stopPropagation(),z.value=l.target,ve.value=l.target.value,M.value=!0)}function be(l){z.value=l.target}const rt={includedFields:['div[data-control="number"]',{selector:'div[data-control="text"]',hasChild:["#_cssTransition","#_transformOrigin","#_flexBasis","#_overflow","#_gridTemplateColumns","#_gridTemplateRows","#_gridAutoColumns","#_gridAutoRows","#_objectPosition",'[id^="raw-"]']}],excludedFields:[".control-query",'div[data-controlkey="start"]','div[data-controlkey="perPage"]','div[data-controlkey="perMove"]','div[data-controlkey="speed"]']};function fe(){setTimeout(()=>{rt.includedFields.forEach(l=>{(typeof l=="string"?[...document.querySelectorAll(l)]:[...document.querySelectorAll(l.selector)].filter(n=>l.hasChild.some(t=>n.querySelector(t)))).forEach(n=>{const t=n.querySelector("input[type='text']");(t==null?void 0:t.getAttribute("windpressbricks-variable-app"))!=="true"&&(t==null||t.removeEventListener("click",me),t==null||t.addEventListener("click",me),t==null||t.removeEventListener("focus",be),t==null||t.addEventListener("focus",be),t==null||t.setAttribute("windpressbricks-variable-app","true"),t==null||t.parentNode.setAttribute("data-balloon","Shift + click to open the Variable Picker"),t==null||t.parentNode.setAttribute("data-balloon-pos","bottom-right"))})}),[...document.querySelectorAll(".bricks-control-preview")].filter(l=>{var n,t;return((t=(n=l.closest(".control-inner"))==null?void 0:n.querySelector("label"))==null?void 0:t.getAttribute("for"))==="color"}).forEach(l=>{const n=l.querySelector(".color-value-tooltip");n&&n.setAttribute("data-balloon",n.getAttribute("data-balloon")||"Shift + right click to open the Variable Picker"),l.addEventListener("contextmenu",t=>{var p;!t.shiftKey||!t.target||(t.preventDefault(),t.stopPropagation(),(p=document==null?void 0:document.getSelection())==null||p.removeAllRanges(),z.value=null,M.value=!0,Y.value=null,Pt(()=>{Y.value=t.target}))})})},100)}let G=!1;Fe({selector:"#bricks-panel-inner",options:{subtree:!0,childList:!0},callback(){G||(G=!0,fe(),setTimeout(()=>{G=!1},100))}}),fe(),document.addEventListener("keydown",l=>{l.key==="Escape"&&M.value&&(M.value=!1)}),R(M,l=>{D.style.zIndex=l?"calc(Infinity)":"-1"}),se("Module loaded!",{module:"variable-picker"})});
