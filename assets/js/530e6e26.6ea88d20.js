"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[64029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),g=a,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Overview",sidebar_position:1},l=void 0,o={unversionedId:"engine-usage/overview",id:"version-1.2.0/engine-usage/overview",title:"Overview",description:"1 Overview",source:"@site/versioned_docs/version-1.2.0/engine-usage/overview.md",sourceDirName:"engine-usage",slug:"/engine-usage/overview",permalink:"/docs/1.2.0/engine-usage/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.2.0/engine-usage/overview.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"Linkis built-in time variable introduction",permalink:"/docs/1.2.0/user-guide/using_dynamic_variables"},next:{title:"Hive Engine Usage",permalink:"/docs/1.2.0/engine-usage/hive"}},p={},s=[{value:"1 Overview",id:"1-overview",level:2},{value:"2. Document structure",id:"2-document-structure",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-overview"},"1 Overview"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis, as a powerful computing middleware, can easily interface with different computing engines. By shielding the usage details of different computing engines, it provides a The unified use interface greatly reduces the operation and maintenance cost of deploying and applying Linkis's big data platform. At present, Linkis has docked several mainstream computing engines, which basically cover the data requirements in production, in order to provide more With good scalability, Linkis also provides related interfaces for accessing new engines, which can be used to access new computing engines.",(0,a.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The engine is a component that provides users with data processing and analysis capabilities. Currently, it has been connected to Linkis's engine, including mainstream big data computing engines Spark, Hive, Presto, etc. , There are also engines with the ability to process data in scripts such as python and Shell. DataSphereStudio is a one-stop data operation platform docked with Linkis. Users can conveniently use the engine supported by Linkis in DataSphereStudio to complete interactive data analysis tasks and workflow tasks."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Engine"),(0,a.kt)("th",{parentName:"tr",align:null},"Whether to support Scriptis"),(0,a.kt)("th",{parentName:"tr",align:null},"Whether to support workflow"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Spark"),(0,a.kt)("td",{parentName:"tr",align:null},"Support"),(0,a.kt)("td",{parentName:"tr",align:null},"Support")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hive"),(0,a.kt)("td",{parentName:"tr",align:null},"Support"),(0,a.kt)("td",{parentName:"tr",align:null},"Support")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Presto"),(0,a.kt)("td",{parentName:"tr",align:null},"Support"),(0,a.kt)("td",{parentName:"tr",align:null},"Support")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ElasticSearch"),(0,a.kt)("td",{parentName:"tr",align:null},"Support"),(0,a.kt)("td",{parentName:"tr",align:null},"Support")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Python"),(0,a.kt)("td",{parentName:"tr",align:null},"support"),(0,a.kt)("td",{parentName:"tr",align:null},"support")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Shell"),(0,a.kt)("td",{parentName:"tr",align:null},"Support"),(0,a.kt)("td",{parentName:"tr",align:null},"Support")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JDBC"),(0,a.kt)("td",{parentName:"tr",align:null},"Support"),(0,a.kt)("td",{parentName:"tr",align:null},"Support")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,a.kt)("td",{parentName:"tr",align:null},"Support"),(0,a.kt)("td",{parentName:"tr",align:null},"Support")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Flink"),(0,a.kt)("td",{parentName:"tr",align:null},"Support"),(0,a.kt)("td",{parentName:"tr",align:null},"Support")))),(0,a.kt)("h2",{id:"2-document-structure"},"2. Document structure"),(0,a.kt)("p",null,"You can refer to the following documents for the related documents of the engines that have been accessed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.2.0/engine-usage/spark"},"Spark Engine Usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.2.0/engine-usage/hive"},"Hive Engine Usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.2.0/engine-usage/python"},"Python Engine Usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.2.0/engine-usage/shell"},"Shell Engine Usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.2.0/engine-usage/jdbc"},"JDBC Engine Usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.2.0/engine-usage/flink"},"Flink Engine Usage"))))}d.isMDXComponent=!0}}]);