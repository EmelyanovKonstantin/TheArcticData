"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732],{1732:function(t,e,n){n.r(e),n.d(e,{LeafletMap:function(){return R},default:function(){return D}});var s=n(1396),i=n(4460);let a=(0,i.createContext)(null),r=a.Provider;function o(){let t=(0,i.useContext)(a);if(null==t)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return t}var l=n(3632);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}let u=(0,i.forwardRef)(function({bounds:t,boundsOptions:e,center:n,children:s,className:a,id:o,placeholder:u,style:h,whenReady:d,zoom:m,...g},p){let[_]=(0,i.useState)({className:a,id:o,style:h}),[C,f]=(0,i.useState)(null);(0,i.useImperativeHandle)(p,()=>C?.map??null,[C]);let v=(0,i.useCallback)(s=>{if(null!==s&&null===C){let i=new l.Map(s,g);null!=n&&null!=m?i.setView(n,m):null!=t&&i.fitBounds(t,e),null!=d&&i.whenReady(d),f(Object.freeze({__version:1,map:i}))}},[]);(0,i.useEffect)(()=>()=>{C?.map.remove()},[C]);let x=C?i.createElement(r,{value:C},s):u??null;return i.createElement("div",c({},_,{ref:v}),x)});function h(t,e,n){return Object.freeze({instance:t,context:e,container:n})}function d(t,e){return null==e?function(e,n){let s=(0,i.useRef)();return s.current||(s.current=t(e,n)),s}:function(n,s){let a=(0,i.useRef)();a.current||(a.current=t(n,s));let r=(0,i.useRef)(n),{instance:o}=a.current;return(0,i.useEffect)(function(){r.current!==n&&(e(o,n,r.current),r.current=n)},[o,n,s]),a}}function m(t,e){let n=(0,i.useRef)();(0,i.useEffect)(function(){return null!=e&&t.instance.on(e),n.current=e,function(){null!=n.current&&t.instance.off(n.current),n.current=null}},[t,e])}function g(t,e){let n=t.pane??e.pane;return n?{...t,pane:n}:t}function p(t,e){(0,i.useEffect)(function(){let n=e.layerContainer??e.map;return n.addLayer(t.instance),function(){e.layerContainer?.removeLayer(t.instance),e.map.removeLayer(t.instance)}},[e,t])}function _(t,e){var n;let s=d(t,e);return n=function(t){let e=o(),n=s(g(t,e),e);return function(t,e){let n=(0,i.useRef)(e);(0,i.useEffect)(function(){e!==n.current&&null!=t.attributionControl&&(null!=n.current&&t.attributionControl.removeAttribution(n.current),null!=e&&t.attributionControl.addAttribution(e)),n.current=e},[t,e])}(e.map,t.attribution),m(n.current,t.eventHandlers),p(n.current,e),n},(0,i.forwardRef)(function(t,e){let{instance:s}=n(t).current;return(0,i.useImperativeHandle)(e,()=>s),null})}n(7910);let C=function(t,e){var n;let s=d(t,e);return n=function(t){let e=o(),n=s(g(t,e),e);return m(n.current,t.eventHandlers),p(n.current,e),function(t,e){let n=(0,i.useRef)();(0,i.useEffect)(function(){if(e.pathOptions!==n.current){let s=e.pathOptions??{};t.instance.setStyle(s),n.current=s}},[t,e])}(n.current,t),n},(0,i.forwardRef)(function(t,e){let{instance:s,context:a}=n(t).current;return(0,i.useImperativeHandle)(e,()=>s),null==t.children?null:i.createElement(r,{value:a},t.children)})}(function({data:t,...e},n){let s=new l.GeoJSON(t,e);return h(s,Object.freeze({...n,overlayContainer:s}))},function(t,e,n){e.style!==n.style&&(null==e.style?t.resetStyle():t.setStyle(e.style))});function f(t,e,n){let{opacity:s,zIndex:i}=e;null!=s&&s!==n.opacity&&t.setOpacity(s),null!=i&&i!==n.zIndex&&t.setZIndex(i)}let v=_(function({url:t,...e},n){let s=new l.TileLayer(t,g(e,n));return h(s,n)},function(t,e,n){f(t,e,n);let{url:s}=e;null!=s&&s!==n.url&&t.setUrl(s)}),x=l.TileLayer.WMS.extend({getFeatureParam:{feature_count:1,srs:"EPSG:4326",info_format:"application/json"},initialize(t,e){for(let t in this.getFeatureInfo)t in e&&(this.getFeatureInfo[t]=e[t]);"cql_filter"in e&&(this.getFeatureInfo.cql_filter=e.cql_filter),"propertyName"in e&&(this.getFeatureInfo.propertyName=e.propertyName),l.Util.setOptions(this,this.getFeatureParam),l.TileLayer.WMS.prototype.initialize.call(this,t,e)},onAdd(t){l.TileLayer.WMS.prototype.onAdd.call(this,t),t.on("click",this.getFeatureInfo,this)},onRemove(t){l.TileLayer.WMS.prototype.onRemove.call(this,t),t.off("click",this.getFeatureInfo,this)},getFeatureInfo(t){let e=this._map.latLngToContainerPoint(t.latlng),n=new l.Point(e.x,e.y,!0),s=this._map.getSize(),i={request:"GetFeatureInfo",query_layers:this.wmsParams.layers,height:s.y,width:s.x,bbox:this._map.getBounds().toBBoxString()},a={...this.wmsParams,...this.options,...i};a["1.3.0"===a.version?"i":"x"]=n.x,a["1.3.0"===a.version?"j":"y"]=n.y;let r=this._url+l.Util.getParamString(a,this._url,!1);this.fire("click",{url:r,params:a,latlng:t.latlng})}});l.TileLayer.InfoWMS=x,l.tileLayer.infoWMS=function(t,e){return new x(t,e)};var y=_(function(t,e){return{instance:new l.TileLayer.InfoWMS(t.url,t.params),context:e}},function(t,e,n){f(t,e,n)});let b=(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"125",viewBox:"0 0 100 125",fill:"inherit",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M64.551 35.45V16.667C64.551 15.024 63.898 13.448 62.736 12.286C61.575 11.124 59.999 10.471 58.356 10.471C53.722 10.471 46.281 10.471 41.647 10.471C40.004 10.471 38.428 11.124 37.266 12.286C36.104 13.448 35.451 15.024 35.451 16.667V35.45H16.668C15.025 35.45 13.449 36.103 12.287 37.265C11.125 38.427 10.473 40.002 10.473 41.646C10.473 46.279 10.473 53.721 10.473 58.354C10.473 59.998 11.125 61.573 12.287 62.735C13.449 63.897 15.025 64.55 16.668 64.55H35.451V83.333C35.451 84.976 36.104 86.552 37.266 87.714C38.428 88.876 40.004 89.529 41.647 89.529C46.281 89.529 53.722 89.529 58.356 89.529C59.999 89.529 61.575 88.876 62.736 87.714C63.898 86.552 64.551 84.976 64.551 83.333V64.55H83.335C84.978 64.55 86.554 63.897 87.715 62.735C88.877 61.573 89.53 59.998 89.53 58.354C89.53 53.721 89.53 46.279 89.53 41.646C89.53 40.002 88.877 38.427 87.715 37.265C86.554 36.103 84.978 35.45 83.335 35.45H64.551ZM60.494 37.479C60.494 38.599 61.402 39.508 62.522 39.508H83.335C83.902 39.508 84.445 39.733 84.846 40.134C85.247 40.535 85.473 41.079 85.473 41.646V58.354C85.473 58.921 85.247 59.465 84.846 59.866C84.445 60.267 83.902 60.492 83.335 60.492H62.522C61.402 60.492 60.494 61.401 60.494 62.521V83.333C60.494 83.9 60.268 84.444 59.867 84.845C59.466 85.246 58.923 85.471 58.356 85.471H41.647C41.08 85.471 40.536 85.246 40.135 84.845C39.734 84.444 39.509 83.9 39.509 83.333V62.521C39.509 61.401 38.601 60.492 37.48 60.492H16.668C16.101 60.492 15.557 60.267 15.156 59.866C14.755 59.465 14.53 58.921 14.53 58.354V41.646C14.53 41.079 14.755 40.535 15.156 40.134C15.557 39.733 16.101 39.508 16.668 39.508H37.48C38.601 39.508 39.509 38.599 39.509 37.479V16.667C39.509 16.1 39.734 15.556 40.135 15.155C40.536 14.754 41.08 14.529 41.647 14.529H58.356C58.923 14.529 59.466 14.754 59.867 15.155C60.268 15.556 60.494 16.1 60.494 16.667V37.479Z"})}),w=(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"125",viewBox:"0 0 100 125",fill:"inherit",children:[(0,s.jsx)("path",{d:"M83.5877 16.4121C74.6801 7.50447 62.5983 2.5 49.9999 2.5C37.4017 2.5 25.3212 7.50447 16.4123 16.4121C7.5046 25.3199 2.5 37.4017 2.5 50C2.51478 62.5932 7.52321 74.6662 16.4286 83.571C25.3329 92.4763 37.4053 97.485 49.9996 97.4995C62.5973 97.4995 74.6788 92.4955 83.5877 83.5877C92.4957 74.68 97.5 62.5983 97.5 50C97.5 37.4017 92.4957 25.3212 83.5877 16.4121ZM78.4203 78.4214C70.8825 85.9592 60.6603 90.1936 49.9999 90.1936C39.3397 90.1936 29.117 85.9592 21.5797 78.4214C14.042 70.8838 9.80759 60.6615 9.80759 50.0011C9.81983 39.3457 14.0583 29.1297 21.5935 21.5955C29.1277 14.0603 39.3438 9.82174 49.9991 9.80963L49.9999 9.80887C60.6595 9.80887 70.883 14.0433 78.4203 21.5809C85.9578 29.1186 90.1924 39.3409 90.1924 50.0011C90.1924 60.6615 85.9578 70.8842 78.4203 78.4214Z"}),(0,s.jsx)("path",{d:"M53.6542 48.4875V20.7708C53.6542 19.4651 52.9574 18.2589 51.8273 17.6064C50.6967 16.954 49.3036 16.954 48.1735 17.6064C47.0429 18.2589 46.3466 19.4651 46.3466 20.7708V50.0011C46.3466 50.9702 46.7314 51.899 47.4173 52.5841L62.0325 67.1985C62.9605 68.0948 64.2924 68.4357 65.5369 68.0948C66.7807 67.7531 67.753 66.7809 68.0945 65.5372C68.4355 64.2925 68.0945 62.9607 67.1984 62.0326L53.6542 48.4875Z"})]}),j=(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"125",viewBox:"0 0 100 125",fill:"inherit",children:[(0,s.jsx)("path",{d:"M95.77 62.25C95.7693 61.9709 95.7103 61.6951 95.5966 61.4402C95.483 61.1853 95.3172 60.957 95.11 60.77L86.84 53.29L74.17 35.8C73.9817 35.5489 73.7369 35.3456 73.4555 35.2066C73.1741 35.0677 72.8639 34.9969 72.55 35H65.22L62.65 26.44C62.5288 26.0246 62.2762 25.6596 61.93 25.4C61.5838 25.1404 61.1628 25 60.73 25H53.21C52.7407 24.991 52.2832 25.1474 51.9176 25.4417C51.5519 25.736 51.3015 26.1496 51.21 26.61L49.57 35H11.63C9.78898 34.9998 8.02201 35.725 6.71181 37.0183C5.40161 38.3117 4.65368 40.0691 4.63001 41.91L4.23001 74.28C4.21809 75.2068 4.39035 76.1267 4.7368 76.9864C5.08324 77.8461 5.59697 78.6285 6.24817 79.288C6.89937 79.9476 7.67507 80.4713 8.53027 80.8287C9.38547 81.1861 10.3031 81.3701 11.23 81.37H14.76C15.1843 83.8904 16.4879 86.1789 18.4394 87.8294C20.391 89.4798 22.8642 90.3854 25.42 90.3854C27.9759 90.3854 30.4491 89.4798 32.4006 87.8294C34.3521 86.1789 35.6557 83.8904 36.08 81.37H59C59.4243 83.8904 60.7279 86.1789 62.6794 87.8294C64.631 89.4798 67.1042 90.3854 69.66 90.3854C72.2159 90.3854 74.6891 89.4798 76.6406 87.8294C78.5921 86.1789 79.8957 83.8904 80.32 81.37H88.74C90.5965 81.37 92.377 80.6325 93.6898 79.3197C95.0025 78.007 95.74 76.2265 95.74 74.37L95.77 62.25ZM81.43 52.63H61.16C60.6296 52.63 60.1209 52.4193 59.7458 52.0442C59.3707 51.6691 59.16 51.1604 59.16 50.63V39H71.53L81.43 52.63ZM54.85 29H59.25L61 35H53.65L54.85 29ZM25.42 86.34C24.0711 86.34 22.7526 85.94 21.631 85.1906C20.5095 84.4412 19.6353 83.3761 19.1192 82.1299C18.603 80.8837 18.4679 79.5124 18.7311 78.1895C18.9942 76.8665 19.6437 75.6513 20.5975 74.6975C21.5513 73.7437 22.7665 73.0942 24.0895 72.831C25.4124 72.5679 26.7837 72.7029 28.0299 73.2191C29.2761 73.7353 30.3412 74.6095 31.0906 75.731C31.84 76.8526 32.24 78.1711 32.24 79.52C32.2374 81.328 31.518 83.0611 30.2396 84.3395C28.9611 85.618 27.228 86.3374 25.42 86.34ZM69.7 86.34C68.3511 86.34 67.0326 85.94 65.911 85.1906C64.7895 84.4412 63.9153 83.3761 63.3992 82.1299C62.883 80.8837 62.7479 79.5124 63.0111 78.1895C63.2742 76.8665 63.9238 75.6513 64.8775 74.6975C65.8313 73.7437 67.0465 73.0942 68.3695 72.831C69.6924 72.5679 71.0637 72.7029 72.3099 73.2191C73.5561 73.7353 74.6212 74.6095 75.3706 75.731C76.12 76.8526 76.52 78.1711 76.52 79.52C76.5174 81.328 75.798 83.0611 74.5196 84.3395C73.2411 85.618 71.508 86.3374 69.7 86.34ZM91.78 74.34C91.78 75.1356 91.4639 75.8987 90.9013 76.4613C90.3387 77.0239 89.5757 77.34 88.78 77.34H80.3C79.8047 74.8925 78.4781 72.6917 76.5452 71.1108C74.6123 69.5299 72.1921 68.6662 69.695 68.6662C67.1979 68.6662 64.7777 69.5299 62.8448 71.1108C60.9119 72.6917 59.5853 74.8925 59.09 77.34H36C35.5047 74.8925 34.1781 72.6917 32.2452 71.1108C30.3123 69.5299 27.8921 68.6662 25.395 68.6662C22.8979 68.6662 20.4777 69.5299 18.5448 71.1108C16.6119 72.6917 15.2853 74.8925 14.79 77.34H11.23C10.4344 77.34 9.6713 77.0239 9.10869 76.4613C8.54608 75.8987 8.23001 75.1356 8.23001 74.34L8.63001 41.97C8.63001 41.1744 8.94608 40.4113 9.50869 39.8487C10.0713 39.2861 10.8344 38.97 11.63 38.97H55.16V50.63C55.16 52.2213 55.7922 53.7474 56.9174 54.8726C58.0426 55.9979 59.5687 56.63 61.16 56.63H84.58L91.78 63.14V74.34Z"}),(0,s.jsx)("path",{d:"M35.97 46.82H31.97V52.99H25.8V56.99H31.97V63.16H35.97V56.99H42.13V52.99H35.97V46.82Z"}),(0,s.jsx)("path",{d:"M59 18.16V11.66C59 11.1296 58.7893 10.6209 58.4142 10.2458C58.0391 9.87072 57.5304 9.66 57 9.66C56.4696 9.66 55.9609 9.87072 55.5858 10.2458C55.2107 10.6209 55 11.1296 55 11.66V18.16C55 18.6904 55.2107 19.1991 55.5858 19.5742C55.9609 19.9493 56.4696 20.16 57 20.16C57.5304 20.16 58.0391 19.9493 58.4142 19.5742C58.7893 19.1991 59 18.6904 59 18.16Z"}),(0,s.jsx)("path",{d:"M69.44 23.62L74.33 18.73C74.7053 18.3547 74.9161 17.8457 74.9161 17.315C74.9161 16.7843 74.7053 16.2753 74.33 15.9C73.9547 15.5247 73.4457 15.3139 72.915 15.3139C72.3843 15.3139 71.8753 15.5247 71.5 15.9L66.61 20.79C66.4242 20.9758 66.2768 21.1964 66.1762 21.4392C66.0757 21.682 66.0239 21.9422 66.0239 22.205C66.0239 22.4678 66.0757 22.728 66.1762 22.9708C66.2768 23.2136 66.4242 23.4342 66.61 23.62C66.7958 23.8058 67.0164 23.9532 67.2592 24.0538C67.502 24.1544 67.7622 24.2061 68.025 24.2061C68.2878 24.2061 68.548 24.1544 68.7908 24.0538C69.0336 23.9532 69.2542 23.8058 69.44 23.62Z"}),(0,s.jsx)("path",{d:"M45.91 24.2C46.3043 24.1983 46.6894 24.0802 47.0168 23.8603C47.3441 23.6404 47.5992 23.3287 47.7498 22.9642C47.9005 22.5998 47.9401 22.199 47.8636 21.8121C47.7872 21.4253 47.598 21.0697 47.32 20.79L42.44 15.9C42.0647 15.5247 41.5557 15.3139 41.025 15.3139C40.4943 15.3139 39.9853 15.5247 39.61 15.9C39.2347 16.2753 39.0239 16.7843 39.0239 17.315C39.0239 17.8457 39.2347 18.3547 39.61 18.73L44.5 23.62C44.875 23.9919 45.3819 24.2004 45.91 24.2Z"})]}),I=(0,s.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"700.000000pt",height:"700.000000pt",viewBox:"0 0 700.000000 700.000000",preserveAspectRatio:"xMidYMid meet",children:(0,s.jsxs)("g",{transform:"translate(0.000000,700.000000) scale(0.100000,-0.100000)",fill:"inherit",stroke:"none",children:[(0,s.jsx)("path",{d:"M3286 6395 c-466 -96 -822 -465 -896 -927 -18 -111 -8 -351 18 -450   116 -431 456 -752 885 -833 103 -19 311 -19 414 0 451 86 812 447 898 898 19   103 19 311 0 414 -81 429 -401 768 -833 885 -101 27 -381 35 -486 13z m362   -371 c463 -95 725 -589 543 -1024 -53 -127 -156 -252 -274 -332 -114 -78 -226   -115 -377 -125 -367 -24 -699 233 -774 599 -107 521 361 989 882 882z"}),(0,s.jsx)("path",{d:"M2585 3775 c-187 -34 -340 -113 -480 -246 -131 -125 -224 -287 -273   -477 -15 -59 -17 -126 -17 -572 0 -492 1 -507 23 -594 81 -321 318 -577 622   -674 149 -48 137 -47 1040 -47 903 0 891 -1 1040 47 304 97 541 354 622 674   22 87 23 103 23 589 0 429 -2 510 -16 570 -44 187 -140 357 -274 484 -119 113   -247 186 -410 232 l-80 23 -875 2 c-687 2 -890 0 -945 -11z m1810 -380 c147   -39 293 -159 358 -295 19 -41 40 -99 46 -128 7 -34 11 -215 11 -500 0 -498 -1   -509 -67 -634 -64 -123 -168 -211 -312 -267 l-66 -26 -825 -3 c-568 -2 -845 1   -890 8 -158 27 -317 143 -393 287 -66 126 -67 136 -67 635 0 285 4 466 11 500   38 186 188 350 378 415 l66 22 845 1 c728 0 854 -2 905 -15z"})]})});var A=n(8209);let L=t=>{let{from:e,children:n}=t,[a,r]=(0,i.useState)(!1),o=()=>{var t;null===(t=document.getElementById("map-container"))||void 0===t||t.setAttribute("dragging","true"),r(!1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("button",{className:"side-sheets-modal-btn btn btn--icon btn--secondary btn--contained",onClick:()=>{var t;null===(t=document.getElementById("map-container"))||void 0===t||t.setAttribute("dragging","false"),a?r(!1):r(!0)},children:[A.w7," Рекомендации"]}),a&&(0,s.jsxs)("div",{className:"side-sheets-modal ".concat(e," ").concat(a?"open":""),children:[(0,s.jsx)("div",{className:"modal-overlay",onClick:o}),(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("span",{className:"side-sheets-modal-title",children:[(0,s.jsx)("button",{className:"btn close-button",onClick:o,children:A.NA}),(0,s.jsx)("h5",{children:"Рекомендации"})," "]}),n]})]})]})};var S=n(872);let N=t=>{var e;let{props:n}=t,i=null==window?void 0:window.localStorage.getItem("mapTheme"),a=null==n?void 0:null===(e=n.recommendations)||void 0===e?void 0:e.split(".");return console.log(n),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"map-card",children:[(0,s.jsxs)("div",{className:"map-card__container ".concat(i),children:[(null==n?void 0:n.settlement)&&(0,s.jsxs)("h2",{className:"map-card__title rating ",children:[null==n?void 0:n.type.replace("_"," "),". ",null==n?void 0:n.settlement," ",null==n?void 0:n.name]}),(null==n?void 0:n.district)&&(0,s.jsx)("h2",{className:"map-card__title rating ",children:null==n?void 0:n.district}),(0,s.jsxs)("div",{className:"flex-row-container",children:[(null==n?void 0:n.iden_integral_rate_access)&&(0,s.jsxs)("div",{className:"flex-row-container",children:[(0,s.jsx)("span",{className:" map-card__rating-lg ".concat((0,S.DQ)((0,S.g8)(null==n?void 0:n.iden_integral_rate_access))),children:(0,S.g8)(null==n?void 0:n.iden_integral_rate_access)}),(0,s.jsx)("strong",{children:"Общий рейтинг"})]}),(null==n?void 0:n.itog_letters_group)&&(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsxs)("div",{className:" chip-rating  ".concat((0,S.rn)(null==n?void 0:n.itog_letters_group)),children:[" ",(0,s.jsx)("h5",{className:" map-card__rating-lg ".concat((0,S.rn)(null==n?void 0:n.itog_letters_group)),children:n.itog_letters_group})]})]})]}),(null==n?void 0:n.population)&&(null==n?void 0:n.population)!==0?(0,s.jsxs)("div",{className:"flex-row-container icon-default",children:[I,(0,s.jsx)("strong",{children:"Население:"})," ",(0,s.jsx)("span",{className:"body-1",children:(0,S.XD)(null==n?void 0:n.population)})]}):(0,s.jsx)(s.Fragment,{}),(null==n?void 0:n.nearest_hospital_distance)&&(null==n?void 0:n.nearest_hospital_duration)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex-row-container icon-default",children:[b,(0,s.jsx)("strong",{children:"Ближайшая больница в"}),(0,s.jsxs)("span",{className:"body-1",children:[(0,S.g8)(null==n?void 0:n.nearest_hospital_distance)," км"," "]})]}),(0,s.jsxs)("div",{className:"flex-row-container icon-default",children:[w,(0,s.jsx)("strong",{children:"Время в пути составит"})," ",(0,s.jsxs)("span",{className:"body-1",children:["~"," ",(0,S.oo)((0,S.g8)(null==n?void 0:n.nearest_hospital_duration))," "]})]})]}),(null==n?void 0:n.org_name)&&(0,s.jsxs)("h5",{children:[n.org_name," ",n.dep_name]}),(null==n?void 0:n.has_emergency)&&(null==n?void 0:n.has_emergency)!==0?(0,s.jsxs)("div",{className:"flex-row-container icon-default green",children:[j,(0,s.jsx)("strong",{children:"Скорая помощь: "}),(0,s.jsx)("span",{className:"small-2",children:"Есть"})]}):(0,s.jsx)(s.Fragment,{}),(null==n?void 0:n.med_level)&&(0,s.jsxs)("div",{className:"flex-row-container",children:[" ",(0,s.jsx)("strong",{children:"Вид помощи:"}),(0,s.jsx)("span",{className:"body-1",children:n.med_level})]}),(null==n?void 0:n.owner)&&(0,s.jsxs)("div",{className:"flex-row-container",children:[" ",(0,s.jsx)("strong",{children:"Собственность:"}),(0,s.jsx)("span",{className:"body-1",children:null==n?void 0:n.owner})]}),(null==n?void 0:n.okrug)&&(0,s.jsx)("span",{className:"subtitle-1",children:null==n?void 0:n.okrug}),(null==n?void 0:n.hospital_stats)&&(null==n?void 0:n.hospital_stats.split("\n").map((t,e)=>(0,s.jsxs)("span",{children:[" ",t," "]})))]}),a&&(0,s.jsx)(L,{from:"right",children:(0,s.jsx)("ol",{className:"body-1",children:null==a?void 0:a.splice(1,a.length).map((t,e)=>(0,s.jsx)("li",{children:t.replace("".concat(e+2)," ")},e))})})]})})};n(7433);let E={attribution:'&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},H={url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.carto.com/" target="_blank">CARTO</a>'},U=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((t,e)=>((e&=63)<36?t+=e.toString(36):e<62?t+=(e-26).toString(36).toUpperCase():e>62?t+="-":t+="_",t),""),O=()=>U(4).toString();async function z(t){console.log("Empty features:",t);try{let e=await fetch(t.url);return e.json()}catch(t){console.log("Fetching error:",t)}}var M=n(4397),k=()=>(0,s.jsxs)("div",{className:"color-line",children:[(0,s.jsx)("span",{className:"body-2 color-line__title",children:"Доступность"}),(0,s.jsxs)("div",{className:"color-line__container",children:[(0,s.jsxs)("div",{className:"color-line__grade-labels",children:[(0,s.jsx)("span",{children:"100"}),(0,s.jsx)("span",{children:"80"}),(0,s.jsx)("span",{children:"60"}),(0,s.jsx)("span",{children:"40"}),(0,s.jsx)("span",{children:"20"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"small-1",children:"Хорошая"}),(0,s.jsx)("div",{className:"color-line__bar",children:" "}),(0,s.jsx)("span",{className:"small-1",children:"Плохая"})]}),(0,s.jsxs)("div",{className:"color-line__grade-labels",children:[(0,s.jsx)("span",{children:"A"}),(0,s.jsx)("span",{children:"B"}),(0,s.jsx)("span",{children:"C"}),(0,s.jsx)("span",{children:"D"}),(0,s.jsx)("span",{children:"F"})]})]})]}),P=t=>{let[e,n]=(0,i.useState)({matches:window.matchMedia(t).matches,media:t});return(0,i.useEffect)(()=>{let e=window.matchMedia(t),s=t=>{n({matches:t.matches,media:t.media})};return e.addEventListener("change",s),()=>{e.removeEventListener("change",s)}},[t]),e},B=n(2310);let Z=l.Layer.extend({emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAHAAACH5BAUAAAAALAAAAAABAAEAAAICRAEAOw==",options:{attribution:"",opacity:1,zIndex:void 0,minZoom:0,maxZoom:18,pointerEvents:void 0,errorImageUrl:"data:image/gif;base64,R0lGODlhAQABAHAAACH5BAUAAAAALAAAAAABAAEAAAICRAEAOw==",bounds:new l.LatLngBounds([-85.05,-180],[85.05,180]),useCanvas:void 0,detectRetina:!1},url:"",key:"",initialize:function(t){(0,l.setOptions)(this,t)},onAdd:function(t){this._map=t,this._div||(this._div=l.DomUtil.create("div","leaflet-image-layer"),this.options.pointerEvents&&(this._div.style["pointer-events"]=this.options.pointerEvents),void 0!==this.options.zIndex&&(this._div.style.zIndex=this.options.zIndex),void 0===this.options.opacity||(this._div.style.opacity=this.options.opacity)),this.getPane().appendChild(this._div);let e=!!window.HTMLCanvasElement;void 0===this.options.useCanvas?this._useCanvas=e:this._useCanvas=this.options.useCanvas,this._useCanvas?(this._bufferCanvas=this._initCanvas(),this._currentCanvas=this._initCanvas()):(this._bufferImage=this._initImage(),this._currentImage=this._initImage()),this._update()},onRemove:function(){this.getPane().removeChild(this._div),this._useCanvas?(this._div.removeChild(this._bufferCanvas),this._div.removeChild(this._currentCanvas)):(this._div.removeChild(this._bufferImage),this._div.removeChild(this._currentImage))},addTo:function(t){return t.addLayer(this),this},_setZoom:function(){this._useCanvas?(this._currentCanvas._bounds&&this._resetImageScale(this._currentCanvas,!0),this._bufferCanvas._bounds&&this._resetImageScale(this._bufferCanvas)):(this._currentImage._bounds&&this._resetImageScale(this._currentImage,!0),this._bufferImage._bounds&&this._resetImageScale(this._bufferImage))},getEvents:function(){let t={moveend:this._update};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t.zoom=this._setZoom,t},getElement:function(){return this._div},setOpacity:function(t){return this.options.opacity=t,this._div&&l.DomUtil.setOpacity(this._div,this.options.opacity),this},setZIndex:function(t){return t&&(this.options.zIndex=t,this._div&&(this._div.style.zIndex=t)),this},bringToFront:function(){return this._div&&this.getPane().appendChild(this._div),this},bringToBack:function(){return this._div&&this.getPane().insertBefore(this._div,this.getPane().firstChild),this},getAttribution:function(){return this.options.attribution},_initCanvas:function(){let t=l.DomUtil.create("canvas","leaflet-image-layer");return this._div.appendChild(t),t._image=new Image,this._ctx=t.getContext("2d"),this.options.crossOrigin&&(t._image.crossOrigin=this.options.crossOrigin),this._map.options.zoomAnimation&&l.Browser.any3d?l.DomUtil.addClass(t,"leaflet-zoom-animated"):l.DomUtil.addClass(t,"leaflet-zoom-hide"),(0,l.extend)(t._image,{onload:(0,l.bind)(this._onImageLoad,this),onerror:(0,l.bind)(this._onImageError,this)}),t},_initImage:function(){let t=l.DomUtil.create("img","leaflet-image-layer");return this.options.crossOrigin&&(t.crossOrigin=this.options.crossOrigin),this._div.appendChild(t),this._map.options.zoomAnimation&&l.Browser.any3d?l.DomUtil.addClass(t,"leaflet-zoom-animated"):l.DomUtil.addClass(t,"leaflet-zoom-hide"),(0,l.extend)(t,{galleryimg:"no",onselectstart:l.Util.falseFn,onmousemove:l.Util.falseFn,onload:(0,l.bind)(this._onImageLoad,this),onerror:(0,l.bind)(this._onImageError,this)}),t},redraw:function(){return this._map&&this._update(),this},_animateZoom:function(t){this._useCanvas?(this._currentCanvas._bounds&&this._animateImage(this._currentCanvas,t),this._bufferCanvas._bounds&&this._animateImage(this._bufferCanvas,t)):(this._currentImage._bounds&&this._animateImage(this._currentImage,t),this._bufferImage._bounds&&this._animateImage(this._bufferImage,t))},_animateImage:function(t,e){let n=this._map,s=t._scale*t._sscale*n.getZoomScale(e.zoom),i=t._bounds.getNorthWest(),a=n._latLngToNewLayerPoint(i,e.zoom,e.center);l.DomUtil.setTransform(t,a,s),t._lastScale=s},_resetImageScale:function(t){let e=new l.Bounds(this._map.latLngToLayerPoint(t._bounds.getNorthWest()),this._map.latLngToLayerPoint(t._bounds.getSouthEast())),n=t._orgBounds.getSize().y,s=e.getSize().y,i=s/n;t._sscale=i,l.DomUtil.setTransform(t,e.min,i)},_resetImage:function(t){let e=new l.Bounds(this._map.latLngToLayerPoint(t._bounds.getNorthWest()),this._map.latLngToLayerPoint(t._bounds.getSouthEast())),n=e.getSize();l.DomUtil.setPosition(t,e.min),t._orgBounds=e,t._sscale=1,this._useCanvas?(t.width=n.x,t.height=n.y):(t.style.width="".concat(n.x,"px"),t.style.height="".concat(n.y,"px"))},_getClippedBounds:function(){let t=this._map.getBounds(),e=t.getSouth(),n=t.getNorth(),s=t.getWest(),i=t.getEast(),a=this.options.bounds.getSouth(),r=this.options.bounds.getNorth(),o=this.options.bounds.getWest(),c=this.options.bounds.getEast();e<a&&(e=a),n>r&&(n=r),s<o&&(s=o),i>c&&(i=c);let u=new l.LatLng(n,s),h=new l.LatLng(e,i);return new l.LatLngBounds(u,h)},_getImageScale:function(){return this.options.detectRetina&&l.Browser.retina?2:1},_update:function(){let t;let e=this._getClippedBounds(),n=this._map.latLngToContainerPoint(e.getNorthWest()),s=this._map.latLngToContainerPoint(e.getSouthEast()),i=s.x-n.x,a=s.y-n.y;if(this._useCanvas?(this._bufferCanvas._scale=this._bufferCanvas._lastScale,this._currentCanvas._scale=1,this._currentCanvas._lastScale=this._currentCanvas._scale,this._bufferCanvas._sscale=1,this._currentCanvas._bounds=e,this._resetImage(this._currentCanvas),t=this._currentCanvas._image,l.DomUtil.setOpacity(t,0)):(this._bufferImage._scale=this._bufferImage._lastScale,this._currentImage._scale=1,this._currentImage._lastScale=this._currentImage._scale,this._bufferImage._sscale=1,this._currentImage._bounds=e,this._resetImage(this._currentImage),t=this._currentImage,l.DomUtil.setOpacity(t,0)),this._map.getZoom()<this.options.minZoom||this._map.getZoom()>this.options.maxZoom||i<32||a<32){this._div.style.visibility="hidden",t.src=this.emptyImageUrl,t.key="<empty>",this.key=t.key,t.tag=null;return}this.fire("loading"),i*=this._getImageScale(),a*=this._getImageScale(),this.key=[e.getNorthWest(),e.getSouthEast(),i,a].join(", "),this.getImageUrl&&(t.src=this.getImageUrl(e,i,a),t.key=this.key)},_onImageError:function(t){this.fire("error",t),l.DomUtil.addClass(t.target,"invalid"),t.target.src!==this.options.errorImageUrl&&(t.target.src=this.options.errorImageUrl)},_onImageLoad:function(t){(t.target.src===this.options.errorImageUrl||(l.DomUtil.removeClass(t.target,"invalid"),t.target.key&&t.target.key===this.key))&&(this._onImageDone(t),this.fire("load",t))},_onImageDone:function(t){let e;this._useCanvas?this._renderCanvas(t):(l.DomUtil.setOpacity(this._currentImage,1),l.DomUtil.setOpacity(this._bufferImage,0),this._addInteraction&&this._currentImage.tag&&this._addInteraction(this._currentImage.tag),e=this._bufferImage,this._bufferImage=this._currentImage,this._currentImage=e),"<empty>"!==t.target.key&&(this._div.style.visibility="visible")},_renderCanvas:function(){let t=this._currentCanvas.getContext("2d");t.drawImage(this._currentCanvas._image,0,0,this._currentCanvas.width,this._currentCanvas.height),l.DomUtil.setOpacity(this._currentCanvas,1),l.DomUtil.setOpacity(this._bufferCanvas,0),this._addInteraction&&this._currentCanvas._image.tag&&this._addInteraction(this._currentCanvas._image.tag);let e=this._bufferCanvas;this._bufferCanvas=this._currentCanvas,this._currentCanvas=e}});Z.WMS=Z.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/png",transparent:!1,url:"http://62.113.107.81:8081/geoserver/department/wms"},options:{crs:null,uppercase:!1},initialize:function(t,e){let n;this._wmsUrl=t;let s=(0,l.extend)({},this.defaultWmsParams);for(n in e)Object.prototype.hasOwnProperty.call(Z.prototype.options,n)||l.Layer&&Object.prototype.hasOwnProperty.call(l.Layer.prototype.options,n)||(s[n]=e[n]);this.wmsParams=s,(0,l.setOptions)(this,e)},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);let e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Z.prototype.onAdd.call(this,t)},getImageUrl:function(t,e,n){let{wmsParams:s}=this;s.width=e,s.height=n;let i=this._crs.project(t.getNorthWest()),a=this._crs.project(t.getSouthEast()),r=this._wmsUrl,o=(this._wmsVersion>=1.3&&this._crs===l.CRS.EPSG4326?[a.y,i.x,i.y,a.x]:[i.x,a.y,a.x,i.y]).join(",");return r+l.Util.getParamString(this.wmsParams,r,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+o},setParams:function(t,e){return(0,l.extend)(this.wmsParams,t),e||this.redraw(),this}});var V=_(function(t,e){return{instance:new Z.WMS(t.url,t.params),context:e}},function(t,e,n){f(t,e,n)});let R=()=>{let t=P("(max-width: 600px)"),[e,n]=(0,i.useState)(),[a,r]=(0,i.useState)(),{setProps:o}=(0,M.Iz)(),[l,c]=(0,i.useState)(),[h,d]=(0,i.useState)(null),m=t=>{fetch("http://localhost:8080/route?id=".concat(t)).then(t=>t.json()).then(t=>{d(t),console.log(t)})};(0,i.useEffect)(()=>{(null==a?void 0:a.settlement)!==void 0&&"number"==typeof(null==a?void 0:a.id)&&(c(O()),m(null==a?void 0:a.id)),void 0===a&&r(null)},[a]);let g=(0,M.oR)().layers,p=g.join(",");(0,i.useEffect)(()=>{n(O())},[p]);let[_,f]=(0,i.useState)({center:{lat:72,lng:60},zoom:3}),x=window.localStorage.getItem("mapTheme");return(0,s.jsxs)(s.Fragment,{children:[a&&(0,s.jsx)(N,{props:a}),(0,s.jsxs)(u,{tap:!0,doubleClickZoom:!1,className:"map-tiles",dragging:!0,id:"map-container",..._,minZoom:3,children:[((null==a?void 0:a.itog_letters_group)||(null==a?void 0:a.iden_integral_rate_access))&&(0,s.jsx)(k,{}),h&&(0,s.jsx)(C,{data:h},l),(0,s.jsx)(v,{attribution:"dark"===x?H.attribution:E.attribution,url:"dark"===x?H.url:E.url}),(0,s.jsx)(V,{url:"http://62.113.107.81:8081/geoserver/department/wms",params:{key:e,layers:p,format:"image/png",transparent:!0,version:"1.1.0",attribution:"myattribution"}},e),(0,s.jsx)(y,{id:"infoWMSTileLayer",crossOrigin:"anonymous",zIndex:20,url:"http://62.113.107.81:8081/geoserver/department/wms",params:{version:"1.1.0",Request:"GetFeatureInfo",key:e,layers:p,format:"image/png",transparent:!0,attribution:"myattribution"},eventHandlers:{click:async t=>{var e,n,s;let i=await z(t);i.features[0]||(r(null),o(null)),(null===(e=i.features[0])||void 0===e?void 0:e.properties)!==void 0&&(r(null===(n=i.features[0])||void 0===n?void 0:n.properties),o(null===(s=i.features[0])||void 0===s?void 0:s.properties))}}},"".concat(e,"-info"))]}),t&&(0,s.jsx)(L,{from:"bottom",children:(0,s.jsx)(B.k,{})})]})};var D=R}}]);