"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[29473],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(t),s=a,d=g["".concat(c,".").concat(s)]||g[s]||m[s]||i;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},82460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={title:"EngineConnManager\u67b6\u6784",sidebar_position:2},l=void 0,o={unversionedId:"architecture/computation-governance-services/engine/engine-conn-manager",id:"version-1.1.2/architecture/computation-governance-services/engine/engine-conn-manager",title:"EngineConnManager\u67b6\u6784",description:"EngineConnManager\uff08ECM\uff09\uff1aEngineConn\u7684\u7ba1\u7406\u5668\uff0c\u63d0\u4f9b\u5f15\u64ce\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u540c\u65f6\u5411RM\u6c47\u62a5\u8d1f\u8f7d\u4fe1\u606f\u548c\u81ea\u8eab\u7684\u5065\u5eb7\u72b6\u51b5\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/architecture/computation-governance-services/engine/engine-conn-manager.md",sourceDirName:"architecture/computation-governance-services/engine",slug:"/architecture/computation-governance-services/engine/engine-conn-manager",permalink:"/zh-CN/docs/1.1.2/architecture/computation-governance-services/engine/engine-conn-manager",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/architecture/computation-governance-services/engine/engine-conn-manager.md",tags:[],version:"1.1.2",sidebarPosition:2,frontMatter:{title:"EngineConnManager\u67b6\u6784",sidebar_position:2},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"EngineConn\u67b6\u6784",permalink:"/zh-CN/docs/1.1.2/architecture/computation-governance-services/engine/engine-conn"},next:{title:"EngineConnPlugin\uff08ECP\uff09\u67b6\u6784",permalink:"/zh-CN/docs/1.1.2/architecture/computation-governance-services/engine/engine-conn-plugin"}},c={},p=[{value:"\u4e00\u3001ECM\u67b6\u6784",id:"\u4e00ecm\u67b6\u6784",level:3},{value:"\u4e8c\u3001\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd",id:"\u4e8c\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd",level:3}],u={toc:p},g="wrapper";function m(e){let{components:n,...i}=e;return(0,a.kt)(g,(0,r.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"EngineConnManager\uff08ECM\uff09\uff1aEngineConn\u7684\u7ba1\u7406\u5668\uff0c\u63d0\u4f9b\u5f15\u64ce\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u540c\u65f6\u5411RM\u6c47\u62a5\u8d1f\u8f7d\u4fe1\u606f\u548c\u81ea\u8eab\u7684\u5065\u5eb7\u72b6\u51b5\u3002"),(0,a.kt)("h3",{id:"\u4e00ecm\u67b6\u6784"},"\u4e00\u3001ECM\u67b6\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(82414).Z,width:"1006",height:"497"})),(0,a.kt)("h3",{id:"\u4e8c\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd"},"\u4e8c\u3001\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linkis-engineconn-linux-launch")),(0,a.kt)("p",null,"\u5f15\u64ce\u542f\u52a8\u5668\uff0c\u6838\u5fc3\u7c7b\u4e3aLinuxProcessEngineConnLauch\uff0c\u7528\u4e8e\u63d0\u4f9b\u6267\u884c\u547d\u4ee4\u7684\u6307\u4ee4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linkis-engineconn-manager-core")),(0,a.kt)("p",null,"ECM\u7684\u6838\u5fc3\u6a21\u5757\uff0c\u5305\u542bECM\u5065\u5eb7\u4e0a\u62a5\u3001EngineConn\u5065\u5eb7\u4e0a\u62a5\u529f\u80fd\u7684\u9876\u5c42\u63a5\u53e3\uff0c\u5b9a\u4e49\u4e86ECM\u670d\u52a1\u7684\u76f8\u5173\u6307\u6807\uff0c\u4ee5\u53ca\u6784\u9020EngineConn\u8fdb\u7a0b\u7684\u6838\u5fc3\u65b9\u6cd5\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u9876\u5c42\u63a5\u53e3/\u7c7b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConn"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u7684\u5c5e\u6027\uff0c\u5305\u542b\u7684\u65b9\u6cd5\u548c\u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnLaunch"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u7684\u542f\u52a8\u65b9\u6cd5\u548c\u505c\u6b62\u65b9\u6cd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMEvent"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86ECM\u76f8\u5173\u4e8b\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMEventListener"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86ECM\u76f8\u5173\u4e8b\u4ef6\u76d1\u542c\u5668")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMEventListenerBus"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86ECM\u7684\u76d1\u542c\u5668\u603b\u7ebf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMMetrics"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86ECM\u7684\u6307\u6807\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMHealthReport"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86ECM\u7684\u5065\u5eb7\u4e0a\u62a5\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NodeHealthReport"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u8282\u70b9\u7684\u5065\u5eb7\u4e0a\u62a5\u4fe1\u606f")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linkis-engineconn-manager-server")),(0,a.kt)("p",null,"ECM\u7684\u670d\u52a1\u7aef\uff0c\u5b9a\u4e49\u4e86ECM\u5065\u5eb7\u4fe1\u606f\u5904\u7406\u670d\u52a1\u3001ECM\u6307\u6807\u4fe1\u606f\u5904\u7406\u670d\u52a1\u3001ECM\u6ce8\u518c\u670d\u52a1\u3001EngineConn\u542f\u52a8\u670d\u52a1\u3001EngineConn\u505c\u6b62\u670d\u52a1\u3001EngineConn\u56de\u8c03\u670d\u52a1\u7b49\u9876\u5c42\u63a5\u53e3\u548c\u5b9e\u73b0\u7c7b\uff0c\u4e3b\u8981\u7528\u4e8eECM\u5bf9\u81ea\u5df1\u548cEngineConn\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\u4ee5\u53ca\u5065\u5eb7\u4fe1\u606f\u4e0a\u62a5\u3001\u53d1\u9001\u5fc3\u8df3\u7b49\u3002"),(0,a.kt)("p",null,"\u6a21\u5757\u4e2d\u7684\u6838\u5fc3Service\u548c\u529f\u80fd\u7b80\u4ecb\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3service"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnLaunchService"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u751f\u6210EngineConn\u548c\u542f\u52a8\u8fdb\u7a0b\u7684\u6838\u5fc3\u65b9\u6cd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BmlResourceLocallizationService"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5c06BML\u7684\u5f15\u64ce\u76f8\u5173\u8d44\u6e90\u4e0b\u8f7d\u5e76\u751f\u6210\u672c\u5730\u5316\u6587\u4ef6\u76ee\u5f55")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMHealthService"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5411AM\u5b9a\u65f6\u4e0a\u62a5\u81ea\u8eab\u7684\u5065\u5eb7\u5fc3\u8df3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMMetricsService"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5411AM\u5b9a\u65f6\u4e0a\u62a5\u81ea\u8eab\u7684\u6307\u6807\u72b6\u51b5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnKillSerivce"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u505c\u6b62\u5f15\u64ce\u7684\u76f8\u5173\u529f\u80fd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnListService"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u7f13\u5b58\u548c\u7ba1\u7406\u5f15\u64ce\u7684\u76f8\u5173\u529f\u80fd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnCallBackService"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u56de\u8c03\u5f15\u64ce\u7684\u529f\u80fd")))),(0,a.kt)("p",null,"ECM\u6784\u5efaEngineConn\u542f\u52a8\u6d41\u7a0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(68684).Z,width:"966",height:"475"})))}m.isMDXComponent=!0},82414:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/ecm-01-ce0cee2e82cc8824797b05bca5f23d1a.png"},68684:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/engineconn-01-800ae7ea60ebac53ede0003c9620891a.png"}}]);