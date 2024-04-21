"use strict";(self.webpackChunkportfolio_website=self.webpackChunkportfolio_website||[]).push([[757],{8452:(e,t,o)=>{o.d(t,{Ay:()=>f});class n{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=t}}const a={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},s=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},r=async function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=await fetch(a.origin+e,{method:"POST",headers:o,body:t}),r=await s.text(),i=new n(s.status,r);if(s.ok)return i;throw i},i=(e,t,o)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!==typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o||"string"!==typeof o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},l=e=>e.webdriver||!e.languages||0===e.languages.length,c=()=>new n(451,"Unavailable For Headless Browser"),d=(e,t)=>{if((e=>{var t;return!(null!==(t=e.list)&&void 0!==t&&t.length)||!e.watchVariable})(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const o=(n=t,a=e.watchVariable,n instanceof FormData?n.get(a):n[a]);var n,a;return"string"===typeof o&&e.list.includes(o)},u=()=>new n(403,"Forbidden"),p=async(e,t,o)=>{if(!t.throttle||!o)return!1;((e,t)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!==typeof t)throw"The LimitRate ID has to be a string"})(t.throttle,t.id);const n=t.id||e,a=await(async(e,t,o)=>{const n=Number(await o.get(e)||0);return t-Date.now()+n})(n,t.throttle,o);return a>0||(await o.set(n,Date.now().toString()),!1)},m=()=>new n(429,"Too Many Requests"),f={init:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";if(!e)return;const o=s(e);a.publicKey=o.publicKey,a.blockHeadless=o.blockHeadless,a.storageProvider=o.storageProvider,a.blockList=o.blockList,a.limitRate=o.limitRate,a.origin=o.origin||t},send:async(e,t,o,n)=>{const f=s(n),g=f.publicKey||a.publicKey,h=f.blockHeadless||a.blockHeadless,y=a.storageProvider||f.storageProvider,v={...a.blockList,...f.blockList},b={...a.limitRate,...f.limitRate};if(h&&l(navigator))return Promise.reject(c());if(i(g,e,t),(e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"})(o),o&&d(v,o))return Promise.reject(u());if(await p(location.pathname,b,y))return Promise.reject(m());const T={lib_version:"4.3.3",user_id:g,service_id:e,template_id:t,template_params:o};return r("/api/v1.0/email/send",JSON.stringify(T),{"Content-type":"application/json"})},sendForm:async(e,t,o,n)=>{const f=s(n),g=f.publicKey||a.publicKey,h=f.blockHeadless||a.blockHeadless,y=a.storageProvider||f.storageProvider,v={...a.blockList,...f.blockList},b={...a.limitRate,...f.limitRate};if(h&&l(navigator))return Promise.reject(c());const T=(e=>"string"===typeof e?document.querySelector(e):e)(o);i(g,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(T);const E=new FormData(T);return d(v,E)?Promise.reject(u()):await p(location.pathname,b,y)?Promise.reject(m()):(E.append("lib_version","4.3.3"),E.append("service_id",e),E.append("template_id",t),E.append("user_id",g),r("/api/v1.0/email/send-form",E))},EmailJSResponseStatus:n}},2342:()=>{},5394:(e,t,o)=>{o.d(t,{o9J:()=>a});var n=o(3441);function a(e){return(0,n.k5)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"},child:[]},{tag:"circle",attr:{cx:"256",cy:"192",r:"48",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"},child:[]}]})(e)}},6720:(e,t,o)=>{o.d(t,{rRo:()=>a});var n=o(3441);function a(e){return(0,n.k5)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"},child:[]}]})(e)}},3401:(e,t,o)=>{o.d(t,{N9:()=>O,oR:()=>R});var n=o(5043);function a(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(o=a(e[t]))&&(n&&(n+=" "),n+=o)}else for(o in e)e[o]&&(n&&(n+=" "),n+=o);return n}const s=function(){for(var e,t,o=0,n="",s=arguments.length;o<s;o++)(e=arguments[o])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n},r=e=>"number"==typeof e&&!isNaN(e),i=e=>"string"==typeof e,l=e=>"function"==typeof e,c=e=>i(e)||l(e)?e:null,d=e=>(0,n.isValidElement)(e)||i(e)||l(e)||r(e);function u(e){let{enter:t,exit:o,appendPosition:a=!1,collapse:s=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:d,nodeRef:u,isIn:p,playToast:m}=e;const f=a?"".concat(t,"--").concat(l):t,g=a?"".concat(o,"--").concat(l):o,h=(0,n.useRef)(0);return(0,n.useLayoutEffect)((()=>{const e=u.current,t=f.split(" "),o=n=>{n.target===u.current&&(m(),e.removeEventListener("animationend",o),e.removeEventListener("animationcancel",o),0===h.current&&"animationcancel"!==n.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,n.useEffect)((()=>{const e=u.current,t=()=>{e.removeEventListener("animationend",t),s?function(e,t,o){void 0===o&&(o=300);const{scrollHeight:n,style:a}=e;requestAnimationFrame((()=>{a.minHeight="initial",a.height=n+"px",a.transition="all ".concat(o,"ms"),requestAnimationFrame((()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,o)}))}))}(e,d,r):d()};p||(c?t():(h.current=1,e.className+=" ".concat(g),e.addEventListener("animationend",t)))}),[p]),n.createElement(n.Fragment,null,i)}}function p(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const m=new Map;let f=[];const g=new Set,h=e=>g.forEach((t=>t(e))),y=()=>m.size>0;function v(e,t){var o;if(t)return!(null==(o=m.get(t))||!o.isToastActive(e));let n=!1;return m.forEach((t=>{t.isToastActive(e)&&(n=!0)})),n}function b(e,t){d(e)&&(y()||f.push({content:e,options:t}),m.forEach((o=>{o.buildToast(e,t)})))}function T(e,t){m.forEach((o=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===o.id&&o.toggle(e,null==t?void 0:t.id):o.toggle(e,null==t?void 0:t.id)}))}function E(e){const{subscribe:t,getSnapshot:o,setProps:a}=(0,n.useRef)(function(e){const t=e.containerId||1;return{subscribe(o){const a=function(e,t,o){let a=1,s=0,u=[],m=[],f=[],g=t;const h=new Map,y=new Set,v=()=>{f=Array.from(h.values()),y.forEach((e=>e()))},b=e=>{m=null==e?[]:m.filter((t=>t!==e)),v()},T=e=>{const{toastId:t,onOpen:a,updateId:s,children:r}=e.props,i=null==s;e.staleId&&h.delete(e.staleId),h.set(t,e),m=[...m,e.props.toastId].filter((t=>t!==e.staleId)),v(),o(p(e,i?"added":"updated")),i&&l(a)&&a((0,n.isValidElement)(r)&&r.props)};return{id:e,props:g,observe:e=>(y.add(e),()=>y.delete(e)),toggle:(e,t)=>{h.forEach((o=>{null!=t&&t!==o.props.toastId||l(o.toggle)&&o.toggle(e)}))},removeToast:b,toasts:h,clearQueue:()=>{s-=u.length,u=[]},buildToast:(t,m)=>{if((t=>{let{containerId:o,toastId:n,updateId:a}=t;const s=o?o!==e:1!==e,r=h.has(n)&&null==a;return s||r})(m))return;const{toastId:f,updateId:y,data:E,staleId:w,delay:_}=m,I=()=>{b(f)},k=null==y;k&&s++;const L={...g,style:g.toastStyle,key:a++,...Object.fromEntries(Object.entries(m).filter((e=>{let[t,o]=e;return null!=o}))),toastId:f,updateId:y,data:E,closeToast:I,isIn:!1,className:c(m.className||g.toastClassName),bodyClassName:c(m.bodyClassName||g.bodyClassName),progressClassName:c(m.progressClassName||g.progressClassName),autoClose:!m.isLoading&&(C=m.autoClose,P=g.autoClose,!1===C||r(C)&&C>0?C:P),deleteToast(){const e=h.get(f),{onClose:t,children:a}=e.props;l(t)&&t((0,n.isValidElement)(a)&&a.props),o(p(e,"removed")),h.delete(f),s--,s<0&&(s=0),u.length>0?T(u.shift()):v()}};var C,P;L.closeButton=g.closeButton,!1===m.closeButton||d(m.closeButton)?L.closeButton=m.closeButton:!0===m.closeButton&&(L.closeButton=!d(g.closeButton)||g.closeButton);let N=t;(0,n.isValidElement)(t)&&!i(t.type)?N=(0,n.cloneElement)(t,{closeToast:I,toastProps:L,data:E}):l(t)&&(N=t({closeToast:I,toastProps:L,data:E}));const R={content:N,props:L,staleId:w};g.limit&&g.limit>0&&s>g.limit&&k?u.push(R):r(_)?setTimeout((()=>{T(R)}),_):T(R)},setProps(e){g=e},setToggle:(e,t)=>{h.get(e).toggle=t},isToastActive:e=>m.some((t=>t===e)),getSnapshot:()=>g.newestOnTop?f.reverse():f}}(t,e,h);m.set(t,a);const s=a.observe(o);return f.forEach((e=>b(e.content,e.options))),f=[],()=>{s(),m.delete(t)}},setProps(e){var o;null==(o=m.get(t))||o.setProps(e)},getSnapshot(){var e;return null==(e=m.get(t))?void 0:e.getSnapshot()}}}(e)).current;a(e);const s=(0,n.useSyncExternalStore)(t,o,o);return{getToastToRender:function(e){if(!s)return[];const t=new Map;return s.forEach((e=>{const{position:o}=e.props;t.has(o)||t.set(o,[]),t.get(o).push(e)})),Array.from(t,(t=>e(t[0],t[1])))},isToastActive:v,count:null==s?void 0:s.length}}function w(e){const[t,o]=(0,n.useState)(!1),[a,s]=(0,n.useState)(!1),r=(0,n.useRef)(null),i=(0,n.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:c,closeToast:d,onClick:u,closeOnClick:p}=e;var f,g;function h(){o(!0)}function y(){o(!1)}function v(o){const n=r.current;i.canDrag&&n&&(i.didMove=!0,t&&y(),i.delta="x"===e.draggableDirection?o.clientX-i.start:o.clientY-i.start,i.start!==o.clientX&&(i.canCloseOnClick=!1),n.style.transform="translate3d(".concat("x"===e.draggableDirection?"".concat(i.delta,"px, var(--y)"):"0, calc(".concat(i.delta,"px + var(--y))"),",0)"),n.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function b(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",b);const t=r.current;if(i.canDrag&&i.didMove&&t){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return s(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(g=m.get((f={id:e.toastId,containerId:e.containerId,fn:o}).containerId||1))||g.setToggle(f.id,f.fn),(0,n.useEffect)((()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||y(),window.addEventListener("focus",h),window.addEventListener("blur",y),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",y)}}),[e.pauseOnFocusLoss]);const T={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){i.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",b);const o=r.current;i.canCloseOnClick=!0,i.canDrag=!0,o.style.transition="none","x"===e.draggableDirection?(i.start=t.clientX,i.removalDistance=o.offsetWidth*(e.draggablePercent/100)):(i.start=t.clientY,i.removalDistance=o.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){const{top:o,bottom:n,left:a,right:s}=r.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=a&&t.clientX<=s&&t.clientY>=o&&t.clientY<=n?y():h()}};return l&&c&&(T.onMouseEnter=y,e.stacked||(T.onMouseLeave=h)),p&&(T.onClick=e=>{u&&u(e),i.canCloseOnClick&&d()}),{playToast:h,pauseToast:y,isRunning:t,preventExitTransition:a,toastRef:r,eventHandlers:T}}function _(e){let{delay:t,isRunning:o,closeToast:a,type:r="default",hide:i,className:c,style:d,controlledProgress:u,progress:p,rtl:m,isIn:f,theme:g}=e;const h=i||u&&0===p,y={...d,animationDuration:"".concat(t,"ms"),animationPlayState:o?"running":"paused"};u&&(y.transform="scaleX(".concat(p,")"));const v=s("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(r),{"Toastify__progress-bar--rtl":m}),b=l(c)?c({rtl:m,type:r,defaultClassName:v}):s(v,c),T={[u&&p>=1?"onTransitionEnd":"onAnimationEnd"]:u&&p<1?null:()=>{f&&a()}};return n.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":h},n.createElement("div",{className:"Toastify__progress-bar--bg Toastify__progress-bar-theme--".concat(g," Toastify__progress-bar--").concat(r)}),n.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:b,style:y,...T}))}let I=1;const k=()=>""+I++;function L(e){return e&&(i(e.toastId)||r(e.toastId))?e.toastId:k()}function C(e,t){return b(e,t),t.toastId}function P(e,t){return{...t,type:t&&t.type||e,toastId:L(t)}}function N(e){return(t,o)=>C(t,P(e,o))}function R(e,t){return C(e,P("default",t))}R.loading=(e,t)=>C(e,P("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),R.promise=function(e,t,o){let n,{pending:a,error:s,success:r}=t;a&&(n=i(a)?R.loading(a,o):R.loading(a.render,{...o,...a}));const c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(e,t,a)=>{if(null==t)return void R.dismiss(n);const s={type:e,...c,...o,data:a},r=i(t)?{render:t}:t;return n?R.update(n,{...s,...r}):R(r.render,{...s,...r}),a},u=l(e)?e():e;return u.then((e=>d("success",r,e))).catch((e=>d("error",s,e))),u},R.success=N("success"),R.info=N("info"),R.error=N("error"),R.warning=N("warning"),R.warn=R.warning,R.dark=(e,t)=>C(e,P("default",{theme:"dark",...t})),R.dismiss=function(e){!function(e){var t;if(y()){if(null==e||i(t=e)||r(t))m.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){const t=m.get(e.containerId);t?t.removeToast(e.id):m.forEach((t=>{t.removeToast(e.id)}))}}else f=f.filter((t=>null!=e&&t.options.toastId!==e))}(e)},R.clearWaitingQueue=function(e){void 0===e&&(e={}),m.forEach((t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()}))},R.isActive=v,R.update=function(e,t){void 0===t&&(t={});const o=((e,t)=>{var o;let{containerId:n}=t;return null==(o=m.get(n||1))?void 0:o.toasts.get(e)})(e,t);if(o){const{props:n,content:a}=o,s={delay:100,...n,...t,toastId:t.toastId||e,updateId:k()};s.toastId!==e&&(s.staleId=e);const r=s.render||a;delete s.render,C(r,s)}},R.done=e=>{R.update(e,{progress:1})},R.onChange=function(e){return g.add(e),()=>{g.delete(e)}},R.play=e=>T(!0,e),R.pause=e=>T(!1,e);const S="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,M=e=>{let{theme:t,type:o,isLoading:a,...s}=e;return n.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(o,")"),...s})},x={info:function(e){return n.createElement(M,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return n.createElement(M,{...e},n.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return n.createElement(M,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return n.createElement(M,{...e},n.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return n.createElement("div",{className:"Toastify__spinner"})}},A=e=>{const{isRunning:t,preventExitTransition:o,toastRef:a,eventHandlers:r,playToast:i}=w(e),{closeButton:c,children:d,autoClose:u,onClick:p,type:m,hideProgressBar:f,closeToast:g,transition:h,position:y,className:v,style:b,bodyClassName:T,bodyStyle:E,progressClassName:I,progressStyle:k,updateId:L,role:C,progress:P,rtl:N,toastId:R,deleteToast:S,isIn:M,isLoading:A,closeOnClick:D,theme:j}=e,B=s("Toastify__toast","Toastify__toast-theme--".concat(j),"Toastify__toast--".concat(m),{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":D}),O=l(v)?v({rtl:N,position:y,type:m,defaultClassName:B}):s(B,v),H=function(e){let{theme:t,type:o,isLoading:a,icon:s}=e,r=null;const i={theme:t,type:o};return!1===s||(l(s)?r=s({...i,isLoading:a}):(0,n.isValidElement)(s)?r=(0,n.cloneElement)(s,i):a?r=x.spinner():(e=>e in x)(o)&&(r=x[o](i))),r}(e),z=!!P||!u,V={closeToast:g,type:m,theme:j};let F=null;return!1===c||(F=l(c)?c(V):(0,n.isValidElement)(c)?(0,n.cloneElement)(c,V):function(e){let{closeToast:t,theme:o,ariaLabel:a="close"}=e;return n.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(o),type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":a},n.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(V)),n.createElement(h,{isIn:M,done:S,position:y,preventExitTransition:o,nodeRef:a,playToast:i},n.createElement("div",{id:R,onClick:p,"data-in":M,className:O,...r,style:b,ref:a},n.createElement("div",{...M&&{role:C},className:l(T)?T({type:m}):s("Toastify__toast-body",T),style:E},null!=H&&n.createElement("div",{className:s("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},H),n.createElement("div",null,d)),F,n.createElement(_,{...L&&!z?{key:"pb-".concat(L)}:{},rtl:N,theme:j,delay:u,isRunning:t,isIn:M,closeToast:g,hide:f,type:m,style:k,className:I,controlledProgress:z,progress:P||0})))},D=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},j=u(D("bounce",!0)),B=(u(D("slide",!0)),u(D("zoom")),u(D("flip")),{position:"top-right",transition:j,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function O(e){let t={...B,...e};const o=e.stacked,[a,r]=(0,n.useState)(!0),i=(0,n.useRef)(null),{getToastToRender:d,isToastActive:u,count:p}=E(t),{className:m,style:f,rtl:g,containerId:h}=t;function y(e){const t=s("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":g});return l(m)?m({position:e,rtl:g,defaultClassName:t}):s(t,c(m))}function v(){o&&(r(!0),R.play())}return S((()=>{if(o){var e;const o=i.current.querySelectorAll('[data-in="true"]'),n=12,s=null==(e=t.position)?void 0:e.includes("top");let r=0,l=0;Array.from(o).reverse().forEach(((e,t)=>{const o=e;o.classList.add("Toastify__toast--stacked"),t>0&&(o.dataset.collapsed="".concat(a)),o.dataset.pos||(o.dataset.pos=s?"top":"bot");const i=r*(a?.2:1)+(a?0:n*t);o.style.setProperty("--y","".concat(s?i:-1*i,"px")),o.style.setProperty("--g","".concat(n)),o.style.setProperty("--s",""+(1-(a?l:0))),r+=o.offsetHeight,l+=.025}))}}),[a,p,o]),n.createElement("div",{ref:i,className:"Toastify",id:h,onMouseEnter:()=>{o&&(r(!1),R.pause())},onMouseLeave:v},d(((e,t)=>{const a=t.length?{...f}:{...f,pointerEvents:"none"};return n.createElement("div",{className:y(e),style:a,key:"container-".concat(e)},t.map((e=>{let{content:t,props:a}=e;return n.createElement(A,{...a,stacked:o,collapseAll:v,isIn:u(a.toastId,a.containerId),style:a.style,key:"toast-".concat(a.key)},t)})))})))}}}]);
//# sourceMappingURL=757.bf8f6826.chunk.js.map