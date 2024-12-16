"use strict";(self.webpackChunkportfolio_website=self.webpackChunkportfolio_website||[]).push([[982],{583:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});n(5043);var r=n(184),a=n(3156);const s=n.p+"static/media/my_pic.b067aeb263475fec9ec4.png";var i=n(5751),o=n(9473),l=n(579);const u=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.Hg,{name:"About",className:"About",children:(0,l.jsxs)("section",{className:"hero_section",children:[(0,l.jsxs)("div",{className:"hero_container flex items-center justify-center gap-[7rem] mt-16",children:[(0,l.jsxs)("div",{className:"hero_description","data-aos":"fade-right",children:[(0,l.jsx)("h3",{className:"hero_name font-bold text-[2.8rem] font-sans-serif text-[#DDDDDD]",children:"I'm Hassanjavaid!"}),(0,l.jsxs)("h1",{className:"heading_title font-bold text-[3rem] text-uppercase font-sans-serif",children:["FrontEnd React + ",(0,l.jsx)("br",{})," NodeJS Developer"]}),(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:s,alt:"",title:"Hassanjavaid",className:"hero_pic media_pic max-h-[28rem] hidden w-[24rem] object-cover rounded-[0.8rem] border-[2px] border-[#9c6cff5e] contrast-[1.5] hover:border-[#7f4ae7] transform hover:rotate-1"})}),(0,l.jsx)("p",{className:"hero_intro text-[1.25rem] max-w-[100%] w-[31.9rem] font-sans-serif text-[#D6D6D7] mt-[1.3rem]",children:"I break down complex user experinece problems to create integritiy focussed solutions that connect people."}),(0,l.jsx)("div",{className:"resume_social flex items-center gap-[2.3rem] space-y-[23] mt-[2rem]",children:(0,l.jsxs)("div",{className:"flex items-center gap-[1.1rem] z-40",children:[(0,l.jsxs)("a",{href:"https://www.linkedin.com/in/hassan-javaid-aa7610290/",target:"_blank",rel:"noopener noreferrer",className:"svg_icon",children:[" ",(0,l.jsx)(r.H1h,{className:"icon"})]}),(0,l.jsxs)("a",{href:"https://github.com/Hassanjavaid1",target:"_blank",rel:"noopener noreferrer",className:"svg_icon",children:[" ",(0,l.jsx)(a.hL4,{className:"icon"})]})]})})]}),(0,l.jsx)("h1",{className:"animated-text",children:"HI"}),(0,l.jsx)("div",{"data-aos":"fade-left",children:(0,l.jsx)("img",{src:s,alt:"",title:"Hassanjavaid",className:"hero_pic max-h-[28rem] w-[24rem] object-cover rounded-[0.8rem] border-[2px] border-[#9c6cff5e] contrast-[1] hover:border-[#7f4ae7] transform hover:rotate-1"})})]}),(0,l.jsxs)("div",{className:"hero_counter flex items-center justify-center mt-5rem pb-[2rem] gap-[11rem] mt-[2rem]",children:[(0,l.jsxs)("h4",{className:"about_hero text-[3rem] text-[#DDDDDD] font-bold text-[4.6rem] flex items-center justify-center font-sans-serif gap-[0.3rem]",children:[(0,l.jsx)(i.Ay,{end:2}),(0,l.jsxs)("span",{className:"counter_text text-[1rem] font-sans-serif opacity-[0.9] font-[600] ",children:["Years of ",(0,l.jsx)("br",{})," Experience"]})]}),(0,l.jsxs)("h4",{className:"about_hero text-[3rem] text-[#DDDDDD] font-bold text-[4.6rem] flex items-center justify-center font-sans-serif gap-[0.3rem]",children:[(0,l.jsx)(i.Ay,{end:parseFloat(9)}),"+",(0,l.jsxs)("span",{className:"counter_text text-[1rem] font-sans-serif opacity-[0.9] font-[600] ",children:["Projects ",(0,l.jsx)("br",{})," Completed"]})]}),(0,l.jsxs)("h4",{className:"about_hero text-[3rem] text-[#DDDDDD] font-bold text-[4.6rem] flex items-center justify-center font-sans-serif gap-[0.3rem]",children:[(0,l.jsx)(i.Ay,{end:1})," ",(0,l.jsxs)("span",{className:"counter_text text-[1rem] font-sans-serif opacity-[0.9] font-[600] ",children:["Internship ",(0,l.jsx)("br",{}),"Completed"]})]})]})]})})})}},7904:(t,e,n)=>{n.r(e),n.d(e,{CountUp:()=>a});var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},r.apply(this,arguments)},a=function(){function t(t,e,n){var a=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){a.startTime||(a.startTime=t);var e=t-a.startTime;a.remaining=a.duration-e,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(e,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(e,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(e/a.duration);var n=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=n?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),e<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.options.onCompleteCallback&&a.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,s,i=t<0?"-":"";e=Math.abs(t).toFixed(a.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],r=o.length>1?a.options.decimal+o[1]:"",a.options.useGrouping){s="";for(var l=3,u=0,c=0,f=n.length;c<f;++c)a.options.useIndianSeparators&&4===c&&(l=2,u=1),0!==c&&u%l==0&&(s=a.options.separator+s),u++,s=n[f-c-1]+s;n=s}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]}))),i+a.options.prefix+n+r+a.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return a.handleScroll(a)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,a=n.top+n.height+window.pageYOffset;a<e&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},5751:(t,e,n)=>{var r=n(5043),a=n(7904);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function l(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,s,i,o=[],l=!0,u=!1;try{if(s=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(o.push(r.value),o.length!==e);l=!0);}catch(t){u=!0,a=t}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function h(t){var e=r.useRef(t);return d((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],g={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},y=function(t){var e=Object.fromEntries(Object.entries(t).filter((function(t){return void 0!==f(t,2)[1]}))),n=r.useMemo((function(){return i(i({},g),e)}),[t]),s=n.ref,o=n.startOnMount,l=n.enableReinitialize,u=n.delay,p=n.onEnd,d=n.onStart,y=n.onPauseResume,b=n.onReset,v=n.onUpdate,x=c(n,m),j=r.useRef(),w=r.useRef(),V=r.useRef(!1),E=h((function(){return function(t,e){var n=e.decimal,r=e.decimals,s=e.duration,i=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,f=e.separator,p=e.start,d=e.suffix,h=e.useEasing,m=e.useGrouping,g=e.useIndianSeparators,y=e.enableScrollSpy,b=e.scrollSpyDelay,v=e.scrollSpyOnce,x=e.plugin;return new a.CountUp(t,o,{startVal:p,duration:s,decimal:n,decimalPlaces:r,easingFn:i,formattingFn:l,numerals:u,separator:f,prefix:c,suffix:d,plugin:x,useEasing:h,useIndianSeparators:g,useGrouping:m,enableScrollSpy:y,scrollSpyDelay:b,scrollSpyOnce:v})}("string"===typeof s?s:s.current,x)})),O=h((function(t){var e=j.current;if(e&&!t)return e;var n=E();return j.current=n,n})),S=h((function(){var t=function(){return O(!0).start((function(){null===p||void 0===p||p({pauseResume:D,reset:N,start:A,update:F})}))};u&&u>0?w.current=setTimeout(t,1e3*u):t(),null===d||void 0===d||d({pauseResume:D,reset:N,update:F})})),D=h((function(){O().pauseResume(),null===y||void 0===y||y({reset:N,start:A,update:F})})),N=h((function(){O().el&&(w.current&&clearTimeout(w.current),O().reset(),null===b||void 0===b||b({pauseResume:D,start:A,update:F}))})),F=h((function(t){O().update(t),null===v||void 0===v||v({pauseResume:D,reset:N,start:A})})),A=h((function(){N(),S()})),R=h((function(t){o&&(t&&N(),S())}));return r.useEffect((function(){V.current?l&&R(!0):(V.current=!0,R())}),[l,V,R,u,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){N()}}),[N]),{start:A,pauseResume:D,reset:N,update:F,getCountUp:O}},b=["className","redraw","containerProps","children","style"];e.Ay=function(t){var e=t.className,n=t.redraw,a=t.containerProps,s=t.children,o=t.style,l=c(t,b),f=r.useRef(null),p=r.useRef(!1),d=y(i(i({},l),{},{ref:f,startOnMount:"function"!==typeof s||0===t.delay,enableReinitialize:!1})),m=d.start,g=d.reset,v=d.update,x=d.pauseResume,j=d.getCountUp,w=h((function(){m()})),V=h((function(e){t.preserveValue||g(),v(e)})),E=h((function(){"function"!==typeof t.children||f.current instanceof Element?j():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){E()}),[E]),r.useEffect((function(){p.current&&V(t.end)}),[t.end,V]);var O=n&&t;return r.useEffect((function(){n&&p.current&&w()}),[w,n,O]),r.useEffect((function(){!n&&p.current&&w()}),[w,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){p.current=!0}),[]),"function"===typeof s?s({countUpRef:f,start:m,reset:g,update:v,pauseResume:x,getCountUp:j}):r.createElement("span",u({className:e,ref:f,style:o},a),"undefined"!==typeof t.start?j().formattingFn(t.start):"")}}}]);
//# sourceMappingURL=982.6da30ea8.chunk.js.map