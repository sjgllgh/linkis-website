"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[39976],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>g});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=n.createContext({}),k=function(t){var a=n.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},d=function(t){var a=k(t.components);return n.createElement(m.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),N=k(e),g=r,s=N["".concat(m,".").concat(g)]||N[g]||u[g]||l;return e?n.createElement(s,p(p({ref:a},d),{},{components:e})):n.createElement(s,p({ref:a},d))}));function g(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,p=new Array(l);p[0]=N;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var k=2;k<l;k++)p[k]=e[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},7073:(t,a,e)=>{e.r(a),e.d(a,{contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=e(87462),r=(e(67294),e(3905));const l={title:"Mdq Table Interface",sidebar_position:21},p=void 0,i={unversionedId:"api/http/linkis-ps-publicservice-api/mdq-table-interface-api",id:"api/http/linkis-ps-publicservice-api/mdq-table-interface-api",isDocsHomePage:!1,title:"Mdq Table Interface",description:"* MdqTableRestfulApi class *",source:"@site/docs/api/http/linkis-ps-publicservice-api/mdq-table-interface-api.md",sourceDirName:"api/http/linkis-ps-publicservice-api",slug:"/api/http/linkis-ps-publicservice-api/mdq-table-interface-api",permalink:"/docs/1.3.1/api/http/linkis-ps-publicservice-api/mdq-table-interface-api",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/api/http/linkis-ps-publicservice-api/mdq-table-interface-api.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"Mdq Table Interface",sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Linkis Error Codes",permalink:"/docs/1.3.1/api/http/linkis-ps-publicservice-api/link-error-code"},next:{title:"Global Variable API",permalink:"/docs/1.3.1/api/http/linkis-ps-publicservice-api/global-variable-api"}},m=[{value:"Activate table operations",id:"activate-table-operations",children:[]},{value:"Generate the DDL statement for the new library table",id:"generate-the-ddl-statement-for-the-new-library-table",children:[]},{value:"Get partition statistics",id:"get-partition-statistics",children:[]},{value:"Get table information",id:"get-table-information",children:[]},{value:"Get table field information",id:"get-table-field-information",children:[]},{value:"Get table statistics",id:"get-table-statistics",children:[]},{value:"Active ID",id:"active-id",children:[]}],k={toc:m};function d(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," MdqTableRestfulApi class ")),(0,r.kt)("h2",{id:"activate-table-operations"},"Activate table operations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/datasource/active")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"*/*")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),":",(0,r.kt)("p",null,"Activate table operation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tableId"),(0,r.kt)("td",{parentName:"tr",align:null},"Table ID"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"request url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,r.kt)("h2",{id:"generate-the-ddl-statement-for-the-new-library-table"},"Generate the DDL statement for the new library table"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/datasource/displaysql")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"*/*")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),":",(0,r.kt)("p",null,"Generate DDL statement for new library table")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"Table"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"201"),(0,r.kt)("td",{parentName:"tr",align:null},"Created"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"request url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,r.kt)("h2",{id:"get-partition-statistics"},"Get partition statistics"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/datasource/getPartitionStatisticInfo")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"*/*")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),":",(0,r.kt)("p",null,"Get partition statistics")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"Datasource"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partitionSort"),(0,r.kt)("td",{parentName:"tr",align:null},"Partition Sort"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tableName"),(0,r.kt)("td",{parentName:"tr",align:null},"table name"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partitionPath"),(0,r.kt)("td",{parentName:"tr",align:null},"partitionPath"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"request url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,r.kt)("h2",{id:"get-table-information"},"Get table information"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/datasource/getTableBaseInfo")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"*/*")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),":",(0,r.kt)("p",null,"Get table information")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"Datasource"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tableName"),(0,r.kt)("td",{parentName:"tr",align:null},"table name"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"request url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,r.kt)("h2",{id:"get-table-field-information"},"Get table field information"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/datasource/getTableFieldsInfo")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"*/*")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),":",(0,r.kt)("p",null,"Get table field information")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"Datasource"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tableName"),(0,r.kt)("td",{parentName:"tr",align:null},"table name"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"request url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,r.kt)("h2",{id:"get-table-statistics"},"Get table statistics"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/datasource/getTableStatisticInfo")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"*/*")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),":",(0,r.kt)("p",null,"Get table statistics")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"Datasource"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,r.kt)("td",{parentName:"tr",align:null},"page number"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"page size"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partitionSort"),(0,r.kt)("td",{parentName:"tr",align:null},"Partition Sort"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tableName"),(0,r.kt)("td",{parentName:"tr",align:null},"table name"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"request url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,r.kt)("h2",{id:"active-id"},"Active ID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/datasource/persistTable")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"*/*")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),":",(0,r.kt)("p",null,"Activated logo")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"Table"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"201"),(0,r.kt)("td",{parentName:"tr",align:null},"Created"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"request url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')))}d.isMDXComponent=!0}}]);