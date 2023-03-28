"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[95957],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>k});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(i),h=n,k=c["".concat(s,".").concat(h)]||c[h]||m[h]||r;return i?a.createElement(k,l(l({ref:t},u),{},{components:i})):a.createElement(k,l({ref:t},u))}));function k(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=i[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},6183:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=i(87462),n=(i(67294),i(3905));const r={title:"Release Notes 1.3.0",sidebar_position:.17},l=void 0,o={unversionedId:"release-notes-1.3.0",id:"release-notes-1.3.0",title:"Release Notes 1.3.0",description:"Apache Linkis 1.3.0 includes all Project Linkis-1.3.0.",source:"@site/download/release-notes-1.3.0.md",sourceDirName:".",slug:"/release-notes-1.3.0",permalink:"/download/release-notes-1.3.0",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/download/release-notes-1.3.0.md",tags:[],version:"current",sidebarPosition:.17,frontMatter:{title:"Release Notes 1.3.0",sidebar_position:.17},sidebar:"defaultSidebar",previous:{title:"Release Notes 1.3.1",permalink:"/download/release-notes-1.3.1"},next:{title:"Release Notes 1.2.0",permalink:"/download/release-notes-1.2.0"}},s={},p=[{value:"New Features",id:"new-features",level:2},{value:"Enhancement",id:"enhancement",level:2},{value:"Bugs Fix",id:"bugs-fix",level:2},{value:"Thanks",id:"thanks",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Apache Linkis 1.3.0 includes all ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis/projects/14"},"Project Linkis-1.3.0"),"."),(0,n.kt)("p",null,"The release of Linkis 1.3.0 mainly merge some services in the PES(Public Enhancement Services) service group;\nSSO login session information supports redis memory shared storage, and supports distributed deployment of gateway services;\nsupports the deployment of Linkis services in the Kubernetes environment, including unified image construction, complete Helm Charts, and complete testing peripherals based on Kind. In addition, some functional optimizations and bug fixes have been made."),(0,n.kt)("p",null,"The main functions are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Merge ps-cs/ps-data-source-manager/ps-metadataquery services into ps-publicservice to reduce the number of services"),(0,n.kt)("li",{parentName:"ul"},"SSO login session information supports redis memory shared storage, and supports distributed deployment of gateway services"),(0,n.kt)("li",{parentName:"ul"},"Linkis unified image construction for multiple microservices, and adding actions for automatic image construction"),(0,n.kt)("li",{parentName:"ul"},"Added Helm Charts for deploying Linkis as a whole to Kubernetes environment"),(0,n.kt)("li",{parentName:"ul"},"Kind-based local Kubernetes test environment support"),(0,n.kt)("li",{parentName:"ul"},"Linkis microservice Remote Debug support on Kubernetes environment"),(0,n.kt)("li",{parentName:"ul"},"Added mirror LDH (Linkis Distribution, including Apache Hadoop) build of Hadoop ecosystem All-in-one, which supports one-click deployment of Hive/Spark and other environments and linkis services"),(0,n.kt)("li",{parentName:"ul"},"Optimize the performance of distributed locks of Manager, and fix the problem of slow SQL query caused by high concurrency scenarios")),(0,n.kt)("p",null,"Abbreviations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"COMMON: Linkis Common"),(0,n.kt)("li",{parentName:"ul"},"ENTRANCE: Linkis Entrance"),(0,n.kt)("li",{parentName:"ul"},"EC: Engineconn"),(0,n.kt)("li",{parentName:"ul"},"ECM: EngineConnManager"),(0,n.kt)("li",{parentName:"ul"},"ECP: EngineConnPlugin"),(0,n.kt)("li",{parentName:"ul"},"DMS: Data Source Manager Service"),(0,n.kt)("li",{parentName:"ul"},"MDS: MetaData Manager Service"),(0,n.kt)("li",{parentName:"ul"},"LM: Linkis Manager"),(0,n.kt)("li",{parentName:"ul"},"PS: Linkis Public Service"),(0,n.kt)("li",{parentName:"ul"},"PE: Linkis Public Enhancement"),(0,n.kt)("li",{parentName:"ul"},"RPC: Linkis Common RPC"),(0,n.kt)("li",{parentName:"ul"},"CG: Linkis Computation Governance"),(0,n.kt)("li",{parentName:"ul"},"DEPLOY: Linkis Deployment"),(0,n.kt)("li",{parentName:"ul"},"WEB: Linkis Web"),(0,n.kt)("li",{parentName:"ul"},"GATEWAY: Linkis Gateway"),(0,n.kt)("li",{parentName:"ul"},"EP: Engine Plugin")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"new-features"},"New Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2447"},"[LINKIS-2447]")," Add Dockerfile for Linkis backend and frontend service, and add maven profile to build image"),(0,n.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2465"},"[LINKIS-2465]")," Added login-pod and remote-proxy to facilitate quick login and debugging in k8s environment"),(0,n.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2478"},"[LINKIS-2478]")," Added Git Action for automatic image building and publishing when publishing"),(0,n.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2540"},"[LINKIS-2540]")," Introduce LDH (Linkis Distribution, including Hadoop) image, integrate Hadoop/Spark/Flink/Hive Basic big data environment for easy experience and trial"),(0,n.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/3441"},"[LINKIS-3441]")," Add base image and introduce image cache mechanism to accelerate image build"),(0,n.kt)("li",{parentName:"ul"},"[","ECP]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2916"},"[LINKIS-2916]")," Add EnginePlugin management module"),(0,n.kt)("li",{parentName:"ul"},"[","CG]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/3201"},"[LINKIS-3201]")," Added configuration item to support skipping Python code parsing processing"),(0,n.kt)("li",{parentName:"ul"},"[","Gateway]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2996"},"[LINKIS-2996]")," SSO login session information supports Redis memory shared storage, and supports distributed deployment of gateway services"),(0,n.kt)("li",{parentName:"ul"},"[","COMMON]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/3231"},"[LINKIS-3231]")," Added automatic verification of SQL DDL/DML Git Action"),(0,n.kt)("li",{parentName:"ul"},"[","EC-JDBC]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/3239"},"[LINKIS-3239]")," Optimize the logic of JDBC parameter filling"),(0,n.kt)("li",{parentName:"ul"},"[","EC-JDBC]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2927"},"[LINKIS-2927]")," Merged some services in the Public Enhancement Services service group")),(0,n.kt)("h2",{id:"enhancement"},"Enhancement"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[","LM]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2930"},"[LINKIS-2930]")," Optimize the performance of the Manager's distributed locks and fix slow SQL queries caused by high concurrency scenarios question"),(0,n.kt)("li",{parentName:"ul"},"[","EC]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2709"},"[LINKIS-2709]")," EC log is added, which can be pushed according to fixed time interval"),(0,n.kt)("li",{parentName:"ul"},"[","EC]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2976"},"[LINKIS-2976]")," Refactoring the configuration items of EngineConn"),(0,n.kt)("li",{parentName:"ul"},"[","ENTRANCE]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2713"},"[LINKIS-2713]")," Optimize Entrance concurrency"),(0,n.kt)("li",{parentName:"ul"},"[","Gateway]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2699"},"[LINKIS-2699]")," After the user logs in, clear the expired cookies of the Gateway to solve the problem of authentication failure"),(0,n.kt)("li",{parentName:"ul"},"[","WEB]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2483"},"[LINKIS-2483]")," Linkis Web added dependencies install"),(0,n.kt)("li",{parentName:"ul"},"[","EC-Python]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2898"},"[LINKIS-2898]")," Modify the implementation of PY4J_HOME to increase the testability of Python"),(0,n.kt)("li",{parentName:"ul"},"[","COMMON]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2761"},"[LINKIS-2761]")," Code formatting enhancements, including scalafmt, spotless, parent pom adjustments, etc."),(0,n.kt)("li",{parentName:"ul"},"[","CG]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2711"},"[LINKIS-2711]")," SparkPreExecutionHook code refactoring")),(0,n.kt)("h2",{id:"bugs-fix"},"Bugs Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[","COMMON]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2769"},"[LINKIS-2769]")," fix WebMvcConfigurer issue caused by package conflict"),(0,n.kt)("li",{parentName:"ul"},"[","WEB]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2499"},"[LINKIS-2498]")," fix Apache Rat Check bug"),(0,n.kt)("li",{parentName:"ul"},"[","LM]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2892"},"[LINKIS-2892]")," Fix Yarn resource capacity calculation error"),(0,n.kt)("li",{parentName:"ul"},"[","CG]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2764"},"[LINKIS-2764]")," Fix Python code parser's parsing failure issue"),(0,n.kt)("li",{parentName:"ul"},"[","COMMON]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2756"},"[LINKIS-2756]")," fix ResultSet may fail to read"),(0,n.kt)("li",{parentName:"ul"},"[","COMMON]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/3156"},"[LINKIS-3156]")," fix custom variable substitution bug"),(0,n.kt)("li",{parentName:"ul"},"[","COMMON]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/3307"},"[LINKIS-3307]")," Fix the NPE problem when the FsPath tool class gets the path"),(0,n.kt)("li",{parentName:"ul"},"[","EC-Python]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/3156"},"[LINKIS-3202]")," fix python watchdog_thread using old method"),(0,n.kt)("li",{parentName:"ul"},"[","EC-Presto]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/3342"},"[LINKIS-3342]")," Optimize the problem that kill presto engine does not take effect and support BackQuoted"),(0,n.kt)("li",{parentName:"ul"},"[","EC]",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/3298"},"[LINKIS-3298]")," fix EC indicator update delay")),(0,n.kt)("h2",{id:"thanks"},"Thanks"),(0,n.kt)("p",null,"The release of Apache Linkis 1.3.0 is inseparable from the contributors of the Linkis community. Thanks to all the community contributors, including but not limited to the following Contributors (in no particular order):\nAaronLinOops, Alexkun, jacktao007, legendtkl, peacewong, casionone, QuintinTao, cydenghua, jackxu2011, ruY9527, huiyuanjjjjuice,\nbinbinCheng, yyuser5201314, Beacontownfc, duhanmin, whiterxine, aiceflower, weipengfei-sj, zhaoyun006, CCweixiao, Beacontownfc, mayinrain"))}m.isMDXComponent=!0}}]);