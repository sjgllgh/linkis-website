"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[79211],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,v=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return r?i.createElement(v,c(c({ref:t},l),{},{components:r})):i.createElement(v,c({ref:t},l))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,c[1]=o;for(var u=2;u<a;u++)c[u]=r[u];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},29221:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=r(87462),n=(r(67294),r(3905));const a={title:"Overview",sidebar_position:0},c=void 0,o={unversionedId:"architecture/service-architecture/overview",id:"architecture/service-architecture/overview",title:"Overview",description:"Background",source:"@site/docs/architecture/service-architecture/overview.md",sourceDirName:"architecture/service-architecture",slug:"/architecture/service-architecture/overview",permalink:"/docs/1.3.2/architecture/service-architecture/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/architecture/service-architecture/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Task Flow Description",permalink:"/docs/1.3.2/architecture/task-flow"},next:{title:"Gateway Design",permalink:"/docs/1.3.2/architecture/service-architecture/gateway"}},s={},u=[{value:"<strong>Background</strong>",id:"background",level:2},{value:"<strong>Architecture diagram</strong>",id:"architecture-diagram",level:2},{value:"<strong>Architecture Introduction</strong>",id:"architecture-introduction",level:2}],l={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"background"},(0,n.kt)("strong",{parentName:"h2"},"Background")),(0,n.kt)("p",null,"Microservice governance includes three main microservices: Gateway, Eureka and Open Feign.\nIt is used to solve Linkis's service discovery and registration, unified gateway, request forwarding, inter-service communication, load balancing and other issues.\nAt the same time, Linkis 1.0 will also provide the supporting for Nacos; the entire Linkis is a complete microservice architecture and each business progress requires multiple microservices to complete."),(0,n.kt)("h2",{id:"architecture-diagram"},(0,n.kt)("strong",{parentName:"h2"},"Architecture diagram")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(48360).Z,width:"1076",height:"809"})),(0,n.kt)("h2",{id:"architecture-introduction"},(0,n.kt)("strong",{parentName:"h2"},"Architecture Introduction")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Linkis Gateway",(0,n.kt)("br",{parentName:"p"}),"\n","As the gateway entrance of Linkis, Linkis Gateway is mainly responsible for request forwarding, user access authentication and WebSocket communication.\nThe Gateway of Linkis 1.0 also added Label-based routing and forwarding capabilities.\nA WebSocket routing and forwarder is implemented by Spring Cloud Gateway in Linkis, it is used to establish a WebSocket connection with the client.\nAfter the connection is established, it will automatically analyze the client's WebSocket request and determine which backend microservice the request should be forward to through the rules,\nthen the request is forwarded to the corresponding backend microservice instance.",(0,n.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0",(0,n.kt)("a",{parentName:"p",href:"/docs/1.3.2/architecture/service-architecture/gateway"},"Linkis Gateway"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Linkis Eureka",(0,n.kt)("br",{parentName:"p"}),"\n","Mainly responsible for service registration and discovery. Eureka consists of multiple instances(service instances). These service instances can be divided into two types: Eureka Server and Eureka Client.\nFor ease of understanding, we divide Eureka Client into Service Provider and Service Consumer. Eureka Server provides service registration and discovery.\nThe Service Provider registers its own service with Eureka, so that service consumers can find it.\nThe Service Consumer obtains a listed of registered services from Eureka, so that they can consume services.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Linkis has implemented a set of its own underlying RPC communication schema based on Feign. As the underlying communication solution, Linkis RPC integrates the SDK into the microservices in need.\nA microservice can be both the request caller and the request receiver.\nAs the request caller, the Receiver of the target microservice will be requested through the Sender.\nAs the request receiver, the Receiver will be provided to process the request sent by the Sender in order to complete the synchronous response or asynchronous response.\n"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(51399).Z,width:"878",height:"516"})))}p.isMDXComponent=!0},48360:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/linkis-microservice-gov-01-c677653c7ded2c8b47cd3a4b48f3eee8.png"},51399:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/linkis-microservice-gov-03-6da92a57bfdd5592c24efd65f8d79f58.png"}}]);