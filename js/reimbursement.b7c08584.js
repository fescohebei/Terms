(function(t){function e(e){for(var r,o,a=e[0],u=e[1],s=e[2],f=0,p=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},c={reimbursement:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="https://cdn.jsdelivr.net/gh/fescohebei/terms/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=u;i.push([1,"chunk-vendors"]),n()})({1:function(t,e,n){t.exports=n("cc41")},"1e13":function(t,e,n){},"8bbf":function(t,e){t.exports=Vue},"8c23":function(t,e,n){"use strict";var r=n("1e13"),c=n.n(r);c.a},cc41:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),c=n.n(r),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[1301==t.citycode&&11==t.type?n("div",{staticClass:"noticeBox"},[t._m(0),n("div",{staticClass:"textIndent"},[t._v("根据生育报销政策，女职工如在孕期、产期、哺乳期转移生育保险，存在不能享受津贴待遇的重大风险；生育前连续缴费满12个月（补缴不超过6个月）生育的，享受生育津贴待遇（最终审批结果以医保中心为准）；2019年12月26日之后生育的女职工，如果在生育前未连续缴满12个月生育保险，不得享受继续连续缴纳12个月再领取生育津贴的政策。")])]):t._e(),1301==t.citycode&&12==t.type?n("div",{staticStyle:{"line-height":"25px"}},[t._m(1),n("div",{staticClass:"textIndent"},[t._v("根据生育报销政策，女职工如在孕期、产期、哺乳期转移生育保险，存在不能享受津贴待遇的重大风险；生育前连续缴费满12个月（补缴不超过6个月）生育的，享受生育津贴待遇（最终审批结果以医保中心为准）；2019年12月26日之后生育的女职工，如果在生育前未连续缴满12个月生育保险，不得享受继续连续缴纳12个月再领取生育津贴的政策。")])]):t._e()])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"textCenter"},[n("h3",[t._v("生育定额申报须知")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"textCenter"},[n("h3",[t._v("生育津贴申报须知")])])}],a=(n("c975"),n("ac1f"),n("841c"),n("1276"),{name:"app",data:function(){return{citycode:""}},created:function(){var t=this.getUrlParams();this.citycode=t.citycode,this.type=t.type,document.title="社保享受须知"},methods:{getUrlParams:function(){var t=location.search,e=new Object;if(-1!=t.indexOf("?"))for(var n=t.substr(1),r=n.split("&"),c=0;c<r.length;c++)e[r[c].split("=")[0]]=decodeURI(r[c].split("=")[1]);return e}}}),u=a,s=(n("8c23"),n("2877")),l=Object(s["a"])(u,i,o,!1,null,null,null),f=l.exports;c.a.config.productionTip=!1,new c.a({render:function(t){return t(f)}}).$mount("#app")}});