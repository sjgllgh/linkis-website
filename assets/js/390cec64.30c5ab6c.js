"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[62258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?i.createElement(h,c(c({ref:t},u),{},{components:r})):i.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:n,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=r(87462),n=(r(67294),r(3905));const o={title:"RPC Module",sidebar_position:2},c=void 0,a={unversionedId:"architecture/commons/rpc",id:"version-1.3.0/architecture/commons/rpc",title:"RPC Module",description:"1. Overview",source:"@site/versioned_docs/version-1.3.0/architecture/commons/rpc.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/rpc",permalink:"/docs/1.3.0/architecture/commons/rpc",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.0/architecture/commons/rpc.md",tags:[],version:"1.3.0",sidebarPosition:2,frontMatter:{title:"RPC Module",sidebar_position:2},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"Custom Variable Design",permalink:"/docs/1.3.0/architecture/commons/variable"},next:{title:"Overview",permalink:"/docs/1.3.0/architecture/computation-governance-services/overview"}},s={},l=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Architecture description",id:"2-architecture-description",level:2},{value:"2.1 Architecture design diagram",id:"21-architecture-design-diagram",level:3},{value:"2.2 Module description",id:"22-module-description",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-overview"},"1. Overview"),(0,n.kt)("p",null,"The call of HTTP interface between Feign-based microservices can only satisfy a simple A microservice instance that randomly selects a service instance in B microservices according to simple rules, and if this B microservice instance wants to asynchronously return information To the caller, it is simply impossible to achieve.\nAt the same time, because Feign only supports simple service selection rules, it cannot forward the request to the specified microservice instance, and cannot broadcast a request to all instances of the recipient microservice."),(0,n.kt)("h2",{id:"2-architecture-description"},"2. Architecture description"),(0,n.kt)("h3",{id:"21-architecture-design-diagram"},"2.1 Architecture design diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Linkis RPC architecture diagram",src:r(75651).Z,width:"692",height:"546"})),(0,n.kt)("h3",{id:"22-module-description"},"2.2 Module description"),(0,n.kt)("p",null,"The functions of the main modules are introduced as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Eureka: service registration center, user management service, service discovery."),(0,n.kt)("li",{parentName:"ul"},"Sender: Service request interface, the sender uses Sender to request service from the receiver."),(0,n.kt)("li",{parentName:"ul"},"Receiver: The service request receives the corresponding interface, and the receiver responds to the service through this interface."),(0,n.kt)("li",{parentName:"ul"},"Interceptor: Sender will pass the user's request to the interceptor. The interceptor intercepts the request and performs additional functional processing on the request. The broadcast interceptor is used to broadcast operations on the request, the retry interceptor is used to retry the processing of failed requests, and the cache interceptor is used to read and cache simple and unchanged requests. , And the default interceptor that provides the default implementation."),(0,n.kt)("li",{parentName:"ul"},"Decoder, Encoder: used for request encoding and decoding."),(0,n.kt)("li",{parentName:"ul"},"Feign: is a lightweight framework for http request calls, a declarative WebService client program, used for Linkis-RPC bottom communication."),(0,n.kt)("li",{parentName:"ul"},"Listener: monitor module, mainly used to monitor broadcast requests.")))}p.isMDXComponent=!0},75651:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/linkis-rpc-6f940d04ce7c039d0e8ca787d3bed98c.png"}}]);