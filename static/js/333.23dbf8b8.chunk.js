(self.webpackChunkportfolio_website=self.webpackChunkportfolio_website||[]).push([[333],{7904:(t,e,n)=>{"use strict";n.r(e),n.d(e,{CountUp:()=>o});var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},o=function(){function t(t,e,n){var o=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){o.startTime||(o.startTime=t);var e=t-o.startTime;o.remaining=o.duration-e,o.useEasing?o.countDown?o.frameVal=o.startVal-o.easingFn(e,0,o.startVal-o.endVal,o.duration):o.frameVal=o.easingFn(e,o.startVal,o.endVal-o.startVal,o.duration):o.frameVal=o.startVal+(o.endVal-o.startVal)*(e/o.duration);var n=o.countDown?o.frameVal<o.endVal:o.frameVal>o.endVal;o.frameVal=n?o.endVal:o.frameVal,o.frameVal=Number(o.frameVal.toFixed(o.options.decimalPlaces)),o.printValue(o.frameVal),e<o.duration?o.rAF=requestAnimationFrame(o.count):null!==o.finalEndVal?o.update(o.finalEndVal):o.options.onCompleteCallback&&o.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,i,a=t<0?"-":"";e=Math.abs(t).toFixed(o.options.decimalPlaces);var s=(e+="").split(".");if(n=s[0],r=s.length>1?o.options.decimal+s[1]:"",o.options.useGrouping){i="";for(var l=3,u=0,c=0,p=n.length;c<p;++c)o.options.useIndianSeparators&&4===c&&(l=2,u=1),0!==c&&u%l==0&&(i=o.options.separator+i),u++,i=n[p-c-1]+i;n=i}return o.options.numerals&&o.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return o.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return o.options.numerals[+t]}))),a+o.options.prefix+n+r+o.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return o.handleScroll(o)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,o=n.top+n.height+window.pageYOffset;o<e&&o>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>o||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},381:(t,e,n)=>{var r="Expected a function",o=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,p="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,d=p||f||Function("return this")(),h=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return d.Date.now()};function v(t,e,n){var o,i,a,s,l,u,c=0,p=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError(r);function h(e){var n=o,r=i;return o=i=void 0,c=e,s=t.apply(r,n)}function v(t){var n=t-u;return void 0===u||n>=e||n<0||f&&t-c>=a}function w(){var t=y();if(v(t))return S(t);l=setTimeout(w,function(t){var n=e-(t-u);return f?g(n,a-(t-c)):n}(t))}function S(t){return l=void 0,d&&o?h(t):(o=i=void 0,s)}function E(){var t=y(),n=v(t);if(o=arguments,i=this,u=t,n){if(void 0===l)return function(t){return c=t,l=setTimeout(w,e),p?h(t):s}(u);if(f)return l=setTimeout(w,e),h(u)}return void 0===l&&(l=setTimeout(w,e)),s}return e=O(e)||0,b(n)&&(p=!!n.leading,a=(f="maxWait"in n)?m(O(n.maxWait)||0,e):a,d="trailing"in n?!!n.trailing:d),E.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=u=i=l=void 0},E.flush=function(){return void 0===l?s:S(y())},E}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&h.call(t)==i}(t))return o;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=l.test(t);return n||u.test(t)?c(t.slice(2),n?2:8):s.test(t)?o:+t}t.exports=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(t,e,{leading:o,maxWait:e,trailing:i})}},1497:(t,e,n)=>{"use strict";var r=n(3218);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5173:(t,e,n)=>{t.exports=n(1497)()},3218:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5751:(t,e,n)=>{"use strict";var r=n(5043),o=n(7904);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function l(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,s=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function h(t){var e=r.useRef(t);return d((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],g={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},y=function(t){var e=Object.fromEntries(Object.entries(t).filter((function(t){return void 0!==p(t,2)[1]}))),n=r.useMemo((function(){return a(a({},g),e)}),[t]),i=n.ref,s=n.startOnMount,l=n.enableReinitialize,u=n.delay,f=n.onEnd,d=n.onStart,y=n.onPauseResume,v=n.onReset,b=n.onUpdate,O=c(n,m),w=r.useRef(),S=r.useRef(),E=r.useRef(!1),P=h((function(){return function(t,e){var n=e.decimal,r=e.decimals,i=e.duration,a=e.easingFn,s=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,p=e.separator,f=e.start,d=e.suffix,h=e.useEasing,m=e.useGrouping,g=e.useIndianSeparators,y=e.enableScrollSpy,v=e.scrollSpyDelay,b=e.scrollSpyOnce,O=e.plugin;return new o.CountUp(t,s,{startVal:f,duration:i,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:l,numerals:u,separator:p,prefix:c,suffix:d,plugin:O,useEasing:h,useIndianSeparators:g,useGrouping:m,enableScrollSpy:y,scrollSpyDelay:v,scrollSpyOnce:b})}("string"===typeof i?i:i.current,O)})),j=h((function(t){var e=w.current;if(e&&!t)return e;var n=P();return w.current=n,n})),V=h((function(){var t=function(){return j(!0).start((function(){null===f||void 0===f||f({pauseResume:T,reset:x,start:D,update:C})}))};u&&u>0?S.current=setTimeout(t,1e3*u):t(),null===d||void 0===d||d({pauseResume:T,reset:x,update:C})})),T=h((function(){j().pauseResume(),null===y||void 0===y||y({reset:x,start:D,update:C})})),x=h((function(){j().el&&(S.current&&clearTimeout(S.current),j().reset(),null===v||void 0===v||v({pauseResume:T,start:D,update:C}))})),C=h((function(t){j().update(t),null===b||void 0===b||b({pauseResume:T,reset:x,start:D})})),D=h((function(){x(),V()})),R=h((function(t){s&&(t&&x(),V())}));return r.useEffect((function(){E.current?l&&R(!0):(E.current=!0,R())}),[l,E,R,u,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){x()}}),[x]),{start:D,pauseResume:T,reset:x,update:C,getCountUp:j}},v=["className","redraw","containerProps","children","style"];e.Ay=function(t){var e=t.className,n=t.redraw,o=t.containerProps,i=t.children,s=t.style,l=c(t,v),p=r.useRef(null),f=r.useRef(!1),d=y(a(a({},l),{},{ref:p,startOnMount:"function"!==typeof i||0===t.delay,enableReinitialize:!1})),m=d.start,g=d.reset,b=d.update,O=d.pauseResume,w=d.getCountUp,S=h((function(){m()})),E=h((function(e){t.preserveValue||g(),b(e)})),P=h((function(){"function"!==typeof t.children||p.current instanceof Element?w():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){P()}),[P]),r.useEffect((function(){f.current&&E(t.end)}),[t.end,E]);var j=n&&t;return r.useEffect((function(){n&&f.current&&S()}),[S,n,j]),r.useEffect((function(){!n&&f.current&&S()}),[S,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){f.current=!0}),[]),"function"===typeof i?i({countUpRef:p,start:m,reset:g,update:b,pauseResume:O,getCountUp:w}):r.createElement("span",u({className:e,ref:p,style:s},o),"undefined"!==typeof t.start?w().formattingFn(t.start):"")}},7075:(t,e,n)=>{"use strict";n.d(e,{A:()=>w});var r=n(5043),o=n(5173),i=n.n(o),a=n(7950),s=n(381),l=n.n(s),u=["accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","challenge","charSet","checked","cite","classID","className","colSpan","cols","content","contentEditable","contextMenu","controls","controlsList","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","encType","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","height","hidden","high","href","hrefLang","htmlFor","httpEquiv","icon","id","inputMode","integrity","is","keyParams","keyType","kind","label","lang","list","loop","low","manifest","marginHeight","marginWidth","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","nonce","open","optimum","pattern","placeholder","poster","preload","profile","radioGroup","readOnly","rel","required","reversed","role","rowSpan","rows","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","spellCheck","src","srcDoc","srcLang","srcSet","start","step","style","summary","tabIndex","target","title","type","useMap","value","width","wmode","wrap"],c=["about","datatype","inlist","prefix","property","resource","typeof","vocab"],p=["onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onReset","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onLoad","onError","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onToggle"],f=/data-([a-zA-Z0-9\-]*)/,d=/aria-([a-zA-Z0-9\-]*)/;const h=function(t,e,n){void 0===t&&(t={}),void 0===e&&(e=[]),void 0===n&&(n=[]);var r=Object.assign({},t),o=Object.keys(r).filter((function(t){return-1===e.indexOf(t)&&(n.indexOf(t)>-1||(-1!==u.indexOf(t)||(-1!==c.indexOf(t)||(!!f.test(t)||(!!d.test(t)||-1!==p.indexOf(t))))))}));return Object.keys(r).forEach((function(t){-1===o.indexOf(t)&&delete r[t]})),r};function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}var O=function(t){var e,n;function o(e){var n;return(n=t.call(this,e)||this).onScrollThrottled=l()(n.onScroll.bind(v(n)),e.throttleScroll,{trailing:!1}),n.onResizeThrottled=l()(n.onResize.bind(v(n)),e.throttleResize,{trailing:!1}),n.state={inViewport:!1,progress:0,lastScrollPosition:null,lastScrollTime:null},n}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,b(e,n);var i=o.prototype;return i.componentDidMount=function(){addEventListener("resize",this.onResizeThrottled),addEventListener("scroll",this.onScrollThrottled),this.props.triggerOnLoad&&this.checkStatus()},i.componentDidUpdate=function(t,e){t.throttleScroll!==this.props.throttleScroll&&(removeEventListener("scroll",this.onScrollThrottled),this.onScrollThrottled=l()(this.onScroll.bind(this),this.props.throttleScroll,{trailing:!1}),addEventListener("scroll",this.onScrollThrottled)),t.throttleResize!==this.props.throttleResize&&(removeEventListener("resize",this.onResizeThrottled),this.onResizeThrottled=l()(this.onResize.bind(this),this.props.throttleResize,{trailing:!1}),addEventListener("resize",this.onResizeThrottled))},i.componentWillUnmount=function(){removeEventListener("resize",this.onResizeThrottled),removeEventListener("scroll",this.onScrollThrottled)},i.onResize=function(){this.checkStatus()},i.onScroll=function(){this.checkStatus()},i.checkStatus=function(){var t=this.props,e=t.containerRef,n=t.onEnter,r=t.onExit,o=t.onProgress,i=this.state,s=i.lastScrollPosition,l=i.lastScrollTime,u=a.findDOMNode(this.element).getBoundingClientRect(),c="string"===typeof e?document.querySelector(e):e,p=e===document.documentElement?Math.max(e.clientHeight,window.innerHeight||0):c.clientHeight,f=u.top<=p&&u.bottom>=0,d=window.scrollY,h=s&&l?Math.abs((s-d)/(l-Date.now())):null;if(f){var m=Math.max(0,Math.min(1,1-u.bottom/(p+u.height)));return this.state.inViewport||(this.setState({inViewport:f}),n({progress:m,velocity:h},this)),o({progress:m,velocity:h},this),void this.setState({lastScrollPosition:d,lastScrollTime:Date.now()})}if(this.state.inViewport){var g=u.top<=p?1:0;this.setState({lastScrollPosition:d,lastScrollTime:Date.now(),inViewport:f,progress:g}),o({progress:g,velocity:h},this),r({progress:g,velocity:h},this)}},i.render=function(){var t=this,e=this.props,n=e.children,o=e.component;return r[r.isValidElement(o)?"cloneElement":"createElement"](o,g(g({},h(this.props,["onProgress"])),{},{ref:function(e){t.element=e}}),n)},o}(r.Component);O.propTypes={component:i().oneOfType([i().element,i().node]),containerRef:i().oneOfType([i().object,i().string]),throttleResize:i().number,throttleScroll:i().number,triggerOnLoad:i().bool,onEnter:i().func,onExit:i().func,onProgress:i().func},O.defaultProps={component:"div",containerRef:"undefined"!==typeof document?document.documentElement:"html",throttleResize:100,throttleScroll:100,triggerOnLoad:!0,onEnter:function(){},onExit:function(){},onProgress:function(){}};const w=O},3441:(t,e,n)=>{"use strict";n.d(e,{k5:()=>d});var r=n(5043),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=["attr","size","title"];function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return t&&t.map(((t,e)=>r.createElement(t.tag,c({key:e},t.attr),f(t.child))))}function d(t){return e=>r.createElement(h,l({attr:c({},t.attr)},e),f(t.child))}function h(t){var e=e=>{var n,{attr:o,size:i,title:u}=t,p=s(t,a),f=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,p,{className:n,style:c(c({color:t.color||e.color},e.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(t=>e(t))):e(o)}}}]);
//# sourceMappingURL=333.23dbf8b8.chunk.js.map