"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[99848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const l={title:"\u9650\u5236\u53c2\u6570\u8c03\u6574",sidebar_position:5},a=void 0,o={unversionedId:"user-guide/control-panel/resource-limit",id:"user-guide/control-panel/resource-limit",title:"\u9650\u5236\u53c2\u6570\u8c03\u6574",description:"\u672c\u6587\u4ecb\u7ecd\u5bf9\u4e8e\u5185\u5b58\u3001CPU\u7b49\u8d44\u6e90\u4e0d\u8db3\u65f6\u5982\u4f55\u8fdb\u884c\u53c2\u6570\u8c03\u6574\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/control-panel/resource-limit.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/resource-limit",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/resource-limit",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/control-panel/resource-limit.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u9650\u5236\u53c2\u6570\u8c03\u6574",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"ECM \u7ba1\u7406",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/ecm-management"},next:{title:"\u5fae\u670d\u52a1\u7ba1\u7406",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/microservice-management"}},s={},c=[{value:"1. \u961f\u5217\u8d44\u6e90\u4e0d\u8db3",id:"1-\u961f\u5217\u8d44\u6e90\u4e0d\u8db3",level:2},{value:"2. \u961f\u5217\u5b9e\u4f8b\u6570\u8d85\u8fc7\u9650\u5236",id:"2-\u961f\u5217\u5b9e\u4f8b\u6570\u8d85\u8fc7\u9650\u5236",level:2},{value:"3. \u5168\u5c40\u9a71\u52a8\u5668\u5185\u5b58\u4f7f\u7528\u4e0a\u9650",id:"3-\u5168\u5c40\u9a71\u52a8\u5668\u5185\u5b58\u4f7f\u7528\u4e0a\u9650",level:2},{value:"4. \u8d85\u51fa\u5168\u5c40\u9a71\u52a8\u5668CPU\u4e2a\u6570\u4e0a\u9650",id:"4-\u8d85\u51fa\u5168\u5c40\u9a71\u52a8\u5668cpu\u4e2a\u6570\u4e0a\u9650",level:2},{value:"5. \u8d85\u51fa\u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570\u4e0a\u9650",id:"5-\u8d85\u51fa\u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570\u4e0a\u9650",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...l}=e;return(0,i.kt)(u,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5bf9\u4e8e\u5185\u5b58\u3001CPU\u7b49\u8d44\u6e90\u4e0d\u8db3\u65f6\u5982\u4f55\u8fdb\u884c\u53c2\u6570\u8c03\u6574\u3002"),(0,i.kt)("h2",{id:"1-\u961f\u5217\u8d44\u6e90\u4e0d\u8db3"},"1. \u961f\u5217\u8d44\u6e90\u4e0d\u8db3"),(0,i.kt)("p",null,"\u4efb\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u62a5\u9519\uff1a\u9519\u8bef\u7801 12001\uff0c\u9519\u8bef\u4fe1\u606f \u961f\u5217CPU\u8d44\u6e90\u4e0d\u8db3\uff0c\u53ef\u4ee5\u8c03\u6574Spark\u6267\u884c\u5668\u4e2a\u6570"),(0,i.kt)("p",null,"\u70b9\u51fb\u7ba1\u7406\u53f0--\u53c2\u6570\u914d\u7f6e--IDE--Spark--\u663e\u793a\u9ad8\u7ea7\u8bbe\u7f6e--woker\u5f15\u64ce\u8d44\u6e90\u8bbe\u7f6e(2)--\u8c03\u6574\u6267\u884c\u5668\u5e76\u53d1\u6570\n",(0,i.kt)("img",{src:n(82088).Z,width:"1401",height:"855"})),(0,i.kt)("p",null,"\u6216\u8005\u5168\u5c40\u8bbe\u7f6e\u8c03\u6574\u961f\u5217\u8d44\u6e90\u4f7f\u7528\u4e0a\u9650\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(69690).Z,width:"1251",height:"595"})),(0,i.kt)("h2",{id:"2-\u961f\u5217\u5b9e\u4f8b\u6570\u8d85\u8fc7\u9650\u5236"},"2. \u961f\u5217\u5b9e\u4f8b\u6570\u8d85\u8fc7\u9650\u5236"),(0,i.kt)("p",null,"\u4efb\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u62a5\u9519\uff1a\u9519\u8bef\u7801 12003\uff0c\u9519\u8bef\u4fe1\u606f \u961f\u5217\u5b9e\u4f8b\u6570\u8d85\u8fc7\u9650\u5236"),(0,i.kt)("p",null,"\u70b9\u51fb\u7ba1\u7406\u53f0--\u53c2\u6570\u914d\u7f6e--\u5168\u5c40\u8bbe\u7f6e--\u961f\u5217\u8d44\u6e90--yarn\u961f\u5217\u5b9e\u4f8b\u6700\u5927\u4e2a\u6570","[wds.linkis.rm.yarnqueue.instance.max]"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(85247).Z,width:"1290",height:"688"})),(0,i.kt)("h2",{id:"3-\u5168\u5c40\u9a71\u52a8\u5668\u5185\u5b58\u4f7f\u7528\u4e0a\u9650"},"3. \u5168\u5c40\u9a71\u52a8\u5668\u5185\u5b58\u4f7f\u7528\u4e0a\u9650"),(0,i.kt)("p",null,"\u4efb\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u62a5\u9519\uff1a\u9519\u8bef\u7801 12004\uff0c\u9519\u8bef\u4fe1\u606f \u5168\u5c40\u9a71\u52a8\u5668\u5185\u5b58\u4f7f\u7528\u4e0a\u9650\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u66f4\u4f4e\u7684\u9a71\u52a8\u5185\u5b58"),(0,i.kt)("p",null,"\u70b9\u51fb\u7ba1\u7406\u53f0--\u53c2\u6570\u914d\u7f6e--\u5168\u5c40\u8bbe\u7f6e--\u961f\u5217\u8d44\u6e90--\u961f\u5217\u5185\u5b58\u4f7f\u7528\u4e0a\u9650","[wds.linkis.rm.yarnqueue.memory.max]"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(55964).Z,width:"1255",height:"585"})),(0,i.kt)("h2",{id:"4-\u8d85\u51fa\u5168\u5c40\u9a71\u52a8\u5668cpu\u4e2a\u6570\u4e0a\u9650"},"4. \u8d85\u51fa\u5168\u5c40\u9a71\u52a8\u5668CPU\u4e2a\u6570\u4e0a\u9650"),(0,i.kt)("p",null,"\u4efb\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u62a5\u9519\uff1a\u9519\u8bef\u7801 12005\uff0c\u9519\u8bef\u4fe1\u606f \u8d85\u51fa\u5168\u5c40\u9a71\u52a8\u5668CPU\u4e2a\u6570\u4e0a\u9650\uff0c\u53ef\u4ee5\u6e05\u7406\u7a7a\u95f2\u5f15\u64ce"),(0,i.kt)("p",null,"\u70b9\u51fb\u7ba1\u7406\u53f0--\u53c2\u6570\u914d\u7f6e--\u5168\u5c40\u8bbe\u7f6e--\u961f\u5217\u8d44\u6e90--\u5168\u5c40\u5404\u4e2a\u5f15\u64ce\u6838\u5fc3\u4e2a\u6570\u4e0a\u9650","[wds.linkis.rm.client.core.max]"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(55368).Z,width:"1258",height:"583"})),(0,i.kt)("p",null,"\u6216\u8005\u901a\u8fc7\u6e05\u7406\u7a7a\u95f2\u5f15\u64ce\u89e3\u51b3\u3002"),(0,i.kt)("h2",{id:"5-\u8d85\u51fa\u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570\u4e0a\u9650"},"5. \u8d85\u51fa\u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570\u4e0a\u9650"),(0,i.kt)("p",null,"\u4efb\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u62a5\u9519\uff1a\u9519\u8bef\u7801 12006\uff0c\u9519\u8bef\u4fe1\u606f \u8d85\u51fa\u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570\u4e0a\u9650\uff0c\u53ef\u4ee5\u6e05\u7406\u7a7a\u95f2\u5f15\u64ce"),(0,i.kt)("p",null,"\u70b9\u51fb\u7ba1\u7406\u53f0--\u53c2\u6570\u914d\u7f6e--\u5168\u5c40\u8bbe\u7f6e--\u961f\u5217\u8d44\u6e90--\u5168\u5c40\u5404\u4e2a\u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570","[wds.linkis.rm.instance]"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5743).Z,width:"1268",height:"673"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Spark \u5f15\u64ce"),"\n",(0,i.kt)("img",{src:n(86336).Z,width:"1271",height:"664"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hive \u5f15\u64ce")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5913).Z,width:"1261",height:"620"})),(0,i.kt)("p",null,"\u5176\u4ed6\u5f15\u64ce\u8bbe\u7f6e\u7c7b\u4f3c Spark \u548c Hive \u5f15\u64ce\u3002"))}d.isMDXComponent=!0},55964:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/engine-memory-721f43c5c880deeeab8942b5139390da.png"},5743:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/global-con-c0c0f4b39947d2325b0e9b46ee318820.png"},55368:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/global-core-8452e0f3f2db572b1632e11aca25127a.png"},69690:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/global-limit-ed257e2f8402d56113f73b0d09d9dae5.png"},5913:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hive-con-4dfdd7e14ccc0c7d76e90baed5c7c533.png"},86336:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/spark-con-345b16c7774e78594981cda1715327dd.png"},82088:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/spark-resource-7eb6e77a5a9953143318e2f6228d9690.png"},85247:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/yarn-instance-05f6516486e702f6e85709b8191a4d33.png"}}]);