"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[90217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u6570\u636e\u6e90\u7ba1\u7406",sidebar_position:7},o=void 0,c={unversionedId:"user-guide/control-panel/datasource-management",id:"user-guide/control-panel/datasource-management",title:"\u6570\u636e\u6e90\u7ba1\u7406",description:"\u6570\u636e\u6e90\u7ba1\u7406\u53ef\u4ee5\u5bf9\u6570\u636e\u6e90\u94fe\u63a5\u4fe1\u606f\u3001\u6570\u636e\u6e90\u73af\u5883\u3001\u6570\u636e\u6e90\u5206\u7c7b\u4ee5\u53ca\u6570\u636e\u6e90\u6743\u9650\u8fdb\u884c\u5904\u7406\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/control-panel/datasource-management.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/datasource-management",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/datasource-management",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/control-panel/datasource-management.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u6570\u636e\u6e90\u7ba1\u7406",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u5fae\u670d\u52a1\u7ba1\u7406",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/microservice-management"},next:{title:"\u57fa\u7840\u6570\u636e\u7ba1\u7406",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/basicdata-management"}},l={},s=[{value:"1. \u6570\u636e\u6e90\u7ba1\u7406",id:"1-\u6570\u636e\u6e90\u7ba1\u7406",level:2},{value:"2. \u6570\u636e\u6e90\u73af\u5883",id:"2-\u6570\u636e\u6e90\u73af\u5883",level:2},{value:"3. \u6570\u636e\u6e90\u5206\u7c7b",id:"3-\u6570\u636e\u6e90\u5206\u7c7b",level:2},{value:"4. \u6570\u636e\u6e90\u6743\u9650",id:"4-\u6570\u636e\u6e90\u6743\u9650",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6570\u636e\u6e90\u7ba1\u7406\u53ef\u4ee5\u5bf9\u6570\u636e\u6e90\u94fe\u63a5\u4fe1\u606f\u3001\u6570\u636e\u6e90\u73af\u5883\u3001\u6570\u636e\u6e90\u5206\u7c7b\u4ee5\u53ca\u6570\u636e\u6e90\u6743\u9650\u8fdb\u884c\u5904\u7406\u3002"),(0,a.kt)("h2",{id:"1-\u6570\u636e\u6e90\u7ba1\u7406"},"1. \u6570\u636e\u6e90\u7ba1\u7406"),(0,a.kt)("p",null,"\u6570\u636e\u6e90\u7ba1\u7406\u754c\u9762\u53ef\u4ee5\u67e5\u770b Linkis \u7ba1\u7406\u7684\u6570\u636e\u6e90\u3002\u5e76\u5bf9\u6570\u636e\u6e90\u8fdb\u884c\u7ba1\u7406\uff0c\u5305\u62ec\u521b\u5efa\u3001\u4fee\u6539\u3001\u6d4b\u8bd5\u8fde\u63a5\u3001\u4fee\u6539\u6570\u636e\u6e90\u72b6\u6001\u7b49\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(13897).Z,width:"1897",height:"539"})),(0,a.kt)("h2",{id:"2-\u6570\u636e\u6e90\u73af\u5883"},"2. \u6570\u636e\u6e90\u73af\u5883"),(0,a.kt)("p",null,"\u6570\u636e\u6e90\u73af\u5883\u9875\u9762\u53ef\u4ee5\u67e5\u770b\u6570\u636e\u6e90\u73af\u5883\uff0c\u5e76\u4e14\u53ef\u4ee5\u4fee\u6539\u6240\u7ba1\u7406\u73af\u5883\u7684\u53c2\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(73641).Z,width:"1894",height:"543"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(65183).Z,width:"800",height:"681"})),(0,a.kt)("h2",{id:"3-\u6570\u636e\u6e90\u5206\u7c7b"},"3. \u6570\u636e\u6e90\u5206\u7c7b"),(0,a.kt)("p",null,"\u6570\u636e\u6e90\u5206\u7c7b\u9875\u9762\u7528\u4e8e\u7ba1\u7406\u6570\u636e\u6e90\u7684\u7c7b\u578b\uff0c\u8be5\u5206\u7c7b\u5728\u6570\u636e\u6e90\u7ba1\u7406\u3001\u6570\u636e\u6e90\u6743\u9650\u9875\u9762\u90fd\u6709\u4f7f\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(99522).Z,width:"1896",height:"616"})),(0,a.kt)("h2",{id:"4-\u6570\u636e\u6e90\u6743\u9650"},"4. \u6570\u636e\u6e90\u6743\u9650"),(0,a.kt)("p",null,"\u8be5\u9875\u9762\u5bf9\u6570\u636e\u6e90\u6743\u9650\u8fdb\u884c\u7ba1\u7406\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(21080).Z,width:"1906",height:"555"})))}d.isMDXComponent=!0},13897:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/datasource-manage-5efa8c76f1b4c223988ab91617544cb8.png"},21080:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ds-auth-e1854f0c35b9907341ab0ded1a1286e3.png"},99522:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ds-class-de807056b21b88cd021d245a1687446a.png"},65183:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/env-edit-a62d97ca5e693284d63f31e46f500d05.png"},73641:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/env-list-86ed903c395512963dbcf012a8dbf8db.png"}}]);