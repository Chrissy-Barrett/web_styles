/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */

!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){v(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},g=function(a){return a.replace(c.regex.minmaxwh,"").match(c.regex.other)};if(c.ajax=f,c.queue=d,c.unsupportedmq=g,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var h,i,j,k=a.document,l=k.documentElement,m=[],n=[],o=[],p={},q=30,r=k.getElementsByTagName("head")[0]||l,s=k.getElementsByTagName("base")[0],t=r.getElementsByTagName("link"),u=function(){var a,b=k.createElement("div"),c=k.body,d=l.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=k.createElement("body"),c.style.background="none"),l.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&l.insertBefore(c,l.firstChild),a=b.offsetWidth,f?l.removeChild(c):c.removeChild(b),l.style.fontSize=d,e&&(c.style.fontSize=e),a=j=parseFloat(a)},v=function(b){var c="clientWidth",d=l[c],e="CSS1Compat"===k.compatMode&&d||k.body[c]||d,f={},g=t[t.length-1],p=(new Date).getTime();if(b&&h&&q>p-h)return a.clearTimeout(i),i=a.setTimeout(v,q),void 0;h=p;for(var s in m)if(m.hasOwnProperty(s)){var w=m[s],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?j||u():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?j||u():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(n[w.rules]))}for(var C in o)o.hasOwnProperty(C)&&o[C]&&o[C].parentNode===r&&r.removeChild(o[C]);o.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=k.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,r.insertBefore(E,g.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(k.createTextNode(F)),o.push(E)}},w=function(a,b,d){var e=a.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},i=!f&&d;b.length&&(b+="/"),i&&(f=1);for(var j=0;f>j;j++){var k,l,o,p;i?(k=d,n.push(h(a))):(k=e[j].match(c.regex.findStyles)&&RegExp.$1,n.push(RegExp.$2&&h(RegExp.$2))),o=k.split(","),p=o.length;for(var q=0;p>q;q++)l=o[q],g(l)||m.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:n.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},x=function(){if(d.length){var b=d.shift();f(b.href,function(c){w(c,b.href,b.media),p[b.href]=!0,a.setTimeout(function(){x()},0)})}},y=function(){for(var b=0;b<t.length;b++){var c=t[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!p[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(w(c.styleSheet.rawCssText,e,f),p[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!s||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}x()};y(),c.update=y,c.getEmValue=u,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-shiv-mq-cssclasses-teststyles-load
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(prefixes.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},t=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return s("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});for(var B in m)v(m,B)&&(r=B.toLowerCase(),e[r]=m[B](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e.mq=t,e.testStyles=s,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};typeof YUI!="undefined"&&(YUI._YUI=YUI);var YUI=function(){var e=0,t=this,n=arguments,r=n.length,i=function(e,t){return e&&e.hasOwnProperty&&e instanceof t},s=typeof YUI_config!="undefined"&&YUI_config;i(t,YUI)?(t._init(),YUI.GlobalConfig&&t.applyConfig(YUI.GlobalConfig),s&&t.applyConfig(s),r||(t._afterConfig(),t._setup())):t=new YUI;if(r){for(;e<r;e++)t.applyConfig(n[e]);t._afterConfig(),t._setup()}return t.instanceOf=i,t};(function(){var e,t,n="patched-v3.18.0",r=".",i="http://yui.yahooapis.com/",s="yui3-js-enabled",o="yui3-css-stamp",u=function(){},a=Array.prototype.slice,f={"io.xdrReady":1,"io.xdrResponse":1,"SWF.eventHandler":1},l=typeof window!="undefined",c=l?window:null,h=l?c.document:null,p=h&&h.documentElement,d=p&&p.className,v={},m=(new Date).getTime(),g=function(e,t,n,r){e&&e.addEventListener?e.addEventListener(t,n,r):e&&e.attachEvent&&e.attachEvent("on"+t,n)},y=function(e,t,n,r){if(e&&e.removeEventListener)try{e.removeEventListener(t,n,r)}catch(i){}else e&&e.detachEvent&&e.detachEvent("on"+t,n)},b=function(){YUI.Env.DOMReady=!0,l&&y(h,"DOMContentLoaded",b)},w=function(){YUI.Env.windowLoaded=!0,YUI.Env.DOMReady=!0,l&&y(window,"load",w)},E=function(e,t){var n=e.Env._loader,r=["loader-base"],i=YUI.Env,s=i.mods;return n?(n.ignoreRegistered=!1,n.onEnd=null,n.data=null,n.required=[],n.loadType=null):(n=new e.Loader(e.config),e.Env._loader=n),s&&s.loader&&(r=[].concat(r,YUI.Env.loaderExtras)),YUI.Env.core=e.Array.dedupe([].concat(YUI.Env.core,r)),n},S=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},x={success:!0};p&&d.indexOf(s)==-1&&(d&&(d+=" "),d+=s,p.className=d),n.indexOf("@")>-1&&(n="3.5.0"),e={applyConfig:function(e){e=e||u;var t,n,r=this.config,i=r.modules,s=r.groups,o=r.aliases,a=this.Env._loader;for(n in e)e.hasOwnProperty(n)&&(t=e[n],i&&n=="modules"?S(i,t):o&&n=="aliases"?S(o,t):s&&n=="groups"?S(s,t):n=="win"?(r[n]=t&&t.contentWindow||t,r.doc=r[n]?r[n].document:null):n!="_yuid"&&(r[n]=t));a&&a._config(e)},_config:function(e){this.applyConfig(e)},_init:function(){var e,t,r=this,s=YUI.Env,u=r.Env,a;r.version=n;if(!u){r.Env={core:["get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup","loader-yui3"],loaderExtras:["loader-rollup","loader-yui3"],mods:{},versions:{},base:i,cdn:i+n+"/",_idx:0,_used:{},_attached:{},_exported:{},_missed:[],_yidx:0,_uidx:0,_guidp:"y",_loaded:{},_BASE_RE:/(?:\?(?:[^&]*&)*([^&]*))?\b(aui|yui(?:-\w+)?)\/\2(?:-(min|debug))?\.js/,parseBasePath:function(e,t){var n=e.match(t),r,i;return n&&(r=RegExp.leftContext||e.slice(0,e.indexOf(n[0])),i=n[3],n[1]&&(r+="?"+n[1]),r={filter:i,path:r}),r},getBase:s&&s.getBase||function(t){var n=h&&h.getElementsByTagName("script")||[],i=u.cdn,s,o,a,f;for(o=0,a=n.length;o<a;++o){f=n[o].src;if(f){s=r.Env.parseBasePath(f,t);if(s){e=s.filter,i=s.path;break}}}return i}},u=r.Env,u._loaded[n]={};if(s&&r!==YUI)u._yidx=++s._yidx,u._guidp=("yui_"+n+"_"+u._yidx+"_"+m).replace(/[^a-z0-9_]+/g,"_");else if(YUI._YUI){s=YUI._YUI.Env,u._yidx+=s._yidx,u._uidx+=s._uidx;for(a in s)a in u||(u[a]=s[a]);delete YUI._YUI}r.id=r.stamp(r),v[r.id]=r}r.constructor=YUI,r.config=r.config||{bootstrap:!0,cacheUse:!0,debug:!0,doc:h,fetchCSS:!0,throwFail:!0,useBrowserConsole:!0,useNativeES5:!0,win:c},h&&!h.getElementById(o)?(t=h.createElement("div"),t.innerHTML='<div id="'+o+'" style="position: absolute !important; visibility: hidden !important"></div>',YUI.Env.cssStampEl=t.firstChild,h.body?h.body.appendChild(YUI.Env.cssStampEl):p.insertBefore(YUI.Env.cssStampEl,p.firstChild)):h&&h.getElementById(o)&&!YUI.Env.cssStampEl&&(YUI.Env.cssStampEl=h.getElementById(o)),r.config.lang=r.config.lang||"en-US",r.config.base=YUI.config.base||YUI.config.defaultBase&&YUI.config.root&&YUI.config.defaultBase+YUI.config.root||r.Env.getBase(r.Env._BASE_RE);if(!e||!"mindebug".indexOf(e))e="min";e=e?"-"+e:e,r.config.loaderPath=YUI.config.loaderPath||"loader/loader"+e+".js"},_afterConfig:function(){var e=this;e.config.hasOwnProperty("global")||(e.config.global=Function("return this")())},_setup:function(){var e,t=this,n=[],r=YUI.Env.mods,i=t.config.extendedCore||[],s=t.config.core||[].concat(YUI.Env.core).concat(i);for(e=0;e<s.length;e++)r[s[e]]&&n.push(s[e]);t._attach(["yui-base"]),t._attach(n),t.Loader&&E(t)},applyTo:function(e,t,n){if(t in f){var r=v[e],i,s,o;if(r){i=t.split("."),s=r;for(o=0;o<i.length;o+=1)s=s[i[o]],s||this.log("applyTo not found: "+t,"warn","yui");return s&&s.apply(r,n)}return null}return this.log(t+": applyTo not allowed","warn","yui"),null},add:function(e,t,n,r){r=r||{};var i=YUI.Env,s={name:e,fn:t,version:n,details:r},o={},u,a,f,l,c=i.versions;i.mods[e]=s,c[n]=c[n]||{},c[n][e]=s;for(l in v)v.hasOwnProperty(l)&&(a=v[l],o[a.id]||(o[a.id]=!0,u=a.Env._loader,u&&(f=u.getModuleInfo(e),(!f||f.temp)&&u.addModule(r,e))));return this},_attach:function(e,t){var n,r,i,s,o,u,a,f=YUI.Env.mods,l=YUI.Env.aliases,c=this,h,p=YUI.Env._renderedMods,d=c.Env._loader,v=c.Env._attached,m=c.Env._exported,g=e.length,d,y,b,w=[],E,S,x,T,N,C,k;for(n=0;n<g;n++){r=e[n],i=f[r],w.push(r);if(d&&d.conditions[r])for(h in d.conditions[r])d.conditions[r].hasOwnProperty(h)&&(y=d.conditions[r][h],b=y&&(y.ua&&c.UA[y.ua]||y.test&&y.test(c)),b&&w.push(y.name))}e=w,g=e.length;for(n=0;n<g;n++)if(!v[e[n]]){r=e[n],i=f[r];if(l&&l[r]&&!i){c._attach(l[r]);continue}if(!i)T=d&&d.getModuleInfo(r),T&&(i=T,t=!0),!t&&r&&r.indexOf("skin-")===-1&&r.indexOf("css")===-1&&(c.Env._missed.push(r),c.Env._missed=c.Array.dedupe(c.Env._missed),c.message("NOT loaded: "+r,"warn","yui"));else{v[r]=!0;for(h=0;h<c.Env._missed.length;h++)c.Env._missed[h]===r&&(c.message("Found: "+r+" (was reported as missing earlier)","warn","yui"),c.Env._missed.splice(h,1));if(d&&!d._canBeAttached(r))return!0;if(d&&p&&p[r]&&p[r].temp){d.getRequires(p[r]),o=[],T=d.getModuleInfo(r);for(h in T.expanded_map)T.expanded_map.hasOwnProperty(h)&&o.push(h);c._attach(o)}s=i.details,o=s.requires,S=s.es,u=s.use,a=s.after,s.lang&&(o=o||[],o.unshift("intl"));if(o){x=o.length;for(h=0;h<x;h++)if(!v[o[h]]){if(!c._attach(o)
)return!1;break}}if(a)for(h=0;h<a.length;h++)if(!v[a[h]]){if(!c._attach(a,!0))return!1;break}if(i.fn){E=[c,r];if(S){k={},C={},E.push(k,C);if(o){x=o.length;for(h=0;h<x;h++)k[o[h]]=m.hasOwnProperty(o[h])?m[o[h]]:c}}if(c.config.throwFail)C=i.fn.apply(S?undefined:i,E);else try{C=i.fn.apply(S?undefined:i,E)}catch(L){return c.error("Attach error: "+r,L,r),!1}S&&(m[r]=C,N=i.details.condition,N&&N.when==="instead"&&(m[N.trigger]=C))}if(u)for(h=0;h<u.length;h++)if(!v[u[h]]){if(!c._attach(u))return!1;break}}}return!0},_delayCallback:function(e,t){var n=this,r=["event-base"];return t=n.Lang.isObject(t)?t:{event:t},t.event==="load"&&r.push("event-synthetic"),function(){var i=arguments;n._use(r,function(){n.on(t.event,function(){i[1].delayUntil=t.event,e.apply(n,i)},t.args)})}},use:function(){var e=a.call(arguments,0),t=e[e.length-1],n=this,r=0,i,s=n.Env,o=!0;n.Lang.isFunction(t)?(e.pop(),n.config.delayUntil&&(t=n._delayCallback(t,n.config.delayUntil))):t=null,n.Lang.isArray(e[0])&&(e=e[0]);if(n.config.cacheUse){while(i=e[r++])if(!s._attached[i]){o=!1;break}if(o)return e.length,n._notify(t,x,e),n}return n._loading?(n._useQueue=n._useQueue||new n.Queue,n._useQueue.add([e,t])):n._use(e,function(n,r){n._notify(t,r,e)}),n},require:function(){var e=a.call(arguments),t;typeof e[e.length-1]=="function"&&(t=e.pop(),e.push(function(n){var r,i=e.length,s=n.Env._exported,o={};for(r=0;r<i;r++)s.hasOwnProperty(e[r])&&(o[e[r]]=s[e[r]]);t.call(undefined,n,o)})),this.use.apply(this,e)},_notify:function(e,t,n){if(!t.success&&this.config.loadErrorFn)this.config.loadErrorFn.call(this,this,e,t,n);else if(e){this.Env._missed&&this.Env._missed.length&&(t.msg="Missing modules: "+this.Env._missed.join(),t.success=!1);if(this.config.throwFail)e(this,t);else try{e(this,t)}catch(r){this.error("use callback error",r,n)}}},_use:function(e,t){this.Array||this._attach(["yui-base"]);var r,i,s,o=this,u=YUI.Env,a=u.mods,f=o.Env,l=f._used,c=u.aliases,h=u._loaderQueue,p=e[0],d=o.Array,v=o.config,m=v.bootstrap,g=[],y,b=[],w=!0,S=v.fetchCSS,x=function(e,t){var r=0,i=[],s,o,f,h,p;if(!e.length)return;if(c){o=e.length;for(r=0;r<o;r++)c[e[r]]&&!a[e[r]]?i=[].concat(i,c[e[r]]):i.push(e[r]);e=i}o=e.length;for(r=0;r<o;r++){s=e[r],t||b.push(s);if(l[s])continue;f=a[s],h=null,p=null,f?(l[s]=!0,h=f.details.requires,p=f.details.use):u._loaded[n][s]?l[s]=!0:g.push(s),h&&h.length&&x(h),p&&p.length&&x(p,1)}},T=function(n){var r=n||{success:!0,msg:"not dynamic"},i,s,u=!0,a=r.data;o._loading=!1,a&&(s=g,g=[],b=[],x(a),i=g.length,i&&[].concat(g).sort().join()==s.sort().join()&&(i=!1)),i&&a?(o._loading=!0,o._use(g,function(){o._attach(a)&&o._notify(t,r,a)})):(a&&(u=o._attach(a)),u&&o._notify(t,r,e)),o._useQueue&&o._useQueue.size()&&!o._loading&&o._use.apply(o,o._useQueue.next())};if(p==="*"){e=[];for(y in a)a.hasOwnProperty(y)&&e.push(y);return w=o._attach(e),w&&T(),o}return(a.loader||a["loader-base"])&&!o.Loader&&o._attach(["loader"+(a.loader?"":"-base")]),m&&o.Loader&&e.length&&(i=E(o),i.require(e),i.ignoreRegistered=!0,i._boot=!0,i.calculate(null,S?null:"js"),e=i.sorted,i._boot=!1),x(e),r=g.length,r&&(g=d.dedupe(g),r=g.length),m&&r&&o.Loader?(o._loading=!0,i=E(o),i.onEnd=T,i.context=o,i.data=e,i.ignoreRegistered=!1,i.require(g),i.insert(null,S?null:"js")):m&&r&&o.Get&&!f.bootstrapped?(o._loading=!0,s=function(){o._loading=!1,h.running=!1,f.bootstrapped=!0,u._bootstrapping=!1,o._attach(["loader"])&&o._use(e,t)},u._bootstrapping?h.add(s):(u._bootstrapping=!0,o.Get.script(v.base+v.loaderPath,{onEnd:s}))):(w=o._attach(e),w&&T()),o},namespace:function(){var e=arguments,t,n=0,i,s,o;for(;n<e.length;n++){t=this,o=e[n];if(o.indexOf(r)>-1){s=o.split(r);for(i=s[0]=="YAHOO"?1:0;i<s.length;i++)t[s[i]]=t[s[i]]||{},t=t[s[i]]}else t[o]=t[o]||{},t=t[o]}return t},log:u,message:u,dump:function(e){return""+e},error:function(e,t,n){var r=this,i;r.config.errorFn&&(i=r.config.errorFn.apply(r,arguments));if(!i)throw t||new Error(e);return r.message(e,"error",""+n),r},guid:function(e){var t=this.Env._guidp+"_"+ ++this.Env._uidx;return e?e+t:t},stamp:function(e,t){var n;if(!e)return e;e.uniqueID&&e.nodeType&&e.nodeType!==9?n=e.uniqueID:n=typeof e=="string"?e:e._yuid;if(!n){n=this.guid();if(!t)try{e._yuid=n}catch(r){n=null}}return n},destroy:function(){var e=this;e.Event&&e.Event._unload(),delete v[e.id],delete e.Env,delete e.config}},YUI.prototype=e;for(t in e)e.hasOwnProperty(t)&&(YUI[t]=e[t]);YUI.applyConfig=function(e){if(!e)return;YUI.GlobalConfig&&this.prototype.applyConfig.call(this,YUI.GlobalConfig),this.prototype.applyConfig.call(this,e),YUI.GlobalConfig=this.config},YUI._init(),l?(g(h,"DOMContentLoaded",b),g(window,"load",w)):(b(),w()),YUI.Env.add=g,YUI.Env.remove=y,typeof exports=="object"&&(exports.YUI=YUI,YUI.setLoadHook=function(e){YUI._getLoadHook=e},YUI._getLoadHook=null),YUI.Env[n]={}})(),YUI.add("yui-base",function(e,t){function m(e,t,n){var r,i;t||(t=0);if(n||m.test(e))try{return d.slice.call(e,t)}catch(s){i=[];for(r=e.length;t<r;++t)i.push(e[t]);return i}return[e]}function g(){this._init(),this.add.apply(this,arguments)}var n=e.Lang||(e.Lang={}),r=String.prototype,i=Object.prototype.toString,s={"undefined":"undefined",number:"number","boolean":"boolean",string:"string","[object Function]":"function","[object RegExp]":"regexp","[object Array]":"array","[object Date]":"date","[object Error]":"error"},o=/\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g,u="	\n\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff",a="[	-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+",f=new RegExp("^"+a),l=new RegExp(a+"$"),c=new RegExp(f.source+"|"+l.source,"g"),h=/\{\s*\[(?:native code|function)\]\s*\}/i;n._isNative=function(t){return!!(e.config.useNativeES5&&t&&h.test(t))},n.isArray=n._isNative(Array.isArray)?Array.isArray:function(e){return n.type(e)==="array"},n.isBoolean=function(e){return typeof e=="boolean"},n.isDate=function(e){return n.type(e)==="date"&&e.toString()!=="Invalid Date"&&!isNaN
(e)},n.isFunction=function(e){return n.type(e)==="function"},n.isNull=function(e){return e===null},n.isNumber=function(e){return typeof e=="number"&&isFinite(e)},n.isObject=function(e,t){var r=typeof e;return e&&(r==="object"||!t&&(r==="function"||n.isFunction(e)))||!1},n.isRegExp=function(e){return n.type(e)==="regexp"},n.isString=function(e){return typeof e=="string"},n.isUndefined=function(e){return typeof e=="undefined"},n.isValue=function(e){var t=n.type(e);switch(t){case"number":return isFinite(e);case"null":case"undefined":return!1;default:return!!t}},n.now=Date.now||function(){return(new Date).getTime()},n.sub=function(e,t){function n(e,t){var r;if(typeof e[t]!="undefined")return e[t];t=t.split("."),r=t.slice(1).join("."),t=t[0];if(r&&typeof e[t]=="object"&&e[t]!==null)return n(e[t],r)}return e.replace?e.replace(o,function(e,r){var i=r.indexOf(".")>-1?n(t,r):t[r];return typeof i=="undefined"?e:i}):e},n.trim=n._isNative(r.trim)&&!u.trim()?function(e){return e&&e.trim?e.trim():e}:function(e){try{return e.replace(c,"")}catch(t){return e}},n.trimLeft=n._isNative(r.trimLeft)&&!u.trimLeft()?function(e){return e.trimLeft()}:function(e){return e.replace(f,"")},n.trimRight=n._isNative(r.trimRight)&&!u.trimRight()?function(e){return e.trimRight()}:function(e){return e.replace(l,"")},n.type=function(e){return s[typeof e]||s[i.call(e)]||(e?"object":"null")};var p=e.Lang,d=Array.prototype,v=Object.prototype.hasOwnProperty;e.Array=m,m.dedupe=p._isNative(Object.create)?function(e){var t=Object.create(null),n=[],r,i,s;for(r=0,s=e.length;r<s;++r)i=e[r],t[i]||(t[i]=1,n.push(i));return n}:function(e){var t={},n=[],r,i,s;for(r=0,s=e.length;r<s;++r)i=e[r],v.call(t,i)||(t[i]=1,n.push(i));return n},m.each=m.forEach=p._isNative(d.forEach)?function(t,n,r){return d.forEach.call(t||[],n,r||e),e}:function(t,n,r){for(var i=0,s=t&&t.length||0;i<s;++i)i in t&&n.call(r||e,t[i],i,t);return e},m.hash=function(e,t){var n={},r=t&&t.length||0,i,s;for(i=0,s=e.length;i<s;++i)i in e&&(n[e[i]]=r>i&&i in t?t[i]:!0);return n},m.indexOf=p._isNative(d.indexOf)?function(e,t,n){return d.indexOf.call(e,t,n)}:function(e,t,n){var r=e.length;n=+n||0,n=(n>0||-1)*Math.floor(Math.abs(n)),n<0&&(n+=r,n<0&&(n=0));for(;n<r;++n)if(n in e&&e[n]===t)return n;return-1},m.numericSort=function(e,t){return e-t},m.some=p._isNative(d.some)?function(e,t,n){return d.some.call(e,t,n)}:function(e,t,n){for(var r=0,i=e.length;r<i;++r)if(r in e&&t.call(n,e[r],r,e))return!0;return!1},m.test=function(e){var t=0;if(p.isArray(e))t=1;else if(p.isObject(e))try{"length"in e&&!e.tagName&&(!e.scrollTo||!e.document)&&!e.apply&&(t=2)}catch(n){}return t},g.prototype={_init:function(){this._q=[]},next:function(){return this._q.shift()},last:function(){return this._q.pop()},add:function(){return this._q.push.apply(this._q,arguments),this},size:function(){return this._q.length}},e.Queue=g,YUI.Env._loaderQueue=YUI.Env._loaderQueue||new g;var y="__",v=Object.prototype.hasOwnProperty,b=e.Lang.isObject;e.cached=function(e,t,n){return t||(t={}),function(r){var i=arguments.length>1?Array.prototype.join.call(arguments,y):String(r);if(!(i in t)||n&&t[i]==n)t[i]=e.apply(e,arguments);return t[i]}},e.getLocation=function(){var t=e.config.win;return t&&t.location},e.merge=function(){var e=0,t=arguments.length,n={},r,i;for(;e<t;++e){i=arguments[e];for(r in i)v.call(i,r)&&(n[r]=i[r])}return n},e.mix=function(t,n,r,i,s,o){var u,a,f,l,c,h,p;if(!t||!n)return t||e;if(s){s===2&&e.mix(t.prototype,n.prototype,r,i,0,o),f=s===1||s===3?n.prototype:n,p=s===1||s===4?t.prototype:t;if(!f||!p)return t}else f=n,p=t;u=r&&!o;if(i)for(l=0,h=i.length;l<h;++l){c=i[l];if(!v.call(f,c))continue;a=u?!1:c in p;if(o&&a&&b(p[c],!0)&&b(f[c],!0))e.mix(p[c],f[c],r,null,0,o);else if(r||!a)p[c]=f[c]}else{for(c in f){if(!v.call(f,c))continue;a=u?!1:c in p;if(o&&a&&b(p[c],!0)&&b(f[c],!0))e.mix(p[c],f[c],r,null,0,o);else if(r||!a)p[c]=f[c]}e.Object._hasEnumBug&&e.mix(p,f,r,e.Object._forceEnum,s,o)}return t};var p=e.Lang,v=Object.prototype.hasOwnProperty,w,E=e.Object=p._isNative(Object.create)?function(e){return Object.create(e)}:function(){function e(){}return function(t){return e.prototype=t,new e}}(),S=E._forceEnum=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toString","toLocaleString","valueOf"],x=E._hasEnumBug=!{valueOf:0}.propertyIsEnumerable("valueOf"),T=E._hasProtoEnumBug=function(){}.propertyIsEnumerable("prototype"),N=E.owns=function(e,t){return!!e&&v.call(e,t)};E.hasKey=N,E.keys=p._isNative(Object.keys)&&!T?Object.keys:function(e){if(!p.isObject(e))throw new TypeError("Object.keys called on a non-object");var t=[],n,r,i;if(T&&typeof e=="function")for(r in e)N(e,r)&&r!=="prototype"&&t.push(r);else for(r in e)N(e,r)&&t.push(r);if(x)for(n=0,i=S.length;n<i;++n)r=S[n],N(e,r)&&t.push(r);return t},E.values=function(e){var t=E.keys(e),n=0,r=t.length,i=[];for(;n<r;++n)i.push(e[t[n]]);return i},E.size=function(e){try{return E.keys(e).length}catch(t){return 0}},E.hasValue=function(t,n){return e.Array.indexOf(E.values(t),n)>-1},E.each=function(t,n,r,i){var s;for(s in t)(i||N(t,s))&&n.call(r||e,t[s],s,t);return e},E.some=function(t,n,r,i){var s;for(s in t)if(i||N(t,s))if(n.call(r||e,t[s],s,t))return!0;return!1},E.getValue=function(t,n){if(!p.isObject(t))return w;var r,i=e.Array(n),s=i.length;for(r=0;t!==w&&r<s;r++)t=t[i[r]];return t},E.setValue=function(t,n,r){var i,s=e.Array(n),o=s.length-1,u=t;if(o>=0){for(i=0;u!==w&&i<o;i++)u=u[s[i]];if(u===w)return w;u[s[i]]=r}return t},E.isEmpty=function(e){return!E.keys(Object(e)).length},YUI.Env.parseUA=function(t){var n=function(e){var t=0;return parseFloat(e.replace(/\./g,function(){return t++===1?"":"."}))},r=e.config.win,i=r&&r.navigator,s={ie:0,opera:0,gecko:0,webkit:0,safari:0,chrome:0,mobile:null,air:0,phantomjs:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,silk:0,ubuntu:0,accel:!1,webos:0,caja:i&&i.cajaVersion,secure:!1,os:null,nodejs:0,winjs:typeof Windows!="undefined"&&!!Windows.System,touchEnabled:!1},o=t||i&&i.userAgent,u=r&&r.location,a=u&&u.href,f;return s
.userAgent=o,s.secure=a&&a.toLowerCase().indexOf("https")===0,o&&(/windows|win32/i.test(o)?s.os="windows":/macintosh|mac_powerpc/i.test(o)?s.os="macintosh":/android/i.test(o)?s.os="android":/symbos/i.test(o)?s.os="symbos":/linux/i.test(o)?s.os="linux":/rhino/i.test(o)&&(s.os="rhino"),/KHTML/.test(o)&&(s.webkit=1),/IEMobile|XBLWP7/.test(o)&&(s.mobile="windows"),/Fennec/.test(o)&&(s.mobile="gecko"),f=o.match(/AppleWebKit\/([^\s]*)/),f&&f[1]&&(s.webkit=n(f[1]),s.safari=s.webkit,/PhantomJS/.test(o)&&(f=o.match(/PhantomJS\/([^\s]*)/),f&&f[1]&&(s.phantomjs=n(f[1]))),/ Mobile\//.test(o)||/iPad|iPod|iPhone/.test(o)?(s.mobile="Apple",f=o.match(/OS ([^\s]*)/),f&&f[1]&&(f=n(f[1].replace("_","."))),s.ios=f,s.os="ios",s.ipad=s.ipod=s.iphone=0,f=o.match(/iPad|iPod|iPhone/),f&&f[0]&&(s[f[0].toLowerCase()]=s.ios)):(f=o.match(/NokiaN[^\/]*|webOS\/\d\.\d/),f&&(s.mobile=f[0]),/webOS/.test(o)&&(s.mobile="WebOS",f=o.match(/webOS\/([^\s]*);/),f&&f[1]&&(s.webos=n(f[1]))),/ Android/.test(o)&&(s.mobile="Android",f=o.match(/Android ([^\s]*);/),f&&f[1]&&(s.android=n(f[1]))),/Silk/.test(o)&&(f=o.match(/Silk\/([^\s]*)/),f&&f[1]&&(s.silk=n(f[1])),s.android||(s.android=2.34,s.os="Android"),/Accelerated=true/.test(o)&&(s.accel=!0))),f=o.match(/OPR\/(\d+\.\d+)/),f&&f[1]?s.opera=n(f[1]):(f=o.match(/(Chrome|CrMo|CriOS)\/([^\s]*)/),f&&f[1]&&f[2]?(s.chrome=n(f[2]),s.safari=0,f[1]==="CrMo"&&(s.mobile="chrome")):(f=o.match(/AdobeAIR\/([^\s]*)/),f&&(s.air=f[0])))),f=o.match(/Ubuntu\ (\d+\.\d+)/),f&&f[1]&&(s.os="linux",s.ubuntu=n(f[1]),f=o.match(/\ WebKit\/([^\s]*)/),f&&f[1]&&(s.webkit=n(f[1])),f=o.match(/\ Chromium\/([^\s]*)/),f&&f[1]&&(s.chrome=n(f[1])),/ Mobile$/.test(o)&&(s.mobile="Ubuntu")),s.webkit||(/Opera/.test(o)?(f=o.match(/Opera[\s\/]([^\s]*)/),f&&f[1]&&(s.opera=n(f[1])),f=o.match(/Version\/([^\s]*)/),f&&f[1]&&(s.opera=n(f[1])),/Opera Mobi/.test(o)&&(s.mobile="opera",f=o.replace("Opera Mobi","").match(/Opera ([^\s]*)/),f&&f[1]&&(s.opera=n(f[1]))),f=o.match(/Opera Mini[^;]*/),f&&(s.mobile=f[0])):(f=o.match(/MSIE ([^;]*)|Trident.*; rv:([0-9.]+)/),f&&(f[1]||f[2])?s.ie=n(f[1]||f[2]):(f=o.match(/Gecko\/([^\s]*)/),f&&(s.gecko=1,f=o.match(/rv:([^\s\)]*)/),f&&f[1]&&(s.gecko=n(f[1]),/Mobile|Tablet/.test(o)&&(s.mobile="ffos"))))))),r&&i&&!(s.chrome&&s.chrome<6)&&(s.touchEnabled="ontouchstart"in r||"msMaxTouchPoints"in i&&i.msMaxTouchPoints>0),t||(typeof process=="object"&&process.versions&&process.versions.node&&(s.os=process.platform,s.nodejs=n(process.versions.node)),YUI.Env.UA=s),s},e.UA=YUI.Env.UA||YUI.Env.parseUA(),e.UA.compareVersions=function(e,t){var n,r,i,s,o,u;if(e===t)return 0;r=(e+"").split("."),s=(t+"").split(".");for(o=0,u=Math.max(r.length,s.length);o<u;++o){n=parseInt(r[o],10),i=parseInt(s[o],10),isNaN(n)&&(n=0),isNaN(i)&&(i=0);if(n<i)return-1;if(n>i)return 1}return 0},YUI.Env.aliases={anim:["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"],"anim-shape-transform":["anim-shape"],app:["app-base","app-content","app-transitions","lazy-model-list","model","model-list","model-sync-rest","model-sync-local","router","view","view-node-map"],attribute:["attribute-base","attribute-complex"],"attribute-events":["attribute-observable"],autocomplete:["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"],axes:["axis-numeric","axis-category","axis-time","axis-stacked"],"axes-base":["axis-numeric-base","axis-category-base","axis-time-base","axis-stacked-base"],base:["base-base","base-pluginhost","base-build"],cache:["cache-base","cache-offline","cache-plugin"],charts:["charts-base"],collection:["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"],color:["color-base","color-hsl","color-harmony"],controller:["router"],dataschema:["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"],datasource:["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"],datatable:["datatable-core","datatable-table","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"],datatype:["datatype-date","datatype-number","datatype-xml"],"datatype-date":["datatype-date-parse","datatype-date-format","datatype-date-math"],"datatype-number":["datatype-number-parse","datatype-number-format"],"datatype-xml":["datatype-xml-parse","datatype-xml-format"],dd:["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"],dom:["dom-base","dom-screen","dom-style","selector-native","selector"],editor:["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"],event:["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange","event-tap"],"event-custom":["event-custom-base","event-custom-complex"],"event-gestures":["event-flick","event-move"],handlebars:["handlebars-compiler"],highlight:["highlight-base","highlight-accentfold"],history:["history-base","history-hash","history-html5"],io:["io-base","io-xdr","io-form","io-upload-iframe","io-queue"],json:["json-parse","json-stringify"],loader:["loader-base","loader-rollup","loader-yui3"],"loader-pathogen-encoder":["loader-base","loader-rollup","loader-yui3","loader-pathogen-combohandler"],node:["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"],pluginhost:["pluginhost-base","pluginhost-config"],querystring:["querystring-parse","querystring-stringify"],recordset:["recordset-base","recordset-sort","recordset-filter","recordset-indexer"],resize:["resize-base","resize-proxy","resize-constrain"],slider:["slider-base","slider-value-range","clickable-rail"
,"range-slider"],template:["template-base","template-micro"],text:["text-accentfold","text-wordbreak"],widget:["widget-base","widget-htmlparser","widget-skin","widget-uievents"]}},"patched-v3.18.0",{use:["yui-base","get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup","loader-yui3"]}),YUI.add("get",function(e,t){var n=e.Lang,r,i,s;e.Get=i={cssOptions:{attributes:{rel:"stylesheet"},doc:e.config.linkDoc||e.config.doc,pollInterval:50},jsOptions:{autopurge:!0,doc:e.config.scriptDoc||e.config.doc},options:{attributes:{charset:"utf-8"},purgethreshold:20},REGEX_CSS:/\.css(?:[?;].*)?$/i,REGEX_JS:/\.js(?:[?;].*)?$/i,_insertCache:{},_pending:null,_purgeNodes:[],_queue:[],abort:function(e){var t,n,r,i,s;if(!e.abort){n=e,s=this._pending,e=null;if(s&&s.transaction.id===n)e=s.transaction,this._pending=null;else for(t=0,i=this._queue.length;t<i;++t){r=this._queue[t].transaction;if(r.id===n){e=r,this._queue.splice(t,1);break}}}e&&e.abort()},css:function(e,t,n){return this._load("css",e,t,n)},js:function(e,t,n){return this._load("js",e,t,n)},load:function(e,t,n){return this._load(null,e,t,n)},_autoPurge:function(e){e&&this._purgeNodes.length>=e&&this._purge(this._purgeNodes)},_getEnv:function(){var t=e.config.doc,n=e.UA;return this._env={async:t&&t.createElement("script").async===!0||n.ie>=10,cssFail:n.gecko>=9||n.compareVersions(n.webkit,535.24)>=0,cssLoad:(!n.gecko&&!n.webkit||n.gecko>=9||n.compareVersions(n.webkit,535.24)>=0)&&!(n.chrome&&n.chrome<=18),preservesScriptOrder:!!(n.gecko||n.opera||n.ie&&n.ie>=10)}},_getTransaction:function(t,r){var i=[],o,u,a,f;n.isArray(t)||(t=[t]),r=e.merge(this.options,r),r.attributes=e.merge(this.options.attributes,r.attributes);for(o=0,u=t.length;o<u;++o){f=t[o],a={attributes:{}};if(typeof f=="string")a.url=f;else{if(!f.url)continue;e.mix(a,f,!1,null,0,!0),f=f.url}e.mix(a,r,!1,null,0,!0),a.type||(this.REGEX_CSS.test(f)?a.type="css":(!this.REGEX_JS.test(f),a.type="js")),e.mix(a,a.type==="js"?this.jsOptions:this.cssOptions,!1,null,0,!0),a.attributes.id||(a.attributes.id=e.guid()),a.win?a.doc=a.win.document:a.win=a.doc.defaultView||a.doc.parentWindow,a.charset&&(a.attributes.charset=a.charset),i.push(a)}return new s(i,r)},_load:function(e,t,n,r){var s;return typeof n=="function"&&(r=n,n={}),n||(n={}),n.type=e,n._onFinish=i._onTransactionFinish,this._env||this._getEnv(),s=this._getTransaction(t,n),this._queue.push({callback:r,transaction:s}),this._next(),s},_onTransactionFinish:function(){i._pending=null,i._next()},_next:function(){var e;if(this._pending)return;e=this._queue.shift(),e&&(this._pending=e,e.transaction.execute(e.callback))},_purge:function(t){var n=this._purgeNodes,r=t!==n,i,s;while(s=t.pop()){if(!s._yuiget_finished)continue;s.parentNode&&s.parentNode.removeChild(s),r&&(i=e.Array.indexOf(n,s),i>-1&&n.splice(i,1))}}},i.script=i.js,i.Transaction=s=function(t,n){var r=this;r.id=s._lastId+=1,r.data=n.data,r.errors=[],r.nodes=[],r.options=n,r.requests=t,r._callbacks=[],r._queue=[],r._reqsWaiting=0,r.tId=r.id,r.win=n.win||e.config.win},s._lastId=0,s.prototype={_state:"new",abort:function(e){this._pending=null,this._pendingCSS=null,this._pollTimer=clearTimeout(this._pollTimer),this._queue=[],this._reqsWaiting=0,this.errors.push({error:e||"Aborted"}),this._finish()},execute:function(e){var t=this,n=t.requests,r=t._state,i,s,o,u;if(r==="done"){e&&e(t.errors.length?t.errors:null,t);return}e&&t._callbacks.push(e);if(r==="executing")return;t._state="executing",t._queue=o=[],t.options.timeout&&(t._timeout=setTimeout(function(){t.abort("Timeout")},t.options.timeout)),t._reqsWaiting=n.length;for(i=0,s=n.length;i<s;++i)u=n[i],u.async||u.type==="css"?t._insert(u):o.push(u);t._next()},purge:function(){i._purge(this.nodes)},_createNode:function(e,t,n){var i=n.createElement(e),s,o;r||(o=n.createElement("div"),o.setAttribute("class","a"),r=o.className==="a"?{}:{"for":"htmlFor","class":"className"});for(s in t)t.hasOwnProperty(s)&&i.setAttribute(r[s]||s,t[s]);return i},_finish:function(){var e=this.errors.length?this.errors:null,t=this.options,n=t.context||this,r,i,s;if(this._state==="done")return;this._state="done";for(i=0,s=this._callbacks.length;i<s;++i)this._callbacks[i].call(n,e,this);r=this._getEventData(),e?(t.onTimeout&&e[e.length-1].error==="Timeout"&&t.onTimeout.call(n,r),t.onFailure&&t.onFailure.call(n,r)):t.onSuccess&&t.onSuccess.call(n,r),t.onEnd&&t.onEnd.call(n,r),t._onFinish&&t._onFinish()},_getEventData:function(t){return t?e.merge(this,{abort:this.abort,purge:this.purge,request:t,url:t.url,win:t.win}):this},_getInsertBefore:function(t){var n=t.doc,r=t.insertBefore,s,o;return r?typeof r=="string"?n.getElementById(r):r:(s=i._insertCache,o=e.stamp(n),(r=s[o])?r:(r=n.getElementsByTagName("base")[0])?s[o]=r:(r=n.head||n.getElementsByTagName("head")[0],r?(r.appendChild(n.createTextNode("")),s[o]=r.lastChild):s[o]=n.getElementsByTagName("script")[0]))},_insert:function(t){function c(){u._progress("Failed to load "+t.url,t)}function h(){f&&clearTimeout(f),u._progress(null,t)}var n=i._env,r=this._getInsertBefore(t),s=t.type==="js",o=t.node,u=this,a=e.UA,f,l;o||(s?l="script":!n.cssLoad&&a.gecko?l="style":l="link",o=t.node=this._createNode(l,t.attributes,t.doc)),s?(o.setAttribute("src",t.url),t.async?o.async=!0:(n.async&&(o.async=!1),n.preservesScriptOrder||(this._pending=t))):!n.cssLoad&&a.gecko?o.innerHTML=(t.attributes.charset?'@charset "'+t.attributes.charset+'";':"")+'@import "'+t.url+'";':o.setAttribute("href",t.url),s&&a.ie&&(a.ie<9||document.documentMode&&document.documentMode<9)?o.onreadystatechange=function(){/loaded|complete/.test(o.readyState)&&(o.onreadystatechange=null,h())}:!s&&!n.cssLoad?this._poll(t):(a.ie>=10?(o.onerror=function(){setTimeout(c,0)},o.onload=function(){setTimeout(h,0)}):(o.onerror=c,o.onload=h),!n.cssFail&&!s&&(f=setTimeout(c,t.timeout||3e3))),this.nodes.push(o),r.parentNode.insertBefore(o,r)},_next:function(){if(this._pending)return;this._queue.length?this._insert(this._queue.shift()):this._reqsWaiting||this._finish
()},_poll:function(t){var n=this,r=n._pendingCSS,i=e.UA.webkit,s,o,u,a,f,l;if(t){r||(r=n._pendingCSS=[]),r.push(t);if(n._pollTimer)return}n._pollTimer=null;for(s=0;s<r.length;++s){f=r[s];if(i){l=f.doc.styleSheets,u=l.length,a=f.node.href;while(--u>=0)if(l[u].href===a){r.splice(s,1),s-=1,n._progress(null,f);break}}else try{o=!!f.node.sheet.cssRules,r.splice(s,1),s-=1,n._progress(null,f)}catch(c){}}r.length&&(n._pollTimer=setTimeout(function(){n._poll.call(n)},n.options.pollInterval))},_progress:function(e,t){var n=this.options;e&&(t.error=e,this.errors.push({error:e,request:t})),t.node._yuiget_finished=t.finished=!0,n.onProgress&&n.onProgress.call(n.context||this,this._getEventData(t)),t.autopurge&&(i._autoPurge(this.options.purgethreshold),i._purgeNodes.push(t.node)),this._pending===t&&(this._pending=null),this._reqsWaiting-=1,this._next()}}},"patched-v3.18.0",{requires:["yui-base"]}),YUI.add("features",function(e,t){var n={};e.mix(e.namespace("Features"),{tests:n,add:function(e,t,r){n[e]=n[e]||{},n[e][t]=r},all:function(t,r){var i=n[t],s=[];return i&&e.Object.each(i,function(n,i){s.push(i+":"+(e.Features.test(t,i,r)?1:0))}),s.length?s.join(";"):""},test:function(t,r,i){i=i||[];var s,o,u,a=n[t],f=a&&a[r];return!f||(s=f.result,e.Lang.isUndefined(s)&&(o=f.ua,o&&(s=e.UA[o]),u=f.test,u&&(!o||s)&&(s=u.apply(e,i)),f.result=s)),s}});var r=e.Features.add;r("load","0",{name:"app-transitions-native",test:function(e){var t=e.config.doc,n=t?t.documentElement:null;return n&&n.style?"MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style:!1},trigger:"app-transitions"}),r("load","1",{name:"autocomplete-list-keys",test:function(e){return!e.UA.ios&&!e.UA.android},trigger:"autocomplete-list"}),r("load","2",{name:"dd-gestures",trigger:"dd-drag",ua:"touchEnabled"}),r("load","3",{name:"dom-style-ie",test:function(e){var t=e.Features.test,n=e.Features.add,r=e.config.win,i=e.config.doc,s="documentElement",o=!1;return n("style","computedStyle",{test:function(){return r&&"getComputedStyle"in r}}),n("style","opacity",{test:function(){return i&&"opacity"in i[s].style}}),o=!t("style","opacity")&&!t("style","computedStyle"),o},trigger:"dom-style"}),r("load","4",{name:"editor-para-ie",trigger:"editor-para",ua:"ie",when:"instead"}),r("load","5",{name:"event-base-ie",test:function(e){var t=e.config.doc&&e.config.doc.implementation;return t&&!t.hasFeature("Events","2.0")},trigger:"node-base"}),r("load","6",{name:"graphics-canvas",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}),r("load","7",{name:"graphics-canvas-default",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}),r("load","8",{name:"graphics-svg",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}),r("load","9",{name:"graphics-svg-default",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}),r("load","10",{name:"graphics-vml",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}),r("load","11",{name:"graphics-vml-default",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}),r("load","12",{name:"history-hash-ie",test:function(e){var t=e.config.doc&&e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange"in e.config.win)||!t||t<8)},trigger:"history-hash"}),r("load","13",{name:"io-nodejs",trigger:"io-base",ua:"nodejs"}),r("load","14",{name:"json-parse-shim",test:function(e){function i(e,t){return e==="ok"?!0:t}var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONParse!==!1&&!!n;if(r)try{r=n.parse('{"ok":false}',i).ok}catch(s){r=!1}return!r},trigger:"json-parse"}),r("load","15",{name:"json-stringify-shim",test:function(e){var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONStringify!==!1&&!!n;if(r)try{r="0"===n.stringify(0)}catch(i){r=!1}return!r},trigger:"json-stringify"}),r("load","16",{name:"scrollview-base-ie",trigger:"scrollview-base",ua:"ie"}),r("load","17",{name:"selector-css2",test:function(e){var t=e.config.doc,n=t&&!("querySelectorAll"in t);return n},trigger:"selector"}),r("load","18",{name:"transition-timer",test:function(e){var t=e.config.doc,n=t?t.documentElement:null,r=!0;return n&&n.style&&(r=!("MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style)),r},trigger:"transition"}),r("load","19",{name:"widget-base-ie",trigger:"widget-base",ua:"ie"}),r("load","20",{name:"yql-jsonp",test:function(e){return!e.UA.nodejs&&!e.UA.winjs},trigger:"yql"}),r("load","21",{name:"yql-nodejs",trigger:"yql",ua:"nodejs"}),r("load","22",{name:"yql-winjs",trigger:"yql",ua:"winjs"})},"patched-v3.18.0",{requires:["yui-base"]}),YUI.add("intl-base",function(e,t){var n=/[, ]/;e.mix(e.namespace("Intl"),{lookupBestLang:function(t,r){function a(e){var t
;for(t=0;t<r.length;t+=1)if(e.toLowerCase()===r[t].toLowerCase())return r[t]}var i,s,o,u;e.Lang.isString(t)&&(t=t.split(n));for(i=0;i<t.length;i+=1){s=t[i];if(!s||s==="*")continue;while(s.length>0){o=a(s);if(o)return o;u=s.lastIndexOf("-");if(!(u>=0))break;s=s.substring(0,u),u>=2&&s.charAt(u-2)==="-"&&(s=s.substring(0,u-2))}}return""}})},"patched-v3.18.0",{requires:["yui-base"]}),YUI.add("yui-log",function(e,t){var n=e,r="yui:log",i="undefined",s={debug:1,info:2,warn:4,error:8};n.log=function(e,t,o,u){var a,f,l,c,h,p,d=n,v=d.config,m=d.fire?d:YUI.Env.globalEvents;return v.debug&&(o=o||"",typeof o!="undefined"&&(f=v.logExclude,l=v.logInclude,!l||o in l?l&&o in l?a=!l[o]:f&&o in f&&(a=f[o]):a=1,typeof t=="undefined"&&(t="info"),d.config.logLevel=d.config.logLevel||"debug",p=s[d.config.logLevel.toLowerCase()],t in s&&s[t]<p&&(a=1)),a||(v.useBrowserConsole&&(c=o?o+": "+e:e,d.Lang.isFunction(v.logFn)?v.logFn.call(d,e,t,o):typeof console!==i&&console.log?(h=t&&console[t]&&t in s?t:"log",console[h](c)):typeof opera!==i&&opera.postError(c)),m&&!u&&(m===d&&!m.getEvent(r)&&m.publish(r,{broadcast:2}),m.fire(r,{msg:e,cat:t,src:o})))),d},n.message=function(){return n.log.apply(n,arguments)}},"patched-v3.18.0",{requires:["yui-base"]}),YUI.add("yui-later",function(e,t){var n=[];e.later=function(t,r,i,s,o){t=t||0,s=e.Lang.isUndefined(s)?n:e.Array(s),r=r||e.config.win||e;var u=!1,a=r&&e.Lang.isString(i)?r[i]:i,f=function(){u||(a.apply?a.apply(r,s||n):a(s[0],s[1],s[2],s[3]))},l=o?setInterval(f,t):setTimeout(f,t);return{id:l,interval:o,cancel:function(){u=!0,this.interval?clearInterval(l):clearTimeout(l)}}},e.Lang.later=e.later},"patched-v3.18.0",{requires:["yui-base"]}),YUI.add("loader-base",function(e,t){(function(){var t=e.version,n="/build/",r=t+"/",i=e.Env.base,s="gallery-2014.06.04-21-38",o="2in3",u="4",a="2.9.0",f=i+"combo?",l={version:t,root:r,base:e.Env.base,comboBase:f,skin:{defaultSkin:"sam",base:"assets/skins/",path:"skin.css",after:["cssreset","cssfonts","cssgrids","cssbase","cssreset-context","cssfonts-context"]},groups:{},patterns:{}},c=l.groups,h=function(e,t,r){var s=o+"."+(e||u)+"/"+(t||a)+n,l=r&&r.base?r.base:i,h=r&&r.comboBase?r.comboBase:f;c.yui2.base=l+s,c.yui2.root=s,c.yui2.comboBase=h},p=function(e,t){var r=(e||s)+n,o=t&&t.base?t.base:i,u=t&&t.comboBase?t.comboBase:f;c.gallery.base=o+r,c.gallery.root=r,c.gallery.comboBase=u};c[t]={},c.gallery={ext:!1,combine:!0,comboBase:f,update:p,patterns:{"gallery-":{},"lang/gallery-":{},"gallerycss-":{type:"css"}}},c.yui2={combine:!0,ext:!1,comboBase:f,update:h,patterns:{"yui2-":{configFn:function(e){/-skin|reset|fonts|grids|base/.test(e.name)&&(e.type="css",e.path=e.path.replace(/\.js/,".css"),e.path=e.path.replace(/\/yui2-skin/,"/assets/skins/sam/yui2-skin"))}}}},p(),h(),YUI.Env[t]&&e.mix(l,YUI.Env[t],!1,["modules","groups","skin"],0,!0),YUI.Env[t]=l})();var n={},r=[],i=1024,s=YUI.Env,o=s._loaded,u="css",a="js",f="intl",l="sam",c=e.version,h="",p=e.Object,d=p.each,v=e.Array,m=s._loaderQueue,g=s[c],y="skin-",b=e.Lang,w=s.mods,E,S=function(e,t,n,r){var i=e+"/"+t;return r||(i+="-min"),i+="."+(n||u),i};YUI.Env._cssLoaded||(YUI.Env._cssLoaded={}),e.Env.meta=g,e.Loader=function(t){var n=this;t=t||{},E=g.md5,n.context=e,t.doBeforeLoader&&t.doBeforeLoader.apply(n,arguments),n.base=e.Env.meta.base+e.Env.meta.root,n.comboBase=e.Env.meta.comboBase,n.combine=t.base&&t.base.indexOf(n.comboBase.substr(0,20))>-1,n.comboSep="&",n.maxURLLength=i,n.ignoreRegistered=t.ignoreRegistered,n.root=e.Env.meta.root,n.timeout=0,n.forceMap={},n.allowRollup=!1,n.filters={},n.required={},n.patterns={},n.moduleInfo={},n.groups=e.merge(e.Env.meta.groups),n.skin=e.merge(e.Env.meta.skin),n.conditions={},n.config=t,n._internal=!0,n._populateConditionsCache(),n.loaded=o[c],n.async=!0,n._inspectPage(),n._internal=!1,n._config(t),n.forceMap=n.force?e.Array.hash(n.force):{},n.testresults=null,e.config.tests&&(n.testresults=e.config.tests),n.sorted=[],n.dirty=!0,n.inserted={},n.skipped={},n.tested={},n.ignoreRegistered&&n._resetModules()},e.Loader.prototype={getModuleInfo:function(t){var n=this.moduleInfo[t],r,i,o,a;return n?n:(r=g.modules,i=s._renderedMods,o=this._internal,i&&i.hasOwnProperty(t)&&!this.ignoreRegistered?this.moduleInfo[t]=e.merge(i[t]):r.hasOwnProperty(t)&&(this._internal=!0,a=this.addModule(r[t],t),a&&a.type===u&&this.isCSSLoaded(a.name,!0)&&(this.loaded[a.name]=!0),this._internal=o),this.moduleInfo[t])},_expandAliases:function(t){var n=[],r=YUI.Env.aliases,i,s;t=e.Array(t);for(i=0;i<t.length;i+=1)s=t[i],n.push.apply(n,r[s]?r[s]:[s]);return n},_populateConditionsCache:function(){var t=g.modules,n=s._conditions,r,i,o,u;if(n&&!this.ignoreRegistered)for(r in n)n.hasOwnProperty(r)&&(this.conditions[r]=e.merge(n[r]));else{for(r in t)if(t.hasOwnProperty(r)&&t[r].condition){o=this._expandAliases(t[r].condition.trigger);for(i=0;i<o.length;i+=1)u=o[i],this.conditions[u]=this.conditions[u]||{},this.conditions[u][t[r].name||r]=t[r].condition}s._conditions=this.conditions}},_resetModules:function(){var e=this,t,n,r,i,s;for(t in e.moduleInfo)if(e.moduleInfo.hasOwnProperty(t)&&e.moduleInfo[t]){r=e.moduleInfo[t],i=r.name,s=YUI.Env.mods[i]?YUI.Env.mods[i].details:null,s&&(e.moduleInfo[i]._reset=!0,e.moduleInfo[i].requires=s.requires||[],e.moduleInfo[i].optional=s.optional||[],e.moduleInfo[i].supersedes=s.supercedes||[]);if(r.defaults)for(n in r.defaults)r.defaults.hasOwnProperty(n)&&r[n]&&(r[n]=r.defaults[n]);r.langCache=undefined,r.skinCache=undefined,r.skinnable&&e._addSkin(e.skin.defaultSkin,r.name)}},REGEX_CSS:/\.css(?:[?;].*)?$/i,FILTER_DEFS:{RAW:{searchExp:"-min\\.js",replaceStr:".js"},DEBUG:{searchExp:"-min\\.js",replaceStr:"-debug.js"},COVERAGE:{searchExp:"-min\\.js",replaceStr:"-coverage.js"}},_inspectPage:function(){var e=this,t,n,r,i,s;for(s in w)w.hasOwnProperty(s)&&(t=w[s],t.details&&(n=e.getModuleInfo(t.name),r=t.details.requires,i=n&&n.requires,n?!n._inspected&&r&&i.length!==r.length&&delete n.expanded:n=e.addModule(t.details,s),n._inspected=!0))},_requires:function(e
,t){var n,r,i,s,o=this.getModuleInfo(e),a=this.getModuleInfo(t);if(!o||!a)return!1;r=o.expanded_map,i=o.after_map;if(i&&t in i)return!0;i=a.after_map;if(i&&e in i)return!1;s=a.supersedes;if(s)for(n=0;n<s.length;n++)if(this._requires(e,s[n]))return!0;s=o.supersedes;if(s)for(n=0;n<s.length;n++)if(this._requires(t,s[n]))return!1;return r&&t in r?!0:o.ext&&o.type===u&&!a.ext&&a.type===u?!0:!1},_config:function(t){var n,r,i,s,o,u,a,f=this,l=[],c,h;if(t)for(n in t)if(t.hasOwnProperty(n)){i=t[n];if(n==="require")f.require(i);else if(n==="skin")typeof i=="string"&&(f.skin.defaultSkin=t.skin,i={defaultSkin:i}),e.mix(f.skin,i,!0);else if(n==="groups"){for(r in i)if(i.hasOwnProperty(r)){a=r,u=i[r],f.addGroup(u,a);if(u.aliases)for(s in u.aliases)u.aliases.hasOwnProperty(s)&&f.addAlias(u.aliases[s],s)}}else if(n==="modules")for(r in i)i.hasOwnProperty(r)&&f.addModule(i[r],r);else if(n==="aliases")for(r in i)i.hasOwnProperty(r)&&f.addAlias(i[r],r);else n==="gallery"?this.groups.gallery.update&&this.groups.gallery.update(i,t):n==="yui2"||n==="2in3"?this.groups.yui2.update&&this.groups.yui2.update(t["2in3"],t.yui2,t):f[n]=i}o=f.filter,b.isString(o)&&(o=o.toUpperCase(),f.filterName=o,f.filter=f.FILTER_DEFS[o],o==="DEBUG"&&f.require("yui-log","dump"));if(f.filterName&&f.coverage&&f.filterName==="COVERAGE"&&b.isArray(f.coverage)&&f.coverage.length){for(n=0;n<f.coverage.length;n++)c=f.coverage[n],h=f.getModuleInfo(c),h&&h.use?l=l.concat(h.use):l.push(c);f.filters=f.filters||{},e.Array.each(l,function(e){f.filters[e]=f.FILTER_DEFS.COVERAGE}),f.filterName="RAW",f.filter=f.FILTER_DEFS[f.filterName]}},formatSkin:function(e,t){var n=y+e;return t&&(n=n+"-"+t),n},_addSkin:function(e,t,n){var r,i,s,o=this.skin,u=t&&this.getModuleInfo(t),a=u&&u.ext;return t&&(i=this.formatSkin(e,t),this.getModuleInfo(i)||(r=u.pkg||t,s={skin:!0,name:i,group:u.group,type:"css",after:o.after,path:(n||r)+"/"+o.base+e+"/"+t+".css",ext:a},u.base&&(s.base=u.base),u.configFn&&(s.configFn=u.configFn),this.addModule(s,i))),i},addAlias:function(e,t){YUI.Env.aliases[t]=e,this.addModule({name:t,use:e})},addGroup:function(t,n){var r=t.modules,i=this,s=t.defaultBase||e.config.defaultBase,o,u;n=n||t.name,t.name=n,i.groups[n]=t,!t.base&&s&&t.root&&(t.base=s+t.root);if(t.patterns)for(o in t.patterns)t.patterns.hasOwnProperty(o)&&(t.patterns[o].group=n,i.patterns[o]=t.patterns[o]);if(r)for(o in r)r.hasOwnProperty(o)&&(u=r[o],typeof u=="string"&&(u={name:o,fullpath:u}),u.group=n,i.addModule(u,o))},addModule:function(t,n){n=n||t.name,typeof t=="string"&&(t={name:n,fullpath:t});var r,i,o,f,l,c,p,d,m,g,y,b,w,E,x,T,N,C,k,L,A,O,M=this.moduleInfo[n],_=this.conditions,D;M&&M.temp&&(t=e.merge(M,t)),t.name=n;if(!t||!t.name)return null;t.type||(t.type=a,O=t.path||t.fullpath,O&&this.REGEX_CSS.test(O)&&(t.type=u)),!t.path&&!t.fullpath&&(t.path=S(n,n,t.type)),t.supersedes=t.supersedes||t.use,t.ext="ext"in t?t.ext:this._internal?!1:!0,r=t.submodules,this.moduleInfo[n]=t,t.requires=t.requires||[];if(this.requires)for(i=0;i<this.requires.length;i++)t.requires.push(this.requires[i]);if(t.group&&this.groups&&this.groups[t.group]){A=this.groups[t.group];if(A.requires)for(i=0;i<A.requires.length;i++)t.requires.push(A.requires[i])}t.defaults||(t.defaults={requires:t.requires?[].concat(t.requires):null,supersedes:t.supersedes?[].concat(t.supersedes):null,optional:t.optional?[].concat(t.optional):null}),t.skinnable&&t.ext&&t.temp&&(k=this._addSkin(this.skin.defaultSkin,n),t.requires.unshift(k)),t.requires.length&&(t.requires=this.filterRequires(t.requires)||[]);if(!t.langPack&&t.lang){y=v(t.lang);for(g=0;g<y.length;g++)T=y[g],b=this.getLangPackName(T,n),p=this.getModuleInfo(b),p||(p=this._addLangPack(T,t,b))}if(r){l=t.supersedes||[],o=0;for(i in r)if(r.hasOwnProperty(i)){c=r[i],c.path=c.path||S(n,i,t.type),c.pkg=n,c.group=t.group,c.supersedes&&(l=l.concat(c.supersedes)),p=this.addModule(c,i),l.push(i);if(p.skinnable){t.skinnable=!0,C=this.skin.overrides;if(C&&C[i])for(g=0;g<C[i].length;g++)k=this._addSkin(C[i][g],i,n),l.push(k);k=this._addSkin(this.skin.defaultSkin,i,n),l.push(k)}if(c.lang&&c.lang.length){y=v(c.lang);for(g=0;g<y.length;g++)T=y[g],b=this.getLangPackName(T,n),w=this.getLangPackName(T,i),p=this.getModuleInfo(b),p||(p=this._addLangPack(T,t,b)),E=E||v.hash(p.supersedes),w in E||p.supersedes.push(w),t.lang=t.lang||[],x=x||v.hash(t.lang),T in x||t.lang.push(T),b=this.getLangPackName(h,n),w=this.getLangPackName(h,i),p=this.getModuleInfo(b),p||(p=this._addLangPack(T,t,b)),w in E||p.supersedes.push(w)}o++}t.supersedes=v.dedupe(l),this.allowRollup&&(t.rollup=o<4?o:Math.min(o-1,4))}d=t.plugins;if(d)for(i in d)d.hasOwnProperty(i)&&(m=d[i],m.pkg=n,m.path=m.path||S(n,i,t.type),m.requires=m.requires||[],m.group=t.group,this.addModule(m,i),t.skinnable&&this._addSkin(this.skin.defaultSkin,i,n));if(t.condition){f=this._expandAliases(t.condition.trigger);for(i=0;i<f.length;i++)D=f[i],L=t.condition.when,_[D]=_[D]||{},_[D][n]=t.condition,L&&L!=="after"?L==="instead"&&(t.supersedes=t.supersedes||[],t.supersedes.push(D)):(t.after=t.after||[],t.after.push(D))}return t.supersedes&&(t.supersedes=this.filterRequires(t.supersedes)),t.after&&(t.after=this.filterRequires(t.after),t.after_map=v.hash(t.after)),t.configFn&&(N=t.configFn(t),N===!1&&(delete this.moduleInfo[n],delete s._renderedMods[n],t=null)),t&&(s._renderedMods||(s._renderedMods={}),s._renderedMods[n]=e.mix(s._renderedMods[n]||{},t),s._conditions=_),t},require:function(t){var n=typeof t=="string"?v(arguments):t;this.dirty=!0,this.required=e.merge(this.required,v.hash(this.filterRequires(n))),this._explodeRollups()},_explodeRollups:function(){var e=this,t,n,r,i,s,o,u,a=e.required;if(!e.allowRollup){for(r in a)if(a.hasOwnProperty(r)){t=e.getModule(r);if(t&&t.use){o=t.use.length;for(i=0;i<o;i++){n=e.getModule(t.use[i]);if(n&&n.use){u=n.use.length;for(s=0;s<u;s++)a[n.use[s]]=!0}else a[t.use[i]]=!0}}}e.required=a}},filterRequires:function(t){if(t){e.Lang.isArray(t)||(t=[t]),t=e.Array(t);var n=[],r,i,s,o;for(r=0;r<t.length;r++){i=this
.getModule(t[r]);if(i&&i.use)for(s=0;s<i.use.length;s++)o=this.getModule(i.use[s]),o&&o.use&&o.name!==i.name?n=e.Array.dedupe([].concat(n,this.filterRequires(o.use))):n.push(i.use[s]);else n.push(t[r])}t=n}return t},_canBeAttached:function(t){return t=this.getModule(t),t&&t.test?(t.hasOwnProperty("_testResult")||(t._testResult=t.test(e)),t._testResult):!0},getRequires:function(t){if(!t)return r;if(t._parsed)return t.expanded||r;var n,i,s,o,u,a,l,c=this.testresults,m=t.name,g,y=w[m]&&w[m].details,b=t.optionalRequires,E,S,x,T,N,C,k,L,A,O,M=t.lang||t.intl,_=e.Features&&e.Features.tests.load,D,P;t.temp&&y&&(N=t,t=this.addModule(y,m),t.group=N.group,t.pkg=N.pkg,delete t.expanded),P=!!this.lang&&t.langCache!==this.lang||t.skinCache!==this.skin.defaultSkin;if(t.expanded&&!P)return t.expanded;if(b)for(n=0,o=b.length;n<o;n++)this._canBeAttached(b[n])&&t.requires.push(b[n]);E=[],D={},T=this.filterRequires(t.requires),t.lang&&(E.unshift("intl"),T.unshift("intl"),M=!0),C=this.filterRequires(t.optional),t._parsed=!0,t.langCache=this.lang,t.skinCache=this.skin.defaultSkin;for(n=0;n<T.length;n++)if(!D[T[n]]){E.push(T[n]),D[T[n]]=!0,i=this.getModule(T[n]);if(i){u=this.getRequires(i),M=M||i.expanded_map&&f in i.expanded_map;for(s=0;s<u.length;s++)E.push(u[s])}}T=this.filterRequires(t.supersedes);if(T)for(n=0;n<T.length;n++)if(!D[T[n]]){t.submodules&&E.push(T[n]),D[T[n]]=!0,i=this.getModule(T[n]);if(i){u=this.getRequires(i),M=M||i.expanded_map&&f in i.expanded_map;for(s=0;s<u.length;s++)E.push(u[s])}}if(C&&this.loadOptional)for(n=0;n<C.length;n++)if(!D[C[n]]){E.push(C[n]),D[C[n]]=!0,i=this.getModuleInfo(C[n]);if(i){u=this.getRequires(i),M=M||i.expanded_map&&f in i.expanded_map;for(s=0;s<u.length;s++)E.push(u[s])}}g=this.conditions[m];if(g){t._parsed=!1;if(c&&_)d(c,function(e,t){var n=_[t].name;!D[n]&&_[t].trigger===m&&e&&_[t]&&(D[n]=!0,E.push(n))});else for(n in g)if(g.hasOwnProperty(n)&&!D[n]){x=g[n],S=x&&(!x.ua&&!x.test||x.ua&&e.UA[x.ua]||x.test&&x.test(e,T));if(S){D[n]=!0,E.push(n),i=this.getModule(n);if(i){u=this.getRequires(i);for(s=0;s<u.length;s++)E.push(u[s])}}}}if(t.skinnable){L=this.skin.overrides;for(n in YUI.Env.aliases)YUI.Env.aliases.hasOwnProperty(n)&&e.Array.indexOf(YUI.Env.aliases[n],m)>-1&&(A=n);if(L&&(L[m]||A&&L[A])){O=m,L[A]&&(O=A);for(n=0;n<L[O].length;n++)k=this._addSkin(L[O][n],m),this.isCSSLoaded(k,this._boot)||E.push(k)}else k=this._addSkin(this.skin.defaultSkin,m),this.isCSSLoaded(k,this._boot)||E.push(k)}return t._parsed=!1,M&&(t.lang&&!t.langPack&&e.Intl&&(l=e.Intl.lookupBestLang(this.lang||h,t.lang),a=this.getLangPackName(l,m),a&&E.unshift(a)),E.unshift(f)),t.expanded_map=v.hash(E),t.expanded=p.keys(t.expanded_map),t.expanded},isCSSLoaded:function(t,n){if(!t||!YUI.Env.cssStampEl||!n&&this.ignoreRegistered)return!1;var r=YUI.Env.cssStampEl,i=!1,s=YUI.Env._cssLoaded[t],o=r.currentStyle;return s!==undefined?s:(r.className=t,o||(o=e.config.doc.defaultView.getComputedStyle(r,null)),o&&o.display==="none"&&(i=!0),r.className="",YUI.Env._cssLoaded[t]=i,i)},getProvides:function(t){var r=this.getModule(t),i,s;return r?(r&&!r.provides&&(i={},s=r.supersedes,s&&v.each(s,function(t){e.mix(i,this.getProvides(t))},this),i[t]=!0,r.provides=i),r.provides):n},calculate:function(e,t){if(e||t||this.dirty)e&&this._config(e),this._init||this._setup(),this._explode(),this.allowRollup?this._rollup():this._explodeRollups(),this._reduce(),this._sort()},_addLangPack:function(t,n,r){var i=n.name,s,o,u=this.getModuleInfo(r);return u||(s=S(n.pkg||i,r,a,!0),o={path:s,intl:!0,langPack:!0,ext:n.ext,group:n.group,supersedes:[]},n.root&&(o.root=n.root),n.base&&(o.base=n.base),n.configFn&&(o.configFn=n.configFn),this.addModule(o,r),t&&(e.Env.lang=e.Env.lang||{},e.Env.lang[t]=e.Env.lang[t]||{},e.Env.lang[t][i]=!0)),this.getModuleInfo(r)},_setup:function(){var t=this.moduleInfo,n,r,i,o,u,a;for(n in t)t.hasOwnProperty(n)&&(o=t[n],o&&(o.requires=v.dedupe(o.requires),o.lang&&(a=this.getLangPackName(h,n),this._addLangPack(null,o,a))));u={},this.ignoreRegistered||e.mix(u,s.mods),this.ignore&&e.mix(u,v.hash(this.ignore));for(i in u)u.hasOwnProperty(i)&&e.mix(u,this.getProvides(i));if(this.force)for(r=0;r<this.force.length;r++)this.force[r]in u&&delete u[this.force[r]];e.mix(this.loaded,u),this._init=!0},getLangPackName:function(e,t){return"lang/"+t+(e?"_"+e:"")},_explode:function(){var t=this.required,n,r,i={},s=this,o,u;s.dirty=!1,s._explodeRollups(),t=s.required;for(o in t)t.hasOwnProperty(o)&&(i[o]||(i[o]=!0,n=s.getModule(o),n&&(u=n.expound,u&&(t[u]=s.getModule(u),r=s.getRequires(t[u]),e.mix(t,v.hash(r))),r=s.getRequires(n),e.mix(t,v.hash(r)))))},_patternTest:function(e,t){return e.indexOf(t)>-1},getModule:function(t){if(!t)return null;var n,r,i,s=this.getModuleInfo(t),o=this.patterns;if(!s||s&&s.ext)for(i in o)if(o.hasOwnProperty(i)){n=o[i],n.test||(n.test=this._patternTest);if(n.test(t,i)){r=n;break}}return s?r&&s&&r.configFn&&!s.configFn&&(s.configFn=r.configFn,s.configFn(s)):r&&(n.action?n.action.call(this,t,i):(s=this.addModule(e.merge(r,{test:void 0,temp:!0}),t),s&&r.configFn&&(s.configFn=r.configFn))),s},_rollup:function(){},_reduce:function(e){e=e||this.required;var t,n,r,i,s=this.loadType,o=this.ignore?v.hash(this.ignore):!1;for(t in e)if(e.hasOwnProperty(t)){i=this.getModule(t),((this.loaded[t]||w[t])&&!this.forceMap[t]&&!this.ignoreRegistered||s&&i&&i.type!==s)&&delete e[t],o&&o[t]&&delete e[t],r=i&&i.supersedes;if(r)for(n=0;n<r.length;n++)r[n]in e&&delete e[r[n]]}return e},_finish:function(e,t){m.running=!1;var n=this.onEnd;n&&n.call(this.context,{msg:e,data:this.data,success:t}),this._continue()},_onSuccess:function(){var t=this,n=e.merge(t.skipped),r,i=[],s=t.requireRegistration,o,u,f,l;for(f in n)n.hasOwnProperty(f)&&delete t.inserted[f];t.skipped={};for(f in t.inserted)t.inserted.hasOwnProperty(f)&&(l=t.getModule(f),!l||!s||l.type!==a||f in YUI.Env.mods?e.mix(t.loaded,t.getProvides(f)):i.push(f));r=t.onSuccess,u=i.length?"notregistered":"success",o=!i.length,r&&r.call(t.context,{msg:u,data:t.data,success
:o,failed:i,skipped:n}),t._finish(u,o)},_onProgress:function(e){var t=this,n;if(e.data&&e.data.length)for(n=0;n<e.data.length;n++)e.data[n]=t.getModule(e.data[n].name);t.onProgress&&t.onProgress.call(t.context,{name:e.url,data:e.data})},_onFailure:function(e){var t=this.onFailure,n=[],r=0,i=e.errors.length;for(r;r<i;r++)n.push(e.errors[r].error);n=n.join(","),t&&t.call(this.context,{msg:n,data:this.data,success:!1}),this._finish(n,!1)},_onTimeout:function(e){var t=this.onTimeout;t&&t.call(this.context,{msg:"timeout",data:this.data,success:!1,transaction:e})},_sort:function(){var e,t=this.required,n={};this.sorted=[];for(e in t)!n[e]&&t.hasOwnProperty(e)&&this._visit(e,n)},_visit:function(e,t){var n,r,i,s,o,u,a,f,l;t[e]=!0,n=this.required,i=this.moduleInfo[e],r=this.conditions[e]||{};if(i){o=i.expanded||i.requires;for(f=0,l=o.length;f<l;++f)s=o[f],u=r[s],a=u&&(!u.when||u.when==="after"),n[s]&&!t[s]&&!a&&this._visit(s,t)}this.sorted.push(e)},_insert:function(t,n,r,i){t&&this._config(t);var s=this.resolve(!i),o=this,f=0,l=0,c={},h,p;o._refetch=[],r&&(s[r===a?u:a]=[]),o.fetchCSS||(s.css=[]),s.js.length&&f++,s.css.length&&f++,p=function(t){l++;var n={},r=0,i=0,s="",u,a,p;if(t&&t.errors)for(r=0;r<t.errors.length;r++)t.errors[r].request?s=t.errors[r].request.url:s=t.errors[r],n[s]=s;if(t&&t.data&&t.data.length&&t.type==="success")for(r=0;r<t.data.length;r++){o.inserted[t.data[r].name]=!0;if(t.data[r].lang||t.data[r].skinnable)delete o.inserted[t.data[r].name],o._refetch.push(t.data[r].name)}if(l===f){o._loading=null;if(o._refetch.length){for(r=0;r<o._refetch.length;r++){h=o.getRequires(o.getModule(o._refetch[r]));for(i=0;i<h.length;i++)o.inserted[h[i]]||(c[h[i]]=h[i])}c=e.Object.keys(c);if(c.length){o.require(c),p=o.resolve(!0);if(p.cssMods.length){for(r=0;r<p.cssMods.length;r++)a=p.cssMods[r].name,delete YUI.Env._cssLoaded[a],o.isCSSLoaded(a)&&(o.inserted[a]=!0,delete o.required[a]);o.sorted=[],o._sort()}t=null,o._insert()}}t&&t.fn&&(u=t.fn,delete t.fn,u.call(o,t))}},this._loading=!0;if(!s.js.length&&!s.css.length){l=-1,p({fn:o._onSuccess});return}s.css.length&&e.Get.css(s.css,{data:s.cssMods,attributes:o.cssAttributes,insertBefore:o.insertBefore,charset:o.charset,timeout:o.timeout,context:o,onProgress:function(e){o._onProgress.call(o,e)},onTimeout:function(e){o._onTimeout.call(o,e)},onSuccess:function(e){e.type="success",e.fn=o._onSuccess,p.call(o,e)},onFailure:function(e){e.type="failure",e.fn=o._onFailure,p.call(o,e)}}),s.js.length&&e.Get.js(s.js,{data:s.jsMods,insertBefore:o.insertBefore,attributes:o.jsAttributes,charset:o.charset,timeout:o.timeout,autopurge:!1,context:o,async:o.async,onProgress:function(e){o._onProgress.call(o,e)},onTimeout:function(e){o._onTimeout.call(o,e)},onSuccess:function(e){e.type="success",e.fn=o._onSuccess,p.call(o,e)},onFailure:function(e){e.type="failure",e.fn=o._onFailure,p.call(o,e)}})},_continue:function(){!m.running&&m.size()>0&&(m.running=!0,m.next()())},insert:function(t,n,r){var i=this,s=e.merge(this);delete s.require,delete s.dirty,m.add(function(){i._insert(s,t,n,r)}),this._continue()},loadNext:function(){return},_filter:function(e,t,n){var r=this.filter,i=t&&t in this.filters,s=i&&this.filters[t],o=n||(this.getModuleInfo(t)||{}).group||null;return o&&this.groups[o]&&this.groups[o].filter&&(s=this.groups[o].filter,i=!0),e&&(i&&(r=b.isString(s)?this.FILTER_DEFS[s.toUpperCase()]||null:s),r&&(e=e.replace(new RegExp(r.searchExp,"g"),r.replaceStr))),e},_url:function(e,t,n){return this._filter((n||this.base||"")+e,t)},resolve:function(t,r){var i=this,s={js:[],jsMods:[],css:[],cssMods:[]},o,f=e.config.comboLoader&&e.config.customComboBase;(i.skin.overrides||i.skin.defaultSkin!==l||i.ignoreRegistered)&&i._resetModules(),t&&i.calculate(),r=r||i.sorted,o=function(e){if(e){var t=e.group&&i.groups[e.group]||n,r;t.async===!1&&(e.async=t.async),r=e.fullpath?i._filter(e.fullpath,e.name):i._url(e.path,e.name,t.base||e.base);if(e.attributes||e.async===!1)r={url:r,async:e.async},e.attributes&&(r.attributes=e.attributes);s[e.type].push(r),s[e.type+"Mods"].push(e)}};var c=i.ignoreRegistered?{}:i.inserted,h,p,d,v,m,g,y,b,w,E=!1;for(w=0,b=r.length;w<b;w++){y=i.getModule(r[w]);if(!y||c[y.name])continue;g=i.groups[y.group],v=i.comboBase;if(g){if(!g.combine||y.fullpath){o(y);continue}y.combine=!0,typeof g.root=="string"&&(y.root=g.root),v=g.comboBase||v,m=g.comboSep,p=g.maxURLLength}else if(!i.combine){o(y);continue}if(!y.combine&&y.ext){o(y);continue}E=!0,h=h||{},h[v]=h[v]||{js:[],jsMods:[],css:[],cssMods:[]},d=h[v],d.group=y.group,d.comboSep=m||i.comboSep,d.maxURLLength=p||i.maxURLLength,d[y.type+"Mods"].push(y),(y.type===a||y.type===u)&&s[y.type+"Mods"].push(y)}return E&&(f?s=this._pathogenEncodeComboSources(s):s=this._encodeComboSources(s,h)),s},_encodeComboSources:function(e,t){var n,r,s,o,f,l,c,h,p,d,v,m,g,y,b=this;for(d in t)if(t.hasOwnProperty(d)){v=t[d],m=v.comboSep,p=v.maxURLLength;for(c in v)if(c===a||c===u){r=v[c+"Mods"],f=[];for(g=0,y=r.length;g<y;g+=1)h=r[g],l=(typeof h.root=="string"?h.root:b.root)+(h.path||h.fullpath),f.push(b._filter(l,h.name));s=d+f.join(m),o=s.length,p<=d.length&&(p=i);if(f.length)if(o>p){n=[];for(g=0,y=f.length;g<y;g++)n.push(f[g]),s=d+n.join(m),s.length>p&&(l=n.pop(),s=d+n.join(m),e[c].push(b._filter(s,null,v.group)),n=[],l&&n.push(l));n.length&&(s=d+n.join(m),e[c].push(b._filter(s,null,v.group)))}else e[c].push(b._filter(s,null,v.group))}}return e},load:function(e){if(!e)return;var t=this,n=t.resolve(!0);t.data=n,t.onEnd=function(){e.apply(t.context||t,arguments)},t.insert()}}},"patched-v3.18.0",{requires:["get","features"]}),YUI.add("loader-rollup",function(e,t){e.Loader.prototype._rollup=function(){var e,t,n,r,i=this.required,s,o=this.moduleInfo,u,a,f;if(this.dirty||!this.rollups){this.rollups={};for(e in o)o.hasOwnProperty(e)&&(n=this.getModule(e),n&&n.rollup&&(this.rollups[e]=n))}for(;;){u=!1;for(e in this.rollups)if(this.rollups.hasOwnProperty(e)&&!i[e]&&(!this.loaded[e]||this.forceMap[e])){n=this.getModule(e),r=n.supersedes||[],s=!1;
if(!n.rollup)continue;a=0;for(t=0;t<r.length;t++){f=o[r[t]];if(this.loaded[r[t]]&&!this.forceMap[r[t]]){s=!1;break}if(i[r[t]]&&n.type===f.type){a++,s=a>=n.rollup;if(s)break}}s&&(i[e]=!0,u=!0,this.getRequires(n))}if(!u)break}}},"patched-v3.18.0",{requires:["loader-base"]}),YUI.add("loader-yui3",function(e,t){YUI.Env[e.version].modules=YUI.Env[e.version].modules||{},e.mix(YUI.Env[e.version].modules,{"align-plugin":{requires:["node-screen","node-pluginhost"]},anim:{use:["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"]},"anim-base":{requires:["base-base","node-style","color-base"]},"anim-color":{requires:["anim-base"]},"anim-curve":{requires:["anim-xy"]},"anim-easing":{requires:["anim-base"]},"anim-node-plugin":{requires:["node-pluginhost","anim-base"]},"anim-scroll":{requires:["anim-base"]},"anim-shape":{requires:["anim-base","anim-easing","anim-color","matrix"]},"anim-shape-transform":{use:["anim-shape"]},"anim-xy":{requires:["anim-base","node-screen"]},app:{use:["app-base","app-content","app-transitions","lazy-model-list","model","model-list","model-sync-rest","model-sync-local","router","view","view-node-map"]},"app-base":{requires:["classnamemanager","pjax-base","router","view"]},"app-content":{requires:["app-base","pjax-content"]},"app-transitions":{requires:["app-base"]},"app-transitions-css":{type:"css"},"app-transitions-native":{condition:{name:"app-transitions-native",test:function(e){var t=e.config.doc,n=t?t.documentElement:null;return n&&n.style?"MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style:!1},trigger:"app-transitions"},requires:["app-transitions","app-transitions-css","parallel","transition"]},"array-extras":{requires:["yui-base"]},"array-invoke":{requires:["yui-base"]},arraylist:{requires:["yui-base"]},"arraylist-add":{requires:["arraylist"]},"arraylist-filter":{requires:["arraylist"]},arraysort:{requires:["yui-base"]},"async-queue":{requires:["event-custom"]},attribute:{use:["attribute-base","attribute-complex"]},"attribute-base":{requires:["attribute-core","attribute-observable","attribute-extras"]},"attribute-complex":{requires:["attribute-base"]},"attribute-core":{requires:["oop"]},"attribute-events":{use:["attribute-observable"]},"attribute-extras":{requires:["oop"]},"attribute-observable":{requires:["event-custom"]},autocomplete:{use:["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"]},"autocomplete-base":{optional:["autocomplete-sources"],requires:["array-extras","base-build","escape","event-valuechange","node-base"]},"autocomplete-filters":{requires:["array-extras","text-wordbreak"]},"autocomplete-filters-accentfold":{requires:["array-extras","text-accentfold","text-wordbreak"]},"autocomplete-highlighters":{requires:["array-extras","highlight-base"]},"autocomplete-highlighters-accentfold":{requires:["array-extras","highlight-accentfold"]},"autocomplete-list":{after:["autocomplete-sources"],lang:["en","es","hu","it"],requires:["autocomplete-base","event-resize","node-screen","selector-css3","shim-plugin","widget","widget-position","widget-position-align"],skinnable:!0},"autocomplete-list-keys":{condition:{name:"autocomplete-list-keys",test:function(e){return!e.UA.ios&&!e.UA.android},trigger:"autocomplete-list"},requires:["autocomplete-list","base-build"]},"autocomplete-plugin":{requires:["autocomplete-list","node-pluginhost"]},"autocomplete-sources":{optional:["io-base","json-parse","jsonp","yql"],requires:["autocomplete-base"]},axes:{use:["axis-numeric","axis-category","axis-time","axis-stacked"]},"axes-base":{use:["axis-numeric-base","axis-category-base","axis-time-base","axis-stacked-base"]},axis:{requires:["dom","widget","widget-position","widget-stack","graphics","axis-base"]},"axis-base":{requires:["classnamemanager","datatype-number","datatype-date","base","event-custom"]},"axis-category":{requires:["axis","axis-category-base"]},"axis-category-base":{requires:["axis-base"]},"axis-numeric":{requires:["axis","axis-numeric-base"]},"axis-numeric-base":{requires:["axis-base"]},"axis-stacked":{requires:["axis-numeric","axis-stacked-base"]},"axis-stacked-base":{requires:["axis-numeric-base"]},"axis-time":{requires:["axis","axis-time-base"]},"axis-time-base":{requires:["axis-base"]},base:{use:["base-base","base-pluginhost","base-build"]},"base-base":{requires:["attribute-base","base-core","base-observable"]},"base-build":{requires:["base-base"]},"base-core":{requires:["attribute-core"]},"base-observable":{requires:["attribute-observable","base-core"]},"base-pluginhost":{requires:["base-base","pluginhost"]},button:{requires:["button-core","cssbutton","widget"]},"button-core":{requires:["attribute-core","classnamemanager","node-base","escape"]},"button-group":{requires:["button-plugin","cssbutton","widget"]},"button-plugin":{requires:["button-core","cssbutton","node-pluginhost"]},cache:{use:["cache-base","cache-offline","cache-plugin"]},"cache-base":{requires:["base"]},"cache-offline":{requires:["cache-base","json"]},"cache-plugin":{requires:["plugin","cache-base"]},calendar:{requires:["calendar-base","calendarnavigator"],skinnable:!0},"calendar-base":{lang:["de","en","es","es-AR","fr","hu","it","ja","nb-NO","nl","pt-BR","ru","zh-Hans","zh-Hans-CN","zh-Hant","zh-Hant-HK","zh-HANT-TW"],requires:["widget","datatype-date","datatype-date-math","cssgrids"],skinnable:!0},calendarnavigator:{requires:["plugin","classnamemanager","datatype-date","node"],skinnable:!0},charts:{use:["charts-base"]},"charts-base":{requires:["dom","event-mouseenter","event-touch","graphics-group","axes","series-pie","series-line","series-marker","series-area","series-spline","series-column","series-bar","series-areaspline","series-combo","series-combospline","series-line-stacked","series-marker-stacked","series-area-stacked","series-spline-stacked","series-column-stacked","series-bar-stacked","series-areaspline-stacked","series-combo-stacked","series-combospline-stacked"]},"charts-legend":{
requires:["charts-base"]},classnamemanager:{requires:["yui-base"]},"clickable-rail":{requires:["slider-base"]},collection:{use:["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"]},color:{use:["color-base","color-hsl","color-harmony"]},"color-base":{requires:["yui-base"]},"color-harmony":{requires:["color-hsl"]},"color-hsl":{requires:["color-base"]},"color-hsv":{requires:["color-base"]},console:{lang:["en","es","hu","it","ja"],requires:["yui-log","widget"],skinnable:!0},"console-filters":{requires:["plugin","console"],skinnable:!0},"content-editable":{requires:["node-base","editor-selection","stylesheet","plugin"]},controller:{use:["router"]},cookie:{requires:["yui-base"]},"createlink-base":{requires:["editor-base"]},cssbase:{after:["cssreset","cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],type:"css"},"cssbase-context":{after:["cssreset","cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],type:"css"},cssbutton:{type:"css"},cssfonts:{type:"css"},"cssfonts-context":{type:"css"},cssgrids:{optional:["cssnormalize"],type:"css"},"cssgrids-base":{optional:["cssnormalize"],type:"css"},"cssgrids-responsive":{optional:["cssnormalize"],requires:["cssgrids","cssgrids-responsive-base"],type:"css"},"cssgrids-units":{optional:["cssnormalize"],requires:["cssgrids-base"],type:"css"},cssnormalize:{type:"css"},"cssnormalize-context":{type:"css"},cssreset:{type:"css"},"cssreset-context":{type:"css"},dataschema:{use:["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"]},"dataschema-array":{requires:["dataschema-base"]},"dataschema-base":{requires:["base"]},"dataschema-json":{requires:["dataschema-base","json"]},"dataschema-text":{requires:["dataschema-base"]},"dataschema-xml":{requires:["dataschema-base"]},datasource:{use:["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"]},"datasource-arrayschema":{requires:["datasource-local","plugin","dataschema-array"]},"datasource-cache":{requires:["datasource-local","plugin","cache-base"]},"datasource-function":{requires:["datasource-local"]},"datasource-get":{requires:["datasource-local","get"]},"datasource-io":{requires:["datasource-local","io-base"]},"datasource-jsonschema":{requires:["datasource-local","plugin","dataschema-json"]},"datasource-local":{requires:["base"]},"datasource-polling":{requires:["datasource-local"]},"datasource-textschema":{requires:["datasource-local","plugin","dataschema-text"]},"datasource-xmlschema":{requires:["datasource-local","plugin","datatype-xml","dataschema-xml"]},datatable:{use:["datatable-core","datatable-table","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"]},"datatable-base":{requires:["datatable-core","datatable-table","datatable-head","datatable-body","base-build","widget"],skinnable:!0},"datatable-body":{requires:["datatable-core","view","classnamemanager"]},"datatable-column-widths":{requires:["datatable-base"]},"datatable-core":{requires:["escape","model-list","node-event-delegate"]},"datatable-datasource":{requires:["datatable-base","plugin","datasource-local"]},"datatable-foot":{requires:["datatable-core","view"]},"datatable-formatters":{requires:["datatable-body","datatype-number-format","datatype-date-format","escape"]},"datatable-head":{requires:["datatable-core","view","classnamemanager"]},"datatable-highlight":{requires:["datatable-base","event-hover"],skinnable:!0},"datatable-keynav":{requires:["datatable-base"]},"datatable-message":{lang:["en","fr","es","hu","it"],requires:["datatable-base"],skinnable:!0},"datatable-mutable":{requires:["datatable-base"]},"datatable-paginator":{lang:["en","fr"],requires:["model","view","paginator-core","datatable-foot","datatable-paginator-templates"],skinnable:!0},"datatable-paginator-templates":{requires:["template"]},"datatable-scroll":{requires:["datatable-base","datatable-column-widths","dom-screen"],skinnable:!0},"datatable-sort":{lang:["en","fr","es","hu"],requires:["datatable-base"],skinnable:!0},"datatable-table":{requires:["datatable-core","datatable-head","datatable-body","view","classnamemanager"]},datatype:{use:["datatype-date","datatype-number","datatype-xml"]},"datatype-date":{use:["datatype-date-parse","datatype-date-format","datatype-date-math"]},"datatype-date-format":{lang:["ar","ar-JO","ca","ca-ES","da","da-DK","de","de-AT","de-DE","el","el-GR","en","en-AU","en-CA","en-GB","en-IE","en-IN","en-JO","en-MY","en-NZ","en-PH","en-SG","en-US","es","es-AR","es-BO","es-CL","es-CO","es-EC","es-ES","es-MX","es-PE","es-PY","es-US","es-UY","es-VE","fi","fi-FI","fr","fr-BE","fr-CA","fr-FR","hi","hi-IN","hu","id","id-ID","it","it-IT","ja","ja-JP","ko","ko-KR","ms","ms-MY","nb","nb-NO","nl","nl-BE","nl-NL","pl","pl-PL","pt","pt-BR","ro","ro-RO","ru","ru-RU","sv","sv-SE","th","th-TH","tr","tr-TR","vi","vi-VN","zh-Hans","zh-Hans-CN","zh-Hant","zh-Hant-HK","zh-Hant-TW"]},"datatype-date-math":{requires:["yui-base"]},"datatype-date-parse":{},"datatype-number":{use:["datatype-number-parse","datatype-number-format"]},"datatype-number-format":{},"datatype-number-parse":{requires:["escape"]},"datatype-xml":{use:["datatype-xml-parse","datatype-xml-format"]},"datatype-xml-format":{},"datatype-xml-parse":{},dd:{use:["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"]},"dd-constrain":{requires:["dd-drag"]},"dd-ddm":{requires:["dd-ddm-base","event-resize"]},"dd-ddm-base":{requires:["node","base","yui-throttle","classnamemanager"]},"dd-ddm-drop":{requires:["dd-ddm"]},"dd-delegate":{requires:["dd-drag","dd-drop-plugin","event-mouseenter"]},"dd-drag":{requires:["dd-ddm-base","selector-css2"]},"dd-drop":{requires:["dd-drag","dd-ddm-drop"]},"dd-drop-plugin"
:{requires:["dd-drop"]},"dd-gestures":{condition:{name:"dd-gestures",trigger:"dd-drag",ua:"touchEnabled"},requires:["dd-drag","event-synthetic","event-gestures"]},"dd-plugin":{optional:["dd-constrain","dd-proxy"],requires:["dd-drag"]},"dd-proxy":{requires:["dd-drag"]},"dd-scroll":{requires:["dd-drag"]},dial:{lang:["en","es","hu"],requires:["widget","dd-drag","event-mouseenter","event-move","event-key","transition","intl"],skinnable:!0},dom:{use:["dom-base","dom-screen","dom-style","selector-native","selector"]},"dom-base":{requires:["dom-core"]},"dom-core":{requires:["oop","features"]},"dom-screen":{requires:["dom-base","dom-style"]},"dom-style":{requires:["dom-base"]},"dom-style-ie":{condition:{name:"dom-style-ie",test:function(e){var t=e.Features.test,n=e.Features.add,r=e.config.win,i=e.config.doc,s="documentElement",o=!1;return n("style","computedStyle",{test:function(){return r&&"getComputedStyle"in r}}),n("style","opacity",{test:function(){return i&&"opacity"in i[s].style}}),o=!t("style","opacity")&&!t("style","computedStyle"),o},trigger:"dom-style"},requires:["dom-style","color-base"]},dump:{requires:["yui-base"]},editor:{use:["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"]},"editor-base":{requires:["base","frame","node","exec-command","editor-selection"]},"editor-bidi":{requires:["editor-base"]},"editor-br":{requires:["editor-base"]},"editor-inline":{requires:["editor-base","content-editable"]},"editor-lists":{requires:["editor-base"]},"editor-para":{requires:["editor-para-base"]},"editor-para-base":{requires:["editor-base"]},"editor-para-ie":{condition:{name:"editor-para-ie",trigger:"editor-para",ua:"ie",when:"instead"},requires:["editor-para-base"]},"editor-selection":{requires:["node"]},"editor-tab":{requires:["editor-base"]},escape:{requires:["yui-base"]},event:{after:["node-base"],use:["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange","event-tap"]},"event-base":{after:["node-base"],requires:["event-custom-base"]},"event-base-ie":{after:["event-base"],condition:{name:"event-base-ie",test:function(e){var t=e.config.doc&&e.config.doc.implementation;return t&&!t.hasFeature("Events","2.0")},trigger:"node-base"},requires:["node-base"]},"event-contextmenu":{requires:["event-synthetic","dom-screen"]},"event-custom":{use:["event-custom-base","event-custom-complex"]},"event-custom-base":{requires:["oop"]},"event-custom-complex":{requires:["event-custom-base"]},"event-delegate":{requires:["node-base"]},"event-flick":{requires:["node-base","event-touch","event-synthetic"]},"event-focus":{requires:["event-synthetic"]},"event-gestures":{use:["event-flick","event-move"]},"event-hover":{requires:["event-mouseenter"]},"event-key":{requires:["event-synthetic"]},"event-mouseenter":{requires:["event-synthetic"]},"event-mousewheel":{requires:["node-base"]},"event-move":{requires:["node-base","event-touch","event-synthetic"]},"event-outside":{requires:["event-synthetic"]},"event-resize":{requires:["node-base","event-synthetic"]},"event-simulate":{requires:["event-base"]},"event-synthetic":{requires:["node-base","event-custom-complex"]},"event-tap":{requires:["node-base","event-base","event-touch","event-synthetic"]},"event-touch":{requires:["node-base"]},"event-valuechange":{requires:["event-focus","event-synthetic"]},"exec-command":{requires:["frame"]},features:{requires:["yui-base"]},file:{requires:["file-flash","file-html5"]},"file-flash":{requires:["base"]},"file-html5":{requires:["base"]},frame:{requires:["base","node","plugin","selector-css3","yui-throttle"]},"gesture-simulate":{requires:["async-queue","event-simulate","node-screen"]},get:{requires:["yui-base"]},graphics:{requires:["node","event-custom","pluginhost","matrix","classnamemanager"]},"graphics-canvas":{condition:{name:"graphics-canvas",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"},requires:["graphics","color-base"]},"graphics-canvas-default":{condition:{name:"graphics-canvas-default",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}},"graphics-group":{requires:["graphics"]},"graphics-svg":{condition:{name:"graphics-svg",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"},requires:["graphics"]},"graphics-svg-default":{condition:{name:"graphics-svg-default",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}},"graphics-vml":{condition:{name:"graphics-vml",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"},requires:["graphics","color-base"]},"graphics-vml-default":{condition:{name:"graphics-vml-default",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!
n.getContext("2d"))},trigger:"graphics"}},handlebars:{use:["handlebars-compiler"]},"handlebars-base":{requires:[]},"handlebars-compiler":{requires:["handlebars-base"]},highlight:{use:["highlight-base","highlight-accentfold"]},"highlight-accentfold":{requires:["highlight-base","text-accentfold"]},"highlight-base":{requires:["array-extras","classnamemanager","escape","text-wordbreak"]},history:{use:["history-base","history-hash","history-html5"]},"history-base":{requires:["event-custom-complex"]},"history-hash":{after:["history-html5"],requires:["event-synthetic","history-base","yui-later"]},"history-hash-ie":{condition:{name:"history-hash-ie",test:function(e){var t=e.config.doc&&e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange"in e.config.win)||!t||t<8)},trigger:"history-hash"},requires:["history-hash","node-base"]},"history-html5":{optional:["json"],requires:["event-base","history-base","node-base"]},imageloader:{requires:["base-base","node-style","node-screen"]},intl:{requires:["intl-base","event-custom"]},"intl-base":{requires:["yui-base"]},io:{use:["io-base","io-xdr","io-form","io-upload-iframe","io-queue"]},"io-base":{requires:["event-custom-base","querystring-stringify-simple"]},"io-form":{requires:["io-base","node-base"]},"io-nodejs":{condition:{name:"io-nodejs",trigger:"io-base",ua:"nodejs"},requires:["io-base"]},"io-queue":{requires:["io-base","queue-promote"]},"io-upload-iframe":{requires:["io-base","node-base"]},"io-xdr":{requires:["io-base","datatype-xml-parse"]},json:{use:["json-parse","json-stringify"]},"json-parse":{requires:["yui-base"]},"json-parse-shim":{condition:{name:"json-parse-shim",test:function(e){function i(e,t){return e==="ok"?!0:t}var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONParse!==!1&&!!n;if(r)try{r=n.parse('{"ok":false}',i).ok}catch(s){r=!1}return!r},trigger:"json-parse"},requires:["json-parse"]},"json-stringify":{requires:["yui-base"]},"json-stringify-shim":{condition:{name:"json-stringify-shim",test:function(e){var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONStringify!==!1&&!!n;if(r)try{r="0"===n.stringify(0)}catch(i){r=!1}return!r},trigger:"json-stringify"},requires:["json-stringify"]},jsonp:{requires:["get","oop"]},"jsonp-url":{requires:["jsonp"]},"lazy-model-list":{requires:["model-list"]},loader:{use:["loader-base","loader-rollup","loader-yui3"]},"loader-base":{requires:["get","features"]},"loader-pathogen-encoder":{use:["loader-base","loader-rollup","loader-yui3","loader-pathogen-combohandler"]},"loader-rollup":{requires:["loader-base"]},"loader-yui3":{requires:["loader-base"]},matrix:{requires:["yui-base"]},model:{requires:["base-build","escape","json-parse"]},"model-list":{requires:["array-extras","array-invoke","arraylist","base-build","escape","json-parse","model"]},"model-sync-local":{requires:["model","json-stringify"]},"model-sync-rest":{requires:["model","io-base","json-stringify"]},node:{use:["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"]},"node-base":{requires:["event-base","node-core","dom-base","dom-style"]},"node-core":{requires:["dom-core","selector"]},"node-event-delegate":{requires:["node-base","event-delegate"]},"node-event-html5":{requires:["node-base"]},"node-event-simulate":{requires:["node-base","event-simulate","gesture-simulate"]},"node-flick":{requires:["classnamemanager","transition","event-flick","plugin"],skinnable:!0},"node-focusmanager":{requires:["attribute","node","plugin","node-event-simulate","event-key","event-focus"]},"node-load":{requires:["node-base","io-base"]},"node-menunav":{requires:["node","classnamemanager","plugin","node-focusmanager"],skinnable:!0},"node-pluginhost":{requires:["node-base","pluginhost"]},"node-screen":{requires:["dom-screen","node-base"]},"node-scroll-info":{requires:["array-extras","base-build","event-resize","node-pluginhost","plugin","selector"]},"node-style":{requires:["dom-style","node-base"]},oop:{requires:["yui-base"]},overlay:{requires:["widget","widget-stdmod","widget-position","widget-position-align","widget-stack","widget-position-constrain"],skinnable:!0},paginator:{requires:["paginator-core"]},"paginator-core":{requires:["base"]},"paginator-url":{requires:["paginator"]},panel:{requires:["widget","widget-autohide","widget-buttons","widget-modality","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod"],skinnable:!0},parallel:{requires:["yui-base"]},pjax:{requires:["pjax-base","pjax-content"]},"pjax-base":{requires:["classnamemanager","node-event-delegate","router"]},"pjax-content":{requires:["io-base","node-base","router"]},"pjax-plugin":{requires:["node-pluginhost","pjax","plugin"]},plugin:{requires:["base-base"]},pluginhost:{use:["pluginhost-base","pluginhost-config"]},"pluginhost-base":{requires:["yui-base"]},"pluginhost-config":{requires:["pluginhost-base"]},promise:{requires:["timers"]},querystring:{use:["querystring-parse","querystring-stringify"]},"querystring-parse":{requires:["yui-base","array-extras"]},"querystring-parse-simple":{requires:["yui-base"]},"querystring-stringify":{requires:["yui-base"]},"querystring-stringify-simple":{requires:["yui-base"]},"queue-promote":{requires:["yui-base"]},"range-slider":{requires:["slider-base","slider-value-range","clickable-rail"]},recordset:{use:["recordset-base","recordset-sort","recordset-filter","recordset-indexer"]},"recordset-base":{requires:["base","arraylist"]},"recordset-filter":{requires:["recordset-base","array-extras","plugin"]},"recordset-indexer":{requires:["recordset-base","plugin"]},"recordset-sort":{requires:["arraysort","recordset-base","plugin"]},resize:{use:["resize-base","resize-proxy","resize-constrain"]},"resize-base":{requires:["base","widget","event","oop","dd-drag","dd-delegate","dd-drop"],skinnable:!0},"resize-constrain":{requires:["plugin","resize-base"]},"resize-plugin":{optional:["resize-constrain"
],requires:["resize-base","plugin"]},"resize-proxy":{requires:["plugin","resize-base"]},router:{optional:["querystring-parse"],requires:["array-extras","base-build","history"]},scrollview:{requires:["scrollview-base","scrollview-scrollbars"]},"scrollview-base":{requires:["widget","event-gestures","event-mousewheel","transition"],skinnable:!0},"scrollview-base-ie":{condition:{name:"scrollview-base-ie",trigger:"scrollview-base",ua:"ie"},requires:["scrollview-base"]},"scrollview-list":{requires:["plugin","classnamemanager"],skinnable:!0},"scrollview-paginator":{requires:["plugin","classnamemanager"]},"scrollview-scrollbars":{requires:["classnamemanager","transition","plugin"],skinnable:!0},selector:{requires:["selector-native"]},"selector-css2":{condition:{name:"selector-css2",test:function(e){var t=e.config.doc,n=t&&!("querySelectorAll"in t);return n},trigger:"selector"},requires:["selector-native"]},"selector-css3":{requires:["selector-native","selector-css2"]},"selector-native":{requires:["dom-base"]},"series-area":{requires:["series-cartesian","series-fill-util"]},"series-area-stacked":{requires:["series-stacked","series-area"]},"series-areaspline":{requires:["series-area","series-curve-util"]},"series-areaspline-stacked":{requires:["series-stacked","series-areaspline"]},"series-bar":{requires:["series-marker","series-histogram-base"]},"series-bar-stacked":{requires:["series-stacked","series-bar"]},"series-base":{requires:["graphics","axis-base"]},"series-candlestick":{requires:["series-range"]},"series-cartesian":{requires:["series-base"]},"series-column":{requires:["series-marker","series-histogram-base"]},"series-column-stacked":{requires:["series-stacked","series-column"]},"series-combo":{requires:["series-cartesian","series-line-util","series-plot-util","series-fill-util"]},"series-combo-stacked":{requires:["series-stacked","series-combo"]},"series-combospline":{requires:["series-combo","series-curve-util"]},"series-combospline-stacked":{requires:["series-combo-stacked","series-curve-util"]},"series-curve-util":{},"series-fill-util":{},"series-histogram-base":{requires:["series-cartesian","series-plot-util"]},"series-line":{requires:["series-cartesian","series-line-util"]},"series-line-stacked":{requires:["series-stacked","series-line"]},"series-line-util":{},"series-marker":{requires:["series-cartesian","series-plot-util"]},"series-marker-stacked":{requires:["series-stacked","series-marker"]},"series-ohlc":{requires:["series-range"]},"series-pie":{requires:["series-base","series-plot-util"]},"series-plot-util":{},"series-range":{requires:["series-cartesian"]},"series-spline":{requires:["series-line","series-curve-util"]},"series-spline-stacked":{requires:["series-stacked","series-spline"]},"series-stacked":{requires:["axis-stacked"]},"shim-plugin":{requires:["node-style","node-pluginhost"]},slider:{use:["slider-base","slider-value-range","clickable-rail","range-slider"]},"slider-base":{requires:["widget","dd-constrain","event-key"],skinnable:!0},"slider-value-range":{requires:["slider-base"]},sortable:{requires:["dd-delegate","dd-drop-plugin","dd-proxy"]},"sortable-scroll":{requires:["dd-scroll","sortable"]},stylesheet:{requires:["yui-base"]},substitute:{optional:["dump"],requires:["yui-base"]},swf:{requires:["event-custom","node","swfdetect","escape"]},swfdetect:{requires:["yui-base"]},tabview:{requires:["widget","widget-parent","widget-child","tabview-base","node-pluginhost","node-focusmanager"],skinnable:!0},"tabview-base":{requires:["node-event-delegate","classnamemanager"]},"tabview-plugin":{requires:["tabview-base"]},template:{use:["template-base","template-micro"]},"template-base":{requires:["yui-base"]},"template-micro":{requires:["escape"]},test:{requires:["event-simulate","event-custom","json-stringify"]},"test-console":{requires:["console-filters","test","array-extras"],skinnable:!0},text:{use:["text-accentfold","text-wordbreak"]},"text-accentfold":{requires:["array-extras","text-data-accentfold"]},"text-data-accentfold":{requires:["yui-base"]},"text-data-wordbreak":{requires:["yui-base"]},"text-wordbreak":{requires:["array-extras","text-data-wordbreak"]},timers:{requires:["yui-base"]},transition:{requires:["node-style"]},"transition-timer":{condition:{name:"transition-timer",test:function(e){var t=e.config.doc,n=t?t.documentElement:null,r=!0;return n&&n.style&&(r=!("MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style)),r},trigger:"transition"},requires:["transition"]},tree:{requires:["base-build","tree-node"]},"tree-labelable":{requires:["tree"]},"tree-lazy":{requires:["base-pluginhost","plugin","tree"]},"tree-node":{},"tree-openable":{requires:["tree"]},"tree-selectable":{requires:["tree"]},"tree-sortable":{requires:["tree"]},uploader:{requires:["uploader-html5","uploader-flash"]},"uploader-flash":{requires:["swfdetect","escape","widget","base","cssbutton","node","event-custom","uploader-queue"]},"uploader-html5":{requires:["widget","node-event-simulate","file-html5","uploader-queue"]},"uploader-queue":{requires:["base"]},view:{requires:["base-build","node-event-delegate"]},"view-node-map":{requires:["view"]},widget:{use:["widget-base","widget-htmlparser","widget-skin","widget-uievents"]},"widget-anim":{requires:["anim-base","plugin","widget"]},"widget-autohide":{requires:["base-build","event-key","event-outside","widget"]},"widget-base":{requires:["attribute","base-base","base-pluginhost","classnamemanager","event-focus","node-base","node-style"],skinnable:!0},"widget-base-ie":{condition:{name:"widget-base-ie",trigger:"widget-base",ua:"ie"},requires:["widget-base"]},"widget-buttons":{requires:["button-plugin","cssbutton","widget-stdmod"]},"widget-child":{requires:["base-build","widget"]},"widget-htmlparser":{requires:["widget-base"]},"widget-modality":{requires:["base-build","event-outside","widget"],skinnable:!0},"widget-parent":{requires:["arraylist","base-build","widget"]},"widget-position":{requires:["base-build","node-screen","widget"]}
,"widget-position-align":{requires:["widget-position"]},"widget-position-constrain":{requires:["widget-position"]},"widget-skin":{requires:["widget-base"]},"widget-stack":{requires:["base-build","widget"],skinnable:!0},"widget-stdmod":{requires:["base-build","widget"]},"widget-uievents":{requires:["node-event-delegate","widget-base"]},yql:{requires:["oop"]},"yql-jsonp":{condition:{name:"yql-jsonp",test:function(e){return!e.UA.nodejs&&!e.UA.winjs},trigger:"yql"},requires:["yql","jsonp","jsonp-url"]},"yql-nodejs":{condition:{name:"yql-nodejs",trigger:"yql",ua:"nodejs"},requires:["yql"]},"yql-winjs":{condition:{name:"yql-winjs",trigger:"yql",ua:"winjs"},requires:["yql"]},yui:{},"yui-base":{},"yui-later":{requires:["yui-base"]},"yui-log":{requires:["yui-base"]},"yui-throttle":{requires:["yui-base"]}}),YUI.Env[e.version].md5="084b177577bc032df11f5b4034dc3e1f"},"patched-v3.18.0",{requires:["loader-base"]}),YUI.add("yui",function(e,t){},"patched-v3.18.0",{use:["yui-base","get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup","loader-yui3"]}),YUI.add("aui-base-core",function(e,t){var n=e;YUI.Env.aliases=YUI.Env.aliases||{},n.mix(YUI.Env.aliases,{"aui-autosize":["aui-autosize-iframe"],"aui-base":["oop","yui-throttle","aui-classnamemanager","aui-debounce","aui-base-core","aui-base-lang","aui-node-base"],"aui-button":["aui-button-core"],"aui-collection":["aui-map","aui-set","aui-linkedset"],"aui-datatable":["aui-datatable-edit","aui-datatable-highlight","aui-datatable-selection","aui-datatable-property-list"],"aui-datatable-edit":["datatable-base","calendar","overlay","sortable","aui-datatype","aui-toolbar","aui-form-validator","aui-datatable-base-cell-editor","aui-datatable-base-options-cell-editor","aui-datatable-cell-editor-support","aui-datatable-core","aui-datatable-checkbox-cell-editor","aui-datatable-date-cell-editor","aui-datatable-dropdown-cell-editor","aui-datatable-radio-cell-editor","aui-datatable-text-cell-editor","aui-datatable-text-area-cell-editor"],"aui-event":["aui-event-base"],"aui-io":["aui-io-request"],"aui-node":["aui-node-base"],"aui-rating":["aui-rating-base","aui-rating-thumb"],"aui-scheduler":["event-gestures","aui-scheduler-base","aui-scheduler-event-recorder","aui-scheduler-view-agenda","aui-scheduler-view-day","aui-scheduler-view-month","aui-scheduler-view-table-dd","aui-scheduler-view-table","aui-scheduler-view-week","aui-viewport"],"aui-search":["aui-search-tst"],"aui-sortable":["aui-sortable-layout","aui-sortable-list"],"aui-surface":["aui-surface-app","aui-surface-screen"],"aui-toggler":["aui-toggler-base","aui-toggler-delegate"],"aui-tooltip":["aui-tooltip-base","aui-tooltip-delegate"],"aui-tree":["aui-tree-data","aui-tree-io","aui-tree-node","aui-tree-paginator","aui-tree-view"],"aui-widget":["aui-widget-cssclass","aui-widget-toolbars"],"aui-widget-core":["aui-widget-cssclass"]}),YUI.Env[n.version].modules=YUI.Env[n.version].modules||{},n.mix(YUI.Env[n.version].modules,{"aui-ace-autocomplete-base":{requires:["aui-ace-editor"]},"aui-ace-autocomplete-freemarker":{requires:["aui-ace-autocomplete-templateprocessor"]},"aui-ace-autocomplete-list":{requires:["aui-ace-autocomplete-base","overlay","widget-autohide"],skinnable:!0},"aui-ace-autocomplete-plugin":{requires:["aui-ace-autocomplete-list","plugin"]},"aui-ace-autocomplete-templateprocessor":{requires:["aui-ace-autocomplete-base"]},"aui-ace-autocomplete-velocity":{requires:["aui-ace-autocomplete-templateprocessor"]},"aui-ace-editor":{requires:["aui-node","aui-component"]},"aui-affix":{requires:["base","node-screen","aui-node"]},"aui-alert":{requires:["timers","widget","widget-stdmod","aui-classnamemanager","aui-widget-cssclass","aui-widget-transition"],skinnable:!0},"aui-aria":{requires:["plugin","aui-component"]},"aui-arraysort":{requires:["arraysort"]},"aui-audio":{requires:["aui-aria","aui-node","aui-component","querystring-stringify-simple"],skinnable:!0},"aui-autosize":{use:["aui-autosize-iframe"]},"aui-autosize-iframe":{requires:["plugin","aui-component","aui-timer","aui-node-base"]},"aui-base":{use:["oop","yui-throttle","aui-classnamemanager","aui-debounce","aui-base-core","aui-base-lang","aui-node-base"]},"aui-base-core":{},"aui-base-html5-shiv":{condition:{name:"aui-base-html5-shiv",trigger:"node-base",ua:"ie"}},"aui-base-lang":{},"aui-button":{use:["aui-button-core"]},"aui-button-core":{requires:["button","button-group","button-plugin","aui-component","aui-widget-cssclass","aui-widget-toggle"],skinnable:!0},"aui-button-search-cancel":{requires:["array-invoke","base","base-build","event-focus","event-move","event-resize","node-screen","node-event-delegate","aui-node-base","aui-classnamemanager","aui-event-input"]},"aui-carousel":{requires:["anim","node-event-delegate","aui-image-viewer-base","aui-image-viewer-slideshow"],skinnable:!0},"aui-carousel-mobile-touch":{condition:{name:"aui-carousel-mobile-touch",test:function(e){return e.UA.mobile&&e.UA.touchEnabled},trigger:"aui-carousel"},requires:["base-build","aui-carousel"]},"aui-carousel-swipe":{condition:{name:"aui-carousel-swipe",trigger:"aui-carousel",ua:"touchEnabled"},requires:["aui-carousel","aui-widget-swipe","base-build"],skinnable:!0},"aui-char-counter":{requires:["aui-node","aui-event-input","aui-component"]},"aui-classnamemanager":{requires:["classnamemanager"]},"aui-collection":{use:["aui-map","aui-set","aui-linkedset"]},"aui-color-palette":{requires:["array-extras","aui-palette","color-base","node-core","aui-widget-cssclass","aui-widget-toggle"],skinnable:!0},"aui-color-picker-base":{requires:["aui-color-palette","aui-hsva-palette-modal","event-outside"],skinnable:!0},"aui-color-picker-popover":{requires:["aui-color-picker-base","aui-popover","aui-widget-cssclass","aui-widget-toggle"],skinnable:!0},"aui-component":{requires:["aui-classnamemanager","aui-widget-cssclass","aui-widget-toggle","base-build","widget-base"]},"aui-css":{type:"css"},"aui-datatable":{use:["aui-datatable-edit","aui-datatable-highlight","aui-datatable-selection"
,"aui-datatable-property-list"]},"aui-datatable-base-cell-editor":{requires:["datatable-base","overlay"],skinnable:!0},"aui-datatable-base-options-cell-editor":{requires:["aui-datatable-base-cell-editor","escape"]},"aui-datatable-body":{requires:["aui-classnamemanager","datatable-base","event-key","aui-event-base"],skinnable:!0},"aui-datatable-cell-editor-support":{requires:["datatable-base"]},"aui-datatable-checkbox-cell-editor":{requires:["aui-datatable-base-options-cell-editor"]},"aui-datatable-core":{requires:["aui-datatable-body","datatable-base","event-key","aui-event-base"],skinnable:!0},"aui-datatable-date-cell-editor":{requires:["aui-datatable-base-options-cell-editor"]},"aui-datatable-dropdown-cell-editor":{requires:["aui-datatable-base-options-cell-editor"]},"aui-datatable-edit":{use:["datatable-base","calendar","overlay","sortable","aui-datatype","aui-toolbar","aui-form-validator","aui-datatable-base-cell-editor","aui-datatable-base-options-cell-editor","aui-datatable-cell-editor-support","aui-datatable-core","aui-datatable-checkbox-cell-editor","aui-datatable-date-cell-editor","aui-datatable-dropdown-cell-editor","aui-datatable-radio-cell-editor","aui-datatable-text-cell-editor","aui-datatable-text-area-cell-editor"]},"aui-datatable-highlight":{requires:["aui-datatable-selection"],skinnable:!0},"aui-datatable-property-list":{requires:["datatable-scroll","datatable-sort","aui-datatable-core","aui-datatable-edit","aui-datatable-highlight","aui-datatable-selection","aui-widget-cssclass","aui-widget-toggle"],skinnable:!0},"aui-datatable-radio-cell-editor":{requires:["aui-datatable-base-options-cell-editor"]},"aui-datatable-selection":{requires:["aui-datatable-core"],skinnable:!0},"aui-datatable-text-area-cell-editor":{requires:["aui-datatable-base-options-cell-editor"]},"aui-datatable-text-cell-editor":{requires:["aui-datatable-base-options-cell-editor"]},"aui-datatype":{requires:["datatype","aui-datatype-date-parse"]},"aui-datatype-date-parse":{requires:["aui-base-lang","datatype-date-format","datatype-date-parse","intl"]},"aui-datepicker":{requires:["calendar","base","base-build","aui-datepicker-delegate","aui-datepicker-popover"],skinnable:!0},"aui-datepicker-delegate":{requires:["node-event-delegate","event-focus","aui-event-input","aui-datatype-date-parse"]},"aui-datepicker-native":{requires:["base","base-build","aui-node-base","aui-datepicker-delegate"]},"aui-datepicker-popover":{requires:["aui-classnamemanager","aui-popover"]},"aui-debounce":{},"aui-diagram-builder":{requires:["overlay","aui-map","aui-property-builder","aui-diagram-builder-connector","aui-property-builder-settings","aui-diagram-node-condition","aui-diagram-node-end","aui-diagram-node-fork","aui-diagram-node-join","aui-diagram-node-start","aui-diagram-node-state","aui-diagram-node-task"],skinnable:!0},"aui-diagram-builder-connector":{requires:["arraylist-add","arraylist-filter","escape","json","graphics","dd"],skinnable:!0},"aui-diagram-node":{requires:["aui-diagram-node-manager-base","escape","overlay"]},"aui-diagram-node-condition":{requires:["aui-diagram-node-state"]},"aui-diagram-node-end":{requires:["aui-diagram-node-state"]},"aui-diagram-node-fork":{requires:["aui-diagram-node-state"]},"aui-diagram-node-join":{requires:["aui-diagram-node-state"]},"aui-diagram-node-manager-base":{requires:["base"]},"aui-diagram-node-start":{requires:["aui-diagram-node-state"]},"aui-diagram-node-state":{requires:["aui-diagram-node"]},"aui-diagram-node-task":{requires:["aui-diagram-node-state"]},"aui-dropdown":{requires:["event-delegate","event-key","event-outside","node-focusmanager","widget","widget-stack","aui-classnamemanager","aui-node","aui-widget-cssclass","aui-widget-toggle","aui-widget-trigger"],skinnable:!0},"aui-event":{use:["aui-event-base"]},"aui-event-base":{requires:["event-base"]},"aui-event-delegate-change":{condition:{name:"aui-event-delegate-change",trigger:"event-base-ie",ua:"ie"},requires:["aui-event-base","event-delegate","event-synthetic"]},"aui-event-delegate-submit":{condition:{name:"aui-event-delegate-submit",trigger:"event-base-ie",ua:"ie"},requires:["aui-event-base","event-delegate","event-synthetic"]},"aui-event-input":{condition:{name:"aui-event-input",test:function(e){var t=e.supportsDOMEvent,n=e.Features.test,r=e.Features.add;return n("event","input")===undefined&&r("event","input",{test:function(){return t(document.createElement("textarea"),"input")&&(!e.UA.ie||e.UA.ie>9)}}),!n("event","input")},trigger:"aui-event-base"},requires:["aui-event-base","event-delegate","event-synthetic","timers"]},"aui-form-builder":{requires:["aui-button","aui-collection","aui-form-builder-available-field","aui-form-builder-field","aui-form-builder-field-button","aui-form-builder-field-checkbox","aui-form-builder-field-fieldset","aui-form-builder-field-file-upload","aui-form-builder-field-multiple-choice","aui-form-builder-field-radio","aui-form-builder-field-select","aui-form-builder-field-text","aui-form-builder-field-textarea","aui-property-builder","aui-property-builder-settings","aui-sortable-list","aui-tabview","aui-tooltip-base","escape","transition"],skinnable:!0},"aui-form-builder-available-field":{requires:["aui-property-builder-available-field"]},"aui-form-builder-field":{requires:["panel","aui-datatype","aui-datatable-edit","aui-property-builder-field-support"],skinnable:!0},"aui-form-builder-field-button":{requires:["aui-form-builder-field"]},"aui-form-builder-field-checkbox":{requires:["aui-form-builder-field"]},"aui-form-builder-field-fieldset":{requires:["aui-form-builder-field"]},"aui-form-builder-field-file-upload":{requires:["aui-form-builder-field"]},"aui-form-builder-field-multiple-choice":{requires:["aui-form-builder-field"]},"aui-form-builder-field-radio":{requires:["aui-form-builder-field"]},"aui-form-builder-field-select":{requires:["aui-form-builder-field"]},"aui-form-builder-field-text":{requires:["aui-form-builder-field"]},"aui-form-builder-field-textarea":{requires:["aui-form-builder-field"
]},"aui-form-validator":{requires:["escape","selector-css3","node-event-delegate","aui-node","aui-component","aui-event-input"]},"aui-hsv-palette":{requires:["aui-classnamemanager","aui-widget-cssclass","aui-widget-toggle","aui-event-input","base-build","clickable-rail","color-hsv","dd-constrain","slider","widget"],skinnable:!0},"aui-hsva-palette":{requires:["aui-hsv-palette"],skinnable:!0},"aui-hsva-palette-modal":{requires:["aui-hsva-palette","aui-modal"],skinnable:!0},"aui-image-cropper":{requires:["resize-base","resize-constrain","dd-constrain","aui-node-base","aui-component"],skinnable:!0},"aui-image-viewer":{requires:["widget","widget-modality","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod","aui-event","aui-image-viewer-base","aui-image-viewer-multiple","aui-image-viewer-slideshow","aui-node-base","aui-widget-cssclass","aui-widget-toggle"],skinnable:!0},"aui-image-viewer-base":{requires:["anim","aui-classnamemanager","aui-node","aui-widget-responsive","base-build","imageloader","node-base","widget"],skinnable:!0},"aui-image-viewer-media":{requires:["plugin","aui-component","aui-image-viewer"]},"aui-image-viewer-multiple":{requires:["base-build","node-base","aui-classnamemanager","aui-image-viewer-base"],skinnable:!0},"aui-image-viewer-multiple-swipe":{condition:{name:"aui-image-viewer-multiple-swipe",trigger:"aui-image-viewer-multiple",ua:"touchEnabled"},requires:["aui-image-viewer-multiple","aui-image-viewer-swipe"]},"aui-image-viewer-slideshow":{requires:["node","aui-classnamemanager"]},"aui-image-viewer-swipe":{condition:{name:"aui-image-viewer-swipe",trigger:"aui-image-viewer-base",ua:"touchEnabled"},requires:["event-resize","aui-image-viewer-base","aui-widget-swipe"]},"aui-io":{use:["aui-io-request"]},"aui-io-request":{requires:["io-base","json","plugin","querystring-stringify","aui-component"]},"aui-linkedset":{requires:["aui-set"]},"aui-map":{requires:["base-build"]},"aui-menu":{requires:["base-build","event-mouseenter","event-resize","widget","widget-position","widget-position-align","widget-position-constrain","widget-stack","aui-classnamemanager","aui-debounce","aui-dropdown","aui-menu-item"],skinnable:!0},"aui-menu-item":{requires:["base-build","node-base","aui-classnamemanager","aui-node","aui-widget-shortcut"]},"aui-messaging":{requires:["querystring","aui-timer"]},"aui-modal":{requires:["widget","widget-autohide","widget-buttons","widget-modality","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod","dd-plugin","dd-constrain","timers","aui-classnamemanager","aui-widget-cssclass","aui-widget-toggle","aui-widget-toolbars"],skinnable:!0},"aui-modal-resize":{condition:{name:"aui-modal-resize",test:function(e){return!e.UA.mobile},trigger:"aui-modal"},requires:["aui-modal","resize-plugin"]},"aui-node":{use:["aui-node-base"]},"aui-node-accessible":{requires:["aui-node-base","event-custom-base"]},"aui-node-base":{requires:["array-extras","aui-base-lang","aui-classnamemanager","aui-debounce","node"]},"aui-node-html5":{condition:{name:"aui-node-html5",trigger:"aui-node",ua:"ie"},requires:["collection","aui-node-base"]},"aui-pagination":{requires:["node-event-delegate","aui-node","aui-component","widget-htmlparser"],skinnable:!0},"aui-palette":{requires:["base-build","event-hover","widget","aui-classnamemanager","aui-base","aui-widget-cssclass","aui-widget-toggle"],skinnable:!0},"aui-parse-content":{requires:["async-queue","plugin","io-base","aui-component","aui-node-base"]},"aui-popover":{requires:["event-resize","widget","widget-autohide","widget-buttons","widget-modality","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod","aui-classnamemanager","aui-widget-cssclass","aui-widget-toggle","aui-widget-toolbars","aui-widget-transition","aui-widget-trigger","aui-widget-position-align-suggestion","aui-component","aui-node-base","event-resize"],skinnable:!0},"aui-progressbar":{requires:["aui-node","aui-component","aui-aria"],skinnable:!0},"aui-promise":{requires:["array-invoke","promise","oop"]},"aui-property-builder":{requires:["dd","collection","aui-property-builder-available-field","aui-property-builder-field-support","aui-property-builder-settings","aui-tabview"],skinnable:!0},"aui-property-builder-available-field":{requires:["base","aui-component","aui-node"]},"aui-property-builder-field-support":{},"aui-property-builder-settings":{requires:["aui-tabview","aui-datatable-property-list"]},"aui-rating":{use:["aui-rating-base","aui-rating-thumb"]},"aui-rating-base":{requires:["aui-component","aui-node-base","widget-htmlparser","widget-uievents"],skinnable:!0},"aui-rating-thumb":{requires:["aui-rating-base"]},"aui-scheduler":{use:["event-gestures","aui-scheduler-base","aui-scheduler-event-recorder","aui-scheduler-view-agenda","aui-scheduler-view-day","aui-scheduler-view-month","aui-scheduler-view-table-dd","aui-scheduler-view-table","aui-scheduler-view-week","aui-viewport"]},"aui-scheduler-base":{requires:["model","model-list","widget-stdmod","color-hsl","aui-event-base","aui-node-base","aui-component","aui-datatype","aui-button","node-focusmanager"],skinnable:!0},"aui-scheduler-event-recorder":{requires:["querystring","io-form","overlay","aui-scheduler-base","aui-popover"],skinnable:!0},"aui-scheduler-touch":{condition:{name:"aui-scheduler-touch",trigger:"aui-scheduler",ua:"touchEnabled"},requires:["base-build","aui-scheduler"],skinnable:!0},"aui-scheduler-view-agenda":{requires:["aui-scheduler-base"],skinnable:!0},"aui-scheduler-view-day":{requires:["dd-drag","dd-delegate","dd-drop","dd-constrain","aui-scheduler-view-table"],skinnable:!0},"aui-scheduler-view-month":{requires:["aui-scheduler-view-table"],skinnable:!0},"aui-scheduler-view-table":{requires:["overlay","aui-scheduler-base"],skinnable:!0},"aui-scheduler-view-table-dd":{requires:["dd-drag","dd-delegate","dd-drop","aui-scheduler-view-table"]},"aui-scheduler-view-week":{requires
:["aui-scheduler-view-day"],skinnable:!0},"aui-scrollspy":{requires:["base-build","node-screen","aui-classnamemanager"]},"aui-search":{use:["aui-search-tst"]},"aui-search-tst":{requires:["aui-component"]},"aui-selector":{requires:["selector-css3","aui-classnamemanager"]},"aui-set":{requires:["aui-map"]},"aui-sortable":{use:["aui-sortable-layout","aui-sortable-list"]},"aui-sortable-layout":{requires:["dd-delegate","dd-drag","dd-drop","dd-proxy","aui-node","aui-component"],skinnable:!0},"aui-sortable-list":{requires:["dd-drag","dd-drop","dd-proxy","aui-node","aui-component"]},"aui-surface":{use:["aui-surface-app","aui-surface-screen"]},"aui-surface-app":{requires:["event-delegate","node-event-html5","aui-surface-base","aui-surface-screen","aui-surface-screen-route"]},"aui-surface-base":{requires:["base-build","node-style","timers","aui-debounce","aui-promise","aui-parse-content"]},"aui-surface-screen":{requires:["base-build"]},"aui-surface-screen-html":{requires:["io","aui-promise","aui-surface-screen","aui-url"]},"aui-surface-screen-route":{requires:["base-build"]},"aui-tabview":{requires:["selector-css3","tabview","aui-component","aui-widget-css"],skinnable:!0},"aui-text-data-unicode":{requires:["text"]},"aui-text-unicode":{requires:["aui-text-data-unicode"]},"aui-timepicker":{requires:["autocomplete","aui-datepicker-delegate","aui-datepicker-popover"],skinnable:!0},"aui-timepicker-native":{requires:["base","base-build","aui-node-base","aui-datepicker-delegate","aui-datepicker-native"]},"aui-timer":{requires:["oop"]},"aui-toggler":{use:["aui-toggler-base","aui-toggler-delegate"]},"aui-toggler-accessibility":{requires:["aui-toggler-base"]},"aui-toggler-base":{requires:["transition","aui-selector","aui-event-base","aui-node","aui-component","event-tap"],skinnable:!0},"aui-toggler-delegate":{requires:["array-invoke","node-event-delegate","aui-toggler-base"]},"aui-toolbar":{requires:["arraylist","arraylist-add","aui-component","aui-button-core"]},"aui-tooltip":{use:["aui-tooltip-base","aui-tooltip-delegate"]},"aui-tooltip-base":{requires:["escape","event-hover","widget","widget-autohide","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod","aui-classnamemanager","aui-component","aui-debounce","aui-widget-cssclass","aui-widget-toggle","aui-widget-transition","aui-widget-trigger","aui-widget-position-align-suggestion","aui-node-base","event-resize"],skinnable:!0},"aui-tooltip-delegate":{requires:["node-event-delegate","aui-tooltip-base"]},"aui-tree":{use:["aui-tree-data","aui-tree-io","aui-tree-node","aui-tree-paginator","aui-tree-view"]},"aui-tree-data":{requires:["aui-base-core","aui-base-lang","aui-node-base","aui-timer","aui-component"]},"aui-tree-io":{requires:["aui-component","aui-io"]},"aui-tree-node":{requires:["json","querystring-stringify","aui-tree-data","aui-tree-io","aui-tree-paginator"]},"aui-tree-paginator":{requires:["yui-base"]},"aui-tree-view":{requires:["dd-delegate","dd-proxy","widget","aui-tree-node","aui-tree-paginator","aui-tree-io"],skinnable:!0},"aui-undo-redo":{requires:["base","base-build","promise"]},"aui-url":{requires:["oop","querystring-parse","querystring-stringify"]},"aui-video":{requires:["node-event-html5","querystring-stringify-simple","aui-aria","aui-node","aui-component","aui-debounce"],skinnable:!0},"aui-viewport":{requires:["aui-node","aui-component"]},"aui-widget":{use:["aui-widget-cssclass","aui-widget-toolbars"]},"aui-widget-core":{use:["aui-widget-cssclass"]},"aui-widget-cssclass":{requires:["widget-base"]},"aui-widget-position-align-suggestion":{requires:["widget-position-align","widget-stdmod"]},"aui-widget-responsive":{requires:["event-resize","widget-base"]},"aui-widget-shortcut":{requires:["base"]},"aui-widget-swipe":{requires:["classnamemanager","scrollview-base","scrollview-paginator","timers"]},"aui-widget-toggle":{},"aui-widget-toolbars":{requires:["widget-stdmod","aui-toolbar"]},"aui-widget-transition":{requires:["transition"]},"aui-widget-trigger":{requires:["node"]}}),YUI.Env[n.version].md5="c020db367f734a7c67833f6c4f421666",e.supportsDOMEvent=function(t,n){n="on"+n;if(!(n in t)){t.setAttribute||(t=e.config.doc.createElement("div"));if(t.setAttribute)return t.setAttribute(n,""),typeof t[n]=="function"}return t=null,!0},function(){var e=Array.prototype.slice;YUI.prototype.ready=function(){var t=this,n=arguments,r=n.length-1,i=e.call(arguments,0,r);i.unshift("event-base"),i.push(function(e){var t=arguments;e.on("domready",function(){n[r].apply(this,t)})}),t.use.apply(t,i)}}()},"3.0.0"),YUI.add("aui",function(e,t){},"3.0.0");
YUI.Env.core.push.apply(YUI.Env.core, ["aui-base-core"]);
YUI_config = {combine:true,comboBase:"http://cdn.alloyui.com/combo/combo.php?",filter:"min",root:"../3.0.0/"};
YUI.add("oop",function(e,t){function a(t,n,i,s,o){if(t&&t[o]&&t!==e)return t[o].call(t,n,i);switch(r.test(t)){case 1:return r[o](t,n,i);case 2:return r[o](e.Array(t,0,!0),n,i);default:return e.Object[o](t,n,i,s)}}var n=e.Lang,r=e.Array,i=Object.prototype,s="_~yuim~_",o=i.hasOwnProperty,u=i.toString;e.augment=function(t,n,r,i,s){var a=t.prototype,f=a&&n,l=n.prototype,c=a||t,h,p,d,v,m;return s=s?e.Array(s):[],f&&(p={},d={},v={},h=function(e,t){if(r||!(t in a))u.call(e)==="[object Function]"?(v[t]=e,p[t]=d[t]=function(){return m(this,e,arguments)}):p[t]=e},m=function(e,t,r){for(var i in v)o.call(v,i)&&e[i]===d[i]&&(e[i]=v[i]);return n.apply(e,s),t.apply(e,r)},i?e.Array.each(i,function(e){e in l&&h(l[e],e)}):e.Object.each(l,h,null,!0)),e.mix(c,p||l,r,i),f||n.apply(c,s),t},e.aggregate=function(t,n,r,i){return e.mix(t,n,r,i,0,!0)},e.extend=function(t,n,r,s){(!n||!t)&&e.error("extend failed, verify dependencies");var o=n.prototype,u=e.Object(o);return t.prototype=u,u.constructor=t,t.superclass=o,n!=Object&&o.constructor==i.constructor&&(o.constructor=n),r&&e.mix(u,r,!0),s&&e.mix(t,s,!0),t},e.each=function(e,t,n,r){return a(e,t,n,r,"each")},e.some=function(e,t,n,r){return a(e,t,n,r,"some")},e.clone=function(t,r,i,o,u,a){var f,l,c;if(!n.isObject(t)||e.instanceOf(t,YUI)||t.addEventListener||t.attachEvent)return t;l=a||{};switch(n.type(t)){case"date":return new Date(t);case"regexp":return t;case"function":return t;case"array":f=[];break;default:if(t[s])return l[t[s]];c=e.guid(),f=r?{}:e.Object(t),t[s]=c,l[c]=t}return e.each(t,function(n,a){(a||a===0)&&(!i||i.call(o||this,n,a,this,t)!==!1)&&a!==s&&a!="prototype"&&(this[a]=e.clone(n,r,i,o,u||t,l))},f),a||(e.Object.each(l,function(e,t){if(e[s])try{delete e[s]}catch(n){e[s]=null}},this),l=null),f},e.bind=function(t,r){var i=arguments.length>2?e.Array(arguments,2,!0):null;return function(){var s=n.isString(t)?r[t]:t,o=i?i.concat(e.Array(arguments,0,!0)):arguments;return s.apply(r||s,o)}},e.rbind=function(t,r){var i=arguments.length>2?e.Array(arguments,2,!0):null;return function(){var s=n.isString(t)?r[t]:t,o=i?e.Array(arguments,0,!0).concat(i):arguments;return s.apply(r||s,o)}}},"patched-v3.18.0",{requires:["yui-base"]});
YUI.add("event-custom-base",function(e,t){e.Env.evt={handles:{},plugins:{}};var n=0,r=1,i={objs:null,before:function(t,r,i,s){var o=t,u;return s&&(u=[t,s].concat(e.Array(arguments,4,!0)),o=e.rbind.apply(e,u)),this._inject(n,o,r,i)},after:function(t,n,i,s){var o=t,u;return s&&(u=[t,s].concat(e.Array(arguments,4,!0)),o=e.rbind.apply(e,u)),this._inject(r,o,n,i)},_inject:function(t,n,r,i){var s=e.stamp(r),o,u;return r._yuiaop||(r._yuiaop={}),o=r._yuiaop,o[i]||(o[i]=new e.Do.Method(r,i),r[i]=function(){return o[i].exec.apply(o[i],arguments)}),u=s+e.stamp(n)+i,o[i].register(u,n,t),new e.EventHandle(o[i],u)},detach:function(e){e.detach&&e.detach()}};e.Do=i,i.Method=function(e,t){this.obj=e,this.methodName=t,this.method=e[t],this.before={},this.after={}},i.Method.prototype.register=function(e,t,n){n?this.after[e]=t:this.before[e]=t},i.Method.prototype._delete=function(e){delete this.before[e],delete this.after[e]},i.Method.prototype.exec=function(){var t=e.Array(arguments,0,!0),n,r,s,o=this.before,u=this.after,a=!1;for(n in o)if(o.hasOwnProperty(n)){r=o[n].apply(this.obj,t);if(r)switch(r.constructor){case i.Halt:return r.retVal;case i.AlterArgs:t=r.newArgs;break;case i.Prevent:a=!0;break;default:}}a||(r=this.method.apply(this.obj,t)),i.originalRetVal=r,i.currentRetVal=r;for(n in u)if(u.hasOwnProperty(n)){s=u[n].apply(this.obj,t);if(s&&s.constructor===i.Halt)return s.retVal;s&&s.constructor===i.AlterReturn&&(r=s.newRetVal,i.currentRetVal=r)}return r},i.AlterArgs=function(e,t){this.msg=e,this.newArgs=t},i.AlterReturn=function(e,t){this.msg=e,this.newRetVal=t},i.Halt=function(e,t){this.msg=e,this.retVal=t},i.Prevent=function(e){this.msg=e},i.Error=i.Halt;var s=e.Array,o="after",u=["broadcast","monitored","bubbles","context","contextFn","currentTarget","defaultFn","defaultTargetOnly","details","emitFacade","fireOnce","async","host","preventable","preventedFn","queuable","silent","stoppedFn","target","type"],a=s.hash(u),f=Array.prototype.slice,l=9,c="yui:log",h=function(e,t,n){var r;for(r in t)a[r]&&(n||!(r in e))&&(e[r]=t[r]);return e};e.CustomEvent=function(t,n){this._kds=e.CustomEvent.keepDeprecatedSubs,this.id=e.guid(),this.type=t,this.silent=this.logSystem=t===c,this._kds&&(this.subscribers={},this.afters={}),n&&h(this,n,!0)},e.CustomEvent.keepDeprecatedSubs=!1,e.CustomEvent.mixConfigs=h,e.CustomEvent.prototype={constructor:e.CustomEvent,signature:l,context:e,preventable:!0,bubbles:!0,hasSubs:function(e){var t=0,n=0,r=this._subscribers,i=this._afters,s=this.sibling;return r&&(t=r.length),i&&(n=i.length),s&&(r=s._subscribers,i=s._afters,r&&(t+=r.length),i&&(n+=i.length)),e?e==="after"?n:t:t+n},monitor:function(e){this.monitored=!0;var t=this.id+"|"+this.type+"_"+e,n=f.call(arguments,0);return n[0]=t,this.host.on.apply(this.host,n)},getSubs:function(){var e=this.sibling,t=this._subscribers,n=this._afters,r,i;return e&&(r=e._subscribers,i=e._afters),r?t?t=t.concat(r):t=r.concat():t?t=t.concat():t=[],i?n?n=n.concat(i):n=i.concat():n?n=n.concat():n=[],[t,n]},applyConfig:function(e,t){h(this,e,t)},_on:function(t,n,r,i){var s=new e.Subscriber(t,n,r,i),u;return this.fireOnce&&this.fired&&(u=this.firedWith,this.emitFacade&&this._addFacadeToArgs&&this._addFacadeToArgs(u),this.async?setTimeout(e.bind(this._notify,this,s,u),0):this._notify(s,u)),i===o?(this._afters||(this._afters=[]),this._afters.push(s)):(this._subscribers||(this._subscribers=[]),this._subscribers.push(s)),this._kds&&(i===o?this.afters[s.id]=s:this.subscribers[s.id]=s),new e.EventHandle(this,s)},subscribe:function(e,t){var n=arguments.length>2?f.call(arguments,2):null;return this._on(e,t,n,!0)},on:function(e,t){var n=arguments.length>2?f.call(arguments,2):null;return this.monitored&&this.host&&this.host._monitor("attach",this,{args:arguments}),this._on(e,t,n,!0)},after:function(e,t){var n=arguments.length>2?f.call(arguments,2):null;return this._on(e,t,n,o)},detach:function(e,t){if(e&&e.detach)return e.detach();var n,r,i=0,s=this._subscribers,o=this._afters;if(s)for(n=s.length;n>=0;n--)r=s[n],r&&(!e||e===r.fn)&&(this._delete(r,s,n),i++);if(o)for(n=o.length;n>=0;n--)r=o[n],r&&(!e||e===r.fn)&&(this._delete(r,o,n),i++);return i},unsubscribe:function(){return this.detach.apply(this,arguments)},_notify:function(e,t,n){var r;return r=e.notify(t,this),!1===r||this.stopped>1?!1:!0},log:function(e,t){},fire:function(){var e=[];return e.push.apply(e,arguments),this._fire(e)},_fire:function(e){return this.fireOnce&&this.fired?!0:(this.fired=!0,this.fireOnce&&(this.firedWith=e),this.emitFacade?this.fireComplex(e):this.fireSimple(e))},fireSimple:function(e){this.stopped=0,this.prevented=0;if(this.hasSubs()){var t=this.getSubs();this._procSubs(t[0],e),this._procSubs(t[1],e)}return this.broadcast&&this._broadcast(e),this.stopped?!1:!0},fireComplex:function(e){return e[0]=e[0]||{},this.fireSimple(e)},_procSubs:function(e,t,n){var r,i,s;for(i=0,s=e.length;i<s;i++){r=e[i];if(r&&r.fn){!1===this._notify(r,t,n)&&(this.stopped=2);if(this.stopped===2)return!1}}return!0},_broadcast:function(t){if(!this.stopped&&this.broadcast){var n=t.concat();n.unshift(this.type),this.host!==e&&e.fire.apply(e,n),this.broadcast===2&&e.Global.fire.apply(e.Global,n)}},unsubscribeAll:function(){return this.detachAll.apply(this,arguments)},detachAll:function(){return this.detach()},_delete:function(e,t,n){var r=e._when;t||(t=r===o?this._afters:this._subscribers),t&&(n=s.indexOf(t,e,0),e&&t[n]===e&&t.splice(n,1)),this._kds&&(r===o?delete this.afters[e.id]:delete this.subscribers[e.id]),this.monitored&&this.host&&this.host._monitor("detach",this,{ce:this,sub:e}),e&&(e.deleted=!0)}},e.Subscriber=function(t,n,r,i){this.fn=t,this.context=n,this.id=e.guid(),this.args=r,this._when=i},e.Subscriber.prototype={constructor:e.Subscriber,_notify:function(e,t,n){if(this.deleted&&!this.postponed){if(!this.postponed)return delete this.postponed,null;delete this.fn,delete this.context}var r=this.args,i;switch(n.signature){case 0:i=this.fn.call(e,n.type,t,e);break;case 1:i=this.fn.call(e,t[0]||null,e);break;
default:r||t?(t=t||[],r=r?t.concat(r):t,i=this.fn.apply(e,r)):i=this.fn.call(e)}return this.once&&n._delete(this),i},notify:function(t,n){var r=this.context,i=!0;r||(r=n.contextFn?n.contextFn():n.context);if(e.config&&e.config.throwFail)i=this._notify(r,t,n);else try{i=this._notify(r,t,n)}catch(s){e.error(this+" failed: "+s.message,s)}return i},contains:function(e,t){return t?this.fn===e&&this.context===t:this.fn===e},valueOf:function(){return this.id}},e.EventHandle=function(e,t){this.evt=e,this.sub=t},e.EventHandle.prototype={batch:function(t,n){t.call(n||this,this),e.Lang.isArray(this.evt)&&e.Array.each(this.evt,function(e){e.batch.call(n||e,t)})},detach:function(){var t=this.evt,n=0,r;if(t)if(e.Lang.isArray(t))for(r=0;r<t.length;r++)n+=t[r].detach();else t._delete(this.sub),n=1;return n},monitor:function(e){return this.evt.monitor.apply(this.evt,arguments)}};var p=e.Lang,d=":",v="|",m="~AFTER~",g=/(.*?)(:)(.*?)/,y=e.cached(function(e){return e.replace(g,"*$2$3")}),b=function(e,t){return!t||typeof e!="string"||e.indexOf(d)>-1?e:t+d+e},w=e.cached(function(e,t){var n=e,r,i,s;return p.isString(n)?(s=n.indexOf(m),s>-1&&(i=!0,n=n.substr(m.length)),s=n.indexOf(v),s>-1&&(r=n.substr(0,s),n=n.substr(s+1),n==="*"&&(n=null)),[r,t?b(n,t):n,i,n]):n}),E=function(t){var n=this._yuievt,r;n||(n=this._yuievt={events:{},targets:null,config:{host:this,context:this},chain:e.config.chain}),r=n.config,t&&(h(r,t,!0),t.chain!==undefined&&(n.chain=t.chain),t.prefix&&(r.prefix=t.prefix))};E.prototype={constructor:E,once:function(){var e=this.on.apply(this,arguments);return e.batch(function(e){e.sub&&(e.sub.once=!0)}),e},onceAfter:function(){var e=this.after.apply(this,arguments);return e.batch(function(e){e.sub&&(e.sub.once=!0)}),e},parseType:function(e,t){return w(e,t||this._yuievt.config.prefix)},on:function(t,n,r){var i=this._yuievt,s=w(t,i.config.prefix),o,u,a,l,c,h,d,v=e.Env.evt.handles,g,y,b,E=e.Node,S,x,T;this._monitor("attach",s[1],{args:arguments,category:s[0],after:s[2]});if(p.isObject(t))return p.isFunction(t)?e.Do.before.apply(e.Do,arguments):(o=n,u=r,a=f.call(arguments,0),l=[],p.isArray(t)&&(T=!0),g=t._after,delete t._after,e.each(t,function(e,t){p.isObject(e)&&(o=e.fn||(p.isFunction(e)?e:o),u=e.context||u);var n=g?m:"";a[0]=n+(T?e:t),a[1]=o,a[2]=u,l.push(this.on.apply(this,a))},this),i.chain?this:new e.EventHandle(l));h=s[0],g=s[2],b=s[3];if(E&&e.instanceOf(this,E)&&b in E.DOM_EVENTS)return a=f.call(arguments,0),a.splice(2,0,E.getDOMNode(this)),e.on.apply(e,a);t=s[1];if(e.instanceOf(this,YUI)){y=e.Env.evt.plugins[t],a=f.call(arguments,0),a[0]=b,E&&(S=a[2],e.instanceOf(S,e.NodeList)?S=e.NodeList.getDOMNodes(S):e.instanceOf(S,E)&&(S=E.getDOMNode(S)),x=b in E.DOM_EVENTS,x&&(a[2]=S));if(y)d=y.on.apply(e,a);else if(!t||x)d=e.Event._attach(a)}return d||(c=i.events[t]||this.publish(t),d=c._on(n,r,arguments.length>3?f.call(arguments,3):null,g?"after":!0),t.indexOf("*:")!==-1&&(this._hasSiblings=!0)),h&&(v[h]=v[h]||{},v[h][t]=v[h][t]||[],v[h][t].push(d)),i.chain?this:d},subscribe:function(){return this.on.apply(this,arguments)},detach:function(t,n,r){var i=this._yuievt.events,s,o=e.Node,u=o&&e.instanceOf(this,o);if(!t&&this!==e){for(s in i)i.hasOwnProperty(s)&&i[s].detach(n,r);return u&&e.Event.purgeElement(o.getDOMNode(this)),this}var a=w(t,this._yuievt.config.prefix),l=p.isArray(a)?a[0]:null,c=a?a[3]:null,h,d=e.Env.evt.handles,v,m,g,y,b=function(e,t,n){var r=e[t],i,s;if(r)for(s=r.length-1;s>=0;--s)i=r[s].evt,(i.host===n||i.el===n)&&r[s].detach()};if(l){m=d[l],t=a[1],v=u?e.Node.getDOMNode(this):this;if(m){if(t)b(m,t,v);else for(s in m)m.hasOwnProperty(s)&&b(m,s,v);return this}}else{if(p.isObject(t)&&t.detach)return t.detach(),this;if(u&&(!c||c in o.DOM_EVENTS))return g=f.call(arguments,0),g[2]=o.getDOMNode(this),e.detach.apply(e,g),this}h=e.Env.evt.plugins[c];if(e.instanceOf(this,YUI)){g=f.call(arguments,0);if(h&&h.detach)return h.detach.apply(e,g),this;if(!t||!h&&o&&t in o.DOM_EVENTS)return g[0]=t,e.Event.detach.apply(e.Event,g),this}return y=i[a[1]],y&&y.detach(n,r),this},unsubscribe:function(){return this.detach.apply(this,arguments)},detachAll:function(e){return this.detach(e)},unsubscribeAll:function(){return this.detachAll.apply(this,arguments)},publish:function(t,n){var r,i=this._yuievt,s=i.config,o=s.prefix;return typeof t=="string"?(o&&(t=b(t,o)),r=this._publish(t,s,n)):(r={},e.each(t,function(e,t){o&&(t=b(t,o)),r[t]=this._publish(t,s,e||n)},this)),r},_getFullType:function(e){var t=this._yuievt.config.prefix;return t?t+d+e:e},_publish:function(t,n,r){var i,s=this._yuievt,o=s.config,u=o.host,a=o.context,f=s.events;return i=f[t],(o.monitored&&!i||i&&i.monitored)&&this._monitor("publish",t,{args:arguments}),i||(i=f[t]=new e.CustomEvent(t,n),n||(i.host=u,i.context=a)),r&&h(i,r,!0),i},_monitor:function(e,t,n){var r,i,s;if(t){typeof t=="string"?(s=t,i=this.getEvent(t,!0)):(i=t,s=t.type);if(this._yuievt.config.monitored&&(!i||i.monitored)||i&&i.monitored)r=s+"_"+e,n.monitored=e,this.fire.call(this,r,n)}},fire:function(e){var t=typeof e=="string",n=arguments.length,r=e,i=this._yuievt,s=i.config,o=s.prefix,u,a,l,c;t&&n<=3?n===2?c=[arguments[1]]:n===3?c=[arguments[1],arguments[2]]:c=[]:c=f.call(arguments,t?1:0),t||(r=e&&e.type),o&&(r=b(r,o)),a=i.events[r],this._hasSiblings&&(l=this.getSibling(r,a),l&&!a&&(a=this.publish(r))),(s.monitored&&(!a||a.monitored)||a&&a.monitored)&&this._monitor("fire",a||r,{args:c});if(!a){if(i.hasTargets)return this.bubble({type:r},c,this);u=!0}else l&&(a.sibling=l),u=a._fire(c);return i.chain?this:u},getSibling:function(e,t){var n;return e.indexOf(d)>-1&&(e=y(e),n=this.getEvent(e,!0),n&&(n.applyConfig(t),n.bubbles=!1,n.broadcast=0)),n},getEvent:function(e,t){var n,r;return t||(n=this._yuievt.config.prefix,e=n?b(e,n):e),r=this._yuievt.events,r[e]||null},after:function(t,n){var r=f.call(arguments,0);switch(p.type(t)){case"function":return e.Do.after.apply(e.Do,arguments);case"array":case"object":r[0]._after=!0;break;default:r[0]=m+t}return this.on.apply(this,r)},before:function(){
return this.on.apply(this,arguments)}},e.EventTarget=E,e.mix(e,E.prototype),E.call(e,{bubbles:!1}),YUI.Env.globalEvents=YUI.Env.globalEvents||new E,e.Global=YUI.Env.globalEvents},"patched-v3.18.0",{requires:["oop"]});
YUI.add("event-custom-complex",function(e,t){var n,r,i=e.Object,s,o={},u=e.CustomEvent.prototype,a=e.EventTarget.prototype,f=function(e,t){var n;for(n in t)r.hasOwnProperty(n)||(e[n]=t[n])};e.EventFacade=function(e,t){e||(e=o),this._event=e,this.details=e.details,this.type=e.type,this._type=e.type,this.target=e.target,this.currentTarget=t,this.relatedTarget=e.relatedTarget},e.mix(e.EventFacade.prototype,{stopPropagation:function(){this._event.stopPropagation(),this.stopped=1},stopImmediatePropagation:function(){this._event.stopImmediatePropagation(),this.stopped=2},preventDefault:function(){this._event.preventDefault(),this.prevented=1},halt:function(e){this._event.halt(e),this.prevented=1,this.stopped=e?2:1}}),u.fireComplex=function(t){var n,r,i,s,o,u=!0,a,f,l,c,h,p,d,v,m,g=this,y=g.host||g,b,w,E=g.stack,S=y._yuievt,x;if(E&&g.queuable&&g.type!==E.next.type)return E.queue||(E.queue=[]),E.queue.push([g,t]),!0;x=g.hasSubs()||S.hasTargets||g.broadcast,g.target=g.target||y,g.currentTarget=y,g.details=t.concat();if(x){n=E||{id:g.id,next:g,silent:g.silent,stopped:0,prevented:0,bubbling:null,type:g.type,defaultTargetOnly:g.defaultTargetOnly},f=g.getSubs(),l=f[0],c=f[1],g.stopped=g.type!==n.type?0:n.stopped,g.prevented=g.type!==n.type?0:n.prevented,g.stoppedFn&&(a=new e.EventTarget({fireOnce:!0,context:y}),g.events=a,a.on("stopped",g.stoppedFn)),g._facade=null,r=g._createFacade(t),l&&g._procSubs(l,t,r),g.bubbles&&y.bubble&&!g.stopped&&(w=n.bubbling,n.bubbling=g.type,n.type!==g.type&&(n.stopped=0,n.prevented=0),u=y.bubble(g,t,null,n),g.stopped=Math.max(g.stopped,n.stopped),g.prevented=Math.max(g.prevented,n.prevented),n.bubbling=w),d=g.prevented,d?(v=g.preventedFn,v&&v.apply(y,t)):(m=g.defaultFn,m&&(!g.defaultTargetOnly&&!n.defaultTargetOnly||y===r.target)&&m.apply(y,t)),g.broadcast&&g._broadcast(t);if(c&&!g.prevented&&g.stopped<2){h=n.afterQueue;if(n.id===g.id||g.type!==S.bubbling){g._procSubs(c,t,r);if(h)while(b=h.last())b()}else p=c,n.execDefaultCnt&&(p=e.merge(p),e.each(p,function(e){e.postponed=!0})),h||(n.afterQueue=new e.Queue),n.afterQueue.add(function(){g._procSubs(p,t,r)})}g.target=null;if(n.id===g.id){s=n.queue;if(s)while(s.length)i=s.pop(),o=i[0],n.next=o,o._fire(i[1]);g.stack=null}u=!g.stopped,g.type!==S.bubbling&&(n.stopped=0,n.prevented=0,g.stopped=0,g.prevented=0)}else m=g.defaultFn,m&&(r=g._createFacade(t),(!g.defaultTargetOnly||y===r.target)&&m.apply(y,t));return g._facade=null,u},u._hasPotentialSubscribers=function(){return this.hasSubs()||this.host._yuievt.hasTargets||this.broadcast},u._createFacade=u._getFacade=function(t){var n=this.details,r=n&&n[0],i=r&&typeof r=="object",s=this._facade;return s||(s=new e.EventFacade(this,this.currentTarget)),i?(f(s,r),r.type&&(s.type=r.type),t&&(t[0]=s)):t&&t.unshift(s),s.details=this.details,s.target=this.originalTarget||this.target,s.currentTarget=this.currentTarget,s.stopped=0,s.prevented=0,this._facade=s,this._facade},u._addFacadeToArgs=function(e){var t=e[0];t&&t.halt&&t.stopImmediatePropagation&&t.stopPropagation&&t._event||this._createFacade(e)},u.stopPropagation=function(){this.stopped=1,this.stack&&(this.stack.stopped=1),this.events&&this.events.fire("stopped",this)},u.stopImmediatePropagation=function(){this.stopped=2,this.stack&&(this.stack.stopped=2),this.events&&this.events.fire("stopped",this)},u.preventDefault=function(){this.preventable&&(this.prevented=1,this.stack&&(this.stack.prevented=1))},u.halt=function(e){e?this.stopImmediatePropagation():this.stopPropagation(),this.preventDefault()},a.addTarget=function(t){var n=this._yuievt;return n.targets||(n.targets={}),n.targets[e.stamp(t)]=t,n.hasTargets=!0,this},a.getTargets=function(){var e=this._yuievt.targets;return e?i.values(e):[]},a.removeTarget=function(t){var n=this._yuievt.targets;return n&&(delete n[e.stamp(t,!0)],i.size(n)===0&&(this._yuievt.hasTargets=!1)),this},a.bubble=function(e,t,n,r){var i=this._yuievt.targets,s=!0,o,u,a,f,l,c=e&&e.type,h=n||e&&e.target||this,p;if(!e||!e.stopped&&i)for(a in i)if(i.hasOwnProperty(a)){o=i[a],u=o._yuievt.events[c],o._hasSiblings&&(l=o.getSibling(c,u)),l&&!u&&(u=o.publish(c)),p=o._yuievt.bubbling,o._yuievt.bubbling=c;if(!u)o._yuievt.hasTargets&&o.bubble(e,t,h,r);else{l&&(u.sibling=l),u.target=h,u.originalTarget=h,u.currentTarget=o,f=u.broadcast,u.broadcast=!1,u.emitFacade=!0,u.stack=r,s=s&&u.fire.apply(u,t||e.details||[]),u.broadcast=f,u.originalTarget=null;if(u.stopped)break}o._yuievt.bubbling=p}return s},a._hasPotentialSubscribers=function(e){var t=this._yuievt,n=t.events[e];return n?n.hasSubs()||t.hasTargets||n.broadcast:!1},n=new e.EventFacade,r={};for(s in n)r[s]=!0},"patched-v3.18.0",{requires:["event-custom-base"]});
YUI.add("intl",function(e,t){var n={},r="yuiRootLang",i="yuiActiveLang",s=[];e.mix(e.namespace("Intl"),{_mod:function(e){return n[e]||(n[e]={}),n[e]},setLang:function(e,t){var n=this._mod(e),s=n[i],o=!!n[t];return o&&t!==s&&(n[i]=t,this.fire("intl:langChange",{module:e,prevVal:s,newVal:t===r?"":t})),o},getLang:function(e){var t=this._mod(e)[i];return t===r?"":t},add:function(e,t,n){t=t||r,this._mod(e)[t]=n,this.setLang(e,t)},get:function(t,n,r){var s=this._mod(t),o;return r=r||s[i],o=s[r]||{},n?o[n]:e.merge(o)},getAvailableLangs:function(t){var n=e.Env._loader,r=n&&n.moduleInfo[t],i=r&&r.lang;return i?i.concat():s}}),e.augment(e.Intl,e.EventTarget),e.Intl.publish("intl:langChange",{emitFacade:!0})},"patched-v3.18.0",{requires:["intl-base","event-custom"]});
YUI.add("event-base",function(e,t){e.publish("domready",{fireOnce:!0,async:!0}),YUI.Env.DOMReady?e.fire("domready"):e.Do.before(function(){e.fire("domready")},YUI.Env,"_ready");var n=e.UA,r={},i={63232:38,63233:40,63234:37,63235:39,63276:33,63277:34,25:9,63272:46,63273:36,63275:35},s=function(t){if(!t)return t;try{t&&3==t.nodeType&&(t=t.parentNode)}catch(n){return null}return e.one(t)},o=function(e,t,n){this._event=e,this._currentTarget=t,this._wrapper=n||r,this.init()};e.extend(o,Object,{init:function(){var e=this._event,t=this._wrapper.overrides,r=e.pageX,o=e.pageY,u,a=this._currentTarget;this.altKey=e.altKey,this.ctrlKey=e.ctrlKey,this.metaKey=e.metaKey,this.shiftKey=e.shiftKey,this.type=t&&t.type||e.type,this.clientX=e.clientX,this.clientY=e.clientY,this.pageX=r,this.pageY=o,u=e.keyCode||e.charCode,n.webkit&&u in i&&(u=i[u]),this.keyCode=u,this.charCode=u,this.which=e.which||e.charCode||u,this.button=this.which,this.target=s(e.target),this.currentTarget=s(a),this.relatedTarget=s(e.relatedTarget);if(e.type=="mousewheel"||e.type=="DOMMouseScroll")this.wheelDelta=e.detail?e.detail*-1:Math.round(e.wheelDelta/80)||(e.wheelDelta<0?-1:1);this._touch&&this._touch(e,a,this._wrapper)},stopPropagation:function(){this._event.stopPropagation(),this._wrapper.stopped=1,this.stopped=1},stopImmediatePropagation:function(){var e=this._event;e.stopImmediatePropagation?e.stopImmediatePropagation():this.stopPropagation(),this._wrapper.stopped=2,this.stopped=2},preventDefault:function(e){var t=this._event;t.preventDefault(),e&&(t.returnValue=e),this._wrapper.prevented=1,this.prevented=1},halt:function(e){e?this.stopImmediatePropagation():this.stopPropagation(),this.preventDefault()}}),o.resolve=s,e.DOM2EventFacade=o,e.DOMEventFacade=o,function(){e.Env.evt.dom_wrappers={},e.Env.evt.dom_map={};var t=e.Env.evt,n=e.config,r=n.win,i=YUI.Env.add,s=YUI.Env.remove,o=function(){YUI.Env.windowLoaded=!0,e.Event._load(),s(r,"load",o)},u=function(){e.Event._unload()},a="domready",f="~yui|2|compat~",l=function(t){try{return t&&typeof t!="string"&&e.Lang.isNumber(t.length)&&!t.tagName&&!e.DOM.isWindow(t)}catch(n){return!1}},c=e.CustomEvent.prototype._delete,h=function(t){var n=c.apply(this,arguments);return this.hasSubs()||e.Event._clean(this),n},p=function(){var n=!1,o=0,c=[],d=t.dom_wrappers,v=null,m=t.dom_map;return{POLL_RETRYS:1e3,POLL_INTERVAL:40,lastError:null,_interval:null,_dri:null,DOMReady:!1,startInterval:function(){p._interval||(p._interval=setInterval(p._poll,p.POLL_INTERVAL))},onAvailable:function(t,n,r,i,s,u){var a=e.Array(t),f,l;for(f=0;f<a.length;f+=1)c.push({id:a[f],fn:n,obj:r,override:i,checkReady:s,compat:u});return o=this.POLL_RETRYS,setTimeout(p._poll,0),l=new e.EventHandle({_delete:function(){if(l.handle){l.handle.detach();return}var e,t;for(e=0;e<a.length;e++)for(t=0;t<c.length;t++)a[e]===c[t].id&&c.splice(t,1)}}),l},onContentReady:function(e,t,n,r,i){return p.onAvailable(e,t,n,r,!0,i)},attach:function(t,n,r,i){return p._attach(e.Array(arguments,0,!0))},_createWrapper:function(t,n,s,o,u){var a,f=e.stamp(t),l="event:"+f+n;return!1===u&&(l+="native"),s&&(l+="capture"),a=d[l],a||(a=e.publish(l,{silent:!0,bubbles:!1,emitFacade:!1,contextFn:function(){return o?a.el:(a.nodeRef=a.nodeRef||e.one(a.el),a.nodeRef)}}),a.overrides={},a.el=t,a.key=l,a.domkey=f,a.type=n,a.fn=function(e){a.fire(p.getEvent(e,t,o||!1===u))},a.capture=s,t==r&&n=="load"&&(a.fireOnce=!0,v=l),a._delete=h,d[l]=a,m[f]=m[f]||{},m[f][l]=a,i(t,n,a.fn,s)),a},_attach:function(t,n){var i,s,o,u,a,c=!1,h,d=t[0],v=t[1],m=t[2]||r,g=n&&n.facade,y=n&&n.capture,b=n&&n.overrides;t[t.length-1]===f&&(i=!0);if(!v||!v.call)return!1;if(l(m))return s=[],e.each(m,function(e,r){t[2]=e,s.push(p._attach(t.slice(),n))}),new e.EventHandle(s);if(e.Lang.isString(m)){if(i)o=e.DOM.byId(m);else{o=e.Selector.query(m);switch(o.length){case 0:o=null;break;case 1:o=o[0];break;default:return t[2]=o,p._attach(t,n)}}if(!o)return h=p.onAvailable(m,function(){h.handle=p._attach(t,n)},p,!0,!1,i),h;m=o}return m?(e.Node&&e.instanceOf(m,e.Node)&&(m=e.Node.getDOMNode(m)),u=p._createWrapper(m,d,y,i,g),b&&e.mix(u.overrides,b),m==r&&d=="load"&&YUI.Env.windowLoaded&&(c=!0),i&&t.pop(),a=t[3],h=u._on(v,a,t.length>4?t.slice(4):null),c&&u.fire(),h):!1},detach:function(t,n,r,i){var s=e.Array(arguments,0,!0),o,u,a,c,h,v;s[s.length-1]===f&&(o=!0);if(t&&t.detach)return t.detach();typeof r=="string"&&(o?r=e.DOM.byId(r):(r=e.Selector.query(r),u=r.length,u<1?r=null:u==1&&(r=r[0])));if(!r)return!1;if(r.detach)return s.splice(2,1),r.detach.apply(r,s);if(l(r)){a=!0;for(c=0,u=r.length;c<u;++c)s[2]=r[c],a=e.Event.detach.apply(e.Event,s)&&a;return a}return!t||!n||!n.call?p.purgeElement(r,!1,t):(h="event:"+e.stamp(r)+t,v=d[h],v?v.detach(n):!1)},getEvent:function(t,n,i){var s=t||r.event;return i?s:new e.DOMEventFacade(s,n,d["event:"+e.stamp(n)+t.type])},generateId:function(t){return e.DOM.generateID(t)},_isValidCollection:l,_load:function(t){n||(n=!0,e.fire&&e.fire(a),p._poll())},_poll:function(){if(p.locked)return;if(e.UA.ie&&!YUI.Env.DOMReady){p.startInterval();return}p.locked=!0;var t,r,i,s,u,a,f=!n;f||(f=o>0),u=[],a=function(t,n){var r,i=n.override;try{n.compat?(n.override?i===!0?r=n.obj:r=i:r=t,n.fn.call(r,n.obj)):(r=n.obj||e.one(t),n.fn.apply(r,e.Lang.isArray(i)?i:[]))}catch(s){}};for(t=0,r=c.length;t<r;++t)i=c[t],i&&!i.checkReady&&(s=i.compat?e.DOM.byId(i.id):e.Selector.query(i.id,null,!0),s?(a(s,i),c[t]=null):u.push(i));for(t=0,r=c.length;t<r;++t){i=c[t];if(i&&i.checkReady){s=i.compat?e.DOM.byId(i.id):e.Selector.query(i.id,null,!0);if(s){if(n||s.get&&s.get("nextSibling")||s.nextSibling)a(s,i),c[t]=null}else u.push(i)}}o=u.length===0?0:o-1,f?p.startInterval():(clearInterval(p._interval),p._interval=null),p.locked=!1;return},purgeElement:function(t,n,r){var i=e.Lang.isString(t)?e.Selector.query(t,null,!0):t,s=p.getListeners(i,r),o,u,a,f;if(n&&i){s=s||[],a=e.Selector.query("*",i),u=a.length;for(o=0;o<u;++o)f=p.getListeners(a[o],r),f&&(s=s.concat(f))}if(s)for(o=0,u=s.length;o<u;++o)s[o].detachAll()}
,_clean:function(t){var n=t.key,r=t.domkey;s(t.el,t.type,t.fn,t.capture),delete d[n],delete e._yuievt.events[n],m[r]&&(delete m[r][n],e.Object.size(m[r])||delete m[r])},getListeners:function(n,r){var i=e.stamp(n,!0),s=m[i],o=[],u=r?"event:"+i+r:null,a=t.plugins;return s?(u?(a[r]&&a[r].eventDef&&(u+="_synth"),s[u]&&o.push(s[u]),u+="native",s[u]&&o.push(s[u])):e.each(s,function(e,t){o.push(e)}),o.length?o:null):null},_unload:function(t){e.each(d,function(e,n){e.type=="unload"&&e.fire(t),e.detachAll()}),s(r,"unload",u)},nativeAdd:i,nativeRemove:s}}();e.Event=p,n.injected||YUI.Env.windowLoaded?o():i(r,"load",o);if(e.UA.ie){e.on(a,p._poll);if(e.UA.ie<7)try{i(r,"unload",u)}catch(d){}}p.Custom=e.CustomEvent,p.Subscriber=e.Subscriber,p.Target=e.EventTarget,p.Handle=e.EventHandle,p.Facade=e.EventFacade,p._poll()}(),e.Env.evt.plugins.available={on:function(t,n,r,i){var s=arguments.length>4?e.Array(arguments,4,!0):null;return e.Event.onAvailable.call(e.Event,r,n,i,s)}},e.Env.evt.plugins.contentready={on:function(t,n,r,i){var s=arguments.length>4?e.Array(arguments,4,!0):null;return e.Event.onContentReady.call(e.Event,r,n,i,s)}}},"patched-v3.18.0",{requires:["event-custom-base"]});
YUI.add("dom-core",function(e,t){var n="nodeType",r="ownerDocument",i="documentElement",s="defaultView",o="parentWindow",u="tagName",a="parentNode",f="previousSibling",l="nextSibling",c="contains",h="compareDocumentPosition",p=[],d=function(){var t=e.config.doc.createElement("div"),n=t.appendChild(e.config.doc.createTextNode("")),r=!1;try{r=t.contains(n)}catch(i){}return r}(),v={byId:function(e,t){return v.allById(e,t)[0]||null},getId:function(e){var t;return e.id&&!e.id.tagName&&!e.id.item?t=e.id:e.attributes&&e.attributes.id&&(t=e.attributes.id.value),t},setId:function(e,t){e.setAttribute?e.setAttribute("id",t):e.id=t},ancestor:function(e,t,n,r){var i=null;return n&&(i=!t||t(e)?e:null),i||v.elementByAxis(e,a,t,null,r)},ancestors:function(e,t,n,r){var i=e,s=[];while(i=v.ancestor(i,t,n,r)){n=!1;if(i){s.unshift(i);if(r&&r(i))return s}}return s},elementByAxis:function(e,t,n,r,i){while(e&&(e=e[t])){if((r||e[u])&&(!n||n(e)))return e;if(i&&i(e))return null}return null},contains:function(e,t){var r=!1;if(!t||!e||!t[n]||!e[n])r=!1;else if(e[c]&&(t[n]===1||d))r=e[c](t);else if(e[h]){if(e===t||!!(e[h](t)&16))r=!0}else r=v._bruteContains(e,t);return r},inDoc:function(e,t){var n=!1,s;return e&&e.nodeType&&(t||(t=e[r]),s=t[i],s&&s.contains&&e.tagName?n=s.contains(e):n=v.contains(s,e)),n},allById:function(t,n){n=n||e.config.doc;var r=[],i=[],s,o;if(n.querySelectorAll)i=n.querySelectorAll('[id="'+t+'"]');else if(n.all){r=n.all(t);if(r){r.nodeName&&(r.id===t?(i.push(r),r=p):r=[r]);if(r.length)for(s=0;o=r[s++];)(o.id===t||o.attributes&&o.attributes.id&&o.attributes.id.value===t)&&i.push(o)}}else i=[v._getDoc(n).getElementById(t)];return i},isWindow:function(e){return!!(e&&e.scrollTo&&e.document)},_removeChildNodes:function(e){while(e.firstChild)e.removeChild(e.firstChild)},siblings:function(e,t){var n=[],r=e;while(r=r[f])r[u]&&(!t||t(r))&&n.unshift(r);r=e;while(r=r[l])r[u]&&(!t||t(r))&&n.push(r);return n},_bruteContains:function(e,t){while(t){if(e===t)return!0;t=t.parentNode}return!1},_getRegExp:function(e,t){return t=t||"",v._regexCache=v._regexCache||{},v._regexCache[e+t]||(v._regexCache[e+t]=new RegExp(e,t)),v._regexCache[e+t]},_getDoc:function(t){var i=e.config.doc;return t&&(i=t[n]===9?t:t[r]||t.document||e.config.doc),i},_getWin:function(t){var n=v._getDoc(t);return n[s]||n[o]||e.config.win},_batch:function(e,t,n,r,i,s){t=typeof t=="string"?v[t]:t;var o,u=0,a,f;if(t&&e)while(a=e[u++])o=o=t.call(v,a,n,r,i,s),typeof o!="undefined"&&(f||(f=[]),f.push(o));return typeof f!="undefined"?f:e},generateID:function(t){var n=t.id;return n||(n=e.stamp(t),t.id=n),n}};e.DOM=v},"patched-v3.18.0",{requires:["oop","features"]});
YUI.add("dom-base",function(e,t){var n=e.config.doc.documentElement,r=e.DOM,i="tagName",s="ownerDocument",o="",u=e.Features.add,a=e.Features.test;e.mix(r,{getText:n.textContent!==undefined?function(e){var t="";return e&&(t=e.textContent),t||""}:function(e){var t="";return e&&(t=e.innerText||e.nodeValue),t||""},setText:n.textContent!==undefined?function(e,t){e&&(e.textContent=t)}:function(e,t){"innerText"in e?e.innerText=t:"nodeValue"in e&&(e.nodeValue=t)},CUSTOM_ATTRIBUTES:n.hasAttribute?{htmlFor:"for",className:"class"}:{"for":"htmlFor","class":"className"},setAttribute:function(e,t,n,i){e&&t&&e.setAttribute&&(t=r.CUSTOM_ATTRIBUTES[t]||t,e.setAttribute(t,n,i))},getAttribute:function(e,t,n){n=n!==undefined?n:2;var i="";return e&&t&&e.getAttribute&&(t=r.CUSTOM_ATTRIBUTES[t]||t,i=e.tagName==="BUTTON"&&t==="value"?r.getValue(e):e.getAttribute(t,n),i===null&&(i="")),i},VALUE_SETTERS:{},VALUE_GETTERS:{},getValue:function(e){var t="",n;return e&&e[i]&&(n=r.VALUE_GETTERS[e[i].toLowerCase()],n?t=n(e):t=e.value),t===o&&(t=o),typeof t=="string"?t:""},setValue:function(e,t){var n;e&&e[i]&&(n=r.VALUE_SETTERS[e[i].toLowerCase()],t=t===null?"":t,n?n(e,t):e.value=t)},creators:{}}),u("value-set","select",{test:function(){var t=e.config.doc.createElement("select");return t.innerHTML="<option>1</option><option>2</option>",t.value="2",t.value&&t.value==="2"}}),a("value-set","select")||(r.VALUE_SETTERS.select=function(e,t){for(var n=0,i=e.getElementsByTagName("option"),s;s=i[n++];)if(r.getValue(s)===t){s.selected=!0;break}}),e.mix(r.VALUE_GETTERS,{button:function(e){return e.attributes&&e.attributes.value?e.attributes.value.value:""}}),e.mix(r.VALUE_SETTERS,{button:function(e,t){var n=e.attributes.value;n||(n=e[s].createAttribute("value"),e.setAttributeNode(n)),n.value=t}}),e.mix(r.VALUE_GETTERS,{option:function(e){var t=e.attributes;return t.value&&t.value.specified?e.value:e.text},select:function(e){var t=e.value,n=e.options;return n&&n.length&&(e.multiple||e.selectedIndex>-1&&(t=r.getValue(n[e.selectedIndex]))),t}});var f,l,c;e.mix(e.DOM,{hasClass:function(t,n){var r=e.DOM._getRegExp("(?:^|\\s+)"+n+"(?:\\s+|$)");return r.test(t.className)},addClass:function(t,n){e.DOM.hasClass(t,n)||(t.className=e.Lang.trim([t.className,n].join(" ")))},removeClass:function(t,n){n&&l(t,n)&&(t.className=e.Lang.trim(t.className.replace(e.DOM._getRegExp("(?:^|\\s+)"+n+"(?:\\s+|$)")," ")),l(t,n)&&c(t,n))},replaceClass:function(e,t,n){c(e,t),f(e,n)},toggleClass:function(e,t,n){var r=n!==undefined?n:!l(e,t);r?f(e,t):c(e,t)}}),l=e.DOM.hasClass,c=e.DOM.removeClass,f=e.DOM.addClass;var h=/<([a-z]+)/i,r=e.DOM,u=e.Features.add,a=e.Features.test,p={},d=function(t,n){var r=e.config.doc.createElement("div"),i=!0;r.innerHTML=t;if(!r.firstChild||r.firstChild.tagName!==n.toUpperCase())i=!1;return i},v=/(?:\/(?:thead|tfoot|tbody|caption|col|colgroup)>)+\s*<tbody/,m="<table>",g="</table>",y;e.mix(e.DOM,{_fragClones:{},_create:function(e,t,n){n=n||"div";var i=r._fragClones[n];return i?i=i.cloneNode(!1):i=r._fragClones[n]=t.createElement(n),i.innerHTML=e,i},_children:function(e,t){var n=0,r=e.children,i,s,o;r&&r.tags&&(t?r=e.children.tags(t):s=r.tags("!").length);if(!r||!r.tags&&t||s){i=r||e.childNodes,r=[];while(o=i[n++])o.nodeType===1&&(!t||t===o.tagName)&&r.push(o)}return r||[]},create:function(t,n){typeof t=="string"&&(t=e.Lang.trim(t)),n=n||e.config.doc;var i=h.exec(t),s=r._create,o=p,u=null,a,f,l,c;return t!=undefined&&(i&&i[1]&&(a=o[i[1].toLowerCase()],typeof a=="function"?s=a:f=a),l=s(t,n,f),c=l.childNodes,c.length===1?u=l.removeChild(c[0]):c[0]&&c[0].className==="yui3-big-dummy"?(y=l.selectedIndex,c.length===2?u=c[0].nextSibling:(l.removeChild(c[0]),u=r._nl2frag(c,n))):u=r._nl2frag(c,n)),u},_nl2frag:function(t,n){var r=null,i,s;if(t&&(t.push||t.item)&&t[0]){n=n||t[0].ownerDocument,r=n.createDocumentFragment(),t.item&&(t=e.Array(t,0,!0));for(i=0,s=t.length;i<s;i++)r.appendChild(t[i])}return r},addHTML:function(t,n,i){var s=t.parentNode,o=0,u,a=n,f;if(n!=undefined)if(n.nodeType)f=n;else if(typeof n=="string"||typeof n=="number")a=f=r.create(n);else if(n[0]&&n[0].nodeType){f=e.config.doc.createDocumentFragment();while(u=n[o++])f.appendChild(u)}if(i)if(f&&i.parentNode)i.parentNode.insertBefore(f,i);else switch(i){case"replace":while(t.firstChild)t.removeChild(t.firstChild);f&&t.appendChild(f);break;case"before":f&&s.insertBefore(f,t);break;case"after":f&&(t.nextSibling?s.insertBefore(f,t.nextSibling):s.appendChild(f));break;default:f&&t.appendChild(f)}else f&&t.appendChild(f);return t.nodeName=="SELECT"&&y>0&&(t.selectedIndex=y-1),a},wrap:function(t,n){var r=n&&n.nodeType?n:e.DOM.create(n),i=r.getElementsByTagName("*");i.length&&(r=i[i.length-1]),t.parentNode&&t.parentNode.replaceChild(r,t),r.appendChild(t)},unwrap:function(e){var t=e.parentNode,n=t.lastChild,r=e,i;if(t){i=t.parentNode;if(i){e=t.firstChild;while(e!==n)r=e.nextSibling,i.insertBefore(e,t),e=r;i.replaceChild(n,t)}else t.removeChild(e)}}}),u("innerhtml","table",{test:function(){var t=e.config.doc.createElement("table");try{t.innerHTML="<tbody></tbody>"}catch(n){return!1}return t.firstChild&&t.firstChild.nodeName==="TBODY"}}),u("innerhtml-div","tr",{test:function(){return d("<tr></tr>","tr")}}),u("innerhtml-div","script",{test:function(){return d("<script></script>","script")}}),a("innerhtml","table")||(p.tbody=function(t,n){var i=r.create(m+t+g,n),s=e.DOM._children(i,"tbody")[0];return i.children.length>1&&s&&!v.test(t)&&s.parentNode.removeChild(s),i}),a("innerhtml-div","script")||(p.script=function(e,t){var n=t.createElement("div");return n.innerHTML="-"+e,n.removeChild(n.firstChild),n},p.link=p.style=p.script),a("innerhtml-div","tr")||(e.mix(p,{option:function(e,t){return r.create('<select><option class="yui3-big-dummy" selected></option>'+e+"</select>",t)},tr:function(e,t){return r.create("<tbody>"+e+"</tbody>",t)},td:function(e,t){return r.create("<tr>"+e+"</tr>",t)},col:function(e,t){return r.create("<colgroup>"+e+"</colgroup>",t)},tbody:"table"}),e.mix(p,{legend:"fieldset"
,th:p.td,thead:p.tbody,tfoot:p.tbody,caption:p.tbody,colgroup:p.tbody,optgroup:p.option})),r.creators=p,e.mix(e.DOM,{setWidth:function(t,n){e.DOM._setSize(t,"width",n)},setHeight:function(t,n){e.DOM._setSize(t,"height",n)},_setSize:function(e,t,n){n=n>0?n:0;var r=0;e.style[t]=n+"px",r=t==="height"?e.offsetHeight:e.offsetWidth,r>n&&(n-=r-n,n<0&&(n=0),e.style[t]=n+"px")}})},"patched-v3.18.0",{requires:["dom-core"]});
YUI.add("selector-native",function(e,t){(function(e){e.namespace("Selector");var t="compareDocumentPosition",n="ownerDocument",r={_types:{esc:{token:"\ue000",re:/\\[:\[\]\(\)#\.\'\>+~"]/gi},attr:{token:"\ue001",re:/(\[[^\]]*\])/g},pseudo:{token:"\ue002",re:/(\([^\)]*\))/g}},useNative:!0,_escapeId:function(e){return e&&(e=e.replace(/([:\[\]\(\)#\.'<>+~"])/g,"\\$1")),e},_compare:"sourceIndex"in e.config.doc.documentElement?function(e,t){var n=e.sourceIndex,r=t.sourceIndex;return n===r?0:n>r?1:-1}:e.config.doc.documentElement[t]?function(e,n){return e[t](n)&4?-1:1}:function(e,t){var r,i,s;return e&&t&&(r=e[n].createRange(),r.setStart(e,0),i=t[n].createRange(),i.setStart(t,0),s=r.compareBoundaryPoints(1,i)),s},_sort:function(t){return t&&(t=e.Array(t,0,!0),t.sort&&t.sort(r._compare)),t},_deDupe:function(e){var t=[],n,r;for(n=0;r=e[n++];)r._found||(t[t.length]=r,r._found=!0);for(n=0;r=t[n++];)r._found=null,r.removeAttribute("_found");return t},query:function(t,n,i,s){n=n||e.config.doc;var o=[],u=e.Selector.useNative&&e.config.doc.querySelector&&!s,a=[[t,n]],f,l,c,h=u?e.Selector._nativeQuery:e.Selector._bruteQuery;if(t&&h){!s&&(!u||n.tagName)&&(a=r._splitQueries(t,n));for(c=0;f=a[c++];)l=h(f[0],f[1],i),i||(l=e.Array(l,0,!0)),l&&(o=o.concat(l));a.length>1&&(o=r._sort(r._deDupe(o)))}return i?o[0]||null:o},_replaceSelector:function(t){var n=e.Selector._parse("esc",t),i,s;return t=e.Selector._replace("esc",t),s=e.Selector._parse("pseudo",t),t=r._replace("pseudo",t),i=e.Selector._parse("attr",t),t=e.Selector._replace("attr",t),{esc:n,attrs:i,pseudos:s,selector:t}},_restoreSelector:function(t){var n=t.selector;return n=e.Selector._restore("attr",n,t.attrs),n=e.Selector._restore("pseudo",n,t.pseudos),n=e.Selector._restore("esc",n,t.esc),n},_replaceCommas:function(t){var n=e.Selector._replaceSelector(t),t=n.selector;return t&&(t=t.replace(/,/g,"\ue007"),n.selector=t,t=e.Selector._restoreSelector(n)),t},_splitQueries:function(t,n){t.indexOf(",")>-1&&(t=e.Selector._replaceCommas(t));var r=t.split("\ue007"),i=[],s="",o,u,a;if(n){n.nodeType===1&&(o=e.Selector._escapeId(e.DOM.getId(n)),o||(o=e.guid(),e.DOM.setId(n,o)),s='[id="'+o+'"] ');for(u=0,a=r.length;u<a;++u)t=s+r[u],i.push([t,n])}return i},_nativeQuery:function(t,n,r){if((e.UA.webkit||e.UA.opera)&&t.indexOf(":checked")>-1&&e.Selector.pseudos&&e.Selector.pseudos.checked)return e.Selector.query(t,n,r,!0);try{return n["querySelector"+(r?"":"All")](t)}catch(i){return e.Selector.query(t,n,r,!0)}},filter:function(t,n){var r=[],i,s;if(t&&n)for(i=0;s=t[i++];)e.Selector.test(s,n)&&(r[r.length]=s);return r},test:function(t,r,i){var s,o=!1,u=!1,a,f,l,c,h,p,d,v,m;if(t&&t.tagName)if(typeof r=="function")o=r.call(t,t);else{a=r.split(","),!i&&!e.DOM.inDoc(t)&&(f=t.parentNode,f?i=f:(h=t[n].createDocumentFragment(),h.appendChild(t),i=h,u=!0)),i=i||t[n],p=e.Selector._escapeId(e.DOM.getId(t)),p||(s=!0,p=e.guid(),e.DOM.setId(t,p));for(d=0;m=a[d++];){m+='[id="'+p+'"]',c=e.Selector.query(m,i);for(v=0;l=c[v++];)if(l===t){o=!0;break}if(o)break}u&&h.removeChild(t),s&&t.removeAttribute("id")}return o},ancestor:function(t,n,r){return e.DOM.ancestor(t,function(t){return e.Selector.test(t,n)},r)},_parse:function(t,n){return n.match(e.Selector._types[t].re)},_replace:function(t,n){var r=e.Selector._types[t];return n.replace(r.re,r.token)},_restore:function(t,n,r){if(r){var i=e.Selector._types[t].token,s,o;for(s=0,o=r.length;s<o;++s)n=n.replace(i,r[s])}return n}};e.mix(e.Selector,r,!0)})(e)},"patched-v3.18.0",{requires:["dom-base"]});
YUI.add("selector",function(e,t){},"patched-v3.18.0",{requires:["selector-native"]});
YUI.add("node-core",function(e,t){var n=".",r="nodeName",i="nodeType",s="ownerDocument",o="tagName",u="_yuid",a={},f=Array.prototype.slice,l=e.DOM,c=function(t){if(!this.getDOMNode)return new c(t);if(typeof t=="string"){t=c._fromString(t);if(!t)return null}var n=t.nodeType!==9?t.uniqueID:t[u];n&&c._instances[n]&&c._instances[n]._node!==t&&(t[u]=null),n=n||e.stamp(t),n||(n=e.guid()),this[u]=n,this._node=t,this._stateProxy=t,this._initPlugins&&this._initPlugins()},h=function(t){var n=null;return t&&(n=typeof t=="string"?function(n){return e.Selector.test(n,t)}:function(n){return t(e.one(n))}),n};c.ATTRS={},c.DOM_EVENTS={},c._fromString=function(t){return t&&(t.indexOf("doc")===0?t=e.config.doc:t.indexOf("win")===0?t=e.config.win:t=e.Selector.query(t,null,!0)),t||null},c.NAME="node",c.re_aria=/^(?:role$|aria-)/,c.SHOW_TRANSITION="fadeIn",c.HIDE_TRANSITION="fadeOut",c._instances={},c.getDOMNode=function(e){return e?e.nodeType?e:e._node||null:null},c.scrubVal=function(t,n){if(t){if(typeof t=="object"||typeof t=="function")if(i in t||l.isWindow(t))t=e.one(t);else if(t.item&&!t._nodes||t[0]&&t[0][i])t=e.all(t)}else typeof t=="undefined"?t=n:t===null&&(t=null);return t},c.addMethod=function(e,t,n){e&&t&&typeof t=="function"&&(c.prototype[e]=function(){var e=f.call(arguments),r=this,i;return e[0]&&e[0]._node&&(e[0]=e[0]._node),e[1]&&e[1]._node&&(e[1]=e[1]._node),e.unshift(r._node),i=t.apply(n||r,e),i&&(i=c.scrubVal(i,r)),typeof i!="undefined"||(i=r),i})},c.importMethod=function(t,n,r){typeof n=="string"?(r=r||n,c.addMethod(r,t[n],t)):e.Array.each(n,function(e){c.importMethod(t,e)})},c.one=function(t){var n=null,r,i;if(t){if(typeof t=="string"){t=c._fromString(t);if(!t)return null}else if(t.getDOMNode)return t;if(t.nodeType||e.DOM.isWindow(t)){i=t.uniqueID&&t.nodeType!==9?t.uniqueID:t._yuid,n=c._instances[i],r=n?n._node:null;if(!n||r&&t!==r)n=new c(t),t.nodeType!=11&&(c._instances[n[u]]=n)}}return n},c.DEFAULT_SETTER=function(t,r){var i=this._stateProxy,s;return t.indexOf(n)>-1?(s=t,t=t.split(n),e.Object.setValue(i,t,r)):typeof i[t]!="undefined"&&(i[t]=r),r},c.DEFAULT_GETTER=function(t){var r=this._stateProxy,i;return t.indexOf&&t.indexOf(n)>-1?i=e.Object.getValue(r,t.split(n)):typeof r[t]!="undefined"&&(i=r[t]),i},e.mix(c.prototype,{DATA_PREFIX:"data-",toString:function(){var e=this[u]+": not bound to a node",t=this._node,n,i,s;return t&&(n=t.attributes,i=n&&n.id?t.getAttribute("id"):null,s=n&&n.className?t.getAttribute("className"):null,e=t[r],i&&(e+="#"+i),s&&(e+="."+s.replace(" ",".")),e+=" "+this[u]),e},get:function(e){var t;return this._getAttr?t=this._getAttr(e):t=this._get(e),t?t=c.scrubVal(t,this):t===null&&(t=null),t},_get:function(e){var t=c.ATTRS[e],n;return t&&t.getter?n=t.getter.call(this):c.re_aria.test(e)?n=this._node.getAttribute(e,2):n=c.DEFAULT_GETTER.apply(this,arguments),n},set:function(e,t){var n=c.ATTRS[e];return this._setAttr?this._setAttr.apply(this,arguments):n&&n.setter?n.setter.call(this,t,e):c.re_aria.test(e)?this._node.setAttribute(e,t):c.DEFAULT_SETTER.apply(this,arguments),this},setAttrs:function(t){return this._setAttrs?this._setAttrs(t):e.Object.each(t,function(e,t){this.set(t,e)},this),this},getAttrs:function(t){var n={};return this._getAttrs?this._getAttrs(t):e.Array.each(t,function(e,t){n[e]=this.get(e)},this),n},compareTo:function(e){var t=this._node;return e&&e._node&&(e=e._node),t===e},inDoc:function(e){var t=this._node;if(t){e=e?e._node||e:t[s];if(e.documentElement)return l.contains(e.documentElement,t)}return!1},getById:function(t){var n=this._node,r=l.byId(t,n[s]);return r&&l.contains(n,r)?r=e.one(r):r=null,r},ancestor:function(t,n,r){return arguments.length===2&&(typeof n=="string"||typeof n=="function")&&(r=n),e.one(l.ancestor(this._node,h(t),n,h(r)))},ancestors:function(t,n,r){return arguments.length===2&&(typeof n=="string"||typeof n=="function")&&(r=n),e.all(l.ancestors(this._node,h(t),n,h(r)))},previous:function(t,n){return e.one(l.elementByAxis(this._node,"previousSibling",h(t),n))},next:function(t,n){return e.one(l.elementByAxis(this._node,"nextSibling",h(t),n))},siblings:function(t){return e.all(l.siblings(this._node,h(t)))},one:function(t){return e.one(e.Selector.query(t,this._node,!0))},all:function(t){var n;return this._node&&(n=e.all(e.Selector.query(t,this._node)),n._query=t,n._queryRoot=this._node),n||e.all([])},test:function(t){return e.Selector.test(this._node,t)},remove:function(e){var t=this._node;return t&&t.parentNode&&t.parentNode.removeChild(t),e&&this.destroy(),this},replace:function(e){var t=this._node;return typeof e=="string"&&(e=c.create(e)),t.parentNode.replaceChild(c.getDOMNode(e),t),this},replaceChild:function(t,n){return typeof t=="string"&&(t=l.create(t)),e.one(this._node.replaceChild(c.getDOMNode(t),c.getDOMNode(n)))},destroy:function(t){var n=e.config.doc.uniqueID?"uniqueID":"_yuid",r;this.purge(),this.unplug&&this.unplug(),this.clearData(),t&&e.NodeList.each(this.all("*"),function(t){r=c._instances[t[n]],r?r.destroy():e.Event.purgeElement(t)}),this._node=null,this._stateProxy=null,delete c._instances[this._yuid]},invoke:function(e,t,n,r,i,s){var o=this._node,u;return t&&t._node&&(t=t._node),n&&n._node&&(n=n._node),u=o[e](t,n,r,i,s),c.scrubVal(u,this)},swap:e.config.doc.documentElement.swapNode?function(e){this._node.swapNode(c.getDOMNode(e))}:function(e){e=c.getDOMNode(e);var t=this._node,n=e.parentNode,r=e.nextSibling;return r===t?n.insertBefore(t,e):e===t.nextSibling?n.insertBefore(e,t):(t.parentNode.replaceChild(e,t),l.addHTML(n,t,r)),this},hasMethod:function(e){var t=this._node;return!(!(t&&e in t&&typeof t[e]!="unknown")||typeof t[e]!="function"&&String(t[e]).indexOf("function")!==1)},isFragment:function(){return this.get("nodeType")===11},empty:function(){return this.get("childNodes").remove().destroy(!0),this},getDOMNode:function(){return this._node}},!0),e.Node=c,e.one=c.one;var p=function(t){var n=[];t&&(typeof t=="string"?(this._query=t,t=e.Selector.query(t)):t.nodeType||l.isWindow(t)?t=[t]:t._node?t=[t._node]:
t[0]&&t[0]._node?(e.Array.each(t,function(e){e._node&&n.push(e._node)}),t=n):t=e.Array(t,0,!0)),this._nodes=t||[]};p.NAME="NodeList",p.getDOMNodes=function(e){return e&&e._nodes?e._nodes:e},p.each=function(t,n,r){var i=t._nodes;i&&i.length&&e.Array.each(i,n,r||t)},p.addMethod=function(t,n,r){t&&n&&(p.prototype[t]=function(){var t=[],i=arguments;return e.Array.each(this._nodes,function(s){var o=s.uniqueID&&s.nodeType!==9?"uniqueID":"_yuid",u=e.Node._instances[s[o]],a,f;u||(u=p._getTempNode(s)),a=r||u,f=n.apply(a,i),f!==undefined&&f!==u&&(t[t.length]=f)}),t.length?t:this})},p.importMethod=function(t,n,r){typeof n=="string"?(r=r||n,p.addMethod(r,t[n])):e.Array.each(n,function(e){p.importMethod(t,e)})},p._getTempNode=function(t){var n=p._tempNode;return n||(n=e.Node.create("<div></div>"),p._tempNode=n),n._node=t,n._stateProxy=t,n},e.mix(p.prototype,{_invoke:function(e,t,n){var r=n?[]:this;return this.each(function(i){var s=i[e].apply(i,t);n&&r.push(s)}),r},item:function(t){return e.one((this._nodes||[])[t])},each:function(t,n){var r=this;return e.Array.each(this._nodes,function(i,s){return i=e.one(i),t.call(n||i,i,s,r)}),r},batch:function(t,n){var r=this;return e.Array.each(this._nodes,function(i,s){var o=e.Node._instances[i[u]];return o||(o=p._getTempNode(i)),t.call(n||o,o,s,r)}),r},some:function(t,n){var r=this;return e.Array.some(this._nodes,function(i,s){return i=e.one(i),n=n||i,t.call(n,i,s,r)})},toFrag:function(){return e.one(e.DOM._nl2frag(this._nodes))},indexOf:function(t){return e.Array.indexOf(this._nodes,e.Node.getDOMNode(t))},filter:function(t){return e.all(e.Selector.filter(this._nodes,t))},modulus:function(t,n){n=n||0;var r=[];return p.each(this,function(e,i){i%t===n&&r.push(e)}),e.all(r)},odd:function(){return this.modulus(2,1)},even:function(){return this.modulus(2)},destructor:function(){},refresh:function(){var t,n=this._nodes,r=this._query,i=this._queryRoot;return r&&(i||n&&n[0]&&n[0].ownerDocument&&(i=n[0].ownerDocument),this._nodes=e.Selector.query(r,i)),this},size:function(){return this._nodes.length},isEmpty:function(){return this._nodes.length<1},toString:function(){var e="",t=this[u]+": not bound to any nodes",n=this._nodes,i;return n&&n[0]&&(i=n[0],e+=i[r],i.id&&(e+="#"+i.id),i.className&&(e+="."+i.className.replace(" ",".")),n.length>1&&(e+="...["+n.length+" items]")),e||t},getDOMNodes:function(){return this._nodes}},!0),p.importMethod(e.Node.prototype,["destroy","empty","remove","set"]),p.prototype.get=function(t){var n=[],r=this._nodes,i=!1,s=p._getTempNode,o,u;return r[0]&&(o=e.Node._instances[r[0]._yuid]||s(r[0]),u=o._get(t),u&&u.nodeType&&(i=!0)),e.Array.each(r,function(r){o=e.Node._instances[r._yuid],o||(o=s(r)),u=o._get(t),i||(u=e.Node.scrubVal(u,o)),n.push(u)}),i?e.all(n):n},e.NodeList=p,e.all=function(e){return new p(e)},e.Node.all=e.all;var d=e.NodeList,v=Array.prototype,m={concat:1,pop:0,push:0,shift:0,slice:1,splice:1,unshift:0};e.Object.each(m,function(t,n){d.prototype[n]=function(){var r=[],i=0,s,o;while(typeof (s=arguments[i++])!="undefined")r.push(s._node||s._nodes||s);return o=v[n].apply(this._nodes,r),t?o=e.all(o):o=e.Node.scrubVal(o),o}}),e.Array.each(["removeChild","hasChildNodes","cloneNode","hasAttribute","scrollIntoView","getElementsByTagName","focus","blur","submit","reset","select","createCaption"],function(t){e.Node.prototype[t]=function(e,n,r){var i=this.invoke(t,e,n,r);return i}}),e.Node.prototype.removeAttribute=function(e){var t=this._node;return t&&t.removeAttribute(e,0),this},e.Node.importMethod(e.DOM,["contains","setAttribute","getAttribute","wrap","unwrap","generateID"]),e.NodeList.importMethod(e.Node.prototype,["getAttribute","setAttribute","removeAttribute","unwrap","wrap","generateID"])},"patched-v3.18.0",{requires:["dom-core","selector"]});
YUI.add("dom-style",function(e,t){var n="documentElement",r="defaultView",i="ownerDocument",s="style",o="float",u="cssFloat",a="styleFloat",f="transparent",l="getComputedStyle",c="getBoundingClientRect",h=e.config.doc,p=e.DOM,d,v,m=["WebkitTransform","MozTransform","OTransform","msTransform","transform"],g=/width|height|top|left|right|bottom|margin|padding/i;e.Array.each(m,function(e){e in h[n].style&&(d=e,v=e+"Origin")}),e.mix(p,{DEFAULT_UNIT:"px",CUSTOM_STYLES:{},setStyle:function(e,t,n,r){r=r||e.style;var i=p.CUSTOM_STYLES;if(r){n===null||n===""?n="":!isNaN(Number(n))&&g.test(t)&&(n+=p.DEFAULT_UNIT);if(t in i){if(i[t].set){i[t].set(e,n,r);return}typeof i[t]=="string"&&(t=i[t])}else t===""&&(t="cssText",n="");r[t]=n}},getStyle:function(e,t,n){n=n||e.style;var r=p.CUSTOM_STYLES,i="";if(n){if(t in r){if(r[t].get)return r[t].get(e,t,n);typeof r[t]=="string"&&(t=r[t])}i=n[t],i===""&&(i=p[l](e,t))}return i},setStyles:function(t,n){var r=t.style;e.each(n,function(e,n){p.setStyle(t,n,e,r)},p)},getComputedStyle:function(e,t){var n="",o=e[i],u;return e[s]&&o[r]&&o[r][l]&&(u=o[r][l](e,null),u&&(n=u[t])),n}}),h[n][s][u]!==undefined?p.CUSTOM_STYLES[o]=u:h[n][s][a]!==undefined&&(p.CUSTOM_STYLES[o]=a),e.UA.webkit&&(p[l]=function(e,t){var n=e[i][r],s=n[l](e,"")[t];return s==="rgba(0, 0, 0, 0)"&&(s=f),s}),e.DOM._getAttrOffset=function(t,n){var r=e.DOM[l](t,n),i=t.offsetParent,s,o,u;return r==="auto"&&(s=e.DOM.getStyle(t,"position"),s==="static"||s==="relative"?r=0:i&&i[c]&&(o=i[c]()[n],u=t[c]()[n],n==="left"||n==="top"?r=u-o:r=o-t[c]()[n])),r},e.DOM._getOffset=function(e,t){var n,r=null,i={left:"offsetLeft",right:"offsetRight"},s={left:"marginLeft",right:"marginRight"},o;return t=t||"left",e&&(n=p.getStyle(e,"position"),o=parseInt(p[l](e,s[t]),10),r=[parseInt(p[l](e,t),10),parseInt(p[l](e,"top"),10)],isNaN(r[0])&&(r[0]=parseInt(p.getStyle(e,t),10),isNaN(r[0])&&(r[0]=n==="relative"?0:e[i[t]]-o||0)),isNaN(r[1])&&(r[1]=parseInt(p.getStyle(e,"top"),10),isNaN(r[1])&&(r[1]=n==="relative"?0:e.offsetTop||0))),r},d&&(p.CUSTOM_STYLES.transform={set:function(e,t,n){n[d]=t},get:function(e){return p[l](e,d)}},p.CUSTOM_STYLES.transformOrigin={set:function(e,t,n){n[v]=t},get:function(e){return p[l](e,v)}})},"patched-v3.18.0",{requires:["dom-base"]});
YUI.add("node-base",function(e,t){var n=["hasClass","addClass","removeClass","replaceClass","toggleClass"];e.Node.importMethod(e.DOM,n),e.NodeList.importMethod(e.Node.prototype,n);var r=e.Node,i=e.DOM;r.create=function(t,n){return n&&n._node&&(n=n._node),e.one(i.create(t,n))},e.mix(r.prototype,{create:r.create,insert:function(e,t){return this._insert(e,t),this},_insert:function(e,t){var n=this._node,r=null;return typeof t=="number"?t=this._node.childNodes[t]:t&&t._node&&(t=t._node),e&&typeof e!="string"&&(e=e._node||e._nodes||e),r=i.addHTML(n,e,t),r},prepend:function(e){return this.insert(e,0)},append:function(e){return this.insert(e,null)},appendChild:function(e){return r.scrubVal(this._insert(e))},insertBefore:function(t,n){return e.Node.scrubVal(this._insert(t,n))},appendTo:function(t){return e.one(t).append(this),this},setContent:function(e){return this._insert(e,"replace"),this},getContent:function(){var e=this;return e._node.nodeType===11&&(e=e.create("<div/>").append(e.cloneNode(!0))),e.get("innerHTML")}}),e.Node.prototype.setHTML=e.Node.prototype.setContent,e.Node.prototype.getHTML=e.Node.prototype.getContent,e.NodeList.importMethod(e.Node.prototype,["append","insert","appendChild","insertBefore","prepend","setContent","getContent","setHTML","getHTML"]);var r=e.Node,i=e.DOM;r.ATTRS={text:{getter:function(){return i.getText(this._node)},setter:function(e){return i.setText(this._node,e),e}},"for":{getter:function(){return i.getAttribute(this._node,"for")},setter:function(e){return i.setAttribute(this._node,"for",e),e}},options:{getter:function(){return this._node.getElementsByTagName("option")}},children:{getter:function(){var t=this._node,n=t.children,r,i,s;if(!n||e.UA.ie&&e.UA.ie<9){r=t.childNodes,n=[];for(i=0,s=r.length;i<s;++i)r[i].tagName&&r[i].nodeType===1&&(n[n.length]=r[i])}return e.all(n)}},value:{getter:function(){return i.getValue(this._node)},setter:function(e){return i.setValue(this._node,e),e}}},e.Node.importMethod(e.DOM,["setAttribute","getAttribute"]);var r=e.Node,s=e.NodeList;r.DOM_EVENTS={abort:1,beforeunload:1,blur:1,change:1,click:1,close:1,command:1,contextmenu:1,copy:1,cut:1,dblclick:1,DOMMouseScroll:1,drag:1,dragstart:1,dragenter:1,dragover:1,dragleave:1,dragend:1,drop:1,error:1,focus:1,key:1,keydown:1,keypress:1,keyup:1,load:1,message:1,mousedown:1,mouseenter:1,mouseleave:1,mousemove:1,mousemultiwheel:1,mouseout:1,mouseover:1,mouseup:1,mousewheel:1,orientationchange:1,paste:1,reset:1,resize:1,select:1,selectstart:1,submit:1,scroll:1,textInput:1,unload:1,invalid:1},e.mix(r.DOM_EVENTS,e.Env.evt.plugins),e.augment(r,e.EventTarget),e.mix(r.prototype,{purge:function(t,n){return e.Event.purgeElement(this._node,t,n),this}}),e.mix(e.NodeList.prototype,{_prepEvtArgs:function(t,n,r){var i=e.Array(arguments,0,!0);return i.length<2?i[2]=this._nodes:i.splice(2,0,this._nodes),i[3]=r||this,i},on:function(t,n,r){return e.on.apply(e,this._prepEvtArgs.apply(this,arguments))},once:function(t,n,r){return e.once.apply(e,this._prepEvtArgs.apply(this,arguments))},after:function(t,n,r){return e.after.apply(e,this._prepEvtArgs.apply(this,arguments))},onceAfter:function(t,n,r){return e.onceAfter.apply(e,this._prepEvtArgs.apply(this,arguments))}}),s.importMethod(e.Node.prototype,["detach","detachAll"]),e.mix(e.Node.ATTRS,{offsetHeight:{setter:function(t){return e.DOM.setHeight(this._node,t),t},getter:function(){return this._node.offsetHeight}},offsetWidth:{setter:function(t){return e.DOM.setWidth(this._node,t),t},getter:function(){return this._node.offsetWidth}}}),e.mix(e.Node.prototype,{sizeTo:function(t,n){var r;arguments.length<2&&(r=e.one(t),t=r.get("offsetWidth"),n=r.get("offsetHeight")),this.setAttrs({offsetWidth:t,offsetHeight:n})}}),e.config.doc.documentElement.hasAttribute||(e.Node.prototype.hasAttribute=function(e){return e==="value"&&this.get("value")!==""?!0:!!this._node.attributes[e]&&!!this._node.attributes[e].specified}),e.Node.prototype.focus=function(){try{this._node.focus()}catch(e){}return this},e.Node.ATTRS.type={setter:function(e){if(e==="hidden")try{this._node.type="hidden"}catch(t){this._node.style.display="none",this._inputType="hidden"}else try{this._node.type=e}catch(t){}return e},getter:function(){return this._inputType||this._node.type},_bypassProxy:!0},e.config.doc.createElement("form").elements.nodeType&&(e.Node.ATTRS.elements={getter:function(){return this.all("input, textarea, button, select")}}),e.mix(e.Node.prototype,{_initData:function(){"_data"in this||(this._data={})},getData:function(t){this._initData();var n=this._data,r=n;return arguments.length?t in n?r=n[t]:r=this._getDataAttribute(t):typeof n=="object"&&n!==null&&(r={},e.Object.each(n,function(e,t){r[t]=e}),r=this._getDataAttributes(r)),r},_getDataAttributes:function(e){e=e||{};var t=0,n=this._node.attributes,r=n.length,i=this.DATA_PREFIX,s=i.length,o;while(t<r)o=n[t].name,o.indexOf(i)===0&&(o=o.substr(s),o in e||(e[o]=this._getDataAttribute(o))),t+=1;return e},_getDataAttribute:function(e){e=this.DATA_PREFIX+e;var t=this._node,n=t.attributes,r=n&&n[e]&&n[e].value;return r},setData:function(e,t){return this._initData(),arguments.length>1?this._data[e]=t:this._data=e,this},clearData:function(e){return"_data"in this&&(typeof e!="undefined"?delete this._data[e]:delete this._data),this}}),e.mix(e.NodeList.prototype,{getData:function(e){var t=arguments.length?[e]:[];return this._invoke("getData",t,!0)},setData:function(e,t){var n=arguments.length>1?[e,t]:[e];return this._invoke("setData",n)},clearData:function(e){var t=arguments.length?[e]:[];return this._invoke("clearData",[e])}})},"patched-v3.18.0",{requires:["event-base","node-core","dom-base","dom-style"]});
YUI.add("event-delegate",function(e,t){function f(t,r,u,l){var c=n(arguments,0,!0),h=i(u)?u:null,p,d,v,m,g,y,b,w,E;if(s(t)){w=[];if(o(t))for(y=0,b=t.length;y<b;++y)c[0]=t[y],w.push(e.delegate.apply(e,c));else{c.unshift(null);for(y in t)t.hasOwnProperty(y)&&(c[0]=y,c[1]=t[y],w.push(e.delegate.apply(e,c)))}return new e.EventHandle(w)}p=t.split(/\|/),p.length>1&&(g=p.shift(),c[0]=t=p.shift()),d=e.Node.DOM_EVENTS[t],s(d)&&d.delegate&&(E=d.delegate.apply(d,arguments));if(!E){if(!t||!r||!u||!l)return;v=h?e.Selector.query(h,null,!0):u,!v&&i(u)&&(E=e.on("available",function(){e.mix(E,e.delegate.apply(e,c),!0)},u)),!E&&v&&(c.splice(2,2,v),E=e.Event._attach(c,{facade:!1}),E.sub.filter=l,E.sub._notify=f.notifySub)}return E&&g&&(m=a[g]||(a[g]={}),m=m[t]||(m[t]=[]),m.push(E)),E}var n=e.Array,r=e.Lang,i=r.isString,s=r.isObject,o=r.isArray,u=e.Selector.test,a=e.Env.evt.handles;f.notifySub=function(t,r,i){r=r.slice(),this.args&&r.push.apply(r,this.args);var s=f._applyFilter(this.filter,r,i),o,u,a,l;if(s){s=n(s),o=r[0]=new e.DOMEventFacade(r[0],i.el,i),o.container=e.one(i.el);for(u=0,a=s.length;u<a&&!o.stopped;++u){o.currentTarget=e.one(s[u]),l=this.fn.apply(this.context||o.currentTarget,r);if(l===!1)break}return l}},f.compileFilter=e.cached(function(e){return function(t,n){return u(t._node,e,n.currentTarget===n.target?null:n.currentTarget._node)}}),f._disabledRE=/^(?:button|input|select|textarea)$/i,f._applyFilter=function(t,n,r){var s=n[0],o=r.el,a=s.target||s.srcElement,l=[],c=!1;a.nodeType===3&&(a=a.parentNode);if(a.disabled&&f._disabledRE.test(a.nodeName))return l;n.unshift(a);if(i(t))while(a){c=a===o,u(a,t,c?null:o)&&l.push(a);if(c)break;a=a.parentNode}else{n[0]=e.one(a),n[1]=new e.DOMEventFacade(s,o,r);while(a){t.apply(n[0],n)&&l.push(a);if(a===o)break;a=a.parentNode,n[0]=e.one(a)}n[1]=s}return l.length<=1&&(l=l[0]),n.shift(),l},e.delegate=e.Event.delegate=f},"patched-v3.18.0",{requires:["node-base"]});
YUI.add("event-synthetic",function(e,t){function c(e,t){this.handle=e,this.emitFacade=t}function h(e,t,n){this.handles=[],this.el=e,this.key=n,this.domkey=t}function p(){this._init.apply(this,arguments)}var n=e.CustomEvent,r=e.Env.evt.dom_map,i=e.Array,s=e.Lang,o=s.isObject,u=s.isString,a=s.isArray,f=e.Selector.query,l=function(){};c.prototype.fire=function(t){var n=i(arguments,0,!0),r=this.handle,s=r.evt,u=r.sub,a=u.context,f=u.filter,l=t||{},c;if(this.emitFacade){if(!t||!t.preventDefault)l=s._getFacade(),o(t)&&!t.preventDefault?(e.mix(l,t,!0),n[0]=l):n.unshift(l);l.type=s.type,l.details=n.slice(),f&&(l.container=s.host)}else f&&o(t)&&t.currentTarget&&n.shift();return u.context=a||l.currentTarget||s.host,c=s.fire.apply(s,n),t.prevented&&s.preventedFn&&s.preventedFn.apply(s,n),t.stopped&&s.stoppedFn&&s.stoppedFn.apply(s,n),u.context=a,c},h.prototype={constructor:h,type:"_synth",fn:l,capture:!1,register:function(e){e.evt.registry=this,this.handles.push(e)},unregister:function(t){var n=this.handles,i=r[this.domkey],s;for(s=n.length-1;s>=0;--s)if(n[s].sub===t){n.splice(s,1);break}n.length||(delete i[this.key],e.Object.size(i)||delete r[this.domkey])},detachAll:function(){var e=this.handles,t=e.length;while(--t>=0)e[t].detach()}},e.mix(p,{Notifier:c,SynthRegistry:h,getRegistry:function(t,n,i){var s=t._node,o=e.stamp(s),u="event:"+o+n+"_synth",a=r[o];return i&&(a||(a=r[o]={}),a[u]||(a[u]=new h(s,o,u))),a&&a[u]||null},_deleteSub:function(e){if(e&&e.fn){var t=this.eventDef,r=e.filter?"detachDelegate":"detach";this._subscribers=[],n.keepDeprecatedSubs&&(this.subscribers={}),t[r](e.node,e,this.notifier,e.filter),this.registry.unregister(e),delete e.fn,delete e.node,delete e.context}},prototype:{constructor:p,_init:function(){var e=this.publishConfig||(this.publishConfig={});this.emitFacade="emitFacade"in e?e.emitFacade:!0,e.emitFacade=!1},processArgs:l,on:l,detach:l,delegate:l,detachDelegate:l,_on:function(t,n){var r=[],s=t.slice(),o=this.processArgs(t,n),a=t[2],l=n?"delegate":"on",c,h;return c=u(a)?f(a):i(a||e.one(e.config.win)),!c.length&&u(a)?(h=e.on("available",function(){e.mix(h,e[l].apply(e,s),!0)},a),h):(e.Array.each(c,function(i){var s=t.slice(),u;i=e.one(i),i&&(n&&(u=s.splice(3,1)[0]),s.splice(0,4,s[1],s[3]),(!this.preventDups||!this.getSubs(i,t,null,!0))&&r.push(this._subscribe(i,l,s,o,u)))},this),r.length===1?r[0]:new e.EventHandle(r))},_subscribe:function(t,n,r,i,s){var o=new e.CustomEvent(this.type,this.publishConfig),u=o.on.apply(o,r),a=new c(u,this.emitFacade),f=p.getRegistry(t,this.type,!0),l=u.sub;return l.node=t,l.filter=s,i&&this.applyArgExtras(i,l),e.mix(o,{eventDef:this,notifier:a,host:t,currentTarget:t,target:t,el:t._node,_delete:p._deleteSub},!0),u.notifier=a,f.register(u),this[n](t,l,a,s),u},applyArgExtras:function(e,t){t._extra=e},_detach:function(t){var n=t[2],r=u(n)?f(n):i(n),s,o,a,l,c;t.splice(2,1);for(o=0,a=r.length;o<a;++o){s=e.one(r[o]);if(s){l=this.getSubs(s,t);if(l)for(c=l.length-1;c>=0;--c)l[c].detach()}}},getSubs:function(e,t,n,r){var i=p.getRegistry(e,this.type),s=[],o,u,a,f;if(i){o=i.handles,n||(n=this.subMatch);for(u=0,a=o.length;u<a;++u){f=o[u];if(n.call(this,f.sub,t)){if(r)return f;s.push(o[u])}}}return s.length&&s},subMatch:function(e,t){return!t[1]||e.fn===t[1]}}},!0),e.SyntheticEvent=p,e.Event.define=function(t,n,r){var s,o,f;t&&t.type?(s=t,r=n):n&&(s=e.merge({type:t},n));if(s){if(r||!e.Node.DOM_EVENTS[s.type])o=function(){p.apply(this,arguments)},e.extend(o,p,s),f=new o,t=f.type,e.Node.DOM_EVENTS[t]=e.Env.evt.plugins[t]={eventDef:f,on:function(){return f._on(i(arguments))},delegate:function(){return f._on(i(arguments),!0)},detach:function(){return f._detach(i(arguments))}}}else(u(t)||a(t))&&e.Array.each(i(t),function(t){e.Node.DOM_EVENTS[t]=1});return f}},"patched-v3.18.0",{requires:["node-base","event-custom-complex"]});
YUI.add("event-mousewheel",function(e,t){var n="DOMMouseScroll",r=function(t){var r=e.Array(t,0,!0),i;return e.UA.gecko?(r[0]=n,i=e.config.win):i=e.config.doc,r.length<3?r[2]=i:r.splice(2,0,i),r};e.Env.evt.plugins.mousewheel={on:function(){return e.Event._attach(r(arguments))},detach:function(){return e.Event.detach.apply(e.Event,r(arguments))}}},"patched-v3.18.0",{requires:["node-base"]});
YUI.add("event-mouseenter",function(e,t){var n=e.Env.evt.dom_wrappers,r=e.DOM.contains,i=e.Array,s=function(){},o={proxyType:"mouseover",relProperty:"fromElement",_notify:function(t,i,s){var o=this._node,u=t.relatedTarget||t[i];o!==u&&!r(o,u)&&s.fire(new e.DOMEventFacade(t,o,n["event:"+e.stamp(o)+t.type]))},on:function(t,n,r){var i=e.Node.getDOMNode(t),s=[this.proxyType,this._notify,i,null,this.relProperty,r];n.handle=e.Event._attach(s,{facade:!1})},detach:function(e,t){t.handle.detach()},delegate:function(t,n,r,i){var o=e.Node.getDOMNode(t),u=[this.proxyType,s,o,null,r];n.handle=e.Event._attach(u,{facade:!1}),n.handle.sub.filter=i,n.handle.sub.relProperty=this.relProperty,n.handle.sub._notify=this._filterNotify},_filterNotify:function(t,n,s){n=n.slice(),this.args&&n.push.apply(n,this.args);var o=e.delegate._applyFilter(this.filter,n,s),u=n[0].relatedTarget||n[0][this.relProperty],a,f,l,c,h;if(o){o=i(o);for(f=0,l=o.length&&(!a||!a.stopped);f<l;++f){h=o[0];if(!r(h,u)){a||(a=new e.DOMEventFacade(n[0],h,s),a.container=e.one(s.el)),a.currentTarget=e.one(h),c=n[1].fire(a);if(c===!1)break}}}return c},detachDelegate:function(e,t){t.handle.detach()}};e.Event.define("mouseenter",o,!0),e.Event.define("mouseleave",e.merge(o,{proxyType:"mouseout",relProperty:"toElement"}),!0)},"patched-v3.18.0",{requires:["event-synthetic"]});
YUI.add("event-key",function(e,t){var n="+alt",r="+ctrl",i="+meta",s="+shift",o=e.Lang.trim,u={KEY_MAP:{enter:13,space:32,esc:27,backspace:8,tab:9,pageup:33,pagedown:34},_typeRE:/^(up|down|press):/,_keysRE:/^(?:up|down|press):|\+(alt|ctrl|meta|shift)/g,processArgs:function(t){var n=t.splice(3,1)[0],r=e.Array.hash(n.match(/\+(?:alt|ctrl|meta|shift)\b/g)||[]),i={type:this._typeRE.test(n)?RegExp.$1:null,mods:r,keys:null},s=n.replace(this._keysRE,""),u,a,f,l;if(s){s=s.split(","),i.keys={};for(l=s.length-1;l>=0;--l){u=o(s[l]);if(!u)continue;+u==u?i.keys[u]=r:(f=u.toLowerCase(),this.KEY_MAP[f]?(i.keys[this.KEY_MAP[f]]=r,i.type||(i.type="down")):(u=u.charAt(0),a=u.toUpperCase(),r["+shift"]&&(u=a),i.keys[u.charCodeAt(0)]=u===a?e.merge(r,{"+shift":!0}):r))}}return i.type||(i.type="press"),i},on:function(e,t,o,u){var a=t._extra,f="key"+a.type,l=a.keys,c=u?"delegate":"on";t._detach=e[c](f,function(e){var t=l?l[e.which]:a.mods;t&&(!t[n]||t[n]&&e.altKey)&&(!t[r]||t[r]&&e.ctrlKey)&&(!t[i]||t[i]&&e.metaKey)&&(!t[s]||t[s]&&e.shiftKey)&&o.fire(e)},u)},detach:function(e,t,n){t._detach.detach()}};u.delegate=u.on,u.detachDelegate=u.detach,e.Event.define("key",u,!0)},"patched-v3.18.0",{requires:["event-synthetic"]});
YUI.add("event-focus",function(e,t){function u(t,r,u){var a="_"+t+"Notifiers";e.Event.define(t,{_useActivate:o,_attach:function(i,s,o){return e.DOM.isWindow(i)?n._attach([t,function(e){s.fire(e)},i]):n._attach([r,this._proxy,i,this,s,o],{capture:!0})},_proxy:function(t,r,i){var s=t.target,f=t.currentTarget,l=s.getData(a),c=e.stamp(f._node),h=o||s!==f,p;r.currentTarget=i?s:f,r.container=i?f:null,l?h=!0:(l={},s.setData(a,l),h&&(p=n._attach([u,this._notify,s._node]).sub,p.once=!0)),l[c]||(l[c]=[]),l[c].push(r),h||this._notify(t)},_notify:function(t,n){var r=t.currentTarget,i=r.getData(a),o=r.ancestors(),u=r.get("ownerDocument"),f=[],l=i?e.Object.keys(i).length:0,c,h,p,d,v,m,g,y,b,w;r.clearData(a),o.push(r),u&&o.unshift(u),o._nodes.reverse(),l&&(m=l,o.some(function(t){var n=e.stamp(t),r=i[n],s,o;if(r){l--;for(s=0,o=r.length;s<o;++s)r[s].handle.sub.filter&&f.push(r[s])}return!l}),l=m);while(l&&(c=o.shift())){d=e.stamp(c),h=i[d];if(h){for(g=0,y=h.length;g<y;++g){p=h[g],b=p.handle.sub,v=!0,t.currentTarget=c,b.filter&&(v=b.filter.apply(c,[c,t].concat(b.args||[])),f.splice(s(f,p),1)),v&&(t.container=p.container,w=p.fire(t));if(w===!1||t.stopped===2)break}delete h[d],l--}if(t.stopped!==2)for(g=0,y=f.length;g<y;++g){p=f[g],b=p.handle.sub,b.filter.apply(c,[c,t].concat(b.args||[]))&&(t.container=p.container,t.currentTarget=c,w=p.fire(t));if(w===!1||t.stopped===2||t.stopped&&f[g+1]&&f[g+1].container!==p.container)break}if(t.stopped)break}},on:function(e,t,n){t.handle=this._attach(e._node,n)},detach:function(e,t){t.handle.detach()},delegate:function(t,n,r,s){i(s)&&(n.filter=function(n){return e.Selector.test(n._node,s,t===n?null:t._node)}),n.handle=this._attach(t._node,r,!0)},detachDelegate:function(e,t){t.handle.detach()}},!0)}var n=e.Event,r=e.Lang,i=r.isString,s=e.Array.indexOf,o=function(){var t=!1,n=e.config.doc,r;return n&&(r=n.createElement("p"),r.setAttribute("onbeforeactivate",";"),t=r.onbeforeactivate!==undefined),t}();o?(u("focus","beforeactivate","focusin"),u("blur","beforedeactivate","focusout")):(u("focus","focus","focus"),u("blur","blur","blur"))},"patched-v3.18.0",{requires:["event-synthetic"]});
YUI.add("event-resize",function(e,t){e.Event.define("windowresize",{on:e.UA.gecko&&e.UA.gecko<1.91?function(t,n,r){n._handle=e.Event.attach("resize",function(e){r.fire(e)})}:function(t,n,r){var i=e.config.windowResizeDelay||100;n._handle=e.Event.attach("resize",function(t){n._timer&&n._timer.cancel(),n._timer=e.later(i,e,function(){r.fire(t)})})},detach:function(e,t){t._timer&&t._timer.cancel(),t._handle.detach()}})},"patched-v3.18.0",{requires:["node-base","event-synthetic"]});
YUI.add("event-hover",function(e,t){var n=e.Lang.isFunction,r=function(){},i={processArgs:function(e){var t=n(e[2])?2:3;return n(e[t])?e.splice(t,1)[0]:r},on:function(e,t,n,r){var i=t.args?t.args.slice():[];i.unshift(null),t._detach=e[r?"delegate":"on"]({mouseenter:function(e){e.phase="over",n.fire(e)},mouseleave:function(e){var n=t.context||this;i[0]=e,e.type="hover",e.phase="out",t._extra.apply(n,i)}},r)},detach:function(e,t,n){t._detach.detach()}};i.delegate=i.on,i.detachDelegate=i.detach,e.Event.define("hover",i)},"patched-v3.18.0",{requires:["event-mouseenter"]});
YUI.add("event-outside",function(e,t){var n=["blur","change","click","dblclick","focus","keydown","keypress","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","select","submit"];e.Event.defineOutside=function(t,n){n=n||t+"outside";var r={on:function(n,r,i){r.handle=e.one("doc").on(t,function(e){this.isOutside(n,e.target)&&(e.currentTarget=n,i.fire(e))},this)},detach:function(e,t,n){t.handle.detach()},delegate:function(n,r,i,s){r.handle=e.one("doc").delegate(t,function(e){this.isOutside(n,e.target)&&i.fire(e)},s,this)},isOutside:function(e,t){return t!==e&&!t.ancestor(function(t){return t===e})}};r.detachDelegate=r.detach,e.Event.define(n,r)},e.Array.each(n,function(t){e.Event.defineOutside(t)})},"patched-v3.18.0",{requires:["event-synthetic"]});
YUI.add("event-touch",function(e,t){var n="scale",r="rotation",i="identifier",s=e.config.win,o={};e.DOMEventFacade.prototype._touch=function(t,s,o){var u,a,f,l,c;if(t.touches){this.touches=[],c={};for(u=0,a=t.touches.length;u<a;++u)l=t.touches[u],c[e.stamp(l)]=this.touches[u]=new e.DOMEventFacade(l,s,o)}if(t.targetTouches){this.targetTouches=[];for(u=0,a=t.targetTouches.length;u<a;++u)l=t.targetTouches[u],f=c&&c[e.stamp(l,!0)],this.targetTouches[u]=f||new e.DOMEventFacade(l,s,o)}if(t.changedTouches){this.changedTouches=[];for(u=0,a=t.changedTouches.length;u<a;++u)l=t.changedTouches[u],f=c&&c[e.stamp(l,!0)],this.changedTouches[u]=f||new e.DOMEventFacade(l,s,o)}n in t&&(this[n]=t[n]),r in t&&(this[r]=t[r]),i in t&&(this[i]=t[i])},e.Node.DOM_EVENTS&&e.mix(e.Node.DOM_EVENTS,{touchstart:1,touchmove:1,touchend:1,touchcancel:1,gesturestart:1,gesturechange:1,gestureend:1,MSPointerDown:1,MSPointerUp:1,MSPointerMove:1,MSPointerCancel:1,pointerdown:1,pointerup:1,pointermove:1,pointercancel:1}),s&&"ontouchstart"in s&&!(e.UA.chrome&&e.UA.chrome<6)?(o.start=["touchstart","mousedown"],o.end=["touchend","mouseup"],o.move=["touchmove","mousemove"],o.cancel=["touchcancel","mousecancel"]):s&&s.PointerEvent?(o.start="pointerdown",o.end="pointerup",o.move="pointermove",o.cancel="pointercancel"):s&&"msPointerEnabled"in s.navigator?(o.start="MSPointerDown",o.end="MSPointerUp",o.move="MSPointerMove",o.cancel="MSPointerCancel"):(o.start="mousedown",o.end="mouseup",o.move="mousemove",o.cancel="mousecancel"),e.Event._GESTURE_MAP=o},"patched-v3.18.0",{requires:["node-base"]});
YUI.add("event-move",function(e,t){var n=e.Event._GESTURE_MAP,r={start:n.start,end:n.end,move:n.move},i="start",s="move",o="end",u="gesture"+s,a=u+o,f=u+i,l="_msh",c="_mh",h="_meh",p="_dmsh",d="_dmh",v="_dmeh",m="_ms",g="_m",y="minTime",b="minDistance",w="preventDefault",E="button",S="ownerDocument",x="currentTarget",T="target",N="nodeType",C=function(e){var t;return e&&("PointerEvent"in e?t="touchAction":"msPointerEnabled"in e.navigator&&(t="msTouchAction")),t},k=C(e.config.win),L=k==="msTouchAction"||k==="touchAction",A="msTouchActionCount",O="msInitTouchAction",M=function(t,n,r){var i=r?4:3,s=n.length>i?e.merge(n.splice(i,1)[0]):{};return w in s||(s[w]=t.PREVENT_DEFAULT),s},_=function(e,t){return t._extra.root||e.get(N)===9?e:e.get(S)},D=function(t){var n=t.getDOMNode();return t.compareTo(e.config.doc)&&n.documentElement?n.documentElement:!1},P=function(e,t,n){e.pageX=t.pageX,e.pageY=t.pageY,e.screenX=t.screenX,e.screenY=t.screenY,e.clientX=t.clientX,e.clientY=t.clientY,e[T]=e[T]||t[T],e[x]=e[x]||t[x],e[E]=n&&n[E]||1},H=function(t){var n=t.getDOMNode(),r=t.getData(A);L&&(r||(r=0,t.setData(O,n.style[k])),n.style[k]=e.Event._DEFAULT_TOUCH_ACTION,r++,t.setData(A,r))},B=function(e){var t=e.getDOMNode(),n=e.getData(A),r=e.getData(O);L&&(n--,e.setData(A,n),n===0&&t.style[k]!==r&&(t.style[k]=r))},j=function(e,t){t&&(!t.call||t(e))&&e.preventDefault()},F=e.Event.define;e.Event._DEFAULT_TOUCH_ACTION="none",F(f,{on:function(e,t,n){D(e)||H(e),t[l]=e.on(r[i],this._onStart,this,e,t,n)},delegate:function(e,t,n,s){var o=this;t[p]=e.delegate(r[i],function(r){o._onStart(r,e,t,n,!0)},s)},detachDelegate:function(e,t,n,r){var i=t[p];i&&(i.detach(),t[p]=null),D(e)||B(e)},detach:function(e,t,n){var r=t[l];r&&(r.detach(),t[l]=null),D(e)||B(e)},processArgs:function(e,t){var n=M(this,e,t);return y in n||(n[y]=this.MIN_TIME),b in n||(n[b]=this.MIN_DISTANCE),n},_onStart:function(t,n,i,u,a){a&&(n=t[x]);var f=i._extra,l=!0,c=f[y],h=f[b],p=f.button,d=f[w],v=_(n,i),m;t.touches?t.touches.length===1?P(t,t.touches[0],f):l=!1:l=p===undefined||p===t.button,l&&(j(t,d),c===0||h===0?this._start(t,n,u,f):(m=[t.pageX,t.pageY],c>0&&(f._ht=e.later(c,this,this._start,[t,n,u,f]),f._hme=v.on(r[o],e.bind(function(){this._cancel(f)},this))),h>0&&(f._hm=v.on(r[s],e.bind(function(e){(Math.abs(e.pageX-m[0])>h||Math.abs(e.pageY-m[1])>h)&&this._start(t,n,u,f)},this)))))},_cancel:function(e){e._ht&&(e._ht.cancel(),e._ht=null),e._hme&&(e._hme.detach(),e._hme=null),e._hm&&(e._hm.detach(),e._hm=null)},_start:function(e,t,n,r){r&&this._cancel(r),e.type=f,t.setData(m,e),n.fire(e)},MIN_TIME:0,MIN_DISTANCE:0,PREVENT_DEFAULT:!1}),F(u,{on:function(e,t,n){var i,o;D(e)||H(e),o=_(e,t,r[s]),i=o.on(r[s],this._onMove,this,e,t,n),t[c]=i},delegate:function(e,t,n,i){var o=this;t[d]=e.delegate(r[s],function(r){o._onMove(r,e,t,n,!0)},i)},detach:function(e,t,n){var r=t[c];r&&(r.detach(),t[c]=null),D(e)||B(e)},detachDelegate:function(e,t,n,r){var i=t[d];i&&(i.detach(),t[d]=null),D(e)||B(e)},processArgs:function(e,t){return M(this,e,t)},_onMove:function(e,t,n,r,i){i&&(t=e[x]);var s=n._extra.standAlone||t.getData(m),o=n._extra.preventDefault;s&&(e.touches&&(e.touches.length===1?P(e,e.touches[0]):s=!1),s&&(j(e,o),e.type=u,r.fire(e)))},PREVENT_DEFAULT:!1}),F(a,{on:function(e,t,n){var i,s;D(e)||H(e),s=_(e,t),i=s.on(r[o],this._onEnd,this,e,t,n),t[h]=i},delegate:function(e,t,n,i){var s=this;t[v]=e.delegate(r[o],function(r){s._onEnd(r,e,t,n,!0)},i)},detachDelegate:function(e,t,n,r){var i=t[v];i&&(i.detach(),t[v]=null),D(e)||B(e)},detach:function(e,t,n){var r=t[h];r&&(r.detach(),t[h]=null),D(e)||B(e)},processArgs:function(e,t){return M(this,e,t)},_onEnd:function(e,t,n,r,i){i&&(t=e[x]);var s=n._extra.standAlone||t.getData(g)||t.getData(m),o=n._extra.preventDefault;s&&(e.changedTouches&&(e.changedTouches.length===1?P(e,e.changedTouches[0]):s=!1),s&&(j(e,o),e.type=a,r.fire(e),t.clearData(m),t.clearData(g)))},PREVENT_DEFAULT:!1})},"patched-v3.18.0",{requires:["node-base","event-touch","event-synthetic"]});
YUI.add("event-flick",function(e,t){var n=e.Event._GESTURE_MAP,r={start:n.start,end:n.end,move:n.move},i="start",s="end",o="move",u="ownerDocument",a="minVelocity",f="minDistance",l="preventDefault",c="_fs",h="_fsh",p="_feh",d="_fmh",v="nodeType";e.Event.define("flick",{on:function(e,t,n){var s=e.on(r[i],this._onStart,this,e,t,n);t[h]=s},detach:function(e,t,n){var r=t[h],i=t[p];r&&(r.detach(),t[h]=null),i&&(i.detach(),t[p]=null)},processArgs:function(t){var n=t.length>3?e.merge(t.splice(3,1)[0]):{};return a in n||(n[a]=this.MIN_VELOCITY),f in n||(n[f]=this.MIN_DISTANCE),l in n||(n[l]=this.PREVENT_DEFAULT),n},_onStart:function(t,n,i,a){var f=!0,l,h,m,g=i._extra.preventDefault,y=t;t.touches&&(f=t.touches.length===1,t=t.touches[0]),f&&(g&&(!g.call||g(t))&&y.preventDefault(),t.flick={time:(new Date).getTime()},i[c]=t,l=i[p],m=n.get(v)===9?n:n.get(u),l||(l=m.on(r[s],e.bind(this._onEnd,this),null,n,i,a),i[p]=l),i[d]=m.once(r[o],e.bind(this._onMove,this),null,n,i,a))},_onMove:function(e,t,n,r){var i=n[c];i&&i.flick&&(i.flick.time=(new Date).getTime())},_onEnd:function(e,t,n,r){var i=(new Date).getTime(),s=n[c],o=!!s,u=e,h,p,v,m,g,y,b,w,E=n[d];E&&(E.detach(),delete n[d]),o&&(e.changedTouches&&(e.changedTouches.length===1&&e.touches.length===0?u=e.changedTouches[0]:o=!1),o&&(m=n._extra,v=m[l],v&&(!v.call||v(e))&&e.preventDefault(),h=s.flick.time,i=(new Date).getTime(),p=i-h,g=[u.pageX-s.pageX,u.pageY-s.pageY],m.axis?w=m.axis:w=Math.abs(g[0])>=Math.abs(g[1])?"x":"y",y=g[w==="x"?0:1],b=p!==0?y/p:0,isFinite(b)&&Math.abs(y)>=m[f]&&Math.abs(b)>=m[a]&&(e.type="flick",e.flick={time:p,distance:y,velocity:b,axis:w,start:s},r.fire(e)),n[c]=null))},MIN_VELOCITY:0,MIN_DISTANCE:0,PREVENT_DEFAULT:!1})},"patched-v3.18.0",{requires:["node-base","event-touch","event-synthetic"]});
YUI.add("event-valuechange",function(e,t){var n="_valuechange",r="value",i="nodeName",s,o={POLL_INTERVAL:50,TIMEOUT:1e4,_poll:function(t,r){var i=t._node,s=r.e,u=t._data&&t._data[n],a=0,f,l,c,h,p,d;if(!i||!u){o._stopPolling(t);return}l=u.prevVal,h=u.nodeName,u.isEditable?c=i.innerHTML:h==="input"||h==="textarea"?c=i.value:h==="select"&&(p=i.options[i.selectedIndex],c=p.value||p.text),c!==l&&(u.prevVal=c,f={_event:s,currentTarget:s&&s.currentTarget||t,newVal:c,prevVal:l,target:s&&s.target||t},e.Object.some(u.notifiers,function(e){var t=e.handle.evt,n;a!==1?e.fire(f):t.el===d&&e.fire(f),n=t&&t._facade?t._facade.stopped:0,n>a&&(a=n,a===1&&(d=t.el));if(a===2)return!0}),o._refreshTimeout(t))},_refreshTimeout:function(e,t){if(!e._node)return;var r=e.getData(n);o._stopTimeout(e),r.timeout=setTimeout(function(){o._stopPolling(e,t)},o.TIMEOUT)},_startPolling:function(t,s,u){var a,f;if(!t.test("input,textarea,select")&&!(f=o._isEditable(t)))return;a=t.getData(n),a||(a={nodeName:t.get(i).toLowerCase(),isEditable:f,prevVal:f?t.getDOMNode().innerHTML:t.get(r)},t.setData(n,a)),a.notifiers||(a.notifiers={});if(a.interval){if(!u.force){a.notifiers[e.stamp(s)]=s;return}o._stopPolling(t,s)}a.notifiers[e.stamp(s)]=s,a.interval=setInterval(function(){o._poll(t,u)},o.POLL_INTERVAL),o._refreshTimeout(t,s)},_stopPolling:function(t,r){if(!t._node)return;var i=t.getData(n)||{};clearInterval(i.interval),delete i.interval,o._stopTimeout(t),r?i.notifiers&&delete i.notifiers[e.stamp(r)]:i.notifiers={}},_stopTimeout:function(e){var t=e.getData(n)||{};clearTimeout(t.timeout),delete t.timeout},_isEditable:function(e){var t=e._node;return t.contentEditable==="true"||t.contentEditable===""},_onBlur:function(e,t){o._stopPolling(e.currentTarget,t)},_onFocus:function(e,t){var s=e.currentTarget,u=s.getData(n);u||(u={isEditable:o._isEditable(s),nodeName:s.get(i).toLowerCase()},s.setData(n,u)),u.prevVal=u.isEditable?s.getDOMNode().innerHTML:s.get(r),o._startPolling(s,t,{e:e})},_onKeyDown:function(e,t){o._startPolling(e.currentTarget,t,{e:e})},_onKeyUp:function(e,t){(e.charCode===229||e.charCode===197)&&o._startPolling(e.currentTarget,t,{e:e,force:!0})},_onMouseDown:function(e,t){o._startPolling(e.currentTarget,t,{e:e})},_onSubscribe:function(t,s,u,a){var f,l,c,h,p;l={blur:o._onBlur,focus:o._onFocus,keydown:o._onKeyDown,keyup:o._onKeyUp,mousedown:o._onMouseDown},f=u._valuechange={};if(a)f.delegated=!0,f.getNodes=function(){return h=t.all("input,textarea,select").filter(a),p=t.all('[contenteditable="true"],[contenteditable=""]').filter(a),h.concat(p)},f.getNodes().each(function(e){e.getData(n)||e.setData(n,{nodeName:e.get(i).toLowerCase(),isEditable:o._isEditable(e),prevVal:c?e.getDOMNode().innerHTML:e.get(r)})}),u._handles=e.delegate(l,t,a,null,u);else{c=o._isEditable(t);if(!t.test("input,textarea,select")&&!c)return;t.getData(n)||t.setData(n,{nodeName:t.get(i).toLowerCase(),isEditable:c,prevVal:c?t.getDOMNode().innerHTML:t.get(r)}),u._handles=t.on(l,null,null,u)}},_onUnsubscribe:function(e,t,n){var r=n._valuechange;n._handles&&n._handles.detach(),r.delegated?r.getNodes().each(function(e){o._stopPolling(e,n)}):o._stopPolling(e,n)}};s={detach:o._onUnsubscribe,on:o._onSubscribe,delegate:o._onSubscribe,detachDelegate:o._onUnsubscribe,publishConfig:{emitFacade:!0}},e.Event.define("valuechange",s),e.Event.define("valueChange",s),e.ValueChange=o},"patched-v3.18.0",{requires:["event-focus","event-synthetic"]});
YUI.add("event-tap",function(e,t){function a(t,n){n=n||e.Object.values(u),e.Array.each(n,function(e){var n=t[e];n&&(n.detach(),t[e]=null)})}var n=e.config.doc,r=e.Event._GESTURE_MAP,i=r.start,s="tap",o=/pointer/i,u={START:"Y_TAP_ON_START_HANDLE",END:"Y_TAP_ON_END_HANDLE",CANCEL:"Y_TAP_ON_CANCEL_HANDLE"};e.Event.define(s,{publishConfig:{preventedFn:function(e){var t=e.target.once("click",function(e){e.preventDefault()});setTimeout(function(){t.detach()},100)}},processArgs:function(e,t){if(!t){var n=e[3];return e.splice(3,1),n}},on:function(e,t,n){t[u.START]=e.on(i,this._start,this,e,t,n)},detach:function(e,t,n){a(t)},delegate:function(t,n,r,s){n[u.START]=e.delegate(i,function(e){this._start(e,t,n,r,!0)},t,s,this)},detachDelegate:function(e,t,n){a(t)},_start:function(e,t,n,i,s){var a={canceled:!1,eventType:e.type},f=n.preventMouse||!1;if(e.button&&e.button===3)return;if(e.touches&&e.touches.length!==1)return;a.node=s?e.currentTarget:t,e.touches?a.startXY=[e.touches[0].pageX,e.touches[0].pageY]:a.startXY=[e.pageX,e.pageY],e.touches?(n[u.END]=t.once("touchend",this._end,this,t,n,i,s,a),n[u.CANCEL]=t.once("touchcancel",this.detach,this,t,n,i,s,a),n.preventMouse=!0):a.eventType.indexOf("mouse")!==-1&&!f?(n[u.END]=t.once("mouseup",this._end,this,t,n,i,s,a),n[u.CANCEL]=t.once("mousecancel",this.detach,this,t,n,i,s,a)):a.eventType.indexOf("mouse")!==-1&&f?n.preventMouse=!1:o.test(a.eventType)&&(n[u.END]=t.once(r.end,this._end,this,t,n,i,s,a),n[u.CANCEL]=t.once(r.cancel,this.detach,this,t,n,i,s,a))},_end:function(e,t,n,r,i,o){var f=o.startXY,l,c,h=15;n._extra&&n._extra.sensitivity>=0&&(h=n._extra.sensitivity),e.changedTouches?(l=[e.changedTouches[0].pageX,e.changedTouches[0].pageY],c=[e.changedTouches[0].clientX,e.changedTouches[0].clientY]):(l=[e.pageX,e.pageY],c=[e.clientX,e.clientY]),Math.abs(l[0]-f[0])<=h&&Math.abs(l[1]-f[1])<=h&&(e.type=s,e.pageX=l[0],e.pageY=l[1],e.clientX=c[0],e.clientY=c[1],e.currentTarget=o.node,r.fire(e)),a(n,[u.END,u.CANCEL])}})},"patched-v3.18.0",{requires:["node-base","event-base","event-touch","event-synthetic"]});
YUI.add("event-simulate",function(e,t){(function(){function v(t,n,a,f,l,c,h,p,d,v,m){t||e.error("simulateKeyEvent(): Invalid target.");if(i(n)){n=n.toLowerCase();switch(n){case"textevent":n="keypress";break;case"keyup":case"keydown":case"keypress":break;default:e.error("simulateKeyEvent(): Event type '"+n+"' not supported.")}}else e.error("simulateKeyEvent(): Event type must be a string.");s(a)||(a=!0),s(f)||(f=!0),o(l)||(l=e.config.win),s(c)||(c=!1),s(h)||(h=!1),s(p)||(p=!1),s(d)||(d=!1),u(v)||(v=0),u(m)||(m=0);var g=null;if(r(e.config.doc.createEvent)){try{g=e.config.doc.createEvent("KeyEvents"),g.initKeyEvent(n,a,f,l,c,h,p,d,v,m)}catch(y){try{g=e.config.doc.createEvent("Events")}catch(b){g=e.config.doc.createEvent("UIEvents")}finally{g.initEvent(n,a,f),g.view=l,g.altKey=h,g.ctrlKey=c,g.shiftKey=p,g.metaKey=d,g.keyCode=v,g.charCode=m}}t.dispatchEvent(g)}else o(e.config.doc.createEventObject)?(g=e.config.doc.createEventObject(),g.bubbles=a,g.cancelable=f,g.view=l,g.ctrlKey=c,g.altKey=h,g.shiftKey=p,g.metaKey=d,g.keyCode=m>0?m:v,t.fireEvent("on"+n,g)):e.error("simulateKeyEvent(): No event simulation framework present.")}function m(t,n,l,c,h,p,d,v,m,g,y,b,w,E,S,x){t||e.error("simulateMouseEvent(): Invalid target."),i(n)?!a[n.toLowerCase()]&&!f[n]&&e.error("simulateMouseEvent(): Event type '"+n+"' not supported."):e.error("simulateMouseEvent(): Event type must be a string."),s(l)||(l=!0),s(c)||(c=n!=="mousemove"),o(h)||(h=e.config.win),u(p)||(p=1),u(d)||(d=0),u(v)||(v=0),u(m)||(m=0),u(g)||(g=0),s(y)||(y=!1),s(b)||(b=!1),s(w)||(w=!1),s(E)||(E=!1),u(S)||(S=0),x=x||null;var T=null;if(r(e.config.doc.createEvent))T=e.config.doc.createEvent("MouseEvents"),T.initMouseEvent?T.initMouseEvent(n,l,c,h,p,d,v,m,g,y,b,w,E,S,x):(T=e.config.doc.createEvent("UIEvents"),T.initEvent(n,l,c),T.view=h,T.detail=p,T.screenX=d,T.screenY=v,T.clientX=m,T.clientY=g,T.ctrlKey=y,T.altKey=b,T.metaKey=E,T.shiftKey=w,T.button=S,T.relatedTarget=x),x&&!T.relatedTarget&&(n==="mouseout"?T.toElement=x:n==="mouseover"&&(T.fromElement=x)),t.dispatchEvent(T);else if(o(e.config.doc.createEventObject)){T=e.config.doc.createEventObject(),T.bubbles=l,T.cancelable=c,T.view=h,T.detail=p,T.screenX=d,T.screenY=v,T.clientX=m,T.clientY=g,T.ctrlKey=y,T.altKey=b,T.metaKey=E,T.shiftKey=w;switch(S){case 0:T.button=1;break;case 1:T.button=4;break;case 2:break;default:T.button=0}T.relatedTarget=x,t.fireEvent("on"+n,T)}else e.error("simulateMouseEvent(): No event simulation framework present.")}function g(t,n,a,f,l,p){t||e.error("simulateUIEvent(): Invalid target."),i(n)?(n=n.toLowerCase(),c[n]||e.error("simulateUIEvent(): Event type '"+n+"' not supported.")):e.error("simulateUIEvent(): Event type must be a string.");var d=null;s(a)||(a=n in h),s(f)||(f=n==="submit"),o(l)||(l=e.config.win),u(p)||(p=1),r(e.config.doc.createEvent)?(d=e.config.doc.createEvent("UIEvents"),d.initUIEvent(n,a,f,l,p),t.dispatchEvent(d)):o(e.config.doc.createEventObject)?(d=e.config.doc.createEventObject(),d.bubbles=a,d.cancelable=f,d.view=l,d.detail=p,t.fireEvent("on"+n,d)):e.error("simulateUIEvent(): No event simulation framework present.")}function y(t,n,r,i,s,o,u,a,f,l,c,h,p,v,m,g){var y;(!e.UA.ios||e.UA.ios<2)&&e.error("simulateGestureEvent(): Native gesture DOM eventframe is not available in this platform."),t||e.error("simulateGestureEvent(): Invalid target."),e.Lang.isString(n)?(n=n.toLowerCase(),d[n]||e.error("simulateTouchEvent(): Event type '"+n+"' not supported.")):e.error("simulateGestureEvent(): Event type must be a string."),e.Lang.isBoolean(r)||(r=!0),e.Lang.isBoolean(i)||(i=!0),e.Lang.isObject(s)||(s=e.config.win),e.Lang.isNumber(o)||(o=2),e.Lang.isNumber(u)||(u=0),e.Lang.isNumber(a)||(a=0),e.Lang.isNumber(f)||(f=0),e.Lang.isNumber(l)||(l=0),e.Lang.isBoolean(c)||(c=!1),e.Lang.isBoolean(h)||(h=!1),e.Lang.isBoolean(p)||(p=!1),e.Lang.isBoolean(v)||(v=!1),e.Lang.isNumber(m)||(m=1),e.Lang.isNumber(g)||(g=0),y=e.config.doc.createEvent("GestureEvent"),y.initGestureEvent(n,r,i,s,o,u,a,f,l,c,h,p,v,t,m,g),t.dispatchEvent(y)}function b(t,n,r,i,s,o,u,a,f,l,c,h,d,v,m,g,y,b,w){var E;t||e.error("simulateTouchEvent(): Invalid target."),e.Lang.isString(n)?(n=n.toLowerCase(),p[n]||e.error("simulateTouchEvent(): Event type '"+n+"' not supported.")):e.error("simulateTouchEvent(): Event type must be a string."),n==="touchstart"||n==="touchmove"?m.length===0&&e.error("simulateTouchEvent(): No touch object in touches"):n==="touchend"&&y.length===0&&e.error("simulateTouchEvent(): No touch object in changedTouches"),e.Lang.isBoolean(r)||(r=!0),e.Lang.isBoolean(i)||(i=n!=="touchcancel"),e.Lang.isObject(s)||(s=e.config.win),e.Lang.isNumber(o)||(o=1),e.Lang.isNumber(u)||(u=0),e.Lang.isNumber(a)||(a=0),e.Lang.isNumber(f)||(f=0),e.Lang.isNumber(l)||(l=0),e.Lang.isBoolean(c)||(c=!1),e.Lang.isBoolean(h)||(h=!1),e.Lang.isBoolean(d)||(d=!1),e.Lang.isBoolean(v)||(v=!1),e.Lang.isNumber(b)||(b=1),e.Lang.isNumber(w)||(w=0),e.Lang.isFunction(e.config.doc.createEvent)?(e.UA.android?e.UA.android<4?(E=e.config.doc.createEvent("MouseEvents"),E.initMouseEvent(n,r,i,s,o,u,a,f,l,c,h,d,v,0,t),E.touches=m,E.targetTouches=g,E.changedTouches=y):(E=e.config.doc.createEvent("TouchEvent"),E.initTouchEvent(m,g,y,n,s,u,a,f,l,c,h,d,v)):e.UA.ios?e.UA.ios>=2?(E=e.config.doc.createEvent("TouchEvent"),E.initTouchEvent(n,r,i,s,o,u,a,f,l,c,h,d,v,m,g,y,b,w)):e.error("simulateTouchEvent(): No touch event simulation framework present for iOS, "+e.UA.ios+"."):e.error("simulateTouchEvent(): Not supported agent yet, "+e.UA.userAgent),t.dispatchEvent(E)):e.error("simulateTouchEvent(): No event simulation framework present.")}var t=e.Lang,n=e.config.win,r=t.isFunction,i=t.isString,s=t.isBoolean,o=t.isObject,u=t.isNumber,a={click:1,dblclick:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,mousemove:1,contextmenu:1},f=n&&n.PointerEvent?{pointerover:1,pointerout:1,pointerdown:1,pointerup:1,pointermove:1}:{MSPointerOver:1,MSPointerOut:1,MSPointerDown:1,MSPointerUp:1,MSPointerMove:1},l={keydown:1,keyup:1,keypress:1},c={submit:1,blur
:1,change:1,focus:1,resize:1,scroll:1,select:1},h={scroll:1,resize:1,reset:1,submit:1,change:1,select:1,error:1,abort:1},p={touchstart:1,touchmove:1,touchend:1,touchcancel:1},d={gesturestart:1,gesturechange:1,gestureend:1};e.mix(h,a),e.mix(h,l),e.mix(h,p),e.Event.simulate=function(t,n,r){r=r||{},a[n]||f[n]?m(t,n,r.bubbles,r.cancelable,r.view,r.detail,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.button,r.relatedTarget):l[n]?v(t,n,r.bubbles,r.cancelable,r.view,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode):c[n]?g(t,n,r.bubbles,r.cancelable,r.view,r.detail):p[n]?e.config.win&&"ontouchstart"in e.config.win&&!e.UA.phantomjs&&!(e.UA.chrome&&e.UA.chrome<6)?b(t,n,r.bubbles,r.cancelable,r.view,r.detail,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.touches,r.targetTouches,r.changedTouches,r.scale,r.rotation):e.error("simulate(): Event '"+n+"' can't be simulated. Use gesture-simulate module instead."):e.UA.ios&&e.UA.ios>=2&&d[n]?y(t,n,r.bubbles,r.cancelable,r.view,r.detail,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.scale,r.rotation):e.error("simulate(): Event '"+n+"' can't be simulated.")}})()},"patched-v3.18.0",{requires:["event-base"]});
YUI.add("json-stringify",function(e,t){var n=":",r=e.config.global.JSON;e.mix(e.namespace("JSON"),{dateToString:function(e){function t(e){return e<10?"0"+e:e}return e.getUTCFullYear()+"-"+t(e.getUTCMonth()+1)+"-"+t(e.getUTCDate())+"T"+t(e.getUTCHours())+n+t(e.getUTCMinutes())+n+t(e.getUTCSeconds())+"Z"},stringify:function(){return r.stringify.apply(r,arguments)},charCacheThreshold:100})},"patched-v3.18.0",{requires:["yui-base"]});
YUI.add("test",function(e,t){YUI.YUITest?e.Test=YUI.YUITest:(YUITest={version:"patched-v3.18.0",guid:function(t){return e.guid(t)}},e.namespace("Test"),YUITest.Object=e.Object,YUITest.Array=e.Array,YUITest.Util={mix:e.mix,JSON:e.JSON},YUITest.EventTarget=function(){this._handlers={}},YUITest.EventTarget.prototype={constructor:YUITest.EventTarget,attach:function(e,t){typeof this._handlers[e]=="undefined"&&(this._handlers[e]=[]),this._handlers[e].push(t)},subscribe:function(e,t){this.attach.apply(this,arguments)},fire:function(e){typeof e=="string"&&(e={type:e}),e.target||(e.target=this);if(!e.type)throw new Error("Event object missing 'type' property.");if(this._handlers[e.type]instanceof Array){var t=this._handlers[e.type];for(var n=0,r=t.length;n<r;n++)t[n].call(this,e)}},detach:function(e,t){if(this._handlers[e]instanceof Array){var n=this._handlers[e];for(var r=0,i=n.length;r<i;r++)if(n[r]===t){n.splice(r,1);break}}},unsubscribe:function(e,t){this.detach.apply(this,arguments)}},YUITest.TestSuite=function(e){this.name="",this.items=[];if(typeof e=="string")this.name=e;else if(e instanceof Object)for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);if(this.name===""||!this.name)this.name=YUITest.guid("testSuite_")},YUITest.TestSuite.prototype={constructor:YUITest.TestSuite,add:function(e){return(e instanceof YUITest.TestSuite||e instanceof YUITest.TestCase)&&this.items.push(e),this},setUp:function(){},tearDown:function(){}},YUITest.TestCase=function(e){this._should={};for(var t in e)this[t]=e[t];typeof this.name!="string"&&(this.name=YUITest.guid("testCase_"))},YUITest.TestCase.DEFAULT_WAIT=1e4,YUITest.TestCase._waitTimeout=function(){YUITest.Assert.fail("Timeout: wait() called but resume() never called.")},YUITest.TestCase.prototype={constructor:YUITest.TestCase,callback:function(){return YUITest.TestRunner.callback.apply(YUITest.TestRunner,arguments)},resume:function(e){YUITest.TestRunner.resume(e)},wait:function(e,t){throw t=typeof e=="number"?e:typeof t=="number"?t:YUITest.TestCase.DEFAULT_WAIT,typeof e!="function"&&(e=YUITest.TestCase._waitTimeout),new YUITest.Wait(e,t)},next:function(e,t){var n=this;return t=arguments.length>=2?arguments[1]:undefined,function(){var r=arguments;t===undefined&&(t=this),n.resume(function(){e.apply(t,r)})}},waitFor:function(e,t,n,r){var i=this,s;(typeof e!="function"||typeof t!="function")&&i.fail("waitFor() called with invalid parameters."),typeof n!="number"&&(n=YUITest.TestCase.DEFAULT_WAIT),s=+(new Date)+n,typeof r!="number"&&(r=100),i.wait(function(){var n;e.call(i)?t.call(i):(n=+(new Date),n>s?YUITest.TestCase._waitTimeout():i.waitFor(e,t,s-n,r))},r)},assert:function(e,t){YUITest.Assert._increment();if(!e)throw new YUITest.AssertionError(YUITest.Assert._formatMessage(t,"Assertion failed."))},fail:function(e){YUITest.Assert.fail(e)},init:function(){},destroy:function(){},setUp:function(){},tearDown:function(){}},YUITest.TestFormat=function(){function e(e){return e.replace(/[<>"'&]/g,function(e){switch(e){case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"'":return"&apos;";case"&":return"&amp;"}})}return{JSON:function(e){return YUITest.Util.JSON.stringify(e)},XML:function(t){function n(t){var r="<"+t.type+' name="'+e(t.name)+'"';typeof t.duration=="number"&&(r+=' duration="'+t.duration+'"');if(t.type=="test")r+=' result="'+t.result+'" message="'+e(t.message)+'">';else{r+=' passed="'+t.passed+'" failed="'+t.failed+'" ignored="'+t.ignored+'" total="'+t.total+'">';for(var i in t)t.hasOwnProperty(i)&&t[i]&&typeof t[i]=="object"&&!(t[i]instanceof Array)&&(r+=n(t[i]))}return r+="</"+t.type+">",r}return'<?xml version="1.0" encoding="UTF-8"?>'+n(t)},JUnitXML:function(t){function n(t){var r="";switch(t.type){case"test":t.result!="ignore"&&(r='<testcase name="'+e(t.name)+'" time="'+t.duration/1e3+'">',t.result=="fail"&&(r+='<failure message="'+e(t.message)+'"><![CDATA['+t.message+"]]></failure>"),r+="</testcase>");break;case"testcase":r='<testsuite name="'+e(t.name)+'" tests="'+t.total+'" failures="'+t.failed+'" time="'+t.duration/1e3+'">';for(var i in t)t.hasOwnProperty(i)&&t[i]&&typeof t[i]=="object"&&!(t[i]instanceof Array)&&(r+=n(t[i]));r+="</testsuite>";break;case"testsuite":for(var i in t)t.hasOwnProperty(i)&&t[i]&&typeof t[i]=="object"&&!(t[i]instanceof Array)&&(r+=n(t[i]));break;case"report":r="<testsuites>";for(var i in t)t.hasOwnProperty(i)&&t[i]&&typeof t[i]=="object"&&!(t[i]instanceof Array)&&(r+=n(t[i]));r+="</testsuites>"}return r}return'<?xml version="1.0" encoding="UTF-8"?>'+n(t)},TAP:function(e){function n(e){var r="";switch(e.type){case"test":e.result!="ignore"?(r="ok "+t++ +" - "+e.name,e.result=="fail"&&(r="not "+r+" - "+e.message),r+="\n"):r="#Ignored test "+e.name+"\n";break;case"testcase":r="#Begin testcase "+e.name+"("+e.failed+" failed of "+e.total+")\n";for(var i in e)e.hasOwnProperty(i)&&e[i]&&typeof e[i]=="object"&&!(e[i]instanceof Array)&&(r+=n(e[i]));r+="#End testcase "+e.name+"\n";break;case"testsuite":r="#Begin testsuite "+e.name+"("+e.failed+" failed of "+e.total+")\n";for(var i in e)e.hasOwnProperty(i)&&e[i]&&typeof e[i]=="object"&&!(e[i]instanceof Array)&&(r+=n(e[i]));r+="#End testsuite "+e.name+"\n";break;case"report":for(var i in e)e.hasOwnProperty(i)&&e[i]&&typeof e[i]=="object"&&!(e[i]instanceof Array)&&(r+=n(e[i]))}return r}var t=1;return"1.."+e.total+"\n"+n(e)}}}(),YUITest.Reporter=function(e,t){this.url=e,this.format=t||YUITest.TestFormat.XML,this._fields=new Object,this._form=null,this._iframe=null},YUITest.Reporter.prototype={constructor:YUITest.Reporter,addField:function(e,t){this._fields[e]=t},clearFields:function(){this._fields=new Object},destroy:function(){this._form&&(this._form.parentNode.removeChild(this._form),this._form=null),this._iframe&&(this._iframe.parentNode.removeChild(this._iframe),this._iframe=null),this._fields=null},report:function(e){if(!this._form){this._form=document.createElement("form"),this._form.method="post",this._form.style.visibility="hidden",this._form.style.position="absolute"
,this._form.style.top=0,document.body.appendChild(this._form);try{this._iframe=document.createElement('<iframe name="yuiTestTarget" />')}catch(t){this._iframe=document.createElement("iframe"),this._iframe.name="yuiTestTarget"}this._iframe.src="javascript:false",this._iframe.style.visibility="hidden",this._iframe.style.position="absolute",this._iframe.style.top=0,document.body.appendChild(this._iframe),this._form.target="yuiTestTarget"}this._form.action=this.url;while(this._form.hasChildNodes())this._form.removeChild(this._form.lastChild);this._fields.results=this.format(e),this._fields.useragent=navigator.userAgent,this._fields.timestamp=(new Date).toLocaleString();for(var n in this._fields){var r=this._fields[n];if(this._fields.hasOwnProperty(n)&&typeof r!="function"){var i=document.createElement("input");i.type="hidden",i.name=n,i.value=r,this._form.appendChild(i)}}delete this._fields.results,delete this._fields.useragent,delete this._fields.timestamp,arguments[1]!==!1&&this._form.submit()}},YUITest.TestRunner=function(){function e(e,t){if(!t.length)return!0;if(e)for(var n=0,r=e.length;n<r;n++)if(t.indexOf(","+e[n]+",")>-1)return!0;return!1}function t(e){this.testObject=e,this.firstChild=null,this.lastChild=null,this.parent=null,this.next=null,this.results=new YUITest.Results,e instanceof YUITest.TestSuite?(this.results.type="testsuite",this.results.name=e.name):e instanceof YUITest.TestCase&&(this.results.type="testcase",this.results.name=e.name)}function n(){YUITest.EventTarget.call(this),this.masterSuite=new YUITest.TestSuite(YUITest.guid("testSuite_")),this._cur=null,this._root=null,this._log=!0,this._waiting=!1,this._running=!1,this._lastResults=null,this._context=null,this._groups=""}return t.prototype={appendChild:function(e){var n=new t(e);return this.firstChild===null?this.firstChild=this.lastChild=n:(this.lastChild.next=n,this.lastChild=n),n.parent=this,n}},n.prototype=YUITest.Util.mix(new YUITest.EventTarget,{_ignoreEmpty:!1,constructor:YUITest.TestRunner,TEST_CASE_BEGIN_EVENT:"testcasebegin",TEST_CASE_COMPLETE_EVENT:"testcasecomplete",TEST_SUITE_BEGIN_EVENT:"testsuitebegin",TEST_SUITE_COMPLETE_EVENT:"testsuitecomplete",TEST_PASS_EVENT:"pass",TEST_FAIL_EVENT:"fail",ERROR_EVENT:"error",TEST_IGNORE_EVENT:"ignore",COMPLETE_EVENT:"complete",BEGIN_EVENT:"begin",_addTestCaseToTestTree:function(e,t){var n=e.appendChild(t),r,i;for(r in t)(r.indexOf("test")===0||r.indexOf(" ")>-1)&&typeof t[r]=="function"&&n.appendChild(r)},_addTestSuiteToTestTree:function(e,t){var n=e.appendChild(t);for(var r=0;r<t.items.length;r++)t.items[r]instanceof YUITest.TestSuite?this._addTestSuiteToTestTree(n,t.items[r]):t.items[r]instanceof YUITest.TestCase&&this._addTestCaseToTestTree(n,t.items[r])},_buildTestTree:function(){this._root=new t(this.masterSuite);for(var e=0;e<this.masterSuite.items.length;e++)this.masterSuite.items[e]instanceof YUITest.TestSuite?this._addTestSuiteToTestTree(this._root,this.masterSuite.items[e]):this.masterSuite.items[e]instanceof YUITest.TestCase&&this._addTestCaseToTestTree(this._root,this.masterSuite.items[e])},_handleTestObjectComplete:function(e){var t;e&&typeof e.testObject=="object"&&(t=e.parent,t&&(t.results.include(e.results),t.results[e.testObject.name]=e.results),e.testObject instanceof YUITest.TestSuite?(this._execNonTestMethod(e,"tearDown",!1),e.results.duration=new Date-e._start,this.fire({type:this.TEST_SUITE_COMPLETE_EVENT,testSuite:e.testObject,results:e.results})):e.testObject instanceof YUITest.TestCase&&(this._execNonTestMethod(e,"destroy",!1),e.results.duration=new Date-e._start,this.fire({type:this.TEST_CASE_COMPLETE_EVENT,testCase:e.testObject,results:e.results})))},_next:function(){if(this._cur===null)this._cur=this._root;else if(this._cur.firstChild)this._cur=this._cur.firstChild;else if(this._cur.next)this._cur=this._cur.next;else{while(this._cur&&!this._cur.next&&this._cur!==this._root)this._handleTestObjectComplete(this._cur),this._cur=this._cur.parent;this._handleTestObjectComplete(this._cur),this._cur==this._root?(this._cur.results.type="report",this._cur.results.timestamp=(new Date).toLocaleString(),this._cur.results.duration=new Date-this._cur._start,this._lastResults=this._cur.results,this._running=!1,this.fire({type:this.COMPLETE_EVENT,results:this._lastResults}),this._cur=null):this._cur&&(this._cur=this._cur.next)}return this._cur},_execNonTestMethod:function(e,t,n){var r=e.testObject,i={type:this.ERROR_EVENT};try{if(n&&r["async:"+t])return r["async:"+t](this._context),!0;r[t](this._context)}catch(s){e.results.errors++,i.error=s,i.methodName=t,r instanceof YUITest.TestCase?i.testCase=r:i.testSuite=testSuite,this.fire(i)}return!1},_run:function(){var e=!1,t=this._next();if(t!==null){this._running=!0,this._lastResult=null;var n=t.testObject;if(typeof n=="object"&&n!==null){if(n instanceof YUITest.TestSuite)this.fire({type:this.TEST_SUITE_BEGIN_EVENT,testSuite:n}),t._start=new Date,this._execNonTestMethod(t,"setUp",!1);else if(n instanceof YUITest.TestCase){this.fire({type:this.TEST_CASE_BEGIN_EVENT,testCase:n}),t._start=new Date;if(this._execNonTestMethod(t,"init",!0))return}typeof setTimeout!="undefined"?setTimeout(function(){YUITest.TestRunner._run()},0):this._run()}else this._runTest(t)}},_resumeTest:function(e){var t=this._cur;this._waiting=!1;if(!t)return;var n=t.testObject,r=t.parent.testObject;r.__yui_wait&&(clearTimeout(r.__yui_wait),delete r.__yui_wait);var i=n.indexOf("fail:")===0||(r._should.fail||{})[n],s=(r._should.error||{})[n],o=!1,u=null;try{e.call(r,this._context);if(YUITest.Assert._getCount()==0&&!this._ignoreEmpty)throw new YUITest.AssertionError("Test has no asserts.");i?(u=new YUITest.ShouldFail,o=!0):s&&(u=new YUITest.ShouldError,o=!0)}catch(a){r.__yui_wait&&(clearTimeout(r.__yui_wait),delete r.__yui_wait);if(a instanceof YUITest.AssertionError)i||(u=a,o=!0);else{if(a instanceof YUITest.Wait){if(typeof a.segment=="function"&&typeof a.delay=="number"){if(typeof setTimeout=="undefined")throw new Error("Asynchronous tests not supported in this environment."
);r.__yui_wait=setTimeout(function(){YUITest.TestRunner._resumeTest(a.segment)},a.delay),this._waiting=!0}return}s?typeof s=="string"?a.message!=s&&(u=new YUITest.UnexpectedError(a),o=!0):typeof s=="function"?a instanceof s||(u=new YUITest.UnexpectedError(a),o=!0):typeof s=="object"&&s!==null&&(!(a instanceof s.constructor)||a.message!=s.message)&&(u=new YUITest.UnexpectedError(a),o=!0):(u=new YUITest.UnexpectedError(a),o=!0)}}o?this.fire({type:this.TEST_FAIL_EVENT,testCase:r,testName:n,error:u}):this.fire({type:this.TEST_PASS_EVENT,testCase:r,testName:n}),this._execNonTestMethod(t.parent,"tearDown",!1),YUITest.Assert._reset();var f=new Date-t._start;t.parent.results[n]={result:o?"fail":"pass",message:u?u.getMessage():"Test passed",type:"test",name:n,duration:f},o?t.parent.results.failed++:t.parent.results.passed++,t.parent.results.total++,typeof setTimeout!="undefined"?setTimeout(function(){YUITest.TestRunner._run()},0):this._run()},_handleError:function(e){if(!this._waiting)throw e;this._resumeTest(function(){throw e})},_runTest:function(t){var n=t.testObject,r=t.parent.testObject,i=r[n],s=n.indexOf("ignore:")===0||!e(r.groups,this._groups)||(r._should.ignore||{})[n];s?(t.parent.results[n]={result:"ignore",message:"Test ignored",type:"test",name:n.indexOf("ignore:")===0?n.substring(7):n},t.parent.results.ignored++,t.parent.results.total++,this.fire({type:this.TEST_IGNORE_EVENT,testCase:r,testName:n}),typeof setTimeout!="undefined"?setTimeout(function(){YUITest.TestRunner._run()},0):this._run()):(t._start=new Date,this._execNonTestMethod(t.parent,"setUp",!1),this._resumeTest(i))},getName:function(){return this.masterSuite.name},setName:function(e){this.masterSuite.name=e},add:function(e){return this.masterSuite.add(e),this},clear:function(){this.masterSuite=new YUITest.TestSuite(YUITest.guid("testSuite_"))},isWaiting:function(){return this._waiting},isRunning:function(){return this._running},getResults:function(e){return!this._running&&this._lastResults?typeof e=="function"?e(this._lastResults):this._lastResults:null},getCoverage:function(e){var t=null;return typeof _yuitest_coverage=="object"&&(t=_yuitest_coverage),typeof __coverage__=="object"&&(t=__coverage__),!this._running&&typeof t=="object"?typeof e=="function"?e(t):t:null},callback:function(){var e=arguments,t=this._context,n=this;return function(){for(var r=0;r<arguments.length;r++)t[e[r]]=arguments[r];n._run()}},resume:function(e){if(!this._waiting)throw new Error("resume() called without wait().");this._resumeTest(e||function(){})},run:function(e){e=e||{};var t=YUITest.TestRunner,n=e.oldMode;!n&&this.masterSuite.items.length==1&&this.masterSuite.items[0]instanceof YUITest.TestSuite&&(this.masterSuite=this.masterSuite.items[0]),t._groups=e.groups instanceof Array?","+e.groups.join(",")+",":"",t._buildTestTree(),t._context={},t._root._start=new Date,t.fire(t.BEGIN_EVENT),t._run()}}),new n}(),YUITest.ArrayAssert={_indexOf:function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},_some:function(e,t){if(e.some)return e.some(t);for(var n=0;n<e.length;n++)if(t(e[n]))return!0;return!1},contains:function(e,t,n){YUITest.Assert._increment(),this._indexOf(t,e)==-1&&YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Value "+e+" ("+typeof e+") not found in array ["+t+"]."))},containsItems:function(e,t,n){YUITest.Assert._increment();for(var r=0;r<e.length;r++)this._indexOf(t,e[r])==-1&&YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Value "+e[r]+" ("+typeof e[r]+") not found in array ["+t+"]."))},containsMatch:function(e,t,n){YUITest.Assert._increment();if(typeof e!="function")throw new TypeError("ArrayAssert.containsMatch(): First argument must be a function.");this._some(t,e)||YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"No match found in array ["+t+"]."))},doesNotContain:function(e,t,n){YUITest.Assert._increment(),this._indexOf(t,e)>-1&&YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Value found in array ["+t+"]."))},doesNotContainItems:function(e,t,n){YUITest.Assert._increment();for(var r=0;r<e.length;r++)this._indexOf(t,e[r])>-1&&YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Value found in array ["+t+"]."))},doesNotContainMatch:function(e,t,n){YUITest.Assert._increment();if(typeof e!="function")throw new TypeError("ArrayAssert.doesNotContainMatch(): First argument must be a function.");this._some(t,e)&&YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Value found in array ["+t+"]."))},indexOf:function(e,t,n,r){YUITest.Assert._increment();for(var i=0;i<t.length;i++)if(t[i]===e){n!=i&&YUITest.Assert.fail(YUITest.Assert._formatMessage(r,"Value exists at index "+i+" but should be at index "+n+"."));return}YUITest.Assert.fail(YUITest.Assert._formatMessage(r,"Value doesn't exist in array ["+t+"]."))},itemsAreEqual:function(e,t,n){YUITest.Assert._increment(),(typeof e!="object"||typeof t!="object")&&YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Value should be an array.")),e.length!=t.length&&YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Array should have a length of "+e.length+" but has a length of "+t.length+"."));for(var r=0;r<e.length;r++)if(e[r]!=t[r])throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(n,"Values in position "+r+" are not equal."),e[r],t[r])},itemsAreEquivalent:function(e,t,n,r){YUITest.Assert._increment();if(typeof n!="function")throw new TypeError("ArrayAssert.itemsAreEquivalent(): Third argument must be a function.");e.length!=t.length&&YUITest.Assert.fail(YUITest.Assert._formatMessage(r,"Array should have a length of "+e.length+" but has a length of "+t.length));for(var i=0;i<e.length;i++)if(!n(e[i],t[i]))throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(r,"Values in position "+i+" are not equivalent."),e[i],t[i])},isEmpty:function(e,t){YUITest.Assert._increment(),e.length>0&&YUITest.Assert.fail(YUITest.Assert._formatMessage(t,"Array should be empty."))},isNotEmpty:function(e,t){YUITest.Assert._increment
(),e.length===0&&YUITest.Assert.fail(YUITest.Assert._formatMessage(t,"Array should not be empty."))},itemsAreSame:function(e,t,n){YUITest.Assert._increment(),e.length!=t.length&&YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Array should have a length of "+e.length+" but has a length of "+t.length));for(var r=0;r<e.length;r++)if(e[r]!==t[r])throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(n,"Values in position "+r+" are not the same."),e[r],t[r])},lastIndexOf:function(e,t,n,r){for(var i=t.length;i>=0;i--)if(t[i]===e){n!=i&&YUITest.Assert.fail(YUITest.Assert._formatMessage(r,"Value exists at index "+i+" but should be at index "+n+"."));return}YUITest.Assert.fail(YUITest.Assert._formatMessage(r,"Value doesn't exist in array."))},isUnique:function(t,n,r){YUITest.Assert._increment();if(!e.Lang.isArray(t))throw new TypeError("ArrayAssert.isUnique(): First argument must be an array");if(e.Lang.isValue(n)&&!e.Lang.isFunction(n))throw new TypeError("ArrayAssert.isUnique(): Second argument must be a function");e.Array.unique(t,n).length<t.length&&(r=YUITest.Assert._formatMessage(r,"Array contains duplicate(s)"),YUITest.Assert.fail(r))}},YUITest.Assert={_asserts:0,_formatMessage:function(e,t){return typeof e=="string"&&e.length>0?e.replace("{message}",t):t},_getCount:function(){return this._asserts},_increment:function(){this._asserts++},_reset:function(){this._asserts=0},fail:function(e){throw new YUITest.AssertionError(YUITest.Assert._formatMessage(e,"Test force-failed."))},pass:function(e){YUITest.Assert._increment()},areEqual:function(e,t,n){YUITest.Assert._increment();if(e!=t)throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(n,"Values should be equal."),e,t)},areNotEqual:function(e,t,n){YUITest.Assert._increment();if(e==t)throw new YUITest.UnexpectedValue(YUITest.Assert._formatMessage(n,"Values should not be equal."),e)},areNotSame:function(e,t,n){YUITest.Assert._increment();if(e===t)throw new YUITest.UnexpectedValue(YUITest.Assert._formatMessage(n,"Values should not be the same."),e)},areSame:function(e,t,n){YUITest.Assert._increment();if(e!==t)throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(n,"Values should be the same."),e,t)},isFalse:function(e,t){YUITest.Assert._increment();if(!1!==e)throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(t,"Value should be false."),!1,e)},isTrue:function(e,t){YUITest.Assert._increment();if(!0!==e)throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(t,"Value should be true."),!0,e)},isNaN:function(e,t){YUITest.Assert._increment();if(!isNaN(e))throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(t,"Value should be NaN."),NaN,e)},isNotNaN:function(e,t){YUITest.Assert._increment();if(isNaN(e))throw new YUITest.UnexpectedValue(YUITest.Assert._formatMessage(t,"Values should not be NaN."),NaN)},isNotNull:function(e,t){YUITest.Assert._increment();if(e===null)throw new YUITest.UnexpectedValue(YUITest.Assert._formatMessage(t,"Values should not be null."),null)},isNotUndefined:function(e,t){YUITest.Assert._increment();if(typeof e=="undefined")throw new YUITest.UnexpectedValue(YUITest.Assert._formatMessage(t,"Value should not be undefined."),undefined)},isNull:function(e,t){YUITest.Assert._increment();if(e!==null)throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(t,"Value should be null."),null,e)},isUndefined:function(e,t){YUITest.Assert._increment();if(typeof e!="undefined")throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(t,"Value should be undefined."),undefined,e)},isArray:function(e,t){YUITest.Assert._increment();var n=!1;Array.isArray?n=!Array.isArray(e):n=Object.prototype.toString.call(e)!="[object Array]";if(n)throw new YUITest.UnexpectedValue(YUITest.Assert._formatMessage(t,"Value should be an array."),e)},isBoolean:function(e,t){YUITest.Assert._increment();if(typeof e!="boolean")throw new YUITest.UnexpectedValue(YUITest.Assert._formatMessage(t,"Value should be a Boolean."),e)},isFunction:function(e,t){YUITest.Assert._increment();if(!(e instanceof Function))throw new YUITest.UnexpectedValue(YUITest.Assert._formatMessage(t,"Value should be a function."),e)},isInstanceOf:function(e,t,n){YUITest.Assert._increment();if(!(t instanceof e))throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(n,"Value isn't an instance of expected type."),e,t)},isNumber:function(e,t){YUITest.Assert._increment();if(typeof e!="number")throw new YUITest.UnexpectedValue(YUITest.Assert._formatMessage(t,"Value should be a number."),e)},isObject:function(e,t){YUITest.Assert._increment();if(!e||typeof e!="object"&&typeof e!="function")throw new YUITest.UnexpectedValue(YUITest.Assert._formatMessage(t,"Value should be an object."),e)},isString:function(e,t){YUITest.Assert._increment();if(typeof e!="string")throw new YUITest.UnexpectedValue(YUITest.Assert._formatMessage(t,"Value should be a string."),e)},isTypeOf:function(e,t,n){YUITest.Assert._increment();if(typeof t!=e)throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(n,"Value should be of type "+e+"."),e,typeof t)},throwsError:function(e,t,n){YUITest.Assert._increment();var r=!1;try{t()}catch(i){if(typeof e=="string")i.message!=e&&(r=!0);else if(typeof e=="function")i instanceof e||(r=!0);else if(typeof e=="object"&&e!==null){if(!(i instanceof e.constructor)||i.message!=e.message)r=!0}else r=!0;if(r)throw new YUITest.UnexpectedError(i);return}throw new YUITest.AssertionError(YUITest.Assert._formatMessage(n,"Error should have been thrown."))}},YUITest.AssertionError=function(e){this.message=e,this.name="Assert Error"},YUITest.AssertionError.prototype={constructor:YUITest.AssertionError,getMessage:function(){return this.message},toString:function(){return this.name+": "+this.getMessage()}},YUITest.ComparisonFailure=function(e,t,n){YUITest.AssertionError.call(this,e),this.expected=t,this.actual=n,this.name="ComparisonFailure"},YUITest.ComparisonFailure.prototype=new YUITest.AssertionError,YUITest
.ComparisonFailure.prototype.constructor=YUITest.ComparisonFailure,YUITest.ComparisonFailure.prototype.getMessage=function(){return this.message+"\nExpected: "+this.expected+" ("+typeof this.expected+")"+"\nActual: "+this.actual+" ("+typeof this.actual+")"},YUITest.CoverageFormat={JSON:function(e){return YUITest.Util.JSON.stringify(e)},XdebugJSON:function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n].lines);return YUITest.Util.JSON.stringify(e)}},YUITest.DateAssert={datesAreEqual:function(e,t,n){YUITest.Assert._increment();if(!(e instanceof Date&&t instanceof Date))throw new TypeError("YUITest.DateAssert.datesAreEqual(): Expected and actual values must be Date objects.");var r="";e.getFullYear()!=t.getFullYear()&&(r="Years should be equal."),e.getMonth()!=t.getMonth()&&(r="Months should be equal."),e.getDate()!=t.getDate()&&(r="Days of month should be equal.");if(r.length)throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(n,r),e,t)},timesAreEqual:function(e,t,n){YUITest.Assert._increment();if(!(e instanceof Date&&t instanceof Date))throw new TypeError("YUITest.DateAssert.timesAreEqual(): Expected and actual values must be Date objects.");var r="";e.getHours()!=t.getHours()&&(r="Hours should be equal."),e.getMinutes()!=t.getMinutes()&&(r="Minutes should be equal."),e.getSeconds()!=t.getSeconds()&&(r="Seconds should be equal.");if(r.length)throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(n,r),e,t)}},YUITest.Mock=function(e){e=e||{};var t,n;try{function r(){}r.prototype=e,t=new r}catch(i){t={}}for(n in e)e.hasOwnProperty(n)&&typeof e[n]=="function"&&(t[n]=function(e){return function(){YUITest.Assert.fail("Method "+e+"() was called but was not expected to be.")}}(n));return t},YUITest.Mock.expect=function(e,t){e.__expectations||(e.__expectations={});if(t.method){var n=t.method,r=t.args||[],i=t.returns,s=typeof t.callCount=="number"?t.callCount:1,o=t.error,u=t.run||function(){},a,f;e.__expectations[n]=t,t.callCount=s,t.actualCallCount=0;for(f=0;f<r.length;f++)r[f]instanceof YUITest.Mock.Value||(r[f]=YUITest.Mock.Value(YUITest.Assert.areSame,[r[f]],"Argument "+f+" of "+n+"() is incorrect."));s>0?e[n]=function(){try{t.actualCallCount++,YUITest.Assert.areEqual(r.length,arguments.length,"Method "+n+"() passed incorrect number of arguments.");for(var e=0,s=r.length;e<s;e++)r[e].verify(arguments[e]);a=u.apply(this,arguments);if(o)throw o}catch(f){YUITest.TestRunner._handleError(f)}return t.hasOwnProperty("returns")?i:a}:e[n]=function(){try{YUITest.Assert.fail("Method "+n+"() should not have been called.")}catch(e){YUITest.TestRunner._handleError(e)}}}else t.property&&(e.__expectations[t.property]=t)},YUITest.Mock.verify=function(e){try{for(var t in e.__expectations)if(e.__expectations.hasOwnProperty(t)){var n=e.__expectations[t];n.method?YUITest.Assert.areEqual(n.callCount,n.actualCallCount,"Method "+n.method+"() wasn't called the expected number of times."):n.property&&YUITest.Assert.areEqual(n.value,e[n.property],"Property "+n.property+" wasn't set to the correct value.")}}catch(r){YUITest.TestRunner._handleError(r)}},YUITest.Mock.Value=function(e,t,n){if(!(this instanceof YUITest.Mock.Value))return new YUITest.Mock.Value(e,t,n);this.verify=function(r){var i=[].concat(t||[]);i.push(r),i.push(n),e.apply(null,i)}},YUITest.Mock.Value.Any=YUITest.Mock.Value(function(){}),YUITest.Mock.Value.Boolean=YUITest.Mock.Value(YUITest.Assert.isBoolean),YUITest.Mock.Value.Number=YUITest.Mock.Value(YUITest.Assert.isNumber),YUITest.Mock.Value.String=YUITest.Mock.Value(YUITest.Assert.isString),YUITest.Mock.Value.Object=YUITest.Mock.Value(YUITest.Assert.isObject),YUITest.Mock.Value.Function=YUITest.Mock.Value(YUITest.Assert.isFunction),YUITest.ObjectAssert={areEqual:function(e,t,n){YUITest.Assert._increment();var r=YUITest.Object.keys(e),i=YUITest.Object.keys(t);r.length!=i.length&&YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Object should have "+r.length+" keys but has "+i.length));for(var s in e)if(e.hasOwnProperty(s)&&e[s]!=t[s])throw new YUITest.ComparisonFailure(YUITest.Assert._formatMessage(n,"Values should be equal for property "+s),e[s],t[s])},hasKey:function(e,t,n){YUITest.ObjectAssert.ownsOrInheritsKey(e,t,n)},hasKeys:function(e,t,n){YUITest.ObjectAssert.ownsOrInheritsKeys(e,t,n)},inheritsKey:function(e,t,n){YUITest.Assert._increment(),e in t&&!t.hasOwnProperty(e)||YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Property '"+e+"' not found on object instance."))},inheritsKeys:function(e,t,n){YUITest.Assert._increment();for(var r=0;r<e.length;r++)propertyName in t&&!t.hasOwnProperty(e[r])||YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Property '"+e[r]+"' not found on object instance."))},ownsKey:function(e,t,n){YUITest.Assert._increment(),t.hasOwnProperty(e)||YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Property '"+e+"' not found on object instance."))},ownsKeys:function(e,t,n){YUITest.Assert._increment();for(var r=0;r<e.length;r++)t.hasOwnProperty(e[r])||YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Property '"+e[r]+"' not found on object instance."))},ownsNoKeys:function(e,t){YUITest.Assert._increment();var n=YUITest.Object.keys(e).length;n!==0&&YUITest.Assert.fail(YUITest.Assert._formatMessage(t,"Object owns "+n+" properties but should own none."))},ownsOrInheritsKey:function(e,t,n){YUITest.Assert._increment(),e in t||YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Property '"+e+"' not found on object."))},ownsOrInheritsKeys:function(e,t,n){YUITest.Assert._increment();for(var r=0;r<e.length;r++)e[r]in t||YUITest.Assert.fail(YUITest.Assert._formatMessage(n,"Property '"+e[r]+"' not found on object."))}},YUITest.Results=function(e){this.name=e,this.passed=0,this.failed=0,this.errors=0,this.ignored=0,this.total=0,this.duration=0},YUITest.Results.prototype.include=function(e){this.passed+=e.passed,this.failed+=e.failed,this.ignored+=e.ignored,this.total+=e.total,this.errors+=e.errors},YUITest.ShouldError=function(e){YUITest.AssertionError
.call(this,e||"This test should have thrown an error but didn't."),this.name="ShouldError"},YUITest.ShouldError.prototype=new YUITest.AssertionError,YUITest.ShouldError.prototype.constructor=YUITest.ShouldError,YUITest.ShouldFail=function(e){YUITest.AssertionError.call(this,e||"This test should fail but didn't."),this.name="ShouldFail"},YUITest.ShouldFail.prototype=new YUITest.AssertionError,YUITest.ShouldFail.prototype.constructor=YUITest.ShouldFail,YUITest.UnexpectedError=function(e){YUITest.AssertionError.call(this,"Unexpected error: "+e.message),this.cause=e,this.name="UnexpectedError",this.stack=e.stack},YUITest.UnexpectedError.prototype=new YUITest.AssertionError,YUITest.UnexpectedError.prototype.constructor=YUITest.UnexpectedError,YUITest.UnexpectedValue=function(e,t){YUITest.AssertionError.call(this,e),this.unexpected=t,this.name="UnexpectedValue"},YUITest.UnexpectedValue.prototype=new YUITest.AssertionError,YUITest.UnexpectedValue.prototype.constructor=YUITest.UnexpectedValue,YUITest.UnexpectedValue.prototype.getMessage=function(){return this.message+"\nUnexpected: "+this.unexpected+" ("+typeof this.unexpected+") "},YUITest.Wait=function(e,t){this.segment=typeof e=="function"?e:null,this.delay=typeof t=="number"?t:0},e.Test=YUITest,e.Object.each(YUITest,function(t,n){var n=n.replace("Test","");e.Test[n]=t})),e.Assert=YUITest.Assert,e.Assert.Error=e.Test.AssertionError,e.Assert.ComparisonFailure=e.Test.ComparisonFailure,e.Assert.UnexpectedValue=e.Test.UnexpectedValue,e.Mock=e.Test.Mock,e.ObjectAssert=e.Test.ObjectAssert,e.ArrayAssert=e.Test.ArrayAssert,e.DateAssert=e.Test.DateAssert,e.Test.ResultsFormat=e.Test.TestFormat;var n=e.Test.ArrayAssert.itemsAreEqual;e.Test.ArrayAssert.itemsAreEqual=function(t,r,i){return n.call(this,e.Array(t),e.Array(r),i)},e.assert=function(t,n){e.Assert._increment();if(!t)throw new e.Assert.Error(e.Assert._formatMessage(n,"Assertion failed."))},e.fail=e.Assert.fail,e.Test.Runner.once=e.Test.Runner.subscribe,e.Test.Runner.disableLogging=function(){e.Test.Runner._log=!1},e.Test.Runner.enableLogging=function(){e.Test.Runner._log=!0},e.Test.Runner._ignoreEmpty=!0,e.Test.Runner._log=!0,e.Test.Runner.on=e.Test.Runner.attach;if(!YUI.YUITest){e.config.win&&(e.config.win.YUITest=YUITest),YUI.YUITest=e.Test;var r=function(t){var n="",r="";switch(t.type){case this.BEGIN_EVENT:n="Testing began at "+(new Date).toString()+".",r="info";break;case this.COMPLETE_EVENT:n=e.Lang.sub("Testing completed at "+(new Date).toString()+".\n"+"Passed:{passed} Failed:{failed} "+"Total:{total} ({ignored} ignored)",t.results),r="info";break;case this.TEST_FAIL_EVENT:n=t.testName+": failed.\n"+t.error.getMessage(),r="fail";break;case this.TEST_IGNORE_EVENT:n=t.testName+": ignored.",r="ignore";break;case this.TEST_PASS_EVENT:n=t.testName+": passed.",r="pass";break;case this.TEST_SUITE_BEGIN_EVENT:n='Test suite "'+t.testSuite.name+'" started.',r="info";break;case this.TEST_SUITE_COMPLETE_EVENT:n=e.Lang.sub('Test suite "'+t.testSuite.name+'" completed'+".\n"+"Passed:{passed} Failed:{failed} "+"Total:{total} ({ignored} ignored)",t.results),r="info";break;case this.TEST_CASE_BEGIN_EVENT:n='Test case "'+t.testCase.name+'" started.',r="info";break;case this.TEST_CASE_COMPLETE_EVENT:n=e.Lang.sub('Test case "'+t.testCase.name+'" completed.\n'+"Passed:{passed} Failed:{failed} "+"Total:{total} ({ignored} ignored)",t.results),r="info";break;default:n="Unexpected event "+t.type,r="info"}e.Test.Runner._log&&e.log(n,r,"TestRunner")},i,s;for(i in e.Test.Runner)s=e.Test.Runner[i],i.indexOf("_EVENT")>-1&&e.Test.Runner.subscribe(s,r)}},"patched-v3.18.0",{requires:["event-simulate","event-custom","json-stringify"]});
YUI.add("async-queue",function(e,t){e.AsyncQueue=function(){this._init(),this.add.apply(this,arguments)};var n=e.AsyncQueue,r="execute",i="shift",s="promote",o="remove",u=e.Lang.isObject,a=e.Lang.isFunction;n.defaults=e.mix({autoContinue:!0,iterations:1,timeout:10,until:function(){return this.iterations|=0,this.iterations<=0}},e.config.queueDefaults||{}),e.extend(n,e.EventTarget,{_running:!1,_init:function(){e.EventTarget.call(this,{prefix:"queue",emitFacade:!0}),this._q=[],this.defaults={},this._initEvents()},_initEvents:function(){this.publish({execute:{defaultFn:this._defExecFn,emitFacade:!0},shift:{defaultFn:this._defShiftFn,emitFacade:!0},add:{defaultFn:this._defAddFn,emitFacade:!0},promote:{defaultFn:this._defPromoteFn,emitFacade:!0},remove:{defaultFn:this._defRemoveFn,emitFacade:!0}})},next:function(){var e;while(this._q.length){e=this._q[0]=this._prepare(this._q[0]);if(!e||!e.until())break;this.fire(i,{callback:e}),e=null}return e||null},_defShiftFn:function(e){this.indexOf(e.callback)===0&&this._q.shift()},_prepare:function(t){if(a(t)&&t._prepared)return t;var r=e.merge(n.defaults,{context:this,args:[],_prepared:!0},this.defaults,a(t)?{fn:t}:t),i=e.bind(function(){i._running||i.iterations--,a(i.fn)&&i.fn.apply(i.context||e,e.Array(i.args))},this);return e.mix(i,r)},run:function(){var e,t=!0;if(this._executing)return this._running=!0,this;for(e=this.next();e&&!this.isRunning();e=this.next()){t=e.timeout<0?this._execute(e):this._schedule(e);if(!t)break}return e||this.fire("complete"),this},_execute:function(e){this._running=e._running=!0,this._executing=e,e.iterations--,this.fire(r,{callback:e});var t=this._running&&e.autoContinue;return this._running=e._running=!1,this._executing=!1,t},_schedule:function(t){return this._running=e.later(t.timeout,this,function(){this._execute(t)&&this.run()}),!1},isRunning:function(){return!!this._running},_defExecFn:function(e){e.callback()},add:function(){return this.fire("add",{callbacks:e.Array(arguments,0,!0)}),this},_defAddFn:function(t){var n=this._q,r=[];e.Array.each(t.callbacks,function(e){u(e)&&(n.push(e),r.push(e))}),t.added=r},pause:function(){return this._running&&u(this._running)&&this._running.cancel(),this._running=!1,this},stop:function(){return this._q=[],this._running&&u(this._running)&&(this._running.cancel(),this._running=!1),this._executing||this.run(),this},indexOf:function(e){var t=0,n=this._q.length,r;for(;t<n;++t){r=this._q[t];if(r===e||r.id===e)return t}return-1},getCallback:function(e){var t=this.indexOf(e);return t>-1?this._q[t]:null},promote:function(e){var t={callback:e},n;return this.isRunning()?n=this.after(i,function(){this.fire(s,t),n.detach()},this):this.fire(s,t),this},_defPromoteFn:function(e){var t=this.indexOf(e.callback),n=t>-1?this._q.splice(t,1)[0]:null;e.promoted=n,n&&this._q.unshift(n)},remove:function(e){var t={callback:e},n;return this.isRunning()?n=this.after(i,function(){this.fire(o,t),n.detach()},this):this.fire(o,t),this},_defRemoveFn:function(e){var t=this.indexOf(e.callback);e.removed=t>-1?this._q.splice(t,1)[0]:null},size:function(){return this.isRunning()||this.next(),this._q.length}})},"patched-v3.18.0",{requires:["event-custom"]});
YUI.add("dom-screen",function(e,t){(function(e){var t="documentElement",n="compatMode",r="position",i="fixed",s="relative",o="left",u="top",a="BackCompat",f="medium",l="borderLeftWidth",c="borderTopWidth",h="getBoundingClientRect",p="getComputedStyle",d=e.DOM,v=/^t(?:able|d|h)$/i,m;e.UA.ie&&(e.config.doc[n]!=="BackCompat"?m=t:m="body"),e.mix(d,{winHeight:function(e){var t=d._getWinSize(e).height;return t},winWidth:function(e){var t=d._getWinSize(e).width;return t},docHeight:function(e){var t=d._getDocSize(e).height;return Math.max(t,d._getWinSize(e).height)},docWidth:function(e){var t=d._getDocSize(e).width;return Math.max(t,d._getWinSize(e).width)},docScrollX:function(n,r){r=r||n?d._getDoc(n):e.config.doc;var i=r.defaultView,s=i?i.pageXOffset:0;return Math.max(r[t].scrollLeft,r.body.scrollLeft,s)},docScrollY:function(n,r){r=r||n?d._getDoc(n):e.config.doc;var i=r.defaultView,s=i?i.pageYOffset:0;return Math.max(r[t].scrollTop,r.body.scrollTop,s)},getXY:function(){return e.config.doc[t][h]?function(r){var i=null,s,o,u,f,l,c,p,v,g,y;if(r&&r.tagName){p=r.ownerDocument,u=p[n],u!==a?y=p[t]:y=p.body,y.contains?g=y.contains(r):g=e.DOM.contains(y,r);if(g){v=p.defaultView,v&&"pageXOffset"in v?(s=v.pageXOffset,o=v.pageYOffset):(s=m?p[m].scrollLeft:d.docScrollX(r,p),o=m?p[m].scrollTop:d.docScrollY(r,p)),e.UA.ie&&(!p.documentMode||p.documentMode<8||u===a)&&(l=y.clientLeft,c=y.clientTop),f=r[h](),i=[f.left,f.top];if(l||c)i[0]-=l,i[1]-=c;if(o||s)if(!e.UA.ios||e.UA.ios>=4.2)i[0]+=s,i[1]+=o}else i=d._getOffset(r)}return i}:function(t){var n=null,s,o,u,a,f;if(t)if(d.inDoc(t)){n=[t.offsetLeft,t.offsetTop],s=t.ownerDocument,o=t,u=e.UA.gecko||e.UA.webkit>519?!0:!1;while(o=o.offsetParent)n[0]+=o.offsetLeft,n[1]+=o.offsetTop,u&&(n=d._calcBorders(o,n));if(d.getStyle(t,r)!=i){o=t;while(o=o.parentNode){a=o.scrollTop,f=o.scrollLeft,e.UA.gecko&&d.getStyle(o,"overflow")!=="visible"&&(n=d._calcBorders(o,n));if(a||f)n[0]-=f,n[1]-=a}n[0]+=d.docScrollX(t,s),n[1]+=d.docScrollY(t,s)}else n[0]+=d.docScrollX(t,s),n[1]+=d.docScrollY(t,s)}else n=d._getOffset(t);return n}}(),getScrollbarWidth:e.cached(function(){var t=e.config.doc,n=t.createElement("div"),r=t.getElementsByTagName("body")[0],i=.1;return r&&(n.style.cssText="position:absolute;visibility:hidden;overflow:scroll;width:20px;",n.appendChild(t.createElement("p")).style.height="1px",r.insertBefore(n,r.firstChild),i=n.offsetWidth-n.clientWidth,r.removeChild(n)),i},null,.1),getX:function(e){return d.getXY(e)[0]},getY:function(e){return d.getXY(e)[1]},setXY:function(e,t,n){var i=d.setStyle,a,f,l,c,h,p,v;e&&t&&(a=d.getStyle(e,r),h=d.OFFSET_XY,h||(p=d.getComputedStyle(e,"direction"),h=p==="rtl"?"right":o),f=d._getOffset(e,h),a=="static"&&(a=s,i(e,r,a)),c=d._getDirXY(e,h),v=t[0],h==="right"&&(v=d.winWidth()-(t[0]+parseInt(d.getComputedStyle(e,"width"),10)),!f[0]&&!n&&(n=!1)),v!==null&&i(e,h,v-c[0]+f[0]+"px"),t[1]!==null&&i(e,u,t[1]-c[1]+f[1]+"px"),n||(l=d.getXY(e),(l[0]!==t[0]||l[1]!==t[1])&&d.setXY(e,t,!0)))},setX:function(e,t){return d.setXY(e,[t,null])},setY:function(e,t){return d.setXY(e,[null,t])},swapXY:function(e,t){var n=d.getXY(e);d.setXY(e,d.getXY(t)),d.setXY(t,n)},_calcBorders:function(t,n){var r=parseInt(d[p](t,c),10)||0,i=parseInt(d[p](t,l),10)||0;return e.UA.gecko&&v.test(t.tagName)&&(r=0,i=0),n[0]+=i,n[1]+=r,n},_getWinSize:function(r,i){i=i||r?d._getDoc(r):e.config.doc;var s=i.defaultView||i.parentWindow,o=i[n],u=s.innerHeight,a=s.innerWidth,f=i[t];return o&&!e.UA.opera&&(o!="CSS1Compat"&&(f=i.body),u=f.clientHeight,a=f.clientWidth),{height:u,width:a}},_getDocSize:function(r){var i=r?d._getDoc(r):e.config.doc,s=i[t];return i[n]!="CSS1Compat"&&(s=i.body),{height:s.scrollHeight,width:s.scrollWidth}},_getDirXY:function(e,t){var n=d.getXY(e);return t==="right"&&(n[0]=d.winWidth()-(n[0]+parseInt(d.getComputedStyle(e,"width"),10))),n}})})(e),function(e){var t="top",n="right",r="bottom",i="left",s=function(e,s){var o=Math.max(e[t],s[t]),u=Math.min(e[n],s[n]),a=Math.min(e[r],s[r]),f=Math.max(e[i],s[i]),l={};return l[t]=o,l[n]=u,l[r]=a,l[i]=f,l},o=e.DOM;e.mix(o,{region:function(e){var t=o.getXY(e),n=!1;return e&&t&&(n=o._getRegion(t[1],t[0]+e.offsetWidth,t[1]+e.offsetHeight,t[0])),n},intersect:function(u,a,f){var l=f||o.region(u),c={},h=a,p;if(h.tagName)c=o.region(h);else{if(!e.Lang.isObject(a))return!1;c=a}return p=s(c,l),{top:p[t],right:p[n],bottom:p[r],left:p[i],area:(p[r]-p[t])*(p[n]-p[i]),yoff:p[r]-p[t],xoff:p[n]-p[i],inRegion:o.inRegion(u,a,!1,f)}},inRegion:function(u,a,f,l){var c={},h=l||o.region(u),p=a,d;if(p.tagName)c=o.region(p);else{if(!e.Lang.isObject(a))return!1;c=a}return f?h[i]>=c[i]&&h[n]<=c[n]&&h[t]>=c[t]&&h[r]<=c[r]:(d=s(c,h),d[r]>=d[t]&&d[n]>=d[i]?!0:!1)},inViewportRegion:function(e,t,n){return o.inRegion(e,o.viewportRegion(e),t,n)},_getRegion:function(e,s,o,u){var a={};return a[t]=a[1]=e,a[i]=a[0]=u,a[r]=o,a[n]=s,a.width=a[n]-a[i],a.height=a[r]-a[t],a},viewportRegion:function(t){t=t||e.config.doc.documentElement;var n=!1,r,i;return t&&(r=o.docScrollX(t),i=o.docScrollY(t),n=o._getRegion(i,o.winWidth(t)+r,i+o.winHeight(t),r)),n}})}(e)},"patched-v3.18.0",{requires:["dom-base","dom-style"]});
YUI.add("node-screen",function(e,t){e.each(["winWidth","winHeight","docWidth","docHeight","docScrollX","docScrollY"],function(t){e.Node.ATTRS[t]={getter:function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e.Node.getDOMNode(this)),e.DOM[t].apply(this,n)}}}),e.Node.ATTRS.scrollLeft={getter:function(){var t=e.Node.getDOMNode(this);return"scrollLeft"in t?t.scrollLeft:e.DOM.docScrollX(t)},setter:function(t){var n=e.Node.getDOMNode(this);n&&("scrollLeft"in n?n.scrollLeft=t:(n.document||n.nodeType===9)&&e.DOM._getWin(n).scrollTo(t,e.DOM.docScrollY(n)))}},e.Node.ATTRS.scrollTop={getter:function(){var t=e.Node.getDOMNode(this);return"scrollTop"in t?t.scrollTop:e.DOM.docScrollY(t)},setter:function(t){var n=e.Node.getDOMNode(this);n&&("scrollTop"in n?n.scrollTop=t:(n.document||n.nodeType===9)&&e.DOM._getWin(n).scrollTo(e.DOM.docScrollX(n),t))}},e.Node.importMethod(e.DOM,["getXY","setXY","getX","setX","getY","setY","swapXY"]),e.Node.ATTRS.region={getter:function(){var t=this.getDOMNode(),n;return t&&!t.tagName&&t.nodeType===9&&(t=t.documentElement),e.DOM.isWindow(t)?n=e.DOM.viewportRegion(t):n=e.DOM.region(t),n}},e.Node.ATTRS.viewportRegion={getter:function(){return e.DOM.viewportRegion(e.Node.getDOMNode(this))}},e.Node.importMethod(e.DOM,"inViewportRegion"),e.Node.prototype.intersect=function(t,n){var r=e.Node.getDOMNode(this);return e.instanceOf(t,e.Node)&&(t=e.Node.getDOMNode(t)),e.DOM.intersect(r,t,n)},e.Node.prototype.inRegion=function(t,n,r){var i=e.Node.getDOMNode(this);return e.instanceOf(t,e.Node)&&(t=e.Node.getDOMNode(t)),e.DOM.inRegion(i,t,n,r)}},"patched-v3.18.0",{requires:["dom-screen","node-base"]});
YUI.add("gesture-simulate",function(e,t){function T(n){n||e.error(t+": invalid target node"),this.node=n,this.target=e.Node.getDOMNode(n);var r=this.node.getXY(),i=this._getDims();a=r[0]+i[0]/2,f=r[1]+i[1]/2}var t="gesture-simulate",n=e.config.win&&"ontouchstart"in e.config.win&&!e.UA.phantomjs&&!(e.UA.chrome&&e.UA.chrome<6),r={tap:1,doubletap:1,press:1,move:1,flick:1,pinch:1,rotate:1},i={touchstart:1,touchmove:1,touchend:1,touchcancel:1},s=e.config.doc,o,u=20,a,f,l={HOLD_TAP:10,DELAY_TAP:10,HOLD_PRESS:3e3,MIN_HOLD_PRESS:1e3,MAX_HOLD_PRESS:6e4,DISTANCE_MOVE:200,DURATION_MOVE:1e3,MAX_DURATION_MOVE:5e3,MIN_VELOCITY_FLICK:1.3,DISTANCE_FLICK:200,DURATION_FLICK:1e3,MAX_DURATION_FLICK:5e3,DURATION_PINCH:1e3},c="touchstart",h="touchmove",p="touchend",d="gesturestart",v="gesturechange",m="gestureend",g="mouseup",y="mousemove",b="mousedown",w="click",E="dblclick",S="x",x="y";T.prototype={_toRadian:function(e){return e*(Math.PI/180)},_getDims:function(){var e,t,n;return this.target.getBoundingClientRect?(e=this.target.getBoundingClientRect(),"height"in e?n=e.height:n=Math.abs(e.bottom-e.top),"width"in e?t=e.width:t=Math.abs(e.right-e.left)):(e=this.node.get("region"),t=e.width,n=e.height),[t,n]},_calculateDefaultPoint:function(t){var n;return!e.Lang.isArray(t)||t.length===0?t=[a,f]:(t.length==1&&(n=this._getDims[1],t[1]=n/2),t[0]=this.node.getX()+t[0],t[1]=this.node.getY()+t[1]),t},rotate:function(n,r,i,s,o,u,a){var f,l=i,c=s;if(!e.Lang.isNumber(l)||!e.Lang.isNumber(c)||l<0||c<0)f=this.target.offsetWidth<this.target.offsetHeight?this.target.offsetWidth/4:this.target.offsetHeight/4,l=f,c=f;e.Lang.isNumber(a)||e.error(t+"Invalid rotation detected."),this.pinch(n,r,l,c,o,u,a)},pinch:function(n,r,i,s,o,a,f){var g,y,b=u,w,E=0,S=i,x=s,T,N,C,k,L,A,O,M,_,D={start:[],end:[]},P={start:[],end:[]},H,B;r=this._calculateDefaultPoint(r),(!e.Lang.isNumber(S)||!e.Lang.isNumber(x)||S<0||x<0)&&e.error(t+"Invalid startRadius and endRadius detected.");if(!e.Lang.isNumber(o)||o<=0)o=l.DURATION_PINCH;if(!e.Lang.isNumber(a))a=0;else{a%=360;while(a<0)a+=360}e.Lang.isNumber(f)||(f=0),e.AsyncQueue.defaults.timeout=b,g=new e.AsyncQueue,N=r[0],C=r[1],O=a,M=a+f,D.start=[N+S*Math.sin(this._toRadian(O)),C-S*Math.cos(this._toRadian(O))],D.end=[N+x*Math.sin(this._toRadian(M)),C-x*Math.cos(this._toRadian(M))],P.start=[N-S*Math.sin(this._toRadian(O)),C+S*Math.cos(this._toRadian(O))],P.end=[N-x*Math.sin(this._toRadian(M)),C+x*Math.cos(this._toRadian(M))],k=1,L=s/i,g.add({fn:function(){var t,n,r,i;t={pageX:D.start[0],pageY:D.start[1],clientX:D.start[0],clientY:D.start[1]},n={pageX:P.start[0],pageY:P.start[1],clientX:P.start[0],clientY:P.start[1]},i=this._createTouchList([e.merge({identifier:E++},t),e.merge({identifier:E++},n)]),r={pageX:(D.start[0]+P.start[0])/2,pageY:(D.start[0]+P.start[1])/2,clientX:(D.start[0]+P.start[0])/2,clientY:(D.start[0]+P.start[1])/2},this._simulateEvent(this.target,c,e.merge({touches:i,targetTouches:i,changedTouches:i,scale:k,rotation:O},r)),e.UA.ios>=2&&this._simulateEvent(this.target,d,e.merge({scale:k,rotation:O},r))},timeout:0,context:this}),H=Math.floor(o/b),T=(x-S)/H,A=(L-k)/H,_=(M-O)/H,B=function(t){var n=S+T*t,r=N+n*Math.sin(this._toRadian(O+_*t)),i=C-n*Math.cos(this._toRadian(O+_*t)),s=N-n*Math.sin(this._toRadian(O+_*t)),o=C+n*Math.cos(this._toRadian(O+_*t)),u=(r+s)/2,a=(i+o)/2,f,l,c,p;f={pageX:r,pageY:i,clientX:r,clientY:i},l={pageX:s,pageY:o,clientX:s,clientY:o},p=this._createTouchList([e.merge({identifier:E++},f),e.merge({identifier:E++},l)]),c={pageX:u,pageY:a,clientX:u,clientY:a},this._simulateEvent(this.target,h,e.merge({touches:p,targetTouches:p,changedTouches:p,scale:k+A*t,rotation:O+_*t},c)),e.UA.ios>=2&&this._simulateEvent(this.target,v,e.merge({scale:k+A*t,rotation:O+_*t},c))};for(y=0;y<H;y++)g.add({fn:B,args:[y],context:this});g.add({fn:function(){var t=this._getEmptyTouchList(),n,r,i,s;n={pageX:D.end[0],pageY:D.end[1],clientX:D.end[0],clientY:D.end[1]},r={pageX:P.end[0],pageY:P.end[1],clientX:P.end[0],clientY:P.end[1]},s=this._createTouchList([e.merge({identifier:E++},n),e.merge({identifier:E++},r)]),i={pageX:(D.end[0]+P.end[0])/2,pageY:(D.end[0]+P.end[1])/2,clientX:(D.end[0]+P.end[0])/2,clientY:(D.end[0]+P.end[1])/2},e.UA.ios>=2&&this._simulateEvent(this.target,m,e.merge({scale:L,rotation:M},i)),this._simulateEvent(this.target,p,e.merge({touches:t,targetTouches:t,changedTouches:s,scale:L,rotation:M},i))},context:this}),n&&e.Lang.isFunction(n)&&g.add({fn:n,context:this.node}),g.run()},tap:function(t,r,i,s,o){var u=new e.AsyncQueue,a=this._getEmptyTouchList(),f,h,d,v,m;r=this._calculateDefaultPoint(r);if(!e.Lang.isNumber(i)||i<1)i=1;e.Lang.isNumber(s)||(s=l.HOLD_TAP),e.Lang.isNumber(o)||(o=l.DELAY_TAP),h={pageX:r[0],pageY:r[1],clientX:r[0],clientY:r[1]},f=this._createTouchList([e.merge({identifier:0},h)]),v=function(){this._simulateEvent(this.target,c,e.merge({touches:f,targetTouches:f,changedTouches:f},h))},m=function(){this._simulateEvent(this.target,p,e.merge({touches:a,targetTouches:a,changedTouches:f},h))};for(d=0;d<i;d++)u.add({fn:v,context:this,timeout:d===0?0:o}),u.add({fn:m,context:this,timeout:s});i>1&&!n&&u.add({fn:function(){this._simulateEvent(this.target,E,h)},context:this}),t&&e.Lang.isFunction(t)&&u.add({fn:t,context:this.node}),u.run()},flick:function(n,r,i,s,o){var u;r=this._calculateDefaultPoint(r),e.Lang.isString(i)?(i=i.toLowerCase(),i!==S&&i!==x&&e.error(t+"(flick): Only x or y axis allowed")):i=S,e.Lang.isNumber(s)||(s=l.DISTANCE_FLICK),e.Lang.isNumber(o)?o>l.MAX_DURATION_FLICK&&(o=l.MAX_DURATION_FLICK):o=l.DURATION_FLICK,Math.abs(s)/o<l.MIN_VELOCITY_FLICK&&(o=Math.abs(s)/l.MIN_VELOCITY_FLICK),u={start:e.clone(r),end:[i===S?r[0]+s:r[0],i===x?r[1]+s:r[1]]},this._move(n,u,o)},move:function(t,n,r){var i;e.Lang.isObject(n)?(e.Lang.isArray(n.point)?n.point=this._calculateDefaultPoint(n.point):n.point=this._calculateDefaultPoint([]),e.Lang.isNumber(n.xdist)||(n.xdist=l.DISTANCE_MOVE),e.Lang.isNumber(n.ydist)||(n.ydist=0)):n={point:this._calculateDefaultPoint([]),xdist:l.
DISTANCE_MOVE,ydist:0},e.Lang.isNumber(r)?r>l.MAX_DURATION_MOVE&&(r=l.MAX_DURATION_MOVE):r=l.DURATION_MOVE,i={start:e.clone(n.point),end:[n.point[0]+n.xdist,n.point[1]+n.ydist]},this._move(t,i,r)},_move:function(t,n,r){var i,s,o=u,d,v,m,g=0,y;e.Lang.isNumber(r)?r>l.MAX_DURATION_MOVE&&(r=l.MAX_DURATION_MOVE):r=l.DURATION_MOVE,e.Lang.isObject(n)?(e.Lang.isArray(n.start)||(n.start=[a,f]),e.Lang.isArray(n.end)||(n.end=[a+l.DISTANCE_MOVE,f])):n={start:[a,f],end:[a+l.DISTANCE_MOVE,f]},e.AsyncQueue.defaults.timeout=o,i=new e.AsyncQueue,i.add({fn:function(){var t={pageX:n.start[0],pageY:n.start[1],clientX:n.start[0],clientY:n.start[1]},r=this._createTouchList([e.merge({identifier:g++},t)]);this._simulateEvent(this.target,c,e.merge({touches:r,targetTouches:r,changedTouches:r},t))},timeout:0,context:this}),d=Math.floor(r/o),v=(n.end[0]-n.start[0])/d,m=(n.end[1]-n.start[1])/d,y=function(t){var r=n.start[0]+v*t,i=n.start[1]+m*t,s={pageX:r,pageY:i,clientX:r,clientY:i},o=this._createTouchList([e.merge({identifier:g++},s)]);this._simulateEvent(this.target,h,e.merge({touches:o,targetTouches:o,changedTouches:o},s))};for(s=0;s<d;s++)i.add({fn:y,args:[s],context:this});i.add({fn:function(){var t={pageX:n.end[0],pageY:n.end[1],clientX:n.end[0],clientY:n.end[1]},r=this._createTouchList([e.merge({identifier:g},t)]);this._simulateEvent(this.target,h,e.merge({touches:r,targetTouches:r,changedTouches:r},t))},timeout:0,context:this}),i.add({fn:function(){var t={pageX:n.end[0],pageY:n.end[1],clientX:n.end[0],clientY:n.end[1]},r=this._getEmptyTouchList(),i=this._createTouchList([e.merge({identifier:g},t)]);this._simulateEvent(this.target,p,e.merge({touches:r,targetTouches:r,changedTouches:i},t))},context:this}),t&&e.Lang.isFunction(t)&&i.add({fn:t,context:this.node}),i.run()},_getEmptyTouchList:function(){return o||(o=this._createTouchList([])),o},_createTouchList:function(n){var r=[],i,o=this;return!!n&&e.Lang.isArray(n)?e.UA.android&&e.UA.android>=4||e.UA.ios&&e.UA.ios>=2?(e.each(n,function(t){t.identifier||(t.identifier=0),t.pageX||(t.pageX=0),t.pageY||(t.pageY=0),t.screenX||(t.screenX=0),t.screenY||(t.screenY=0),r.push(s.createTouch(e.config.win,o.target,t.identifier,t.pageX,t.pageY,t.screenX,t.screenY))}),i=s.createTouchList.apply(s,r)):e.UA.ios&&e.UA.ios<2?e.error(t+": No touch event simulation framework present."):(i=[],e.each(n,function(e){e.identifier||(e.identifier=0),e.clientX||(e.clientX=0),e.clientY||(e.clientY=0),e.pageX||(e.pageX=0),e.pageY||(e.pageY=0),e.screenX||(e.screenX=0),e.screenY||(e.screenY=0),i.push({target:o.target,identifier:e.identifier,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY})}),i.item=function(e){return i[e]}):e.error(t+": Invalid touchPoints passed"),i},_simulateEvent:function(t,r,s){var o;i[r]?n?e.Event.simulate(t,r,s):this._isSingleTouch(s.touches,s.targetTouches,s.changedTouches)?(r={touchstart:b,touchmove:y,touchend:g}[r],s.button=0,s.relatedTarget=null,o=r===g?s.changedTouches:s.touches,s=e.mix(s,{screenX:o.item(0).screenX,screenY:o.item(0).screenY,clientX:o.item(0).clientX,clientY:o.item(0).clientY},!0),e.Event.simulate(t,r,s),r==g&&e.Event.simulate(t,w,s)):e.error("_simulateEvent(): Event '"+r+"' has multi touch objects that can't be simulated in your platform."):e.Event.simulate(t,r,s)},_isSingleTouch:function(e,t,n){return e&&e.length<=1&&t&&t.length<=1&&n&&n.length<=1}},e.GestureSimulation=T,e.GestureSimulation.defaults=l,e.GestureSimulation.GESTURES=r,e.Event.simulateGesture=function(n,i,s,o){n=e.one(n);var u=new e.GestureSimulation(n);i=i.toLowerCase(),!o&&e.Lang.isFunction(s)&&(o=s,s={}),s=s||{};if(r[i])switch(i){case"tap":u.tap(o,s.point,s.times,s.hold,s.delay);break;case"doubletap":u.tap(o,s.point,2);break;case"press":e.Lang.isNumber(s.hold)?s.hold<l.MIN_HOLD_PRESS?s.hold=l.MIN_HOLD_PRESS:s.hold>l.MAX_HOLD_PRESS&&(s.hold=l.MAX_HOLD_PRESS):s.hold=l.HOLD_PRESS,u.tap(o,s.point,1,s.hold);break;case"move":u.move(o,s.path,s.duration);break;case"flick":u.flick(o,s.point,s.axis,s.distance,s.duration);break;case"pinch":u.pinch(o,s.center,s.r1,s.r2,s.duration,s.start,s.rotation);break;case"rotate":u.rotate(o,s.center,s.r1,s.r2,s.duration,s.start,s.rotation)}else e.error(t+": Not a supported gesture simulation: "+i)}},"patched-v3.18.0",{requires:["async-queue","event-simulate","node-screen"]});
YUI.add("node-event-simulate",function(e,t){e.Node.prototype.simulate=function(t,n){e.Event.simulate(e.Node.getDOMNode(this),t,n)},e.Node.prototype.simulateGesture=function(t,n,r){e.Event.simulateGesture(this,t,n,r)}},"patched-v3.18.0",{requires:["node-base","event-simulate","gesture-simulate"]});
YUI.add("node-event-delegate",function(e,t){e.Node.prototype.delegate=function(t){var n=e.Array(arguments,0,!0),r=e.Lang.isObject(t)&&!e.Lang.isArray(t)?1:2;return n.splice(r,0,this._node),e.delegate.apply(e,n)}},"patched-v3.18.0",{requires:["node-base","event-delegate"]});
YUI.add("pluginhost-base",function(e,t){function r(){this._plugins={}}var n=e.Lang;r.prototype={plug:function(e,t){var r,i,s;if(n.isArray(e))for(r=0,i=e.length;r<i;r++)this.plug(e[r]);else e&&!n.isFunction(e)&&(t=e.cfg,e=e.fn),e&&e.NS&&(s=e.NS,t=t||{},t.host=this,this.hasPlugin(s)?this[s].setAttrs&&this[s].setAttrs(t):(this[s]=new e(t),this._plugins[s]=e));return this},unplug:function(e){var t=e,r=this._plugins;if(e)n.isFunction(e)&&(t=e.NS,t&&(!r[t]||r[t]!==e)&&(t=null)),t&&(this[t]&&(this[t].destroy&&this[t].destroy(),delete this[t]),r[t]&&delete r[t]);else for(t in this._plugins)this._plugins.hasOwnProperty(t)&&this.unplug(t);return this},hasPlugin:function(e){return this._plugins[e]&&this[e]},_initPlugins:function(e){this._plugins=this._plugins||{},this._initConfigPlugins&&this._initConfigPlugins(e)},_destroyPlugins:function(){this.unplug()}},e.namespace("Plugin").Host=r},"patched-v3.18.0",{requires:["yui-base"]});
YUI.add("pluginhost-config",function(e,t){var n=e.Plugin.Host,r=e.Lang;n.prototype._initConfigPlugins=function(t){var n=this._getClasses?this._getClasses():[this.constructor],r=[],i={},s,o,u,a,f;for(o=n.length-1;o>=0;o--)s=n[o],a=s._UNPLUG,a&&e.mix(i,a,!0),u=s._PLUG,u&&e.mix(r,u,!0);for(f in r)r.hasOwnProperty(f)&&(i[f]||this.plug(r[f]));t&&t.plugins&&this.plug(t.plugins)},n.plug=function(t,n,i){var s,o,u,a;if(t!==e.Base){t._PLUG=t._PLUG||{},r.isArray(n)||(i&&(n={fn:n,cfg:i}),n=[n]);for(o=0,u=n.length;o<u;o++)s=n[o],a=s.NAME||s.fn.NAME,t._PLUG[a]=s}},n.unplug=function(t,n){var i,s,o,u;if(t!==e.Base){t._UNPLUG=t._UNPLUG||{},r.isArray(n)||(n=[n]);for(s=0,o=n.length;s<o;s++)i=n[s],u=i.NAME,t._PLUG[u]?delete t._PLUG[u]:t._UNPLUG[u]=i}}},"patched-v3.18.0",{requires:["pluginhost-base"]});
YUI.add("node-pluginhost",function(e,t){e.Node.plug=function(){var t=e.Array(arguments);return t.unshift(e.Node),e.Plugin.Host.plug.apply(e.Base,t),e.Node},e.Node.unplug=function(){var t=e.Array(arguments);return t.unshift(e.Node),e.Plugin.Host.unplug.apply(e.Base,t),e.Node},e.mix(e.Node,e.Plugin.Host,!1,null,1),e.Object.each(e.Node._instances,function(t){e.Plugin.Host.apply(t)}),e.NodeList.prototype.plug=function(){var t=arguments;return e.NodeList.each(this,function(n){e.Node.prototype.plug.apply(e.one(n),t)}),this},e.NodeList.prototype.unplug=function(){var t=arguments;return e.NodeList.each(this,function(n){e.Node.prototype.unplug.apply(e.one(n),t)}),this}},"patched-v3.18.0",{requires:["node-base","pluginhost"]});
YUI.add("node-style",function(e,t){(function(e){e.mix(e.Node.prototype,{setStyle:function(t,n){return e.DOM.setStyle(this._node,t,n),this},setStyles:function(t){return e.DOM.setStyles(this._node,t),this},getStyle:function(t){return e.DOM.getStyle(this._node,t)},getComputedStyle:function(t){return e.DOM.getComputedStyle(this._node,t)}}),e.NodeList.importMethod(e.Node.prototype,["getStyle","getComputedStyle","setStyle","setStyles"])})(e);var n=e.Node;e.mix(n.prototype,{show:function(e){return e=arguments[arguments.length-1],this.toggleView(!0,e),this},_show:function(){this.removeAttribute("hidden"),this.setStyle("display","")},_isHidden:function(){return this.hasAttribute("hidden")||e.DOM.getComputedStyle(this._node,"display")==="none"},toggleView:function(e,t){return this._toggleView.apply(this,arguments),this},_toggleView:function(e,t){return t=arguments[arguments.length-1],typeof e!="boolean"&&(e=this._isHidden()?1:0),e?this._show():this._hide(),typeof t=="function"&&t.call(this),this},hide:function(e){return e=arguments[arguments.length-1],this.toggleView(!1,e),this},_hide:function(){this.setAttribute("hidden","hidden"),this.setStyle("display","none")}}),e.NodeList.importMethod(e.Node.prototype,["show","hide","toggleView"])},"patched-v3.18.0",{requires:["dom-style","node-base"]});
YUI.add("attribute-core",function(e,t){function b(e,t,n){this._yuievt=null,this._initAttrHost(e,t,n)}e.State=function(){this.data={}},e.State.prototype={add:function(e,t,n){var r=this.data[e];r||(r=this.data[e]={}),r[t]=n},addAll:function(e,t){var n=this.data[e],r;n||(n=this.data[e]={});for(r in t)t.hasOwnProperty(r)&&(n[r]=t[r])},remove:function(e,t){var n=this.data[e];n&&delete n[t]},removeAll:function(t,n){var r;n?e.each(n,function(e,n){this.remove(t,typeof n=="string"?n:e)},this):(r=this.data,t in r&&delete r[t])},get:function(e,t){var n=this.data[e];if(n)return n[t]},getAll:function(e,t){var n=this.data[e],r,i;if(t)i=n;else if(n){i={};for(r in n)n.hasOwnProperty(r)&&(i[r]=n[r])}return i}};var n=e.Object,r=e.Lang,i=".",s="getter",o="setter",u="readOnly",a="writeOnce",f="initOnly",l="validator",c="value",h="valueFn",p="lazyAdd",d="added",v="_bypassProxy",m="initValue",g="lazy",y;b.INVALID_VALUE={},y=b.INVALID_VALUE,b._ATTR_CFG=[o,s,l,c,h,a,u,p,v],b.protectAttrs=function(t){if(t){t=e.merge(t);for(var n in t)t.hasOwnProperty(n)&&(t[n]=e.merge(t[n]))}return t},b.prototype={_initAttrHost:function(t,n,r){this._state=new e.State,this._initAttrs(t,n,r)},addAttr:function(e,t,n){var r=this,i=r._state,s=i.data,o,u,a;t=t||{},p in t&&(n=t[p]),u=i.get(e,d);if(n&&!u)i.data[e]={lazy:t,added:!0};else if(!u||t.isLazyAdd)a=c in t,a&&(o=t.value,t.value=undefined),t.added=!0,t.initializing=!0,s[e]=t,a&&r.set(e,o),t.initializing=!1;return r},attrAdded:function(e){return!!this._state.get(e,d)},get:function(e){return this._getAttr(e)},_isLazyAttr:function(e){return this._state.get(e,g)},_addLazyAttr:function(e,t){var n=this._state;t=t||n.get(e,g),t&&(n.data[e].lazy=undefined,t.isLazyAdd=!0,this.addAttr(e,t))},set:function(e,t,n){return this._setAttr(e,t,n)},_set:function(e,t,n){return this._setAttr(e,t,n,!0)},_setAttr:function(t,r,s,o){var u=!0,a=this._state,l=this._stateProxy,c=this._tCfgs,h,p,d,v,m,g,y;return t.indexOf(i)!==-1&&(d=t,v=t.split(i),t=v.shift()),c&&c[t]&&this._addOutOfOrder(t,c[t]),h=a.data[t]||{},h.lazy&&(h=h.lazy,this._addLazyAttr(t,h)),p=h.value===undefined,l&&t in l&&!h._bypassProxy&&(p=!1),g=h.writeOnce,y=h.initializing,!p&&!o&&(g&&(u=!1),h.readOnly&&(u=!1)),!y&&!o&&g===f&&(u=!1),u&&(p||(m=this.get(t)),v&&(r=n.setValue(e.clone(m),v,r),r===undefined&&(u=!1)),u&&(!this._fireAttrChange||y?this._setAttrVal(t,d,m,r,s,h):this._fireAttrChange(t,d,m,r,s,h))),this},_addOutOfOrder:function(e,t){var n={};n[e]=t,delete this._tCfgs[e],this._addAttrs(n,this._tVals)},_getAttr:function(e){var t=e,r=this._tCfgs,s,o,u,a;return e.indexOf(i)!==-1&&(s=e.split(i),e=s.shift()),r&&r[e]&&this._addOutOfOrder(e,r[e]),a=this._state.data[e]||{},a.lazy&&(a=a.lazy,this._addLazyAttr(e,a)),u=this._getStateVal(e,a),o=a.getter,o&&!o.call&&(o=this[o]),u=o?o.call(this,u,t):u,u=s?n.getValue(u,s):u,u},_getStateVal:function(e,t){var n=this._stateProxy;return t||(t=this._state.getAll(e)||{}),n&&e in n&&!t._bypassProxy?n[e]:t.value},_setStateVal:function(e,t){var n=this._stateProxy;n&&e in n&&!this._state.get(e,v)?n[e]=t:this._state.add(e,c,t)},_setAttrVal:function(e,t,n,i,s,o){var u=this,a=!0,f=o||this._state.data[e]||{},l=f.validator,c=f.setter,h=f.initializing,p=this._getStateVal(e,f),d=t||e,v,g;return l&&(l.call||(l=this[l]),l&&(g=l.call(u,i,d,s),!g&&h&&(i=f.defaultValue,g=!0))),!l||g?(c&&(c.call||(c=this[c]),c&&(v=c.call(u,i,d,s),v===y?h?i=f.defaultValue:a=!1:v!==undefined&&(i=v))),a&&(!t&&i===p&&!r.isObject(i)?a=!1:(m in f||(f.initValue=i),u._setStateVal(e,i)))):a=!1,a},setAttrs:function(e,t){return this._setAttrs(e,t)},_setAttrs:function(e,t){var n;for(n in e)e.hasOwnProperty(n)&&this.set(n,e[n],t);return this},getAttrs:function(e){return this._getAttrs(e)},_getAttrs:function(e){var t={},r,i,s,o=e===!0;if(!e||o)e=n.keys(this._state.data);for(i=0,s=e.length;i<s;i++){r=e[i];if(!o||this._getStateVal(r)!=this._state.get(r,m))t[r]=this.get(r)}return t},addAttrs:function(e,t,n){return e&&(this._tCfgs=e,this._tVals=t?this._normAttrVals(t):null,this._addAttrs(e,this._tVals,n),this._tCfgs=this._tVals=null),this},_addAttrs:function(e,t,n){var r=this._tCfgs,i=this._tVals,s,o,u;for(s in e)e.hasOwnProperty(s)&&(o=e[s],o.defaultValue=o.value,u=this._getAttrInitVal(s,o,i),u!==undefined&&(o.value=u),r[s]&&(r[s]=undefined),this.addAttr(s,o,n))},_protectAttrs:b.protectAttrs,_normAttrVals:function(e){var t,n,r,s,o,u;if(!e)return null;t={};for(u in e)e.hasOwnProperty(u)&&(u.indexOf(i)!==-1?(r=u.split(i),s=r.shift(),n=n||{},o=n[s]=n[s]||[],o[o.length]={path:r,value:e[u]}):t[u]=e[u]);return{simple:t,complex:n}},_getAttrInitVal:function(e,t,r){var i=t.value,s=t.valueFn,o,u=!1,a=t.readOnly,f,l,c,h,p,d,v;!a&&r&&(f=r.simple,f&&f.hasOwnProperty(e)&&(i=f[e],u=!0)),s&&!u&&(s.call||(s=this[s]),s&&(o=s.call(this,e),i=o));if(!a&&r){l=r.complex;if(l&&l.hasOwnProperty(e)&&i!==undefined&&i!==null){v=l[e];for(c=0,h=v.length;c<h;++c)p=v[c].path,d=v[c].value,n.setValue(i,p,d)}}return i},_initAttrs:function(t,n,r){t=t||this.constructor.ATTRS;var i=e.Base,s=e.BaseCore,o=i&&e.instanceOf(this,i),u=!o&&s&&e.instanceOf(this,s);t&&!o&&!u&&this.addAttrs(e.AttributeCore.protectAttrs(t),n,r)}},e.AttributeCore=b},"patched-v3.18.0",{requires:["oop"]});
YUI.add("attribute-observable",function(e,t){function s(){this._ATTR_E_FACADE={},n.call(this,{emitFacade:!0})}var n=e.EventTarget,r="Change",i="broadcast";s._ATTR_CFG=[i],s.prototype={set:function(e,t,n){return this._setAttr(e,t,n)},_set:function(e,t,n){return this._setAttr(e,t,n,!0)},setAttrs:function(e,t){return this._setAttrs(e,t)},_setAttrs:function(e,t){var n;for(n in e)e.hasOwnProperty(n)&&this.set(n,e[n],t);return this},_fireAttrChange:function(t,n,i,s,o,u){var a=this,f=this._getFullType(t+r),l=a._state,c,h,p;u||(u=l.data[t]||{}),u.published||(p=a._publish(f),p.emitFacade=!0,p.defaultTargetOnly=!0,p.defaultFn=a._defAttrChangeFn,h=u.broadcast,h!==undefined&&(p.broadcast=h),u.published=!0),o?(c=e.merge(o),c._attrOpts=o):c=a._ATTR_E_FACADE,c.attrName=t,c.subAttrName=n,c.prevVal=i,c.newVal=s,a._hasPotentialSubscribers(f)?a.fire(f,c):this._setAttrVal(t,n,i,s,o,u)},_defAttrChangeFn:function(e,t){var n=e._attrOpts;n&&delete e._attrOpts,this._setAttrVal(e.attrName,e.subAttrName,e.prevVal,e.newVal,n)?t||(e.newVal=this.get(e.attrName)):t||e.stopImmediatePropagation()}},e.mix(s,n,!1,null,1),e.AttributeObservable=s,e.AttributeEvents=s},"patched-v3.18.0",{requires:["event-custom"]});
YUI.add("attribute-extras",function(e,t){function o(){}var n="broadcast",r="published",i="initValue",s={readOnly:1,writeOnce:1,getter:1,broadcast:1};o.prototype={modifyAttr:function(e,t){var i=this,o,u;if(i.attrAdded(e)){i._isLazyAttr(e)&&i._addLazyAttr(e),u=i._state;for(o in t)s[o]&&t.hasOwnProperty(o)&&(u.add(e,o,t[o]),o===n&&u.remove(e,r))}},removeAttr:function(e){this._state.removeAll(e)},reset:function(t){var n=this;return t?(n._isLazyAttr(t)&&n._addLazyAttr(t),n.set(t,n._state.get(t,i))):e.Object.each(n._state.data,function(e,t){n.reset(t)}),n},_getAttrCfg:function(t){var n,r=this._state;return t?n=r.getAll(t)||{}:(n={},e.each(r.data,function(e,t){n[t]=r.getAll(t)})),n}},e.AttributeExtras=o},"patched-v3.18.0",{requires:["oop"]});
YUI.add("attribute-base",function(e,t){function n(){e.AttributeCore.apply(this,arguments),e.AttributeObservable.apply(this,arguments),e.AttributeExtras.apply(this,arguments)}e.mix(n,e.AttributeCore,!1,null,1),e.mix(n,e.AttributeExtras,!1,null,1),e.mix(n,e.AttributeObservable,!0,null,1),n.INVALID_VALUE=e.AttributeCore.INVALID_VALUE,n._ATTR_CFG=e.AttributeCore._ATTR_CFG.concat(e.AttributeObservable._ATTR_CFG),n.protectAttrs=e.AttributeCore.protectAttrs,e.Attribute=n},"patched-v3.18.0",{requires:["attribute-core","attribute-observable","attribute-extras"]});
YUI.add("base-core",function(e,t){function v(e){this._BaseInvoked||(this._BaseInvoked=!0,this._initBase(e))}var n=e.Object,r=e.Lang,i=".",s="initialized",o="destroyed",u="initializer",a="value",f=Object.prototype.constructor,l="deep",c="shallow",h="destructor",p=e.AttributeCore,d=function(e,t,n){var r;for(r in t)n[r]&&(e[r]=t[r]);return e};v._ATTR_CFG=p._ATTR_CFG.concat("cloneDefaultValue"),v._NON_ATTRS_CFG=["plugins"],v.NAME="baseCore",v.ATTRS={initialized:{readOnly:!0,value:!1},destroyed:{readOnly:!0,value:!1}},v.modifyAttrs=function(t,n){typeof t!="function"&&(n=t,t=this);var r,i,s;r=t.ATTRS||(t.ATTRS={});if(n){t._CACHED_CLASS_DATA=null;for(s in n)n.hasOwnProperty(s)&&(i=r[s]||(r[s]={}),e.mix(i,n[s],!0))}},v.prototype={_initBase:function(t){e.stamp(this),this._initAttribute(t);var n=e.Plugin&&e.Plugin.Host;this._initPlugins&&n&&n.call(this),this._lazyAddAttrs!==!1&&(this._lazyAddAttrs=!0),this.name=this.constructor.NAME,this.init.apply(this,arguments)},_initAttribute:function(){p.call(this)},init:function(e){return this._baseInit(e),this},_baseInit:function(e){this._initHierarchy(e),this._initPlugins&&this._initPlugins(e),this._set(s,!0)},destroy:function(){return this._baseDestroy(),this},_baseDestroy:function(){this._destroyPlugins&&this._destroyPlugins(),this._destroyHierarchy(),this._set(o,!0)},_getClasses:function(){return this._classes||this._initHierarchyData(),this._classes},_getAttrCfgs:function(){return this._attrs||this._initHierarchyData(),this._attrs},_getInstanceAttrCfgs:function(e){var t={},r,i,s,o,u,a,f,l=e._subAttrs,c=this._attrCfgHash();for(a in e)if(e.hasOwnProperty(a)&&a!=="_subAttrs"){f=e[a],r=t[a]=d({},f,c),i=r.value,i&&typeof i=="object"&&this._cloneDefaultValue(a,r);if(l&&l.hasOwnProperty(a)){o=e._subAttrs[a];for(u in o)s=o[u],s.path&&n.setValue(r.value,s.path,s.value)}}return t},_filterAdHocAttrs:function(e,t){var n,r=this._nonAttrs,i;if(t){n={};for(i in t)!e[i]&&!r[i]&&t.hasOwnProperty(i)&&(n[i]={value:t[i]})}return n},_initHierarchyData:function(){var e=this.constructor,t=e._CACHED_CLASS_DATA,n,r,i,s,o,u=!e._ATTR_CFG_HASH,a,f={},l=[],c=[];n=e;if(!t){while(n){l[l.length]=n,n.ATTRS&&(c[c.length]=n.ATTRS);if(u){s=n._ATTR_CFG,o=o||{};if(s)for(r=0,i=s.length;r<i;r+=1)o[s[r]]=!0}a=n._NON_ATTRS_CFG;if(a)for(r=0,i=a.length;r<i;r++)f[a[r]]=!0;n=n.superclass?n.superclass.constructor:null}u&&(e._ATTR_CFG_HASH=o),t=e._CACHED_CLASS_DATA={classes:l,nonAttrs:f,attrs:this._aggregateAttrs(c)}}this._classes=t.classes,this._attrs=t.attrs,this._nonAttrs=t.nonAttrs},_attrCfgHash:function(){return this.constructor._ATTR_CFG_HASH},_cloneDefaultValue:function(t,n){var i=n.value,s=n.cloneDefaultValue;s===l||s===!0?n.value=e.clone(i):s===c?n.value=e.merge(i):s===undefined&&(f===i.constructor||r.isArray(i))&&(n.value=e.clone(i))},_aggregateAttrs:function(e){var t,n,r,s,o,u,f=this._attrCfgHash(),l,c={};if(e)for(u=e.length-1;u>=0;--u){n=e[u];for(t in n)n.hasOwnProperty(t)&&(s=d({},n[t],f),o=null,t.indexOf(i)!==-1&&(o=t.split(i),t=o.shift()),l=c[t],o&&l&&l.value?(r=c._subAttrs,r||(r=c._subAttrs={}),r[t]||(r[t]={}),r[t][o.join(i)]={value:s.value,path:o}):o||(l?(l.valueFn&&a in s&&(l.valueFn=null),d(l,s,f)):c[t]=s))}return c},_initHierarchy:function(e){var t=this._lazyAddAttrs,n,r,i,s,o,a,f,l,c,h,p,d=[],v=this._getClasses(),m=this._getAttrCfgs(),g=v.length-1;for(o=g;o>=0;o--){n=v[o],r=n.prototype,h=n._yuibuild&&n._yuibuild.exts,r.hasOwnProperty(u)&&(d[d.length]=r.initializer);if(h)for(a=0,f=h.length;a<f;a++)l=h[a],l.apply(this,arguments),c=l.prototype,c.hasOwnProperty(u)&&(d[d.length]=c.initializer)}p=this._getInstanceAttrCfgs(m),this._preAddAttrs&&this._preAddAttrs(p,e,t),this._allowAdHocAttrs&&this.addAttrs(this._filterAdHocAttrs(m,e),e,t),this.addAttrs(p,e,t);for(i=0,s=d.length;i<s;i++)d[i].apply(this,arguments)},_destroyHierarchy:function(){var e,t,n,r,i,s,o,u,a=this._getClasses();for(n=0,r=a.length;n<r;n++){e=a[n],t=e.prototype,o=e._yuibuild&&e._yuibuild.exts;if(o)for(i=0,s=o.length;i<s;i++)u=o[i].prototype,u.hasOwnProperty(h)&&u.destructor.apply(this,arguments);t.hasOwnProperty(h)&&t.destructor.apply(this,arguments)}},toString:function(){return this.name+"["+e.stamp(this,!0)+"]"}},e.mix(v,p,!1,null,1),v.prototype.constructor=v,e.BaseCore=v},"patched-v3.18.0",{requires:["attribute-core"]});
YUI.add("base-observable",function(e,t){function f(){}var n=e.Lang,r="destroy",i="init",s="bubbleTargets",o="_bubbleTargets",u=e.AttributeObservable,a=e.BaseCore;f._ATTR_CFG=u._ATTR_CFG.concat(),f._NON_ATTRS_CFG=["on","after","bubbleTargets"],f.prototype={_initAttribute:function(){a.prototype._initAttribute.apply(this,arguments),u.call(this),this._eventPrefix=this.constructor.EVENT_PREFIX||this.constructor.NAME,this._yuievt.config.prefix=this._eventPrefix},init:function(e){var t=this._getFullType(i),n=this._publish(t);return n.emitFacade=!0,n.fireOnce=!0,n.defaultTargetOnly=!0,n.defaultFn=this._defInitFn,this._preInitEventCfg(e),n._hasPotentialSubscribers()?this.fire(t,{cfg:e}):(this._baseInit(e),n.fired=!0,n.firedWith=[{cfg:e}]),this},_preInitEventCfg:function(e){e&&(e.on&&this.on(e.on),e.after&&this.after(e.after));var t,r,i,u=e&&s in e;if(u||o in this){i=u?e&&e.bubbleTargets:this._bubbleTargets;if(n.isArray(i))for(t=0,r=i.length;t<r;t++)this.addTarget(i[t]);else i&&this.addTarget(i)}},destroy:function(){return this.publish(r,{fireOnce:!0,defaultTargetOnly:!0,defaultFn:this._defDestroyFn}),this.fire(r),this.detachAll(),this},_defInitFn:function(e){this._baseInit(e.cfg)},_defDestroyFn:function(e){this._baseDestroy(e.cfg)}},e.mix(f,u,!1,null,1),e.BaseObservable=f},"patched-v3.18.0",{requires:["attribute-observable","base-core"]});
YUI.add("base-base",function(e,t){function o(){i.apply(this,arguments),s.apply(this,arguments),r.apply(this,arguments)}var n=e.AttributeCore,r=e.AttributeExtras,i=e.BaseCore,s=e.BaseObservable;o._ATTR_CFG=i._ATTR_CFG.concat(s._ATTR_CFG),o._NON_ATTRS_CFG=i._NON_ATTRS_CFG.concat(s._NON_ATTRS_CFG),o.NAME="base",o.ATTRS=n.protectAttrs(i.ATTRS),o.modifyAttrs=i.modifyAttrs,e.mix(o,i,!1,null,1),e.mix(o,r,!1,null,1),e.mix(o,s,!0,null,1),o.prototype.constructor=o,e.Base=o},"patched-v3.18.0",{requires:["attribute-base","base-core","base-observable"]});
YUI.add("plugin",function(e,t){function n(t){!this.hasImpl||!this.hasImpl(e.Plugin.Base)?n.superclass.constructor.apply(this,arguments):n.prototype.initializer.apply(this,arguments)}n.ATTRS={host:{writeOnce:!0}},n.NAME="plugin",n.NS="plugin",e.extend(n,e.Base,{_handles:null,initializer:function(e){this._handles=[]},destructor:function(){if(this._handles)for(var e=0,t=this._handles.length;e<t;e++)this._handles[e].detach()},doBefore:function(e,t,n){var r=this.get("host"),i;return e in r?i=this.beforeHostMethod(e,t,n):r.on&&(i=this.onHostEvent(e,t,n)),i},doAfter:function(e,t,n){var r=this.get("host"),i;return e in r?i=this.afterHostMethod(e,t,n):r.after&&(i=this.afterHostEvent(e,t,n)),i},onHostEvent:function(e,t,n){var r=this.get("host").on(e,t,n||this);return this._handles.push(r),r},onceHostEvent:function(e,t,n){var r=this.get("host").once(e,t,n||this);return this._handles.push(r),r},afterHostEvent:function(e,t,n){var r=this.get("host").after(e,t,n||this);return this._handles.push(r),r},onceAfterHostEvent:function(e,t,n){var r=this.get("host").onceAfter(e,t,n||this);return this._handles.push(r),r},beforeHostMethod:function(t,n,r){var i=e.Do.before(n,this.get("host"),t,r||this);return this._handles.push(i),i},afterHostMethod:function(t,n,r){var i=e.Do.after(n,this.get("host"),t,r||this);return this._handles.push(i),i},toString:function(){return this.constructor.NAME+"["+this.constructor.NS+"]"}}),e.namespace("Plugin").Base=n},"patched-v3.18.0",{requires:["base-base"]});
YUI.add("lang/console_en",function(e){e.Intl.add("console","en",{title:"Log Console",pause:"Pause",clear:"Clear",collapse:"Collapse",expand:"Expand"})},"patched-v3.18.0");
YUI.add("attribute-complex",function(e,t){var n=e.Attribute;n.Complex=function(){},n.Complex.prototype={_normAttrVals:n.prototype._normAttrVals,_getAttrInitVal:n.prototype._getAttrInitVal},e.AttributeComplex=n.Complex},"patched-v3.18.0",{requires:["attribute-base"]});
YUI.add("base-pluginhost",function(e,t){var n=e.Base,r=e.Plugin.Host;e.mix(n,r,!1,null,1),n.plug=r.plug,n.unplug=r.unplug},"patched-v3.18.0",{requires:["base-base","pluginhost"]});
YUI.add("classnamemanager",function(e,t){var n="classNamePrefix",r="classNameDelimiter",i=e.config;i[n]=i[n]||"yui3",i[r]=i[r]||"-",e.ClassNameManager=function(){var t=i[n],s=i[r];return{getClassName:e.cached(function(){var n=e.Array(arguments);return n[n.length-1]!==!0?n.unshift(t):n.pop(),n.join(s)})}}()},"patched-v3.18.0",{requires:["yui-base"]});
YUI.add("widget-base",function(e,t){function R(e){var t=this,n,r,i=t.constructor;t._strs={},t._cssPrefix=i.CSS_PREFIX||s(i.NAME.toLowerCase()),e=e||{},R.superclass.constructor.call(t,e),r=t.get(T),r&&(r!==P&&(n=r),t.render(n))}var n=e.Lang,r=e.Node,i=e.ClassNameManager,s=i.getClassName,o,u=e.cached(function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}),a="content",f="visible",l="hidden",c="disabled",h="focused",p="width",d="height",v="boundingBox",m="contentBox",g="parentNode",y="ownerDocument",b="auto",w="srcNode",E="body",S="tabIndex",x="id",T="render",N="rendered",C="destroyed",k="strings",L="<div></div>",A="Change",O="loading",M="_uiSet",_="",D=function(){},P=!0,H=!1,B,j={},F=[f,c,d,p,h,S],I=e.UA.webkit,q={};R.NAME="widget",B=R.UI_SRC="ui",R.ATTRS=j,j[x]={valueFn:"_guid",writeOnce:P},j[N]={value:H,readOnly:P},j[v]={valueFn:"_defaultBB",setter:"_setBB",writeOnce:P},j[m]={valueFn:"_defaultCB",setter:"_setCB",writeOnce:P},j[S]={value:null,validator:"_validTabIndex"},j[h]={value:H,readOnly:P},j[c]={value:H},j[f]={value:P},j[d]={value:_},j[p]={value:_},j[k]={value:{},setter:"_strSetter",getter:"_strGetter"},j[T]={value:H,writeOnce:P},R.CSS_PREFIX=s(R.NAME.toLowerCase()),R.getClassName=function(){return s.apply(i,[R.CSS_PREFIX].concat(e.Array(arguments),!0))},o=R.getClassName,R.getByNode=function(t){var n,i=o();return t=r.one(t),t&&(t=t.ancestor("."+i,!0),t&&(n=q[e.stamp(t,!0)])),n||null},e.extend(R,e.Base,{getClassName:function(){return s.apply(i,[this._cssPrefix].concat(e.Array(arguments),!0))},initializer:function(t){var n=this.get(v);n instanceof r&&this._mapInstance(e.stamp(n))},_mapInstance:function(e){q[e]=this},destructor:function(){var t=this.get(v),n;t instanceof r&&(n=e.stamp(t,!0),n in q&&delete q[n],this._destroyBox())},destroy:function(e){return this._destroyAllNodes=e,R.superclass.destroy.apply(this)},_destroyBox:function(){var e=this.get(v),t=this.get(m),n=this._destroyAllNodes,r;r=e&&e.compareTo(t),this.UI_EVENTS&&this._destroyUIEvents(),this._unbindUI(e),t&&(n&&t.empty(),t.remove(P)),r||(n&&e.empty(),e.remove(P))},render:function(e){return!this.get(C)&&!this.get(N)&&(this.publish(T,{queuable:H,fireOnce:P,defaultTargetOnly:P,defaultFn:this._defRenderFn}),this.fire(T,{parentNode:e?r.one(e):null})),this},_defRenderFn:function(e){this._parentNode=e.parentNode,this.renderer(),this._set(N,P),this._removeLoadingClassNames()},renderer:function(){var e=this;e._renderUI(),e.renderUI(),e._bindUI(),e.bindUI(),e._syncUI(),e.syncUI()},bindUI:D,renderUI:D,syncUI:D,hide:function(){return this.set(f,H)},show:function(){return this.set(f,P)},focus:function(){return this._set(h,P)},blur:function(){return this._set(h,H)},enable:function(){return this.set(c,H)},disable:function(){return this.set(c,P)},_uiSizeCB:function(e){this.get(m).toggleClass(o(a,"expanded"),e)},_renderBox:function(e){var t=this,n=t.get(m),i=t.get(v),s=t.get(w),o=t.DEF_PARENT_NODE,u=s&&s.get(y)||i.get(y)||n.get(y);s&&!s.compareTo(n)&&!n.inDoc(u)&&s.replace(n),!i.compareTo(n.get(g))&&!i.compareTo(n)&&(n.inDoc(u)&&n.replace(i),i.appendChild(n)),e=e||o&&r.one(o),e?e.appendChild(i):i.inDoc(u)||r.one(E).insert(i,0)},_setBB:function(e){return this._setBox(this.get(x),e,this.BOUNDING_TEMPLATE,!0)},_setCB:function(e){return this.CONTENT_TEMPLATE===null?this.get(v):this._setBox(null,e,this.CONTENT_TEMPLATE,!1)},_defaultBB:function(){var e=this.get(w),t=this.CONTENT_TEMPLATE===null;return e&&t?e:null},_defaultCB:function(e){return this.get(w)||null},_setBox:function(t,n,i,s){return n=r.one(n),n||(n=r.create(i),s?this._bbFromTemplate=!0:this._cbFromTemplate=!0),n.get(x)||n.set(x,t||e.guid()),n},_renderUI:function(){this._renderBoxClassNames(),this._renderBox(this._parentNode)},_renderBoxClassNames:function(){var e=this._getClasses(),t,n=this.get(v),r;n.addClass(o());for(r=e.length-3;r>=0;r--)t=e[r],n.addClass(t.CSS_PREFIX||s(t.NAME.toLowerCase()));this.get(m).addClass(this.getClassName(a))},_removeLoadingClassNames:function(){var e=this.get(v),t=this.get(m),n=this.getClassName(O),r=o(O);e.removeClass(r).removeClass(n),t.removeClass(r).removeClass(n)},_bindUI:function(){this._bindAttrUI(this._UI_ATTRS.BIND),this._bindDOM()},_unbindUI:function(e){this._unbindDOM(e)},_bindDOM:function(){var t=this.get(v).get(y),n=R._hDocFocus;n||(n=R._hDocFocus=t.on("focus",this._onDocFocus,this),n.listeners={count:0}),n.listeners[e.stamp(this,!0)]=!0,n.listeners.count++,I&&(this._hDocMouseDown=t.on("mousedown",this._onDocMouseDown,this))},_unbindDOM:function(t){var n=R._hDocFocus,r=e.stamp(this,!0),i,s=this._hDocMouseDown;n&&(i=n.listeners,i[r]&&(delete i[r],i.count--),i.count===0&&(n.detach(),R._hDocFocus=null)),I&&s&&s.detach()},_syncUI:function(){this._syncAttrUI(this._UI_ATTRS.SYNC)},_uiSetHeight:function(e){this._uiSetDim(d,e),this._uiSizeCB(e!==_&&e!==b)},_uiSetWidth:function(e){this._uiSetDim(p,e)},_uiSetDim:function(e,t){this.get(v).setStyle(e,n.isNumber(t)?t+this.DEF_UNIT:t)},_uiSetVisible:function(e){this.get(v).toggleClass(this.getClassName(l),!e)},_uiSetDisabled:function(e){this.get(v).toggleClass(this.getClassName(c),e)},_uiSetFocused:function(e,t){var n=this.get(v);n.toggleClass(this.getClassName(h),e),t!==B&&(e?n.focus():n.blur())},_uiSetTabIndex:function(e){var t=this.get(v);n.isNumber(e)?t.set(S,e):t.removeAttribute(S)},_onDocMouseDown:function(e){this._domFocus&&this._onDocFocus(e)},_onDocFocus:function(e){var t=R.getByNode(e.target),n=R._active;n&&n!==t&&(n._domFocus=!1,n._set(h,!1,{src:B}),R._active=null),t&&(t._domFocus=!0,t._set(h,!0,{src:B}),R._active=t)},toString:function(){return this.name+"["+this.get(x)+"]"},DEF_UNIT:"px",DEF_PARENT_NODE:null,CONTENT_TEMPLATE:L,BOUNDING_TEMPLATE:L,_guid:function(){return e.guid()},_validTabIndex:function(e){return n.isNumber(e)||n.isNull(e)},_bindAttrUI:function(e){var t,n=e.length;for(t=0;t<n;t++)this.after(e[t]+A,this._setAttrUI)},_syncAttrUI:function(e){var t,n=e.length,r;for(t=0;t<n;t++)r=e[t],this[M+u(r)](this.get(r))},_setAttrUI:function(e){e.target===this&&this[M+u(e.attrName
)](e.newVal,e.src)},_strSetter:function(t){return e.merge(this.get(k),t)},getString:function(e){return this.get(k)[e]},getStrings:function(){return this.get(k)},_UI_ATTRS:{BIND:F,SYNC:F}}),e.Widget=R},"patched-v3.18.0",{requires:["attribute","base-base","base-pluginhost","classnamemanager","event-focus","node-base","node-style"],skinnable:!0});
YUI.add("widget-htmlparser",function(e,t){var n=e.Widget,r=e.Node,i=e.Lang,s="srcNode",o="contentBox";n.HTML_PARSER={},n._buildCfg={aggregates:["HTML_PARSER"]},n.ATTRS[s]={value:null,setter:r.one,getter:"_getSrcNode",writeOnce:!0},e.mix(n.prototype,{_getSrcNode:function(e){return e||this.get(o)},_preAddAttrs:function(t,r,i){var o={id:t.id,boundingBox:t.boundingBox,contentBox:t.contentBox,srcNode:t.srcNode||e.Object(n.ATTRS[s])};this.addAttrs(o,r,i),delete t.boundingBox,delete t.contentBox,delete t.srcNode,delete t.id,this._applyParser&&this._applyParser(r)},_applyParsedConfig:function(t,n,r){return r?e.mix(n,r,!1):n},_applyParser:function(t){var n=this,r=this._getNodeToParse(),s=n._getHtmlParser(),o,u;s&&r&&e.Object.each(s,function(e,t,s){u=null,i.isFunction(e)?u=e.call(n,r):i.isArray(e)?(u=r.all(e[0]),u.isEmpty()&&(u=null)):u=r.one(e),u!==null&&u!==undefined&&(o=o||{},o[t]=u)}),t=n._applyParsedConfig(r,t,o)},_getNodeToParse:function(){var e=this.get("srcNode");return this._cbFromTemplate?null:e},_getHtmlParser:function(){var t=this._getClasses(),n={},r,i;for(r=t.length-1;r>=0;r--)i=t[r].HTML_PARSER,i&&e.mix(n,i,!0);return n}})},"patched-v3.18.0",{requires:["widget-base"]});
YUI.add("widget-skin",function(e,t){var n="boundingBox",r="contentBox",i="skin",s=e.ClassNameManager.getClassName;e.Widget.prototype.getSkinName=function(e){var t=this.get(r)||this.get(n),o,u;return e=e||s(i,""),u=new RegExp("\\b"+e+"(\\S+)"),t&&t.ancestor(function(e){return o=e.get("className").match(u),o}),o?o[1]:null}},"patched-v3.18.0",{requires:["widget-base"]});
YUI.add("widget-uievents",function(e,t){var n="boundingBox",r=e.Widget,i="render",s=e.Lang,o=":",u=e.Widget._uievts=e.Widget._uievts||{};e.mix(r.prototype,{_destroyUIEvents:function(){var t=e.stamp(this,!0);e.each(u,function(n,r){n.instances[t]&&(delete n.instances[t],e.Object.isEmpty(n.instances)&&(n.handle.detach(),u[r]&&delete u[r]))})},UI_EVENTS:e.Node.DOM_EVENTS,_getUIEventNode:function(){return this.get(n)},_createUIEvent:function(t){var n=this._getUIEventNode(),i=e.stamp(n)+t,s=u[i],o;s||(o=n.delegate(t,function(e){var t=r.getByNode(this);t&&t._filterUIEvent(e)&&t.fire(e.type,{domEvent:e})},"."+e.Widget.getClassName()),u[i]=s={instances:{},handle:o}),s.instances[e.stamp(this)]=1},_filterUIEvent:function(e){return e.currentTarget.compareTo(e.container)||e.container.compareTo(this._getUIEventNode())},_getUIEvent:function(e){if(s.isString(e)){var t=this.parseType(e)[1],n,r;return t&&(n=t.indexOf(o),n>-1&&(t=t.substring(n+o.length)),this.UI_EVENTS[t]&&(r=t)),r}},_initUIEvent:function(e){var t=this._getUIEvent(e),n=this._uiEvtsInitQueue||{};t&&!n[t]&&(this._uiEvtsInitQueue=n[t]=1,this.after(i,function(){this._createUIEvent(t),delete this._uiEvtsInitQueue[t]}))},on:function(e){return this._initUIEvent(e),r.superclass.on.apply(this,arguments)},publish:function(e,t){var n=this._getUIEvent(e);return n&&t&&t.defaultFn&&this._initUIEvent(n),r.superclass.publish.apply(this,arguments)}},!0)},"patched-v3.18.0",{requires:["node-event-delegate","widget-base"]});
YUI.add("console",function(e,t){function et(){et.superclass.constructor.apply(this,arguments)}var n=e.ClassNameManager.getClassName,r="checked",i="clear",s="click",o="collapsed",u="console",a="contentBox",f="disabled",l="entry",c="error",h="height",p="info",d="lastTime",v="pause",m="paused",g="reset",y="startTime",b="title",w="warn",E=".",S=n(u,"button"),x=n(u,"checkbox"),T=n(u,i),N=n(u,"collapse"),C=n(u,o),k=n(u,"controls"),L=n(u,"hd"),A=n(u,"bd"),O=n(u,"ft"),M=n(u,b),_=n(u,l),D=n(u,l,"cat"),P=n(u,l,"content"),H=n(u,l,"meta"),B=n(u,l,"src"),j=n(u,l,"time"),F=n(u,v),I=n(u,v,"label"),q=/^(\S+)\s/,R=/&(?!#?[a-z0-9]+;)/g,U=/>/g,z=/</g,W="&#38;",X="&#62;",V="&#60;",$='<div class="{entry_class} {cat_class} {src_class}"><p class="{entry_meta_class}"><span class="{entry_src_class}">{sourceAndDetail}</span><span class="{entry_cat_class}">{category}</span><span class="{entry_time_class}"> {totalTime}ms (+{elapsedTime}) {localTime}</span></p><pre class="{entry_content_class}">{message}</pre></div>',J=e.Lang,K=e.Node.create,Q=J.isNumber,G=J.isString,Y=e.merge,Z=e.Lang.sub;e.Console=e.extend(et,e.Widget,{_evtCat:null,_head:null,_body:null,_foot:null,_printLoop:null,buffer:null,log:function(){return e.log.apply(e,arguments),this},clearConsole:function(){return this._body.empty(),this._cancelPrintLoop(),this.buffer=[],this},reset:function(){return this.fire(g),this},collapse:function(){return this.set(o,!0),this},expand:function(){return this.set(o,!1),this},printBuffer:function(t){var n=this.buffer,r=e.config.debug,i=[],s=this.get("consoleLimit"),o=this.get("newestOnTop"),u=o?this._body.get("firstChild"):null,a;n.length>s&&n.splice(0,n.length-s),t=Math.min(n.length,t||n.length),e.config.debug=!1;if(!this.get(m)&&this.get("rendered")){for(a=0;a<t&&n.length;++a)i[a]=this._createEntryHTML(n.shift());n.length||this._cancelPrintLoop(),i.length&&(o&&i.reverse(),this._body.insertBefore(K(i.join("")),u),this.get("scrollIntoView")&&this.scrollToLatest(),this._trimOldEntries())}return e.config.debug=r,this},initializer:function(){this._evtCat=e.stamp(this)+"|",this.buffer=[],this.get("logSource").on(this._evtCat+this.get("logEvent"),e.bind("_onLogEvent",this)),this.publish(l,{defaultFn:this._defEntryFn}),this.publish(g,{defaultFn:this._defResetFn}),this.after("rendered",this._schedulePrint)},destructor:function(){var e=this.get("boundingBox");this._cancelPrintLoop(),this.get("logSource").detach(this._evtCat+"*"),e.purge(!0)},renderUI:function(){this._initHead(),this._initBody(),this._initFoot();var e=this.get("style");e!=="block"&&this.get("boundingBox").addClass(this.getClassName(e))},syncUI:function(){this._uiUpdatePaused(this.get(m)),this._uiUpdateCollapsed(this.get(o)),this._uiSetHeight(this.get(h))},bindUI:function(){this.get(a).one("button."+N).on(s,this._onCollapseClick,this),this.get(a).one("input[type=checkbox]."+F).on(s,this._onPauseClick,this),this.get(a).one("button."+T).on(s,this._onClearClick,this),this.after(this._evtCat+"stringsChange",this._afterStringsChange),this.after(this._evtCat+"pausedChange",this._afterPausedChange),this.after(this._evtCat+"consoleLimitChange",this._afterConsoleLimitChange),this.after(this._evtCat+"collapsedChange",this._afterCollapsedChange)},_initHead:function(){var e=this.get(a),t=Y(et.CHROME_CLASSES,{str_collapse:this.get("strings.collapse"),str_title:this.get("strings.title")});this._head=K(Z(et.HEADER_TEMPLATE,t)),e.insertBefore(this._head,e.get("firstChild"))},_initBody:function(){this._body=K(Z(et.BODY_TEMPLATE,et.CHROME_CLASSES)),this.get(a).appendChild(this._body)},_initFoot:function(){var t=Y(et.CHROME_CLASSES,{id_guid:e.guid(),str_pause:this.get("strings.pause"),str_clear:this.get("strings.clear")});this._foot=K(Z(et.FOOTER_TEMPLATE,t)),this.get(a).appendChild(this._foot)},_isInLogLevel:function(e){var t=e.cat,n=this.get("logLevel");if(n!==p){t=t||p,G(t)&&(t=t.toLowerCase());if(t===w&&n===c||t===p&&n!==p)return!1}return!0},_normalizeMessage:function(e){var t=e.msg,n=e.cat,r=e.src,i={time:new Date,message:t,category:n||this.get("defaultCategory"),sourceAndDetail:r||this.get("defaultSource"),source:null,localTime:null,elapsedTime:null,totalTime:null};return i.source=q.test(i.sourceAndDetail)?RegExp.$1:i.sourceAndDetail,i.localTime=i.time.toLocaleTimeString?i.time.toLocaleTimeString():i.time+"",i.elapsedTime=i.time-this.get(d),i.totalTime=i.time-this.get(y),this._set(d,i.time),i},_schedulePrint:function(){!this._printLoop&&!this.get(m)&&this.get("rendered")&&(this._printLoop=e.later(this.get("printTimeout"),this,this.printBuffer,this.get("printLimit"),!0))},_createEntryHTML:function(e){return e=Y(this._htmlEscapeMessage(e),et.ENTRY_CLASSES,{cat_class:this.getClassName(l,e.category),src_class:this.getClassName(l,e.source)}),this.get("entryTemplate").replace(/\{(\w+)\}/g,function(t,n){return n in e?e[n]:""})},scrollToLatest:function(){var e=this.get("newestOnTop")?0:this._body.get("scrollHeight");this._body.set("scrollTop",e)},_htmlEscapeMessage:function(e){return e.message=this._encodeHTML(e.message),e.source=this._encodeHTML(e.source),e.sourceAndDetail=this._encodeHTML(e.sourceAndDetail),e.category=this._encodeHTML(e.category),e},_trimOldEntries:function(){e.config.debug=!1;var t=this._body,n=this.get("consoleLimit"),r=e.config.debug,i,s,o,u;if(t){i=t.all(E+_),u=i.size()-n;if(u>0){this.get("newestOnTop")?(o=n,u=i.size()):o=0,this._body.setStyle("display","none");for(;o<u;++o)s=i.item(o),s&&s.remove();this._body.setStyle("display","")}}e.config.debug=r},_encodeHTML:function(e){return G(e)?e.replace(R,W).replace(z,V).replace(U,X):e},_cancelPrintLoop:function(){this._printLoop&&(this._printLoop.cancel(),this._printLoop=null)},_validateStyle:function(e){return e==="inline"||e==="block"||e==="separate"},_onPauseClick:function(e){this.set(m,e.target.get(r))},_onClearClick:function(e){this.clearConsole()},_onCollapseClick:function(e){this.set(o,!this.get(o))},_validateLogSource:function(t){return t&&e.Lang.isFunction(t.on)},_setLogLevel:function(e){return G(e)&&(e=e.toLowerCase
()),e===w||e===c?e:p},_getUseBrowserConsole:function(){var e=this.get("logSource");return e instanceof YUI?e.config.useBrowserConsole:null},_setUseBrowserConsole:function(t){var n=this.get("logSource");return n instanceof YUI?(t=!!t,n.config.useBrowserConsole=t,t):e.Attribute.INVALID_VALUE},_uiSetHeight:function(e){et.superclass._uiSetHeight.apply(this,arguments);if(this._head&&this._foot){var t=this.get("boundingBox").get("offsetHeight")-this._head.get("offsetHeight")-this._foot.get("offsetHeight");this._body.setStyle(h,t+"px")}},_uiSizeCB:function(){},_afterStringsChange:function(e){var t=e.subAttrName?e.subAttrName.split(E)[1]:null,n=this.get(a),r=e.prevVal,s=e.newVal;(!t||t===b)&&r.title!==s.title&&n.all(E+M).setHTML(s.title),(!t||t===v)&&r.pause!==s.pause&&n.all(E+I).setHTML(s.pause),(!t||t===i)&&r.clear!==s.clear&&n.all(E+T).set("value",s.clear)},_afterPausedChange:function(t){var n=t.newVal;t.src!==e.Widget.SRC_UI&&this._uiUpdatePaused(n),n?this._printLoop&&this._cancelPrintLoop():this._schedulePrint()},_uiUpdatePaused:function(e){var t=this._foot.all("input[type=checkbox]."+F);t&&t.set(r,e)},_afterConsoleLimitChange:function(){this._trimOldEntries()},_afterCollapsedChange:function(e){this._uiUpdateCollapsed(e.newVal)},_uiUpdateCollapsed:function(e){var t=this.get("boundingBox"),n=t.all("button."+N),r=e?"addClass":"removeClass",i=this.get("strings."+(e?"expand":"collapse"));t[r](C),n&&n.setHTML(i),this._uiSetHeight(e?this._head.get("offsetHeight"):this.get(h))},_afterVisibleChange:function(e){et.superclass._afterVisibleChange.apply(this,arguments),this._uiUpdateFromHideShow(e.newVal)},_uiUpdateFromHideShow:function(e){e&&this._uiSetHeight(this.get(h))},_onLogEvent:function(t){if(!this.get(f)&&this._isInLogLevel(t)){var n=e.config.debug;e.config.debug=!1,this.fire(l,{message:this._normalizeMessage(t)}),e.config.debug=n}},_defResetFn:function(){this.clearConsole(),this.set(y,new Date),this.set(f,!1),this.set(m,!1)},_defEntryFn:function(e){e.message&&(this.buffer.push(e.message),this._schedulePrint())}},{NAME:u,LOG_LEVEL_INFO:p,LOG_LEVEL_WARN:w,LOG_LEVEL_ERROR:c,ENTRY_CLASSES:{entry_class:_,entry_meta_class:H,entry_cat_class:D,entry_src_class:B,entry_time_class:j,entry_content_class:P},CHROME_CLASSES:{console_hd_class:L,console_bd_class:A,console_ft_class:O,console_controls_class:k,console_checkbox_class:x,console_pause_class:F,console_pause_label_class:I,console_button_class:S,console_clear_class:T,console_collapse_class:N,console_title_class:M},HEADER_TEMPLATE:'<div class="{console_hd_class}"><h4 class="{console_title_class}">{str_title}</h4><button type="button" class="{console_button_class} {console_collapse_class}">{str_collapse}</button></div>',BODY_TEMPLATE:'<div class="{console_bd_class}"></div>',FOOTER_TEMPLATE:'<div class="{console_ft_class}"><div class="{console_controls_class}"><label class="{console_pause_label_class}"><input type="checkbox" class="{console_checkbox_class} {console_pause_class}" value="1" id="{id_guid}"> {str_pause}</label><button type="button" class="{console_button_class} {console_clear_class}">{str_clear}</button></div></div>',ENTRY_TEMPLATE:$,ATTRS:{logEvent:{value:"yui:log",writeOnce:!0,validator:G},logSource:{value:e,writeOnce:!0,validator:function(e){return this._validateLogSource(e)}},strings:{valueFn:function(){return e.Intl.get("console")}},paused:{value:!1,validator:J.isBoolean},defaultCategory:{value:p,validator:G},defaultSource:{value:"global",validator:G},entryTemplate:{value:$,validator:G},logLevel:{value:e.config.logLevel||p,setter:function(e){return this._setLogLevel(e)}},printTimeout:{value:100,validator:Q},printLimit:{value:50,validator:Q},consoleLimit:{value:300,validator:Q},newestOnTop:{value:!0},scrollIntoView:{value:!0},startTime:{value:new Date},lastTime:{value:new Date,readOnly:!0},collapsed:{value:!1},height:{value:"300px"},width:{value:"300px"},useBrowserConsole:{lazyAdd:!1,value:!1,getter:function(){return this._getUseBrowserConsole()},setter:function(e){return this._setUseBrowserConsole(e)}},style:{value:"separate",writeOnce:!0,validator:function(e){return this._validateStyle(e)}}}})},"patched-v3.18.0",{requires:["yui-log","widget"],skinnable:!0,lang:["en","es","hu","it","ja"]});
YUI.add("console-filters",function(e,t){function b(){b.superclass.constructor.apply(this,arguments)}var n=e.ClassNameManager.getClassName,r="console",i="filters",s="filter",o="category",u="source",a="category.",f="source.",l="host",c="checked",h="defaultVisibility",p=".",d="",v=p+e.Console.CHROME_CLASSES.console_bd_class,m=p+e.Console.CHROME_CLASSES.console_ft_class,g="input[type=checkbox].",y=e.Lang.isString;e.namespace("Plugin").ConsoleFilters=e.extend(b,e.Plugin.Base,{_entries:null,_cacheLimit:Number.POSITIVE_INFINITY,_categories:null,_sources:null,initializer:function(){this._entries=[],this.get(l).on("entry",this._onEntry,this),this.doAfter("renderUI",this.renderUI),this.doAfter("syncUI",this.syncUI),this.doAfter("bindUI",this.bindUI),this.doAfter("clearConsole",this._afterClearConsole),this.get(l).get("rendered")&&(this.renderUI(),this.syncUI(),this.bindUI()),this.after("cacheLimitChange",this._afterCacheLimitChange)},destructor:function(){this._entries=[],this._categories&&this._categories.remove(),this._sources&&this._sources.remove()},renderUI:function(){var t=this.get(l).get("contentBox").one(m),n;t&&(n=e.Lang.sub(b.CATEGORIES_TEMPLATE,b.CHROME_CLASSES),this._categories=t.appendChild(e.Node.create(n)),n=e.Lang.sub(b.SOURCES_TEMPLATE,b.CHROME_CLASSES),this._sources=t.appendChild(e.Node.create(n)))},bindUI:function(){this._categories.on("click",e.bind(this._onCategoryCheckboxClick,this)),this._sources.on("click",e.bind(this._onSourceCheckboxClick,this)),this.after("categoryChange",this._afterCategoryChange),this.after("sourceChange",this._afterSourceChange)},syncUI:function(){e.each(this.get(o),function(e,t){this._uiSetCheckbox(o,t,e)},this),e.each(this.get(u),function(e,t){this._uiSetCheckbox(u,t,e)},this),this.refreshConsole()},_onEntry:function(e){this._entries.push(e.message);var t=a+e.message.category,n=f+e.message.source,r=this.get(t),i=this.get(n),s=this._entries.length-this._cacheLimit,o;s>0&&this._entries.splice(0,s),r===undefined&&(o=this.get(h),this.set(t,o),r=o),i===undefined&&(o=this.get(h),this.set(n,o),i=o),(!r||!i)&&e.preventDefault()},_afterClearConsole:function(){this._entries=[]},_afterCategoryChange:function(e){var t=e.subAttrName.replace(/category\./,d),n=e.prevVal,r=e.newVal;if(!t||n[t]!==undefined)this.refreshConsole(),this._filterBuffer();t&&!e.fromUI&&this._uiSetCheckbox(o,t,r[t])},_afterSourceChange:function(e){var t=e.subAttrName.replace(/source\./,d),n=e.prevVal,r=e.newVal;if(!t||n[t]!==undefined)this.refreshConsole(),this._filterBuffer();t&&!e.fromUI&&this._uiSetCheckbox(u,t,r[t])},_filterBuffer:function(){var e=this.get(o),t=this.get(u),n=this.get(l).buffer,r=null,i;for(i=n.length-1;i>=0;--i)!e[n[i].category]||!t[n[i].source]?r=r||i:r&&(n.splice(i,r-i),r=null);r&&n.splice(0,r+1)},_afterCacheLimitChange:function(e){if(isFinite(e.newVal)){var t=this._entries.length-e.newVal;t>0&&this._entries.splice(0,t)}},refreshConsole:function(){var e=this._entries,t=this.get(l),n=t.get("contentBox").one(v),r=t.get("consoleLimit"),i=this.get(o),s=this.get(u),a=[],f,c;if(n){t._cancelPrintLoop();for(f=e.length-1;f>=0&&r>=0;--f)c=e[f],i[c.category]&&s[c.source]&&(a.unshift(c),--r);n.setHTML(d),t.buffer=a,t.printBuffer()}},_uiSetCheckbox:function(e,t,i){if(e&&t){var u=e===o?this._categories:this._sources,a=g+n(r,s,t),f=u.one(a),h;f||(h=this.get(l),this._createCheckbox(u,t),f=u.one(a),h._uiSetHeight(h.get("height"))),f.set(c,i)}},_onCategoryCheckboxClick:function(e){var t=e.target,n;t.hasClass(b.CHROME_CLASSES.filter)&&(n=t.get("value"),n&&n in this.get(o)&&this.set(a+n,t.get(c),{fromUI:!0}))},_onSourceCheckboxClick:function(e){var t=e.target,n;t.hasClass(b.CHROME_CLASSES.filter)&&(n=t.get("value"),n&&n in this.get(u)&&this.set(f+n,t.get(c),{fromUI:!0}))},hideCategory:function(t,n){y(n)?e.Array.each(arguments,this.hideCategory,this):this.set(a+t,!1)},showCategory:function(t,n){y(n)?e.Array.each(arguments,this.showCategory,this):this.set(a+t,!0)},hideSource:function(t,n){y(n)?e.Array.each(arguments,this.hideSource,this):this.set(f+t,!1)},showSource:function(t,n){y(n)?e.Array.each(arguments,this.showSource,this):this.set(f+t,!0)},_createCheckbox:function(t,i){var o=e.merge(b.CHROME_CLASSES,{filter_name:i,filter_class:n(r,s,i)}),u=e.Node.create(e.Lang.sub(b.FILTER_TEMPLATE,o));t.appendChild(u)},_validateCategory:function(t,n){return e.Lang.isObject(n,!0)&&t.split(/\./).length<3},_validateSource:function(t,n){return e.Lang.isObject(n,!0)&&t.split(/\./).length<3},_setCacheLimit:function(t){return e.Lang.isNumber(t)?(this._cacheLimit=t,t):e.Attribute.INVALID_VALUE}},{NAME:"consoleFilters",NS:s,CATEGORIES_TEMPLATE:'<div class="{categories}"></div>',SOURCES_TEMPLATE:'<div class="{sources}"></div>',FILTER_TEMPLATE:'<label class="{filter_label}"><input type="checkbox" value="{filter_name}" class="{filter} {filter_class}"> {filter_name}</label>&#8201;',CHROME_CLASSES:{categories:n(r,i,"categories"),sources:n(r,i,"sources"),category:n(r,s,o),source:n(r,s,u),filter:n(r,s),filter_label:n(r,s,"label")},ATTRS:{defaultVisibility:{value:!0,validator:e.Lang.isBoolean},category:{value:{},validator:function(e,t){return this._validateCategory(t,e)}},source:{value:{},validator:function(e,t){return this._validateSource(t,e)}},cacheLimit:{value:Number.POSITIVE_INFINITY,setter:function(e){return this._setCacheLimit(e)}}}})},"patched-v3.18.0",{requires:["plugin","console"],skinnable:!0});
YUI.add("array-extras",function(e,t){var n=e.Array,r=e.Lang,i=Array.prototype;n.lastIndexOf=r._isNative(i.lastIndexOf)?function(e,t,n){return n||n===0?e.lastIndexOf(t,n):e.lastIndexOf(t)}:function(e,t,n){var r=e.length,i=r-1;if(n||n===0)i=Math.min(n<0?r+n:n,r);if(i>-1&&r>0)for(;i>-1;--i)if(i in e&&e[i]===t)return i;return-1},n.unique=function(e,t){var n=0,r=e.length,i=[],s,o,u,a;e:for(;n<r;n++){a=e[n];for(s=0,u=i.length;s<u;s++){o=i[s];if(t){if(t.call(e,a,o,n,e))continue e}else if(a===o)continue e}i.push(a)}return i},n.filter=r._isNative(i.filter)?function(e,t,n){return i.filter.call(e,t,n)}:function(e,t,n){var r=0,i=e.length,s=[],o;for(;r<i;++r)r in e&&(o=e[r],t.call(n,o,r,e)&&s.push(o));return s},n.reject=function(e,t,r){return n.filter(e,function(e,n,i){return!t.call(r,e,n,i)})},n.every=r._isNative(i.every)?function(e,t,n){return i.every.call(e,t,n)}:function(e,t,n){for(var r=0,i=e.length;r<i;++r)if(r in e&&!t.call(n,e[r],r,e))return!1;return!0},n.map=r._isNative(i.map)?function(e,t,n){return i.map.call(e,t,n)}:function(e,t,n){var r=0,s=e.length,o=i.concat.call(e);for(;r<s;++r)r in e&&(o[r]=t.call(n,e[r],r,e));return o},n.reduce=r._isNative(i.reduce)?function(e,t,n,r){return i.reduce.call(e,function(e,t,i,s){return n.call(r,e,t,i,s)},t)}:function(e,t,n,r){var i=0,s=e.length,o=t;for(;i<s;++i)i in e&&(o=n.call(r,o,e[i],i,e));return o},n.find=function(e,t,n){for(var r=0,i=e.length;r<i;r++)if(r in e&&t.call(n,e[r],r,e))return e[r];return null},n.grep=function(e,t){return n.filter(e,function(e,n){return t.test(e)})},n.partition=function(e,t,r){var i={matches:[],rejects:[]};return n.each(e,function(n,s){var u=t.call(r,n,s,e)?i.matches:i.rejects;u.push(n)}),i},n.zip=function(e,t){var r=[];return n.each(e,function(e,n){r.push([e,t[n]])}),r},n.flatten=function(e){var t=[],i,s,o;if(!e)return t;for(i=0,s=e.length;i<s;++i)o=e[i],r.isArray(o)?t.push.apply(t,n.flatten(o)):t.push(o);return t}},"patched-v3.18.0",{requires:["yui-base"]});
YUI.add("test-console",function(e,t){function n(){n.superclass.constructor.apply(this,arguments)}e.namespace("Test").Console=e.extend(n,e.Console,{initializer:function(t){this.on("entry",this._onEntry),this.plug(e.Plugin.ConsoleFilters,{category:e.merge({info:!0,pass:!1,fail:!0,status:!1},t&&t.filters||{}),defaultVisibility:!1,source:{TestRunner:!0}}),e.Test.Runner.on("complete",e.bind(this._parseCoverage,this))},_isIstanbul:function(t){var n=e.Object.keys(t)[0],r=!1;return t[n].s!==undefined&&t[n].fnMap!==undefined&&(r=!0),t.s!==undefined&&t.fnMap!==undefined&&(r=!0),r},parseYUITestCoverage:function(t){var n={lines:{hit:0,miss:0,total:0,percent:0},functions:{hit:0,miss:0,total:0,percent:0}},r;e.Object.each(t,function(e){n.lines.total+=e.coveredLines,n.lines.hit+=e.calledLines,n.lines.miss+=e.coveredLines-e.calledLines,n.lines.percent=Math.floor(n.lines.hit/n.lines.total*100),n.functions.total+=e.coveredFunctions,n.functions.hit+=e.calledFunctions,n.functions.miss+=e.coveredFunctions-e.calledFunctions,n.functions.percent=Math.floor(n.functions.hit/n.functions.total*100)}),r="Lines: Hit:"+n.lines.hit+" Missed:"+n.lines.miss+" Total:"+n.lines.total+" Percent:"+n.lines.percent+"%\n",r+="Functions: Hit:"+n.functions.hit+" Missed:"+n.functions.miss+" Total:"+n.functions.total+" Percent:"+n.functions.percent+"%",this.log("Coverage: "+r,"info","TestRunner")},_blankSummary:function(){return{lines:{total:0,covered:0,pct:"Unknown"},statements:{total:0,covered:0,pct:"Unknown"},functions:{total:0,covered:0,pct:"Unknown"},branches:{total:0,covered:0,pct:"Unknown"}}},_addDerivedInfoForFile:function(t){var n=t.statementMap,r=t.s,i;t.l||(t.l=i={},e.Object.each(r,function(e,t){var s=n[t].start.line,o=r[t],u=i[s];if(typeof u=="undefined"||u<o)i[s]=o}))},_percent:function(e,t){var n,r=100;return t>0&&(n=1e5*e/t+5,r=Math.floor(n/10)/100),r},_computeSimpleTotals:function(t,n){var r=t[n],i={total:0,covered:0};return e.Object.each(r,function(e){i.total+=1,e&&(i.covered+=1)}),i.pct=this._percent(i.covered,i.total),i},_computeBranchTotals:function(t){var n=t.b,r={total:0,covered:0};return e.Object.each(n,function(t){var n=e.Array.filter(t,function(e){return e>0});r.total+=t.length,r.covered+=n.length}),r.pct=this._percent(r.covered,r.total),r},parseIstanbul:function(t){var n=this,r="Coverage Report:\n";e.Object.each(t,function(t,i){var s=n._blankSummary();n._addDerivedInfoForFile(t),s.lines=n._computeSimpleTotals(t,"l"),s.functions=n._computeSimpleTotals(t,"f"),s.statements=n._computeSimpleTotals(t,"s"),s.branches=n._computeBranchTotals(t),r+=i+":\n",e.Array.each(["lines","functions","statements","branches"],function(e){r+="    "+e+": "+s[e].covered+"/"+s[e].total+" : "+s[e].pct+"%\n"})}),this.log(r,"info","TestRunner")},_parseCoverage:function(){var t=e.Test.Runner.getCoverage();if(!t)return;this._isIstanbul(t)?this.parseIstanbul(t):this.parseYUITestCoverage(t)},_onEntry:function(e){var t=e.message;t.category==="info"&&/\s(?:case|suite)\s|yuitests\d+|began/.test(t.message)?t.category="status":t.category==="fail"&&this.printBuffer()}},{NAME:"testConsole",ATTRS:{entryTemplate:{value:'<div class="{entry_class} {cat_class} {src_class}"><div class="{entry_content_class}">{message}</div></div>'},height:{value:"350px"},newestOnTop:{value:!1},style:{value:"block"},width:{value:e.UA.ie&&e.UA.ie<9?"100%":"inherit"}}})},"patched-v3.18.0",{requires:["console-filters","test","array-extras"],skinnable:!0});

/* Altered to utilize media-match instead of match-media for deeper support back to IE6 */

/* MediaMatch v.2.0.2 poyfill by (c) 2013: WebLinc, David Knight. */
window.matchMedia || (window.matchMedia = function (win) {
    'use strict';

    // Internal globals
    var _doc        = win.document,
        _viewport   = _doc.documentElement,
        _queries    = [],
        _queryID    = 0,
        _type       = '',
        _features   = {},
                    // only screen
                    // only screen and
                    // not screen
                    // not screen and
                    // screen
                    // screen and
        _typeExpr   = /\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,
                    // (-vendor-min-width: 300px)
                    // (min-width: 300px)
                    // (width: 300px)
                    // (width)
                    // (orientation: portrait|landscape)
        _mediaExpr  = /^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,
        _timer      = 0,

        // Helper methods

        /*
            _matches
         */
        _matches = function (media) {
            // screen and (min-width: 400px), screen and (max-width: 500px)
            var mql         = (media.indexOf(',') !== -1 && media.split(',')) || [media],
                mqIndex     = mql.length - 1,
                mqLength    = mqIndex,
                mq          = null,

                // not screen, screen
                negateType      = null,
                negateTypeFound = '',
                negateTypeIndex = 0,
                negate          = false,
                type            = '',

                // (min-width: 400px), (min-width)
                exprListStr = '',
                exprList    = null,
                exprIndex   = 0,
                exprLength  = 0,
                expr        = null,

                prefix      = '',
                length      = '',
                unit        = '',
                value       = '',
                feature     = '',

                match       = false;

            if (media === '') {
                return true;
            }

            do {
                mq          = mql[mqLength - mqIndex];
                negate      = false;
                negateType  = mq.match(_typeExpr);

                if (negateType) {
                    negateTypeFound = negateType[0];
                    negateTypeIndex = negateType.index;
                }

                if (!negateType || ((mq.substring(0, negateTypeIndex).indexOf('(') === -1) && (negateTypeIndex || (!negateType[3] && negateTypeFound !== negateType.input)))) {
                    match = false;
                    continue;
                }

                exprListStr = mq;

                negate = negateType[1] === 'not';

                if (!negateTypeIndex) {
                    type        =  negateType[2];
                    exprListStr = mq.substring(negateTypeFound.length);
                }

                // Test media type
                // Test type against this device or if 'all' or empty ''
                match       = type === _type || type === 'all' || type === '';

                exprList    = (exprListStr.indexOf(' and ') !== -1 && exprListStr.split(' and ')) || [exprListStr];
                exprIndex   = exprList.length - 1;
                exprLength  = exprIndex;

                if (match && exprIndex >= 0 && exprListStr !== '') {
                    do {
                        expr = exprList[exprIndex].match(_mediaExpr);

                        if (!expr || !_features[expr[3]]) {
                            match = false;
                            break;
                        }

                        prefix  = expr[2];
                        length  = expr[5];
                        value   = length;
                        unit    = expr[7];
                        feature = _features[expr[3]];

                        // Convert unit types
                        if (unit) {
                            if (unit === 'px') {
                                // If unit is px
                                value = Number(length);
                            } else if (unit === 'em' || unit === 'rem') {
                                // Convert relative length unit to pixels
                                // Assumed base font size is 16px
                                value = 16 * length;
                            } else if (expr[8]) {
                                // Convert aspect ratio to decimal
                                value = (length / expr[8]).toFixed(2);
                            } else if (unit === 'dppx') {
                                // Convert resolution dppx unit to pixels
                                value = length * 96;
                            } else if (unit === 'dpcm') {
                                // Convert resolution dpcm unit to pixels
                                value = length * 0.3937;
                            } else {
                                // default
                                value = Number(length);
                            }
                        }

                        // Test for prefix min or max
                        // Test value against feature
                        if (prefix === 'min-' && value) {
                            match = feature >= value;
                        } else if (prefix === 'max-' && value) {
                            match = feature <= value;
                        } else if (value) {
                            match = feature === value;
                        } else {
                            match = !!feature;
                        }

                        // If 'match' is false, break loop
                        // Continue main loop through query list
                        if (!match) {
                            break;
                        }
                    } while (exprIndex--);
                }

                // If match is true, break loop
                // Once matched, no need to check other queries
                if (match) {
                    break;
                }
            } while (mqIndex--);

            return negate ? !match : match;
        },

        /*
            _setFeature
         */
        _setFeature = function () {
            // Sets properties of '_features' that change on resize and/or orientation.
            var w   = win.innerWidth || _viewport.clientWidth,
                h   = win.innerHeight || _viewport.clientHeight,
                dw  = win.screen.width,
                dh  = win.screen.height,
                c   = win.screen.colorDepth,
                x   = win.devicePixelRatio;

            _features.width                     = w;
            _features.height                    = h;
            _features['aspect-ratio']           = (w / h).toFixed(2);
            _features['device-width']           = dw;
            _features['device-height']          = dh;
            _features['device-aspect-ratio']    = (dw / dh).toFixed(2);
            _features.color                     = c;
            _features['color-index']            = Math.pow(2, c);
            _features.orientation               = (h >= w ? 'portrait' : 'landscape');
            _features.resolution                = (x && x * 96) || win.screen.deviceXDPI || 96;
            _features['device-pixel-ratio']     = x || 1;
        },

        /*
            _watch
         */
        _watch = function () {
            clearTimeout(_timer);

            _timer = setTimeout(function () {
                var query   = null,
                    qIndex  = _queryID - 1,
                    qLength = qIndex,
                    match   = false;

                if (qIndex >= 0) {
                    _setFeature();

                    do {
                        query = _queries[qLength - qIndex];

                        if (query) {
                            match = _matches(query.mql.media);

                            if ((match && !query.mql.matches) || (!match && query.mql.matches)) {
                                query.mql.matches = match;

                                if (query.listeners) {
                                    for (var i = 0, il = query.listeners.length; i < il; i++) {
                                        if (query.listeners[i]) {
                                            query.listeners[i].call(win, query.mql);
                                        }
                                    }
                                }
                            }
                        }
                    } while(qIndex--);
                }

                
            }, 10);
        },

        /*
            _init
         */
        _init = function () {
            var head        = _doc.getElementsByTagName('head')[0],
                style       = _doc.createElement('style'),
                info        = null,
                typeList    = ['screen', 'print', 'speech', 'projection', 'handheld', 'tv', 'braille', 'embossed', 'tty'],
                typeIndex   = 0,
                typeLength  = typeList.length,
                cssText     = '#mediamatchjs { position: relative; z-index: 0; }',
                eventPrefix = '',
                addEvent    = win.addEventListener || (eventPrefix = 'on') && win.attachEvent;

            style.type  = 'text/css';
            style.id    = 'mediamatchjs';

            head.appendChild(style);

            // Must be placed after style is inserted into the DOM for IE
            info = (win.getComputedStyle && win.getComputedStyle(style)) || style.currentStyle;

            // Create media blocks to test for media type
            for ( ; typeIndex < typeLength; typeIndex++) {
                cssText += '@media ' + typeList[typeIndex] + ' { #mediamatchjs { position: relative; z-index: ' + typeIndex + ' } }';
            }

            // Add rules to style element
            if (style.styleSheet) {
                style.styleSheet.cssText = cssText;
            } else {
                style.textContent = cssText;
            }

            // Get media type
            _type = typeList[(info.zIndex * 1) || 0];

            head.removeChild(style);

            _setFeature();

            // Set up listeners
            addEvent(eventPrefix + 'resize', _watch);
            addEvent(eventPrefix + 'orientationchange', _watch);
        };

    _init();

    /*
        A list of parsed media queries, ex. screen and (max-width: 400px), screen and (max-width: 800px)
    */
    return function (media) {
        var id  = _queryID,
            mql = {
                matches         : false,
                media           : media,
                addListener     : function addListener(listener) {
                    _queries[id].listeners || (_queries[id].listeners = []);
                    listener && _queries[id].listeners.push(listener);
                },
                removeListener  : function removeListener(listener) {
                    var query   = _queries[id],
                        i       = 0,
                        il      = 0;

                    if (!query) {
                        return;
                    }

                    il = query.listeners.length;

                    for ( ; i < il; i++) {
                        if (query.listeners[i] === listener) {
                            query.listeners.splice(i, 1);
                        }
                    }
                }
            };

        if (media === '') {
            mql.matches = true;
            return mql;
        }

        mql.matches = _matches(media);

        _queryID = _queries.push({
            mql         : mql,
            listeners   : null
        });

        return mql;
    };
}(window));

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function( win ){
	//exposed namespace
	win.respond		= {};
	
	//define update even in native-mq-supporting browsers, to avoid errors
	respond.update	= function(){};
	
	//expose media query support flag for external use
	respond.mediaQueriesSupported	= win.matchMedia && win.matchMedia( "only all" ).matches && win.matchMedia('(min-monochrome: 0)').matches;
	
	//if media queries are supported, exit here
	if( respond.mediaQueriesSupported ){ return; }
	
	//define vars
	var doc 			= win.document,
		docElem 		= doc.documentElement,
		mediastyles		= [],
		rules			= [],
		appendedEls 	= [],
		parsedSheets 	= {},
		resizeThrottle	= 30,
		head 			= doc.getElementsByTagName( "head" )[0] || docElem,
		base			= doc.getElementsByTagName( "base" )[0],
		links			= head.getElementsByTagName( "link" ),
		requestQueue	= [],
		
		//loop stylesheets, send text content to translate
		ripCSS			= function(){
			var sheets 	= links,
				sl 		= sheets.length,
				i		= 0,
				//vars for loop:
				sheet, href, media, isCSS;

			for( ; i < sl; i++ ){
				sheet	= sheets[ i ],
				href	= sheet.href,
				media	= sheet.media,
				isCSS	= sheet.rel && sheet.rel.toLowerCase() === "stylesheet";

				//only links plz and prevent re-parsing
				if( !!href && isCSS && !parsedSheets[ href ] ){
					// selectivizr exposes css through the rawCssText expando
					if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
						translate( sheet.styleSheet.rawCssText, href, media );
						parsedSheets[ href ] = true;
					} else {
						if( (!/^([a-zA-Z:]*\/\/)/.test( href ) && !base)
							|| href.replace( RegExp.$1, "" ).split( "/" )[0] === win.location.host ){
							requestQueue.push( {
								href: href,
								media: media
							} );
						}
					}
				}
			}
			makeRequests();
		},
		
		//recurse through request queue, get css text
		makeRequests	= function(){
			if( requestQueue.length ){
				var thisRequest = requestQueue.shift();
				
				ajax( thisRequest.href, function( styles ){
					translate( styles, thisRequest.href, thisRequest.media );
					parsedSheets[ thisRequest.href ] = true;
					makeRequests();
				} );
			}
		},
		
		//find media blocks in css text, convert to style blocks
		translate			= function( styles, href, media ){
			var qs			= styles.match(  /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi ),
				ql			= qs && qs.length || 0,
				//try to get CSS path
				href		= href.substring( 0, href.lastIndexOf( "/" )),
				repUrls		= function( css ){
					return css.replace( /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + href + "$2$3" );
				},
				useMedia	= !ql && media,
				//vars used in loop
				i			= 0,
				j, fullq, thisq, eachq, eql;

			//if path exists, tack on trailing slash
			if( href.length ){ href += "/"; }	
				
			//if no internal queries exist, but media attr does, use that	
			//note: this currently lacks support for situations where a media attr is specified on a link AND
				//its associated stylesheet has internal CSS media queries.
				//In those cases, the media attribute will currently be ignored.
			if( useMedia ){
				ql = 1;
			}
			

			for( ; i < ql; i++ ){
				j	= 0;
				
				//media attr
				if( useMedia ){
					fullq = media;
					rules.push( repUrls( styles ) );
				}
				//parse for styles
				else{
					fullq	= qs[ i ].match( /@media *([^\{]+)\{([\S\s]+?)$/ ) && RegExp.$1;
					rules.push( RegExp.$2 && repUrls( RegExp.$2 ) );
				}
				
				eachq	= fullq.split( "," );
				eql		= eachq.length;
					
				for( ; j < eql; j++ ){
					thisq	= eachq[ j ];
					mediastyles.push( { 
						media	: thisq.split( "(" )[ 0 ].match( /(only\s+)?([a-zA-Z]+)\s?/ ) && RegExp.$2 || "all",
						rules	: rules.length - 1,
						hasquery: thisq.indexOf("(") > -1,
						minw	: thisq.match( /\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/ ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" ), 
						maxw	: thisq.match( /\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/ ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" )
					} );
				}	
			}

			applyMedia();
		},
        	
		lastCall,
		
		resizeDefer,
		
		// returns the value of 1em in pixels
		getEmValue		= function() {
			var ret,
				div = doc.createElement('div'),
				body = doc.body,
				fakeUsed = false;
									
			div.style.cssText = "position:absolute;font-size:1em;width:1em";
					
			if( !body ){
				body = fakeUsed = doc.createElement( "body" );
				body.style.background = "none";
			}
					
			body.appendChild( div );
								
			docElem.insertBefore( body, docElem.firstChild );
								
			ret = div.offsetWidth;
								
			if( fakeUsed ){
				docElem.removeChild( body );
			}
			else {
				body.removeChild( div );
			}
			
			//also update eminpx before returning
			ret = eminpx = parseFloat(ret);
								
			return ret;
		},
		
		//cached container for 1em value, populated the first time it's needed 
		eminpx,
		
		//enable/disable styles
		applyMedia			= function( fromResize ){
			var name		= "clientWidth",
				docElemProp	= docElem[ name ],
				currWidth 	= doc.compatMode === "CSS1Compat" && docElemProp || doc.body[ name ] || docElemProp,
				styleBlocks	= {},
				lastLink	= links[ links.length-1 ],
				now 		= (new Date()).getTime();

			//throttle resize calls	
			if( fromResize && lastCall && now - lastCall < resizeThrottle ){
				clearTimeout( resizeDefer );
				resizeDefer = setTimeout( applyMedia, resizeThrottle );
				return;
			}
			else {
				lastCall	= now;
			}
										
			for( var i in mediastyles ){
				var thisstyle = mediastyles[ i ],
					min = thisstyle.minw,
					max = thisstyle.maxw,
					minnull = min === null,
					maxnull = max === null,
					em = "em";
				
				if( !!min ){
					min = parseFloat( min ) * ( min.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
				}
				if( !!max ){
					max = parseFloat( max ) * ( max.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
				}
				
				// if there's no media query at all (the () part), or min or max is not null, and if either is present, they're true
				if( !thisstyle.hasquery || ( !minnull || !maxnull ) && ( minnull || currWidth >= min ) && ( maxnull || currWidth <= max ) ){
						if( !styleBlocks[ thisstyle.media ] ){
							styleBlocks[ thisstyle.media ] = [];
						}
						styleBlocks[ thisstyle.media ].push( rules[ thisstyle.rules ] );
				}
			}
			
			//remove any existing respond style element(s)
			for( var i in appendedEls ){
				if( appendedEls[ i ] && appendedEls[ i ].parentNode === head ){
					head.removeChild( appendedEls[ i ] );
				}
			}
			
			//inject active styles, grouped by media type
			for( var i in styleBlocks ){
				var ss		= doc.createElement( "style" ),
					css		= styleBlocks[ i ].join( "\n" );
				
				ss.type = "text/css";	
				ss.media	= i;
				
				//originally, ss was appended to a documentFragment and sheets were appended in bulk.
				//this caused crashes in IE in a number of circumstances, such as when the HTML element had a bg image set, so appending beforehand seems best. Thanks to @dvelyk for the initial research on this one!
				head.insertBefore( ss, lastLink.nextSibling );
				
				if ( ss.styleSheet ){ 
		        	ss.styleSheet.cssText = css;
		        } 
		        else {
					ss.appendChild( doc.createTextNode( css ) );
		        }
		        
				//push to appendedEls to track for later removal
				appendedEls.push( ss );
			}
		},
		//tweaked Ajax functions from Quirksmode
		ajax = function( url, callback ) {
			var req = xmlHttp();
			if (!req){
				return;
			}	
			req.open( "GET", url, true );
			req.onreadystatechange = function () {
				if ( req.readyState != 4 || req.status != 200 && req.status != 304 ){
					return;
				}
				callback( req.responseText );
			}
			if ( req.readyState == 4 ){
				return;
			}
			req.send( null );
		},
		//define ajax obj 
		xmlHttp = (function() {
			var xmlhttpmethod = false;	
			try {
				xmlhttpmethod = new XMLHttpRequest();
			}
			catch( e ){
				xmlhttpmethod = new ActiveXObject( "Microsoft.XMLHTTP" );
			}
			return function(){
				return xmlhttpmethod;
			};
		})();
	
	//translate CSS
	ripCSS();
	
	//expose update for re-running respond later on
	respond.update = ripCSS;
	
	//adjust on resize
	function callMedia(){
		applyMedia( true );
	}
	if( win.addEventListener ){
		win.addEventListener( "resize", callMedia, false );
	}
	else if( win.attachEvent ){
		win.attachEvent( "onresize", callMedia );
	}
})(this);

/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
(function( w ){
	"use strict";
	// Bail out for browsers that have addListener support
	if (w.matchMedia && w.matchMedia('all').addListener) {
		return false;
	}

	var localMatchMedia = w.matchMedia,
		hasMediaQueries = localMatchMedia('only all').matches,
		isListening     = false,
		timeoutID       = 0,    // setTimeout for debouncing 'handleChange'
		queries         = [],   // Contains each 'mql' and associated 'listeners' if 'addListener' is used
		handleChange    = function(evt) {
			// Debounce
			w.clearTimeout(timeoutID);

			timeoutID = w.setTimeout(function() {
				for (var i = 0, il = queries.length; i < il; i++) {
					var mql         = queries[i].mql,
						listeners   = queries[i].listeners || [],
						matches     = localMatchMedia(mql.media).matches;

					// Update mql.matches value and call listeners
					// Fire listeners only if transitioning to or from matched state
					if (matches !== mql.matches) {
						mql.matches = matches;

						for (var j = 0, jl = listeners.length; j < jl; j++) {
							listeners[j].call(w, mql);
						}
					}
				}
			}, 30);
		};

	w.matchMedia = function(media) {
		var mql         = localMatchMedia(media),
			listeners   = [],
			index       = 0;

		mql.addListener = function(listener) {
			// Changes would not occur to css media type so return now (Affects IE <= 8)
			if (!hasMediaQueries) {
				return;
			}

			// Set up 'resize' listener for browsers that support CSS3 media queries (Not for IE <= 8)
			// There should only ever be 1 resize listener running for performance
			if (!isListening) {
				isListening = true;
				w.addEventListener('resize', handleChange, true);
			}

			// Push object only if it has not been pushed already
			if (index === 0) {
				index = queries.push({
					mql         : mql,
					listeners   : listeners
				});
			}

			listeners.push(listener);
		};

		mql.removeListener = function(listener) {
			for (var i = 0, il = listeners.length; i < il; i++){
				if (listeners[i] === listener){
					listeners.splice(i, 1);
				}
			}
		};

		return mql;
	};
}( this ));
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */

(function(w){
	"use strict";
	w.matchMedia = w.matchMedia || (function( doc, undefined ) {

		var bool,
			docElem = doc.documentElement,
			refNode = docElem.firstElementChild || docElem.firstChild,
			// fakeBody required for <FF4 when executed in <head>
			fakeBody = doc.createElement( "body" ),
			div = doc.createElement( "div" );

		div.id = "mq-test-1";
		div.style.cssText = "position:absolute;top:-100em";
		fakeBody.style.background = "none";
		fakeBody.appendChild(div);

		return function(q){

			div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

			docElem.insertBefore( fakeBody, refNode );
			bool = div.offsetWidth === 42;
			docElem.removeChild( fakeBody );

			return {
				matches: bool,
				media: q
			};

		};

	}( w.document ));
}( this ));
/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

;(function (name, context, factory) {
	var matchMedia = window.matchMedia;

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = factory(matchMedia);
	}
	else if (typeof define === 'function' && define.amd) {
		define(function() {
			return (context[name] = factory(matchMedia));
		});
	}
	else {
		context[name] = factory(matchMedia);
	}
}('enquire', this, function (matchMedia) {

	'use strict';

    /*jshint unused:false */
    /**
     * Helper function for iterating over a collection
     *
     * @param collection
     * @param fn
     */
    function each(collection, fn) {
        var i      = 0,
            length = collection.length,
            cont;

        for(i; i < length; i++) {
            cont = fn(collection[i], i);
            if(cont === false) {
                break; //allow early exit
            }
        }
    }

    /**
     * Helper function for determining whether target object is an array
     *
     * @param target the object under test
     * @return {Boolean} true if array, false otherwise
     */
    function isArray(target) {
        return Object.prototype.toString.apply(target) === '[object Array]';
    }

    /**
     * Helper function for determining whether target object is a function
     *
     * @param target the object under test
     * @return {Boolean} true if function, false otherwise
     */
    function isFunction(target) {
        return typeof target === 'function';
    }

    /**
     * Delegate to handle a media query being matched and unmatched.
     *
     * @param {object} options
     * @param {function} options.match callback for when the media query is matched
     * @param {function} [options.unmatch] callback for when the media query is unmatched
     * @param {function} [options.setup] one-time callback triggered the first time a query is matched
     * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
     * @constructor
     */
    function QueryHandler(options) {
        this.options = options;
        !options.deferSetup && this.setup();
    }
    QueryHandler.prototype = {

        /**
         * coordinates setup of the handler
         *
         * @function
         */
        setup : function() {
            if(this.options.setup) {
                this.options.setup();
            }
            this.initialised = true;
        },

        /**
         * coordinates setup and triggering of the handler
         *
         * @function
         */
        on : function() {
            !this.initialised && this.setup();
            this.options.match && this.options.match();
        },

        /**
         * coordinates the unmatch event for the handler
         *
         * @function
         */
        off : function() {
            this.options.unmatch && this.options.unmatch();
        },

        /**
         * called when a handler is to be destroyed.
         * delegates to the destroy or unmatch callbacks, depending on availability.
         *
         * @function
         */
        destroy : function() {
            this.options.destroy ? this.options.destroy() : this.off();
        },

        /**
         * determines equality by reference.
         * if object is supplied compare options, if function, compare match callback
         *
         * @function
         * @param {object || function} [target] the target for comparison
         */
        equals : function(target) {
            return this.options === target || this.options.match === target;
        }

    };
    /**
     * Represents a single media query, manages it's state and registered handlers for this query
     *
     * @constructor
     * @param {string} query the media query string
     * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
     */
    function MediaQuery(query, isUnconditional) {
        this.query = query;
        this.isUnconditional = isUnconditional;
        this.handlers = [];
        this.mql = matchMedia(query);

        var self = this;
        this.listener = function(mql) {
            self.mql = mql;
            self.assess();
        };
        this.mql.addListener(this.listener);
    }
    MediaQuery.prototype = {

        /**
         * add a handler for this query, triggering if already active
         *
         * @param {object} handler
         * @param {function} handler.match callback for when query is activated
         * @param {function} [handler.unmatch] callback for when query is deactivated
         * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
         * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
         */
        addHandler : function(handler) {
            var qh = new QueryHandler(handler);
            this.handlers.push(qh);

            this.matches() && qh.on();
        },

        /**
         * removes the given handler from the collection, and calls it's destroy methods
         * 
         * @param {object || function} handler the handler to remove
         */
        removeHandler : function(handler) {
            var handlers = this.handlers;
            each(handlers, function(h, i) {
                if(h.equals(handler)) {
                    h.destroy();
                    return !handlers.splice(i,1); //remove from array and exit each early
                }
            });
        },

        /**
         * Determine whether the media query should be considered a match
         * 
         * @return {Boolean} true if media query can be considered a match, false otherwise
         */
        matches : function() {
            return this.mql.matches || this.isUnconditional;
        },

        /**
         * Clears all handlers and unbinds events
         */
        clear : function() {
            each(this.handlers, function(handler) {
                handler.destroy();
            });
            this.mql.removeListener(this.listener);
            this.handlers.length = 0; //clear array
        },

        /*
         * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
         */
        assess : function() {
            var action = this.matches() ? 'on' : 'off';

            each(this.handlers, function(handler) {
                handler[action]();
            });
        }
    };
    /**
     * Allows for registration of query handlers.
     * Manages the query handler's state and is responsible for wiring up browser events
     *
     * @constructor
     */
    function MediaQueryDispatch () {
        if(!matchMedia) {
            throw new Error('matchMedia not present, legacy browsers require a polyfill');
        }

        this.queries = {};
        this.browserIsIncapable = !matchMedia('only all').matches;
    }

    MediaQueryDispatch.prototype = {

        /**
         * Registers a handler for the given media query
         *
         * @param {string} q the media query
         * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
         * @param {function} options.match fired when query matched
         * @param {function} [options.unmatch] fired when a query is no longer matched
         * @param {function} [options.setup] fired when handler first triggered
         * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
         * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
         */
        register : function(q, options, shouldDegrade) {
            var queries         = this.queries,
                isUnconditional = shouldDegrade && this.browserIsIncapable;

            if(!queries[q]) {
                queries[q] = new MediaQuery(q, isUnconditional);
            }

            //normalise to object in an array
            if(isFunction(options)) {
                options = { match : options };
            }
            if(!isArray(options)) {
                options = [options];
            }
            each(options, function(handler) {
                if (isFunction(handler)) {
                    handler = { match : handler };
                }
                queries[q].addHandler(handler);
            });

            return this;
        },

        /**
         * unregisters a query and all it's handlers, or a specific handler for a query
         *
         * @param {string} q the media query to target
         * @param {object || function} [handler] specific handler to unregister
         */
        unregister : function(q, handler) {
            var query = this.queries[q];

            if(query) {
                if(handler) {
                    query.removeHandler(handler);
                }
                else {
                    query.clear();
                    delete this.queries[q];
                }
            }

            return this;
        }
    };

	return new MediaQueryDispatch();

}));
/*! jQuery UI - v1.10.4 - 2014-01-26
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.tabs.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function( $, undefined ) {

var uuid = 0,
	runiqueId = /^ui-id-\d+$/;

// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui = $.ui || {};

$.extend( $.ui, {
	version: "1.10.4",

	keyCode: {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		NUMPAD_ADD: 107,
		NUMPAD_DECIMAL: 110,
		NUMPAD_DIVIDE: 111,
		NUMPAD_ENTER: 108,
		NUMPAD_MULTIPLY: 106,
		NUMPAD_SUBTRACT: 109,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
});

// plugins
$.fn.extend({
	focus: (function( orig ) {
		return function( delay, fn ) {
			return typeof delay === "number" ?
				this.each(function() {
					var elem = this;
					setTimeout(function() {
						$( elem ).focus();
						if ( fn ) {
							fn.call( elem );
						}
					}, delay );
				}) :
				orig.apply( this, arguments );
		};
	})( $.fn.focus ),

	scrollParent: function() {
		var scrollParent;
		if (($.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
			scrollParent = this.parents().filter(function() {
				return (/(relative|absolute|fixed)/).test($.css(this,"position")) && (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
			}).eq(0);
		} else {
			scrollParent = this.parents().filter(function() {
				return (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
			}).eq(0);
		}

		return (/fixed/).test(this.css("position")) || !scrollParent.length ? $(document) : scrollParent;
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	},

	uniqueId: function() {
		return this.each(function() {
			if ( !this.id ) {
				this.id = "ui-id-" + (++uuid);
			}
		});
	},

	removeUniqueId: function() {
		return this.each(function() {
			if ( runiqueId.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		});
	}
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var map, mapName, img,
		nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap=#" + mapName + "]" )[0];
		return !!img && visible( img );
	}
	return ( /input|select|textarea|button|object/.test( nodeName ) ?
		!element.disabled :
		"a" === nodeName ?
			element.href || isTabIndexNotNaN :
			isTabIndexNotNaN) &&
		// the element and all of its ancestors must be visible
		visible( element );
}

function visible( element ) {
	return $.expr.filters.visible( element ) &&
		!$( element ).parents().addBack().filter(function() {
			return $.css( this, "visibility" ) === "hidden";
		}).length;
}

$.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo(function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		}) :
		// support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			});
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each(function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			});
		};

		$.fn[ "outer" + name] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each(function() {
				$( this).css( type, reduce( this, size, true, margin ) + "px" );
			});
		};
	});
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
	$.fn.removeData = (function( removeData ) {
		return function( key ) {
			if ( arguments.length ) {
				return removeData.call( this, $.camelCase( key ) );
			} else {
				return removeData.call( this );
			}
		};
	})( $.fn.removeData );
}





// deprecated
$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

$.support.selectstart = "onselectstart" in document.createElement( "div" );
$.fn.extend({
	disableSelection: function() {
		return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
			".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
	},

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	}
});

$.extend( $.ui, {
	// $.ui.plugin is deprecated. Use $.widget() extensions instead.
	plugin: {
		add: function( module, option, set ) {
			var i,
				proto = $.ui[ module ].prototype;
			for ( i in set ) {
				proto.plugins[ i ] = proto.plugins[ i ] || [];
				proto.plugins[ i ].push( [ option, set[ i ] ] );
			}
		},
		call: function( instance, name, args ) {
			var i,
				set = instance.plugins[ name ];
			if ( !set || !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) {
				return;
			}

			for ( i = 0; i < set.length; i++ ) {
				if ( instance.options[ set[ i ][ 0 ] ] ) {
					set[ i ][ 1 ].apply( instance.element, args );
				}
			}
		}
	},

	// only used by resizable
	hasScroll: function( el, a ) {

		//If overflow is hidden, the element might have extra content, but the user wants to hide it
		if ( $( el ).css( "overflow" ) === "hidden") {
			return false;
		}

		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
			has = false;

		if ( el[ scroll ] > 0 ) {
			return true;
		}

		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[ scroll ] = 1;
		has = ( el[ scroll ] > 0 );
		el[ scroll ] = 0;
		return has;
	}
});

})( jQuery );
(function( $, undefined ) {

var uuid = 0,
	slice = Array.prototype.slice,
	_cleanData = $.cleanData;
$.cleanData = function( elems ) {
	for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
		try {
			$( elem ).triggerHandler( "remove" );
		// http://bugs.jquery.com/ticket/8235
		} catch( e ) {}
	}
	_cleanData( elems );
};

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );
};

$.widget.extend = function( target ) {
	var input = slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			// 1.9 BC for #7810
			// TODO remove dual storage
			.removeData( this.widgetName )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
				.attr( "aria-disabled", value );
			this.hoverable.removeClass( "ui-state-hover" );
			this.focusable.removeClass( "ui-state-focus" );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			// accept selectors, DOM elements
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^(\w+)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

})( jQuery );
(function( $, undefined ) {

var tabId = 0,
	rhash = /#.*$/;

function getNextTabId() {
	return ++tabId;
}

function isLocal( anchor ) {
	// support: IE7
	// IE7 doesn't normalize the href property when set via script (#9317)
	anchor = anchor.cloneNode( false );

	return anchor.hash.length > 1 &&
		decodeURIComponent( anchor.href.replace( rhash, "" ) ) ===
			decodeURIComponent( location.href.replace( rhash, "" ) );
}

$.widget( "ui.tabs", {
	version: "1.10.4",
	delay: 300,
	options: {
		active: null,
		collapsible: false,
		event: "click",
		heightStyle: "content",
		hide: null,
		show: null,

		// callbacks
		activate: null,
		beforeActivate: null,
		beforeLoad: null,
		load: null
	},

	_create: function() {
		var that = this,
			options = this.options;
		
		//console.log("test");
		
		this.running = false;

		this.element
			.addClass( "ui-tabs ui-widget ui-widget-content ui-corner-all" )
			.toggleClass( "ui-tabs-collapsible", options.collapsible )
			// Prevent users from focusing disabled tabs via click
			.delegate( ".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function( event ) {
				if ( $( this ).is( ".ui-state-disabled" ) ) {
					event.preventDefault();
				}
			})
			// support: IE <9
			// Preventing the default action in mousedown doesn't prevent IE
			// from focusing the element, so if the anchor gets focused, blur.
			// We don't have to worry about focusing the previously focused
			// element since clicking on a non-focusable element should focus
			// the body anyway.
			.delegate( ".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
				if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
					this.blur();
				}
			});

		this._processTabs();
		options.active = this._initialActive();

		// Take disabling tabs via class attribute from HTML
		// into account and update option properly.
		if ( $.isArray( options.disabled ) ) {
			options.disabled = $.unique( options.disabled.concat(
				$.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
					return that.tabs.index( li );
				})
			) ).sort();
		}

		// check for length avoids error when initializing empty list
		if ( this.options.active !== false && this.anchors.length ) {
			this.active = this._findActive( options.active );
		} else {
			this.active = $();
		}

		this._refresh();

		if ( this.active.length ) {
			this.load( options.active );
		}
	},

	_initialActive: function() {
		var active = this.options.active,
			collapsible = this.options.collapsible,
			locationHash = location.hash.substring( 1 );

		if ( active === null ) {
			// check the fragment identifier in the URL
			if ( locationHash ) {
				this.tabs.each(function( i, tab ) {
					if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
						active = i;
						return false;
					}
				});
			}

			// check for a tab marked active via a class
			if ( active === null ) {
				active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
			}

			// no active tab, set to false
			if ( active === null || active === -1 ) {
				active = this.tabs.length ? 0 : false;
			}
		}

		// handle numbers: negative, out of range
		if ( active !== false ) {
			active = this.tabs.index( this.tabs.eq( active ) );
			if ( active === -1 ) {
				active = collapsible ? false : 0;
			}
		}

		// don't allow collapsible: false and active: false
		if ( !collapsible && active === false && this.anchors.length ) {
			active = 0;
		}

		return active;
	},

	_getCreateEventData: function() {
		return {
			tab: this.active,
			panel: !this.active.length ? $() : this._getPanelForTab( this.active )
		};
	},

	_tabKeydown: function( event ) {
		var focusedTab = $( this.document[0].activeElement ).closest( "li" ),
			selectedIndex = this.tabs.index( focusedTab ),
			goingForward = true;

		if ( this._handlePageNav( event ) ) {
			return;
		}

		switch ( event.keyCode ) {
			case $.ui.keyCode.RIGHT:
			case $.ui.keyCode.DOWN:
				selectedIndex++;
				break;
			case $.ui.keyCode.UP:
			case $.ui.keyCode.LEFT:
				goingForward = false;
				selectedIndex--;
				break;
			case $.ui.keyCode.END:
				selectedIndex = this.anchors.length - 1;
				break;
			case $.ui.keyCode.HOME:
				selectedIndex = 0;
				break;
			case $.ui.keyCode.SPACE:
				// Activate only, no collapsing
				event.preventDefault();
				clearTimeout( this.activating );
				this._activate( selectedIndex );
				return;
			case $.ui.keyCode.ENTER:
				// Toggle (cancel delayed activation, allow collapsing)
				event.preventDefault();
				clearTimeout( this.activating );
				// Determine if we should collapse or activate
				this._activate( selectedIndex === this.options.active ? false : selectedIndex );
				return;
			default:
				return;
		}

		// Focus the appropriate tab, based on which key was pressed
		event.preventDefault();
		clearTimeout( this.activating );
		selectedIndex = this._focusNextTab( selectedIndex, goingForward );

		// Navigating with control key will prevent automatic activation
		if ( !event.ctrlKey ) {
			// Update aria-selected immediately so that AT think the tab is already selected.
			// Otherwise AT may confuse the user by stating that they need to activate the tab,
			// but the tab will already be activated by the time the announcement finishes.
			focusedTab.attr( "aria-selected", "false" );
			this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

			this.activating = this._delay(function() {
				this.option( "active", selectedIndex );
			}, this.delay );
		}
	},

	_panelKeydown: function( event ) {
		if ( this._handlePageNav( event ) ) {
			return;
		}

		// Ctrl+up moves focus to the current tab
		if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
			event.preventDefault();
			this.active.focus();
		}
	},

	// Alt+page up/down moves focus to the previous/next tab (and activates)
	_handlePageNav: function( event ) {
		if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
			this._activate( this._focusNextTab( this.options.active - 1, false ) );
			return true;
		}
		if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
			this._activate( this._focusNextTab( this.options.active + 1, true ) );
			return true;
		}
	},

	_findNextTab: function( index, goingForward ) {
		var lastTabIndex = this.tabs.length - 1;

		function constrain() {
			if ( index > lastTabIndex ) {
				index = 0;
			}
			if ( index < 0 ) {
				index = lastTabIndex;
			}
			return index;
		}

		while ( $.inArray( constrain(), this.options.disabled ) !== -1 ) {
			index = goingForward ? index + 1 : index - 1;
		}

		return index;
	},

	_focusNextTab: function( index, goingForward ) {
		index = this._findNextTab( index, goingForward );
		this.tabs.eq( index ).focus();
		return index;
	},

	_setOption: function( key, value ) {
		if ( key === "active" ) {
			// _activate() will handle invalid values and update this.options
			this._activate( value );
			return;
		}

		if ( key === "disabled" ) {
			// don't use the widget factory's disabled handling
			this._setupDisabled( value );
			return;
		}

		this._super( key, value);

		if ( key === "collapsible" ) {
			this.element.toggleClass( "ui-tabs-collapsible", value );
			// Setting collapsible: false while collapsed; open first panel
			if ( !value && this.options.active === false ) {
				this._activate( 0 );
			}
		}

		if ( key === "event" ) {
			this._setupEvents( value );
		}

		if ( key === "heightStyle" ) {
			this._setupHeightStyle( value );
		}
	},

	_tabId: function( tab ) {
		return tab.attr( "aria-controls" ) || "ui-tabs-" + getNextTabId();
	},

	_sanitizeSelector: function( hash ) {
		return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
	},

	refresh: function() {
		var options = this.options,
			lis = this.tablist.children( ":has(a[href])" );

		// get disabled tabs from class attribute from HTML
		// this will get converted to a boolean if needed in _refresh()
		options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
			return lis.index( tab );
		});

		this._processTabs();

		// was collapsed or no tabs
		if ( options.active === false || !this.anchors.length ) {
			options.active = false;
			this.active = $();
		// was active, but active tab is gone
		} else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {
			// all remaining tabs are disabled
			if ( this.tabs.length === options.disabled.length ) {
				options.active = false;
				this.active = $();
			// activate previous tab
			} else {
				this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
			}
		// was active, active tab still exists
		} else {
			// make sure active index is correct
			options.active = this.tabs.index( this.active );
		}

		this._refresh();
	},

	_refresh: function() {
		this._setupDisabled( this.options.disabled );
		this._setupEvents( this.options.event );
		this._setupHeightStyle( this.options.heightStyle );

		this.tabs.not( this.active ).attr({
			"aria-selected": "false",
			tabIndex: -1
		});
		this.panels.not( this._getPanelForTab( this.active ) )
			.hide()
			.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			});

		// Make sure one tab is in the tab order
		if ( !this.active.length ) {
			this.tabs.eq( 0 ).attr( "tabIndex", 0 );
		} else {
			this.active
				.addClass( "ui-tabs-active ui-state-active" )
				.attr({
					"aria-selected": "true",
					tabIndex: 0
				});
			this._getPanelForTab( this.active )
				.show()
				.attr({
					"aria-expanded": "true",
					"aria-hidden": "false"
				});
		}
	},

	_processTabs: function() {
		var that = this;

		this.tablist = this._getList()
			.addClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
			.attr( "role", "tablist" );

		this.tabs = this.tablist.find( "> li:has(a[href])" )
			.addClass( "ui-state-default ui-corner-top" )
			.attr({
				role: "tab",
				tabIndex: -1
			});

		this.anchors = this.tabs.map(function() {
				return $( "a", this )[ 0 ];
			})
			.addClass( "ui-tabs-anchor" )
			.attr({
				role: "presentation",
				tabIndex: -1
			});

		this.panels = $();

		this.anchors.each(function( i, anchor ) {
			var selector, panel, panelId,
				anchorId = $( anchor ).uniqueId().attr( "id" ),
				tab = $( anchor ).closest( "li" ),
				originalAriaControls = tab.attr( "aria-controls" );

			// inline tab
			if ( isLocal( anchor ) ) {
				selector = anchor.hash;
				panel = that.element.find( that._sanitizeSelector( selector ) );
			// remote tab
			} else {
				panelId = that._tabId( tab );
				selector = "#" + panelId;
				panel = that.element.find( selector );
				if ( !panel.length ) {
					panel = that._createPanel( panelId );
					panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
				}
				panel.attr( "aria-live", "polite" );
			}

			if ( panel.length) {
				that.panels = that.panels.add( panel );
			}
			if ( originalAriaControls ) {
				tab.data( "ui-tabs-aria-controls", originalAriaControls );
			}
			tab.attr({
				"aria-controls": selector.substring( 1 ),
				"aria-labelledby": anchorId
			});
			panel.attr( "aria-labelledby", anchorId );
		});

		this.panels
			.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
			.attr( "role", "tabpanel" );
	},

	// allow overriding how to find the list for rare usage scenarios (#7715)
	_getList: function() {
		return this.tablist || this.element.find( "ol,ul" ).eq( 0 );
	},

	_createPanel: function( id ) {
		return $( "<div>" )
			.attr( "id", id )
			.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
			.data( "ui-tabs-destroy", true );
	},

	_setupDisabled: function( disabled ) {
		if ( $.isArray( disabled ) ) {
			if ( !disabled.length ) {
				disabled = false;
			} else if ( disabled.length === this.anchors.length ) {
				disabled = true;
			}
		}

		// disable tabs
		for ( var i = 0, li; ( li = this.tabs[ i ] ); i++ ) {
			if ( disabled === true || $.inArray( i, disabled ) !== -1 ) {
				$( li )
					.addClass( "ui-state-disabled" )
					.attr( "aria-disabled", "true" );
			} else {
				$( li )
					.removeClass( "ui-state-disabled" )
					.removeAttr( "aria-disabled" );
			}
		}

		this.options.disabled = disabled;
	},

	_setupEvents: function( event ) {
		var events = {
			click: function( event ) {
				event.preventDefault();
			}
		};
		if ( event ) {
			$.each( event.split(" "), function( index, eventName ) {
				events[ eventName ] = "_eventHandler";
			});
		}

		this._off( this.anchors.add( this.tabs ).add( this.panels ) );
		this._on( this.anchors, events );
		this._on( this.tabs, { keydown: "_tabKeydown" } );
		this._on( this.panels, { keydown: "_panelKeydown" } );

		this._focusable( this.tabs );
		this._hoverable( this.tabs );
	},

	_setupHeightStyle: function( heightStyle ) {
		var maxHeight,
			parent = this.element.parent();

		if ( heightStyle === "fill" ) {
			maxHeight = parent.height();
			maxHeight -= this.element.outerHeight() - this.element.height();

			this.element.siblings( ":visible" ).each(function() {
				var elem = $( this ),
					position = elem.css( "position" );

				if ( position === "absolute" || position === "fixed" ) {
					return;
				}
				maxHeight -= elem.outerHeight( true );
			});

			this.element.children().not( this.panels ).each(function() {
				maxHeight -= $( this ).outerHeight( true );
			});

			this.panels.each(function() {
				$( this ).height( Math.max( 0, maxHeight -
					$( this ).innerHeight() + $( this ).height() ) );
			})
			.css( "overflow", "auto" );
		} else if ( heightStyle === "auto" ) {
			maxHeight = 0;
			this.panels.each(function() {
				maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
			}).height( maxHeight );
		}
	},

	_eventHandler: function( event ) {
		var options = this.options,
			active = this.active,
			anchor = $( event.currentTarget ),
			tab = anchor.closest( "li" ),
			clickedIsActive = tab[ 0 ] === active[ 0 ],
			collapsing = clickedIsActive && options.collapsible,
			toShow = collapsing ? $() : this._getPanelForTab( tab ),
			toHide = !active.length ? $() : this._getPanelForTab( active ),
			eventData = {
				oldTab: active,
				oldPanel: toHide,
				newTab: collapsing ? $() : tab,
				newPanel: toShow
			};

		event.preventDefault();

		if ( tab.hasClass( "ui-state-disabled" ) ||
				// tab is already loading
				tab.hasClass( "ui-tabs-loading" ) ||
				// can't switch durning an animation
				this.running ||
				// click on active header, but not collapsible
				( clickedIsActive && !options.collapsible ) ||
				// allow canceling activation
				( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
			return;
		}

		options.active = collapsing ? false : this.tabs.index( tab );

		this.active = clickedIsActive ? $() : tab;
		if ( this.xhr ) {
			this.xhr.abort();
		}

		if ( !toHide.length && !toShow.length ) {
			$.error( "jQuery UI Tabs: Mismatching fragment identifier." );
		}

		if ( toShow.length ) {
			this.load( this.tabs.index( tab ), event );
		}
		this._toggle( event, eventData );
	},

	// handles show/hide for selecting tabs
	_toggle: function( event, eventData ) {
		var that = this,
			toShow = eventData.newPanel,
			toHide = eventData.oldPanel;

		this.running = true;

		function complete() {
			that.running = false;
			that._trigger( "activate", event, eventData );
		}

		function show() {
			eventData.newTab.closest( "li" ).addClass( "ui-tabs-active ui-state-active" );

			if ( toShow.length && that.options.show ) {
				that._show( toShow, that.options.show, complete );
			} else {
				toShow.show();
				complete();
			}
		}

		// start out by hiding, then showing, then completing
		if ( toHide.length && this.options.hide ) {
			this._hide( toHide, this.options.hide, function() {
				eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
				show();
			});
		} else {
			eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
			toHide.hide();
			show();
		}

		toHide.attr({
			"aria-expanded": "false",
			"aria-hidden": "true"
		});
		eventData.oldTab.attr( "aria-selected", "false" );
		// If we're switching tabs, remove the old tab from the tab order.
		// If we're opening from collapsed state, remove the previous tab from the tab order.
		// If we're collapsing, then keep the collapsing tab in the tab order.
		if ( toShow.length && toHide.length ) {
			eventData.oldTab.attr( "tabIndex", -1 );
		} else if ( toShow.length ) {
			this.tabs.filter(function() {
				return $( this ).attr( "tabIndex" ) === 0;
			})
			.attr( "tabIndex", -1 );
		}

		toShow.attr({
			"aria-expanded": "true",
			"aria-hidden": "false"
		});
		eventData.newTab.attr({
			"aria-selected": "true",
			tabIndex: 0
		});
	},

	_activate: function( index ) {
		var anchor,
			active = this._findActive( index );

		// trying to activate the already active panel
		if ( active[ 0 ] === this.active[ 0 ] ) {
			return;
		}

		// trying to collapse, simulate a click on the current active header
		if ( !active.length ) {
			active = this.active;
		}

		anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
		this._eventHandler({
			target: anchor,
			currentTarget: anchor,
			preventDefault: $.noop
		});
	},

	_findActive: function( index ) {
		return index === false ? $() : this.tabs.eq( index );
	},

	_getIndex: function( index ) {
		// meta-function to give users option to provide a href string instead of a numerical index.
		if ( typeof index === "string" ) {
			index = this.anchors.index( this.anchors.filter( "[href$='" + index + "']" ) );
		}

		return index;
	},

	_destroy: function() {
		if ( this.xhr ) {
			this.xhr.abort();
		}

		this.element.removeClass( "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible" );

		this.tablist
			.removeClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
			.removeAttr( "role" );

		this.anchors
			.removeClass( "ui-tabs-anchor" )
			.removeAttr( "role" )
			.removeAttr( "tabIndex" )
			.removeUniqueId();

		this.tabs.add( this.panels ).each(function() {
			if ( $.data( this, "ui-tabs-destroy" ) ) {
				$( this ).remove();
			} else {
				$( this )
					.removeClass( "ui-state-default ui-state-active ui-state-disabled " +
						"ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel" )
					.removeAttr( "tabIndex" )
					.removeAttr( "aria-live" )
					.removeAttr( "aria-busy" )
					.removeAttr( "aria-selected" )
					.removeAttr( "aria-labelledby" )
					.removeAttr( "aria-hidden" )
					.removeAttr( "aria-expanded" )
					.removeAttr( "role" );
			}
		});

		this.tabs.each(function() {
			var li = $( this ),
				prev = li.data( "ui-tabs-aria-controls" );
			if ( prev ) {
				li
					.attr( "aria-controls", prev )
					.removeData( "ui-tabs-aria-controls" );
			} else {
				li.removeAttr( "aria-controls" );
			}
		});

		this.panels.show();

		if ( this.options.heightStyle !== "content" ) {
			this.panels.css( "height", "" );
		}
	},

	enable: function( index ) {
		var disabled = this.options.disabled;
		if ( disabled === false ) {
			return;
		}

		if ( index === undefined ) {
			disabled = false;
		} else {
			index = this._getIndex( index );
			if ( $.isArray( disabled ) ) {
				disabled = $.map( disabled, function( num ) {
					return num !== index ? num : null;
				});
			} else {
				disabled = $.map( this.tabs, function( li, num ) {
					return num !== index ? num : null;
				});
			}
		}
		this._setupDisabled( disabled );
	},

	disable: function( index ) {
		var disabled = this.options.disabled;
		if ( disabled === true ) {
			return;
		}

		if ( index === undefined ) {
			disabled = true;
		} else {
			index = this._getIndex( index );
			if ( $.inArray( index, disabled ) !== -1 ) {
				return;
			}
			if ( $.isArray( disabled ) ) {
				disabled = $.merge( [ index ], disabled ).sort();
			} else {
				disabled = [ index ];
			}
		}
		this._setupDisabled( disabled );
	},

	load: function( index, event ) {
		index = this._getIndex( index );
		var that = this,
			tab = this.tabs.eq( index ),
			anchor = tab.find( ".ui-tabs-anchor" ),
			panel = this._getPanelForTab( tab ),
			eventData = {
				tab: tab,
				panel: panel
			};

		// not remote
		if ( isLocal( anchor[ 0 ] ) ) {
			return;
		}

		this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

		// support: jQuery <1.8
		// jQuery <1.8 returns false if the request is canceled in beforeSend,
		// but as of 1.8, $.ajax() always returns a jqXHR object.
		if ( this.xhr && this.xhr.statusText !== "canceled" ) {
			tab.addClass( "ui-tabs-loading" );
			panel.attr( "aria-busy", "true" );

			this.xhr
				.success(function( response ) {
					// support: jQuery <1.8
					// http://bugs.jquery.com/ticket/11778
					setTimeout(function() {
						panel.html( response );
						that._trigger( "load", event, eventData );
					}, 1 );
				})
				.complete(function( jqXHR, status ) {
					// support: jQuery <1.8
					// http://bugs.jquery.com/ticket/11778
					setTimeout(function() {
						if ( status === "abort" ) {
							that.panels.stop( false, true );
						}

						tab.removeClass( "ui-tabs-loading" );
						panel.removeAttr( "aria-busy" );

						if ( jqXHR === that.xhr ) {
							delete that.xhr;
						}
					}, 1 );
				});
		}
	},

	_ajaxSettings: function( anchor, event, eventData ) {
		var that = this;
		return {
			url: anchor.attr( "href" ),
			beforeSend: function( jqXHR, settings ) {
				return that._trigger( "beforeLoad", event,
					$.extend( { jqXHR : jqXHR, ajaxSettings: settings }, eventData ) );
			}
		};
	},

	_getPanelForTab: function( tab ) {
		var id = $( tab ).attr( "aria-controls" );
		return this.element.find( this._sanitizeSelector( "#" + id ) );
	}
});

})( jQuery );

/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // using AMD; register as anon module
        define(['jquery'], factory);
    } else {
        // no AMD; invoke directly
        factory( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );
    }
}

(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (t == "file") {
            if (/MSIE/.test(navigator.userAgent)) {
                $(this).replaceWith($(this).clone(true));
            } else {
                $(this).val('');
            }
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

}));

// !! I prefer this to equaliser but equaliser may have more functions and may have a CDN

/**
* jquery.matchHeight.js v0.5.2
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  $.fn.matchHeight
    *  plugin definition
    */

    $.fn.matchHeight = function(byRow) {

        // handle matchHeight('remove')
        if (byRow === 'remove') {
            var that = this;

            // remove fixed height from all selected elements
            this.css('height', '');

            // remove selected elements from all groups
            $.each($.fn.matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1)
            return this;

        // byRow default to true
        // Changed the default to false 
        byRow = (typeof byRow !== 'undefined') ? byRow : false;

        // keep track of this group so we can re-apply later on load and resize events
        $.fn.matchHeight._groups.push({
            elements: this,
            byRow: byRow
        });

        // match each element's height to the tallest element in the selection
        $.fn.matchHeight._apply(this, byRow);

        return this;
    };

    /*
    *  plugin global options
    */

    $.fn.matchHeight._groups = [];
    $.fn.matchHeight._throttle = 80;
    $.fn.matchHeight._maintainScroll = false;

    /*
    *  $.fn.matchHeight._apply
    *  apply matchHeight to given elements
    */

    $.fn.matchHeight._apply = function(elements, byRow) {
        var $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // temporarily must force hidden parents visible
        var $hiddenParents = $elements.parents().filter(':hidden');
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (byRow) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display') === 'inline-block' ? 'inline-block' : 'block';

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);

                $that.attr('style', $that.data('style-cache') || '')
                     .css('height', '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                maxHeight = 0;

            // skip apply to rows with only one item
            if (byRow && $row.length <= 1)
                return;

            // iterate the row and find the max height
            $row.each(function(){
                var $that = $(this),
                    display = $that.css('display') === 'inline-block' ? 'inline-block' : 'block';

                // ensure we get the correct actual height (and not a previously set height value)
                $that.css({ 'display': display, 'height': '' });

                // find the max height (including padding, but not margin)
                if ($that.outerHeight(false) > maxHeight)
                    maxHeight = $that.outerHeight(false);

                // revert display block
                $that.css('display', '');
            });

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css('height', maxHeight - verticalPadding);
            });
        });

        // revert hidden parents
        $hiddenParents.css('display', '');

        // restore scroll position if enabled
        if ($.fn.matchHeight._maintainScroll)
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));

        return this;
    };

    /*
    *  $.fn.matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    $.fn.matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-match-height') || $this.attr('data-mh');
            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  $.fn.matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function() {
        $.each($.fn.matchHeight._groups, function() {
            $.fn.matchHeight._apply(this.elements, this.byRow);
        });
    };

    $.fn.matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth)
                return;
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update();
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update();
                _updateTimeout = -1;
            }, $.fn.matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $($.fn.matchHeight._applyDataApi);

    // update heights on load and resize events
    $(window).bind('load', function(event) {
        $.fn.matchHeight._update();
    });

    // throttled update heights on resize events
    $(window).bind('resize orientationchange', function(event) {
        $.fn.matchHeight._update(true, event);
    });

})(jQuery);
/*
 * jquery.tabbable
 * https://github.com/damian/jquery.tabbable
 *
 * Copyright (c) 2013 Damian Nicholson
 * Licensed under the MIT license.
 */
(function($) {

  /**
   * A collection of functions to determine if an element is tabbable
   *
   * @class Subject
   * @static
   */
  var Subject = {

    /**
     * Contains a list of focussable elements
     *
     * @property FOCUSSABLE_ELEMS
     * @type Array
     * @static
     * @final
     */
    FOCUSSABLE_ELEMS : [
      'input',
      'select',
      'textarea',
      'button'
    ],

    /**
     * Determines if the DOMNode is tabbable
     *
     * @method isTabbable
     * @param {Node} elem The DOMNode under question
     * @return {Boolean}
     */
    isTabbable: function(elem) {
      return Subject.hasTabindex(elem) && Subject.isFocussable(elem) && Subject.isVisible(elem);
    },

    /**
     * @method hasTabindex
     * @param {Node} elem The DOMNode under question
     * @return {Boolean}
     */
    hasTabindex: function(elem) {
      return elem.tabIndex >= 0;
    },

    /**
     * @method isVisible
     * @param {Node} elem The DOMNode under question
     * @return {Boolean}
     */
    isVisible: function(elem) {
      return $(elem).is(':visible');
    },

    /**
     * @method isFocussable
     * @param {Node} elem The DOMNode under question
     * @return {Boolean}
     * @private
     */
    isFocussable: function(elem) {
      var node = elem.nodeName,
          regex = new RegExp(Subject.FOCUSSABLE_ELEMS.join('|'), 'gi');

      if (regex.test(node) && !elem.disabled) {
        return true;
      }

      if (/a/i.test(node) && elem.href) {
        return true;
      }

      return false;
    }
  };

  // Adds a tabbable pseudo selector to jQuery
  $.expr[':'].tabbable = Subject.isTabbable;

}(jQuery));
Function.prototype.bind = function(a) {var b = this;return function() {return b.apply(a, arguments);}}
var console=console||{"log":function(){}};
YUI.add('module', function(Y){
    var c = { // config
        bind: $.proxy, // Proxy object (fn, this)
        s: $, // selector function (selector) + s.on method (ev, fn)
        extend: Y.mix, // object extend function (child, parent)
        each: $.each // foreach function (obj, fn(key, val) )
    };
    
    Y.Test.Suite.prototype.run = function(){
        if(this.hasRun) return;
        this.hasRun = true;
        Y.Test.Runner.add(this).run();
    };
    Y.namespace("uk.gov.bristol");
    // Stephens MicroModule Definition

    //     Backbone.js 1.1.2 [extend method]
    //     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    //     Backbone may be freely distributed under the MIT license.
    //     For all details and documentation:
    //     http://backbonejs.org
    var Module = function(selector, options){
            this.options = this.getOptions(options);
            selector = (!!selector) ? selector : "body";
            this.$el = (typeof selector === "object") ? selector : $(selector);
            if(!this.$el.length) return false;
            this.setEvents();
            this.DOM = this.getDOM();
            this.render(options);
        },
        jQueryPlugin = function(name, child){
            $.fn[name] = function(options){
                return this.each(function(i, el){
                    return new child($(el), options);
                });
            };
        };

    Module.extend = function(protoProps, staticProps) {
        var parent = this;
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        child = function(){ return parent.apply(this, arguments); };

        // Add static properties to the constructor function, if supplied.
        c.s.extend(child, parent, staticProps);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        var Surrogate = function(){ this.constructor = child; };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate;

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) c.s.extend(child.prototype, protoProps);

        // Set a convenience property in case the parent's prototype is needed
        // later.
        child.__super__ = parent.prototype;

        // If a pluginName is set
        if(protoProps.pluginName){
            // Run the jQuery Plugin generator
            jQueryPlugin(protoProps.pluginName, child);
        }

        return child;
    };
 
    c.s.extend(Module.prototype, {
        events: [],
        DOM: [],
        options: [],
        render: function(){ return this; },
        getDOM: function() {
            var dom = [];
            c.each(this.DOM, function(k, v){
                if(typeof v === 'object') return;
                dom[k] = this.$el.find(v);
            }.bind(this));
            dom['el'] = this.$el;
            return dom;
        },
        getOptions: function(options){
            return c.s.extend({}, this.options, options);
        },
        setEvents: function(){
            c.each(this.events, function(k, fn){
                if(typeof fn === "string") fn = this[fn];
                var arr = k.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').match(/^(\S+)\s(.*)/).slice(1), doml,
                    sel = arr[1].replace(/\\/g, '');
                    arr[0] = (arr[0]=='hover')?'mouseenter':arr[0];
                    doml = (sel[0]=="$")? this.DOM[sel.slice(1)] : this.$el.find(sel) ;
                    this.$el.on(arr[0], doml, fn.bind(this));
            }.bind(this));
        },
    });

    Y.uk.gov.bristol.module = Module;

}, '1.0.1', {
    requires: [
        'event',
        'test',
        'node-event-simulate',
        'node',
        'test-console',
    ]
});
$(function(){
	return;
	// Breakpoints
	var mobile 		= "screen and (max-width: 480px)";
	var tablet 		= "screen and (min-width: 481px) and (max-width: 769px)";
	var desktop 	= "screen and (min-width: 769px)";
	
	// Rearrange templates based on priority
	if ($(".span4.priority--primary")[0]){
		var span4 = $(".span4.priority--primary");
		var span8 = $(".span8.priority--secondary");
	}
	
	enquire
		.register(mobile, {
	
		    // OPTIONAL
		    // If supplied, triggered when a media query matches.
		    match : function() {
		    	//console.log("MOBILE: match");
		    	
		    	if ($(".span4.priority--primary")[0]){
		    		span4.insertBefore(span8);
		    	}
		    },
		                                
		    // OPTIONAL
		    // If supplied, triggered when the media query transitions 
		    // *from a matched state to an unmatched state*.
		    unmatch : function() {
		    	//console.log("MOBILE: unmatch");
		    	
		    	if ($(".span4.priority--primary")[0]){
		    		span4.insertAfter(span8);
		    	}
		    	
		    	// NavigationLists: tiled lists
		    	$('.tiled.js--matchHeight .tiled__item__title').matchHeight('remove');
		    	
		    },    
		    
		    // OPTIONAL
		    // If supplied, triggered once, when the handler is registered.
		    setup : function() {
		    	
		    },    
		                                
		    // OPTIONAL, defaults to false
		    // If set to true, defers execution of the setup function 
		    // until the first time the media query is matched
		    deferSetup : true,
		                                
		    // OPTIONAL
		    // If supplied, triggered when handler is unregistered. 
		    // Place cleanup code here
		    destroy : function() {}
		      
		})
		.register(tablet, {
			
			// TABLET
		    match : function() {
		    	//console.log("TABLET: match");
		    	
		    	// NavigationLists: tiled lists
		    	$('.tiled.js--matchHeight .tiled__item__title').matchHeight();
		    },
		    
		    unmatch : function() {
		    	console.log("TABLET: unmatch");
		    }
		      
		})
		.register(desktop, {
			
			// DESKTOP
		    match : function() {
		    	//console.log("DESKTOP: match");
		    	
		    	// NavigationLists: tiled lists
		    	$('.tiled.js--matchHeight .tiled__item__title').matchHeight();
		    	
		    	// Parking: visitor permits
		    	$("#parking__visitor-permits__choose.js--matchHeight .slab").matchHeight();
		    	
		    	// Parking: permit details
		    	$(".permit.js--matchHeight > .permit__inner").matchHeight();
		    },
		    
		    unmatch : function() {
		    	//console.log("DESKTOP: unmatch");
		    	
		    	// Parking: visitor permits
		    	$("#parking__visitor-permits__choose.js--matchHeight .slab").matchHeight('remove');
		    	
		    	// Parking: permit details
		    	$(".permit.js--matchHeight > .permit__inner").matchHeight('remove');
		    }
		      
		});

	
});

	
/**
 * @fileOverview A jQuery UI Widget that extends the functionality of BCC addresslookup
 * @author Luke Taylor
 * @name $.bcc.addresslookup
 * @dependencies: jQuery, jQuery UI widget factory
 */
// (function($){
// 	return;

// 	'use strict';

// 	$.widget('bcc.addresslookup', {
// 		// default options
// 		options: {
// 			advancedClass: 'address-lookup--isActive',
// 			dynamicAddressClass: 'address-lookup--isSelected',
// 			dynamicAddressTemplate: '<div class="panel panel--affirm panel--date $class$"><span class="panel__title">Your selected address:</span><strong class="panel__copy">$message$</strong></div>'
// 		},

// 		/**
// 		 * create - private
// 		 */
// 		_create: function () {
			
// 			// target
// 			var target = this;
// 			// element
// 			var elem = $(this.element);

// 			// add advanced class
// 			elem.addClass(target.options.advancedClass);
			
// 			if( elem.find('.form__item__field--select').length !== 0) {
// 			// multiselect containing addresses
// 			var select = $(this.element).find('.form__item__field--select');
      
// 			// console.log(select[0]).selectedIndex;
      
// 			// output message dynamically if nessecary
// 			if (select[0].selectedIndex !== 0 && select[0].selectedIndex !== -1) {
				
// 				select.closest('.form__item').append(
// 					target.options.dynamicAddressTemplate
// 						.replace(/\$class\$/g, target.options.dynamicAddressClass)
// 						.replace(/\$message\$/g, select.find('option:selected').text())
// 				);
// 			}

// 			// select change
// 			select.change(function () {
// 				elem.find('.' + target.options.dynamicAddressClass).remove();
// 				if (select[0].selectedIndex !== 0) {
// 					$(this).closest('.form__item')
// 						.append(
// 								target.options.dynamicAddressTemplate
// 								.replace(/\$class\$/g, target.options.dynamicAddressClass)
// 								.replace(/\$message\$/g, select.find('option:selected').text())
// 						);
// 					$(this).closest('.form__item').removeClass('form__item--error');
// 				}
// 			});
// 			}
			
			
// 		}
// 	});
// })(jQuery);
/**
 * @fileOverview A jQuery UI Widget to make a collapsible table
 * @author Edward Silverton
 * @name $.bcc.collapsible
 * @dependencies: jQuery, jQuery UI widget factory
 */

(function($) {
  'use strict';

  $.widget('bcc.collapsetable', {

	options: {
		collapseWidth: 769,
		collapseClass: 'collapse',
		collapseCol: '.table__col--details'
	},

	_create: function() {
		var that = this;
		
		$(window).resize(function(){
			that._widthChange();
		});
		
		this._widthChange();
	},
	
	_widthChange: function () {
		
		var $el = $(this.element),
			$collapseCols = $($el.find(this.options.collapseCol));
		
		if(document.body.clientWidth < this.options.collapseWidth) {
		
			if (!$el.hasClass(this.options.collapseClass)){
				$el.addClass(this.options.collapseClass);
				
				// move collapseCol content to first col
				$collapseCols.each(function(i){
					var $this = $(this),

					// get previous sibling and move content into it
						$prevCol = $this.prev(),
						$contents = $this.contents(),
						$wrapper = $('<span class="wrapper wrapper--td" />');
					
					// if it's a th, add '& ' to wrapper.
					if ($this.is('th')){
						$wrapper = $('<span class="wrapper wrapper--th" />');
						//$wrapper.append('<span class="and"> and </span>');
					}

					$wrapper.append($contents);
					$prevCol.append($wrapper);
					
					$this.hide();
				});
			}

		} else {
			$el.removeClass(this.options.collapseClass);

			// if collapseCol is empty, move contents back from first col
			$collapseCols.each(function(i){
				var $this = $(this);
				
				if ($this.is(':empty')){
					var $prevCol = $this.prev(),
						$wrapper = $prevCol.find('.wrapper');
					//$wrapper.find('.and').remove();
					$this.append($wrapper.contents());
					$wrapper.remove();
				}
				
				$(this).show();
			});
		}
		
	}

  });

})(jQuery);

/**
 * @fileOverview A jQuery UI Widget to make a collapsible element
 * @author Mark Skinner
 * @name $.bcc.collapsible
 * @dependencies: jQuery, jQuery UI widget factory
 */

(function($) {
  'use strict';

  $.widget('bcc.collapsible', {

    options: {
      collapseToggleClass: '.js-collapse__toggle',
      collapseAreaClass: '.js-collapse__area',
      collapsedClass: 'is-collapsed',
      expandedClass: 'is-expanded',
      duration: 300
    },

    widgetEventPrefix: 'collapsible_',

    /**
     * Constructor
     */
    _create: function() {
      var self = this,
          toggleTrigger = self.element.find(self.options.collapseToggleClass);

      self._on(toggleTrigger, {
        'click': function() {
          if(self.element.hasClass(self.options.expandedClass)) {
            self.standardCollapse();
          } else {
            self.standardExpand();
          }
        }
      });
    },

    /**
     * Collapse the element
     *
     * @param duration
     * @param complete
     * @private
     */
    _collapse: function(duration, complete) {
      var self = this;
      self.element
          .addClass(self.options.collapsedClass)
          .removeClass(self.options.expandedClass);

      self.element.find(self.options.collapseAreaClass)
          .slideUp(duration, function() {
            if ( typeof complete !== 'undefined' ) {
              complete();
            }
          });
    },

    /**
     * Expand the element
     *
     * @param duration
     * @param complete
     * @private
     */
    _expand: function(duration, complete) {
      var self = this;
      self.element
          .addClass(self.options.expandedClass)
          .removeClass(self.options.collapsedClass);

      self.element.find(self.options.collapseAreaClass)
          .slideDown(duration, function() {
            if ( typeof complete !== 'undefined' ) {
              complete();
            }
          });
    },

    /**
     * Standard collapse with default duration
     * @param complete
     */
    standardCollapse: function(complete) {
      this._collapse(this.options.duration, complete);
    },

    /**
     * Quick collapse with no duration
     * @param complete
     */
    quickCollapse: function(complete) {
      this._collapse(0, complete);
    },

    /**
     * Standard expand with default duration
     * @param complete
     */
    standardExpand: function(complete) {
      this._expand(this.options.duration, complete);
    },

    /**
     * Quick expand with no duration.
     * @param complete
     */
    quickExpand: function(complete) {
      this._expand(0, complete);
    },

    /**
     * Destroy
     */
    _destroy: function() {
      var self = this;

      self.element
          .removeClass(self.options.expandedClass)
          .removeClass(self.options.expandedClass);
    }
  });

})(jQuery);

/**
 * @fileOverview A jQuery UI Widget that extends the functionality of BCC listtable
 * @author Luke Taylor
 * @name $.bcc.listtable
 * @dependencies: jQuery, jQuery UI widget factory
 */
(function($){

  'use strict';

  $.widget('bcc.listtable', {
    // default options
    options: {
      advancedClass: 'list-table-advanced'
    },

    /**
     * create - private
     */
    _create: function () {
      // target
      var target = this;

      // add advanced class
      $(this.element).addClass(target.options.advancedClass);

      // set the heights
      this.setHeight();

      // click event (this only affects mobile)
      $(this.element).find('.list-table__row').click(function () {
        $(this).toggleClass('list-table__row--active');
      });

      // inject icons
      $(this.element).find('.list-table__row__item--description').append('<span class="ico ico-right"></span><span class="ico ico-down"></span>');

      // @OPTIMIZE - refactor this is only needed to aid redraw when activity table is hidden inside tab and then revealed
      $('.tabs__list__activity').click(function () {
        setTimeout(function () { target.setHeight(); }, 500);
      });

    },

    /**
      * setHeight - public
    */
    setHeight: function () {
      $(this.element).find('.list-table__row .grid-wrap').each(function () {
        $(this).find('.grid-col').height('auto');
        $(this).find('.grid-col').height($(this).height());
      });
    }
  });
})(jQuery);
/**
 * @fileOverview A jQuery UI Widget that handles overlays
 * @author Luke Taylor
 * @name $.bcc.overlays
 * @dependencies: jQuery, jQuery UI widget factory, magnificpopup
 */
(function($){

  'use strict';

  $.widget('bcc.overlays', {
    // default options
    options: {
      initClass: 'js-overlay-init'
    },

    /**
     * create - private
     */
    _create: function () {
      // target
      var target = this;

      // add advanced class
      $(this.element).addClass(target.options.initClass);
    },

    /**
     * dialog - public
     */
    dialog: function () {
      $(this.element).magnificPopup({
        type: 'inline',
        midClick: true
      });
    },

    /**
     * external image - public
     */
    externalImage: function () {
      $(this.element).magnificPopup({
        type: 'image',
        closeBtnInside: false
      });
    },

    /**
     * external image retina - public
     */
    externalImageRetina: function () {
      $(this.element).magnificPopup({
        type: 'image',
        closeBtnInside: false,
        midClick: true,
        retina: {
          ratio: 2
        }
      });
    },

    /**
     * external images - public
     */
    externalImages: function () {
      $(this.element).magnificPopup({
        type: 'image',
        closeBtnInside: false,
        midClick: true,
        delegate: 'a',
        gallery: {
          enabled: true,
          navigateByImgClick: true
        }
      });
    },

    /**
     * inline image - public
     */
    inlineImage: function () {
      $(this.element).magnificPopup({
        type: 'inline',
        closeBtnInside: false,
        midClick: true
      });
    },

    /**
     * inline image - public
     */
    iframe: function () {
      $(this.element).magnificPopup({
        type: 'iframe',
        closeBtnInside: false,
        midClick: true
      });
    },

    /**
     * markup - public
     */
    markup: function () {
      $(this.element).magnificPopup({
        type: 'inline',
        closeBtnInside: true,
        midClick: true
      });
    }

  });
  
  
  
})(jQuery);
/**
 * @fileOverview A jQuery UI Widget to make page elements sticky to the screen
 * @name $.bcc.sticky
 * @dependencies: jQuery, jQuery UI widget factory
 */

(function($) {
	'use strict';

	$.widget('bcc.sticky', {

		options: {
			stickyClass: 'is-sticky',
			cloneClass: 'is-clone',
			borderlessClass: 'is-borderless',
			invisibleClass: 'is-invisible',
			visibleClass: 'is-visible'
		},

		widgetEventPrefix: 'sticky_',

		/**
		* Constructor
		*/
		_create: function() {
			var self = this;
			// Create new element for showing/hiding
			self._new = self.element.clone();
			self._new
				.addClass(self.options.cloneClass)
				.addClass(self.options.invisibleClass)
				.addClass(self.options.borderlessClass) 
				.addClass('is-collapsed')
				.find('.page-contents__list-wrapper').attr('style', 'display:none');
			self._new.appendTo($('body'));

			// Add collapse classes
			// Specific to page contents - useful to be able to reuse elsewhere
			
			

			//Add sticky class to new element
			self._new.addClass(self.options.stickyClass);

			self._addGrid(self._new);

			self._timeoutId = null;

			self._trigger('cloned', {}, self._new);
			self._checkVisibility();
			self._on(self.window, {
				'resize': self._resizeHandler, 
				'orientationchange': self._resizeHandler, 
				'load': self._resizeHandler, 
				'scroll': self._checkVisibility 
			});
		},

	    /**
	     * Function to add grid so that fixed element has correct width
	     *
	     * @param elem
	     * @private
	     */
	    _addGrid: function(elem) {
	    	var self = this;
	    		
	    	var the_html = 	'';
	      		the_html += '	<div data-test="test1" class="row-fluid">';
	      		the_html += '	</div>';
	      		
	      		
			elem.wrapInner(the_html);
			
			
	    },


	    /**
	     * @param delay
	     * @private
	     */
	    _resizeHandler: function (delay) {

	    	var self = this;

	    	if (typeof (delay) === 'undefined') {
	        	delay = 200;
	    	}

	    	clearTimeout(self._timeoutId);

	    	// running a throttled resize
	    	self._timeoutId = 
	    		setTimeout(function (){
	        		self._topPosition = self.element.offset().top;
	        		self._checkVisibility();
	      		}, delay);

	    },

	    /**
	     * Check to see if the top of the page is passes the sticky element's top.
	     * @private
	     * @fires enter
	     * @fires exit
	     */
	     _checkVisibility: function() {
      		
      		var self = this;
      
			self._windowTop = $(window).scrollTop();

			if (self._windowTop >= self._topPosition) {
				//Specific to page contents
				if(self._new.hasClass(self.options.invisibleClass)) {
					self._trigger('enter', {}, {
						elem: self._new
					});
				}

				self._new
					.removeClass(self.options.invisibleClass)
					.addClass(self.options.visibleClass);

			} else {
				
				//Specific to page contents
				
				if(self._new.hasClass(self.options.visibleClass)) {
					self._trigger('exit', {}, {
						elem: self._new
					});
				}

				self._new
					.removeClass(self.options.visibleClass)
					.addClass(self.options.invisibleClass);
			}
			
			//Specific to page contents
			self._bottomPosition = self._topPosition + self.element.height() - self._new.height();
				
			// @OPTIMIZE ^^^^ look at how to take the height values out (should they be variables?)
			if (self._windowTop >= self._bottomPosition) {
				self._new.removeClass(self.options.borderlessClass);
			} else {
				self._new.addClass(self.options.borderlessClass);
			}
			
			
		},

		/**
		* Destroy
		*/
		_destroy: function() {
			this._new.remove();
		}
	});

})(jQuery);

/**
 * @fileOverview A jQuery UI Widget to handle form validation
 * @author Luke Taylor
 * @name $.bcc.validate
 * @dependencies: jQuery, jQuery UI widget factory
 */
(function($){
	
	'use strict';
	
	// !! Can we remove?
	// This is not an elegant solution
	$(".js--controls-group .js--required").prop('required', true);

  	$.widget('bcc.validate', {

  		// default options
  		options: {
  			
  			// template used for errors
  			errorMessageTemplate: '<div class="form__item__error">$message$</div>',
      
  			// use aria for accessibility
  			useAria: true,
  			
  			// error message element
  			errorMessageElement: '.form__item__message--error',
      
  			// attribute for match validation
  			matchAttribute: 'data-match',
      
  			// element to add error class too
  			errorElement: '.form__item',
      
  			// error class to add to above element
  			errorClass: 'form__item--error',
      
  			// blurred indicator class
  			blurIndicatorClass: 'form__item--blurred',

  			// Fieldset Class
  			fieldSetClass: '.form__set',

  			fieldSetErrorClass : 'form__set--error',
      
  			// whether or not to validate on key up
  			keyUpValidation: true
      
  			// backend error class
  			//backendErrorClass: 'form__item--backend-error'
    	  
  		},

		/**
		 * create - private
		 */
  		_create: function () {

  			// element and target
  			var element = $(this.element);
  			var target = this;

  			// disable html5 form validation
  			element.attr('novalidate', 'novalidate');

  			// validate all inputs / textareas that are required
  			this._requiredValidate(element, target);
	
  			// validate all inputs / textareas with a pattern attribute
  			this._patternValidate(element, target);
	
  			// validate appropriate selects
  			this._selectValidate(element, target);
	
  			// validate appropriate checkboxes
  			this._checkboxValidate(element, target);
	
  			// validate match elements
  			this._matchValidate(element, target);
  		},


	    /**
	     * requiredValidate - private
	     */
	    _requiredValidate: function (element, target) {

		    // function to check if valid and style accordingly
		    function check(e) {
		    	
		    	//console.log("checking...");
		    	if (e.val() !== '') {
		    		
		    		// If not empty
		    		
		    		e.closest(target.options.errorElement).removeClass(target.options.errorClass);
		    		//console.log("NOT EMPTY:target.options.errorElement:  "+target.options.errorElement);
		    		
		    		// if we are using aria tags to hide content from screenreaders
		    		if (target.options.useAria) {
		    			e.closest(target.options.errorElement).find(target.options.errorMessageElement).attr('aria-hidden', true);
		    		}
		    		if(e.closest(target.options.fieldSetClass).length && !(e.closest(target.options.fieldSetClass).find("."+target.options.errorClass).length)){
		    			var fieldset = e.closest(target.options.fieldSetClass);
		    			fieldset.removeClass(target.options.fieldSetErrorClass);
		    			fieldset.parent().find('h2').removeClass('invalid');
		    		}
		    		
		    	} else {
		    		
		    		// If empty
		    		
		    		e.closest(target.options.errorElement).addClass(target.options.errorClass);
		    		//console.log("EMPTY:target.options.errorElement: "+target.options.errorElement);
		    		// if we are using aria tags to hide content from screenreaders
		    		if (target.options.useAria) {
		    			e.closest(target.options.errorElement).find(target.options.errorMessageElement).attr('aria-hidden', false);
		    		}
		    		if(e.closest(target.options.fieldSetClass).length){
		    			e.closest(target.options.fieldSetClass).addClass(target.options.fieldSetErrorClass);
		    			e.closest(target.options.fieldSetClass).parent().find('h2').addClass('invalid');
		    		}
		    		
		    	}
		    }
		    
		    // validate appropriate elements on blur
		    element.find('input[required], textarea[required]').blur(function () {
	        
		    	// check
		    	check($(this));
	        
		    	// add class that allows keyup validation
		    	$(this).addClass(target.options.blurIndicatorClass);
	        
		    	// remove backend error class
		    	//$(this).closest(target.options.errorElement).removeClass(target.options.backendErrorClass);
		    
		    });
	
		    // validate appropriate elements on keyup
		    if (target.options.keyUpValidation) {
	        
		    	element.find('input[required], textarea[required]').keyup(function () {
		    	
			    	if ($(this).is('.' + target.options.blurIndicatorClass)) {
			    		// check
			    		check($(this));
			    	}
			    	
			    });
		    }
		},
	
	    /**
	     * patternValidate - private
	     */
	    _patternValidate: function (element, target) {
	
	    	// function to check if valid and style accordingly
	    	function check(e, re) {
	    		
	    		if (re.test(e.val())) {
	    		
	    			e.closest(target.options.errorElement).removeClass(target.options.errorClass);
	    			
	    			// if we are using aria tags to hide content from screenreaders
	    			if (target.options.useAria) {
	    				e.closest(target.options.errorElement).find(target.options.errorMessageElement).attr('aria-hidden', true);
	    			}

	    			if(e.closest(target.options.fieldSetClass).length && !(e.closest(target.options.fieldSetClass).find("."+target.options.errorClass).length)){
		    			e.closest(target.options.fieldSetClass).removeClass(target.options.fieldSetErrorClass);
		    			e.closest(target.options.fieldSetClass).parent().find('h2').removeClass('invalid');
		    		}
	    			
	    		} else {
	    			
	    			e.closest(target.options.errorElement).addClass(target.options.errorClass);
	          
	    			// if we are using aria tags to hide content from screenreaders
	    			if (target.options.useAria) {
	    				e.closest(target.options.errorElement).find(target.options.errorMessageElement).attr('aria-hidden', false);
	    			}

	    			if(e.closest(target.options.fieldSetClass).length){
		    			e.closest(target.options.fieldSetClass).addClass(target.options.fieldSetErrorClass);
		    			e.closest(target.options.fieldSetClass).parent().find('h2').addClass('invalid');
		    		}
	    		}
	    	}
	
	    	// validate appropriate elements on blur
	    	element.find('input[pattern], textarea[pattern]').blur(function () {
	        
	    		// get value and create reg ex from pattern
	    		var re = new RegExp($(this).attr('pattern'));
	        
	    		// check
	    		check($(this), re);
	        
	    		// add class that allows keyup validation
	    		$(this).addClass(target.options.blurIndicatorClass);
	        
	    		// remove backend error class
	    		//$(this).closest(target.options.errorElement).removeClass(target.options.backendErrorClass);
	    	});
	
	    	// validate appropriate elements on keyup
	    	if (target.options.keyUpValidation) {
	    		
	    		element.find('input[pattern], textarea[pattern]').keyup(function () {
	    		
		    		if ($(this).is('.' + target.options.blurIndicatorClass)) {
		    			
		    			// get value and create reg ex from pattern
		    			var re = new RegExp($(this).attr('pattern'));
		    			check($(this), re);
		    		}
		    	});
		    }
	    },
	
	    /**
	     * selectValidate - private
	     */
	    _selectValidate: function (element, target) {
	
	    	// remove / show error on appropriate select change
	    	element.find('.form__item__field--select[required]').change(function () {
	    		
	    		// if first option is selected show error and add error styling else hide the error and remove error styling
	    		if (this.selectedIndex === 0) {
	    			
	    			$(this).closest(target.options.errorElement).addClass(target.options.errorClass);
	          
	    			// if we are using aria tags to hide content from screenreaders
	    			if (target.options.useAria) {
	    				$(this).closest(target.options.errorElement).find(target.options.errorMessageElement).attr('aria-hidden', false);
	    			}
	    			
	    		} else {
	    			
	    			$(this).closest(target.options.errorElement).removeClass(target.options.errorClass);
	          
	    			// if we are using aria tags to hide content from screenreaders
	    			if (target.options.useAria) {
	    				$(this).closest(target.options.errorElement).find(target.options.errorMessageElement).attr('aria-hidden', true);
	    			}
	    			
	    		}
	    	});
	
	    	// perform same action on blur of appropriate select
	    	element.find('.form__item__field--select').blur(function () { $(this).trigger('change'); });
	
	    },
	
	    /**
	     * checkboxValidate - private
	     */
	    _checkboxValidate: function (element, target) {
	
	    	// remove / show error on appropriate checkbox change
	    	// .form__item__field--checkbox[required]
	    	element.find('.form__item__field--checkbox .js--controls--email').change(function () {
	        
	    		// error logic
	    		// Note: Script can only validate one checkbox
	    		if (!$(this).prop('checked')) {
	    			
	    			//console.log("not :checked");
	          
	    			$(this).closest(target.options.errorElement).addClass(target.options.errorClass);
	          
	    			// if we are using aria tags to hide content from screenreaders
	    			if (target.options.useAria) {
	    				$(this).closest(target.options.errorElement).find(target.options.errorMessageElement).attr('aria-hidden', false);
	    			}
	    		} else {
	    			
	    			//console.log("is :checked");
	    			
	    			$(this).closest(target.options.errorElement).removeClass(target.options.errorClass);
	    			
	    			// if we are using aria tags to hide content from screenreaders
	    			if (target.options.useAria) {
	    				$(this).closest(target.options.errorElement).find(target.options.errorMessageElement).attr('aria-hidden', true);
	    			}
	    		}
	      });
	
	      // perform same action on blur of appropriate checkbox
	      element.find('.form__item__field--checkbox').blur(function () { $(this).trigger('change'); });
	   },
	
	    /**
	     * matchValidate - private
	     */
	    _matchValidate: function (element, target) {
	
		    // validate appropriate match element
	    	element.find('input[' + target.options.matchAttribute + '], textarea[' + target.options.matchAttribute + ']').blur(function () {
	        
	    		// define the element to match
	    		var elementToMatch = '#' + $(this).attr(target.options.matchAttribute);
	
	    		// error logic
	    		if ($(this).val() !== $(elementToMatch).val()) {
				   
	    			$(this).closest(target.options.errorElement).addClass(target.options.errorClass);
				   
	    			// if we are using aria tags to hide content from screenreaders
	    			if (target.options.useAria) {
	    				$(this).closest(target.options.errorElement).find(target.options.errorMessageElement).attr('aria-hidden', false);
	    			}
	    			if($(this).closest(target.options.fieldSetClass).length){
		    			$(this).closest(target.options.fieldSetClass).addClass(target.options.fieldSetErrorClass);
		    			$(this).closest(target.options.fieldSetClass).parent().find('h2').addClass('invalid');
		    		}
				   
	    		} else {
				   
	    			$(this).closest(target.options.errorElement).removeClass(target.options.errorClass);
				   
	    			// if we are using aria tags to hide content from screenreaders
	    			if (target.options.useAria) {
	    				$(this).closest(target.options.errorElement).find(target.options.errorMessageElement).attr('aria-hidden', true);
	    			}

	    			if($(this).closest(target.options.fieldSetClass).length && !($(this).closest(target.options.fieldSetClass).find("."+target.options.errorClass).length)){
		    			
		    			$(this).closest(target.options.fieldSetClass).removeClass(target.options.fieldSetErrorClass);
		    			$(this).closest(target.options.fieldSetClass).parent().find('h2').removeClass('invalid');
		    		}
	    		}
			   
	    		// add class that allows keyup validation
	    		$(this).addClass(target.options.blurIndicatorClass);
	        
	    		// remove backend error class
	    		//$(this).closest(target.options.errorElement).removeClass(target.options.backendErrorClass);
	    	});
	
	    	// validate appropriate elements on keyup
	    	if (target.options.keyUpValidation) {
	    		
	    		element.find('input[' + target.options.matchAttribute + '], textarea[' + target.options.matchAttribute + ']').keyup(function () {
	          
	    			//console.log("A");
	    			
	    			if ($(this).is('.' + target.options.blurIndicatorClass)) {
	    				
	    				// define the element to match
	    				var elementToMatch = '#' + $(this).attr(target.options.matchAttribute);
	            
	    				// error logic
	    				if ($(this).val() !== $(elementToMatch).val()) {
	    					
	    					//console.log("B");
	    					
	    					$(this).closest(target.options.errorElement).addClass(target.options.errorClass);
	    					
	    					// if we are using aria tags to hide content from screenreaders
	    					if (target.options.useAria) {
	    						$(this).closest(target.options.errorElement).find(target.options.errorMessageElement).attr('aria-hidden', false);
	    					}
	    					
	    				} else {
	              
	    					$(this).closest(target.options.errorElement).removeClass(target.options.errorClass);
	    					
	    					// if we are using aria tags to hide content from screenreaders
	    					if (target.options.useAria) {
	    						$(this).closest(target.options.errorElement).find(target.options.errorMessageElement).attr('aria-hidden', true);
	    					}
	    					
	    				}
	    				
	    			}
	    		});
	    	}
    	}
  	});
})(jQuery);
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // using AMD; register as anon module
        define(['jquery'], factory);
    } else {
        // no AMD; invoke directly
        factory( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );
    }
}

(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (t == "file") {
            if (/MSIE/.test(navigator.userAgent)) {
                $(this).replaceWith($(this).clone(true));
            } else {
                $(this).val('');
            }
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

}));
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(window, document, $) {

	var isInputSupported = 'placeholder' in document.createElement('input');
	var isTextareaSupported = 'placeholder' in document.createElement('textarea');
	var prototype = $.fn;
	var valHooks = $.valHooks;
	var propHooks = $.propHooks;
	var hooks;
	var placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value;
				}

				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value = value;
				}

				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value === '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != safeActiveElement()) {
						// We can't use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		if (!isInputSupported) {
			valHooks.input = hooks;
			propHooks.value = hooks;
		}
		if (!isTextareaSupported) {
			valHooks.textarea = hooks;
			propHooks.value = hooks;
		}

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don't get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {};
		var rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this;
		var $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == safeActiveElement() && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement;
		var input = this;
		var $input = $(input);
		var id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': $input,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

	function safeActiveElement() {
		// Avoid IE9 `document.activeElement` of death
		// https://github.com/mathiasbynens/jquery-placeholder/pull/99
		try {
			return document.activeElement;
		} catch (err) {}
	}

}(this, document, jQuery));
/*****************************************************************\
  Events Binding
/*****************************************************************\
 * This class allows us to bind a lot of custom events on the DOM
 * and keep our code clean. It also encourages us to reuse events
 * that we use often. 
 * 
 * This has since been added to the Module class.
 *
 * Usage:
 
 	Y.uk.gov.bristo.events.bind({	
		'click' : {
			'.myselector' : functon(){ ... },
		},
		'mousein' : {
			'.myselector' : function(){ ... },
		}
 	});
 	
\*****************************************************************/
YUI.add('bccevents', function(Y){

 	Y.namespace("uk.gov.bristol");

    Y.uk.gov.bristol.events = (function(){
		var _bE = function(k,v){ // private::bindEvents
			$.each(v, function(l, m){ $(l).on(k, m); });
		},
			_bA = function(k,v){ // private::bindAttributes
			$.each(v, function(p, c){ $("*["+p+"]").each(function(){ c($(this)); }); });
		};
		return {
			bind: function(events){ // events.bind({});
				$.each(events, function(k, v){
					if(k == "attributes"){
						_bA(k,v); // bind attributes
					}
					_bE(k,v); // bind events
				});
			}
		};
	})();

});
/*****************************************************************\
  Breakpoint Event Wrapper
/*****************************************************************\
 * This module reacts  different breakpoints using media queries
 * and opens up the functionality of enquire.js to the other
 * modules using simple subscription events.
 * Usage:
	
	var breakpoints = new Y.uk.gov.bristol.Breakpoints();
	breakpoints.on('mobile', function(){
		// this code only executed on mobile
	});
	breakpoints.off('mobile', function(){
		// this code only executed when transitioning 
		// from mobile->tablet/desktop
	})
 
 * The three breakpoints available are:
 * 	- mobile (0px - 480px)
 *	- tablet (481px - 769px)
 *	- desktop (769px +)
 *
\*****************************************************************/

//console.log("Yo");

YUI().add(['breakpoints'], function(Y){

	var breakpoints = Y.uk.gov.bristol.module.extend({

		DOM: {
			'primarySlab' : ".span4.priority--primary",
			'secondarySlab': ".span8.priority--secondary",
			'complaintsItem' : '.tiled.js--matchHeight .tiled__item__title',
			'slab' : '.js--matchHeight .slab',
			'permit' : '.js--matchHeight.permit .permit__inner',
		},
		breakpoints: {
			mobile: "screen and (max-width: 480px)",
			tablet: "screen and (min-width: 481px) and (max-width: 769px)",
			dekstop: "screen and (min-width: 769px)"
		},
		render: function(){

			
			this.on('dekstop', function(){
				
				// Match Desktop
				//console.log("DESKTOP: match");

				if (this.DOM.primarySlab.length){
	    			this.DOM.primarySlab.insertAfter(this.DOM.secondarySlab);
				}
				this.DOM.complaintsItem.matchHeight();

		    	this.DOM.slab.matchHeight();
		    	
		    	this.DOM.permit.matchHeight();
		    	

			}, function(){
				
				// Unmatch Desktop
				//console.log("DESKTOP: unmatch");
				
				
				
				this.DOM.slab.matchHeight('remove');

		    	this.DOM.permit.matchHeight('remove');
		    	
			});

			
			
			this.on('tablet', function(){

				// Match Tablet
				//console.log("TABLET: match");
				
				if (this.DOM.primarySlab.length){
	    			this.DOM.primarySlab.insertBefore(this.DOM.secondarySlab);
				}
				
				this.DOM.complaintsItem.matchHeight();
				
			}, function(){
				
				// Unmatch Mobile
				//console.log("TABLET: unmatch");
				
			});
			
			this.on('mobile', function(){
				
				// Match Mobile
				//console.log("MOBILE: match");
				
				if (this.DOM.primarySlab.length){
	    			this.DOM.primarySlab.insertBefore(this.DOM.secondarySlab);
				}
				
			}, function(){
				
				// Unmatch Mobile
				//console.log("MOBILE: unmatch");
				
			});

			
		},
		
		on: function(device, fnon, fnoff){
			/* Lightweight wrapper around enquire, usage:
				this.on('mobile', funciton(){
					// mobile matched
				}, function(){
					// mobile unmatched
				});
			 */
			// Check breakpoint exists
			if(!this.breakpoints[device]) return false;

			// Make a wee object
			obj = {};

			// if the match function exists, add it
			if(fnon)
				obj.match = fnon.bind(this);

			// if the unmatch function exists, add it too
			if(fnoff)
				obj.unmatch = fnoff.bind(this);

			// do the enquire
			enquire.register(this.breakpoints[device], obj);

			// Success!
			return true;
		},
		off: function(device, fnoff){
			return this.on(device, null, fnoff);
		},


	});

	Y.namespace('uk.gov.bristol').Breakpoints = new breakpoints();

},'1.0.0' , {
    requires: ['module']
});
/*****************************************************************\
  Button States module
/*****************************************************************\
 * This module stops the focus state of buttons lingering when 
 * you drag your mouse off of a button.
\*****************************************************************/

YUI().add(['button-states'], function(Y){

    Y.namespace('uk.gov.bristol').buttonStates = Y.uk.gov.bristol.module.extend({
    	DOM: {
    		'cta' : 'button.cta',
    	},
    	events: {
    		'mousedown $cta' : 'preventFocusState'
    	},
    	pluginName: 'buttonStates',
    	mousedown : false,
    	preventFocusState: function(e){
    		var buttone = e,
				$button = $(buttone.currentTarget),
				self = this;

			if(this.mousedown){
				this.$el.off('mouseup');
			}
			this.mousedown = true;

			this.$el.one('mouseup', function(e){
				if(e.target == buttone.target) return;
				$button.blur();
				self.mousedown = false;
			});
    	}
    });

},'1.0.0' , {
    requires: ['module']
});
/*****************************************************************\
  Check Events (passive)
/*****************************************************************\
 * This is an events extension to Radios and Checkboxes that 
 * adds the events 'check', 'uncheck', 'hsa_check' and
 * 'hsa_uncheck'. 
 * 
 * Check and Uncheck can be used anywhere, but HSA is exclusive
 * to FOI/complaints.
\*****************************************************************/

YUI().use(['module'], function(Y){
	
    var CheckEvents = Y.uk.gov.bristol.module.extend({

    		// Grab different sets of inputs
	    	DOM: {
	    		'radiosAndChecks' : 'input[type="radio"], input[type="checkbox"]',
	    		'radios' : 'input[type="radio"]',
	    		'checks' : 'input[type="checkbox"]'
	    	},

	    	// Different handles for the inputs
	    	events: {
	    		'change $radios' : "triggerRadioCheckUncheck",
	    		'change $checks' : "triggerCheckboxCheckUncheck",
	    		'check $checks' : 'removeError',
	    		'uncheck $checks' : 'addError',
	    	},

	    	checkNames : [],
	    	checkStatus : [],

	    	// Constructor
	    	render: function(){
	    		var self = this;
	    		// Loop through ALL radios and checkboxes and cache their checked value
	    		this.DOM.radiosAndChecks.each(function(){
	    			var name = $(this).attr('name'),
						uid = Math.random().toString(36).substr(2, 9);
					self.checkNames[name] = self.checkNames[name] ? self.checkNames[name] : [] ;
					$(this).attr('data-checkid',  $(this).is(":checked"));
					self.checkNames[name].push($(this));
	    		});
	    		return this;
	    	},
	    	/* Not sure why this is here. */
	    	addError: function(e){
	    		if($(e.currentTarget).attr('data-error') == 'true'){
	    			$(e.currentTarget).closest('form__item').addClass('.form__item--error');
	    		}
	    	},
	    	removeError: function(e){
	    		$(e.currentTarget).attr('data-error', 'true');
	    		$(e.currentTarget).closest('form__item').removeClass('.form__item--error');
	    	},

	    	//
	    	triggerRadioCheckUncheck: function(e){
	    		var check = $(e.currentTarget),
	    			name = check.attr('name'),
	    			delayedCheck = null;
	    		
	    		// Add a queue system here for HSA. The logic being:
	    		// queue the unchecks first, then the checks
				$.each(this.checkNames[name], function(k,v){
					if(v.attr('id')===$(e.currentTarget).attr('id')){
						delayedCheck = v; // delay this:
					}else{
						v.trigger('hsa_uncheck');
						v.trigger('uncheck');
					}
					return true;
				});

				delayedCheck.trigger('hsa_check');
				delayedCheck.trigger('check');
	    	},
	    	triggerCheckboxCheckUncheck: function(e){
	    		var check = $(e.currentTarget),
	    			name = check.attr('name'),
	    			delayedChecks = [];

				$.each(this.checkNames[name], function(k,v){
					if(v.attr('id')===$(e.currentTarget).attr('id')){
						var isc = (v.is(":checked"))? 'true' : 'false' ;
						if(isc === v.attr('data-checkid')) return;
						v.attr('data-checkid', v.is(":checked"));
						if(isc === 'true'){
							delayedChecks.push(v);
						}else{
							v.trigger('hsa_uncheck');
							v.trigger('uncheck');
						}
						return true;
					}
				});
				$.each(delayedChecks, function(k,v){
		    		v.trigger('hsa_check');
					v.trigger('check');
		    	});
	    	}
	    }),
    	module = new CheckEvents('.form');
});
/*****************************************************************\
  Check Events (passive)
/*****************************************************************\
 * This is an events extension to Radios and Checkboxes that 
 * adds the events 'check', 'uncheck', 'hsa_check' and
 * 'hsa_uncheck'. 
 * 
 * Check and Uncheck can be used anywhere, but HSA is exclusive
 * to FOI/complaints.
\*****************************************************************/

YUI().use(['module'], function(Y){
	
    var Header = Y.uk.gov.bristol.module.extend({
    	DOM: {
    		'mobileMenuToggle' : '.bcc-header__mobile-nav--menu',
    		'mobileSearchToggle' : '.bcc-header__mobile-nav--search',
    		'mobileMenu': '.bcc-header__menu',
    		'mobileSearch': '.bcc-header__search--mobile',
    		'allMenus' : '.bcc-header__mobile-nav',
    	},
    	activeClass: 'bcc-header__mobile-nav--active',
    	events: {
    		'mousedown $mobileMenuToggle' : "toggleMenu",
    		'mousedown $mobileSearchToggle' : "toggleSearch",
    	},
    	toggleMenu: function(e){
    		if($(e.currentTarget).hasClass(this.activeClass)){
    			this.DOM.allMenus.removeClass(this.activeClass);
    			return this.hideMenu($(e.currentTarget));
    		}
    		this.DOM.allMenus.removeClass(this.activeClass);
    		return this.showMenu($(e.currentTarget));
    	},
    	hideMenu: function(el){
    		if(el) el.removeClass(this.activeClass);
    		this.DOM.mobileMenu.removeClass('bcc-header__menu--showmobile');
    	}, 
    	showMenu: function(el){
    		if(el) el.addClass(this.activeClass);
    		this.hideSearch();
    		this.DOM.mobileMenu.addClass('bcc-header__menu--showmobile');
    	},

    	toggleSearch: function(e){
    		if($(e.currentTarget).hasClass(this.activeClass)){
    			this.DOM.allMenus.removeClass(this.activeClass);
    			return this.hideSearch($(e.currentTarget));
    		}
    		this.DOM.allMenus.removeClass(this.activeClass);
    		return this.showSearch($(e.currentTarget));
    	},
    	hideSearch: function(el){
    		if(el) el.removeClass(this.activeClass);
    		this.DOM.mobileSearch.removeClass('bcc-header__search--showmobile');
    	}, 
    	showSearch: function(el){
    		if(el) el.addClass(this.activeClass);
    		this.hideMenu();
    		this.DOM.mobileSearch.addClass('bcc-header__search--showmobile');
    	},
    	
    }),
	module = new Header('.bcc-header');
});
// Leave this in Itermediate for now!
(function HideShowAttributes(undefined){
	window.Blockers = {
		'show' : [],
		'hide' : [],
		add : function(type, ids){
			if(ids && ids.indexOf(' ') != -1){
				ids = ids.split(' ');
				var self = this;
				$.each(ids, function(k, v){
					if(!self[type][v]) self[type][v] = 0;
					self.add(type, v);
					self[type][v]++;
				});
				return;
			}
			if(!this[type][ids]) this[type][ids] = 0;
			this[type][ids]++;
		},
		remove: function(type, ids){
			if(ids && ids.indexOf(' ') != -1){
				ids = ids.split(' ');
				var self = this;
				$.each(ids, function(k, v){
					self.remove(type, v);
					if(self[type][v]) self[type][v]--;
				});
				return;
			}
			if(this[type][ids]) this[type][ids]--;
		},
		check: function(type, id){
			Blockers[type][id] = (Blockers[type][id])? Blockers[type][id] : 0 ;
			if(Blockers[type][id] > 0){
				return false;
			}
			return true;
		},
		actionLog : [],
		flush: function(){
			if(!!window.devenv){
				console.log(this.actionLog.join("\n"));
				this.actionLog = [];
			}
		},
	};
	// Read checkbox on load
	function chs(id, attri, action, x){
		if(attri == action){
			Blockers.actionLog.push(id+' --- '+action);
			if(action == "show"){
				$('#'+id).attr('style', 'display:block;');
			}else{
				$('#'+id).attr('style', 'display:none;');
			}
		}else{
			if(Blockers.check(attri, id)){
				Blockers.actionLog.push(id+' --- '+action);
				if(action == "show"){
					$('#'+id).attr('style', 'display:block;');
				}else{
					$('#'+id).attr('style', 'display:none;');
				}
			}else{
				Blockers.actionLog.push('BLOCKED --- '+id+' --- '+action);
			}
		}
	}
	
	function attrtoggle($el, attri, action){
		var ids = $el.attr('data-'+attri),
			dor = ($el.attr('data-'+attri+'-or')) ? $el.attr('data-'+attri+'-or') : false ;
		if(attri == action){
			// CHECK
			if(!dor){
				Blockers.add(attri, $el.attr('data-'+attri));
			}
		}else{
			// UNCHECK
			if(!dor){
				Blockers.remove(attri, $el.attr('data-'+attri));
			}
			// Check against blockers
		}
		if(ids && ids.indexOf(' ') != -1){
			ids = ids.split(' ');
			ids.reverse(); // This might be the key to many of the issues.
			for(x=0; x < ids.length; x++){
				chs(ids[x], attri, action, x);
			}
		}else{
			chs(ids, attri, action);
		}
		Blockers.flush();
	}

	// Start up
	$('input[data-hide]').not(':checked').each(function(){
		attrtoggle($(this), 'hide', 'show');
	});
	$('input[data-show]').not(':checked').each(function(){
		attrtoggle($(this), 'show', 'hide');
	});
	$('input[data-hide]').filter(':checked').each(function(){
		attrtoggle($(this), 'hide', 'hide');
	});
	$('input[data-show]').filter(':checked').each(function(){
		attrtoggle($(this), 'show', 'show');
	});

	$('input[data-show]').on('hsa_check', function(){
		attrtoggle($(this), 'show', 'show');
	}).on('hsa_uncheck', function(){
		attrtoggle($(this), 'show', 'hide');
	});
	$('input[data-hide]').on('hsa_check', function(){
		attrtoggle($(this), 'hide', 'hide');
	}).on('hsa_uncheck', function(){
		attrtoggle($(this), 'hide', 'show');
	});

	
})();
/*****************************************************************\
  Error Handling (passive)
/*****************************************************************\
 * This is a method that checks if there is errors in the error
 * panel at the top of pages which require validation.
\*****************************************************************/

YUI().add(['open-validation'], function(Y){
	

    Y.namespace('uk.gov.bristol').openValidation = Y.uk.gov.bristol.module.extend({

		pluginName: 'openValidation',
		
		// Gran the radios and checks
		DOM: {
			'formElements': 'input[type="radio"], input[type="checkbox"]',
			'textFormElements': 'input[type="text"], input[type="password"], textarea',
			'dropElements': 'select',
			'required' : 'input[type="radio"][required], input[type="checkbox"][required]',
			'requiredText' : 'input[type="text"][required], input[type="password"][required], textarea[required]',
			'requiredDrops': 'select[required]',
			'error' : '.field__message--error',
		},

		// Blur and change events for validation
		events: {
			/** Radios and Checks **/
			'blur $required' : 'validateRequired',
			'change $required' : 'validateRequired',
			'change $formElements' : 'validate',

			/** Text **/
			'blur $requiredText' : 'validateRequiredString',
			//'keydown $requiredText' : 'validateRequiredString',
			'change $textFormElements': 'validateText',
			'keyup $textFormElements': 'validateText',
			//'keydown $textFormElements' : 'validateText',

			/** Dropdowns **/
			'blur $requiredDrops' : 'validateRequiredDrop',
			'change $requiredDrops' : 'validateRequiredDrop',
			'change $dropElements' : 'validateDrop'
		},

		// On startup do things
		render: function(){

			this.$el.attr('data-open-validation-irte', true);

			// check if the parent element has required attribute
			if(this.$el.attr('required')){

				// if it does, bind required events to all elements inside.
				this.DOM.formElements.on('blur', this.validateRequired.bind(this));
				this.DOM.formElements.on('change', this.validateRequired.bind(this));
				this.DOM.textFormElements.on('blur', this.validateRequiredString.bind(this));
				//this.DOM.textFormElements.on('keydown', this.validateRequiredString.bind(this));
				this.DOM.dropElements.on('blur', this.validateRequiredDrop.bind(this));
				this.DOM.dropElements.on('change', this.validateRequiredDrop.bind(this));

			}
			if(this.options.targetError){
				this.DOM.error = $(this.options.targetError);
			}


			// Create the error message, and put it in the right place
			this.createError();

			this.parentGroup = this.$el.closest('.field--group');

			if(!this.parentGroup.length)
				this.parentGroup = 0;
		},
		
		// was there a validation error?
		validateError: 0,
		
		// was there a required error?
		requiredError: 0,

		// default error messages
		options: {
			
			// Default message for when an element is required
			requiredMessage: function(){
				return this.$el.attr('data-validate-required-message') ? this.$el.attr('data-validate-required-message') : "This field is required";
			},

			// Default option for text inputs to validate on keyup
			keyup: true,

			// create an error element
			createErrorElement: false,

			ensureErrorElement: true
		},

		createError: function(){
			if(this.options.createErrorElement || (!this.DOM.error.length && this.options.ensureErrorElement)){
				if(this.$el.next('.field__message').length){
					this.DOM.error = this.$el.next('.field__message');
				}
				this.DOM.error = $("<div/>", { "class" : "field__message field__message--error"}).appendTo(this.$el);
			}
		},

		validateText: function(e){

			if(!this.options.keyup && $(e.currentTarget).is(':focus'))
				return;

			// check for the option
			if(this.options.validation){

				// grab the function & call it
				var error = this.options.validation.call(this, $(e.currentTarget), this.$el);

				// if it returns TRUE then it errored
				if(error){

					// add flag to tell the app that there is an outstanding validation error
					this.validateError = 1;

					// add error to page
					this.addError(error);

				}else{

					// if it returns FALSE then it validated
					this.validateError = 0;

					// Recheck required (since it may have just been checked)
					this.validateRequiredString(e);

					// Remove error
					this.removeError();
				}
			}
		},
		validateRequiredDrop: function(e){

			if(!$(e.currentTarget).prop("selectedIndex")){

				// set required error
				this.requiredError = 1;

				// show the error
				this.addError(this.getRequiredMessage());
			}else{

				// unset required error
				this.requiredError = 0;

				// hide the error(s)
				this.removeError();
			}
		},
		validateRequiredString: function(e){

			// check if input is empty
			if($(e.currentTarget).val() === ""){
			
				// set required error
				this.requiredError = 1;

				// show the error
				this.addError(this.getRequiredMessage());
			
			}else{

				// unset required error
				this.requiredError = 0;

				// hide the error(s)
				this.removeError();
			}

		},
		validateDrop: function(){

		},
		// Validate if required
		validateRequired: function(e){
			// find the checked ones
			if(this.DOM.formElements.filter(':checked').length){

				// reset the required error 
				this.requiredError = 0;

				// and remove the error from the page
				return this.removeError();
			}

			// add flag to tell the app that there is an outstanding required error
			this.requiredError = 1;
			
			// add the error top the page 
			return this.addError(this.getRequiredMessage());
		},

		// Validate if there is an option passed through
		validate: function(e){

			// check for the option
			if(this.options.validation){

				// grab the function & call it
				var error = this.options.validation.call(this, $(e.currentTarget), this.$el);

				// if it returns TRUE then it errored
				if(error){

					// add flag to tell the app that there is an outstanding validation error
					this.validateError = 1;

					// add error to page
					this.addError(error);

				}else{

					// if it returns FALSE then it validated
					this.validateError = 0;

					// Recheck required (since it may have just been checked)
					this.validateRequired(e);

					// Remove error
					this.removeError();
				}
			}
		},

		// Add error to page
		addError: function(error){

			// Adds it to the parent (fieldset or field)
			this.$el.attr('data-error', error);

			// Add error class
			this.$el.addClass('field--error');

			// If there is a parent group
			if(this.parentGroup) 
				this.parentGroup.addClass('field--error'); // add the error
			
			
			// Add error message to predefined error element(s)
			this.DOM.error.html(error);
		},


		// This function removes an error from the parent field if there are no more errors.
		groupObserve: function(){

			// Return if there is no parent group
			if(!this.parentGroup) return;

			// Cache the inputs
			this.parentGroupInputs = (this.parentGroupInputs) ? this.parentGroupInputs: this.parentGroup.find('.field');

			//console.log(this.parentGroup, this.parentGroupInputs.is('.field--error').length);

			// Check for errors
			if(!this.parentGroupInputs.filter('.field--error').length)
				this.parentGroup.removeClass('field--error'); // and remove the class.

		},

		// Remove error
		removeError: function(){
			
			// checks for outstanding errors
			if(this.validateError || this.requiredError) return;

			// then removes from the parent
			this.$el.removeAttr('data-error');

			// Remove the error class, which also hides error element(s)
			this.$el.removeClass('field--error');

			// Observe the changes in the group if there is one
			this.groupObserve();

		},

		getRequiredMessage: function(){
			if(typeof this.options.requiredMessage === 'function'){
				return this.options.requiredMessage.call(this);
			}
			return this.options.requiredMessage;
		},

	});


	
	Y.namespace('uk.gov.bristol').pageLoadValidation = Y.uk.gov.bristol.module.extend({

		pluginName: 'pageLoadValidation',

		render: function(){

			var targets = this.getTargets(),
				message = this.getMessage();

			for (var i = targets.length - 1; i >= 0; i--) {
				this.generateMessage(targets[i], message);
			}
			
		},
		events: {
			"click a": "goTo",
		},
		goTo: function(e){
			var t = (this.getTargets()),
				cl = $(t).find('input').focus();
			t = t[0];
			if($(t).is("input"))
				return $(t).focus();
			if(cl.length)
				return cl.focus();
			$(t).closest('.field').find('input').focus();
		},
		getTargets: function(){
			return (this.$el.attr('data-ov-target')) ? this.$el.attr('data-ov-target').split(',') : [this.$el.find('a').attr('href')] ;
		},
		getMessage: function(){
			return (this.$el.attr('data-ov-error')) ? this.$el.attr('data-ov-error') : this.$el.find('a').html();
		},
		generateMessage: function(selector, message){
			var $el = this.containerAware($(selector));
			$el.field.addClass('field--error');
			$el.message.html(message);
			$el.input.one('change', function(){ $el.message.html(''); });
			if(!$el.field.attr('data-open-validation-irte') && !$el.field.closest('[data-open-validation-irte]').length) {
				this.bindResolution($el);
			}
		},
		bindResolution: function($el){
			$el.target.OpenValidationOrbit();
		},
		containerAware: function($el){

			var input = ($el.is('input') || $el.is('select') || $el.is('.drop') || $el.is('textarea')) ? $el : null;
			if(!input) input = $el.find('input, .drop, textarea');
			
			var field = input.closest('.field'),
				fieldset = (field.closest('.field--set').length) ? field.closest('.field--set') : (
					(field.closest('.field--group').length) ? field.closest('.field--group') : null
				),
				message = (field.find('.field__message').length) ? field.find('.field__message') : (
					(field.next('.field__message').length) ? field.next('.field__message') : (
						$el.next('.field__message').length ? field.next('.field__message') : null
					)
				) ;

			return this.ensureMessageElement({
				'field': field,
				'fieldset': fieldset,
				'input': input,
				'target': $el ,
				'message': message,
				'orbit': (fieldset) ? fieldset:  field,
			});
		},
		ensureMessageElement: function($el){
			if($el.message) return $el;
			$el.message = $('<div class="field__message field__message--error" />');
			if($el.target.is('input[type="text"]') || $el.target.is('.field--set') || $el.target.is('.field--group')){
				$el.target.after($el.message);
			}else{
				$el.target.append($el.message);
			}
			return $el;
		},

	});

	Y.namespace('uk.gov.bristol').OVOrbit = Y.uk.gov.bristol.module.extend({

		pluginName: 'OpenValidationOrbit',

		render: function(){
			this.orbiter = this.findOrbiter(this.$el);
			if(!this.orbiter.attr('data-open-validation-orbiter')){
				var self = this;
				this.orbiter.on('change', 'input, textarea, select', function(){
					$(this).closest('.field').removeClass('field--error');
					self.check();
				});
				this.orbiter.attr('data-open-validation-orbiter', true);
			}

		},

		check: function(){
			if(!this.orbiter.find('.field--error').length)
				this.orbiter.removeClass('field--error');
		},

		findOrbiter: function(field){
			return (field.closest('.field--set').length) ? field.closest('.field--set') : (
				(field.closest('.field--group').length) ? field.closest('.field--group') : (
					(field.closest('.field')) ? field.closest('.field') : (
						(field.is('.field')) ? field : null
					)
				)
			);
		},

	});



	/*

	Y.namespace('uk.gov.bristol').pageLoadValidation = Y.uk.gov.bristol.module.extend({

		pluginName: 'pageLoadValidation2',

		DOM: {
			"errors" : ".open-validation__error",
		},

		events: {

		},

		render: function(){

				var target = this.$el.attr('data-ov-target'),
					message = (this.$el.attr('data-ov-error')) ? this.$el.attr('data-ov-error') : false ,
					isIndividual = this.$el.attr('data-ov-individual');

				if(!message)
					message = this.$el.find('a').html();

				if(!target)
					target = this.$el.find('a').attr('href');

				if(isIndividual)
					return this.showIndividualError(target, message);

				this.showError(target, message);


		},

		bindResolution: function(field){
			// Delegate the field group resolution
			if(field.is('.field--group'))
				return this.bindGroupResolution(field);

			var inputs = field.children('input[type="password"], input[type="email"], input[type="text"], textarea'),
				radioschecks = field.children('input[type="radio"], input[type="checkbox"]'),
				selects = field.find(" > .drop select"),
				numberOfErrors = inputs.length,
				self = this,
				singleEvent = function(){
					// reduce the errors
					numberOfErrors--;
					// If we hit zero
					if(numberOfErrors <= 0){
						// remove the message
						field.removeClass('field--error');
					}
				};

			// Bind a single event to the dropdowns (seperate selector)
			selects.one('change', singleEvent);

			// Bind a single event to the inputs
			inputs.one('keyup',singleEvent );

			// Bind a single event to all the radios
			radioschecks.one('change', function(){
				field.removeClass('field--error');
			});
		},

		bindGroupResolution: function(field){
			var allFields = field.find('.field--error');

			field.on('change keyup', 'input, textarea, select', function(e){
				if(field.find('.field--error').length <= 0)
					field.removeClass('field--error').off(e);						
			});

		},
			// Look into combining group resolution and group observation
		// 	var inputs = field.find("input, textarea, select");
		// 	inputs.change(function(e){
		// 		if(!field.find('.field--error').length){
		// 			field.removeClass('field--error');
		// 			$(this).off(e);
		// 		}
		// 	});
		// },
		// setupGroupObserve: function(group){
		// 	var self = this;
		// 	console.log();
		// 	group.find('input, textarea, select').on('change',function(){
		// 		console.log('changed', $(this).closest('.field--group'));
		// 		self.groupObserve($(this).closest('.field--group'));
		// 	});
		// },
		groupObserve: function(parentGroup){
			// Return if there is no parent group
			if(!parentGroup) return;

			// Cache the inputs
			parentGroupInputs = parentGroup.find('.field');

			//console.log(this.parentGroup, this.parentGroupInputs.is('.field--error').length);

			// Check for errors
			if(!parentGroupInputs.filter('.field--error').length)
				parentGroup.removeClass('field--error'); // and remove the class.

		},

		showError: function(target, message){
			// @TODO, find all fields and add the un-error thing.
			if(!message) return;
			var self = this;
			$(target).each(function(){
				var tag = $(this);
				if(!tag.is('.field'))
					tag = $(this).closest('.field');
				var messageTag = tag.find('.field__message--error').first();
				if(!messageTag.length){
					messageTag = self.generateMessage(message);
					if(tag.is('.field--group'))
						tag.after(messageTag);
					else
						tag.append(messageTag);
				}else{
					messageTag.html(message);
				}

				tag.addClass('field--error');

				self.bindResolution(tag);

			});
		},
		newgenMessage: function(tag, message){
			var mtag = tag.closest('.field').find('.field__message');
			if(!mtag.length)
				mtag = tag.next('.field__message');
			if(!mtag.length)
				return mtag = this.generateMessage(message);
			if(message)
				mtag.html(message);
		},
		showIndividualError: function(target, message){
			var self = this;
			$(target).each(function(){
				var tag = $(this);

				self.newgenMessage(tag, message);

				if(!tag.is('.field'))
					tag = $(this).closest('.field');
				// if($(this).is('input'))
				// 	self.bindValidationEvent($(this));
				tag.addClass('field--error');
				self.bindResolution(tag);
			});
		},
		generateMessage: function(message){
			if(!message) return '';
			return '<div class="field__message field__message--error">'+message+'</div>';
		},
		bindValidationEvent: function($el){
			$el.on('change', function(){
				$(this).closest('.field').removeClass('field--error');
			});
		}
	});

	var groupObserver = Y.uk.gov.bristol.module.extend({

		pluginName: 'observe',

		options: {
			'change': null
		},

		render: function(){
			if(this.options.change) {
				var self = this;
				this.$el.on('change', 'input, textarea', function(){
					self.options.change.call(this, $(this), self.$el);
				});
			}
		},


	});
*/

},'1.0.0' , {
    requires: ['module']
});
/*****************************************************************\
  Prevent Double Submit
/*****************************************************************\
 * This module blocks buttons submitting a form twice and 
 * provides a loading "spinner" when clicked. Falls back to
 * "Loading..." on lesser browsers.
 *
 * TODO: Use feature detection instead of IE hack.
\*****************************************************************/

YUI().use(['module'], function(Y){
    var PreventDoubleSubmit = Y.uk.gov.bristol.module.extend({
    		DOM: {
    			'linkButton' : 'a.js--prevent-double',
            },
            events: {
                'submit $el' : 'preventSecondSubmission',
                'click $linkButton' : 'disableButton',
            },
            render: function(){
                if (!Modernizr.csstransitions) {
                    this.template = '<center>loading...</center>';
                }
            },
            // Spinner Template
            template: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',
            pluginName: "preventDoubleSubmit",
            preventSecondSubmission: function(e){
                // Grab all the buttons that prevent a double submit
                var $preventDoubleButtons = $(e.currentTarget).find(".js--prevent-double"),
                    // Grab the button that has been clicked
                    $btn = $(e.currentTarget).data('clicked');

                // If its a submit button, copy the options on it for Spring Webflow.
                if($btn.is('[type="submit"]')){
                    $(e.currentTarget).append($("<input/>", {
                        type: 'hidden',
                        value: $btn.attr('value'),
                        name: $btn.attr('name'),
                    }));
                }
                // If its not a prevent double button then allow the submit
                if(!$btn.hasClass('js--prevent-double')) return true;

                // ... if not disable the button
                this.disableButton($preventDoubleButtons);

                // Ensure the submit is continued
                return true;
            },
            disableButton: function($jpd){

                // Grab button if its from an event
                $jpd = ($jpd.currentTarget)? $($jpd.currentTarget) : $jpd;

                // Disable the button
                $jpd.attr("disabled", "disabled").addClass("disabled").closest(".form__actions").addClass("form__actions--disabled");

                // ... and disable the parent group
                $jpd.closest(".cta-group").addClass("cta-group--disabled");

                // Loop through to preserve height and width
                $jpd.each(function(){
                    var btnh = $(this).innerHeight(),
                        btnw = $(this).innerWidth(),
                        btnmt = $(this).css('margin-top');
                    $(this).css({
                        "height": btnh,
                        "width" : btnw,
                        'margin-top' : btnmt
                    });
                });
                $jpd.attr('data-html-value', $jpd.html());
                // Inject the template (spinner)
                $jpd.html(this.template);

                // Remove the icon
                $jpd.removeClass("cta--icon");
                return true;
            }
    	});
    	//module = new PreventDoubleSubmit('form:has(.js--prevent-double)').PreventDoubleSubmit();
});
/*****************************************************************\
  Address Lookup Module
/*****************************************************************\
 * This module reacts to the address lookup dropdown menu and
 * shows a green affirmation panel of the current address.
 *
\*****************************************************************/

YUI().add(['address-lookup'], function(Y){

    Y.namespace('uk.gov.bristol').AddressLookup = Y.uk.gov.bristol.module.extend({

        // Grab the DOM elements
    	DOM: {
    		'dropdown' : 'select',
    	},
    	
        // Delegate the dropdown changing event
        events: {
    		'change $dropdown' : 'renderTemplate',
    	},

        // Assign jQuery plugin name
    	pluginName : "addresslookup",

        // Default options
    	options: {
    		advancedClass: 'address-lookup--isActive',
			dynamicAddressClass: 'address-lookup--isSelected',
			dynamicAddressTemplate: function(klass, message){ 
				return '<div class="panel panel--affirm panel--date info info--affirm info--reverse '+klass+'"><span class="panel__title">Your selected address:</span><strong class="panel__copy info__copy">'+message+'</strong></div>'; 
			},
    	},

        // Constructor
    	render: function(){

    		this.$el.addClass(this.options.advancedClass);
    		if(this.DOM.dropdown)
				this.renderTemplate();
    	},

        // Renders the address using the passed in template from options
    	renderTemplate: function(){

            // remove the old templates
    		this.removeOldTemplate();
            
            // Dont render if there is no selected address
            if (this.optionNoSelected()) return;

            // Find the parent formitem (Old form elements)
    		this.DOM.dropdown.closest('.form__item').append(
                // add the dynamic template passing in the selected option
				this.options.dynamicAddressTemplate(this.options.dynamicAddressClass, this.$el.find('option:selected').text())
			);

            // Find the closest field (New form elements)
            this.DOM.dropdown.closest('.field').append(
                // add the dynamic template passing in the selected option
                this.options.dynamicAddressTemplate(this.options.dynamicAddressClass, this.$el.find('option:selected').text())
            );
    	},

        // Checks to see if an address was selected
    	optionNoSelected: function(){
    		return !!(this.DOM.dropdown[0].selectedIndex === 0 || this.DOM.dropdown[0].selectedIndex === -1);
    	},

        /// Removed the old address from DOM.
    	removeOldTemplate: function(){
    		if($('.'+this.options.dynamicAddressClass).length)
    			$('.'+this.options.dynamicAddressClass).remove();
    	}
        
    });

});
/*****************************************************************\
  Error Handling (passive)
/*****************************************************************\
 * This is a method that checks if there is errors in the error
 * panel at the top of pages which require validation.
\*****************************************************************/

YUI().use(['module','open-validation'], function(Y){

    var ErrorHandling = Y.uk.gov.bristol.module.extend({
		pluginName: 'headerErrors',
		render: function(){

			var href = this.$el.attr("href"),
				text = this.$el.text(),
				$formitem = $(".form " + href),
				$formset = $formitem.closest(".form__set"),
				$isformitemgroup = $formitem.is('.form__item--permit-group');


			if($formitem.is('.field')){
				return this.shimNewFormFields($formitem, text);
			}

			// Add error class
			$formitem.addClass("form__item--error");
			if(!$isformitemgroup){
				if($formitem.closest('.form__item--permit-group').length){
					$formitem.next('.form__item__message').show();
				}
				if($formitem.is('.form__set--showafter')){
					$formitem.next('.form__item__message').addClass('.form__item__message--error').text(text).show();
				}else{
					$formitem.find(".form__item__message--error").text(text);
				}
			}else{
				$formitem.addClass('form__item-permit-group--error');
				$formitem.append('<div class="form__item__message--error">'+text+'</div>');
			}
			$formitem.find('input').on('change', function(){
				$(this).closest('.form__item--error').removeClass('form__item--error');
			});
			// Add error to form__set if it exists.
			if($formset.length) $formset.addClass("form__set--error").parent().find('h2').addClass('invalid');
		},
		shimNewFormFields: function(target, message){

				if($.trim(message) == "??????") message = false;
				this.showError(target, message);

		},

		bindResolution: function(field){
			if(field.is('.field--group'))
				return this.bindGroupResolution(field);

			var inputs = field.children("input, textarea");
				numberOfErrors = inputs.length;
			inputs.one('change', function(){
				numberOfErrors--;
				if(numberOfErrors <= 0){
					field.removeClass('field--error');
				}
			});
		},

		bindGroupResolution: function(field){
			// Look into combining group resolution and group observation
			var inputs = field.find("input, textarea");
			inputs.change(function(e){
				if(field.find('.field--error').length == 1){
					field.removeClass('field--error');
					field.next('.field__message--error').remove();
					$(this).off(e);
				}
			});
		},

		showError: function(target, message){
			// @TODO, find all fields and add the un-error thing.
			var self = this;
			$(target).each(function(){
				var tag = $(this);
				if(!tag.is('.field'))
					tag = $(this).closest('.field');
				if(tag.is('.field--group')){
					tag.addClass('field--error');
					if(message) tag.after(self.generateMessage(message));
					
				}else if(message){
					tag.append(self.generateMessage(message));
				}
				tag.addClass('field--error');
				self.bindResolution(tag);
			});
		},
		showIndividualError: function(target, message){
			var self = this;
			$(target).each(function(){
				var tag = $(this);
				if(message)
					tag.after(self.generateMessage(message));
				if(!tag.is('.field'))
					tag = $(this).closest('.field');
				// if($(this).is('input'))
				// 	self.bindValidationEvent($(this));
				tag.addClass('field--error');
				self.bindResolution(tag);
			});
		},
		generateMessage: function(message){
			if(!message) return '';
			return '<div class="field__message field__message--error">'+message+'</div>';
		},
		bindValidationEvent: function($el){
			$el.on('change', function(){
				$(this).closest('.field').removeClass('field--error');
			});
		}
	});
	//module = new ErrorHandling("#errors a.error__item__link");
});
/*****************************************************************\
  Title of the module (passive)
/*****************************************************************\
 * Anything thats not immediately obvious at a glance goes here.
 *
 * TODO: Any improvements/technical debt goes here.
\*****************************************************************/

// New Event Module
YUI().use(['bccevents'], function(Y){
	
	// We can now use BCC events
	Y.uk.gov.bristol.events.bind({

		// Bind events when attributes are used
		"attributes" : {

			// When an element has data-scoll-to
			"data-scroll-to" : function($el){
				// scroll to its position (BEING OVERRITTEN BY ANOTHER SCROLLTO)
				$('html, body').animate({
			        scrollTop: $el.offset().top
			    }, 0);
			}


		},

		'click' : {

			// Remove Form Item Error on click, (See #CPDP-2928)
			".form__item--error:has(.uniform__checkbox)" : function(){
				$(this).removeClass("form__item--error");
			},

			// Use for detecting which button was clicked on a form submit
			'form' : function(e){
				e = e || window.e;
				var target = e.target || e.srcElement;
				
				$(this).data('clicked',$(e.target));
			}

		},
		'change' : {

			// Bug fix (See #CPDP-2744)
			// Move to Parking module? --- yes
			"#parking__visitor-permits__choose .form__item__field" : function(){
				$(this).closest(".slab").removeClass("form__item--error");
			}

		}
		

	});

});


/*****************************************************************\
  Fileupload module - JQuery Plugin
/*****************************************************************\
 * This module converts Non-js fileupload components into an
 * interactive upload form. With fall backs for IE8 and Android.
 *
\*****************************************************************/

YUI().use(['module'], function(Y){
    var FileUpload = Y.uk.gov.bristol.module.extend({
        DOM: {

            'fileList'          : '.docupload__body',
            'allfiles'          : '.docupload__file',
            'files'             : '.docupload__file:not(.docupload__file--uploaded)',
            'uploadedFiles'     : '.docupload__file--success',
            'uploadbtn'         : '.form__actions',
            'removeFile'        : '.docupload__file--success .docupload__fileremove',
            'dismissFile'       : '.docupload__file--error .docupload__fileremove',
            'fileLimit'         : '.docupload__error',
            'type'              : '[name="uploadType"]',
            'fileLimitMessage'  : '[name="tooManyFilesError"]',
            'genericError'      : '[name="generalError"]',
            'tiptype'           : '.docupload__tiptype',
        },
        pluginName: 'fileUpload', /* Exports as JQuery Plugin */
        events: {
            'click $removeFile' : 'removeFile',
            'click $dismissFile' : 'dismissFile',
        },
        fileLimit : 0,
        currentLimit : 0,
        uploadLimit: 0,
        
        render: function(){

            // Legacy support for IE8/9
            if (!window.ProgressEvent || !window.FormData)
                return this.legacySupport();

            // If the preview page, also abort
            if(this.$el.hasClass('docupload--preview')) 
                return this.previewPage();

            // Set limits
            this.fileLimit = this.DOM.allfiles.length;
            this.uploadLimit = this.currentLimit = this.DOM.uploadedFiles.length;

            // Set some templates
            this.fileTemplate =  $('<div class="docupload__file"><input type="file"></div>');

            // Modify the DOM
            this.DOM.uploadbtn.remove();
            this.DOM.files.remove();
            this.DOM.fileLimit.remove();

            // GA stuff
            this.currentService = $('[data-service]').attr('data-service');

            this.tooManyFiles = $('<div/>', {
                'class' : "docupload__error docupload__error--toomuch"
            });

            // Nice code here... haha
            this.$el.find('.docupload__body').after(this.tooManyFiles);

            // Create first new file
            this.newFile();

            // chain me.
            return this;
        },
        dismissFile: function(e){
            var $el = $(e.currentTarget).closest('.docupload__file');
            $el.animate({
                height: 0,
                padding: 0,
                opacity: 0,
                width: '80%',
            }, function(){
                $(this).remove();
            });
            e.preventDefault();
        },
        removeFile: function(e){
            // Cache element
            var $el = $(e.currentTarget).closest('.docupload__file');

            // Prevent double removal
            if($el.attr('removing')) return;
            $el.removeAttr('removing');
            
            if($el.parent().nextThrough(':tabbable')) $el.nextThrough('button:tabbable').focus();
            if($el.nextThrough('button')) $el.nextThrough('button:tabbable').focus();

            $el.animate({
                height: 0,
                padding: 0,
                opacity: 0,
                width: '80%',
            }, function(){
                $(this).remove();
            });


            // If there is a delete endpoint on the remove button
            if($(e.currentTarget).attr('data-delete-endpoint')){
                // send a post to it to remove the file
                $.post($(e.currentTarget).attr('data-delete-endpoint'));
            }

            if(this.uploadLimit == this.fileLimit){
                this.currentLimit--;
                this.uploadLimit--;

                this.newFile();
                e.preventDefault();
                return;
            }
            //this.newFile();
            this.uploadLimit--;
            this.currentLimit--;

            e.preventDefault();
        },
        legacySupport: function(){
            // HAD TO REMOVE BECAUSE OF BROWSER ISSUES.
            return;
            // Changes here for older browsers.
            var $button = $('<button class="cta docupload__uploadbutton">Choose File</button><span class="filename">No file selected</span>'),
                self = this;

            // Loop through files
            this.DOM.files.each(function(){

                // Set some stuff
                var input = $(this).find('input'),
                    btn = $button.clone();

                // Hide the input button
                input.hide();

                // When bind the button to the hidden output
                btn.on('click', function(e){
                    e.preventDefault();
                    input.show().click().hide();
                });

                // Show filename when the input changes
                input.on('change', function(){
                    $(this).closest('.docupload__file').find('.filename').html(self.parseFileName($(this).val()));
                });

                // Add to file element
                $(this).append(btn);

            });
        },
        previewPage: function(){
            // Changes here for preview page
        },
        showFilesLimit: function(){
            this.DOM.tiptype.hide();
            this.tooManyFiles.html(this.DOM.fileLimitMessage.text()).fadeIn();
        },
        hideFilesLimit: function(){
            this.DOM.tiptype.show();
            this.tooManyFiles.fadeOut();
        },
        parseFileName: function($val){
            var valArray = $val.split('\\');
            valArray = valArray[valArray.length-1];
            return this.truncate(valArray, 80);
        },
        truncate: function (fullStr, strLen, separator) {
            if (fullStr.length <= strLen) return fullStr;

            separator = separator || '...';

            var sepLen = separator.length,
                charsToShow = strLen - sepLen,
                frontChars = Math.ceil(charsToShow/2),
                backChars = Math.floor(charsToShow/2);

            return fullStr.substr(0, frontChars) + 
                   separator + 
                   fullStr.substr(fullStr.length - backChars);
        },
        newFile: function(){

            // set some counters
            var i = this.currentLimit,
                self = this;

            // if we are at the limit, show the limit message
            if(i >= this.fileLimit) 
                return this.showFilesLimit();

            // If not, hide the file limit
            this.hideFilesLimit();

           
            // File template clone
            var template = this.fileTemplate.clone(true),

                // Real fileupload html element
                input = template.find('input'),

                // Fake fileupload button
                $button = $('<button class="cta docupload__uploadbutton">Choose File</button><span class="filename">No file selected</span>'),

                // Success message
                $actions = $('<div class="docupload__actions"><div class="docupload__filestatus">Uploaded <span class="icon icon--bcc icon--bcc--tick"></span> </div><div class="docupload__fileremove"><a href="#">Remove</a></div></div>');
                
                // Error message
                eractions = function(prob){ return $('<div class="docupload__actions"><div class="docupload__filestatus">'+prob+'</div><div class="docupload__fileremove"><a href="#">Dismiss</a></div></div>'); };
            

            // Create a fake input for the event ID.
            input.attr({
                // Name and id matches what liferay sends
                name: 'file',
                id: 'file',
                type: 'file',
            });

            // Hide the input now
            input.hide();

            // Bind a remove event.
            input.on('change', function(){

                // Do some setup
                var newVal = self.parseFileName($(this).val()),
                    $form = $('<form/>', {
                        'action' : '/delegate/files/upload',
                        'method' : self.DOM.fileList.closest('form').attr('method'),
                        'enctype' : self.DOM.fileList.closest('form').attr('enctype'),
                    }),
                    genericError = self.DOM.genericError.html();

                $form.append($("<input/>", {
                    type: "hidden",
                    name: "uploadType",
                    value: self.DOM.type.html(),
                }));

                // Increase the amount of files that have been UPLOADED
                self.uploadLimit++;

                // Add the hidden input with event id to invisible form
                template.find('input').appendTo($form);

                // Hide the upload button
                $button.hide();

                // Add the mock elements (upload progress)
                template.append('<div class="docupload__mock"><div class="docupload__mockupload"><div class="docupload__mockupload-container"><div class="docupload__mockupload-bar"></div></div></div><div class="docupload__mockuploadlabel">'+newVal+' <span class="filesize"></span></div></div>').find('.docupload__mock').hide().fadeIn(500);
                template.find('.filesize').hide();
                // Submit the form using ajax
                $form.ajaxForm({

                    // Handle the progress. Called whenever the progress increases
                    uploadProgress: function(event, position, total, percentComplete) {
                        
                        // Grab % valud
                        var percentVal = percentComplete + '%';

                        // Assign it to the width of the progress bar
                        template.find('.docupload__mockupload-bar').width(percentVal);

                    },

                    // Handle the successful upload of the file
                    success: function() {

                        // Ensure the percentage is 100%
                        var percentVal = '100%';
                        template.find('.docupload__mockupload-bar').width(percentVal);

                    },
                    // Handle the upload regardless if it fails or not.
                    complete: function(xhr) {
                        var response;
                        if(xhr.status == "200" /*&& response.indexOf("{") != 0*/){
                            // grab the response
                            response = JSON.parse(xhr.responseText);
                        }else{
                            // Mock the response
                            response = {
                                message: genericError,
                                status: "ERROR",
                            };
                        }

                        // If success is passed
                        if( response.status =="SUCCESS" ){
                            // add the class and add the success message
                            template.addClass('docupload__file--success').append($actions.hide().fadeIn(300));
                            template.find('.filesize').show().html(response.fileSize);
                            template.find('.docupload__fileremove').attr('data-delete-endpoint', response.deletePath);
                            
                        } else { // If success is not passed, assume error
                            
                            // Generate the error message and remove button.
                            var $eraction = eractions(response.message);
                            
                            // Add the error class
                            template.addClass('docupload__file--error').append($eraction.hide().fadeIn(300));
                            
                            // remove empty span
                            //template.find('span.filesize').remove();
                            
                            // Do some housekeeping to allow the file that was just uploaded
                            // to be retried and not count towards total files
                            self.currentLimit--;

                            // If it was the last file, create new file button
                            if(self.uploadLimit == self.fileLimit)
                                self.newFile();

                            self.uploadLimit--;

                        }
                        // Add the done class to hide it from the DOM
                        template.find('.docupload__mockupload').addClass('docupload__mockupload--done');

                    }
                    // and finally submit the form
                }).submit();

                if(self.currentService){
                    ga('send', 'event', self.currentService, 'file-upload');
                }
                // add this class.
                template.addClass('docupload__file--mockuploading');

                // Create new file, if not Focus the input
                if(!self.newFile()){
                    //self.DOM.fileList.next().nextThrough(':tabbable').focus();
                }
            
            });
            
            // When the upload button is clicked:
            $button.on('click', function(e){
                e.preventDefault();
                // show the input, click it and hide it again
                // This is secrutiy concerns of the browser.
                // You can only mock a click event if it is
                // visible. Works on all browsers.
                input.show().click().hide();
            });
            
            // Fix for android keyboard bug
            $button.on('mousedown', function(e){
                $(this).focus();
            });

            // Add the button
            template.append($button);

            // Increase currently uploaded files limit
            this.currentLimit++;

            // Append it to the file list
            this.DOM.fileList.append(template);

            //template.nextThrough(':tabbable').focus();

            return template;
        }
    });
});
/*****************************************************************\
  Smooth Scroll Module
/*****************************************************************\
 * This module enabled smooth scrolling of elements on IAG pages
 *
\*****************************************************************/

YUI().add(['smoothscroll'], function(Y){

	var Smoothscroll = Y.uk.gov.bristol.module.extend({

		DOM: {
			'stickylink' : '.js-sticky a',
		},
		pluginName: 'smoothScroll',
		render: function(){

			var self = this;

			// Messy event delegation, because reasons.
			$('body').on('click', '.js-sticky a', self.handleStickyClick.bind(this));
			
			// Start the plugin
			$('.js-sticky').sticky({
			    'cloned': function(e, elem) {
			      // When the stick is cloned, apply classes to it so that we can make it collapsible.
			    
			      elem.addClass('js-collapse');
			      elem.find('.page-contents__title')
			          .addClass('js-collapse__toggle')
			          .append('<span class="icon icon--bcc icon--bcc--down"></span>');
			      elem.find('.page-contents__list-wrapper')
			          .addClass('js-collapse__area');
			    },
			    'enter': function(e, data) {
			      self.collapseSticky(data.elem);
			    },
			    'exit': function(e, data) {
			      self.collapseSticky(data.elem);
			    }
			});
		},

		handleStickyClick: function(e){
			var $el = $(e.target),
				self = this;

		    e.preventDefault();
		    if ($el.parents('.js-sticky').hasClass('is-clone')) {
				$el.parents('.js-collapse').collapsible('standardCollapse', function(){
					self.handleScroll(e.currentTarget);
				});
		    } else {
		      self.handleScroll(e.target);
		    }
		},

		handleScroll: function(elem){

			var target = $(elem.hash);
		    target = target.length ? target : $('[name=' + elem.hash.slice(1) +']');

			//CRITICAL PART OF THIS CURRENT THING
			var scrollToPosition = $(target).offset().top - $('.js-sticky.is-clone').height() - 20;

			if (target.length) {
		    	$("body, html").animate({
			   		scrollTop: scrollToPosition
		    	}, 400);
		    	return false;
		    }
		},

		collapseSticky: function($el){
			if(!$el.is(':bcc-collapsible')) {
		      $el.collapsible();
		    }
		    $el.collapsible('quickCollapse');
		}
	});

});
// Beasting complaints module
/*
YUI().add('complaints', function(Y){

	var complaints = Y.uk.gov.bristol.module.extend({

		DOM: {
			'corr' : '#corr',
			'choiceA' : '#choice1',
			'choiceB' : '#choice2',
			'choiceC' : '#choice3',
			'pathA' : '#path1',
			'pathB' : '#path2',
			'pathC' : '#path3',
			'radios' : "input[name='actor']",
			'jsSubmitButton' : '#complaintsJSSubmit',
			'submitButton' : '#field-submitPathway',
			'confirmEmail' : '#confirm-your-email',
			'addMyAddress' : '#field-addmyaddressCheckbox',
		},

		pluginName: 'complaints',

		events: {
			'uncheck $choiceA' : 'triggerResponse',
			'check $choiceA' : 'handleChoiceA',
			'check $choiceB' : 'triggerResponse',
			'uncheck $choiceC' : 'triggerResponse',
			'check $corr' : 'showPathA',
			'uncheck $corr' : 'hidePathA',
			'change $radios' : 'showSubmit'
		},

		render: function(){

			if(this.DOM.radios.is(":checked"))
				$('#field-submitPathway').attr('style', 'display: none');

			if ($(".path").length === 0)
		    	$( "#complaintsJSSubmit").trigger("click"); // server refresh bug
			
			this.triggerResponse();

			this.setChecks();

			if(this.DOM.choiceA.is(':checked') && this.DOM.confirmEmail.is(':checked'))
    			this.DOM.addMyAddress.attr('style', 'display: none');

    		this.statComplaintsBug();
		},
		statComplaintsBug: function(){
			// leave this messy, it works!
		    var $stat = $('html'),
		        $choice1 = $stat.find('#choice1'),
		        $choice2 = $stat.find('#choice2'),
		        $check = $stat.find('#myaddresschk'),
		        stateOfCheck = !!$check.is(':checked');

		    $choice1.on('uncheck', function() {
		        if (!stateOfCheck) {
		            $check.trigger('hsa_uncheck');
		        }
		    });
		    $choice1.on('check', function() {
		        stateOfCheck = !!$check.is(':checked');
		        if (stateOfCheck) {
		            $check.trigger('hsa_check');
		        }
		    });
		    setTimeout(function(){
		    	if(stateOfCheck && $choice2.is(':checked')){
		        	$check.trigger('hsa_uncheck');
		        }
		    }, 150);

		},
		setChecks: function(){
			// If any radio is selected on load, then show the submit button
			$(function(){
				var isch = false;
				this.DOM.radios.each(function(){
					if($(this).is(':checked')){
						isch = true;
					}
				});
				if(!isch){
					this.DOM.submitButton.attr('style', 'display: none');
					setTimeout(function(){
						this.DOM.pathA.attr('style', 'display: none');
					}.bind(this), 300);
				}else{
					this.DOM.submitButton.attr('style', 'display: block;')
				}
			}.bind(this));

		},
		showSubmit: function(){
			this.DOM.submitButton.attr('style', 'display: block');
		},
		showPathA: function(){
			this.DOM.pathA.attr('style', 'display:block');
		},
		hidePathA: function(){
			this.DOM.pathA.attr('style', 'display:none');
		},
		handleChoiceA: function(){
			setTimeout(function(){
				// If no email check is checked
				if(this.DOM.confirmEmail.is(':checked')){
					console.log('yehhhhhhhhh');
					// Hide address radio
					this.DOM.addMyAddress.attr('style', 'display: none');
				}
			}.bind(this), 250);
			// also trigger response.
			//this.triggerResponse();
		},
		triggerResponse: function(){
			// Trigger the horrible check
			setTimeout(function(){
				// If this...
				if(!this.DOM.choiceC.is(':checked') && this.DOM.corr.is(':checked')){
		    		// Check the button
		       		this.DOM.corr.trigger('check');
		   	 	}
			}.bind(this), 200); // Yes in a timeout, because reasons.
		}

	});



}, '1.0.0', {
	requires: ['module', 'check-events'],
});*/
/*****************************************************************\
  Contact method
/*****************************************************************\
 * This module reacts to the country choosing dropdown menu and
 * shows an 'other' input box if they selected other from the
 * menu. 
 *
 * NOTE: This is a port of previous code and may still need 
 * optimised to support ALL dropdowns that may have a option for
 * other.
 * 
\*****************************************************************/
YUI().add('contact-method', function(Y){

	Y.namespace("uk.gov.bristol");

	// .form__item:has(.js--controls--country)

	Y.uk.gov.bristol.contactMethod = Y.uk.gov.bristol.module.extend({

		DOM: {
			'country' : '.js--controls--country',
			'otherbox' : ' ~ .js--controls--other > *',
			'errorMessage' : '.form__item__message--error',
		},
		events: {
			'change $country' : 'changeCountry'
		},
		render: function(){
			var value = this.$el.find("option:selected").val();
			if(value != "other")
				this.DOM.otherbox.hide();
			// hack
			$( ".js--controls-group .js--controls--country" ).trigger('change');
		},
		changeCountry:function(e){
			var value = this.$el.find("option:selected").val();
			if(value == "other"){
				this.DOM.otherbox.show();
				this.DOM.errorMessage.attr('style', '');
			}else{
				this.DOM.otherbox.hide();
			}

		},
		pluginName: 'contactMethod',

	});

}, "1.0.0" ,{
	'requires' : ['module']
});
/*****************************************************************\
  Title of the module
/*****************************************************************\
 * Anything thats not immediately obvious at a glance goes here.
 *
 * TODO: Any improvements/technical debt goes here.
\*****************************************************************/

YUI().use(['module'], function(Y){
    var MyModule = Y.uk.gov.bristol.module.extend({
    		DOM: {
                "formItem" : '.form__item__field--string',
            },
            events: {
                "focus $formItem" : "focusFormItem",
                "focusout $formItem" : "unfocusFormItem",
            },
            pluginName: 'parkingFocusSlab',
            slabFocusClass: 'slab--white',
            //slabDefaultClass: '',
            render: function(){
                
            },
            focusFormItem: function(e){
                $(e.currentTarget).parents('.slab').removeClass(this.slabFocusClass);
                
                //console.log("focus");
            },
            unfocusFormItem: function(e){
                if($(e.currentTarget).val().length === 0 || $(e.currentTarget).val() === '0'){
                    $(e.currentTarget).parents('.slab').addClass(this.slabFocusClass);
                } else {
                    $(e.currentTarget).parents('.slab').removeClass(this.slabFocusClass);
                }
                //console.log("unfocus");
            }
    	});
    	// module = new MyModule('#parking__visitor-permits__choose').parkingFocusSlab();
    // Any more stuff here.
});



//Parking Bugfixes
/*
$('#parking__visitor-permits__choose .form__item__field--string')
.on('focus', function () {

	$(this).parents('.slab').removeClass('slab--outline');

})
.on('focusout', function(){

	if($(this).val().length === 0 || $(this).val() === '0'){
		$(this).parents('.slab').addClass('slab--outline');
    } else {
	    $(this).parents('.slab').removeClass('slab--outline');
    }

});
*/

//CPDP-2744
//$('#parking__visitor-permits__choose .form__item__field')
//  .on("change", function(){

//   $(this).closest(".slab").removeClass("form__item--error");

//});
//!! Why broken? What is .wrap doing?
//THIS IS COMPLETELY BROKEN
//add span wrapper to all radio button and check box text nodes.
/*
$('.uniform__radio, .uniform__checkbox').each(function(){
	var text = $(this).parent().contents().filter(function() {
	    return this.nodeType == 3 && this.nodeValue != " ";
	}).wrap('<span class="wrap"/>');
	// .wrap?
});
*/


YUI().add(['parking'], function(Y) {

    Y.namespace('uk.gov.bristol').ParkingRenewals = Y.uk.gov.bristol.module.extend({

        DOM: {
            'permits': '[data-permit]',
            'postcode': '#field-postcode',
        },

        pluginName: 'parkingRenewals',

        newPermitTemplate: "<div id='field-addAnotherPermit' class='form__item slab slab--additional'>" + "<a class='cta cta--link' href='#addPermitItem'>" + "+ Add another permit" + "</a>" + "</div>",

        render: function() {

            // Find the additional permits and hide them
            this.DOM.permits.filter(':not(:first)').hide().parent().hide();

            //Create fragment with the new permit button
            this.newPermit = $(this.newPermitTemplate);

            // Bind a wee event on there
            this.newPermit.on('click', function(e) {

                // stop the link working
                e.preventDefault();

                // show the next permit thats hidden
                this.DOM.permits.filter(':hidden:first').show().parent().show();

                // if all the permits are on screen
                if (this.DOM.permits.filter(':hidden').length === 0) {
                    // hide the permit button
                    this.newPermit.hide();
                }

            }.bind(this));

            // Add the permit button to the DOM.
            this.DOM.postcode.before(this.newPermit);

        },
    });

    //
    Y.namespace('uk.gov.bristol').ParkingPermits = Y.uk.gov.bristol.module.extend({

        DOM: {
            "permits": ".permit",
            'activeRadios': '.form__item__field--radio:not(:disabled)',
            "renewalDates": "[data-permit-date]",
        },

        events: {
        	'change $activeRadios': 'recaluateCost',
        	//'load': 'recaluateCost',
        },

        pluginName: 'permitDetails',

        render: function() {
            this.validPermits = this.DOM.activeRadios.length;
            if (0 > this.validPermits < 4) {
                this.$el.after(this.renderTemplate());
            }
            this.recaluateCost();
        },

        renderTemplate: function() {
            if ($('#hide-total').length) return;
            var gridSize = this.DOM.permits.length * 4;
            totalHTML = '';
            totalHTML += '<div class="calculating" id="calculating">';
            totalHTML += "	<div class='calcwidth" + gridSize + "'>";
            //totalHTML += "	<div class='span" + gridSize + "'>";
            totalHTML += "		<div class='total'>Total: <strong>Recalculating...</strong></div>";
            totalHTML += "	</div>";
            totalHTML += "</div>";
            return totalHTML;
        },
        parseValue: function(val) {
            var trimmedVal = $.trim(val),
                str;

            if (trimmedVal == "Free") {
                str = 0;
            } else {
                str = trimmedVal;
                str = str.replace(String.fromCharCode('163'), "");
                str = parseInt(str, 10);
            }
            return str;
        },
        recaluateCost: function() {
            var self = this,
                total = 0,
                radiodisabled = this.$el.find('.form__item__field--radio:not(:disabled):checked'),
                checkthisone = this.$el.find('.form__item__field--radio:not(:disabled)'),
                isOnly = $("p[data-permit-cost]");

            
            // No Choice (Not a radio)
            
            if(isOnly){
            	//var isOnlyCost = isOnly.find('.permit__cost').attr('data-price');
            	//var isOnlyCost = isOnly.parseValue($(this).closest('.form__item__label--group').find('.permit__cost').html());
                //console.log('isOnlyCost: ', isOnlyCost);
                
            	var isOnlyRenewalDate = isOnly.find('.permit__cost').attr('data-permit-date');
            	//console.log('isOnlyRenewalDate: ', isOnlyRenewalDate);
    			isOnly.closest(".permit").find(".permit__end").html('to <span class="date">' + isOnlyRenewalDate + '</span>');
            }
            
            
            this.$el.find('[data-price]').each(function() {

                total += self.parseValue($(this).attr('data-price'));

            });
            
            
            
            radiodisabled.each(function() {
            	
            	var checkedRadio = self.parseValue($(this).closest('.form__item__label--group').find('.permit__cost').html());

            	//console.log('checkedRadio: ', checkedRadio);
            	
                total += checkedRadio;

                //console.log('total: ', total);
                
                var renewalDate = $(this).closest('.form__item__label--group').attr('data-permit-date');

                //console.log('renewalDate: ', renewalDate);
                
                $(this).closest(".permit").find(".permit__end").html('to <span class="date">' + renewalDate + '</span>');

            });
            
            
            if (!isOnly && !total && !checkthisone.length) total = 'unknown';

            total = (total) ? '£ ' + total : 'Free';

            $("#calculating strong").html(total);
        },


    });

});
YUI().add(['waste'], function(Y){
	
	console.log("Waste");

    var Breakpoints = Y.uk.gov.bristol.Breakpoints;

    Y.namespace('uk.gov.bristol').Waste = Y.uk.gov.bristol.module.extend({
        DOM: {
            'toggle' : '.bintable-toggle',
            'title' : '.bintable-checkbox ~ .bintable-body .bintable-title',
            'checkbox' : '.bintable-checkbox',
            'rows' : '.bintable-row',
            'reason' : '.form__item__field--select--reason',
            'quantity' : '.form__item__field--quantity',
            'hiddenQuantity' : '#ff-wheeled-rubbish-bin__qtyhdn',
        },
        events: {
            'click $toggle' : 'toggleBasket',
            'click $title' : 'toggleBasket',
            'click $checkbox' : 'toggleBasket',
            'change $reason' : 'handleReason',
            'change $quantity' : 'handleQuantity',
        },
        pluginName: 'binTable', /* Exports as JQuery Plugin */
        preventDouble: false,
        render: function(){
            Breakpoints.on('mobile', function(){
                //console.log("You are on mobile on waste");
            });
            
            // Sanity Checks
            var self = this;
            this.DOM.rows.each(function(k, v){
            	
                if($(this).find('.bintable-checkbox').length === 0 && !$(this).hasClass('bintable-row--nocheckbox')){
                    console.log('Missing Class on bintable-row ('+(k+1)+'): bintable-row--nocheckbox');
                    $(this).addClass('bintable-row--nocheckbox');
                }
                if($(this).find('.bintable-options').length === 0 && !$(this).hasClass('bintable-row--nooptions')){
                    console.log('Missing Class on bintable-row ('+(k+1)+'): bintable-row--nooptions');
                    $(this).addClass('bintable-row--nooptions');
                }
                if($(this).find('.bintable-totalrow').length !== 0 && !$(this).hasClass('bintable-row--total')){
                    console.log('Missing Class on bintable-row ('+(k+1)+'): bintable-row--total');
                    $(this).addClass('bintable-row--total');
                }
                //console.log($(this).find('.form__item__field--quantity').val());
                
                // If .bintable-row is NOT EQUAL to 0
                if($(this).find('.form__item__field--quantity').val() !== "0"){
                    self.selectBasket($(this));
                }
                if($(this).find('.form__item__field--select--reason').val() == "damaged"){
                    self.showRemoveBin($(this));
                }
                
            });
            if(this.DOM.hiddenQuantity.closest('.bintable-row').hasClass('bintable-row--selected')){
                this.DOM.hiddenQuantity.val('1').trigger('change');
            }
        },
        toggleBasket: function(e){
            e.preventDefault();
            var $row = $(e.currentTarget).closest('.bintable-row'),
                $isSelected = $row.hasClass('bintable-row--selected');
            return $isSelected ? this.deselectBasket($row) : this.selectBasket($row);
        },
        handleReason: function(e, preventDouble){

            var $dropdown = $(e.currentTarget),
                $row = $dropdown.closest('.bintable-row'),
                $qdropdown = $row.find('.form__item__field--quantity');


            ($dropdown.val() == "damaged") ? this.showRemoveBin($row) : this.hideRemoveBin($row);

            if(preventDouble) return true;

            if($dropdown.val() !== 'invalid'){
                this.selectBasket($row); 
            }else{
                this.deselectBasket($row);
            }


        },
        handleQuantity: function(e, preventDouble){
            if(preventDouble) return true;

            var $dropdown = $(e.currentTarget),
                $row = $dropdown.closest('.bintable-row'),
                $hdnqty = $row.find('#ff-wheeled-rubbish-bin__qtyhdn');
            if($dropdown.val() != '0'){
                if($hdnqty) $hdnqty.val('1').trigger('change');
                this.selectBasket($row);
            }else{
                if($hdnqty) $hdnqty.val('0').trigger('change');
                this.deselectBasket($row);
            }
        },
        deselectBasket: function($row, force){
            if($row.find('#ff-wheeled-rubbish-bin__qtyhdn').length) this.DOM.hiddenQuantity.val('0').trigger('change');
            $row.removeClass('bintable-row--selected');
            $row.find('input[type="checkbox"]').removeAttr('checked');
            $row.find('.bintable-checkbox span').removeClass('checked');
            $row.find('.form__item__field--select--reason').val('invalid').trigger('change', [true]);
            $row.find('.form__item__field--quantity').val('0').trigger('change', [true]);
        },
        getTotalSelected: function(){
            return this.$el.find('.bintable-row--selected').length;
        },
        selectBasket: function($row){
            var $qdropdown = $row.find('.form__item__field--quantity');
            //if($row.find('#ff-wheeled-rubbish-bin__qtyhdn').length) $row.find('#ff-wheeled-rubbish-bin__qtyhdn').val('1').trigger('change');
            $row.addClass('bintable-row--selected');
            $row.find('input[type="checkbox"]').prop('checked','checked'); 
            $row.find('input[type="checkbox"] + field__label').addClass('field__label--checked');
            $row.find('.bintable-checkbox span').addClass('checked'); // Look into css
            if($row.find('#ff-wheeled-rubbish-bin__qtyhdn').length){
                if($qdropdown.val() == '0') $qdropdown.val('180L').trigger('change');
            }else{
                if($qdropdown.val() == '0') $qdropdown.val('1').trigger('change');
            }
        },
        showRemoveBin: function($row){
            $row.find('.bintable-select--oldbin').addClass('bintable-select--oldbin_active');
        },
        hideRemoveBin: function($row){
            var ob = $row.find('.bintable-select--oldbin');
            ob.removeClass('bintable-select--oldbin_active');
            ob.find('input').removeProp('checked').trigger('change').closest('span').removeClass('checked');
        }
    });
},'1.0.0' , {
    requires: ['module', 'breakpoints']
});


YUI().use(
	'waste', 
	'button-states', 
	'breakpoints', 
	'address-lookup',
	'contact-method',
	/*'complaints',*/
	'parking',
	'smoothscroll',
function(Y){
	// JQuery FN (temp)
	$.fn.nextThrough = function(selector) {
	    // Our reference will be the last element of the current set
	    var $reference = $(this).last();
	    // Add the reference element to the set the elements that match the selector
	    var $set = $(selector).add($reference);
	    // Find the reference position to the set
	    var $pos = $set.index($reference);
	    // Return an empty set if it is the last one
	    if ($set.length == $pos) return $();
	    // Return the next element to our reference
	    return $set.eq($pos + 1);
	};
	
	// Bintable Module
	$('.bintable').binTable();

	// Smooth Sroll
	$("body").smoothScroll(); 

	$('.js--permitTotal').permitDetails();

	// Button States 
	$('body:has(button.cta)').buttonStates();

	// Address Lookup
	$('.js--address-lookup').addresslookup();

	// Parking - slab outline on focus.
	$('#parking__visitor-permits__choose').parkingFocusSlab();

	// JS Prevent Double Submit
	$('form:has(.js--prevent-double)').preventDoubleSubmit();

	// Enable docupload
	$(".docupload--enhanced").fileUpload();
	
	

	(function hideEmptyColumns(){

		if ($('.portlet-body').length > 0) { 

			// Bug #CPDP-4686, #CPDP-4686
			var side = $('.portlet-column.side');
			var isEmpty = $.trim( side.find('.portlet-body').html() ).length;
			
			if( isEmpty === 0 ) {
				//console.log("c");
				side.hide();
			}

		}

	})();
	
	
	
	
		
	// Form errors at the top of the page
	$("#errors a.error__item__link").headerErrors();
	
	$('.open-validation .open-validation__error').pageLoadValidation();


	$('[data-validate-max-characters]').openValidation({
		keyup: true,
		validation: function($el, $fieldset){
			var total = $fieldset.attr('data-validate-max-characters'),
				current = $el.val().length;
			
			if(current > total) return "You have used too many characters";
			$fieldset.find('.js--character-count').text(total - current);
		},
	});

	$('[data-validate-password]').openValidation({
		requiredMessage: 'Please fill this in',
		keyup: false,
		validation: function($el){
			
			// Check length of password
			if($el.val().length < 7)
				return 'Your password must be 8 characters long';

			//Make sure passwords match
			var match = $el.val(), showerror = false, oneempty = false;

			this.DOM.textFormElements.each(function(){
				if($(this).val() === "")
					oneempty = true;
				if(match != $(this).val())
					showerror = true;
			});

			if(!oneempty && showerror)
				return 'Passwords must match';

		},
	});

	$('[data-validate-expect]').openValidation({
		validation: function(el, parent){
			if(el.val() !=  parent.attr('data-validate-expect') )
				return (parent.attr('data-validate-expect-message')) ? parent.attr('data-validate-expect-message')  : 'Please choose a valid option';
			return false;
		}
	});

	$('.field:has([required]), .field[required]').openValidation();

	$('[data-validate-postcode]').openValidation({
		requiredMessage: 'Please enter a valid UK postcode',
		validation: function(el){
			var reg = "^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$";
			if(el.val().toUpperCase().match(reg))
				return false;
			return "You must enter a valid UK postcode";
		},
	});

	$('.form__item:has(.js--controls--country)').contactMethod();

	// Keep session alive.
	if($('[data-extend-session]').length){
		var extendLink = $('[data-extend-session]').attr('data-extend-session');
		setTimeout(function(){ Liferay.Session.extend(); }, (1000*extendLink) );
	}

});
// Safari Bugfixing on submits
var fixcache = function(){ $('.js--prevent-double').prop("disabled", false).removeAttr("disabled").removeClass('disabled').html($('.js--prevent-double').attr('data-html-value')); };
window.pageshow = function(event){ if (event.persisted) fixcache(); };
window.onpageshow = function(event) { if (event.persisted) fixcache(); };
$(window).on('unload', function(){ /*$(this).unbind('unload'); fixcache(); */
	   }).on('load',   function(){
	
	// More scroll Fixes.
	if (window.location.hash) window.location = window.location.hash;
	// IE 7-8 Loading fix see Bug #CPDP-2761 & #CPDP-3187
	if('\v'=='v'){
		setTimeout(function(){
			$('.icon--bcc').addClass('iefixicons').removeClass('iefixicons');							
		}, 150);
		$('html').addClass('ie8');
	}
});



// IE8 Class
if('\v'=='v'){$('html').addClass('ie8');}

// Windows Chrome bugfix for Sticky Nav
// This fix is not needed
$(window).trigger('resize');

// VALIDATION
$('.js--validate').validate();

// form placeholders
// Are we using these?
$('input, textarea').placeholder();




// TABS
// !! Change to js--
$('.js--tabs').tabs();

//COLLAPSIBLE TABLE
$('.js--collapse').collapsible();

//COLLAPSE TABLE
$('.js--collapse-table').collapsetable();


$('select.form__item__field--select--block, .form__item__field[type=radio], .form__item__field[type=checkbox]')
	.uniform({
		wrapperClass: 'uniform',
		selectClass: 'uniform__select--block',
		radioClass: 'uniform__radio',
		checkboxClass: 'uniform__checkbox'
	});
	
$('select.form__item__field--select--inline')
	.uniform({
		wrapperClass: 'uniform',
		selectClass: 'uniform__select--inline'
	});

//@TODO: Next line needs explaining as to why... and probably needs refactoring as it's brittle
$('.uniform__checkbox:has(.form__item__field--checkbox--large)').addClass('uniform__checkbox--large');






(function MobileFormFix(){
	// See bugs #CPDP-2338 #CPDP-2740
	 if(window.innerWidth > 1024) return;
	$('*[data-primary-submit]').each(function(){
		var $btn = $(this),
			$form = $btn.closest("form"),
			$el = $(this).clone();

		$el.css({
			'position' : 'absolute',
			'visibility' : 'hidden',
		});
		$form.prepend($el);
	});

})();

//Mobile Tabs - fluid
(function MobileTabs () {
	// Only for smaller windows
	if(window.innerWidth > 480) return;
	// Bunched to avoid thrashing
	var count = 0, // original overflowing width of tabs
	 	$tablist = $('*[role="tablist"]').children(), // tablist
	    tabListWidth = $('*[role="tablist"]').width(); // width of tablist (100% of window minus padding)

	$tablist.each(function(e) {
	    count += $(this).width(); // add the widths of tabs
	});

	if (count > tabListWidth) { //if the tabs overflow
	 	// loop over the tabs
	    $tablist.each(function(e) {
	     	// Bunched to avoid thrashing
	        var $tab = $(this),
	         	$tablinks = $tab.find('a'),
	         	owid = ($tab.width() / count) * 100; // new % value for fluid tabs

	         // Add width CSS to tabs
	         $tab.css({
	            width: owid + '%',
	         });

	         // OPTIMISATION: Make CSS Class?
	         // Some fluid changes to tabs
	         $tablinks.css({
	            'padding': '0px',
	            'width': '100%',
	            'text-align': 'center',
	            'font-size' : '16px',
	        });
	    });
	}

	
})();
YUI().use('test','test-console', function(Y){

    var OpenValidationSuite = new Y.Test.Suite({
        name: "Open Validation",
    });

    // Test Case 1
    OpenValidationSuite.add(new Y.Test.Case({

        name: "Open Validation Basic",


        inputs: {
            bubbleInput:        'input[type="text"][required]',
            delegateInupt:      '.field[required] input[type="text"]',
            bubbleTextarea:     'textarea[required]',
            delegateTexarea:    '.field[required] textarea',
            bubbleDrop:         '.drop select[required]',
            delegateDrop:       '.field[required] .drop select',
            bubbleRadio:        'input[type="radio"][required]',
            delegateRadio:      '.field[required] input[type="radio"]',
            bubbleCheckbox:     'input[type="checkbox"][required]',
            delegateCheckbox:   '.field[required] input[type="checkbox"]',
        },

        testBubbleInput: function(){
            var self = this;
            $(this.inputs.bubbleInput).each(function(){
                $(this).trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasError($(this)), "All text inputs should bubble up an error when required");
            });
        },
        testBubbleInputResolution: function(){
            var self = this;
            $(this.inputs.bubbleInput).each(function(){
                $(this).val('test').trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasNoError($(this)), "When text is entered, bubble error should be resolved");
            });
        },
        testDelegateInput: function(){
            var self = this;
            $(this.inputs.delegateInupt).each(function(){
                $(this).trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasError($(this)), "All fields should delegate an error to a text input when required");
            });
        },
        testDelegateInputResolution: function(){
            var self = this;
            $(this.inputs.delegateInupt).each(function(){
                $(this).val('test').trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasNoError($(this)), "When text is entered, delegate error should be resolved");
            });
        },
        testBubbleTextarea: function(){
            var self = this;
            $(this.inputs.bubbleTextarea).each(function(){
                $(this).trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasError($(this)), "All textareas should bubble up an error when required");
            });
        },
        testBubbleTextareaResolution: function(){
            var self = this;
            $(this.inputs.bubbleTextarea).each(function(){
                $(this).val('test').trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasNoError($(this)), "When text is entered, bubble error should be resolved on textarea");
            });
        },
        testDelegateTextarea: function(){
            var self = this;
            $(this.inputs.delegateTextarea).each(function(){
                $(this).trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasError($(this)), "All fields should delegate an error to a textarea when required");
            });
        },
        testDelegateTextareaResolution: function(){
            var self = this;
            $(this.inputs.delegateTextarea).each(function(){
                $(this).val('test').trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasNoError($(this)), "When text is entered, delegate error should be resolved on textarea");
            });
        },
        testBubbleDropdown: function(){
            var self = this;
            $(this.inputs.bubbleDrop).each(function(){
                $(this).trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasError($(this)), "All fields should bubble up an error when required");
            });
        },
        testBubbleDropResolution: function(){
            var self = this;
            $(this.inputs.bubbleDrop).each(function(){
                $(this).prop('selectedIndex', 1).trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasNoError($(this)), "When a choice is entered, bubble error should be resolved");
            });
        },
        testDelegateDropdown: function(){
            var self = this;
            $(this.inputs.delegateDrop).each(function(){
                $(this).trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasError($(this)), "All fields should delegate an error to a dropdown when required");
            });
        },
        testDelegateDropResolution: function(){
            var self = this;
            $(this.inputs.delegateDrop).each(function(){
                $(this).prop('selectedIndex', 1).trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasNoError($(this)), "When choice is changed, delegate error should be resolved");
            });
        },
        testBubbleRadio: function(){
            var self = this;
            $(this.inputs.bubbleRadio).each(function(){
                $(this).trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasError($(this)), "All radios should bubble up an error when required");
            });
        },
        testBubbleRadioResolution: function(){
            var self = this;
            $(this.inputs.bubbleRadio).each(function(){
                $(this).prop('checked', 'checked').trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasNoError($(this)), "When choice is changed, bubble error should be resolved");
            });
        },
        testDelegateRadio: function(){
            var self = this;
            $(this.inputs.delegateRadio).each(function(){
                $(this).trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasError($(this)), "All fields should delegate an error to a radio when required");
            });
        },
        testDelegateRadioResolution: function(){
            var self = this;
            $(this.inputs.delegateRadio).each(function(){
                $(this).prop('checked', 'checked').trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasNoError($(this)), "When choice is changed, bubble error should be resolved");
            });
        },
        testBubbleCheckbox: function(){
            var self = this;
            $(this.inputs.bubbleCheckbox).each(function(){
                $(this).trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasError($(this)), "All checkboxes should bubble up an error when required");
            });
        },
        testBubbleCheckboxResolution: function(){
            var self = this;
            $(this.inputs.bubbleCheckbox).each(function(){
                $(this).prop('checked', 'checked').trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasNoError($(this)), "When choice is changed, bubble error should be resolved");
            });
        },
        testDelegateCheckbox: function(){
            var self = this;
            $(this.inputs.delegateCheckbox).each(function(){
                $(this).trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasError($(this)), "All fields should delegate an error to a checkbox when required");
            });
        },
        testDelegateCheckboxResolution: function(){
            var self = this;
            $(this.inputs.delegateCheckbox).each(function(){
                $(this).prop('checked', 'checked').trigger('blur');
                Y.Assert.isTrue(self.parentFieldHasNoError($(this)), "When choice is changed, delegate error should be resolved");
            });
        },
        parentFieldHasError: function($el){
            return !!$el.closest('.field').hasClass('field--error');
        },
        parentFieldHasNoError: function($el){
            return !$el.closest('.field').hasClass('field--error');
        }
    }));
    // exports
    Y.namespace('Suites').OpenValidation = OpenValidationSuite;

    window.OpenValidation = OpenValidationSuite;
    
});
YUI().use('test','test-console', 'waste', function(Y){
	
	
    var WasteSuite = new Y.Test.Suite({
        name: "Waste",
    });

    // Test Case 1
    WasteSuite.add(new Y.Test.Case({

        name: "Waste Tables",
        
        testBinReset: function(){

            // Unselect currently selected bins
            $('.bintable-row--selected .bintable-checkbox').click();

            // There should now be no more bins
            Y.Assert.areEqual($('.bintable-row--selected').length, 0, "There should be no binrows checked");
        
        },
        testBinSelection: function(){

            var $rows = $('.bintable-row');

            // for each of the bin rows
            $rows.each(function(e){

                // click once, check if it is selected
                $(this).find('.bintable-checkbox').click();
                Y.Assert.isTrue($(this).hasClass('bintable-row--selected'), "Row should be selected when a checkbox is clicked");
                
                // click again, check if it is unselected
                $(this).find('.bintable-checkbox').click();
                Y.Assert.isFalse($(this).hasClass('bintable-row--selected'), "Row should be deselected when a checkbox is clicked");
            
            });
        },
        testQuantityChange: function(){

            var $rows = $('.bintable-row');

            // for each of the bin rows
            $rows.each(function(num){

                // Check if first bin (black bin)
                if(num){
                    // change to 180L
                    $(this).find('.form__item__field--quantity').val('180L').trigger('change');

                }else{
                    // change to 1
                    $(this).find('.form__item__field--quantity').val('1').trigger('change');

                }

                // Make sure the row is selected
                Y.Assert.isTrue($(this).hasClass('bintable-row--selected'), "Row should be selected when quantity is change");
                
                // Change Quantity back to 0
                $(this).find('.form__item__field--quantity').val('0').trigger('change');
                
                // Make sure the row is not selected
                Y.Assert.isFalse($(this).hasClass('bintable-row--selected'), "Row should be deselected when quantity is changed to 0");
            
            });
        },
        testReason: function(){

            var $rows = $('.bintable-row');

            // for each of the bin rows
            $rows.each(function(num){
                var reason = $(this).find('.form__item__field--select--reason');

                // Change reason to lost
                reason.val('lost-stolen').trigger('change');
                Y.Assert.isTrue($(this).hasClass('bintable-row--selected'), 
                    "Row should be selected when reason is changed");

                // change to damaged
                reason.val('damaged').trigger('change');
                Y.Assert.isTrue($(this).find('.bintable-select--oldbin').hasClass('bintable-select--oldbin_active'), 
                    "'Please take my old box' should appear when 'damaged' is selected");

                // change to invalid
                reason.val('invalid').trigger('change');
                Y.Assert.isFalse($(this).hasClass('bintable-row--selected'), 
                    "Row should be deselected when reason is changed back to normal");

            });

        },

        testReasonDeselect: function(){

            var $rows = $('.bintable-row');

            // for each of the bin rows
            $rows.each(function(num){
                var reason = $(this).find('.form__item__field--select--reason');

                // Change reason
                reason.val('lost-stolen').trigger('change');

                // Check bin is selected
                Y.Assert.isTrue($(this).hasClass('bintable-row--selected'));

                // Click bin
                $(this).find('.bintable-checkbox').click();

                // Check that reason is invalid
                Y.Assert.isFalse((reason.val() == "lost-stolen"));
                
            });
        }

    }));
    // exports
    Y.namespace('Suites').Waste = WasteSuite;

    window.WasteSuite = WasteSuite;
    
});

