"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[34330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Load UDF by UDF ID",sidebar_position:.2},o=void 0,l={unversionedId:"feature/load-udf-by-udfid",id:"feature/load-udf-by-udfid",title:"Load UDF by UDF ID",description:"1. Background",source:"@site/docs/feature/load-udf-by-udfid.md",sourceDirName:"feature",slug:"/feature/load-udf-by-udfid",permalink:"/docs/1.3.2/feature/load-udf-by-udfid",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/feature/load-udf-by-udfid.md",tags:[],version:"current",sidebarPosition:.2,frontMatter:{title:"Load UDF by UDF ID",sidebar_position:.2},sidebar:"tutorialSidebar",previous:{title:"Eureka reports version metadata",permalink:"/docs/1.3.2/feature/eureka-version-metadata"},next:{title:"Spark-Submit Jar package task",permalink:"/docs/1.3.2/feature/spark-submit-jar"}},s={},u=[{value:"1. Background",id:"1-background",level:2},{value:"2. Instructions for use",id:"2-instructions-for-use",level:2},{value:"3. Precautions",id:"3-precautions",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-background"},"1. Background"),(0,a.kt)("p",null,"In some scenarios, UDF is not loaded through visual interfaces such as Scripts and DSS, but through code. This needs to provide the function of loading UDF by UDF ID."),(0,a.kt)("h2",{id:"2-instructions-for-use"},"2. Instructions for use"),(0,a.kt)("p",null,"Parameter Description:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"linkis.user.udf.all.load")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to load all UDFs selected by the user"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"linkis.user.udf.custom.ids")),(0,a.kt)("td",{parentName:"tr",align:null},"UDF ID list, separated by ",(0,a.kt)("inlineCode",{parentName:"td"},",")),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("p",null,"Submit the task through RestFul, the request example is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'POST /api/rest_j/v1/entrance/submit\nContent-Type: application/json\nToken-Code: dss-AUTH\nToken-User: linked\n\n{\n    "executionContent": {\n        "code": "show databases",\n        "runType": "sql"\n    },\n    "params": {\n        "configuration": {\n            "startup": {\n                "linkis.user.udf.all.load": false\n                "linkis.user.udf.custom.ids": "1,2,3"\n            }\n        }\n    },\n    "labels": {\n        "engineType": "spark-2.4.3",                  // pattern\uff1aengineType-version\n        "userCreator": "linkis-IDE"                   // userCreator: linkis is username\u3002IDE is system that be configed in Linkis\u3002\n    }\n}\n')),(0,a.kt)("h2",{id:"3-precautions"},"3. Precautions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis.user.udf.all.load")," specifies true, the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis.user.udf.custom.ids")," parameter does not take effect")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This function is independent of the loading of ",(0,a.kt)("inlineCode",{parentName:"p"},"/udf/isload?udfId=123&isLoad=true")," interface"))))}c.isMDXComponent=!0}}]);