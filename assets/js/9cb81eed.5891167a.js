"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[45936],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>k});var i=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=i.createContext({}),l=function(e){var n=i.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=l(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=t,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?i.createElement(k,c(c({ref:n},u),{},{components:r})):i.createElement(k,c({ref:n},u))}));function k(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[d]="string"==typeof e?e:t,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31521:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=r(87462),t=(r(67294),r(3905));const o={title:"Source Code Directory Structure",sidebar_position:5},c="Source Code Directory Structure",a={unversionedId:"deployment/sourcecode-hierarchical-structure",id:"version-1.1.2/deployment/sourcecode-hierarchical-structure",title:"Source Code Directory Structure",description:"Linkis source code hierarchical directory structure description, if you want to learn more about Linkis modules, please check Linkis related architecture design",source:"@site/versioned_docs/version-1.1.2/deployment/sourcecode-hierarchical-structure.md",sourceDirName:"deployment",slug:"/deployment/sourcecode-hierarchical-structure",permalink:"/docs/1.1.2/deployment/sourcecode-hierarchical-structure",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.1.2/deployment/sourcecode-hierarchical-structure.md",tags:[],version:"1.1.2",sidebarPosition:5,frontMatter:{title:"Source Code Directory Structure",sidebar_position:5},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"installation package directory structure",permalink:"/docs/1.1.2/deployment/unpack-hierarchical-structure"},next:{title:"Linkis Console Deployment",permalink:"/docs/1.1.2/deployment/web-install"}},s={},l=[],u={toc:l},d="wrapper";function p(e){let{components:n,...r}=e;return(0,t.kt)(d,(0,i.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"source-code-directory-structure"},"Source Code Directory Structure"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Linkis source code hierarchical directory structure description, if you want to learn more about Linkis modules, please check ",(0,t.kt)("a",{parentName:"p",href:"/docs/1.1.2/architecture/overview"},"Linkis related architecture design"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},"|-- assembly-combined-package //Compile the module of the entire project\n|        |-- assembly-combined\n|        |-- bin\n|        |-- deploy-config\n|        |-- src\n|-- linkis-commons //Core abstraction, which contains all common modules\n|        |-- linkis-common //Common module, built-in many common tools\n|        |-- linkis-hadoop-common\n|        |-- linkis-httpclient //Java SDK top-level interface\n|        |-- linkis-message-scheduler\n|        |-- linkis-module\n|        |-- linkis-mybatis //SpringCloud's Mybatis module\n|        |-- linkis-protocol\n|        |-- linkis-rpc //RPC module, complex two-way communication based on Feign\n|        |-- linkis-scheduler //General scheduling module\n|        |-- linkis-storage\n|        |\n|-- linkis-computation-governance //computing governance service\n|        |-- linkis-client //Java SDK, users can directly access Linkis through Client\n|        |-- linkis-computation-governance-common\n|        |-- linkis-engineconn\n|        |-- linkis-engineconn-manager\n|        |-- linkis-entrance //General low-level entrance module\n|        |-- linkis-entrance-client\n|        |-- linkis-jdbc-driver\n|        |-- linkis-manager\n|\n|-- linkis-engineconn-plugins\n|        |-- engineconn-plugins\n|        |-- linkis-engineconn-plugin-framework\n|\n|-- linkis-extensions\n|        |-- linkis-io-file-client\n|-- linkis-orchestrator\n|        |-- linkis-code-orchestrator\n|        |-- linkis-computation-orchestrator\n|        |-- linkis-orchestrator-core\n|        |-- plugin\n|-- linkis-public-enhancements //Public enhancement services\n|        |-- linkis-bml // Material library\n|        |-- linkis-context-service //Unified context\n|        |-- linkis-datasource //Data source service\n|        |-- linkis-publicservice //Public Service\n|-- linkis-spring-cloud-services //Microservice governance\n|        |-- linkis-service-discovery\n|        |-- linkis-service-gateway //Gateway\n|-- db //Database information\n|-- license-doc //license details\n|        |-- license //The license of the background project\n|         - ui-license //License of linkis management desk\n|-- tool //Tool script\n|        |-- check.sh\n|        |-- dependencies\n|\n|-- web //Management desk code of linkis\n|\n|-- scalastyle-config.xml //Scala code format check configuration file\n|-- CONTRIBUTING.md\n|-- CONTRIBUTING_CN.md\n|-- DISCLAIMER-WIP\n|-- LICENSE //LICENSE of the project source code\n|-- LICENSE-binary //LICENSE of binary package\n|-- LICENSE-binary-ui //LICENSE of the front-end compiled package\n|-- NOTICE //NOTICE of project source code\n|-- NOTICE-binary // NOTICE of binary package\n|-- NOTICE-binary-ui // NOTICE of front-end binary package\n|-- licenses-binary The detailed dependent license file of the binary package\n|-- licenses-binary-ui //The license file that the front-end compilation package depends on in detail\n|-- README.md\n|-- README_CN.md\n")))}p.isMDXComponent=!0}}]);