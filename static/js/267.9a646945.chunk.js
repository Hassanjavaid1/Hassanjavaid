"use strict";(self.webpackChunkportfolio_website=self.webpackChunkportfolio_website||[]).push([[267],{7224:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var r=n(5043),s=n(184),a=n(3156);const i=n.p+"static/media/my_pic.51f698a85fc079fe5a25.png";var o=n(5751),l=n(9473),u=(n(7115),n(579));const c=function(){const[t,e]=(0,r.useState)(!1),n=(0,r.useRef)(null);return(0,r.useEffect)((()=>{new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&e(!0)}))}),{threshold:.7}).observe(n.current)}),[]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(l.Hg,{name:"About",className:"About",children:(0,u.jsxs)("section",{className:"container mx-auto p-8 mt-10 xl:px-28",children:[(0,u.jsxs)("div",{className:"flex flex-col-reverse items-center justify-around md:flex-row",children:[(0,u.jsxs)("div",{className:"mt-8 md:w-2/3 2xl:w-2/4","data-aos":"fade-right",children:[(0,u.jsx)("h3",{className:"mb-3 font-bold text-3xl font-sans-serif text-[#DDDDDD] sm:text-4xl md:text-3xl lg:text-4xl 2xl:text-5xl",children:"I'm Hassanjavaid"}),(0,u.jsxs)("h1",{className:"heading_title font-bold text-5xl text-uppercase font-sans sm:leading-normal md:text-4xl md:leading-normal lg:text-5xl lg:leading-normal 2xl:text-6xl 2xl:leading-normal",children:["FrontEnd React + ",(0,u.jsx)("br",{})," NodeJS Developer"]}),(0,u.jsx)("p",{className:"hero_intro text-[1.4rem] font-sans-serif text-[#D6D6D7] mt-5",children:"I break down complex user experience problems to create integrity focused solutions that connect people."}),(0,u.jsx)("div",{className:"resume_social flex items-center gap-9 space-y-[23] mt-8",children:(0,u.jsxs)("div",{className:"flex items-center gap-[1.1rem] z-40",children:[(0,u.jsxs)("a",{href:"https://www.linkedin.com/in/hassan-javaid-aa7610290/",target:"_blank",rel:"noopener noreferrer",className:"svg_icon",children:[" ",(0,u.jsx)(s.H1h,{className:"icon"})]}),(0,u.jsxs)("a",{href:"https://github.com/Hassanjavaid1",target:"_blank",rel:"noopener noreferrer",className:"svg_icon",children:[" ",(0,u.jsx)(a.hL4,{className:"icon"})]})]})})]}),(0,u.jsx)("h1",{className:"hidden animated-text md:block",children:"HI"}),(0,u.jsx)("div",{"data-aos":"fade-left",className:"hero_pic relative",children:(0,u.jsx)("img",{src:i,alt:"",className:"object-cover rounded-[30px] border-2 border-[#9c6cff5e] transition-all hover:border-[#7f4ae7] transform rotate-2 hover:rotate-0"})})]}),(0,u.jsx)("div",{ref:n,className:"hero_counter flex items-center flex-wrap gap-8 mt-5rem pb-8 mt-20 md:justify-around",children:t&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("h4",{className:"about_hero text-[#DDDDDD] font-400 text-7xl flex items-center justify-center font-sans-serif gap-2 sm:font-semibold",children:[(0,u.jsx)(o.Ay,{end:1}),(0,u.jsxs)("span",{className:"counter_text text-[1rem] font-sans-serif opacity-90 ",children:["Year of ",(0,u.jsx)("br",{})," Experience"]})]}),(0,u.jsxs)("h4",{className:"about_hero  text-[#DDDDDD] font-400 text-7xl flex items-center justify-center font-sans-serif gap-2 sm:font-semibold",children:[(0,u.jsx)(o.Ay,{end:parseFloat(9)}),"+",(0,u.jsxs)("span",{className:"counter_text text-[1rem] font-sans-serif opacity-90 ",children:["Projects ",(0,u.jsx)("br",{})," Completed"]})]}),(0,u.jsxs)("h4",{className:"about_hero text-[#DDDDDD] font-400 text-7xl flex items-center justify-center font-sans-serif gap-2 sm:font-semibold",children:[(0,u.jsx)(o.Ay,{end:1})," ",(0,u.jsxs)("span",{className:"counter_text text-[1rem] font-sans-serif opacity-90",children:["Internship ",(0,u.jsx)("br",{}),"Completed"]})]})]})})]})})})}},7904:(t,e,n)=>{n.r(e),n.d(e,{CountUp:()=>s});var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},r.apply(this,arguments)},s=function(){function t(t,e,n){var s=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){s.startTime||(s.startTime=t);var e=t-s.startTime;s.remaining=s.duration-e,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(e,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(e,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(e/s.duration);var n=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=n?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),e<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.options.onCompleteCallback&&s.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,a,i=t<0?"-":"";e=Math.abs(t).toFixed(s.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],r=o.length>1?s.options.decimal+o[1]:"",s.options.useGrouping){a="";for(var l=3,u=0,c=0,f=n.length;c<f;++c)s.options.useIndianSeparators&&4===c&&(l=2,u=1),0!==c&&u%l==0&&(a=s.options.separator+a),u++,a=n[f-c-1]+a;n=a}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),i+s.options.prefix+n+r+s.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return s.handleScroll(s)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,s=n.top+n.height+window.pageYOffset;s<e&&s>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>s||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},5751:(t,e,n)=>{var r=n(5043),s=n(7904);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function l(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,s,a,i,o=[],l=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(o.push(r.value),o.length!==e);l=!0);}catch(t){u=!0,s=t}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw s}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function h(t){var e=r.useRef(t);return d((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],g={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},x=function(t){var e=Object.fromEntries(Object.entries(t).filter((function(t){return void 0!==f(t,2)[1]}))),n=r.useMemo((function(){return i(i({},g),e)}),[t]),a=n.ref,o=n.startOnMount,l=n.enableReinitialize,u=n.delay,p=n.onEnd,d=n.onStart,x=n.onPauseResume,y=n.onReset,b=n.onUpdate,v=c(n,m),j=r.useRef(),w=r.useRef(),V=r.useRef(!1),E=h((function(){return function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,i=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,f=e.separator,p=e.start,d=e.suffix,h=e.useEasing,m=e.useGrouping,g=e.useIndianSeparators,x=e.enableScrollSpy,y=e.scrollSpyDelay,b=e.scrollSpyOnce,v=e.plugin;return new s.CountUp(t,o,{startVal:p,duration:a,decimal:n,decimalPlaces:r,easingFn:i,formattingFn:l,numerals:u,separator:f,prefix:c,suffix:d,plugin:v,useEasing:h,useIndianSeparators:g,useGrouping:m,enableScrollSpy:x,scrollSpyDelay:y,scrollSpyOnce:b})}("string"===typeof a?a:a.current,v)})),O=h((function(t){var e=j.current;if(e&&!t)return e;var n=E();return j.current=n,n})),S=h((function(){var t=function(){return O(!0).start((function(){null===p||void 0===p||p({pauseResume:D,reset:N,start:A,update:F})}))};u&&u>0?w.current=setTimeout(t,1e3*u):t(),null===d||void 0===d||d({pauseResume:D,reset:N,update:F})})),D=h((function(){O().pauseResume(),null===x||void 0===x||x({reset:N,start:A,update:F})})),N=h((function(){O().el&&(w.current&&clearTimeout(w.current),O().reset(),null===y||void 0===y||y({pauseResume:D,start:A,update:F}))})),F=h((function(t){O().update(t),null===b||void 0===b||b({pauseResume:D,reset:N,start:A})})),A=h((function(){N(),S()})),R=h((function(t){o&&(t&&N(),S())}));return r.useEffect((function(){V.current?l&&R(!0):(V.current=!0,R())}),[l,V,R,u,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){N()}}),[N]),{start:A,pauseResume:D,reset:N,update:F,getCountUp:O}},y=["className","redraw","containerProps","children","style"];e.Ay=function(t){var e=t.className,n=t.redraw,s=t.containerProps,a=t.children,o=t.style,l=c(t,y),f=r.useRef(null),p=r.useRef(!1),d=x(i(i({},l),{},{ref:f,startOnMount:"function"!==typeof a||0===t.delay,enableReinitialize:!1})),m=d.start,g=d.reset,b=d.update,v=d.pauseResume,j=d.getCountUp,w=h((function(){m()})),V=h((function(e){t.preserveValue||g(),b(e)})),E=h((function(){"function"!==typeof t.children||f.current instanceof Element?j():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){E()}),[E]),r.useEffect((function(){p.current&&V(t.end)}),[t.end,V]);var O=n&&t;return r.useEffect((function(){n&&p.current&&w()}),[w,n,O]),r.useEffect((function(){!n&&p.current&&w()}),[w,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){p.current=!0}),[]),"function"===typeof a?a({countUpRef:f,start:m,reset:g,update:b,pauseResume:v,getCountUp:j}):r.createElement("span",u({className:e,ref:f,style:o},s),"undefined"!==typeof t.start?j().formattingFn(t.start):"")}}}]);
//# sourceMappingURL=267.9a646945.chunk.js.map