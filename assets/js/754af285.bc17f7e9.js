"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[29566],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},56607:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Global History",sidebar_position:1},o=void 0,s={unversionedId:"user-guide/control-panel/global-history",id:"user-guide/control-panel/global-history",title:"Global History",description:"1. Historical tasks",source:"@site/docs/user-guide/control-panel/global-history.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/global-history",permalink:"/docs/1.3.2/user-guide/control-panel/global-history",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/user-guide/control-panel/global-history.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Global History",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Description of The Main Interface of The Management Console",permalink:"/docs/1.3.2/user-guide/control-panel/overview"},next:{title:"Resource Management",permalink:"/docs/1.3.2/user-guide/control-panel/resource-manager"}},l={},c=[{value:"1. Historical tasks",id:"1-historical-tasks",level:2},{value:"2. Task details",id:"2-task-details",level:2},{value:"3. Admin view",id:"3-admin-view",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-historical-tasks"},"1. Historical tasks"),(0,a.kt)("p",null,"The global history interface provides the user's own linkis task submission record, and the creation time, execution statement, and status of each task can be displayed here. And you can filter based on keywords such as task ID, time, engine, status, etc."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"  ",(0,a.kt)("img",{src:r(51220).Z,width:"1260",height:"693"}))),(0,a.kt)("h2",{id:"2-task-details"},"2. Task details"),(0,a.kt)("p",null,"Click the button on the left to view the task execution log, task details and task results. If the task execution fails, you can troubleshoot the problem through the task log.\n",(0,a.kt)("img",{alt:"../images/image2.png",src:r(75711).Z,width:"1258",height:"706"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"./media/image3.png",src:r(7262).Z,width:"1259",height:"707"})),(0,a.kt)("h2",{id:"3-admin-view"},"3. Admin view"),(0,a.kt)("p",null,"For linkis computing management platform administrators, administrators can view all users' historical tasks by clicking the switch administrator view on the page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"./media/image4.png",src:r(10329).Z,width:"1260",height:"724"})))}d.isMDXComponent=!0},10329:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/administrator-view-feec06bbc06e43b7fd4bf71151ed33f6.png"},51220:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/global-history-interface-98e324e7c9e2b871d679525a4c701f55.png"},75711:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/history-query-button-2ebb23cba0776b40e83cedb50c55fba2.png"},7262:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/task-execution-log-8e0b41527a649bfae3aae75b731b012e.png"}}]);