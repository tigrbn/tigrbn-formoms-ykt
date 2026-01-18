function yc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function xc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wc={exports:{}},zi={},Sc={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=Symbol.for("react.element"),vp=Symbol.for("react.portal"),yp=Symbol.for("react.fragment"),xp=Symbol.for("react.strict_mode"),wp=Symbol.for("react.profiler"),Sp=Symbol.for("react.provider"),kp=Symbol.for("react.context"),Ep=Symbol.for("react.forward_ref"),jp=Symbol.for("react.suspense"),Np=Symbol.for("react.memo"),Cp=Symbol.for("react.lazy"),bs=Symbol.iterator;function Pp(e){return e===null||typeof e!="object"?null:(e=bs&&e[bs]||e["@@iterator"],typeof e=="function"?e:null)}var kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ec=Object.assign,jc={};function hr(e,t,n){this.props=e,this.context=t,this.refs=jc,this.updater=n||kc}hr.prototype.isReactComponent={};hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nc(){}Nc.prototype=hr.prototype;function Ca(e,t,n){this.props=e,this.context=t,this.refs=jc,this.updater=n||kc}var Pa=Ca.prototype=new Nc;Pa.constructor=Ca;Ec(Pa,hr.prototype);Pa.isPureReactComponent=!0;var As=Array.isArray,Cc=Object.prototype.hasOwnProperty,_a={current:null},Pc={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Cc.call(t,r)&&!Pc.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:ml,type:e,key:i,ref:o,props:l,_owner:_a.current}}function _p(e,t){return{$$typeof:ml,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ra(e){return typeof e=="object"&&e!==null&&e.$$typeof===ml}function Rp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bs=/\/+/g;function eo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rp(""+e.key):t.toString(36)}function Ql(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ml:case vp:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+eo(o,0):r,As(l)?(n="",e!=null&&(n=e.replace(Bs,"$&/")+"/"),Ql(l,t,n,"",function(c){return c})):l!=null&&(Ra(l)&&(l=_p(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Bs,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",As(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+eo(i,s);o+=Ql(i,t,n,a,l)}else if(a=Pp(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+eo(i,s++),o+=Ql(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function _l(e,t,n){if(e==null)return e;var r=[],l=0;return Ql(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Lp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},Kl={transition:null},Tp={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Kl,ReactCurrentOwner:_a};function Rc(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:_l,forEach:function(e,t,n){_l(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _l(e,function(){t++}),t},toArray:function(e){return _l(e,function(t){return t})||[]},only:function(e){if(!Ra(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=hr;Q.Fragment=yp;Q.Profiler=wp;Q.PureComponent=Ca;Q.StrictMode=xp;Q.Suspense=jp;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;Q.act=Rc;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ec({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=_a.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Cc.call(t,a)&&!Pc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:ml,type:e.type,key:l,ref:i,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:kp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sp,_context:e},e.Consumer=e};Q.createElement=_c;Q.createFactory=function(e){var t=_c.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Ep,render:e}};Q.isValidElement=Ra;Q.lazy=function(e){return{$$typeof:Cp,_payload:{_status:-1,_result:e},_init:Lp}};Q.memo=function(e,t){return{$$typeof:Np,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Kl.transition;Kl.transition={};try{e()}finally{Kl.transition=t}};Q.unstable_act=Rc;Q.useCallback=function(e,t){return Ae.current.useCallback(e,t)};Q.useContext=function(e){return Ae.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Ae.current.useEffect(e,t)};Q.useId=function(){return Ae.current.useId()};Q.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Ae.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};Q.useRef=function(e){return Ae.current.useRef(e)};Q.useState=function(e){return Ae.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Ae.current.useTransition()};Q.version="18.3.1";Sc.exports=Q;var N=Sc.exports;const Lc=xc(N),zp=yc({__proto__:null,default:Lc},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=N,Mp=Symbol.for("react.element"),Op=Symbol.for("react.fragment"),Fp=Object.prototype.hasOwnProperty,Ip=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Up={key:!0,ref:!0,__self:!0,__source:!0};function Tc(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Fp.call(t,r)&&!Up.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Mp,type:e,key:i,ref:o,props:l,_owner:Ip.current}}zi.Fragment=Op;zi.jsx=Tc;zi.jsxs=Tc;wc.exports=zi;var u=wc.exports,Lo={},zc={exports:{}},et={},Dc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,V){var H=L.length;L.push(V);e:for(;0<H;){var te=H-1>>>1,ne=L[te];if(0<l(ne,V))L[te]=V,L[H]=ne,H=te;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var V=L[0],H=L.pop();if(H!==V){L[0]=H;e:for(var te=0,ne=L.length,ct=ne>>>1;te<ct;){var Ye=2*(te+1)-1,Oe=L[Ye],Fe=Ye+1,nt=L[Fe];if(0>l(Oe,H))Fe<ne&&0>l(nt,Oe)?(L[te]=nt,L[Fe]=H,te=Fe):(L[te]=Oe,L[Ye]=H,te=Ye);else if(Fe<ne&&0>l(nt,H))L[te]=nt,L[Fe]=H,te=Fe;else break e}}return V}function l(L,V){var H=L.sortIndex-V.sortIndex;return H!==0?H:L.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],c=[],d=1,f=null,h=3,w=!1,E=!1,k=!1,T=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=L)r(c),V.sortIndex=V.expirationTime,t(a,V);else break;V=n(c)}}function j(L){if(k=!1,v(L),!E)if(n(a)!==null)E=!0,bt(R);else{var V=n(c);V!==null&&At(j,V.startTime-L)}}function R(L,V){E=!1,k&&(k=!1,g(P),P=-1),w=!0;var H=h;try{for(v(V),f=n(a);f!==null&&(!(f.expirationTime>V)||L&&!ee());){var te=f.callback;if(typeof te=="function"){f.callback=null,h=f.priorityLevel;var ne=te(f.expirationTime<=V);V=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(a)&&r(a),v(V)}else r(a);f=n(a)}if(f!==null)var ct=!0;else{var Ye=n(c);Ye!==null&&At(j,Ye.startTime-V),ct=!1}return ct}finally{f=null,h=H,w=!1}}var O=!1,y=null,P=-1,B=5,D=-1;function ee(){return!(e.unstable_now()-D<B)}function re(){if(y!==null){var L=e.unstable_now();D=L;var V=!0;try{V=y(!0,L)}finally{V?we():(O=!1,y=null)}}else O=!1}var we;if(typeof p=="function")we=function(){p(re)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,ut=Ne.port2;Ne.port1.onmessage=re,we=function(){ut.postMessage(null)}}else we=function(){T(re,0)};function bt(L){y=L,O||(O=!0,we())}function At(L,V){P=T(function(){L(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){E||w||(E=!0,bt(R))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var H=h;h=V;try{return L()}finally{h=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var H=h;h=L;try{return V()}finally{h=H}},e.unstable_scheduleCallback=function(L,V,H){var te=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?te+H:te):H=te,L){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=H+ne,L={id:d++,callback:V,priorityLevel:L,startTime:H,expirationTime:ne,sortIndex:-1},H>te?(L.sortIndex=H,t(c,L),n(a)===null&&L===n(c)&&(k?(g(P),P=-1):k=!0,At(j,H-te))):(L.sortIndex=ne,t(a,L),E||w||(E=!0,bt(R))),L},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(L){var V=h;return function(){var H=h;h=V;try{return L.apply(this,arguments)}finally{h=H}}}})(Mc);Dc.exports=Mc;var bp=Dc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap=N,qe=bp;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oc=new Set,Xr={};function Dn(e,t){or(e,t),or(e+"Capture",t)}function or(e,t){for(Xr[e]=t,e=0;e<t.length;e++)Oc.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),To=Object.prototype.hasOwnProperty,Bp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vs={},$s={};function Vp(e){return To.call($s,e)?!0:To.call(Vs,e)?!1:Bp.test(e)?$s[e]=!0:(Vs[e]=!0,!1)}function $p(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hp(e,t,n,r){if(t===null||typeof t>"u"||$p(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var La=/[\-:]([a-z])/g;function Ta(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(La,Ta);Re[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(La,Ta);Re[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(La,Ta);Re[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function za(e,t,n,r){var l=Re.hasOwnProperty(t)?Re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hp(t,n,l,r)&&(n=null),r||l===null?Vp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rl=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),Da=Symbol.for("react.strict_mode"),zo=Symbol.for("react.profiler"),Fc=Symbol.for("react.provider"),Ic=Symbol.for("react.context"),Ma=Symbol.for("react.forward_ref"),Do=Symbol.for("react.suspense"),Mo=Symbol.for("react.suspense_list"),Oa=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),Uc=Symbol.for("react.offscreen"),Hs=Symbol.iterator;function jr(e){return e===null||typeof e!="object"?null:(e=Hs&&e[Hs]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,to;function Or(e){if(to===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);to=t&&t[1]||""}return`
`+to+e}var no=!1;function ro(e,t){if(!e||no)return"";no=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{no=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Or(e):""}function Wp(e){switch(e.tag){case 5:return Or(e.type);case 16:return Or("Lazy");case 13:return Or("Suspense");case 19:return Or("SuspenseList");case 0:case 2:case 15:return e=ro(e.type,!1),e;case 11:return e=ro(e.type.render,!1),e;case 1:return e=ro(e.type,!0),e;default:return""}}function Oo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case Vn:return"Portal";case zo:return"Profiler";case Da:return"StrictMode";case Do:return"Suspense";case Mo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ic:return(e.displayName||"Context")+".Consumer";case Fc:return(e._context.displayName||"Context")+".Provider";case Ma:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oa:return t=e.displayName||null,t!==null?t:Oo(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return Oo(e(t))}catch{}}return null}function Qp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oo(t);case 8:return t===Da?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kp(e){var t=bc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ll(e){e._valueTracker||(e._valueTracker=Kp(e))}function Ac(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fo(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ws(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bc(e,t){t=t.checked,t!=null&&za(e,"checked",t,!1)}function Io(e,t){Bc(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Uo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Uo(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Uo(e,t,n){(t!=="number"||ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function bo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ks(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Fr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function Vc(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ys(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $c(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ao(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$c(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tl,Hc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yp=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){Yp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e]})});function Wc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function Qc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Wc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Xp=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bo(e,t){if(t){if(Xp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Vo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $o=null;function Fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ho=null,tr=null,nr=null;function Xs(e){if(e=yl(e)){if(typeof Ho!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Ii(t),Ho(e.stateNode,e.type,t))}}function Kc(e){tr?nr?nr.push(e):nr=[e]:tr=e}function Yc(){if(tr){var e=tr,t=nr;if(nr=tr=null,Xs(e),t)for(e=0;e<t.length;e++)Xs(t[e])}}function Xc(e,t){return e(t)}function Gc(){}var lo=!1;function Jc(e,t,n){if(lo)return e(t,n);lo=!0;try{return Xc(e,t,n)}finally{lo=!1,(tr!==null||nr!==null)&&(Gc(),Yc())}}function Jr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Wo=!1;if(Dt)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Wo=!1}function Gp(e,t,n,r,l,i,o,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Br=!1,oi=null,ai=!1,Qo=null,Jp={onError:function(e){Br=!0,oi=e}};function Zp(e,t,n,r,l,i,o,s,a){Br=!1,oi=null,Gp.apply(Jp,arguments)}function qp(e,t,n,r,l,i,o,s,a){if(Zp.apply(this,arguments),Br){if(Br){var c=oi;Br=!1,oi=null}else throw Error(_(198));ai||(ai=!0,Qo=c)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gs(e){if(Mn(e)!==e)throw Error(_(188))}function eh(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Gs(l),e;if(i===r)return Gs(l),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function qc(e){return e=eh(e),e!==null?ed(e):null}function ed(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ed(e);if(t!==null)return t;e=e.sibling}return null}var td=qe.unstable_scheduleCallback,Js=qe.unstable_cancelCallback,th=qe.unstable_shouldYield,nh=qe.unstable_requestPaint,ge=qe.unstable_now,rh=qe.unstable_getCurrentPriorityLevel,Ia=qe.unstable_ImmediatePriority,nd=qe.unstable_UserBlockingPriority,si=qe.unstable_NormalPriority,lh=qe.unstable_LowPriority,rd=qe.unstable_IdlePriority,Di=null,Et=null;function ih(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Di,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:sh,oh=Math.log,ah=Math.LN2;function sh(e){return e>>>=0,e===0?32:31-(oh(e)/ah|0)|0}var zl=64,Dl=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ui(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Ir(s):(i&=o,i!==0&&(r=Ir(i)))}else o=n&~l,o!==0?r=Ir(o):i!==0&&(r=Ir(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),l=1<<n,r|=e[n],t&=~l;return r}function uh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ch(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-gt(i),s=1<<o,a=l[o];a===-1?(!(s&n)||s&r)&&(l[o]=uh(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Ko(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ld(){var e=zl;return zl<<=1,!(zl&4194240)&&(zl=64),e}function io(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function dh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-gt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Ua(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var q=0;function id(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var od,ba,ad,sd,ud,Yo=!1,Ml=[],Zt=null,qt=null,en=null,Zr=new Map,qr=new Map,Kt=[],fh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zs(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function Cr(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=yl(t),t!==null&&ba(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ph(e,t,n,r,l){switch(t){case"focusin":return Zt=Cr(Zt,e,t,n,r,l),!0;case"dragenter":return qt=Cr(qt,e,t,n,r,l),!0;case"mouseover":return en=Cr(en,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Zr.set(i,Cr(Zr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,qr.set(i,Cr(qr.get(i)||null,e,t,n,r,l)),!0}return!1}function cd(e){var t=wn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zc(n),t!==null){e.blockedOn=t,ud(e.priority,function(){ad(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$o=r,n.target.dispatchEvent(r),$o=null}else return t=yl(n),t!==null&&ba(t),e.blockedOn=n,!1;t.shift()}return!0}function qs(e,t,n){Yl(e)&&n.delete(t)}function hh(){Yo=!1,Zt!==null&&Yl(Zt)&&(Zt=null),qt!==null&&Yl(qt)&&(qt=null),en!==null&&Yl(en)&&(en=null),Zr.forEach(qs),qr.forEach(qs)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Yo||(Yo=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,hh)))}function el(e){function t(l){return Pr(l,e)}if(0<Ml.length){Pr(Ml[0],e);for(var n=1;n<Ml.length;n++){var r=Ml[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&Pr(Zt,e),qt!==null&&Pr(qt,e),en!==null&&Pr(en,e),Zr.forEach(t),qr.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)cd(n),n.blockedOn===null&&Kt.shift()}var rr=It.ReactCurrentBatchConfig,ci=!0;function mh(e,t,n,r){var l=q,i=rr.transition;rr.transition=null;try{q=1,Aa(e,t,n,r)}finally{q=l,rr.transition=i}}function gh(e,t,n,r){var l=q,i=rr.transition;rr.transition=null;try{q=4,Aa(e,t,n,r)}finally{q=l,rr.transition=i}}function Aa(e,t,n,r){if(ci){var l=Xo(e,t,n,r);if(l===null)go(e,t,r,di,n),Zs(e,r);else if(ph(l,e,t,n,r))r.stopPropagation();else if(Zs(e,r),t&4&&-1<fh.indexOf(e)){for(;l!==null;){var i=yl(l);if(i!==null&&od(i),i=Xo(e,t,n,r),i===null&&go(e,t,r,di,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else go(e,t,r,null,n)}}var di=null;function Xo(e,t,n,r){if(di=null,e=Fa(r),e=wn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return di=e,null}function dd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rh()){case Ia:return 1;case nd:return 4;case si:case lh:return 16;case rd:return 536870912;default:return 16}default:return 16}}var Xt=null,Ba=null,Xl=null;function fd(){if(Xl)return Xl;var e,t=Ba,n=t.length,r,l="value"in Xt?Xt.value:Xt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Xl=l.slice(e,1<r?1-r:void 0)}function Gl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ol(){return!0}function eu(){return!1}function tt(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ol:eu,this.isPropagationStopped=eu,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Va=tt(mr),vl=fe({},mr,{view:0,detail:0}),vh=tt(vl),oo,ao,_r,Mi=fe({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_r&&(_r&&e.type==="mousemove"?(oo=e.screenX-_r.screenX,ao=e.screenY-_r.screenY):ao=oo=0,_r=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),tu=tt(Mi),yh=fe({},Mi,{dataTransfer:0}),xh=tt(yh),wh=fe({},vl,{relatedTarget:0}),so=tt(wh),Sh=fe({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),kh=tt(Sh),Eh=fe({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jh=tt(Eh),Nh=fe({},mr,{data:0}),nu=tt(Nh),Ch={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ph={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_h={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_h[e])?!!t[e]:!1}function $a(){return Rh}var Lh=fe({},vl,{key:function(e){if(e.key){var t=Ch[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ph[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$a,charCode:function(e){return e.type==="keypress"?Gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Th=tt(Lh),zh=fe({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=tt(zh),Dh=fe({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$a}),Mh=tt(Dh),Oh=fe({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=tt(Oh),Ih=fe({},Mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uh=tt(Ih),bh=[9,13,27,32],Ha=Dt&&"CompositionEvent"in window,Vr=null;Dt&&"documentMode"in document&&(Vr=document.documentMode);var Ah=Dt&&"TextEvent"in window&&!Vr,pd=Dt&&(!Ha||Vr&&8<Vr&&11>=Vr),lu=" ",iu=!1;function hd(e,t){switch(e){case"keyup":return bh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function Bh(e,t){switch(e){case"compositionend":return md(t);case"keypress":return t.which!==32?null:(iu=!0,lu);case"textInput":return e=t.data,e===lu&&iu?null:e;default:return null}}function Vh(e,t){if(Hn)return e==="compositionend"||!Ha&&hd(e,t)?(e=fd(),Xl=Ba=Xt=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pd&&t.locale!=="ko"?null:t.data;default:return null}}var $h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$h[e.type]:t==="textarea"}function gd(e,t,n,r){Kc(r),t=fi(t,"onChange"),0<t.length&&(n=new Va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $r=null,tl=null;function Hh(e){Pd(e,0)}function Oi(e){var t=Kn(e);if(Ac(t))return e}function Wh(e,t){if(e==="change")return t}var vd=!1;if(Dt){var uo;if(Dt){var co="oninput"in document;if(!co){var au=document.createElement("div");au.setAttribute("oninput","return;"),co=typeof au.oninput=="function"}uo=co}else uo=!1;vd=uo&&(!document.documentMode||9<document.documentMode)}function su(){$r&&($r.detachEvent("onpropertychange",yd),tl=$r=null)}function yd(e){if(e.propertyName==="value"&&Oi(tl)){var t=[];gd(t,tl,e,Fa(e)),Jc(Hh,t)}}function Qh(e,t,n){e==="focusin"?(su(),$r=t,tl=n,$r.attachEvent("onpropertychange",yd)):e==="focusout"&&su()}function Kh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oi(tl)}function Yh(e,t){if(e==="click")return Oi(t)}function Xh(e,t){if(e==="input"||e==="change")return Oi(t)}function Gh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Gh;function nl(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!To.call(t,l)||!yt(e[l],t[l]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cu(e,t){var n=uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uu(n)}}function xd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wd(){for(var e=window,t=ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ii(e.document)}return t}function Wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jh(e){var t=wd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xd(n.ownerDocument.documentElement,n)){if(r!==null&&Wa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=cu(n,i);var o=cu(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zh=Dt&&"documentMode"in document&&11>=document.documentMode,Wn=null,Go=null,Hr=null,Jo=!1;function du(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jo||Wn==null||Wn!==ii(r)||(r=Wn,"selectionStart"in r&&Wa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&nl(Hr,r)||(Hr=r,r=fi(Go,"onSelect"),0<r.length&&(t=new Va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wn)))}function Fl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},fo={},Sd={};Dt&&(Sd=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Fi(e){if(fo[e])return fo[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sd)return fo[e]=t[n];return e}var kd=Fi("animationend"),Ed=Fi("animationiteration"),jd=Fi("animationstart"),Nd=Fi("transitionend"),Cd=new Map,fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Cd.set(e,t),Dn(t,[e])}for(var po=0;po<fu.length;po++){var ho=fu[po],qh=ho.toLowerCase(),em=ho[0].toUpperCase()+ho.slice(1);un(qh,"on"+em)}un(kd,"onAnimationEnd");un(Ed,"onAnimationIteration");un(jd,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Nd,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function pu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qp(r,t,void 0,e),e.currentTarget=null}function Pd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;pu(l,s,c),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;pu(l,s,c),i=a}}}if(ai)throw e=Qo,ai=!1,Qo=null,e}function oe(e,t){var n=t[na];n===void 0&&(n=t[na]=new Set);var r=e+"__bubble";n.has(r)||(_d(t,e,2,!1),n.add(r))}function mo(e,t,n){var r=0;t&&(r|=4),_d(n,e,r,t)}var Il="_reactListening"+Math.random().toString(36).slice(2);function rl(e){if(!e[Il]){e[Il]=!0,Oc.forEach(function(n){n!=="selectionchange"&&(tm.has(n)||mo(n,!1,e),mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Il]||(t[Il]=!0,mo("selectionchange",!1,t))}}function _d(e,t,n,r){switch(dd(t)){case 1:var l=mh;break;case 4:l=gh;break;default:l=Aa}n=l.bind(null,t,n,e),l=void 0,!Wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function go(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=wn(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Jc(function(){var c=i,d=Fa(n),f=[];e:{var h=Cd.get(e);if(h!==void 0){var w=Va,E=e;switch(e){case"keypress":if(Gl(n)===0)break e;case"keydown":case"keyup":w=Th;break;case"focusin":E="focus",w=so;break;case"focusout":E="blur",w=so;break;case"beforeblur":case"afterblur":w=so;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=xh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Mh;break;case kd:case Ed:case jd:w=kh;break;case Nd:w=Fh;break;case"scroll":w=vh;break;case"wheel":w=Uh;break;case"copy":case"cut":case"paste":w=jh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ru}var k=(t&4)!==0,T=!k&&e==="scroll",g=k?h!==null?h+"Capture":null:h;k=[];for(var p=c,v;p!==null;){v=p;var j=v.stateNode;if(v.tag===5&&j!==null&&(v=j,g!==null&&(j=Jr(p,g),j!=null&&k.push(ll(p,j,v)))),T)break;p=p.return}0<k.length&&(h=new w(h,E,null,n,d),f.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==$o&&(E=n.relatedTarget||n.fromElement)&&(wn(E)||E[Mt]))break e;if((w||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,w?(E=n.relatedTarget||n.toElement,w=c,E=E?wn(E):null,E!==null&&(T=Mn(E),E!==T||E.tag!==5&&E.tag!==6)&&(E=null)):(w=null,E=c),w!==E)){if(k=tu,j="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(k=ru,j="onPointerLeave",g="onPointerEnter",p="pointer"),T=w==null?h:Kn(w),v=E==null?h:Kn(E),h=new k(j,p+"leave",w,n,d),h.target=T,h.relatedTarget=v,j=null,wn(d)===c&&(k=new k(g,p+"enter",E,n,d),k.target=v,k.relatedTarget=T,j=k),T=j,w&&E)t:{for(k=w,g=E,p=0,v=k;v;v=An(v))p++;for(v=0,j=g;j;j=An(j))v++;for(;0<p-v;)k=An(k),p--;for(;0<v-p;)g=An(g),v--;for(;p--;){if(k===g||g!==null&&k===g.alternate)break t;k=An(k),g=An(g)}k=null}else k=null;w!==null&&hu(f,h,w,k,!1),E!==null&&T!==null&&hu(f,T,E,k,!0)}}e:{if(h=c?Kn(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var R=Wh;else if(ou(h))if(vd)R=Xh;else{R=Kh;var O=Qh}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Yh);if(R&&(R=R(e,c))){gd(f,R,n,d);break e}O&&O(e,h,c),e==="focusout"&&(O=h._wrapperState)&&O.controlled&&h.type==="number"&&Uo(h,"number",h.value)}switch(O=c?Kn(c):window,e){case"focusin":(ou(O)||O.contentEditable==="true")&&(Wn=O,Go=c,Hr=null);break;case"focusout":Hr=Go=Wn=null;break;case"mousedown":Jo=!0;break;case"contextmenu":case"mouseup":case"dragend":Jo=!1,du(f,n,d);break;case"selectionchange":if(Zh)break;case"keydown":case"keyup":du(f,n,d)}var y;if(Ha)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Hn?hd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(pd&&n.locale!=="ko"&&(Hn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Hn&&(y=fd()):(Xt=d,Ba="value"in Xt?Xt.value:Xt.textContent,Hn=!0)),O=fi(c,P),0<O.length&&(P=new nu(P,e,null,n,d),f.push({event:P,listeners:O}),y?P.data=y:(y=md(n),y!==null&&(P.data=y)))),(y=Ah?Bh(e,n):Vh(e,n))&&(c=fi(c,"onBeforeInput"),0<c.length&&(d=new nu("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=y))}Pd(f,t)})}function ll(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fi(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Jr(e,n),i!=null&&r.unshift(ll(e,i,l)),i=Jr(e,t),i!=null&&r.push(ll(e,i,l))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hu(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,l?(a=Jr(n,i),a!=null&&o.unshift(ll(n,a,s))):l||(a=Jr(n,i),a!=null&&o.push(ll(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var nm=/\r\n?/g,rm=/\u0000|\uFFFD/g;function mu(e){return(typeof e=="string"?e:""+e).replace(nm,`
`).replace(rm,"")}function Ul(e,t,n){if(t=mu(t),mu(e)!==t&&n)throw Error(_(425))}function pi(){}var Zo=null,qo=null;function ea(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ta=typeof setTimeout=="function"?setTimeout:void 0,lm=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,im=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(om)}:ta;function om(e){setTimeout(function(){throw e})}function vo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),el(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);el(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),kt="__reactFiber$"+gr,il="__reactProps$"+gr,Mt="__reactContainer$"+gr,na="__reactEvents$"+gr,am="__reactListeners$"+gr,sm="__reactHandles$"+gr;function wn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vu(e);e!==null;){if(n=e[kt])return n;e=vu(e)}return t}e=n,n=e.parentNode}return null}function yl(e){return e=e[kt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ii(e){return e[il]||null}var ra=[],Yn=-1;function cn(e){return{current:e}}function ae(e){0>Yn||(e.current=ra[Yn],ra[Yn]=null,Yn--)}function ie(e,t){Yn++,ra[Yn]=e.current,e.current=t}var sn={},Me=cn(sn),We=cn(!1),Cn=sn;function ar(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Qe(e){return e=e.childContextTypes,e!=null}function hi(){ae(We),ae(Me)}function yu(e,t,n){if(Me.current!==sn)throw Error(_(168));ie(Me,t),ie(We,n)}function Rd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(_(108,Qp(e)||"Unknown",l));return fe({},n,r)}function mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Cn=Me.current,ie(Me,e),ie(We,We.current),!0}function xu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Rd(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,ae(We),ae(Me),ie(Me,e)):ae(We),ie(We,n)}var _t=null,Ui=!1,yo=!1;function Ld(e){_t===null?_t=[e]:_t.push(e)}function um(e){Ui=!0,Ld(e)}function dn(){if(!yo&&_t!==null){yo=!0;var e=0,t=q;try{var n=_t;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Ui=!1}catch(l){throw _t!==null&&(_t=_t.slice(e+1)),td(Ia,dn),l}finally{q=t,yo=!1}}return null}var Xn=[],Gn=0,gi=null,vi=0,rt=[],lt=0,Pn=null,Rt=1,Lt="";function gn(e,t){Xn[Gn++]=vi,Xn[Gn++]=gi,gi=e,vi=t}function Td(e,t,n){rt[lt++]=Rt,rt[lt++]=Lt,rt[lt++]=Pn,Pn=e;var r=Rt;e=Lt;var l=32-gt(r)-1;r&=~(1<<l),n+=1;var i=32-gt(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Rt=1<<32-gt(t)+l|n<<l|r,Lt=i+e}else Rt=1<<i|n<<l|r,Lt=e}function Qa(e){e.return!==null&&(gn(e,1),Td(e,1,0))}function Ka(e){for(;e===gi;)gi=Xn[--Gn],Xn[Gn]=null,vi=Xn[--Gn],Xn[Gn]=null;for(;e===Pn;)Pn=rt[--lt],rt[lt]=null,Lt=rt[--lt],rt[lt]=null,Rt=rt[--lt],rt[lt]=null}var Ze=null,Je=null,ue=!1,mt=null;function zd(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Je=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Rt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Je=null,!0):!1;default:return!1}}function la(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ia(e){if(ue){var t=Je;if(t){var n=t;if(!wu(e,t)){if(la(e))throw Error(_(418));t=tn(n.nextSibling);var r=Ze;t&&wu(e,t)?zd(r,n):(e.flags=e.flags&-4097|2,ue=!1,Ze=e)}}else{if(la(e))throw Error(_(418));e.flags=e.flags&-4097|2,ue=!1,Ze=e}}}function Su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function bl(e){if(e!==Ze)return!1;if(!ue)return Su(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ea(e.type,e.memoizedProps)),t&&(t=Je)){if(la(e))throw Dd(),Error(_(418));for(;t;)zd(e,t),t=tn(t.nextSibling)}if(Su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Ze?tn(e.stateNode.nextSibling):null;return!0}function Dd(){for(var e=Je;e;)e=tn(e.nextSibling)}function sr(){Je=Ze=null,ue=!1}function Ya(e){mt===null?mt=[e]:mt.push(e)}var cm=It.ReactCurrentBatchConfig;function Rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Al(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ku(e){var t=e._init;return t(e._payload)}function Md(e){function t(g,p){if(e){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function l(g,p){return g=on(g,p),g.index=0,g.sibling=null,g}function i(g,p,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,v,j){return p===null||p.tag!==6?(p=No(v,g.mode,j),p.return=g,p):(p=l(p,v),p.return=g,p)}function a(g,p,v,j){var R=v.type;return R===$n?d(g,p,v.props.children,j,v.key):p!==null&&(p.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Wt&&ku(R)===p.type)?(j=l(p,v.props),j.ref=Rr(g,p,v),j.return=g,j):(j=ri(v.type,v.key,v.props,null,g.mode,j),j.ref=Rr(g,p,v),j.return=g,j)}function c(g,p,v,j){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Co(v,g.mode,j),p.return=g,p):(p=l(p,v.children||[]),p.return=g,p)}function d(g,p,v,j,R){return p===null||p.tag!==7?(p=Nn(v,g.mode,j,R),p.return=g,p):(p=l(p,v),p.return=g,p)}function f(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=No(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Rl:return v=ri(p.type,p.key,p.props,null,g.mode,v),v.ref=Rr(g,null,p),v.return=g,v;case Vn:return p=Co(p,g.mode,v),p.return=g,p;case Wt:var j=p._init;return f(g,j(p._payload),v)}if(Fr(p)||jr(p))return p=Nn(p,g.mode,v,null),p.return=g,p;Al(g,p)}return null}function h(g,p,v,j){var R=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:s(g,p,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Rl:return v.key===R?a(g,p,v,j):null;case Vn:return v.key===R?c(g,p,v,j):null;case Wt:return R=v._init,h(g,p,R(v._payload),j)}if(Fr(v)||jr(v))return R!==null?null:d(g,p,v,j,null);Al(g,v)}return null}function w(g,p,v,j,R){if(typeof j=="string"&&j!==""||typeof j=="number")return g=g.get(v)||null,s(p,g,""+j,R);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Rl:return g=g.get(j.key===null?v:j.key)||null,a(p,g,j,R);case Vn:return g=g.get(j.key===null?v:j.key)||null,c(p,g,j,R);case Wt:var O=j._init;return w(g,p,v,O(j._payload),R)}if(Fr(j)||jr(j))return g=g.get(v)||null,d(p,g,j,R,null);Al(p,j)}return null}function E(g,p,v,j){for(var R=null,O=null,y=p,P=p=0,B=null;y!==null&&P<v.length;P++){y.index>P?(B=y,y=null):B=y.sibling;var D=h(g,y,v[P],j);if(D===null){y===null&&(y=B);break}e&&y&&D.alternate===null&&t(g,y),p=i(D,p,P),O===null?R=D:O.sibling=D,O=D,y=B}if(P===v.length)return n(g,y),ue&&gn(g,P),R;if(y===null){for(;P<v.length;P++)y=f(g,v[P],j),y!==null&&(p=i(y,p,P),O===null?R=y:O.sibling=y,O=y);return ue&&gn(g,P),R}for(y=r(g,y);P<v.length;P++)B=w(y,g,P,v[P],j),B!==null&&(e&&B.alternate!==null&&y.delete(B.key===null?P:B.key),p=i(B,p,P),O===null?R=B:O.sibling=B,O=B);return e&&y.forEach(function(ee){return t(g,ee)}),ue&&gn(g,P),R}function k(g,p,v,j){var R=jr(v);if(typeof R!="function")throw Error(_(150));if(v=R.call(v),v==null)throw Error(_(151));for(var O=R=null,y=p,P=p=0,B=null,D=v.next();y!==null&&!D.done;P++,D=v.next()){y.index>P?(B=y,y=null):B=y.sibling;var ee=h(g,y,D.value,j);if(ee===null){y===null&&(y=B);break}e&&y&&ee.alternate===null&&t(g,y),p=i(ee,p,P),O===null?R=ee:O.sibling=ee,O=ee,y=B}if(D.done)return n(g,y),ue&&gn(g,P),R;if(y===null){for(;!D.done;P++,D=v.next())D=f(g,D.value,j),D!==null&&(p=i(D,p,P),O===null?R=D:O.sibling=D,O=D);return ue&&gn(g,P),R}for(y=r(g,y);!D.done;P++,D=v.next())D=w(y,g,P,D.value,j),D!==null&&(e&&D.alternate!==null&&y.delete(D.key===null?P:D.key),p=i(D,p,P),O===null?R=D:O.sibling=D,O=D);return e&&y.forEach(function(re){return t(g,re)}),ue&&gn(g,P),R}function T(g,p,v,j){if(typeof v=="object"&&v!==null&&v.type===$n&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Rl:e:{for(var R=v.key,O=p;O!==null;){if(O.key===R){if(R=v.type,R===$n){if(O.tag===7){n(g,O.sibling),p=l(O,v.props.children),p.return=g,g=p;break e}}else if(O.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Wt&&ku(R)===O.type){n(g,O.sibling),p=l(O,v.props),p.ref=Rr(g,O,v),p.return=g,g=p;break e}n(g,O);break}else t(g,O);O=O.sibling}v.type===$n?(p=Nn(v.props.children,g.mode,j,v.key),p.return=g,g=p):(j=ri(v.type,v.key,v.props,null,g.mode,j),j.ref=Rr(g,p,v),j.return=g,g=j)}return o(g);case Vn:e:{for(O=v.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=l(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Co(v,g.mode,j),p.return=g,g=p}return o(g);case Wt:return O=v._init,T(g,p,O(v._payload),j)}if(Fr(v))return E(g,p,v,j);if(jr(v))return k(g,p,v,j);Al(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=l(p,v),p.return=g,g=p):(n(g,p),p=No(v,g.mode,j),p.return=g,g=p),o(g)):n(g,p)}return T}var ur=Md(!0),Od=Md(!1),yi=cn(null),xi=null,Jn=null,Xa=null;function Ga(){Xa=Jn=xi=null}function Ja(e){var t=yi.current;ae(yi),e._currentValue=t}function oa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function lr(e,t){xi=e,Xa=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Xa!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(xi===null)throw Error(_(308));Jn=e,xi.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var Sn=null;function Za(e){Sn===null?Sn=[e]:Sn.push(e)}function Fd(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Za(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Id(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ot(e,n)}return l=r.interleaved,l===null?(t.next=t,Za(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ot(e,n)}function Jl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ua(e,n)}}function Eu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wi(e,t,n,r){var l=e.updateQueue;Qt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,c=a.next;a.next=null,o===null?i=c:o.next=c,o=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=a))}if(i!==null){var f=l.baseState;o=0,d=c=a=null,s=i;do{var h=s.lane,w=s.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,k=s;switch(h=t,w=n,k.tag){case 1:if(E=k.payload,typeof E=="function"){f=E.call(w,f,h);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=k.payload,h=typeof E=="function"?E.call(w,f,h):E,h==null)break e;f=fe({},f,h);break e;case 2:Qt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else w={eventTime:w,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=w,a=f):d=d.next=w,o|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(d===null&&(a=f),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=d,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Rn|=o,e.lanes=o,e.memoizedState=f}}function ju(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(_(191,l));l.call(r)}}}var xl={},jt=cn(xl),ol=cn(xl),al=cn(xl);function kn(e){if(e===xl)throw Error(_(174));return e}function es(e,t){switch(ie(al,t),ie(ol,e),ie(jt,xl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ao(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ao(t,e)}ae(jt),ie(jt,t)}function cr(){ae(jt),ae(ol),ae(al)}function Ud(e){kn(al.current);var t=kn(jt.current),n=Ao(t,e.type);t!==n&&(ie(ol,e),ie(jt,n))}function ts(e){ol.current===e&&(ae(jt),ae(ol))}var ce=cn(0);function Si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xo=[];function ns(){for(var e=0;e<xo.length;e++)xo[e]._workInProgressVersionPrimary=null;xo.length=0}var Zl=It.ReactCurrentDispatcher,wo=It.ReactCurrentBatchConfig,_n=0,de=null,Se=null,Ee=null,ki=!1,Wr=!1,sl=0,dm=0;function Le(){throw Error(_(321))}function rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function ls(e,t,n,r,l,i){if(_n=i,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zl.current=e===null||e.memoizedState===null?mm:gm,e=n(r,l),Wr){i=0;do{if(Wr=!1,sl=0,25<=i)throw Error(_(301));i+=1,Ee=Se=null,t.updateQueue=null,Zl.current=vm,e=n(r,l)}while(Wr)}if(Zl.current=Ei,t=Se!==null&&Se.next!==null,_n=0,Ee=Se=de=null,ki=!1,t)throw Error(_(300));return e}function is(){var e=sl!==0;return sl=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function st(){if(Se===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ee===null?de.memoizedState:Ee.next;if(t!==null)Ee=t,Se=e;else{if(e===null)throw Error(_(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function ul(e,t){return typeof t=="function"?t(e):t}function So(e){var t=st(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=Se,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,c=i;do{var d=c.lane;if((_n&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=f,o=r):a=a.next=f,de.lanes|=d,Rn|=d}c=c.next}while(c!==null&&c!==i);a===null?o=r:a.next=s,yt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,de.lanes|=i,Rn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=st(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);yt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function bd(){}function Ad(e,t){var n=de,r=st(),l=t(),i=!yt(r.memoizedState,l);if(i&&(r.memoizedState=l,He=!0),r=r.queue,os($d.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,cl(9,Vd.bind(null,n,r,l,t),void 0,null),je===null)throw Error(_(349));_n&30||Bd(n,t,l)}return l}function Bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vd(e,t,n,r){t.value=n,t.getSnapshot=r,Hd(t)&&Wd(e)}function $d(e,t,n){return n(function(){Hd(t)&&Wd(e)})}function Hd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function Wd(e){var t=Ot(e,1);t!==null&&vt(t,e,1,-1)}function Nu(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ul,lastRenderedState:e},t.queue=e,e=e.dispatch=hm.bind(null,de,e),[t.memoizedState,e]}function cl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qd(){return st().memoizedState}function ql(e,t,n,r){var l=St();de.flags|=e,l.memoizedState=cl(1|t,n,void 0,r===void 0?null:r)}function bi(e,t,n,r){var l=st();r=r===void 0?null:r;var i=void 0;if(Se!==null){var o=Se.memoizedState;if(i=o.destroy,r!==null&&rs(r,o.deps)){l.memoizedState=cl(t,n,i,r);return}}de.flags|=e,l.memoizedState=cl(1|t,n,i,r)}function Cu(e,t){return ql(8390656,8,e,t)}function os(e,t){return bi(2048,8,e,t)}function Kd(e,t){return bi(4,2,e,t)}function Yd(e,t){return bi(4,4,e,t)}function Xd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gd(e,t,n){return n=n!=null?n.concat([e]):null,bi(4,4,Xd.bind(null,t,e),n)}function as(){}function Jd(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zd(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qd(e,t,n){return _n&21?(yt(n,t)||(n=ld(),de.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function fm(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=wo.transition;wo.transition={};try{e(!1),t()}finally{q=n,wo.transition=r}}function ef(){return st().memoizedState}function pm(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tf(e))nf(t,n);else if(n=Fd(e,t,n,r),n!==null){var l=be();vt(n,e,r,l),rf(n,t,r)}}function hm(e,t,n){var r=ln(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tf(e))nf(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,yt(s,o)){var a=t.interleaved;a===null?(l.next=l,Za(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Fd(e,t,l,r),n!==null&&(l=be(),vt(n,e,r,l),rf(n,t,r))}}function tf(e){var t=e.alternate;return e===de||t!==null&&t===de}function nf(e,t){Wr=ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ua(e,n)}}var Ei={readContext:at,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},mm={readContext:at,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Cu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ql(4194308,4,Xd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ql(4194308,4,e,t)},useInsertionEffect:function(e,t){return ql(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pm.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:Nu,useDebugValue:as,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=Nu(!1),t=e[0];return e=fm.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,l=St();if(ue){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),je===null)throw Error(_(349));_n&30||Bd(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Cu($d.bind(null,r,i,e),[e]),r.flags|=2048,cl(9,Vd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=St(),t=je.identifierPrefix;if(ue){var n=Lt,r=Rt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gm={readContext:at,useCallback:Jd,useContext:at,useEffect:os,useImperativeHandle:Gd,useInsertionEffect:Kd,useLayoutEffect:Yd,useMemo:Zd,useReducer:So,useRef:Qd,useState:function(){return So(ul)},useDebugValue:as,useDeferredValue:function(e){var t=st();return qd(t,Se.memoizedState,e)},useTransition:function(){var e=So(ul)[0],t=st().memoizedState;return[e,t]},useMutableSource:bd,useSyncExternalStore:Ad,useId:ef,unstable_isNewReconciler:!1},vm={readContext:at,useCallback:Jd,useContext:at,useEffect:os,useImperativeHandle:Gd,useInsertionEffect:Kd,useLayoutEffect:Yd,useMemo:Zd,useReducer:ko,useRef:Qd,useState:function(){return ko(ul)},useDebugValue:as,useDeferredValue:function(e){var t=st();return Se===null?t.memoizedState=e:qd(t,Se.memoizedState,e)},useTransition:function(){var e=ko(ul)[0],t=st().memoizedState;return[e,t]},useMutableSource:bd,useSyncExternalStore:Ad,useId:ef,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function aa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ai={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),l=ln(e),i=Tt(r,l);i.payload=t,n!=null&&(i.callback=n),t=nn(e,i,l),t!==null&&(vt(t,e,l,r),Jl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),l=ln(e),i=Tt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=nn(e,i,l),t!==null&&(vt(t,e,l,r),Jl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=ln(e),l=Tt(n,r);l.tag=2,t!=null&&(l.callback=t),t=nn(e,l,r),t!==null&&(vt(t,e,r,n),Jl(t,e,r))}};function Pu(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!nl(n,r)||!nl(l,i):!0}function lf(e,t,n){var r=!1,l=sn,i=t.contextType;return typeof i=="object"&&i!==null?i=at(i):(l=Qe(t)?Cn:Me.current,r=t.contextTypes,i=(r=r!=null)?ar(e,l):sn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ai,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function _u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ai.enqueueReplaceState(t,t.state,null)}function sa(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},qa(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=at(i):(i=Qe(t)?Cn:Me.current,l.context=ar(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(aa(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ai.enqueueReplaceState(l,l.state,null),wi(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function dr(e,t){try{var n="",r=t;do n+=Wp(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Eo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ua(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ym=typeof WeakMap=="function"?WeakMap:Map;function of(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ni||(Ni=!0,xa=r),ua(e,t)},n}function af(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ua(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ua(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ru(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ym;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=zm.bind(null,e,t,n),t.then(e,e))}function Lu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,nn(n,t,1))),n.lanes|=1),e)}var xm=It.ReactCurrentOwner,He=!1;function Ue(e,t,n,r){t.child=e===null?Od(t,null,n,r):ur(t,e.child,n,r)}function zu(e,t,n,r,l){n=n.render;var i=t.ref;return lr(t,l),r=ls(e,t,n,r,i,l),n=is(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ft(e,t,l)):(ue&&n&&Qa(t),t.flags|=1,Ue(e,t,r,l),t.child)}function Du(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!ms(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,sf(e,t,i,r,l)):(e=ri(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:nl,n(o,r)&&e.ref===t.ref)return Ft(e,t,l)}return t.flags|=1,e=on(i,r),e.ref=t.ref,e.return=t,t.child=e}function sf(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(nl(i,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Ft(e,t,l)}return ca(e,t,n,r,l)}function uf(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(qn,Xe),Xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(qn,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ie(qn,Xe),Xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ie(qn,Xe),Xe|=r;return Ue(e,t,l,n),t.child}function cf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ca(e,t,n,r,l){var i=Qe(n)?Cn:Me.current;return i=ar(t,i),lr(t,l),n=ls(e,t,n,r,i,l),r=is(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ft(e,t,l)):(ue&&r&&Qa(t),t.flags|=1,Ue(e,t,n,l),t.child)}function Mu(e,t,n,r,l){if(Qe(n)){var i=!0;mi(t)}else i=!1;if(lr(t,l),t.stateNode===null)ei(e,t),lf(t,n,r),sa(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=at(c):(c=Qe(n)?Cn:Me.current,c=ar(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==c)&&_u(t,o,r,c),Qt=!1;var h=t.memoizedState;o.state=h,wi(t,r,o,l),a=t.memoizedState,s!==r||h!==a||We.current||Qt?(typeof d=="function"&&(aa(t,n,d,r),a=t.memoizedState),(s=Qt||Pu(t,n,s,r,h,a,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Id(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ft(t.type,s),o.props=c,f=t.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=at(a):(a=Qe(n)?Cn:Me.current,a=ar(t,a));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||h!==a)&&_u(t,o,r,a),Qt=!1,h=t.memoizedState,o.state=h,wi(t,r,o,l);var E=t.memoizedState;s!==f||h!==E||We.current||Qt?(typeof w=="function"&&(aa(t,n,w,r),E=t.memoizedState),(c=Qt||Pu(t,n,c,r,h,E,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),o.props=r,o.state=E,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return da(e,t,n,r,i,l)}function da(e,t,n,r,l,i){cf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&xu(t,n,!1),Ft(e,t,i);r=t.stateNode,xm.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ur(t,e.child,null,i),t.child=ur(t,null,s,i)):Ue(e,t,s,i),t.memoizedState=r.state,l&&xu(t,n,!0),t.child}function df(e){var t=e.stateNode;t.pendingContext?yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yu(e,t.context,!1),es(e,t.containerInfo)}function Ou(e,t,n,r,l){return sr(),Ya(l),t.flags|=256,Ue(e,t,n,r),t.child}var fa={dehydrated:null,treeContext:null,retryLane:0};function pa(e){return{baseLanes:e,cachePool:null,transitions:null}}function ff(e,t,n){var r=t.pendingProps,l=ce.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ie(ce,l&1),e===null)return ia(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=$i(o,r,0,null),e=Nn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=pa(n),t.memoizedState=fa,e):ss(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return wm(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=on(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=on(s,i):(i=Nn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?pa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=fa,r}return i=e.child,e=i.sibling,r=on(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ss(e,t){return t=$i({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bl(e,t,n,r){return r!==null&&Ya(r),ur(t,e.child,null,n),e=ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wm(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Eo(Error(_(422))),Bl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=$i({mode:"visible",children:r.children},l,0,null),i=Nn(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ur(t,e.child,null,o),t.child.memoizedState=pa(o),t.memoizedState=fa,i);if(!(t.mode&1))return Bl(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=Eo(i,r,void 0),Bl(e,t,o,r)}if(s=(o&e.childLanes)!==0,He||s){if(r=je,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ot(e,l),vt(r,e,l,-1))}return hs(),r=Eo(Error(_(421))),Bl(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Dm.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Je=tn(l.nextSibling),Ze=t,ue=!0,mt=null,e!==null&&(rt[lt++]=Rt,rt[lt++]=Lt,rt[lt++]=Pn,Rt=e.id,Lt=e.overflow,Pn=t),t=ss(t,r.children),t.flags|=4096,t)}function Fu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),oa(e.return,t,n)}function jo(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function pf(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Ue(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,n,t);else if(e.tag===19)Fu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ce,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Si(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),jo(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Si(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}jo(t,!0,n,null,i);break;case"together":jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ei(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sm(e,t,n){switch(t.tag){case 3:df(t),sr();break;case 5:Ud(t);break;case 1:Qe(t.type)&&mi(t);break;case 4:es(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;ie(yi,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?ff(e,t,n):(ie(ce,ce.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);ie(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pf(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ie(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,uf(e,t,n)}return Ft(e,t,n)}var hf,ha,mf,gf;hf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ha=function(){};mf=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,kn(jt.current);var i=null;switch(n){case"input":l=Fo(e,l),r=Fo(e,r),i=[];break;case"select":l=fe({},l,{value:void 0}),r=fe({},r,{value:void 0}),i=[];break;case"textarea":l=bo(e,l),r=bo(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pi)}Bo(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&oe("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};gf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function km(e,t,n){var r=t.pendingProps;switch(Ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Qe(t.type)&&hi(),Te(t),null;case 3:return r=t.stateNode,cr(),ae(We),ae(Me),ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(ka(mt),mt=null))),ha(e,t),Te(t),null;case 5:ts(t);var l=kn(al.current);if(n=t.type,e!==null&&t.stateNode!=null)mf(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Te(t),null}if(e=kn(jt.current),bl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[kt]=t,r[il]=i,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(l=0;l<Ur.length;l++)oe(Ur[l],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Ws(r,i),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},oe("invalid",r);break;case"textarea":Ks(r,i),oe("invalid",r)}Bo(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ul(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ul(r.textContent,s,e),l=["children",""+s]):Xr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":Ll(r),Qs(r,i,!0);break;case"textarea":Ll(r),Ys(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pi)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$c(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[kt]=t,e[il]=r,hf(e,t,!1,!1),t.stateNode=e;e:{switch(o=Vo(n,r),n){case"dialog":oe("cancel",e),oe("close",e),l=r;break;case"iframe":case"object":case"embed":oe("load",e),l=r;break;case"video":case"audio":for(l=0;l<Ur.length;l++)oe(Ur[l],e);l=r;break;case"source":oe("error",e),l=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),l=r;break;case"details":oe("toggle",e),l=r;break;case"input":Ws(e,r),l=Fo(e,r),oe("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=fe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Ks(e,r),l=bo(e,r),oe("invalid",e);break;default:l=r}Bo(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Qc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Hc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Gr(e,a):typeof a=="number"&&Gr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&oe("scroll",e):a!=null&&za(e,i,a,o))}switch(n){case"input":Ll(e),Qs(e,r,!1);break;case"textarea":Ll(e),Ys(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?er(e,!!r.multiple,i,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=pi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)gf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=kn(al.current),kn(jt.current),bl(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(i=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Ul(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ul(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Te(t),null;case 13:if(ae(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Je!==null&&t.mode&1&&!(t.flags&128))Dd(),sr(),t.flags|=98560,i=!1;else if(i=bl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[kt]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else mt!==null&&(ka(mt),mt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?ke===0&&(ke=3):hs())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return cr(),ha(e,t),e===null&&rl(t.stateNode.containerInfo),Te(t),null;case 10:return Ja(t.type._context),Te(t),null;case 17:return Qe(t.type)&&hi(),Te(t),null;case 19:if(ae(ce),i=t.memoizedState,i===null)return Te(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Lr(i,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Si(e),o!==null){for(t.flags|=128,Lr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ce,ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&ge()>fr&&(t.flags|=128,r=!0,Lr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Si(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ue)return Te(t),null}else 2*ge()-i.renderingStartTime>fr&&n!==1073741824&&(t.flags|=128,r=!0,Lr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ge(),t.sibling=null,n=ce.current,ie(ce,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return ps(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Em(e,t){switch(Ka(t),t.tag){case 1:return Qe(t.type)&&hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),ae(We),ae(Me),ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ts(t),null;case 13:if(ae(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(ce),null;case 4:return cr(),null;case 10:return Ja(t.type._context),null;case 22:case 23:return ps(),null;case 24:return null;default:return null}}var Vl=!1,De=!1,jm=typeof WeakSet=="function"?WeakSet:Set,M=null;function Zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function ma(e,t,n){try{n()}catch(r){me(e,t,r)}}var Iu=!1;function Nm(e,t){if(Zo=ci,e=wd(),Wa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var w;f!==n||l!==0&&f.nodeType!==3||(s=o+l),f!==i||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)h=f,f=w;for(;;){if(f===e)break t;if(h===n&&++c===l&&(s=o),h===i&&++d===r&&(a=o),(w=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(qo={focusedElem:e,selectionRange:n},ci=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var k=E.memoizedProps,T=E.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?k:ft(t.type,k),T);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(j){me(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return E=Iu,Iu=!1,E}function Qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ma(t,n,i)}l=l.next}while(l!==r)}}function Bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ga(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vf(e){var t=e.alternate;t!==null&&(e.alternate=null,vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[il],delete t[na],delete t[am],delete t[sm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yf(e){return e.tag===5||e.tag===3||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pi));else if(r!==4&&(e=e.child,e!==null))for(va(e,t,n),e=e.sibling;e!==null;)va(e,t,n),e=e.sibling}function ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ya(e,t,n),e=e.sibling;e!==null;)ya(e,t,n),e=e.sibling}var Pe=null,pt=!1;function $t(e,t,n){for(n=n.child;n!==null;)xf(e,t,n),n=n.sibling}function xf(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Di,n)}catch{}switch(n.tag){case 5:De||Zn(n,t);case 6:var r=Pe,l=pt;Pe=null,$t(e,t,n),Pe=r,pt=l,Pe!==null&&(pt?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(pt?(e=Pe,n=n.stateNode,e.nodeType===8?vo(e.parentNode,n):e.nodeType===1&&vo(e,n),el(e)):vo(Pe,n.stateNode));break;case 4:r=Pe,l=pt,Pe=n.stateNode.containerInfo,pt=!0,$t(e,t,n),Pe=r,pt=l;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ma(n,t,o),l=l.next}while(l!==r)}$t(e,t,n);break;case 1:if(!De&&(Zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){me(n,t,s)}$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,$t(e,t,n),De=r):$t(e,t,n);break;default:$t(e,t,n)}}function bu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jm),t.forEach(function(r){var l=Mm.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Pe=s.stateNode,pt=!1;break e;case 3:Pe=s.stateNode.containerInfo,pt=!0;break e;case 4:Pe=s.stateNode.containerInfo,pt=!0;break e}s=s.return}if(Pe===null)throw Error(_(160));xf(i,o,l),Pe=null,pt=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){me(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wf(t,e),t=t.sibling}function wf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),wt(e),r&4){try{Qr(3,e,e.return),Bi(3,e)}catch(k){me(e,e.return,k)}try{Qr(5,e,e.return)}catch(k){me(e,e.return,k)}}break;case 1:dt(t,e),wt(e),r&512&&n!==null&&Zn(n,n.return);break;case 5:if(dt(t,e),wt(e),r&512&&n!==null&&Zn(n,n.return),e.flags&32){var l=e.stateNode;try{Gr(l,"")}catch(k){me(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Bc(l,i),Vo(s,o);var c=Vo(s,i);for(o=0;o<a.length;o+=2){var d=a[o],f=a[o+1];d==="style"?Qc(l,f):d==="dangerouslySetInnerHTML"?Hc(l,f):d==="children"?Gr(l,f):za(l,d,f,c)}switch(s){case"input":Io(l,i);break;case"textarea":Vc(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?er(l,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?er(l,!!i.multiple,i.defaultValue,!0):er(l,!!i.multiple,i.multiple?[]:"",!1))}l[il]=i}catch(k){me(e,e.return,k)}}break;case 6:if(dt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(_(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){me(e,e.return,k)}}break;case 3:if(dt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{el(t.containerInfo)}catch(k){me(e,e.return,k)}break;case 4:dt(t,e),wt(e);break;case 13:dt(t,e),wt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ds=ge())),r&4&&bu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(De=(c=De)||d,dt(t,e),De=c):dt(t,e),wt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(f=M=d;M!==null;){switch(h=M,w=h.child,h.tag){case 0:case 11:case 14:case 15:Qr(4,h,h.return);break;case 1:Zn(h,h.return);var E=h.stateNode;if(typeof E.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(k){me(r,n,k)}}break;case 5:Zn(h,h.return);break;case 22:if(h.memoizedState!==null){Bu(f);continue}}w!==null?(w.return=h,M=w):Bu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{l=f.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Wc("display",o))}catch(k){me(e,e.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){me(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:dt(t,e),wt(e),r&4&&bu(e);break;case 21:break;default:dt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Gr(l,""),r.flags&=-33);var i=Uu(e);ya(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Uu(e);va(e,s,o);break;default:throw Error(_(161))}}catch(a){me(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cm(e,t,n){M=e,Sf(e)}function Sf(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var l=M,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Vl;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||De;s=Vl;var c=De;if(Vl=o,(De=a)&&!c)for(M=l;M!==null;)o=M,a=o.child,o.tag===22&&o.memoizedState!==null?Vu(l):a!==null?(a.return=o,M=a):Vu(l);for(;i!==null;)M=i,Sf(i),i=i.sibling;M=l,Vl=s,De=c}Au(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,M=i):Au(e)}}function Au(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||Bi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ju(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ju(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&el(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}De||t.flags&512&&ga(t)}catch(h){me(t,t.return,h)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Bu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Vu(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bi(4,t)}catch(a){me(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){me(t,l,a)}}var i=t.return;try{ga(t)}catch(a){me(t,i,a)}break;case 5:var o=t.return;try{ga(t)}catch(a){me(t,o,a)}}}catch(a){me(t,t.return,a)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var Pm=Math.ceil,ji=It.ReactCurrentDispatcher,us=It.ReactCurrentOwner,ot=It.ReactCurrentBatchConfig,X=0,je=null,xe=null,_e=0,Xe=0,qn=cn(0),ke=0,dl=null,Rn=0,Vi=0,cs=0,Kr=null,$e=null,ds=0,fr=1/0,Pt=null,Ni=!1,xa=null,rn=null,$l=!1,Gt=null,Ci=0,Yr=0,wa=null,ti=-1,ni=0;function be(){return X&6?ge():ti!==-1?ti:ti=ge()}function ln(e){return e.mode&1?X&2&&_e!==0?_e&-_e:cm.transition!==null?(ni===0&&(ni=ld()),ni):(e=q,e!==0||(e=window.event,e=e===void 0?16:dd(e.type)),e):1}function vt(e,t,n,r){if(50<Yr)throw Yr=0,wa=null,Error(_(185));gl(e,n,r),(!(X&2)||e!==je)&&(e===je&&(!(X&2)&&(Vi|=n),ke===4&&Yt(e,_e)),Ke(e,r),n===1&&X===0&&!(t.mode&1)&&(fr=ge()+500,Ui&&dn()))}function Ke(e,t){var n=e.callbackNode;ch(e,t);var r=ui(e,e===je?_e:0);if(r===0)n!==null&&Js(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Js(n),t===1)e.tag===0?um($u.bind(null,e)):Ld($u.bind(null,e)),im(function(){!(X&6)&&dn()}),n=null;else{switch(id(r)){case 1:n=Ia;break;case 4:n=nd;break;case 16:n=si;break;case 536870912:n=rd;break;default:n=si}n=Rf(n,kf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kf(e,t){if(ti=-1,ni=0,X&6)throw Error(_(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=ui(e,e===je?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Pi(e,r);else{t=r;var l=X;X|=2;var i=jf();(je!==e||_e!==t)&&(Pt=null,fr=ge()+500,jn(e,t));do try{Lm();break}catch(s){Ef(e,s)}while(!0);Ga(),ji.current=i,X=l,xe!==null?t=0:(je=null,_e=0,t=ke)}if(t!==0){if(t===2&&(l=Ko(e),l!==0&&(r=l,t=Sa(e,l))),t===1)throw n=dl,jn(e,0),Yt(e,r),Ke(e,ge()),n;if(t===6)Yt(e,r);else{if(l=e.current.alternate,!(r&30)&&!_m(l)&&(t=Pi(e,r),t===2&&(i=Ko(e),i!==0&&(r=i,t=Sa(e,i))),t===1))throw n=dl,jn(e,0),Yt(e,r),Ke(e,ge()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:vn(e,$e,Pt);break;case 3:if(Yt(e,r),(r&130023424)===r&&(t=ds+500-ge(),10<t)){if(ui(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ta(vn.bind(null,e,$e,Pt),t);break}vn(e,$e,Pt);break;case 4:if(Yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-gt(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pm(r/1960))-r,10<r){e.timeoutHandle=ta(vn.bind(null,e,$e,Pt),r);break}vn(e,$e,Pt);break;case 5:vn(e,$e,Pt);break;default:throw Error(_(329))}}}return Ke(e,ge()),e.callbackNode===n?kf.bind(null,e):null}function Sa(e,t){var n=Kr;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=Pi(e,t),e!==2&&(t=$e,$e=n,t!==null&&ka(t)),e}function ka(e){$e===null?$e=e:$e.push.apply($e,e)}function _m(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!yt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~cs,t&=~Vi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function $u(e){if(X&6)throw Error(_(327));ir();var t=ui(e,0);if(!(t&1))return Ke(e,ge()),null;var n=Pi(e,t);if(e.tag!==0&&n===2){var r=Ko(e);r!==0&&(t=r,n=Sa(e,r))}if(n===1)throw n=dl,jn(e,0),Yt(e,t),Ke(e,ge()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,$e,Pt),Ke(e,ge()),null}function fs(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(fr=ge()+500,Ui&&dn())}}function Ln(e){Gt!==null&&Gt.tag===0&&!(X&6)&&ir();var t=X;X|=1;var n=ot.transition,r=q;try{if(ot.transition=null,q=1,e)return e()}finally{q=r,ot.transition=n,X=t,!(X&6)&&dn()}}function ps(){Xe=qn.current,ae(qn)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lm(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hi();break;case 3:cr(),ae(We),ae(Me),ns();break;case 5:ts(r);break;case 4:cr();break;case 13:ae(ce);break;case 19:ae(ce);break;case 10:Ja(r.type._context);break;case 22:case 23:ps()}n=n.return}if(je=e,xe=e=on(e.current,null),_e=Xe=t,ke=0,dl=null,cs=Vi=Rn=0,$e=Kr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Sn=null}return e}function Ef(e,t){do{var n=xe;try{if(Ga(),Zl.current=Ei,ki){for(var r=de.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ki=!1}if(_n=0,Ee=Se=de=null,Wr=!1,sl=0,us.current=null,n===null||n.return===null){ke=1,dl=t,xe=null;break}e:{var i=e,o=n.return,s=n,a=t;if(t=_e,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Lu(o);if(w!==null){w.flags&=-257,Tu(w,o,s,i,t),w.mode&1&&Ru(i,c,t),t=w,a=c;var E=t.updateQueue;if(E===null){var k=new Set;k.add(a),t.updateQueue=k}else E.add(a);break e}else{if(!(t&1)){Ru(i,c,t),hs();break e}a=Error(_(426))}}else if(ue&&s.mode&1){var T=Lu(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Tu(T,o,s,i,t),Ya(dr(a,s));break e}}i=a=dr(a,s),ke!==4&&(ke=2),Kr===null?Kr=[i]:Kr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=of(i,a,t);Eu(i,g);break e;case 1:s=a;var p=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(rn===null||!rn.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var j=af(i,s,t);Eu(i,j);break e}}i=i.return}while(i!==null)}Cf(n)}catch(R){t=R,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function jf(){var e=ji.current;return ji.current=Ei,e===null?Ei:e}function hs(){(ke===0||ke===3||ke===2)&&(ke=4),je===null||!(Rn&268435455)&&!(Vi&268435455)||Yt(je,_e)}function Pi(e,t){var n=X;X|=2;var r=jf();(je!==e||_e!==t)&&(Pt=null,jn(e,t));do try{Rm();break}catch(l){Ef(e,l)}while(!0);if(Ga(),X=n,ji.current=r,xe!==null)throw Error(_(261));return je=null,_e=0,ke}function Rm(){for(;xe!==null;)Nf(xe)}function Lm(){for(;xe!==null&&!th();)Nf(xe)}function Nf(e){var t=_f(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?Cf(e):xe=t,us.current=null}function Cf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Em(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,xe=null;return}}else if(n=km(n,t,Xe),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);ke===0&&(ke=5)}function vn(e,t,n){var r=q,l=ot.transition;try{ot.transition=null,q=1,Tm(e,t,n,r)}finally{ot.transition=l,q=r}return null}function Tm(e,t,n,r){do ir();while(Gt!==null);if(X&6)throw Error(_(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(dh(e,i),e===je&&(xe=je=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$l||($l=!0,Rf(si,function(){return ir(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var o=q;q=1;var s=X;X|=4,us.current=null,Nm(e,n),wf(n,e),Jh(qo),ci=!!Zo,qo=Zo=null,e.current=n,Cm(n),nh(),X=s,q=o,ot.transition=i}else e.current=n;if($l&&($l=!1,Gt=e,Ci=l),i=e.pendingLanes,i===0&&(rn=null),ih(n.stateNode),Ke(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ni)throw Ni=!1,e=xa,xa=null,e;return Ci&1&&e.tag!==0&&ir(),i=e.pendingLanes,i&1?e===wa?Yr++:(Yr=0,wa=e):Yr=0,dn(),null}function ir(){if(Gt!==null){var e=id(Ci),t=ot.transition,n=q;try{if(ot.transition=null,q=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Ci=0,X&6)throw Error(_(331));var l=X;for(X|=4,M=e.current;M!==null;){var i=M,o=i.child;if(M.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(M=c;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:Qr(8,d,i)}var f=d.child;if(f!==null)f.return=d,M=f;else for(;M!==null;){d=M;var h=d.sibling,w=d.return;if(vf(d),d===c){M=null;break}if(h!==null){h.return=w,M=h;break}M=w}}}var E=i.alternate;if(E!==null){var k=E.child;if(k!==null){E.child=null;do{var T=k.sibling;k.sibling=null,k=T}while(k!==null)}}M=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,M=o;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Qr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,M=g;break e}M=i.return}}var p=e.current;for(M=p;M!==null;){o=M;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,M=v;else e:for(o=p;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Bi(9,s)}}catch(R){me(s,s.return,R)}if(s===o){M=null;break e}var j=s.sibling;if(j!==null){j.return=s.return,M=j;break e}M=s.return}}if(X=l,dn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Di,e)}catch{}r=!0}return r}finally{q=n,ot.transition=t}}return!1}function Hu(e,t,n){t=dr(n,t),t=of(e,t,1),e=nn(e,t,1),t=be(),e!==null&&(gl(e,1,t),Ke(e,t))}function me(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=dr(n,e),e=af(t,e,1),t=nn(t,e,1),e=be(),t!==null&&(gl(t,1,e),Ke(t,e));break}}t=t.return}}function zm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(_e&n)===n&&(ke===4||ke===3&&(_e&130023424)===_e&&500>ge()-ds?jn(e,0):cs|=n),Ke(e,t)}function Pf(e,t){t===0&&(e.mode&1?(t=Dl,Dl<<=1,!(Dl&130023424)&&(Dl=4194304)):t=1);var n=be();e=Ot(e,t),e!==null&&(gl(e,t,n),Ke(e,n))}function Dm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pf(e,n)}function Mm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Pf(e,n)}var _f;_f=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,Sm(e,t,n);He=!!(e.flags&131072)}else He=!1,ue&&t.flags&1048576&&Td(t,vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ei(e,t),e=t.pendingProps;var l=ar(t,Me.current);lr(t,n),l=ls(null,t,r,e,l,n);var i=is();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(i=!0,mi(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,qa(t),l.updater=Ai,t.stateNode=l,l._reactInternals=t,sa(t,r,e,n),t=da(null,t,r,!0,i,n)):(t.tag=0,ue&&i&&Qa(t),Ue(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ei(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Fm(r),e=ft(r,e),l){case 0:t=ca(null,t,r,e,n);break e;case 1:t=Mu(null,t,r,e,n);break e;case 11:t=zu(null,t,r,e,n);break e;case 14:t=Du(null,t,r,ft(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ft(r,l),ca(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ft(r,l),Mu(e,t,r,l,n);case 3:e:{if(df(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Id(e,t),wi(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=dr(Error(_(423)),t),t=Ou(e,t,r,n,l);break e}else if(r!==l){l=dr(Error(_(424)),t),t=Ou(e,t,r,n,l);break e}else for(Je=tn(t.stateNode.containerInfo.firstChild),Ze=t,ue=!0,mt=null,n=Od(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===l){t=Ft(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return Ud(t),e===null&&ia(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,ea(r,l)?o=null:i!==null&&ea(r,i)&&(t.flags|=32),cf(e,t),Ue(e,t,o,n),t.child;case 6:return e===null&&ia(t),null;case 13:return ff(e,t,n);case 4:return es(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ur(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ft(r,l),zu(e,t,r,l,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,ie(yi,r._currentValue),r._currentValue=o,i!==null)if(yt(i.value,o)){if(i.children===l.children&&!We.current){t=Ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Tt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),oa(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(_(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),oa(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ue(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,lr(t,n),l=at(l),r=r(l),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,l=ft(r,t.pendingProps),l=ft(r.type,l),Du(e,t,r,l,n);case 15:return sf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ft(r,l),ei(e,t),t.tag=1,Qe(r)?(e=!0,mi(t)):e=!1,lr(t,n),lf(t,r,l),sa(t,r,l,n),da(null,t,r,!0,e,n);case 19:return pf(e,t,n);case 22:return uf(e,t,n)}throw Error(_(156,t.tag))};function Rf(e,t){return td(e,t)}function Om(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new Om(e,t,n,r)}function ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fm(e){if(typeof e=="function")return ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ma)return 11;if(e===Oa)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ri(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")ms(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case $n:return Nn(n.children,l,i,t);case Da:o=8,l|=8;break;case zo:return e=it(12,n,t,l|2),e.elementType=zo,e.lanes=i,e;case Do:return e=it(13,n,t,l),e.elementType=Do,e.lanes=i,e;case Mo:return e=it(19,n,t,l),e.elementType=Mo,e.lanes=i,e;case Uc:return $i(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fc:o=10;break e;case Ic:o=9;break e;case Ma:o=11;break e;case Oa:o=14;break e;case Wt:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=it(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Nn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function $i(e,t,n,r){return e=it(22,e,r,t),e.elementType=Uc,e.lanes=n,e.stateNode={isHidden:!1},e}function No(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Co(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Im(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=io(0),this.expirationTimes=io(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=io(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function gs(e,t,n,r,l,i,o,s,a){return e=new Im(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=it(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qa(i),e}function Um(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lf(e){if(!e)return sn;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Qe(n))return Rd(e,n,t)}return t}function Tf(e,t,n,r,l,i,o,s,a){return e=gs(n,r,!0,e,l,i,o,s,a),e.context=Lf(null),n=e.current,r=be(),l=ln(n),i=Tt(r,l),i.callback=t??null,nn(n,i,l),e.current.lanes=l,gl(e,l,r),Ke(e,r),e}function Hi(e,t,n,r){var l=t.current,i=be(),o=ln(l);return n=Lf(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nn(l,t,o),e!==null&&(vt(e,l,o,i),Jl(e,l,o)),o}function _i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vs(e,t){Wu(e,t),(e=e.alternate)&&Wu(e,t)}function bm(){return null}var zf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ys(e){this._internalRoot=e}Wi.prototype.render=ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Hi(e,t,null,null)};Wi.prototype.unmount=ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){Hi(null,e,null,null)}),t[Mt]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=sd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&cd(e)}};function xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qu(){}function Am(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=_i(o);i.call(c)}}var o=Tf(t,r,e,0,null,!1,!1,"",Qu);return e._reactRootContainer=o,e[Mt]=o.current,rl(e.nodeType===8?e.parentNode:e),Ln(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=_i(a);s.call(c)}}var a=gs(e,0,!1,null,null,!1,!1,"",Qu);return e._reactRootContainer=a,e[Mt]=a.current,rl(e.nodeType===8?e.parentNode:e),Ln(function(){Hi(t,a,n,r)}),a}function Ki(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=_i(o);s.call(a)}}Hi(t,o,e,l)}else o=Am(n,t,e,l,r);return _i(o)}od=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ir(t.pendingLanes);n!==0&&(Ua(t,n|1),Ke(t,ge()),!(X&6)&&(fr=ge()+500,dn()))}break;case 13:Ln(function(){var r=Ot(e,1);if(r!==null){var l=be();vt(r,e,1,l)}}),vs(e,1)}};ba=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=be();vt(t,e,134217728,n)}vs(e,134217728)}};ad=function(e){if(e.tag===13){var t=ln(e),n=Ot(e,t);if(n!==null){var r=be();vt(n,e,t,r)}vs(e,t)}};sd=function(){return q};ud=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Ho=function(e,t,n){switch(t){case"input":if(Io(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Ii(r);if(!l)throw Error(_(90));Ac(r),Io(r,l)}}}break;case"textarea":Vc(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};Xc=fs;Gc=Ln;var Bm={usingClientEntryPoint:!1,Events:[yl,Kn,Ii,Kc,Yc,fs]},Tr={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vm={bundleType:Tr.bundleType,version:Tr.version,rendererPackageName:Tr.rendererPackageName,rendererConfig:Tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qc(e),e===null?null:e.stateNode},findFiberByHostInstance:Tr.findFiberByHostInstance||bm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{Di=Hl.inject(Vm),Et=Hl}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bm;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xs(t))throw Error(_(200));return Um(e,t,null,n)};et.createRoot=function(e,t){if(!xs(e))throw Error(_(299));var n=!1,r="",l=zf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=gs(e,1,!1,null,null,n,!1,r,l),e[Mt]=t.current,rl(e.nodeType===8?e.parentNode:e),new ys(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=qc(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return Ln(e)};et.hydrate=function(e,t,n){if(!Qi(t))throw Error(_(200));return Ki(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!xs(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=zf;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Tf(t,null,e,1,n??null,l,!1,i,o),e[Mt]=t.current,rl(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Wi(t)};et.render=function(e,t,n){if(!Qi(t))throw Error(_(200));return Ki(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!Qi(e))throw Error(_(40));return e._reactRootContainer?(Ln(function(){Ki(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};et.unstable_batchedUpdates=fs;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qi(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ki(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function Df(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Df)}catch(e){console.error(e)}}Df(),zc.exports=et;var ws=zc.exports;const $m=xc(ws),Hm=yc({__proto__:null,default:$m},[ws]);var Ku=ws;Lo.createRoot=Ku.createRoot,Lo.hydrateRoot=Ku.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function se(){return se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)}var ye;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ye||(ye={}));const Yu="popstate";function Wm(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:o,hash:s}=r.location;return fl("",{pathname:i,search:o,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:zn(l)}return Km(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Tn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Qm(){return Math.random().toString(36).substr(2,8)}function Xu(e,t){return{usr:e.state,key:e.key,idx:t}}function fl(e,t,n,r){return n===void 0&&(n=null),se({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fn(t):t,{state:n,key:t&&t.key||r||Qm()})}function zn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function fn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Km(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=ye.Pop,a=null,c=d();c==null&&(c=0,o.replaceState(se({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){s=ye.Pop;let T=d(),g=T==null?null:T-c;c=T,a&&a({action:s,location:k.location,delta:g})}function h(T,g){s=ye.Push;let p=fl(k.location,T,g);c=d()+1;let v=Xu(p,c),j=k.createHref(p);try{o.pushState(v,"",j)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;l.location.assign(j)}i&&a&&a({action:s,location:k.location,delta:1})}function w(T,g){s=ye.Replace;let p=fl(k.location,T,g);c=d();let v=Xu(p,c),j=k.createHref(p);o.replaceState(v,"",j),i&&a&&a({action:s,location:k.location,delta:0})}function E(T){let g=l.location.origin!=="null"?l.location.origin:l.location.href,p=typeof T=="string"?T:zn(T);return p=p.replace(/ $/,"%20"),K(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let k={get action(){return s},get location(){return e(l,o)},listen(T){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(Yu,f),a=T,()=>{l.removeEventListener(Yu,f),a=null}},createHref(T){return t(l,T)},createURL:E,encodeLocation(T){let g=E(T);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:w,go(T){return o.go(T)}};return k}var Z;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Z||(Z={}));const Ym=new Set(["lazy","caseSensitive","path","id","index","children"]);function Xm(e){return e.index===!0}function Ri(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((l,i)=>{let o=[...n,String(i)],s=typeof l.id=="string"?l.id:o.join("-");if(K(l.index!==!0||!l.children,"Cannot specify children on an index route"),K(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Xm(l)){let a=se({},l,t(l),{id:s});return r[s]=a,a}else{let a=se({},l,t(l),{id:s,children:void 0});return r[s]=a,l.children&&(a.children=Ri(l.children,t,o,r)),a}})}function yn(e,t,n){return n===void 0&&(n="/"),li(e,t,n,!1)}function li(e,t,n,r){let l=typeof t=="string"?fn(t):t,i=vr(l.pathname||"/",n);if(i==null)return null;let o=Mf(e);Jm(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let c=sg(i);s=og(o[a],c,r)}return s}function Gm(e,t){let{route:n,pathname:r,params:l}=e;return{id:n.id,pathname:r,params:l,data:t[n.id],handle:n.handle}}function Mf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(K(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=zt([r,a.relativePath]),d=n.concat(a);i.children&&i.children.length>0&&(K(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Mf(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:lg(c,i.index),routesMeta:d})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let a of Of(i.path))l(i,o,a)}),t}function Of(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Of(r.join("/")),s=[];return s.push(...o.map(a=>a===""?i:[i,a].join("/"))),l&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Jm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ig(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Zm=/^:[\w-]+$/,qm=3,eg=2,tg=1,ng=10,rg=-2,Gu=e=>e==="*";function lg(e,t){let n=e.split("/"),r=n.length;return n.some(Gu)&&(r+=rg),t&&(r+=eg),n.filter(l=>!Gu(l)).reduce((l,i)=>l+(Zm.test(i)?qm:i===""?tg:ng),r)}function ig(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function og(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,l={},i="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=Ju({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},d),h=a.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Ju({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},d)),!f)return null;Object.assign(l,f.params),o.push({params:l,pathname:zt([i,f.pathname]),pathnameBase:fg(zt([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=zt([i,f.pathnameBase]))}return o}function Ju(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ag(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:h,isOptional:w}=d;if(h==="*"){let k=s[f]||"";o=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const E=s[f];return w&&!E?c[h]=void 0:c[h]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function ag(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Tn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function sg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Tn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function vr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ug=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cg=e=>ug.test(e);function dg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?fn(e):e,i;if(n)if(cg(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Tn(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=Zu(n.substring(1),"/"):i=Zu(n,t)}else i=t;return{pathname:i,search:pg(r),hash:hg(l)}}function Zu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Po(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ff(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ss(e,t){let n=Ff(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ks(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=fn(e):(l=se({},e),K(!l.pathname||!l.pathname.includes("?"),Po("?","pathname","search",l)),K(!l.pathname||!l.pathname.includes("#"),Po("#","pathname","hash",l)),K(!l.search||!l.search.includes("#"),Po("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;l.pathname=h.join("/")}s=f>=0?t[f]:"/"}let a=dg(l,s),c=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||d)&&(a.pathname+="/"),a}const zt=e=>e.join("/").replace(/\/\/+/g,"/"),fg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),pg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Li{constructor(t,n,r,l){l===void 0&&(l=!1),this.status=t,this.statusText=n||"",this.internal=l,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function pl(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const If=["post","put","patch","delete"],mg=new Set(If),gg=["get",...If],vg=new Set(gg),yg=new Set([301,302,303,307,308]),xg=new Set([307,308]),_o={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},wg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},zr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Es=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sg=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Uf="remix-router-transitions";function kg(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;K(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let l;if(e.mapRouteProperties)l=e.mapRouteProperties;else if(e.detectErrorBoundary){let m=e.detectErrorBoundary;l=x=>({hasErrorBoundary:m(x)})}else l=Sg;let i={},o=Ri(e.routes,l,void 0,i),s,a=e.basename||"/",c=e.dataStrategy||Cg,d=e.patchRoutesOnNavigation,f=se({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),h=null,w=new Set,E=null,k=null,T=null,g=e.hydrationData!=null,p=yn(o,e.history.location,a),v=!1,j=null;if(p==null&&!d){let m=Ve(404,{pathname:e.history.location.pathname}),{matches:x,route:S}=uc(o);p=x,j={[S.id]:m}}p&&!e.hydrationData&&jl(p,o,e.history.location.pathname).active&&(p=null);let R;if(p)if(p.some(m=>m.route.lazy))R=!1;else if(!p.some(m=>m.route.loader))R=!0;else if(f.v7_partialHydration){let m=e.hydrationData?e.hydrationData.loaderData:null,x=e.hydrationData?e.hydrationData.errors:null;if(x){let S=p.findIndex(C=>x[C.route.id]!==void 0);R=p.slice(0,S+1).every(C=>!ja(C.route,m,x))}else R=p.every(S=>!ja(S.route,m,x))}else R=e.hydrationData!=null;else if(R=!1,p=[],f.v7_partialHydration){let m=jl(null,o,e.history.location.pathname);m.active&&m.matches&&(v=!0,p=m.matches)}let O,y={historyAction:e.history.action,location:e.history.location,matches:p,initialized:R,navigation:_o,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||j,fetchers:new Map,blockers:new Map},P=ye.Pop,B=!1,D,ee=!1,re=new Map,we=null,Ne=!1,ut=!1,bt=[],At=new Set,L=new Map,V=0,H=-1,te=new Map,ne=new Set,ct=new Map,Ye=new Map,Oe=new Set,Fe=new Map,nt=new Map,Sl;function ep(){if(h=e.history.listen(m=>{let{action:x,location:S,delta:C}=m;if(Sl){Sl(),Sl=void 0;return}Tn(nt.size===0||C!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let z=Os({currentLocation:y.location,nextLocation:S,historyAction:x});if(z&&C!=null){let A=new Promise($=>{Sl=$});e.history.go(C*-1),El(z,{state:"blocked",location:S,proceed(){El(z,{state:"proceeding",proceed:void 0,reset:void 0,location:S}),A.then(()=>e.history.go(C))},reset(){let $=new Map(y.blockers);$.set(z,zr),Ie({blockers:$})}});return}return pn(x,S)}),n){Ag(t,re);let m=()=>Bg(t,re);t.addEventListener("pagehide",m),we=()=>t.removeEventListener("pagehide",m)}return y.initialized||pn(ye.Pop,y.location,{initialHydration:!0}),O}function tp(){h&&h(),we&&we(),w.clear(),D&&D.abort(),y.fetchers.forEach((m,x)=>kl(x)),y.blockers.forEach((m,x)=>Ms(x))}function np(m){return w.add(m),()=>w.delete(m)}function Ie(m,x){x===void 0&&(x={}),y=se({},y,m);let S=[],C=[];f.v7_fetcherPersist&&y.fetchers.forEach((z,A)=>{z.state==="idle"&&(Oe.has(A)?C.push(A):S.push(A))}),Oe.forEach(z=>{!y.fetchers.has(z)&&!L.has(z)&&C.push(z)}),[...w].forEach(z=>z(y,{deletedFetchers:C,viewTransitionOpts:x.viewTransitionOpts,flushSync:x.flushSync===!0})),f.v7_fetcherPersist?(S.forEach(z=>y.fetchers.delete(z)),C.forEach(z=>kl(z))):C.forEach(z=>Oe.delete(z))}function Fn(m,x,S){var C,z;let{flushSync:A}=S===void 0?{}:S,$=y.actionData!=null&&y.navigation.formMethod!=null&&ht(y.navigation.formMethod)&&y.navigation.state==="loading"&&((C=m.state)==null?void 0:C._isRedirect)!==!0,I;x.actionData?Object.keys(x.actionData).length>0?I=x.actionData:I=null:$?I=y.actionData:I=null;let U=x.loaderData?ac(y.loaderData,x.loaderData,x.matches||[],x.errors):y.loaderData,F=y.blockers;F.size>0&&(F=new Map(F),F.forEach((Y,Ce)=>F.set(Ce,zr)));let b=B===!0||y.navigation.formMethod!=null&&ht(y.navigation.formMethod)&&((z=m.state)==null?void 0:z._isRedirect)!==!0;s&&(o=s,s=void 0),Ne||P===ye.Pop||(P===ye.Push?e.history.push(m,m.state):P===ye.Replace&&e.history.replace(m,m.state));let W;if(P===ye.Pop){let Y=re.get(y.location.pathname);Y&&Y.has(m.pathname)?W={currentLocation:y.location,nextLocation:m}:re.has(m.pathname)&&(W={currentLocation:m,nextLocation:y.location})}else if(ee){let Y=re.get(y.location.pathname);Y?Y.add(m.pathname):(Y=new Set([m.pathname]),re.set(y.location.pathname,Y)),W={currentLocation:y.location,nextLocation:m}}Ie(se({},x,{actionData:I,loaderData:U,historyAction:P,location:m,initialized:!0,navigation:_o,revalidation:"idle",restoreScrollPosition:Is(m,x.matches||y.matches),preventScrollReset:b,blockers:F}),{viewTransitionOpts:W,flushSync:A===!0}),P=ye.Pop,B=!1,ee=!1,Ne=!1,ut=!1,bt=[]}async function Ps(m,x){if(typeof m=="number"){e.history.go(m);return}let S=Ea(y.location,y.matches,a,f.v7_prependBasename,m,f.v7_relativeSplatPath,x==null?void 0:x.fromRouteId,x==null?void 0:x.relative),{path:C,submission:z,error:A}=qu(f.v7_normalizeFormMethod,!1,S,x),$=y.location,I=fl(y.location,C,x&&x.state);I=se({},I,e.history.encodeLocation(I));let U=x&&x.replace!=null?x.replace:void 0,F=ye.Push;U===!0?F=ye.Replace:U===!1||z!=null&&ht(z.formMethod)&&z.formAction===y.location.pathname+y.location.search&&(F=ye.Replace);let b=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,W=(x&&x.flushSync)===!0,Y=Os({currentLocation:$,nextLocation:I,historyAction:F});if(Y){El(Y,{state:"blocked",location:I,proceed(){El(Y,{state:"proceeding",proceed:void 0,reset:void 0,location:I}),Ps(m,x)},reset(){let Ce=new Map(y.blockers);Ce.set(Y,zr),Ie({blockers:Ce})}});return}return await pn(F,I,{submission:z,pendingError:A,preventScrollReset:b,replace:x&&x.replace,enableViewTransition:x&&x.viewTransition,flushSync:W})}function rp(){if(Gi(),Ie({revalidation:"loading"}),y.navigation.state!=="submitting"){if(y.navigation.state==="idle"){pn(y.historyAction,y.location,{startUninterruptedRevalidation:!0});return}pn(P||y.historyAction,y.navigation.location,{overrideNavigation:y.navigation,enableViewTransition:ee===!0})}}async function pn(m,x,S){D&&D.abort(),D=null,P=m,Ne=(S&&S.startUninterruptedRevalidation)===!0,pp(y.location,y.matches),B=(S&&S.preventScrollReset)===!0,ee=(S&&S.enableViewTransition)===!0;let C=s||o,z=S&&S.overrideNavigation,A=S!=null&&S.initialHydration&&y.matches&&y.matches.length>0&&!v?y.matches:yn(C,x,a),$=(S&&S.flushSync)===!0;if(A&&y.initialized&&!ut&&zg(y.location,x)&&!(S&&S.submission&&ht(S.submission.formMethod))){Fn(x,{matches:A},{flushSync:$});return}let I=jl(A,C,x.pathname);if(I.active&&I.matches&&(A=I.matches),!A){let{error:le,notFoundMatches:J,route:pe}=Ji(x.pathname);Fn(x,{matches:J,loaderData:{},errors:{[pe.id]:le}},{flushSync:$});return}D=new AbortController;let U=Bn(e.history,x,D.signal,S&&S.submission),F;if(S&&S.pendingError)F=[xn(A).route.id,{type:Z.error,error:S.pendingError}];else if(S&&S.submission&&ht(S.submission.formMethod)){let le=await lp(U,x,S.submission,A,I.active,{replace:S.replace,flushSync:$});if(le.shortCircuited)return;if(le.pendingActionResult){let[J,pe]=le.pendingActionResult;if(Ge(pe)&&pl(pe.error)&&pe.error.status===404){D=null,Fn(x,{matches:le.matches,loaderData:{},errors:{[J]:pe.error}});return}}A=le.matches||A,F=le.pendingActionResult,z=Ro(x,S.submission),$=!1,I.active=!1,U=Bn(e.history,U.url,U.signal)}let{shortCircuited:b,matches:W,loaderData:Y,errors:Ce}=await ip(U,x,A,I.active,z,S&&S.submission,S&&S.fetcherSubmission,S&&S.replace,S&&S.initialHydration===!0,$,F);b||(D=null,Fn(x,se({matches:W||A},sc(F),{loaderData:Y,errors:Ce})))}async function lp(m,x,S,C,z,A){A===void 0&&(A={}),Gi();let $=Ug(x,S);if(Ie({navigation:$},{flushSync:A.flushSync===!0}),z){let F=await Nl(C,x.pathname,m.signal);if(F.type==="aborted")return{shortCircuited:!0};if(F.type==="error"){let b=xn(F.partialMatches).route.id;return{matches:F.partialMatches,pendingActionResult:[b,{type:Z.error,error:F.error}]}}else if(F.matches)C=F.matches;else{let{notFoundMatches:b,error:W,route:Y}=Ji(x.pathname);return{matches:b,pendingActionResult:[Y.id,{type:Z.error,error:W}]}}}let I,U=br(C,x);if(!U.route.action&&!U.route.lazy)I={type:Z.error,error:Ve(405,{method:m.method,pathname:x.pathname,routeId:U.route.id})};else if(I=(await wr("action",y,m,[U],C,null))[U.route.id],m.signal.aborted)return{shortCircuited:!0};if(En(I)){let F;return A&&A.replace!=null?F=A.replace:F=lc(I.response.headers.get("Location"),new URL(m.url),a,e.history)===y.location.pathname+y.location.search,await hn(m,I,!0,{submission:S,replace:F}),{shortCircuited:!0}}if(Jt(I))throw Ve(400,{type:"defer-action"});if(Ge(I)){let F=xn(C,U.route.id);return(A&&A.replace)!==!0&&(P=ye.Push),{matches:C,pendingActionResult:[F.route.id,I]}}return{matches:C,pendingActionResult:[U.route.id,I]}}async function ip(m,x,S,C,z,A,$,I,U,F,b){let W=z||Ro(x,A),Y=A||$||dc(W),Ce=!Ne&&(!f.v7_partialHydration||!U);if(C){if(Ce){let he=_s(b);Ie(se({navigation:W},he!==void 0?{actionData:he}:{}),{flushSync:F})}let G=await Nl(S,x.pathname,m.signal);if(G.type==="aborted")return{shortCircuited:!0};if(G.type==="error"){let he=xn(G.partialMatches).route.id;return{matches:G.partialMatches,loaderData:{},errors:{[he]:G.error}}}else if(G.matches)S=G.matches;else{let{error:he,notFoundMatches:Un,route:Er}=Ji(x.pathname);return{matches:Un,loaderData:{},errors:{[Er.id]:he}}}}let le=s||o,[J,pe]=tc(e.history,y,S,Y,x,f.v7_partialHydration&&U===!0,f.v7_skipActionErrorRevalidation,ut,bt,At,Oe,ct,ne,le,a,b);if(Zi(G=>!(S&&S.some(he=>he.route.id===G))||J&&J.some(he=>he.route.id===G)),H=++V,J.length===0&&pe.length===0){let G=zs();return Fn(x,se({matches:S,loaderData:{},errors:b&&Ge(b[1])?{[b[0]]:b[1].error}:null},sc(b),G?{fetchers:new Map(y.fetchers)}:{}),{flushSync:F}),{shortCircuited:!0}}if(Ce){let G={};if(!C){G.navigation=W;let he=_s(b);he!==void 0&&(G.actionData=he)}pe.length>0&&(G.fetchers=op(pe)),Ie(G,{flushSync:F})}pe.forEach(G=>{Vt(G.key),G.controller&&L.set(G.key,G.controller)});let In=()=>pe.forEach(G=>Vt(G.key));D&&D.signal.addEventListener("abort",In);let{loaderResults:Sr,fetcherResults:Ct}=await Rs(y,S,J,pe,m);if(m.signal.aborted)return{shortCircuited:!0};D&&D.signal.removeEventListener("abort",In),pe.forEach(G=>L.delete(G.key));let xt=Wl(Sr);if(xt)return await hn(m,xt.result,!0,{replace:I}),{shortCircuited:!0};if(xt=Wl(Ct),xt)return ne.add(xt.key),await hn(m,xt.result,!0,{replace:I}),{shortCircuited:!0};let{loaderData:qi,errors:kr}=oc(y,S,Sr,b,pe,Ct,Fe);Fe.forEach((G,he)=>{G.subscribe(Un=>{(Un||G.done)&&Fe.delete(he)})}),f.v7_partialHydration&&U&&y.errors&&(kr=se({},y.errors,kr));let mn=zs(),Cl=Ds(H),Pl=mn||Cl||pe.length>0;return se({matches:S,loaderData:qi,errors:kr},Pl?{fetchers:new Map(y.fetchers)}:{})}function _s(m){if(m&&!Ge(m[1]))return{[m[0]]:m[1].data};if(y.actionData)return Object.keys(y.actionData).length===0?null:y.actionData}function op(m){return m.forEach(x=>{let S=y.fetchers.get(x.key),C=Dr(void 0,S?S.data:void 0);y.fetchers.set(x.key,C)}),new Map(y.fetchers)}function ap(m,x,S,C){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Vt(m);let z=(C&&C.flushSync)===!0,A=s||o,$=Ea(y.location,y.matches,a,f.v7_prependBasename,S,f.v7_relativeSplatPath,x,C==null?void 0:C.relative),I=yn(A,$,a),U=jl(I,A,$);if(U.active&&U.matches&&(I=U.matches),!I){Nt(m,x,Ve(404,{pathname:$}),{flushSync:z});return}let{path:F,submission:b,error:W}=qu(f.v7_normalizeFormMethod,!0,$,C);if(W){Nt(m,x,W,{flushSync:z});return}let Y=br(I,F),Ce=(C&&C.preventScrollReset)===!0;if(b&&ht(b.formMethod)){sp(m,x,F,Y,I,U.active,z,Ce,b);return}ct.set(m,{routeId:x,path:F}),up(m,x,F,Y,I,U.active,z,Ce,b)}async function sp(m,x,S,C,z,A,$,I,U){Gi(),ct.delete(m);function F(ve){if(!ve.route.action&&!ve.route.lazy){let bn=Ve(405,{method:U.formMethod,pathname:S,routeId:x});return Nt(m,x,bn,{flushSync:$}),!0}return!1}if(!A&&F(C))return;let b=y.fetchers.get(m);Bt(m,bg(U,b),{flushSync:$});let W=new AbortController,Y=Bn(e.history,S,W.signal,U);if(A){let ve=await Nl(z,new URL(Y.url).pathname,Y.signal,m);if(ve.type==="aborted")return;if(ve.type==="error"){Nt(m,x,ve.error,{flushSync:$});return}else if(ve.matches){if(z=ve.matches,C=br(z,S),F(C))return}else{Nt(m,x,Ve(404,{pathname:S}),{flushSync:$});return}}L.set(m,W);let Ce=V,J=(await wr("action",y,Y,[C],z,m))[C.route.id];if(Y.signal.aborted){L.get(m)===W&&L.delete(m);return}if(f.v7_fetcherPersist&&Oe.has(m)){if(En(J)||Ge(J)){Bt(m,Ht(void 0));return}}else{if(En(J))if(L.delete(m),H>Ce){Bt(m,Ht(void 0));return}else return ne.add(m),Bt(m,Dr(U)),hn(Y,J,!1,{fetcherSubmission:U,preventScrollReset:I});if(Ge(J)){Nt(m,x,J.error);return}}if(Jt(J))throw Ve(400,{type:"defer-action"});let pe=y.navigation.location||y.location,In=Bn(e.history,pe,W.signal),Sr=s||o,Ct=y.navigation.state!=="idle"?yn(Sr,y.navigation.location,a):y.matches;K(Ct,"Didn't find any matches after fetcher action");let xt=++V;te.set(m,xt);let qi=Dr(U,J.data);y.fetchers.set(m,qi);let[kr,mn]=tc(e.history,y,Ct,U,pe,!1,f.v7_skipActionErrorRevalidation,ut,bt,At,Oe,ct,ne,Sr,a,[C.route.id,J]);mn.filter(ve=>ve.key!==m).forEach(ve=>{let bn=ve.key,Us=y.fetchers.get(bn),gp=Dr(void 0,Us?Us.data:void 0);y.fetchers.set(bn,gp),Vt(bn),ve.controller&&L.set(bn,ve.controller)}),Ie({fetchers:new Map(y.fetchers)});let Cl=()=>mn.forEach(ve=>Vt(ve.key));W.signal.addEventListener("abort",Cl);let{loaderResults:Pl,fetcherResults:G}=await Rs(y,Ct,kr,mn,In);if(W.signal.aborted)return;W.signal.removeEventListener("abort",Cl),te.delete(m),L.delete(m),mn.forEach(ve=>L.delete(ve.key));let he=Wl(Pl);if(he)return hn(In,he.result,!1,{preventScrollReset:I});if(he=Wl(G),he)return ne.add(he.key),hn(In,he.result,!1,{preventScrollReset:I});let{loaderData:Un,errors:Er}=oc(y,Ct,Pl,void 0,mn,G,Fe);if(y.fetchers.has(m)){let ve=Ht(J.data);y.fetchers.set(m,ve)}Ds(xt),y.navigation.state==="loading"&&xt>H?(K(P,"Expected pending action"),D&&D.abort(),Fn(y.navigation.location,{matches:Ct,loaderData:Un,errors:Er,fetchers:new Map(y.fetchers)})):(Ie({errors:Er,loaderData:ac(y.loaderData,Un,Ct,Er),fetchers:new Map(y.fetchers)}),ut=!1)}async function up(m,x,S,C,z,A,$,I,U){let F=y.fetchers.get(m);Bt(m,Dr(U,F?F.data:void 0),{flushSync:$});let b=new AbortController,W=Bn(e.history,S,b.signal);if(A){let J=await Nl(z,new URL(W.url).pathname,W.signal,m);if(J.type==="aborted")return;if(J.type==="error"){Nt(m,x,J.error,{flushSync:$});return}else if(J.matches)z=J.matches,C=br(z,S);else{Nt(m,x,Ve(404,{pathname:S}),{flushSync:$});return}}L.set(m,b);let Y=V,le=(await wr("loader",y,W,[C],z,m))[C.route.id];if(Jt(le)&&(le=await js(le,W.signal,!0)||le),L.get(m)===b&&L.delete(m),!W.signal.aborted){if(Oe.has(m)){Bt(m,Ht(void 0));return}if(En(le))if(H>Y){Bt(m,Ht(void 0));return}else{ne.add(m),await hn(W,le,!1,{preventScrollReset:I});return}if(Ge(le)){Nt(m,x,le.error);return}K(!Jt(le),"Unhandled fetcher deferred data"),Bt(m,Ht(le.data))}}async function hn(m,x,S,C){let{submission:z,fetcherSubmission:A,preventScrollReset:$,replace:I}=C===void 0?{}:C;x.response.headers.has("X-Remix-Revalidate")&&(ut=!0);let U=x.response.headers.get("Location");K(U,"Expected a Location header on the redirect Response"),U=lc(U,new URL(m.url),a,e.history);let F=fl(y.location,U,{_isRedirect:!0});if(n){let J=!1;if(x.response.headers.has("X-Remix-Reload-Document"))J=!0;else if(Es.test(U)){const pe=e.history.createURL(U);J=pe.origin!==t.location.origin||vr(pe.pathname,a)==null}if(J){I?t.location.replace(U):t.location.assign(U);return}}D=null;let b=I===!0||x.response.headers.has("X-Remix-Replace")?ye.Replace:ye.Push,{formMethod:W,formAction:Y,formEncType:Ce}=y.navigation;!z&&!A&&W&&Y&&Ce&&(z=dc(y.navigation));let le=z||A;if(xg.has(x.response.status)&&le&&ht(le.formMethod))await pn(b,F,{submission:se({},le,{formAction:U}),preventScrollReset:$||B,enableViewTransition:S?ee:void 0});else{let J=Ro(F,z);await pn(b,F,{overrideNavigation:J,fetcherSubmission:A,preventScrollReset:$||B,enableViewTransition:S?ee:void 0})}}async function wr(m,x,S,C,z,A){let $,I={};try{$=await Pg(c,m,x,S,C,z,A,i,l)}catch(U){return C.forEach(F=>{I[F.route.id]={type:Z.error,error:U}}),I}for(let[U,F]of Object.entries($))if(Dg(F)){let b=F.result;I[U]={type:Z.redirect,response:Lg(b,S,U,z,a,f.v7_relativeSplatPath)}}else I[U]=await Rg(F);return I}async function Rs(m,x,S,C,z){let A=m.matches,$=wr("loader",m,z,S,x,null),I=Promise.all(C.map(async b=>{if(b.matches&&b.match&&b.controller){let Y=(await wr("loader",m,Bn(e.history,b.path,b.controller.signal),[b.match],b.matches,b.key))[b.match.route.id];return{[b.key]:Y}}else return Promise.resolve({[b.key]:{type:Z.error,error:Ve(404,{pathname:b.path})}})})),U=await $,F=(await I).reduce((b,W)=>Object.assign(b,W),{});return await Promise.all([Fg(x,U,z.signal,A,m.loaderData),Ig(x,F,C)]),{loaderResults:U,fetcherResults:F}}function Gi(){ut=!0,bt.push(...Zi()),ct.forEach((m,x)=>{L.has(x)&&At.add(x),Vt(x)})}function Bt(m,x,S){S===void 0&&(S={}),y.fetchers.set(m,x),Ie({fetchers:new Map(y.fetchers)},{flushSync:(S&&S.flushSync)===!0})}function Nt(m,x,S,C){C===void 0&&(C={});let z=xn(y.matches,x);kl(m),Ie({errors:{[z.route.id]:S},fetchers:new Map(y.fetchers)},{flushSync:(C&&C.flushSync)===!0})}function Ls(m){return Ye.set(m,(Ye.get(m)||0)+1),Oe.has(m)&&Oe.delete(m),y.fetchers.get(m)||wg}function kl(m){let x=y.fetchers.get(m);L.has(m)&&!(x&&x.state==="loading"&&te.has(m))&&Vt(m),ct.delete(m),te.delete(m),ne.delete(m),f.v7_fetcherPersist&&Oe.delete(m),At.delete(m),y.fetchers.delete(m)}function cp(m){let x=(Ye.get(m)||0)-1;x<=0?(Ye.delete(m),Oe.add(m),f.v7_fetcherPersist||kl(m)):Ye.set(m,x),Ie({fetchers:new Map(y.fetchers)})}function Vt(m){let x=L.get(m);x&&(x.abort(),L.delete(m))}function Ts(m){for(let x of m){let S=Ls(x),C=Ht(S.data);y.fetchers.set(x,C)}}function zs(){let m=[],x=!1;for(let S of ne){let C=y.fetchers.get(S);K(C,"Expected fetcher: "+S),C.state==="loading"&&(ne.delete(S),m.push(S),x=!0)}return Ts(m),x}function Ds(m){let x=[];for(let[S,C]of te)if(C<m){let z=y.fetchers.get(S);K(z,"Expected fetcher: "+S),z.state==="loading"&&(Vt(S),te.delete(S),x.push(S))}return Ts(x),x.length>0}function dp(m,x){let S=y.blockers.get(m)||zr;return nt.get(m)!==x&&nt.set(m,x),S}function Ms(m){y.blockers.delete(m),nt.delete(m)}function El(m,x){let S=y.blockers.get(m)||zr;K(S.state==="unblocked"&&x.state==="blocked"||S.state==="blocked"&&x.state==="blocked"||S.state==="blocked"&&x.state==="proceeding"||S.state==="blocked"&&x.state==="unblocked"||S.state==="proceeding"&&x.state==="unblocked","Invalid blocker state transition: "+S.state+" -> "+x.state);let C=new Map(y.blockers);C.set(m,x),Ie({blockers:C})}function Os(m){let{currentLocation:x,nextLocation:S,historyAction:C}=m;if(nt.size===0)return;nt.size>1&&Tn(!1,"A router only supports one blocker at a time");let z=Array.from(nt.entries()),[A,$]=z[z.length-1],I=y.blockers.get(A);if(!(I&&I.state==="proceeding")&&$({currentLocation:x,nextLocation:S,historyAction:C}))return A}function Ji(m){let x=Ve(404,{pathname:m}),S=s||o,{matches:C,route:z}=uc(S);return Zi(),{notFoundMatches:C,route:z,error:x}}function Zi(m){let x=[];return Fe.forEach((S,C)=>{(!m||m(C))&&(S.cancel(),x.push(C),Fe.delete(C))}),x}function fp(m,x,S){if(E=m,T=x,k=S||null,!g&&y.navigation===_o){g=!0;let C=Is(y.location,y.matches);C!=null&&Ie({restoreScrollPosition:C})}return()=>{E=null,T=null,k=null}}function Fs(m,x){return k&&k(m,x.map(C=>Gm(C,y.loaderData)))||m.key}function pp(m,x){if(E&&T){let S=Fs(m,x);E[S]=T()}}function Is(m,x){if(E){let S=Fs(m,x),C=E[S];if(typeof C=="number")return C}return null}function jl(m,x,S){if(d)if(m){if(Object.keys(m[0].params).length>0)return{active:!0,matches:li(x,S,a,!0)}}else return{active:!0,matches:li(x,S,a,!0)||[]};return{active:!1,matches:null}}async function Nl(m,x,S,C){if(!d)return{type:"success",matches:m};let z=m;for(;;){let A=s==null,$=s||o,I=i;try{await d({signal:S,path:x,matches:z,fetcherKey:C,patch:(b,W)=>{S.aborted||rc(b,W,$,I,l)}})}catch(b){return{type:"error",error:b,partialMatches:z}}finally{A&&!S.aborted&&(o=[...o])}if(S.aborted)return{type:"aborted"};let U=yn($,x,a);if(U)return{type:"success",matches:U};let F=li($,x,a,!0);if(!F||z.length===F.length&&z.every((b,W)=>b.route.id===F[W].route.id))return{type:"success",matches:null};z=F}}function hp(m){i={},s=Ri(m,l,void 0,i)}function mp(m,x){let S=s==null;rc(m,x,s||o,i,l),S&&(o=[...o],Ie({}))}return O={get basename(){return a},get future(){return f},get state(){return y},get routes(){return o},get window(){return t},initialize:ep,subscribe:np,enableScrollRestoration:fp,navigate:Ps,fetch:ap,revalidate:rp,createHref:m=>e.history.createHref(m),encodeLocation:m=>e.history.encodeLocation(m),getFetcher:Ls,deleteFetcher:cp,dispose:tp,getBlocker:dp,deleteBlocker:Ms,patchRoutes:mp,_internalFetchControllers:L,_internalActiveDeferreds:Fe,_internalSetRoutes:hp},O}function Eg(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ea(e,t,n,r,l,i,o,s){let a,c;if(o){a=[];for(let f of t)if(a.push(f),f.route.id===o){c=f;break}}else a=t,c=t[t.length-1];let d=ks(l||".",Ss(a,i),vr(e.pathname,n)||e.pathname,s==="path");if(l==null&&(d.search=e.search,d.hash=e.hash),(l==null||l===""||l===".")&&c){let f=Ns(d.search);if(c.route.index&&!f)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&f){let h=new URLSearchParams(d.search),w=h.getAll("index");h.delete("index"),w.filter(k=>k).forEach(k=>h.append("index",k));let E=h.toString();d.search=E?"?"+E:""}}return r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:zt([n,d.pathname])),zn(d)}function qu(e,t,n,r){if(!r||!Eg(r))return{path:n};if(r.formMethod&&!Og(r.formMethod))return{path:n,error:Ve(405,{method:r.formMethod})};let l=()=>({path:n,error:Ve(400,{type:"invalid-body"})}),i=r.formMethod||"get",o=e?i.toUpperCase():i.toLowerCase(),s=Bf(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!ht(o))return l();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((w,E)=>{let[k,T]=E;return""+w+k+"="+T+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!ht(o))return l();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return l()}}}K(typeof FormData=="function","FormData is not available in this environment");let a,c;if(r.formData)a=Na(r.formData),c=r.formData;else if(r.body instanceof FormData)a=Na(r.body),c=r.body;else if(r.body instanceof URLSearchParams)a=r.body,c=ic(a);else if(r.body==null)a=new URLSearchParams,c=new FormData;else try{a=new URLSearchParams(r.body),c=ic(a)}catch{return l()}let d={formMethod:o,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(ht(d.formMethod))return{path:n,submission:d};let f=fn(n);return t&&f.search&&Ns(f.search)&&a.append("index",""),f.search="?"+a,{path:zn(f),submission:d}}function ec(e,t,n){n===void 0&&(n=!1);let r=e.findIndex(l=>l.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function tc(e,t,n,r,l,i,o,s,a,c,d,f,h,w,E,k){let T=k?Ge(k[1])?k[1].error:k[1].data:void 0,g=e.createURL(t.location),p=e.createURL(l),v=n;i&&t.errors?v=ec(n,Object.keys(t.errors)[0],!0):k&&Ge(k[1])&&(v=ec(n,k[0]));let j=k?k[1].statusCode:void 0,R=o&&j&&j>=400,O=v.filter((P,B)=>{let{route:D}=P;if(D.lazy)return!0;if(D.loader==null)return!1;if(i)return ja(D,t.loaderData,t.errors);if(jg(t.loaderData,t.matches[B],P)||a.some(we=>we===P.route.id))return!0;let ee=t.matches[B],re=P;return nc(P,se({currentUrl:g,currentParams:ee.params,nextUrl:p,nextParams:re.params},r,{actionResult:T,actionStatus:j,defaultShouldRevalidate:R?!1:s||g.pathname+g.search===p.pathname+p.search||g.search!==p.search||bf(ee,re)}))}),y=[];return f.forEach((P,B)=>{if(i||!n.some(Ne=>Ne.route.id===P.routeId)||d.has(B))return;let D=yn(w,P.path,E);if(!D){y.push({key:B,routeId:P.routeId,path:P.path,matches:null,match:null,controller:null});return}let ee=t.fetchers.get(B),re=br(D,P.path),we=!1;h.has(B)?we=!1:c.has(B)?(c.delete(B),we=!0):ee&&ee.state!=="idle"&&ee.data===void 0?we=s:we=nc(re,se({currentUrl:g,currentParams:t.matches[t.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},r,{actionResult:T,actionStatus:j,defaultShouldRevalidate:R?!1:s})),we&&y.push({key:B,routeId:P.routeId,path:P.path,matches:D,match:re,controller:new AbortController})}),[O,y]}function ja(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=t!=null&&t[e.id]!==void 0,l=n!=null&&n[e.id]!==void 0;return!r&&l?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!l}function jg(e,t,n){let r=!t||n.route.id!==t.route.id,l=e[n.route.id]===void 0;return r||l}function bf(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function nc(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function rc(e,t,n,r,l){var i;let o;if(e){let c=r[e];K(c,"No route found to patch children into: routeId = "+e),c.children||(c.children=[]),o=c.children}else o=n;let s=t.filter(c=>!o.some(d=>Af(c,d))),a=Ri(s,l,[e||"_","patch",String(((i=o)==null?void 0:i.length)||"0")],r);o.push(...a)}function Af(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,r)=>{var l;return(l=t.children)==null?void 0:l.some(i=>Af(n,i))}):!1}async function Ng(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let l=n[e.id];K(l,"No route found in manifest");let i={};for(let o in r){let a=l[o]!==void 0&&o!=="hasErrorBoundary";Tn(!a,'Route "'+l.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!a&&!Ym.has(o)&&(i[o]=r[o])}Object.assign(l,i),Object.assign(l,se({},t(l),{lazy:void 0}))}async function Cg(e){let{matches:t}=e,n=t.filter(l=>l.shouldLoad);return(await Promise.all(n.map(l=>l.resolve()))).reduce((l,i,o)=>Object.assign(l,{[n[o].route.id]:i}),{})}async function Pg(e,t,n,r,l,i,o,s,a,c){let d=i.map(w=>w.route.lazy?Ng(w.route,a,s):void 0),f=i.map((w,E)=>{let k=d[E],T=l.some(p=>p.route.id===w.route.id);return se({},w,{shouldLoad:T,resolve:async p=>(p&&r.method==="GET"&&(w.route.lazy||w.route.loader)&&(T=!0),T?_g(t,r,w,k,p,c):Promise.resolve({type:Z.data,result:void 0}))})}),h=await e({matches:f,request:r,params:i[0].params,fetcherKey:o,context:c});try{await Promise.all(d)}catch{}return h}async function _g(e,t,n,r,l,i){let o,s,a=c=>{let d,f=new Promise((E,k)=>d=k);s=()=>d(),t.signal.addEventListener("abort",s);let h=E=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):c({request:t,params:n.params,context:i},...E!==void 0?[E]:[]),w=(async()=>{try{return{type:"data",result:await(l?l(k=>h(k)):h())}}catch(E){return{type:"error",result:E}}})();return Promise.race([w,f])};try{let c=n.route[e];if(r)if(c){let d,[f]=await Promise.all([a(c).catch(h=>{d=h}),r]);if(d!==void 0)throw d;o=f}else if(await r,c=n.route[e],c)o=await a(c);else if(e==="action"){let d=new URL(t.url),f=d.pathname+d.search;throw Ve(405,{method:t.method,pathname:f,routeId:n.route.id})}else return{type:Z.data,result:void 0};else if(c)o=await a(c);else{let d=new URL(t.url),f=d.pathname+d.search;throw Ve(404,{pathname:f})}K(o.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:Z.error,result:c}}finally{s&&t.signal.removeEventListener("abort",s)}return o}async function Rg(e){let{result:t,type:n}=e;if(Vf(t)){let f;try{let h=t.headers.get("Content-Type");h&&/\bapplication\/json\b/.test(h)?t.body==null?f=null:f=await t.json():f=await t.text()}catch(h){return{type:Z.error,error:h}}return n===Z.error?{type:Z.error,error:new Li(t.status,t.statusText,f),statusCode:t.status,headers:t.headers}:{type:Z.data,data:f,statusCode:t.status,headers:t.headers}}if(n===Z.error){if(cc(t)){var r,l;if(t.data instanceof Error){var i,o;return{type:Z.error,error:t.data,statusCode:(i=t.init)==null?void 0:i.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}}return{type:Z.error,error:new Li(((r=t.init)==null?void 0:r.status)||500,void 0,t.data),statusCode:pl(t)?t.status:void 0,headers:(l=t.init)!=null&&l.headers?new Headers(t.init.headers):void 0}}return{type:Z.error,error:t,statusCode:pl(t)?t.status:void 0}}if(Mg(t)){var s,a;return{type:Z.deferred,deferredData:t,statusCode:(s=t.init)==null?void 0:s.status,headers:((a=t.init)==null?void 0:a.headers)&&new Headers(t.init.headers)}}if(cc(t)){var c,d;return{type:Z.data,data:t.data,statusCode:(c=t.init)==null?void 0:c.status,headers:(d=t.init)!=null&&d.headers?new Headers(t.init.headers):void 0}}return{type:Z.data,data:t}}function Lg(e,t,n,r,l,i){let o=e.headers.get("Location");if(K(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Es.test(o)){let s=r.slice(0,r.findIndex(a=>a.route.id===n)+1);o=Ea(new URL(t.url),s,l,!0,o,i),e.headers.set("Location",o)}return e}function lc(e,t,n,r){let l=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Es.test(e)){let i=e,o=i.startsWith("//")?new URL(t.protocol+i):new URL(i);if(l.includes(o.protocol))throw new Error("Invalid redirect location");let s=vr(o.pathname,n)!=null;if(o.origin===t.origin&&s)return o.pathname+o.search+o.hash}try{let i=r.createURL(e);if(l.includes(i.protocol))throw new Error("Invalid redirect location")}catch{}return e}function Bn(e,t,n,r){let l=e.createURL(Bf(t)).toString(),i={signal:n};if(r&&ht(r.formMethod)){let{formMethod:o,formEncType:s}=r;i.method=o.toUpperCase(),s==="application/json"?(i.headers=new Headers({"Content-Type":s}),i.body=JSON.stringify(r.json)):s==="text/plain"?i.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?i.body=Na(r.formData):i.body=r.formData}return new Request(l,i)}function Na(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function ic(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Tg(e,t,n,r,l){let i={},o=null,s,a=!1,c={},d=n&&Ge(n[1])?n[1].error:void 0;return e.forEach(f=>{if(!(f.route.id in t))return;let h=f.route.id,w=t[h];if(K(!En(w),"Cannot handle redirect results in processLoaderData"),Ge(w)){let E=w.error;d!==void 0&&(E=d,d=void 0),o=o||{};{let k=xn(e,h);o[k.route.id]==null&&(o[k.route.id]=E)}i[h]=void 0,a||(a=!0,s=pl(w.error)?w.error.status:500),w.headers&&(c[h]=w.headers)}else Jt(w)?(r.set(h,w.deferredData),i[h]=w.deferredData.data,w.statusCode!=null&&w.statusCode!==200&&!a&&(s=w.statusCode),w.headers&&(c[h]=w.headers)):(i[h]=w.data,w.statusCode&&w.statusCode!==200&&!a&&(s=w.statusCode),w.headers&&(c[h]=w.headers))}),d!==void 0&&n&&(o={[n[0]]:d},i[n[0]]=void 0),{loaderData:i,errors:o,statusCode:s||200,loaderHeaders:c}}function oc(e,t,n,r,l,i,o){let{loaderData:s,errors:a}=Tg(t,n,r,o);return l.forEach(c=>{let{key:d,match:f,controller:h}=c,w=i[d];if(K(w,"Did not find corresponding fetcher result"),!(h&&h.signal.aborted))if(Ge(w)){let E=xn(e.matches,f==null?void 0:f.route.id);a&&a[E.route.id]||(a=se({},a,{[E.route.id]:w.error})),e.fetchers.delete(d)}else if(En(w))K(!1,"Unhandled fetcher revalidation redirect");else if(Jt(w))K(!1,"Unhandled fetcher deferred data");else{let E=Ht(w.data);e.fetchers.set(d,E)}}),{loaderData:s,errors:a}}function ac(e,t,n,r){let l=se({},t);for(let i of n){let o=i.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(l[o]=t[o]):e[o]!==void 0&&i.route.loader&&(l[o]=e[o]),r&&r.hasOwnProperty(o))break}return l}function sc(e){return e?Ge(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function xn(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function uc(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Ve(e,t){let{pathname:n,routeId:r,method:l,type:i,message:o}=t===void 0?{}:t,s="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(s="Bad Request",l&&n&&r?a="You made a "+l+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?a="defer() is not supported in actions":i==="invalid-body"&&(a="Unable to encode submission body")):e===403?(s="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",a='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",l&&n&&r?a="You made a "+l.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":l&&(a='Invalid request method "'+l.toUpperCase()+'"')),new Li(e||500,s,new Error(a),!0)}function Wl(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,l]=t[n];if(En(l))return{key:r,result:l}}}function Bf(e){let t=typeof e=="string"?fn(e):e;return zn(se({},t,{hash:""}))}function zg(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Dg(e){return Vf(e.result)&&yg.has(e.result.status)}function Jt(e){return e.type===Z.deferred}function Ge(e){return e.type===Z.error}function En(e){return(e&&e.type)===Z.redirect}function cc(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Mg(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Vf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Og(e){return vg.has(e.toLowerCase())}function ht(e){return mg.has(e.toLowerCase())}async function Fg(e,t,n,r,l){let i=Object.entries(t);for(let o=0;o<i.length;o++){let[s,a]=i[o],c=e.find(h=>(h==null?void 0:h.route.id)===s);if(!c)continue;let d=r.find(h=>h.route.id===c.route.id),f=d!=null&&!bf(d,c)&&(l&&l[c.route.id])!==void 0;Jt(a)&&f&&await js(a,n,!1).then(h=>{h&&(t[s]=h)})}}async function Ig(e,t,n){for(let r=0;r<n.length;r++){let{key:l,routeId:i,controller:o}=n[r],s=t[l];e.find(c=>(c==null?void 0:c.route.id)===i)&&Jt(s)&&(K(o,"Expected an AbortController for revalidating fetcher deferred result"),await js(s,o.signal,!0).then(c=>{c&&(t[l]=c)}))}}async function js(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Z.data,data:e.deferredData.unwrappedData}}catch(l){return{type:Z.error,error:l}}return{type:Z.data,data:e.deferredData.data}}}function Ns(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function br(e,t){let n=typeof t=="string"?fn(t).search:t.search;if(e[e.length-1].route.index&&Ns(n||""))return e[e.length-1];let r=Ff(e);return r[r.length-1]}function dc(e){let{formMethod:t,formAction:n,formEncType:r,text:l,formData:i,json:o}=e;if(!(!t||!n||!r)){if(l!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:l};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Ro(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Ug(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Dr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function bg(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Ht(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Ag(e,t){try{let n=e.sessionStorage.getItem(Uf);if(n){let r=JSON.parse(n);for(let[l,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(l,new Set(i||[]))}}catch{}}function Bg(e,t){if(t.size>0){let n={};for(let[r,l]of t)n[r]=[...l];try{e.sessionStorage.setItem(Uf,JSON.stringify(n))}catch(r){Tn(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ti(){return Ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ti.apply(this,arguments)}const Yi=N.createContext(null),$f=N.createContext(null),On=N.createContext(null),Cs=N.createContext(null),Ut=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Hf=N.createContext(null);function Vg(e,t){let{relative:n}=t===void 0?{}:t;wl()||K(!1);let{basename:r,navigator:l}=N.useContext(On),{hash:i,pathname:o,search:s}=Qf(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:zt([r,o])),l.createHref({pathname:a,search:s,hash:i})}function wl(){return N.useContext(Cs)!=null}function Xi(){return wl()||K(!1),N.useContext(Cs).location}function Wf(e){N.useContext(On).static||N.useLayoutEffect(e)}function yr(){let{isDataRoute:e}=N.useContext(Ut);return e?rv():$g()}function $g(){wl()||K(!1);let e=N.useContext(Yi),{basename:t,future:n,navigator:r}=N.useContext(On),{matches:l}=N.useContext(Ut),{pathname:i}=Xi(),o=JSON.stringify(Ss(l,n.v7_relativeSplatPath)),s=N.useRef(!1);return Wf(()=>{s.current=!0}),N.useCallback(function(c,d){if(d===void 0&&(d={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let f=ks(c,JSON.parse(o),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:zt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,i,e])}const Hg=N.createContext(null);function Wg(e){let t=N.useContext(Ut).outlet;return t&&N.createElement(Hg.Provider,{value:e},t)}function Qg(){let{matches:e}=N.useContext(Ut),t=e[e.length-1];return t?t.params:{}}function Qf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=N.useContext(On),{matches:l}=N.useContext(Ut),{pathname:i}=Xi(),o=JSON.stringify(Ss(l,r.v7_relativeSplatPath));return N.useMemo(()=>ks(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Kg(e,t,n,r){wl()||K(!1);let{navigator:l}=N.useContext(On),{matches:i}=N.useContext(Ut),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=Xi(),d;d=c;let f=d.pathname||"/",h=f;if(a!=="/"){let k=a.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let w=yn(e,{pathname:h});return Zg(w&&w.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:zt([a,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?a:zt([a,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r)}function Yg(){let e=nv(),t=pl(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:l},n):null,null)}const Xg=N.createElement(Yg,null);class Gg extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(Ut.Provider,{value:this.props.routeContext},N.createElement(Hf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jg(e){let{routeContext:t,match:n,children:r}=e,l=N.useContext(Yi);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Ut.Provider,{value:t},r)}function Zg(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(l=n)==null?void 0:l.errors;if(s!=null){let d=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||K(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:w}=n,E=f.route.loader&&h[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||E){a=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,h)=>{let w,E=!1,k=null,T=null;n&&(w=s&&f.route.id?s[f.route.id]:void 0,k=f.route.errorElement||Xg,a&&(c<0&&h===0?(lv("route-fallback"),E=!0,T=null):c===h&&(E=!0,T=f.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,h+1)),p=()=>{let v;return w?v=k:E?v=T:f.route.Component?v=N.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,N.createElement(Jg,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?N.createElement(Gg,{location:n.location,revalidation:n.revalidation,component:k,error:w,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Kf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Kf||{}),Yf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yf||{});function qg(e){let t=N.useContext(Yi);return t||K(!1),t}function ev(e){let t=N.useContext($f);return t||K(!1),t}function tv(e){let t=N.useContext(Ut);return t||K(!1),t}function Xf(e){let t=tv(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function nv(){var e;let t=N.useContext(Hf),n=ev(Yf.UseRouteError),r=Xf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function rv(){let{router:e}=qg(Kf.UseNavigateStable),t=Xf(),n=N.useRef(!1);return Wf(()=>{n.current=!0}),N.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Ti({fromRouteId:t},i)))},[e,t])}const fc={};function lv(e,t,n){fc[e]||(fc[e]=!0)}function iv(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function ov(e){return Wg(e.context)}function av(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ye.Pop,navigator:i,static:o=!1,future:s}=e;wl()&&K(!1);let a=t.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:a,navigator:i,static:o,future:Ti({v7_relativeSplatPath:!1},s)}),[a,s,i,o]);typeof r=="string"&&(r=fn(r));let{pathname:d="/",search:f="",hash:h="",state:w=null,key:E="default"}=r,k=N.useMemo(()=>{let T=vr(d,a);return T==null?null:{location:{pathname:T,search:f,hash:h,state:w,key:E},navigationType:l}},[a,d,f,h,w,E,l]);return k==null?null:N.createElement(On.Provider,{value:c},N.createElement(Cs.Provider,{children:n,value:k}))}new Promise(()=>{});function sv(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:N.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:N.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:N.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hl.apply(this,arguments)}function uv(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function cv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dv(e,t){return e.button===0&&(!t||t==="_self")&&!cv(e)}const fv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],pv="6";try{window.__reactRouterVersion=pv}catch{}function hv(e,t){return kg({basename:void 0,future:hl({},void 0,{v7_prependBasename:!0}),history:Wm({window:void 0}),hydrationData:mv(),routes:e,mapRouteProperties:sv,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function mv(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=hl({},t,{errors:gv(t.errors)})),t}function gv(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,l]of t)if(l&&l.__type==="RouteErrorResponse")n[r]=new Li(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let i=window[l.__subType];if(typeof i=="function")try{let o=new i(l.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let i=new Error(l.message);i.stack="",n[r]=i}}else n[r]=l;return n}const vv=N.createContext({isTransitioning:!1}),yv=N.createContext(new Map),xv="startTransition",pc=zp[xv],wv="flushSync",hc=Hm[wv];function Sv(e){pc?pc(e):e()}function Mr(e){hc?hc(e):e()}class kv{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function Ev(e){let{fallbackElement:t,router:n,future:r}=e,[l,i]=N.useState(n.state),[o,s]=N.useState(),[a,c]=N.useState({isTransitioning:!1}),[d,f]=N.useState(),[h,w]=N.useState(),[E,k]=N.useState(),T=N.useRef(new Map),{v7_startTransition:g}=r||{},p=N.useCallback(P=>{g?Sv(P):P()},[g]),v=N.useCallback((P,B)=>{let{deletedFetchers:D,flushSync:ee,viewTransitionOpts:re}=B;P.fetchers.forEach((Ne,ut)=>{Ne.data!==void 0&&T.current.set(ut,Ne.data)}),D.forEach(Ne=>T.current.delete(Ne));let we=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!re||we){ee?Mr(()=>i(P)):p(()=>i(P));return}if(ee){Mr(()=>{h&&(d&&d.resolve(),h.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:re.currentLocation,nextLocation:re.nextLocation})});let Ne=n.window.document.startViewTransition(()=>{Mr(()=>i(P))});Ne.finished.finally(()=>{Mr(()=>{f(void 0),w(void 0),s(void 0),c({isTransitioning:!1})})}),Mr(()=>w(Ne));return}h?(d&&d.resolve(),h.skipTransition(),k({state:P,currentLocation:re.currentLocation,nextLocation:re.nextLocation})):(s(P),c({isTransitioning:!0,flushSync:!1,currentLocation:re.currentLocation,nextLocation:re.nextLocation}))},[n.window,h,d,T,p]);N.useLayoutEffect(()=>n.subscribe(v),[n,v]),N.useEffect(()=>{a.isTransitioning&&!a.flushSync&&f(new kv)},[a]),N.useEffect(()=>{if(d&&o&&n.window){let P=o,B=d.promise,D=n.window.document.startViewTransition(async()=>{p(()=>i(P)),await B});D.finished.finally(()=>{f(void 0),w(void 0),s(void 0),c({isTransitioning:!1})}),w(D)}},[p,o,d,n.window]),N.useEffect(()=>{d&&o&&l.location.key===o.location.key&&d.resolve()},[d,h,l.location,o]),N.useEffect(()=>{!a.isTransitioning&&E&&(s(E.state),c({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),k(void 0))},[a.isTransitioning,E]),N.useEffect(()=>{},[]);let j=N.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:P=>n.navigate(P),push:(P,B,D)=>n.navigate(P,{state:B,preventScrollReset:D==null?void 0:D.preventScrollReset}),replace:(P,B,D)=>n.navigate(P,{replace:!0,state:B,preventScrollReset:D==null?void 0:D.preventScrollReset})}),[n]),R=n.basename||"/",O=N.useMemo(()=>({router:n,navigator:j,static:!1,basename:R}),[n,j,R]),y=N.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return N.useEffect(()=>iv(r,n.future),[r,n.future]),N.createElement(N.Fragment,null,N.createElement(Yi.Provider,{value:O},N.createElement($f.Provider,{value:l},N.createElement(yv.Provider,{value:T.current},N.createElement(vv.Provider,{value:a},N.createElement(av,{basename:R,location:l.location,navigationType:l.historyAction,navigator:j,future:y},l.initialized||n.future.v7_partialHydration?N.createElement(jv,{routes:n.routes,future:n.future,state:l}):t))))),null)}const jv=N.memo(Nv);function Nv(e){let{routes:t,future:n,state:r}=e;return Kg(t,void 0,r,n)}const Cv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ze=N.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:s,target:a,to:c,preventScrollReset:d,viewTransition:f}=t,h=uv(t,fv),{basename:w}=N.useContext(On),E,k=!1;if(typeof c=="string"&&Pv.test(c)&&(E=c,Cv))try{let v=new URL(window.location.href),j=c.startsWith("//")?new URL(v.protocol+c):new URL(c),R=vr(j.pathname,w);j.origin===v.origin&&R!=null?c=R+j.search+j.hash:k=!0}catch{}let T=Vg(c,{relative:l}),g=_v(c,{replace:o,state:s,target:a,preventScrollReset:d,relative:l,viewTransition:f});function p(v){r&&r(v),v.defaultPrevented||g(v)}return N.createElement("a",hl({},h,{href:E||T,onClick:k||i?r:p,ref:n,target:a}))});var mc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mc||(mc={}));var gc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gc||(gc={}));function _v(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:s}=t===void 0?{}:t,a=yr(),c=Xi(),d=Qf(e,{relative:o});return N.useCallback(f=>{if(dv(f,n)){f.preventDefault();let h=r!==void 0?r:zn(c)===zn(d);a(e,{replace:h,state:l,preventScrollReset:i,relative:o,viewTransition:s})}},[c,a,d,r,l,n,e,i,o,s])}const vc="http://localhost:3001";function Rv(){return localStorage.getItem("token")}function Gf(e){localStorage.setItem("token",e)}function Jf(){localStorage.removeItem("token")}function xr(){const e=localStorage.getItem("user");return e?JSON.parse(e):null}function Zf(e){localStorage.setItem("user",JSON.stringify(e))}function qf(){localStorage.removeItem("user")}async function pr(e,t={}){const n=Rv(),r={"Content-Type":"application/json",...t.headers};n&&(r.Authorization=`Bearer ${n}`),console.log(`API Request: ${vc}${e}`);try{const l=await fetch(`${vc}${e}`,{...t,headers:r});if(l.status===403)throw Jf(),qf(),window.location.href="/login",new Error("Сессия истекла");return l}catch(l){throw console.error("Fetch error:",l),l}}async function Lv(){var t;if(!((t=window.Telegram)!=null&&t.WebApp))return console.log("Telegram WebApp not detected"),null;const e=window.Telegram.WebApp.initData;if(!e)return console.log("No initData in Telegram WebApp"),null;console.log("Initializing Telegram auth...");try{const n=await fetch("/api/auth/telegram",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({initData:e})});if(!n.ok){const l=await n.json();throw new Error(l.error||"Telegram auth failed")}const r=await n.json();return Gf(r.token),Zf(r.user),console.log("Telegram auth successful:",r.user),r.user}catch(n){return console.error("Telegram auth error:",n),null}}async function Tv(e){try{const t=await fetch("/api/auth/dev",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({role:e})});if(!t.ok){const r=await t.json();throw new Error(r.error||"DEV auth failed")}const n=await t.json();return Gf(n.token),Zf(n.user),n.user}catch(t){throw console.error("DEV auth error:",t),t}}function zv(){Jf(),qf(),window.location.href="/"}function Dv(){const[e,t]=N.useState(null),n=yr();N.useEffect(()=>{const l=xr();t(l)},[]);const r=()=>{zv(),t(null),n("/")};return u.jsxs("div",{className:"app",children:[u.jsxs("div",{className:"decorations",children:[u.jsx("div",{className:"decoration-circle circle-1"}),u.jsx("div",{className:"decoration-circle circle-2"}),u.jsx("div",{className:"decoration-circle circle-3"})]}),u.jsx("header",{className:"header",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"header-content",children:[u.jsxs(ze,{to:"/",className:"logo",children:[u.jsx("span",{className:"logo-icon",children:"👶"}),u.jsxs("span",{className:"logo-text",children:[u.jsx("span",{className:"logo-main",children:"Для Мам"}),u.jsx("span",{className:"logo-sub",children:"помощь рядом"})]})]}),u.jsxs("nav",{className:"nav",children:[u.jsxs(ze,{to:"/",className:"nav-link",children:[u.jsx("span",{className:"icon",children:"🏠"}),"Главная"]}),e?u.jsxs(u.Fragment,{children:[u.jsxs(ze,{to:"/listings/new",className:"nav-link create-btn",children:[u.jsx("span",{className:"icon",children:"✨"}),"Создать объявление"]}),u.jsxs("div",{className:"user-menu",children:[u.jsxs(ze,{to:"/my",className:"nav-link user-link",children:[u.jsx("span",{className:"icon",children:"👤"}),u.jsx("span",{className:"user-name",children:e.firstName}),u.jsx("span",{className:`user-role-badge ${e.role}`,children:e.role==="parent"?"Мама":"Специалист"})]}),u.jsx("button",{onClick:r,className:"logout-btn",children:u.jsx("span",{className:"icon",children:"🚪"})})]})]}):u.jsxs(ze,{to:"/login",className:"nav-link login-btn",children:[u.jsx("span",{className:"icon",children:"🔑"}),"Войти"]})]})]})})}),u.jsx("main",{className:"main",children:u.jsx("div",{className:"container",children:u.jsx(ov,{})})}),u.jsx("footer",{className:"footer",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"footer-content",children:[u.jsxs("div",{className:"footer-section",children:[u.jsx("h3",{children:"Для Мам"}),u.jsx("p",{children:"Платформа, созданная с заботой о мамах и их детях"})]}),u.jsxs("div",{className:"footer-section",children:[u.jsxs("p",{children:["© ",new Date().getFullYear()," Для Мам"]}),u.jsx("p",{children:"Все права защищены с ❤️"})]})]})})}),u.jsx("style",{jsx:!0,children:`
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow-x: hidden;
        }
        
        .decorations {
          position: fixed;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }
        
        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%);
        }
        
        .circle-1 {
          width: 300px;
          height: 300px;
          top: -100px;
          left: -100px;
          opacity: 0.3;
        }
        
        .circle-2 {
          width: 200px;
          height: 200px;
          bottom: -50px;
          right: -50px;
          opacity: 0.2;
          background: radial-gradient(circle, var(--color-secondary-light) 0%, transparent 70%);
        }
        
        .circle-3 {
          width: 150px;
          height: 150px;
          top: 50%;
          right: 20%;
          opacity: 0.15;
        }
        
        .header {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          padding: 1rem 0;
          box-shadow: var(--shadow-medium);
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.9);
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--color-text);
          transition: var(--transition-medium);
        }
        
        .logo:hover {
          transform: translateY(-2px);
        }
        
        .logo-icon {
          font-size: 2.5rem;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
        }
        
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        
        .logo-main {
          font-size: 1.8rem;
          font-weight: bold;
          background: linear-gradient(135deg, #FF6B8B 0%, #87CEEB 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: var(--font-cursive);
        }
        
        .logo-sub {
          font-size: 0.9rem;
          color: var(--color-text-light);
          margin-top: -5px;
        }
        
        .nav {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .nav-link {
          display: flex;
          align-items: center;
          padding: 0.7rem 1.2rem;
          border-radius: var(--radius-medium);
          text-decoration: none;
          color: var(--color-text);
          font-weight: 500;
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid transparent;
          transition: all var(--transition-medium);
        }
        
        .nav-link:hover {
          background: white;
          border-color: var(--color-primary);
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }
        
        .nav-link:active {
          transform: translateY(-1px);
        }
        
        .create-btn {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          color: white;
          font-weight: bold;
        }
        
        .create-btn:hover {
          background: linear-gradient(135deg, #FF8FA3 0%, #FFE44D 100%);
        }
        
        .login-btn {
          background: var(--color-success);
          color: var(--color-text);
        }
        
        .user-menu {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .user-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .user-name {
          font-weight: 600;
          color: var(--color-text);
        }
        
        .user-role-badge {
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-circle);
          font-size: 0.8rem;
          font-weight: bold;
          margin-left: 0.5rem;
        }
        
        .user-role-badge.parent {
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        
        .user-role-badge.specialist {
          background: var(--color-secondary-light);
          color: var(--color-secondary);
        }
        
        .logout-btn {
          background: var(--color-danger);
          color: white;
          border: none;
          padding: 0.7rem;
          border-radius: var(--radius-medium);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-medium);
        }
        
        .logout-btn:hover {
          background: #FF9999;
          transform: rotate(15deg);
        }
        
        .main {
          flex: 1;
          padding: 2rem 0;
        }
        
        .footer {
          background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary-light) 100%);
          padding: 2rem 0;
          margin-top: auto;
          border-top: 3px solid var(--color-border);
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }
        
        .footer-section h3 {
          font-family: var(--font-cursive);
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }
        
        .footer-section p {
          color: var(--color-text-light);
        }
        
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 1rem;
          }
          
          .nav {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .logo-text {
            text-align: center;
          }
          
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})}function Mv(){const[e,t]=N.useState([]),[n,r]=N.useState(!0),[l,i]=N.useState({listings:0,users:0}),o=xr();N.useEffect(()=>{s(),a()},[]);const s=async()=>{try{const f=await(await pr("/listings")).json();t(f.slice(0,6))}catch(d){console.error("Error loading listings:",d)}finally{r(!1)}},a=async()=>{i({listings:42,users:156})},c=[{icon:"👶",name:"Няня",color:"#FFB6C1"},{icon:"📚",name:"Репетитор",color:"#87CEEB"},{icon:"🎪",name:"Аниматор",color:"#98FB98"},{icon:"📸",name:"Фотограф",color:"#FFD700"},{icon:"🧸",name:"Воспитатель",color:"#FFB6C1"},{icon:"💬",name:"Психолог",color:"#87CEEB"}];return n?u.jsxs("div",{className:"loading-container",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("p",{children:"Загружаем лучшие предложения..."})]}):u.jsxs("div",{className:"home-page",children:[u.jsxs("section",{className:"hero-section",children:[u.jsxs("div",{className:"hero-content",children:[u.jsxs("h1",{className:"hero-title",children:[u.jsx("span",{className:"hero-title-line",children:"Найдите помощь"}),u.jsx("span",{className:"hero-title-line",children:"для вашего ребёнка"}),u.jsx("span",{className:"hero-subtitle",children:"с любовью и заботой ❤️"})]}),u.jsx("p",{className:"hero-description",children:"Платформа, созданная мамами для мам. Здесь вы найдёте проверенных специалистов, надёжных нянь и помощников, которые станут частью вашей семьи."}),u.jsxs("div",{className:"hero-stats",children:[u.jsxs("div",{className:"stat-item",children:[u.jsxs("span",{className:"stat-number",children:[l.listings,"+"]}),u.jsx("span",{className:"stat-label",children:"активных объявлений"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsxs("span",{className:"stat-number",children:[l.users,"+"]}),u.jsx("span",{className:"stat-label",children:"довольных мам"})]})]}),u.jsxs("div",{className:"hero-actions",children:[o?u.jsxs(ze,{to:"/listings/new",className:"btn btn-primary btn-large",children:[u.jsx("span",{className:"icon",children:"✨"}),"Создать объявление"]}):u.jsxs(ze,{to:"/login",className:"btn btn-primary btn-large",children:[u.jsx("span",{className:"icon",children:"👩‍👧"}),"Присоединиться к сообществу"]}),u.jsxs(ze,{to:"#listings",className:"btn btn-secondary btn-large",children:[u.jsx("span",{className:"icon",children:"🔍"}),"Найти помощника"]})]})]}),u.jsxs("div",{className:"hero-decoration",children:[u.jsx("div",{className:"floating-icon",children:"👶"}),u.jsx("div",{className:"floating-icon",children:"🧸"}),u.jsx("div",{className:"floating-icon",children:"📚"})]})]}),u.jsxs("section",{className:"categories-section",children:[u.jsxs("h2",{className:"section-title",children:[u.jsx("span",{className:"section-title-icon",children:"🎯"}),"Найдите нужную категорию"]}),u.jsx("div",{className:"categories-grid",children:c.map((d,f)=>u.jsxs("div",{className:"category-card",children:[u.jsx("div",{className:"category-icon",style:{backgroundColor:d.color},children:d.icon}),u.jsx("h3",{className:"category-name",children:d.name}),u.jsx("div",{className:"category-dots",children:[...Array(3)].map((h,w)=>u.jsx("div",{className:"dot",style:{backgroundColor:d.color}},w))})]},f))})]}),u.jsxs("section",{className:"listings-section",id:"listings",children:[u.jsxs("div",{className:"section-header",children:[u.jsxs("h2",{className:"section-title",children:[u.jsx("span",{className:"section-title-icon",children:"🌟"}),"Свежие объявления"]}),u.jsxs(ze,{to:"#",className:"view-all-link",children:["Все объявления ",u.jsx("span",{className:"arrow",children:"→"})]})]}),e.length===0?u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"👶"}),u.jsx("h3",{children:"Пока нет объявлений"}),u.jsx("p",{children:"Будьте первыми, кто создаст объявление!"}),o&&u.jsx(ze,{to:"/listings/new",className:"btn btn-primary",children:"Создать первое объявление"})]}):u.jsx("div",{className:"listings-grid",children:e.map(d=>u.jsx(Ov,{listing:d},d.id))})]}),u.jsxs("section",{className:"benefits-section",children:[u.jsxs("h2",{className:"section-title",children:[u.jsx("span",{className:"section-title-icon",children:"💖"}),"Почему мамы выбирают нас"]}),u.jsxs("div",{className:"benefits-grid",children:[u.jsxs("div",{className:"benefit-card",children:[u.jsx("div",{className:"benefit-icon",children:"🔒"}),u.jsx("h3",{children:"Безопасность"}),u.jsx("p",{children:"Все специалисты проходят проверку, чтобы вы могли быть спокойны"})]}),u.jsxs("div",{className:"benefit-card",children:[u.jsx("div",{className:"benefit-icon",children:"🤝"}),u.jsx("h3",{children:"Доверие"}),u.jsx("p",{children:"Отзывы от реальных мам помогут сделать правильный выбор"})]}),u.jsxs("div",{className:"benefit-card",children:[u.jsx("div",{className:"benefit-icon",children:"💬"}),u.jsx("h3",{children:"Поддержка"}),u.jsx("p",{children:"Мы всегда на связи и готовы помочь в любой ситуации"})]}),u.jsxs("div",{className:"benefit-card",children:[u.jsx("div",{className:"benefit-icon",children:"🎯"}),u.jsx("h3",{children:"Точно в цель"}),u.jsx("p",{children:"Находите именно то, что нужно, благодаря умной системе поиска"})]})]})]}),u.jsxs("section",{className:"cta-section",children:[u.jsxs("div",{className:"cta-content",children:[u.jsx("h2",{className:"cta-title",children:"Готовы найти идеального помощника?"}),u.jsx("p",{className:"cta-description",children:"Присоединяйтесь к сообществу заботливых мам и специалистов"}),u.jsx("div",{className:"cta-actions",children:o?u.jsxs(ze,{to:"/listings/new",className:"btn btn-primary btn-large",children:[u.jsx("span",{className:"icon",children:"🚀"}),"Создать объявление"]}):u.jsxs(ze,{to:"/login",className:"btn btn-primary btn-large",children:[u.jsx("span",{className:"icon",children:"👩‍👧‍👦"}),"Начать сейчас"]})})]}),u.jsx("div",{className:"cta-decoration",children:u.jsx("div",{className:"heart-animation",children:"❤️"})})]}),u.jsx("style",{jsx:!0,children:`
        .home-page {
          animation: fadeIn 0.8s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary-light) 100%);
          border-radius: var(--radius-large);
          padding: 4rem 2rem;
          margin-bottom: 3rem;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-medium);
        }
        
        .hero-content {
          max-width: 800px;
          position: relative;
          z-index: 2;
        }
        
        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        .hero-title-line {
          display: block;
          font-family: var(--font-cursive);
          color: var(--color-primary);
        }
        
        .hero-subtitle {
          display: block;
          font-size: 1.5rem;
          color: var(--color-text-light);
          margin-top: 0.5rem;
        }
        
        .hero-description {
          font-size: 1.2rem;
          color: var(--color-text);
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 600px;
        }
        
        .hero-stats {
          display: flex;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: bold;
          color: var(--color-primary);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: var(--color-text-light);
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .hero-decoration {
          position: absolute;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }
        
        .floating-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: float 3s ease-in-out infinite;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
        }
        
        .floating-icon:nth-child(2) {
          animation-delay: 0.5s;
          margin-left: 2rem;
        }
        
        .floating-icon:nth-child(3) {
          animation-delay: 1s;
          margin-left: 1rem;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        /* Categories */
        .categories-section {
          margin-bottom: 3rem;
        }
        
        .section-title {
          font-size: 2rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--color-text);
        }
        
        .section-title-icon {
          font-size: 1.5em;
        }
        
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
        }
        
        .category-card {
          background: var(--color-card);
          border-radius: var(--radius-medium);
          padding: 1.5rem;
          text-align: center;
          transition: var(--transition-medium);
          border: 2px solid transparent;
          cursor: pointer;
        }
        
        .category-card:hover {
          transform: translateY(-10px);
          border-color: var(--category-color);
          box-shadow: var(--shadow-hover);
        }
        
        .category-icon {
          width: 70px;
          height: 70px;
          border-radius: var(--radius-circle);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1rem;
          transition: var(--transition-medium);
        }
        
        .category-card:hover .category-icon {
          transform: scale(1.1) rotate(10deg);
        }
        
        .category-name {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--color-text);
        }
        
        .category-dots {
          display: flex;
          justify-content: center;
          gap: 0.3rem;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          border-radius: var(--radius-circle);
          opacity: 0.3;
        }
        
        .category-card:hover .dot {
          opacity: 0.7;
          animation: pulse 1.5s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        
        /* Listings */
        .listings-section {
          margin-bottom: 3rem;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .view-all-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition-medium);
        }
        
        .view-all-link:hover {
          gap: 1rem;
          color: var(--color-secondary);
        }
        
        .arrow {
          transition: var(--transition-medium);
        }
        
        .view-all-link:hover .arrow {
          transform: translateX(5px);
        }
        
        .listings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .empty-state {
          text-align: center;
          padding: 3rem;
          background: var(--color-card);
          border-radius: var(--radius-medium);
          border: 2px dashed var(--color-border);
        }
        
        .empty-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        /* Benefits */
        .benefits-section {
          margin-bottom: 3rem;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .benefit-card {
          background: var(--color-card);
          padding: 2rem;
          border-radius: var(--radius-medium);
          text-align: center;
          transition: var(--transition-medium);
          border: 2px solid transparent;
        }
        
        .benefit-card:hover {
          border-color: var(--color-primary);
          transform: translateY(-5px);
          box-shadow: var(--shadow-soft);
        }
        
        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          transition: var(--transition-medium);
        }
        
        .benefit-card:hover .benefit-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .benefit-card h3 {
          margin-bottom: 1rem;
          color: var(--color-primary);
        }
        
        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border-radius: var(--radius-large);
          padding: 4rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          color: white;
        }
        
        .cta-content {
          position: relative;
          z-index: 2;
        }
        
        .cta-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .cta-description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .cta-decoration {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .heart-animation {
          position: absolute;
          font-size: 5rem;
          animation: heartbeat 1.5s ease-in-out infinite;
          opacity: 0.1;
        }
        
        .heart-animation:nth-child(1) {
          top: 20%;
          left: 10%;
        }
        
        .heart-animation:nth-child(2) {
          bottom: 20%;
          right: 10%;
          animation-delay: 0.5s;
        }
        
        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: var(--radius-medium);
          border: none;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: var(--transition-medium);
          font-size: 1rem;
        }
        
        .btn-large {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          color: white;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }
        
        .btn-secondary {
          background: white;
          color: var(--color-text);
          border: 2px solid var(--color-primary);
        }
        
        .btn-secondary:hover {
          background: var(--color-primary-light);
          transform: translateY(-3px);
        }
        
        /* Loading */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 50vh;
          gap: 1rem;
        }
        
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid var(--color-primary-light);
          border-top-color: var(--color-primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .hero-actions {
            flex-direction: column;
          }
          
          .listings-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-decoration {
            display: none;
          }
        }
      `})]})}function Ov({listing:e}){var n,r,l;const t=i=>i==="search"?"🔍 Ищут":"💼 Предлагают";return u.jsxs(ze,{to:`/listings/${e.id}`,className:"listing-card-link",children:[u.jsxs("div",{className:"listing-card",children:[u.jsxs("div",{className:"listing-header",children:[u.jsxs("div",{className:`listing-kind ${e.kind}`,children:[u.jsx("span",{className:"kind-icon",children:e.kind==="search"?"🔍":"💼"}),t(e.kind)]}),e.priceValue&&u.jsxs("div",{className:"listing-price",children:[u.jsx("span",{className:"price-value",children:e.priceValue}),u.jsx("span",{className:"price-unit",children:e.priceUnit||"руб."})]})]}),u.jsx("h3",{className:"listing-title",children:e.title}),u.jsx("p",{className:"listing-description",children:e.description.length>120?`${e.description.substring(0,120)}...`:e.description}),u.jsxs("div",{className:"listing-footer",children:[u.jsxs("div",{className:"listing-category",children:[u.jsx("span",{className:"category-icon",children:"🏷️"}),e.category]}),u.jsxs("div",{className:"listing-author",children:[u.jsx("span",{className:"author-icon",children:"👤"}),(n=e.owner)==null?void 0:n.firstName," ",(r=e.owner)==null?void 0:r.lastName,((l=e.owner)==null?void 0:l.role)==="specialist"&&" 👨‍🏫"]})]}),e.locationText&&u.jsxs("div",{className:"listing-location",children:[u.jsx("span",{className:"location-icon",children:"📍"}),e.locationText]})]}),u.jsx("style",{jsx:!0,children:`
        .listing-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        
        .listing-card {
          background: var(--color-card);
          border-radius: var(--radius-medium);
          padding: 1.5rem;
          height: 100%;
          transition: var(--transition-medium);
          border: 2px solid transparent;
          display: flex;
          flex-direction: column;
        }
        
        .listing-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: var(--shadow-medium);
        }
        
        .listing-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .listing-kind {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-circle);
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .listing-kind.search {
          background: var(--color-success);
          color: var(--color-text);
        }
        
        .listing-kind.offer {
          background: var(--color-accent);
          color: var(--color-text);
        }
        
        .listing-price {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
          font-weight: bold;
        }
        
        .price-value {
          font-size: 1.2rem;
          color: var(--color-primary);
        }
        
        .price-unit {
          font-size: 0.9rem;
          color: var(--color-text-light);
        }
        
        .listing-title {
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
          color: var(--color-text);
          line-height: 1.3;
        }
        
        .listing-description {
          color: var(--color-text-light);
          margin-bottom: 1.5rem;
          line-height: 1.5;
          flex: 1;
        }
        
        .listing-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        
        .listing-category,
        .listing-author,
        .listing-location {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--color-text-light);
        }
        
        .listing-location {
          padding-top: 0.8rem;
          border-top: 1px solid var(--color-border);
        }
      `})]})}function Fv(){var s;const[e,t]=N.useState(!0),[n,r]=N.useState(""),l=yr();N.useEffect(()=>{var c,d;((d=(c=window.Telegram)==null?void 0:c.WebApp)==null?void 0:d.initData)?i():(t(!1),xr()&&l("/"))},[]);const i=async()=>{try{t(!0),await Lv()?l("/"):(r("Telegram авторизация не сработала. Используйте DEV-вход."),t(!1))}catch{r("Ошибка авторизации через Telegram"),t(!1)}},o=async a=>{try{t(!0),r(""),await Tv(a),l("/")}catch{r("Ошибка DEV авторизации"),t(!1)}};return e?u.jsxs("div",{className:"login-loading",children:[u.jsxs("div",{className:"loading-hearts",children:[u.jsx("span",{children:"❤️"}),u.jsx("span",{children:"💖"}),u.jsx("span",{children:"💕"})]}),u.jsx("p",{children:"Подключаемся..."})]}):u.jsxs("div",{className:"login-page",children:[u.jsxs("div",{className:"login-container",children:[u.jsxs("div",{className:"login-decoration",children:[u.jsx("div",{className:"decoration-item item-1",children:"👶"}),u.jsx("div",{className:"decoration-item item-2",children:"🧸"}),u.jsx("div",{className:"decoration-item item-3",children:"📚"})]}),u.jsxs("div",{className:"login-card",children:[u.jsxs("div",{className:"login-header",children:[u.jsxs("div",{className:"login-logo",children:[u.jsx("span",{className:"logo-icon",children:"👶"}),u.jsx("h1",{children:"Для Мам"})]}),u.jsx("p",{className:"login-subtitle",children:"Сообщество заботливых родителей"})]}),u.jsxs("div",{className:"login-content",children:[u.jsx("h2",{className:"login-title",children:"Добро пожаловать!"}),(s=window.Telegram)!=null&&s.WebApp?u.jsxs("div",{className:"telegram-login-section",children:[u.jsx("div",{className:"telegram-icon",children:"📱"}),u.jsx("p",{className:"login-message",children:"Вы открыли приложение в Telegram"}),u.jsxs("button",{onClick:i,className:"btn btn-telegram",children:[u.jsx("span",{className:"btn-icon",children:"🔗"}),"Войти через Telegram"]}),u.jsx("div",{className:"login-divider",children:u.jsx("span",{children:"или"})}),u.jsx("p",{className:"dev-message",children:"Используйте DEV-вход для тестирования:"})]}):u.jsxs("div",{className:"browser-login-section",children:[u.jsx("div",{className:"browser-icon",children:"🌐"}),u.jsxs("p",{className:"login-message",children:["Вы открыли приложение в браузере.",u.jsx("br",{}),"Доступен только DEV-вход для разработки:"]})]}),n&&u.jsxs("div",{className:"error-message",children:[u.jsx("span",{className:"error-icon",children:"⚠️"}),n]}),u.jsxs("div",{className:"dev-login-buttons",children:[u.jsxs("button",{onClick:()=>o("parent"),className:"btn btn-parent",children:[u.jsx("span",{className:"btn-icon",children:"👩‍👧"}),u.jsxs("div",{className:"btn-content",children:[u.jsx("span",{className:"btn-title",children:"Я - Мама"}),u.jsx("span",{className:"btn-subtitle",children:"Ищу помощь для ребёнка"})]}),u.jsx("span",{className:"btn-arrow",children:"→"})]}),u.jsxs("button",{onClick:()=>o("specialist"),className:"btn btn-specialist",children:[u.jsx("span",{className:"btn-icon",children:"👨‍🏫"}),u.jsxs("div",{className:"btn-content",children:[u.jsx("span",{className:"btn-title",children:"Я - Специалист"}),u.jsx("span",{className:"btn-subtitle",children:"Предлагаю свои услуги"})]}),u.jsx("span",{className:"btn-arrow",children:"→"})]})]}),u.jsxs("div",{className:"login-note",children:[u.jsx("p",{className:"note-icon",children:"💡"}),u.jsxs("p",{children:[u.jsx("strong",{children:"Примечание:"})," В реальном приложении вход возможен только через Telegram WebApp. DEV-вход работает только в режиме разработки."]})]}),u.jsxs("div",{className:"login-features",children:[u.jsxs("div",{className:"feature",children:[u.jsx("span",{className:"feature-icon",children:"🔒"}),u.jsx("span",{children:"Безопасно"})]}),u.jsxs("div",{className:"feature",children:[u.jsx("span",{className:"feature-icon",children:"🤝"}),u.jsx("span",{children:"Надёжно"})]}),u.jsxs("div",{className:"feature",children:[u.jsx("span",{className:"feature-icon",children:"❤️"}),u.jsx("span",{children:"С заботой"})]})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary-light) 100%);
        }
        
        .login-loading {
          text-align: center;
        }
        
        .loading-hearts {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .loading-hearts span {
          display: inline-block;
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        .loading-hearts span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .loading-hearts span:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        .login-container {
          position: relative;
          width: 100%;
          max-width: 500px;
        }
        
        .login-decoration {
          position: absolute;
          top: -50px;
          right: -50px;
          bottom: -50px;
          left: -50px;
          pointer-events: none;
          z-index: 1;
        }
        
        .decoration-item {
          position: absolute;
          font-size: 3rem;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }
        
        .item-1 {
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }
        
        .item-2 {
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }
        
        .item-3 {
          bottom: 20%;
          left: 15%;
          animation-delay: 4s;
        }
        
        .login-card {
          background: var(--color-card);
          border-radius: var(--radius-large);
          padding: 3rem;
          box-shadow: var(--shadow-medium);
          position: relative;
          z-index: 2;
          border: 3px solid var(--color-primary-light);
        }
        
        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .login-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        
        .logo-icon {
          font-size: 3rem;
        }
        
        .login-logo h1 {
          font-size: 2.5rem;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: var(--font-cursive);
        }
        
        .login-subtitle {
          color: var(--color-text-light);
          font-size: 1.1rem;
        }
        
        .login-content {
          text-align: center;
        }
        
        .login-title {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: var(--color-text);
        }
        
        .telegram-login-section,
        .browser-login-section {
          margin-bottom: 2rem;
        }
        
        .telegram-icon,
        .browser-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          animation: bounce 2s infinite;
        }
        
        .login-message {
          color: var(--color-text);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        
        .dev-message {
          color: var(--color-text-light);
          margin: 1.5rem 0;
          font-size: 0.9rem;
        }
        
        .login-divider {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
          color: var(--color-text-light);
        }
        
        .login-divider::before,
        .login-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--color-border);
        }
        
        .login-divider span {
          padding: 0 1rem;
        }
        
        .error-message {
          background: var(--color-danger);
          color: var(--color-text);
          padding: 1rem;
          border-radius: var(--radius-small);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          animation: shake 0.5s ease;
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .dev-login-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .btn {
          display: flex;
          align-items: center;
          padding: 1.2rem 1.5rem;
          border-radius: var(--radius-medium);
          border: none;
          cursor: pointer;
          transition: var(--transition-medium);
          font-size: 1rem;
          width: 100%;
          text-align: left;
        }
        
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-medium);
        }
        
        .btn:active {
          transform: translateY(-1px);
        }
        
        .btn-telegram {
          background: linear-gradient(135deg, #0088cc 0%, #34b7f1 100%);
          color: white;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 600;
        }
        
        .btn-parent {
          background: linear-gradient(135deg, var(--color-primary-light) 0%, white 100%);
          border: 2px solid var(--color-primary);
          color: var(--color-text);
        }
        
        .btn-specialist {
          background: linear-gradient(135deg, var(--color-secondary-light) 0%, white 100%);
          border: 2px solid var(--color-secondary);
          color: var(--color-text);
        }
        
        .btn-icon {
          font-size: 1.5rem;
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .btn-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        
        .btn-title {
          font-weight: bold;
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
        }
        
        .btn-subtitle {
          font-size: 0.9rem;
          opacity: 0.7;
        }
        
        .btn-arrow {
          font-size: 1.2rem;
          transition: var(--transition-medium);
        }
        
        .btn:hover .btn-arrow {
          transform: translateX(5px);
        }
        
        .login-note {
          background: var(--color-primary-light);
          padding: 1rem;
          border-radius: var(--radius-small);
          margin-bottom: 1.5rem;
          text-align: left;
        }
        
        .note-icon {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .login-note p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-text);
        }
        
        .login-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }
        
        .feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-light);
        }
        
        .feature-icon {
          font-size: 1.5rem;
        }
        
        @media (max-width: 600px) {
          .login-card {
            padding: 2rem;
          }
          
          .login-logo {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .login-features {
            flex-direction: column;
            gap: 1rem;
          }
          
          .decoration-item {
            display: none;
          }
        }
      `})]})}function Iv(){const{id:e}=Qg(),t=yr(),[n,r]=N.useState(null),[l,i]=N.useState(!0),[o,s]=N.useState(""),[a,c]=N.useState(!1),d=xr();N.useEffect(()=>{f()},[e]);const f=async()=>{try{const T=await(await pr(`/listings/${e}`)).json();r(T)}catch(k){console.error("Error loading listing:",k)}finally{i(!1)}},h=async k=>{if(k.preventDefault(),!d){t("/login");return}if(!o.trim()){alert("Введите сообщение для отклика");return}try{c(!0);const T=await pr(`/listings/${e}/respond`,{method:"POST",body:JSON.stringify({message:o})});if(T.ok)alert("Отклик отправлен успешно!"),s(""),f();else{const g=await T.json();alert(g.error||"Ошибка при отправке отклика")}}catch(T){console.error("Error responding:",T),alert("Ошибка при отправке отклика")}finally{c(!1)}};if(l)return u.jsx("div",{children:"Загрузка..."});if(!n)return u.jsx("div",{children:"Объявление не найдено"});const w=d&&d.id===n.ownerUserId,E=d&&!w;return u.jsxs("div",{className:"listing-detail",children:[u.jsxs("div",{className:"listing-header",children:[u.jsx("h1",{children:n.title}),u.jsxs("div",{className:"meta",children:[u.jsx("span",{className:`kind ${n.kind}`,children:n.kind==="search"?"Ищут":"Предлагают"}),u.jsx("span",{className:"category",children:n.category}),u.jsx("span",{className:"date",children:new Date(n.createdAt).toLocaleDateString()})]})]}),u.jsxs("div",{className:"listing-content",children:[u.jsxs("div",{className:"description",children:[u.jsx("h2",{children:"Описание"}),u.jsx("p",{children:n.description})]}),u.jsxs("div",{className:"details",children:[u.jsx("h2",{children:"Детали"}),u.jsxs("div",{className:"details-grid",children:[n.priceValue&&u.jsxs("div",{className:"detail-item",children:[u.jsx("strong",{children:"Цена:"}),u.jsxs("span",{children:[n.priceValue," ",n.priceUnit||"руб."]})]}),n.locationText&&u.jsxs("div",{className:"detail-item",children:[u.jsx("strong",{children:"Местоположение:"}),u.jsx("span",{children:n.locationText})]}),u.jsxs("div",{className:"detail-item",children:[u.jsx("strong",{children:"Автор:"}),u.jsxs("span",{children:[n.owner.firstName," ",n.owner.lastName,n.owner.role==="specialist"&&" (Специалист)"]})]})]})]}),E&&u.jsxs("div",{className:"respond-section",children:[u.jsx("h2",{children:"Откликнуться на объявление"}),u.jsxs("form",{onSubmit:h,children:[u.jsx("textarea",{value:o,onChange:k=>s(k.target.value),placeholder:"Напишите сообщение автору...",rows:"4",required:!0}),u.jsx("button",{type:"submit",disabled:a,className:"btn btn-primary",children:a?"Отправка...":"Отправить отклик"})]})]}),w&&u.jsxs("div",{className:"owner-section",children:[u.jsx("h2",{children:"Ваше объявление"}),u.jsx("p",{children:"Вы можете просмотреть отклики в личном кабинете"}),u.jsx("button",{onClick:()=>t("/my"),className:"btn btn-secondary",children:"Перейти в личный кабинет"})]}),!d&&u.jsxs("div",{className:"auth-required",children:[u.jsx("h2",{children:"Чтобы откликнуться, нужно войти"}),u.jsx("button",{onClick:()=>t("/login"),className:"btn btn-primary",children:"Войти через Telegram"})]})]}),u.jsx("style",{children:`
        .listing-detail {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .listing-header {
          margin-bottom: 2rem;
        }
        
        .listing-header h1 {
          margin: 0 0 1rem 0;
          font-size: 2rem;
        }
        
        .meta {
          display: flex;
          gap: 1rem;
          align-items: center;
          color: #666;
        }
        
        .kind {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-weight: bold;
        }
        
        .kind.search {
          background: #d4edda;
          color: #155724;
        }
        
        .kind.offer {
          background: #d1ecf1;
          color: #0c5460;
        }
        
        .category {
          background: #e9ecef;
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
        }
        
        .listing-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .listing-content h2 {
          margin-top: 0;
          margin-bottom: 1rem;
        }
        
        .description {
          margin-bottom: 2rem;
        }
        
        .description p {
          line-height: 1.6;
          font-size: 1.1rem;
        }
        
        .details {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 8px;
        }
        
        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }
        
        .detail-item {
          display: flex;
          flex-direction: column;
        }
        
        .detail-item strong {
          margin-bottom: 0.25rem;
          color: #666;
        }
        
        .respond-section,
        .owner-section,
        .auth-required {
          margin-top: 2rem;
          padding: 1.5rem;
          border-radius: 8px;
        }
        
        .respond-section {
          background: #e7f3ff;
          border: 1px solid #b3d7ff;
        }
        
        .owner-section {
          background: #e8f5e9;
          border: 1px solid #c8e6c9;
        }
        
        .auth-required {
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          text-align: center;
        }
        
        textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-family: inherit;
          font-size: 1rem;
          margin-bottom: 1rem;
          resize: vertical;
        }
        
        .btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }
        
        .btn-primary {
          background: #007bff;
          color: white;
        }
        
        .btn-primary:hover {
          background: #0056b3;
        }
        
        .btn-secondary {
          background: #6c757d;
          color: white;
        }
        
        .btn-secondary:hover {
          background: #545b62;
        }
        
        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `})]})}const Uv=["Няня","Репетитор","Аниматор","Фотограф","Воспитатель","Психолог","Логопед","Врач","Другое"];function bv(){const e=yr(),t=xr(),[n,r]=N.useState(!1),[l,i]=N.useState({kind:"search",category:"",title:"",description:"",priceValue:"",priceUnit:"руб.",locationText:""});if(!t)return e("/login"),null;const o=a=>{const{name:c,value:d}=a.target;i(f=>({...f,[c]:d}))},s=async a=>{if(a.preventDefault(),!l.category||!l.title||!l.description){alert("Заполните обязательные поля: категория, заголовок и описание");return}try{r(!0);const c=await pr("/listings",{method:"POST",body:JSON.stringify({...l,priceValue:l.priceValue?parseInt(l.priceValue):null})});if(c.ok){const d=await c.json();e(`/listings/${d.id}`)}else{const d=await c.json();alert(d.error||"Ошибка при создании объявления")}}catch(c){console.error("Error creating listing:",c),alert("Ошибка при создании объявления")}finally{r(!1)}};return u.jsxs("div",{className:"create-listing",children:[u.jsx("h1",{children:"Создать объявление"}),u.jsxs("form",{onSubmit:s,className:"listing-form",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Тип объявления *"}),u.jsxs("div",{className:"radio-group",children:[u.jsxs("label",{className:"radio-label",children:[u.jsx("input",{type:"radio",name:"kind",value:"search",checked:l.kind==="search",onChange:o}),u.jsx("span",{children:"Ищу (нужен специалист)"})]}),u.jsxs("label",{className:"radio-label",children:[u.jsx("input",{type:"radio",name:"kind",value:"offer",checked:l.kind==="offer",onChange:o}),u.jsx("span",{children:"Предлагаю (я специалист)"})]})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Категория *"}),u.jsxs("select",{name:"category",value:l.category,onChange:o,required:!0,children:[u.jsx("option",{value:"",children:"Выберите категорию"}),Uv.map(a=>u.jsx("option",{value:a,children:a},a))]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Заголовок *"}),u.jsx("input",{type:"text",name:"title",value:l.title,onChange:o,placeholder:"Например: Ищу няню для ребёнка 3 лет",required:!0,maxLength:100})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Описание *"}),u.jsx("textarea",{name:"description",value:l.description,onChange:o,placeholder:"Подробно опишите вашу ситуацию, требования или предложение...",rows:"6",required:!0})]}),u.jsxs("div",{className:"price-location-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Цена"}),u.jsxs("div",{className:"price-input",children:[u.jsx("input",{type:"number",name:"priceValue",value:l.priceValue,onChange:o,placeholder:"1000",min:"0"}),u.jsxs("select",{name:"priceUnit",value:l.priceUnit,onChange:o,children:[u.jsx("option",{value:"руб.",children:"руб."}),u.jsx("option",{value:"руб./час",children:"руб./час"}),u.jsx("option",{value:"руб./день",children:"руб./день"}),u.jsx("option",{value:"руб./мес.",children:"руб./мес."})]})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Местоположение"}),u.jsx("input",{type:"text",name:"locationText",value:l.locationText,onChange:o,placeholder:"Город или район",maxLength:50})]})]}),u.jsxs("div",{className:"form-actions",children:[u.jsx("button",{type:"button",onClick:()=>e("/"),className:"btn btn-secondary",children:"Отмена"}),u.jsx("button",{type:"submit",disabled:n,className:"btn btn-primary",children:n?"Создание...":"Создать объявление"})]})]}),u.jsx("style",{children:`
        .create-listing {
          max-width: 700px;
          margin: 0 auto;
        }
        
        h1 {
          margin-bottom: 2rem;
        }
        
        .listing-form {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
          color: #333;
        }
        
        .radio-group {
          display: flex;
          gap: 2rem;
        }
        
        .radio-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        
        .radio-label input[type="radio"] {
          margin: 0;
        }
        
        select,
        input[type="text"],
        input[type="number"],
        textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 1rem;
          font-family: inherit;
        }
        
        textarea {
          resize: vertical;
        }
        
        .price-location-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .price-input {
          display: flex;
          gap: 0.5rem;
        }
        
        .price-input input {
          flex: 1;
        }
        
        .price-input select {
          width: auto;
          min-width: 100px;
        }
        
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #dee2e6;
        }
        
        .btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: none;
        }
        
        .btn-primary {
          background: #007bff;
          color: white;
        }
        
        .btn-primary:hover {
          background: #0056b3;
        }
        
        .btn-primary:disabled {
          background: #6c757d;
          cursor: not-allowed;
        }
        
        .btn-secondary {
          background: #6c757d;
          color: white;
        }
        
        .btn-secondary:hover {
          background: #545b62;
        }
      `})]})}function Av(){const e=yr(),[t,n]=N.useState("listings"),[r,l]=N.useState([]),[i,o]=N.useState([]),[s,a]=N.useState(!1),c=xr();N.useEffect(()=>{c||e("/login")},[c,e]),N.useEffect(()=>{c&&d()},[t,c]);const d=async()=>{a(!0);try{if(t==="listings"){const h=await(await pr("/me/listings")).json();l(h)}else{const h=await(await pr("/me/responses")).json();o(h)}}catch(f){console.error("Error loading data:",f)}finally{a(!1)}};return c?u.jsxs("div",{className:"my-page",children:[u.jsxs("div",{className:"profile-header",children:[u.jsx("h1",{children:"Личный кабинет"}),u.jsxs("div",{className:"user-info",children:[u.jsxs("p",{children:[u.jsxs("strong",{children:[c.firstName," ",c.lastName]}),u.jsx("span",{className:"role-badge",children:c.role==="parent"?"Родитель":"Специалист"})]}),u.jsxs("p",{children:["@",c.username||"без username"]})]})]}),u.jsxs("div",{className:"tabs",children:[u.jsx("button",{className:`tab ${t==="listings"?"active":""}`,onClick:()=>n("listings"),children:"Мои объявления"}),u.jsx("button",{className:`tab ${t==="responses"?"active":""}`,onClick:()=>n("responses"),children:"Мои отклики"})]}),u.jsx("div",{className:"tab-content",children:s?u.jsx("div",{className:"loading",children:"Загрузка..."}):t==="listings"?u.jsx(Bv,{listings:r}):u.jsx(Vv,{responses:i})}),u.jsx("style",{children:`
        .my-page {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .profile-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          border-radius: 8px;
          margin-bottom: 2rem;
        }
        
        .user-info {
          margin-top: 1rem;
        }
        
        .role-badge {
          background: rgba(255,255,255,0.2);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          margin-left: 1rem;
          font-size: 0.9rem;
        }
        
        .tabs {
          display: flex;
          border-bottom: 2px solid #dee2e6;
          margin-bottom: 2rem;
        }
        
        .tab {
          padding: 1rem 2rem;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-size: 1rem;
          cursor: pointer;
          color: #666;
          transition: all 0.2s;
        }
        
        .tab:hover {
          color: #007bff;
        }
        
        .tab.active {
          color: #007bff;
          border-bottom-color: #007bff;
          font-weight: bold;
        }
        
        .loading {
          text-align: center;
          padding: 3rem;
          color: #666;
        }
      `})]}):null}function Bv({listings:e}){return e.length===0?u.jsxs("div",{className:"empty-state",children:[u.jsx("p",{children:"У вас пока нет объявлений"}),u.jsx(ze,{to:"/listings/new",className:"btn btn-primary",children:"Создать первое объявление"})]}):u.jsxs("div",{className:"listings-list",children:[e.map(t=>u.jsxs("div",{className:"listing-item",children:[u.jsxs("div",{className:"listing-main",children:[u.jsx("h3",{children:u.jsx(ze,{to:`/listings/${t.id}`,children:t.title})}),u.jsxs("p",{className:"description",children:[t.description.slice(0,150),"..."]}),u.jsxs("div",{className:"meta",children:[u.jsx("span",{className:`kind ${t.kind}`,children:t.kind==="search"?"Ищут":"Предлагают"}),u.jsx("span",{className:"category",children:t.category}),u.jsx("span",{className:"date",children:new Date(t.createdAt).toLocaleDateString()})]})]}),u.jsxs("div",{className:"responses-count",children:[u.jsx("span",{className:"count",children:t.responses.length}),u.jsx("span",{children:"откликов"})]})]},t.id)),u.jsx("style",{children:`
        .empty-state {
          text-align: center;
          padding: 3rem;
          background: #f8f9fa;
          border-radius: 8px;
        }
        
        .listings-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .listing-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }
        
        .listing-item:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 5px rgba(0,0,0,0.15);
        }
        
        .listing-main {
          flex: 1;
        }
        
        .listing-main h3 {
          margin: 0 0 0.5rem 0;
        }
        
        .listing-main h3 a {
          color: #333;
          text-decoration: none;
        }
        
        .listing-main h3 a:hover {
          color: #007bff;
        }
        
        .description {
          color: #666;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }
        
        .meta {
          display: flex;
          gap: 1rem;
          font-size: 0.9rem;
        }
        
        .kind {
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          font-weight: bold;
        }
        
        .kind.search {
          background: #d4edda;
          color: #155724;
        }
        
        .kind.offer {
          background: #d1ecf1;
          color: #0c5460;
        }
        
        .category {
          color: #666;
        }
        
        .date {
          color: #999;
        }
        
        .responses-count {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 80px;
        }
        
        .count {
          font-size: 1.5rem;
          font-weight: bold;
          color: #007bff;
        }
      `})]})}function Vv({responses:e}){return e.length===0?u.jsxs("div",{className:"empty-state",children:[u.jsx("p",{children:"У вас пока нет откликов"}),u.jsx("p",{children:"Найдите интересные объявления и отправьте отклик!"})]}):u.jsxs("div",{className:"responses-list",children:[e.map(t=>u.jsxs("div",{className:"response-item",children:[u.jsxs("div",{className:"response-header",children:[u.jsx("h3",{children:u.jsx(ze,{to:`/listings/${t.listing.id}`,children:t.listing.title})}),u.jsx("span",{className:"date",children:new Date(t.createdAt).toLocaleDateString()})]}),u.jsx("div",{className:"response-content",children:u.jsx("p",{className:"message",children:t.message||"Без сообщения"})}),u.jsx("div",{className:"response-footer",children:u.jsxs("div",{className:"author",children:["Автор: ",t.listing.owner.firstName," ",t.listing.owner.lastName,t.listing.owner.role==="specialist"&&" (Специалист)"]})})]},t.id)),u.jsx("style",{children:`
        .responses-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .response-item {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .response-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .response-header h3 {
          margin: 0;
        }
        
        .response-header h3 a {
          color: #333;
          text-decoration: none;
        }
        
        .response-header h3 a:hover {
          color: #007bff;
        }
        
        .date {
          color: #999;
          font-size: 0.9rem;
        }
        
        .response-content {
          margin-bottom: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 4px;
        }
        
        .message {
          margin: 0;
          line-height: 1.4;
        }
        
        .response-footer {
          color: #666;
          font-size: 0.9rem;
        }
      `})]})}const $v=hv([{path:"/",element:u.jsx(Dv,{}),children:[{index:!0,element:u.jsx(Mv,{})},{path:"/login",element:u.jsx(Fv,{})},{path:"/listings/:id",element:u.jsx(Iv,{})},{path:"/listings/new",element:u.jsx(bv,{})},{path:"/my",element:u.jsx(Av,{})}]}]);Lo.createRoot(document.getElementById("root")).render(u.jsx(Lc.StrictMode,{children:u.jsx(Ev,{router:$v})}));
