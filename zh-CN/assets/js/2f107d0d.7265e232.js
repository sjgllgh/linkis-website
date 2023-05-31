"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[12527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"ECM \u7ba1\u7406",sidebar_position:5},o=void 0,c={unversionedId:"user-guide/control-panel/ecm-management",id:"version-1.3.1/user-guide/control-panel/ecm-management",title:"ECM \u7ba1\u7406",description:"ECM \u7ba1\u7406\u754c\u9762\u4ec5 Linkis \u8ba1\u7b97\u6cbb\u7406\u53f0\u7ba1\u7406\u5458\u53ef\u89c1\uff0c\u8be5\u9875\u9762\u7528\u4e8e\u7ba1\u7406 ECM \u548c\u6240\u6709\u5f15\u64ce\u3002\u8be5\u754c\u9762\u53ef\u4ee5\u67e5\u770b\u5230ECM\u7684\u72b6\u6001\u4fe1\u606f\u3001\u4fee\u6539ECM\u6807\u7b7e\u4fe1\u606f\u3001\u4fee\u6539ECM\u72b6\u6001\u4fe1\u606f\u4ee5\u53ca\u67e5\u8be2\u5404\u4e2aECM\u4e0b\u7684\u6240\u6709\u5f15\u64ce\u4fe1\u606f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/user-guide/control-panel/ecm-management.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/ecm-management",permalink:"/zh-CN/docs/1.3.1/user-guide/control-panel/ecm-management",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/user-guide/control-panel/ecm-management.md",tags:[],version:"1.3.1",sidebarPosition:5,frontMatter:{title:"ECM \u7ba1\u7406",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Spark \u5f15\u64ce\u53c2\u6570\u8c03\u6574",permalink:"/zh-CN/docs/1.3.1/user-guide/control-panel/spark-param"},next:{title:"\u9650\u5236\u53c2\u6570\u8c03\u6574",permalink:"/zh-CN/docs/1.3.1/user-guide/control-panel/resource-limit"}},l={},s=[{value:"1. \u5b9e\u4f8b\u67e5\u770b",id:"1-\u5b9e\u4f8b\u67e5\u770b",level:2},{value:"2. \u6807\u7b7e\u7ba1\u7406",id:"2-\u6807\u7b7e\u7ba1\u7406",level:2},{value:"3. ECM \u4e0b\u7684\u5f15\u64ce\u4fe1\u606f",id:"3-ecm-\u4e0b\u7684\u5f15\u64ce\u4fe1\u606f",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ECM \u7ba1\u7406\u754c\u9762\u4ec5 Linkis \u8ba1\u7b97\u6cbb\u7406\u53f0\u7ba1\u7406\u5458\u53ef\u89c1\uff0c\u8be5\u9875\u9762\u7528\u4e8e\u7ba1\u7406 ECM \u548c\u6240\u6709\u5f15\u64ce\u3002\u8be5\u754c\u9762\u53ef\u4ee5\u67e5\u770b\u5230ECM\u7684\u72b6\u6001\u4fe1\u606f\u3001\u4fee\u6539ECM\u6807\u7b7e\u4fe1\u606f\u3001\u4fee\u6539ECM\u72b6\u6001\u4fe1\u606f\u4ee5\u53ca\u67e5\u8be2\u5404\u4e2aECM\u4e0b\u7684\u6240\u6709\u5f15\u64ce\u4fe1\u606f\u3002"),(0,i.kt)("h2",{id:"1-\u5b9e\u4f8b\u67e5\u770b"},"1. \u5b9e\u4f8b\u67e5\u770b"),(0,i.kt)("p",null,"\u4e00\u4e2a ECM \u5b9e\u4f8b\u5c31\u662f\u4e00\u4e2a ECM\u670d\u52a1\u3002\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u542f\u52a8\u591a\u4e2a ECM \u670d\u52a1\u6765\u63d0\u9ad8\u8bf7\u6c42\u5904\u7406\u6548\u7387\u3002\u8be5\u9875\u9762\u53ef\u4ee5\u67e5\u770b ECM \u5b9e\u4f8b\u4fe1\u606f\uff0c\u5305\u62ec\u540d\u79f0\u3001\u6807\u7b7e\u4ee5\u53ca\u8d44\u6e90\u7b49\u4fe1\u606f\u3002\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u5b9e\u4f8b\u540d\u79f0\u3001\u72b6\u6001\u3001\u521b\u5efa\u8005\u7b49\u5173\u952e\u5b57\u5bf9 ECM \u5b9e\u4f8b\u8fdb\u884c\u8fc7\u8651\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(61238).Z,width:"1899",height:"546"})),(0,i.kt)("h2",{id:"2-\u6807\u7b7e\u7ba1\u7406"},"2. \u6807\u7b7e\u7ba1\u7406"),(0,i.kt)("p",null,"ECM \u670d\u52a1\u662f\u6839\u636e\u6807\u7b7e\u8fdb\u884c\u8bf7\u6c42\u8fc7\u8651\u548c\u5904\u7406\u7684\u3002\u6bcf\u4e2a\u670d\u52a1\u5305\u542b\u9ed8\u8ba4\u6807\u7b7e\u548c\u7528\u6237\u81ea\u5b9a\u4e49\u6807\u7b7e\u3002\u53ea\u6709\u643a\u5e26 ECM \u670d\u52a1\u6240\u5c5e\u6807\u7b7e\u4fe1\u606f\u7684\u8bf7\u6c42\u624d\u4f1a\u88ab\u5f53\u524d\u670d\u52a1\u5904\u7406\u3002\u70b9\u51fb\u7f16\u8f91\u6309\u94ae\uff0c\u53ef\u4ee5\u7f16\u8f91ECM\u7684\u6807\u7b7e\u4fe1\u606f\uff08\u4ec5\u5141\u8bb8\u7f16\u8f91\u7528\u6237\u81ea\u5b9a\u4e49\u6807\u7b7e\uff09\uff0c\u4ee5\u53ca\u4fee\u6539ECM\u7684\u72b6\u6001\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(32621).Z,width:"520",height:"425"})),(0,i.kt)("p",null,"\u6700\u5e38\u7528\u7684\u662f\u79df\u6237\u6807\u7b7e tenant\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8be5\u6807\u7b7e\u8fdb\u884c\u79df\u6237\u8bf7\u6c42\u9694\u79bb\u3002"),(0,i.kt)("h2",{id:"3-ecm-\u4e0b\u7684\u5f15\u64ce\u4fe1\u606f"},"3. ECM \u4e0b\u7684\u5f15\u64ce\u4fe1\u606f"),(0,i.kt)("p",null,"\u70b9\u51fb ECM \u7684\u5b9e\u4f8b\u540d\u79f0\uff0c\u53ef\u4ee5\u67e5\u770b\u8be5 ECM \u4e0b\u6240\u6709\u7684\u5f15\u64ce\u4fe1\u606f\u3002\u5e76\u5bf9\u5f15\u64ce\u8fdb\u884c\u7ba1\u7406\uff0c\u5305\u62ec\u5f15\u64ce\u505c\u6b62\u3001\u6dfb\u52a0\u6216\u5220\u9664\u7528\u6237\u81ea\u5b9a\u4e49\u6807\u7b7e\u3001\u67e5\u770b\u5f15\u64ce\u65e5\u5fd7\u7b49\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(42132).Z,width:"1893",height:"537"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(31017).Z,width:"1897",height:"390"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(40471).Z,width:"520",height:"460"})),(0,i.kt)("p",null,"\u540c\u6837\u7684\u7ed9 ECM \u5b9e\u4f8b\u4e0b\u7684\u5f15\u64ce\u6253\u6807\u7b7e\u540e\uff0c\u53ef\u4ee5\u66f4\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\u5904\u7406\u8bf7\u6c42\u7684\u5177\u4f53\u5f15\u64ce\u3002"))}d.isMDXComponent=!0},42132:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ecm-btn-e16b5579f9f566bac34e1de8f68573af.png"},40471:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ecm-engine-label-b0e13ca2a1dbe1522fd132ef6c649695.png"},31017:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ecm-engine-f029f9eaf972412bd6bc622e4a82c5c5.png"},61238:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ecm-management-48640ab1b1a0368fa9ec3f628cd9330d.png"},32621:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/edit-label-6bc3fa9dd3544e99d04b09ecdc460e4b.png"}}]);