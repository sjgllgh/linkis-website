"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[25562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"Test Specification",sidebar_position:7},a=void 0,s={unversionedId:"development/development-specification/unit-test",id:"version-1.3.1/development/development-specification/unit-test",title:"Test Specification",description:"1. [Mandatory] Tool classes and internal interfaces of services must have test case.",source:"@site/versioned_docs/version-1.3.1/development/development-specification/unit-test.md",sourceDirName:"development/development-specification",slug:"/development/development-specification/unit-test",permalink:"/docs/1.3.1/development/development-specification/unit-test",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/development/development-specification/unit-test.md",tags:[],version:"1.3.1",sidebarPosition:7,frontMatter:{title:"Test Specification",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Path Usage Specification",permalink:"/docs/1.3.1/development/development-specification/path-usage"},next:{title:"Version and New Feature Specification",permalink:"/docs/1.3.1/development/development-specification/version-feature-specifications"}},c={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," Tool classes and internal interfaces of services must have test case."),(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," Unit testing needs to be able to be automated (triggered by mvn compilation), independence (unit test cases cannot call each other), and repeatable execution (can be executed multiple times, with the same result)"),(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," A test case should only test one method."),(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," Test case exceptions cannot be caught and need to be thrown upwards."),(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," The unit test code must be written in the following project directory: src/test/java or scala, and it is not allowed to be written in other records."),(0,o.kt)("li",{parentName:"ol"},"[Recommended]"," Unit testing needs to consider boundary conditions, such as the end of the month and February."),(0,o.kt)("li",{parentName:"ol"},"[Recommended]"," For database-related unit tests, consider data rollback.")))}m.isMDXComponent=!0}}]);