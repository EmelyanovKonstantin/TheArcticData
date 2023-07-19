(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[882],{7283:function(e,t,n){Promise.resolve().then(n.bind(n,5549)),Promise.resolve().then(n.t.bind(n,653,23))},653:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return l},NoSSR:function(){return a}}),n(1400),n(1895);let r=n(4379);function l(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function a(e){let{children:t}=e;return t}},5549:function(e,t,n){"use strict";n.r(t),n.d(t,{LeafletMap:function(){return P},default:function(){return I}});var r,l=n(3779),a=n(1895);let o=(0,a.createContext)(null),s=o.Provider;var i=n(3632);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let c=(0,a.forwardRef)(function({bounds:e,boundsOptions:t,center:n,children:r,className:l,id:o,placeholder:c,style:d,whenReady:f,zoom:p,...v},m){let[h]=(0,a.useState)({className:l,id:o,style:d}),[_,g]=(0,a.useState)(null);(0,a.useImperativeHandle)(m,()=>_?.map??null,[_]);let b=(0,a.useCallback)(r=>{if(null!==r&&null===_){let l=new i.Map(r,v);null!=n&&null!=p?l.setView(n,p):null!=e&&l.fitBounds(e,t),null!=f&&l.whenReady(f),g(Object.freeze({__version:1,map:l}))}},[]);(0,a.useEffect)(()=>()=>{_?.map.remove()},[_]);let y=_?a.createElement(s,{value:_},r):c??null;return a.createElement("div",u({},h,{ref:b}),y)});function d(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function f(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}function p(e,t){var n;let r=null==t?function(t,n){let r=(0,a.useRef)();return r.current||(r.current=e(t,n)),r}:function(n,r){let l=(0,a.useRef)();l.current||(l.current=e(n,r));let o=(0,a.useRef)(n),{instance:s}=l.current;return(0,a.useEffect)(function(){o.current!==n&&(t(s,n,o.current),o.current=n)},[s,n,r]),l};return n=function(e){var t;let n=function(){let e=(0,a.useContext)(o);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}(),l=r(f(e,n),n);return function(e,t){let n=(0,a.useRef)(t);(0,a.useEffect)(function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}(n.map,e.attribution),function(e,t){let n=(0,a.useRef)();(0,a.useEffect)(function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}},[e,t])}(l.current,e.eventHandlers),t=l.current,(0,a.useEffect)(function(){let e=n.layerContainer??n.map;return e.addLayer(t.instance),function(){n.layerContainer?.removeLayer(t.instance),n.map.removeLayer(t.instance)}},[n,t]),l},(0,a.forwardRef)(function(e,t){let{instance:r}=n(e).current;return(0,a.useImperativeHandle)(t,()=>r),null})}function v(e,t,n){let{opacity:r,zIndex:l}=t;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=l&&l!==n.zIndex&&e.setZIndex(l)}n(1982);let m=p(function({url:e,...t},n){let r=new i.TileLayer(e,f(t,n));return d(r,n)},function(e,t,n){v(e,t,n);let{url:r}=t;null!=r&&r!==n.url&&e.setUrl(r)}),h=p(function({eventHandlers:e,params:t={},url:n,...r},l){let a=new i.TileLayer.WMS(n,{...t,...f(r,l)});return d(a,l)},function(e,t,n){v(e,t,n),null!=t.params&&t.params!==n.params&&e.setParams(t.params)}),_=i.TileLayer.WMS.extend({getFeatureParam:{feature_count:1,srs:"EPSG:4326",info_format:"application/json"},initialize(e,t){for(let e in this.getFeatureInfo)e in t&&(this.getFeatureInfo[e]=t[e]);"cql_filter"in t&&(this.getFeatureInfo.cql_filter=t.cql_filter),"propertyName"in t&&(this.getFeatureInfo.propertyName=t.propertyName),i.Util.setOptions(this,this.getFeatureParam),i.TileLayer.WMS.prototype.initialize.call(this,e,t)},onAdd(e){i.TileLayer.WMS.prototype.onAdd.call(this,e),e.on("click",this.getFeatureInfo,this)},onRemove(e){i.TileLayer.WMS.prototype.onRemove.call(this,e),e.off("click",this.getFeatureInfo,this)},getFeatureInfo(e){let t=this._map.latLngToContainerPoint(e.latlng),n=new i.Point(t.x,t.y,!0),r=this._map.getSize(),l={request:"GetFeatureInfo",query_layers:this.wmsParams.layers,height:r.y,width:r.x,bbox:this._map.getBounds().toBBoxString()},a={...this.wmsParams,...this.options,...l};a["1.3.0"===a.version?"i":"x"]=n.x,a["1.3.0"===a.version?"j":"y"]=n.y;let o=this._url+i.Util.getParamString(a,this._url,!1);this.fire("click",{url:o,params:a,latlng:e.latlng})}});i.TileLayer.InfoWMS=_,i.tileLayer.infoWMS=function(e,t){return new _(e,t)};var g=p(function(e,t){return{instance:new i.TileLayer.InfoWMS(e.url,e.params),context:t}},function(e,t,n){v(e,t,n)});let b=(0,l.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"700.000000pt",height:"700.000000pt",viewBox:"0 0 700.000000 700.000000",preserveAspectRatio:"xMidYMid meet",children:(0,l.jsxs)("g",{transform:"translate(0.000000,700.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none",children:[(0,l.jsx)("path",{d:"M2165 5431 c-90 -41 -105 -84 -105 -296 l0 -165 -168 0 c-154 0 -171   -2 -212 -22 -132 -67 -132 -249 0 -315 41 -21 58 -23 212 -23 l168 0 0 -168   c0 -154 2 -171 23 -212 66 -132 248 -132 315 0 20 41 22 58 22 212 l0 168 168   0 c154 0 171 2 212 23 132 66 132 248 0 315 -41 20 -58 22 -212 22 l-168 0 0   168 c-1 214 -16 256 -113 297 -48 20 -93 19 -142 -4z"}),(0,l.jsx)("path",{d:"M1265 3931 c-48 -22 -69 -44 -90 -94 -13 -32 -15 -164 -15 -1090 l0   -1053 23 -44 c66 -132 248 -132 315 0 21 42 22 56 22 272 l0 228 1980 0 1980   0 0 -228 c0 -216 1 -230 23 -272 66 -132 248 -132 315 0 l22 44 0 756 0 756   -22 44 c-67 132 -249 132 -315 0 -23 -43 -23 -51 -23 -392 l0 -348 -1980 0   -1980 0 0 648 c0 606 -2 650 -19 687 -22 48 -44 69 -94 90 -48 20 -93 19 -142   -4z"}),(0,l.jsx)("path",{d:"M1740 3148 c-132 -67 -132 -249 0 -315 42 -22 55 -23 290 -23 235 0   248 1 290 23 132 66 132 248 0 315 -42 21 -55 22 -290 22 -235 0 -248 -1 -290   -22z"}),(0,l.jsx)("path",{d:"M2640 3148 c-132 -67 -132 -249 0 -315 l44 -23 1266 0 1266 0 44 23   c132 66 132 248 0 315 l-44 22 -1266 0 -1266 0 -44 -22z"})]})}),y=(0,l.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"700.000000pt",height:"700.000000pt",viewBox:"0 0 700.000000 700.000000",preserveAspectRatio:"xMidYMid meet",children:(0,l.jsxs)("g",{transform:"translate(0.000000,700.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none",children:[(0,l.jsx)("path",{d:"M3286 6395 c-466 -96 -822 -465 -896 -927 -18 -111 -8 -351 18 -450   116 -431 456 -752 885 -833 103 -19 311 -19 414 0 451 86 812 447 898 898 19   103 19 311 0 414 -81 429 -401 768 -833 885 -101 27 -381 35 -486 13z m362   -371 c463 -95 725 -589 543 -1024 -53 -127 -156 -252 -274 -332 -114 -78 -226   -115 -377 -125 -367 -24 -699 233 -774 599 -107 521 361 989 882 882z"}),(0,l.jsx)("path",{d:"M2585 3775 c-187 -34 -340 -113 -480 -246 -131 -125 -224 -287 -273   -477 -15 -59 -17 -126 -17 -572 0 -492 1 -507 23 -594 81 -321 318 -577 622   -674 149 -48 137 -47 1040 -47 903 0 891 -1 1040 47 304 97 541 354 622 674   22 87 23 103 23 589 0 429 -2 510 -16 570 -44 187 -140 357 -274 484 -119 113   -247 186 -410 232 l-80 23 -875 2 c-687 2 -890 0 -945 -11z m1810 -380 c147   -39 293 -159 358 -295 19 -41 40 -99 46 -128 7 -34 11 -215 11 -500 0 -498 -1   -509 -67 -634 -64 -123 -168 -211 -312 -267 l-66 -26 -825 -3 c-568 -2 -845 1   -890 8 -158 27 -317 143 -393 287 -66 126 -67 136 -67 635 0 285 4 466 11 500   38 186 188 350 378 415 l66 22 845 1 c728 0 854 -2 905 -15z"})]})}),x=e=>{let{props:t}=e,n=t["mun_obr_arctic_with_rate Sheet1_itog_letters"];return console.log(n.split("")),console.log(t["mun_obr_arctic_with_rate Sheet1_itog_letters"]),(0,l.jsx)("div",{className:"map-card",children:(0,l.jsxs)("div",{className:"map-card__container",children:[(null==t?void 0:t.region)&&(0,l.jsx)("h1",{className:"map-card__title rating-} ",children:t["mun_obr_arctic_with_rate Sheet1_itog_letters"]}),(null==t?void 0:t.District)&&(0,l.jsx)("span",{className:"card-title",children:null==t?void 0:t.District}),(null==t?void 0:t.okrug)&&(0,l.jsx)("span",{className:"card__title",children:null==t?void 0:t.okrug}),(null==t?void 0:t.name)&&(0,l.jsx)("span",{className:"card-title",children:null==t?void 0:t.name}),(0,l.jsxs)("div",{className:"map-card__col",children:[b,(0,l.jsx)("strong",{className:"subtitle-1",children:"Койки:"}),(0,l.jsx)("span",{className:"small-1",children:null==t?void 0:t.count_bad})]}),(0,l.jsxs)("div",{id:"population",className:"map-card__col",children:[y,(0,l.jsx)("strong",{className:"subtitle-1",children:"Население:"}),(0,l.jsx)("span",{className:"small-1",children:null==t?void 0:t.people})]})]})})},j=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>((t&=63)<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");var S=n(5632);let w=e=>{let{children:t,title:n,buttonType:r,buttonStyle:o,icon:s,className:i}=e,[u,c]=(0,a.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("button",{popovertarget:"my-popover",onClick:e=>{e.preventDefault(),u?c(!1):c(!0)},className:"btn btn--".concat(r,"  btn--").concat(o," ").concat("btn--icon"),children:[s,n]}),u&&(0,l.jsx)("div",{className:""!==i?i:"popover",popover:!0,id:"popover",children:t})]})},E=e=>{let t;let n=new Set,r=(e,r)=>{let l="function"==typeof e?e(t):e;if(!Object.is(l,t)){let e=t;t=(null!=r?r:"object"!=typeof l)?l:Object.assign({},t,l),n.forEach(n=>n(t,e))}},l=()=>t,a={setState:r,getState:l,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,l,a),a},N=e=>e?E(e):E;var O=n(664);let{useSyncExternalStoreWithSelector:M}=O,k=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?N(e):e,n=(e,n)=>(function(e,t=e.getState,n){let r=M(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,a.useDebugValue)(r),r})(t,e,n);return Object.assign(n,t),n},C=(r?k(r):k)(e=>({layers:[],addLayer:t=>e(e=>({layers:""!==t.value?[t,...e.layers]:null})),removeLayer:t=>e(e=>({layers:e.layers.filter(e=>e!==t)}))})),R=e=>{let{label:t,value:n,handler:r,addHandler:o,removeHandler:s}=e,[i,u]=(0,a.useState)(" "),[c,d]=(0,a.useState)(!1);return console.log("Val checkbox",i),(0,a.useEffect)(()=>{c?o(i):s(i)},[i,c]),(0,l.jsx)("div",{children:(0,l.jsxs)("label",{className:"small-2",children:[(0,l.jsx)("input",{value:n,onChange:e=>{var t,n,r;u(null===(t=e.target)||void 0===t?void 0:t.value),d(null===(n=e.target)||void 0===n?void 0:n.checked),console.log(null==e?void 0:null===(r=e.target)||void 0===r?void 0:r.checked)},type:"checkbox"})," ",t," "]})})},L=[{id:1,label:"Архангельская область",value:"arhangelskaya_oblast"},{id:2,label:"base_obl_people",value:"base_obl_people"},{id:3,label:"base_obl_people_3000",value:"base_obl_people_3000"},{id:4,label:"Больничные койки",value:"mun_obr_all_bad zak_arctic_mun_obr_all_bad"},{id:5,label:"Муниципальные образования",value:"mun_obr_arctic"},{id:6,label:"Медицинские Объекты",value:"objects_zdrav objects_zdrav_2"},{id:7,label:"Результат",value:"result"},{id:8,label:"Медленные дороги",value:"slow_roads_lines arctic_slow_roads_lines"},{id:9,label:"Автограф Архангельская область",value:"auto_foot_graph_arh_obl"}],z=()=>{let e=C(e=>e.layers),t=C(e=>e.removeLayer),n=C(e=>e.addLayer),[r,o]=(0,a.useState)(!1);return console.log(e),(0,l.jsx)("section",{className:"tooltips-bar__map-container",children:(0,l.jsx)("div",{className:"tooltips-bar__map",children:(0,l.jsx)(w,{className:"popover--map",title:"",icon:(0,l.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"200.000000pt",height:"200.000000pt",viewBox:"0 0 200.000000 200.000000",preserveAspectRatio:"xMidYMid meet",children:(0,l.jsx)("g",{transform:"translate(0.000000,200.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none",children:(0,l.jsx)("path",{d:"M955 1491 c-60 -26 -493 -275 -507 -293 -21 -24 -23 -67 -6 -90 7 -9   54 -38 105 -65 l91 -49 -96 -55 c-105 -59 -124 -84 -106 -136 8 -24 51 -49   268 -162 197 -102 267 -134 296 -134 28 0 98 32 296 134 217 113 260 138 268   162 19 52 -1 77 -106 136 l-96 55 95 52 c52 28 99 57 104 65 14 23 10 65 -8   87 -10 11 -128 82 -262 157 -242 137 -290 156 -336 136z m305 -188 c135 -76   245 -144 245 -151 0 -18 -471 -262 -505 -262 -34 0 -505 244 -505 262 0 14   479 288 505 288 9 0 126 -62 260 -137z m-427 -408 c163 -86 170 -86 337 1   l126 67 105 -60 c57 -32 104 -64 104 -72 0 -19 -469 -261 -506 -261 -36 0   -504 242 -504 261 0 12 187 127 207 128 4 1 63 -28 131 -64z"})})}),buttonType:"secondary",children:(0,l.jsxs)("div",{className:"popover--map__container",children:[(0,l.jsx)("span",{className:"small-1",children:"Район"}),(0,l.jsx)("hr",{className:"divider"}),(0,l.jsx)("ul",{children:L.slice(0,7).map(e=>(0,l.jsx)("li",{children:(0,l.jsx)(R,{handler:n,addHandler:n,removeHandler:t,label:e.label,value:"department:".concat(e.value)})},e.id))}),(0,l.jsx)("span",{className:"small-1",children:"Дороги"}),(0,l.jsx)("hr",{className:"divider"}),(0,l.jsx)("ul",{children:L.slice(7,L.length).map(e=>(0,l.jsx)("li",{children:(0,l.jsx)(R,{handler:n,addHandler:n,removeHandler:t,label:e.label,value:"department:".concat(e.value)})},e.id))})]})})})})},P=()=>{let[e,t]=(0,a.useState)(!1);(0,a.useEffect)(()=>{t(!0)},[]);let[n,r]=(0,a.useState)(),[o,s]=(0,a.useState)();async function i(e){console.log("Ky event",e.url),await S.ZP.get(e.url).json().then(e=>s(e.features[0].properties))}let[u,d]=(0,a.useState)("auto_foot_graph_arh_obl"),f=C().layers,p=f.join(",");console.log("Layer string ",p),(0,a.useEffect)(()=>{r(j(4).toString())},[u,p]);let[v,_]=(0,a.useState)({center:{lat:66,lng:33},zoom:5}),[b,y]=(0,a.useState)();return(0,a.useCallback)(e=>{let{features:t,point:{x:n,y:r}}=e,l=t&&t[0];s(l&&{feature:l,x:n,y:r})},[]),console.log("Layer"+u),console.log("Card Data",o),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c,{...v,minZoom:3,children:[(0,l.jsx)(z,{}),o&&(0,l.jsx)(x,{props:o}),(0,l.jsx)(m,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,l.jsx)(g,{url:"http://62.113.107.81:8081/geoserver/department/wms",params:{Request:"GetFeatureInfo",key:n,layers:p,format:"image/png",transparent:!0,attribution:"myattribution"},eventHandlers:{click:e=>i(e)}},"".concat(n,"-info")),(0,l.jsx)(h,{crossOrigin:"",url:"http://62.113.107.81:8081/geoserver/department/wms",layers:p,format:"image/png",transparent:!0,version:"1.1.0",attribution:"myattribution"},n)]})})};var I=P},8810:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(1895),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:l,type:e,key:u,ref:c,props:a,_owner:s.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},3779:function(e,t,n){"use strict";e.exports=n(8810)},3728:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(1895),l="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useState,o=r.useEffect,s=r.useLayoutEffect,i=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!l(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),l=r[0].inst,c=r[1];return s(function(){l.value=n,l.getSnapshot=t,u(l)&&c({inst:l})},[e,n,t]),o(function(){return u(l)&&c({inst:l}),e(function(){u(l)&&c({inst:l})})},[e]),i(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},9070:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(1895),l=n(4983),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=l.useSyncExternalStore,s=r.useRef,i=r.useEffect,u=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,l){var d=s(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=u(function(){function e(e){if(!i){if(i=!0,o=e,e=r(e),void 0!==l&&f.hasValue){var t=f.value;if(l(t,e))return s=t}return s=e}if(t=s,a(o,e))return t;var n=r(e);return void 0!==l&&l(t,n)?t:(o=e,s=n)}var o,s,i=!1,u=void 0===n?null:n;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,n,r,l]);var p=o(e,d[0],d[1]);return i(function(){f.hasValue=!0,f.value=p},[p]),c(p),p}},4983:function(e,t,n){"use strict";e.exports=n(3728)},664:function(e,t,n){"use strict";e.exports=n(9070)}},function(e){e.O(0,[726,632,580,502,744],function(){return e(e.s=7283)}),_N_E=e.O()}]);