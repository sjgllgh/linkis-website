"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[56264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,d=c["".concat(l,".").concat(k)]||c[k]||m[k]||i;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},39700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Task Submission and Execution Rest Api",sidebar_position:2},s="Linkis Task submission and execution Rest API document",o={unversionedId:"api/linkis-task-operator",id:"version-1.1.0/api/linkis-task-operator",title:"Task Submission and Execution Rest Api",description:"- The return of the Linkis Restful interface follows the following standard return format:",source:"@site/versioned_docs/version-1.1.0/api/linkis-task-operator.md",sourceDirName:"api",slug:"/api/linkis-task-operator",permalink:"/docs/1.1.0/api/linkis-task-operator",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.1.0/api/linkis-task-operator.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{title:"Task Submission and Execution Rest Api",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Task Submission And Execution Of JDBC API",permalink:"/docs/1.1.0/api/jdbc-api"},next:{title:"DataSourceAdminRestfulApi",permalink:"/docs/1.1.0/api/http/data-source-manager-api"}},l={},p=[{value:"1. Submit for Execution",id:"1-submit-for-execution",level:3},{value:"2. Get Status",id:"2-get-status",level:3},{value:"3. Get Logs",id:"3-get-logs",level:3},{value:"4. Get Progress",id:"4-get-progress",level:3},{value:"5. Kill Task",id:"5-kill-task",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linkis-task-submission-and-execution-rest-api-document"},"Linkis Task submission and execution Rest API document"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The return of the Linkis Restful interface follows the following standard return format:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "",\n "status": 0,\n "message": "",\n "data": {}\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Convention"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"method: Returns the requested Restful API URI, which is mainly used in WebSocket mode."),(0,r.kt)("li",{parentName:"ul"},"status: return status information, where: -1 means no login, 0 means success, 1 means error, 2 means verification failed, 3 means no access to the interface."),(0,r.kt)("li",{parentName:"ul"},"data: return specific data."),(0,r.kt)("li",{parentName:"ul"},"message: return the requested prompt message. If the status is not 0, the message returned is an error message, and the data may have a stack field, which returns specific stack information.")),(0,r.kt)("p",null,"For more information about the Linkis Restful interface specification, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.3.1/development/development-specification/api"},"Linkis Restful Interface Specification")),(0,r.kt)("h3",{id:"1-submit-for-execution"},"1. Submit for Execution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/execute"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "executeApplicationName": "hive", //Engine type\n    "requestApplicationName": "dss", //Client service type\n    "executionCode": "show tables",\n    "params": {"variable": {}, "configuration": {}},\n    "runType": "hql", //The type of script to run\n    "source": {"scriptPath":"file:///tmp/hadoop/1.hql"}\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/submit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "executionContent": {"code": "show tables", "runType": "sql"},\n    "params": {"variable": {}, "configuration": {}},\n    "source": {"scriptPath": "file:///mnt/bdp/hadoop/1.hql"},\n    "labels": {\n        "engineType": "spark-2.4.3",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,r.kt)("p",null,"-Return to example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/execute",\n "status": 0,\n "message": "Request executed successfully",\n "data": {\n   "execID": "030418IDEhivelocalhost010004:10087IDE_hadoop_21",\n   "taskID": "123"\n }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"execID is the unique identification execution ID generated for the task after the user task is submitted to Linkis. It is of type String. This ID is only useful when the task is running, similar to the concept of PID. The design of ExecID is ",(0,r.kt)("inlineCode",{parentName:"p"},"(requestApplicationName length)(executeAppName length)(Instance length)${requestApplicationName}${executeApplicationName}${entranceInstance information ip+port}${requestApplicationName}_${umUser}_${index}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"taskID is the unique ID that represents the task submitted by the user. This ID is generated by the database self-increment and is of Long type"))),(0,r.kt)("h3",{id:"2-get-status"},"2. Get Status"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/status"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Return to example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/status",\n "status": 0,\n "message": "Get status successful",\n "data": {\n   "execID": "${execID}",\n   "status": "Running"\n }\n}\n')),(0,r.kt)("h3",{id:"3-get-logs"},"3. Get Logs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/log?fromLine=${fromLine}&size=${size}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The request parameter fromLine refers to the number of lines from which to get, and size refers to the number of lines of logs that this request gets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Return example, where the returned fromLine needs to be used as a parameter for the next request of this interface"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/${execID}/log",\n  "status": 0,\n  "message": "Return log information",\n  "data": {\n    "execID": "${execID}",\n  "log": ["error log","warn log","info log", "all log"],\n  "fromLine": 56\n  }\n}\n')),(0,r.kt)("h3",{id:"4-get-progress"},"4. Get Progress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/progress"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Return to example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/{execID}/progress",\n  "status": 0,\n  "message": "Return progress information",\n  "data": {\n    "execID": "${execID}",\n    "progress": 0.2,\n    "progressInfo": [\n        {\n        "id": "job-1",\n        "succeedTasks": 2,\n        "failedTasks": 0,\n        "runningTasks": 5,\n        "totalTasks": 10\n        },\n        {\n        "id": "job-2",\n        "succeedTasks": 5,\n        "failedTasks": 0,\n        "runningTasks": 5,\n        "totalTasks": 10\n        }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"5-kill-task"},"5. Kill Task"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/kill"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/kill",\n "status": 0,\n "message": "OK",\n "data": {\n   "execID":"${execID}"\n  }\n}\n')))}m.isMDXComponent=!0}}]);