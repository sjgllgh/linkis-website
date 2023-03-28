"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[41884],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),m=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=m(a),g=r,k=u["".concat(s,".").concat(g)]||u[g]||o[g]||l;return a?n.createElement(k,p(p({ref:e},d),{},{components:a})):n.createElement(k,p({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6412:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"Metadata Query Api",sidebar_position:3},p="MetadataCoreRestful",i={unversionedId:"api/http/linkis-ps-publicservice-api/metadatamanager-api",id:"version-1.2.0/api/http/linkis-ps-publicservice-api/metadatamanager-api",title:"Metadata Query Api",description:"getColumns",source:"@site/versioned_docs/version-1.2.0/api/http/linkis-ps-publicservice-api/metadatamanager-api.md",sourceDirName:"api/http/linkis-ps-publicservice-api",slug:"/api/http/linkis-ps-publicservice-api/metadatamanager-api",permalink:"/docs/1.2.0/api/http/linkis-ps-publicservice-api/metadatamanager-api",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.2.0/api/http/linkis-ps-publicservice-api/metadatamanager-api.md",tags:[],version:"1.2.0",sidebarPosition:3,frontMatter:{title:"Metadata Query Api",sidebar_position:3},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"History Job Interface",permalink:"/docs/1.2.0/api/http/linkis-ps-publicservice-api/jobhistory-api"},next:{title:"Metadata Query Api",permalink:"/docs/1.2.0/api/http/linkis-ps-publicservice-api/metadataquery-api"}},s={},m=[{value:"getColumns",id:"getcolumns",level:2},{value:"getDatabases",id:"getdatabases",level:2},{value:"getPartitions",id:"getpartitions",level:2},{value:"getTableProps",id:"gettableprops",level:2}],d={toc:m},u="wrapper";function o(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metadatacorerestful"},"MetadataCoreRestful"),(0,r.kt)("h2",{id:"getcolumns"},"getColumns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/metadatamanager/columns/{dataSourceId}/db/{database}/table/{table}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),": Get the column information of the data table"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "columns": [\n            {\n                "index": 1,\n                "primaryKey": true,\n                "name": "id",\n                "type": "INT"\n            },\n            {\n                "index": 2,\n                "primaryKey": false,\n                "name": "datasource_name",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 3,\n                "primaryKey": false,\n                "name": "datasource_desc",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 4,\n                "primaryKey": false,\n                "name": "datasource_type_id",\n                "type": "INT"\n            },\n            {\n                "index": 5,\n                "primaryKey": false,\n                "name": "create_identify",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 6,\n                "primaryKey": false,\n                "name": "create_system",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 7,\n                "primaryKey": false,\n                "name": "parameter",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 8,\n                "primaryKey": false,\n                "name": "create_time",\n                "type": "DATETIME"\n            },\n            {\n                "index": 9,\n                "primaryKey": false,\n                "name": "modify_time",\n                "type": "DATETIME"\n            },\n            {\n                "index": 10,\n                "primaryKey": false,\n                "name": "create_user",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 11,\n                "primaryKey": false,\n                "name": "modify_user",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 12,\n                "primaryKey": false,\n                "name": "labels",\n                "type": "VARCHAR"\n            },\n            {\n                "index": 13,\n                "primaryKey": false,\n                "name": "version_id",\n                "type": "INT"\n            },\n            {\n                "index": 14,\n                "primaryKey": false,\n                "name": "expire",\n                "type": "TINYINT"\n            },\n            {\n                "index": 15,\n                "primaryKey": false,\n                "name": "published_version_id",\n                "type": "INT"\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"getdatabases"},"getDatabases"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/metadatamanager/dbs/{dataSourceId}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),": Get the list of database names of the data source"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "dbs": [\n            "information_schema",\n            "linkis",\n            "linkis_sit"\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"getpartitions"},"getPartitions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/metadatamanager/partitions/{dataSourceId}/db/{database}/table/{table}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"traverse"),(0,r.kt)("td",{parentName:"tr",align:null},"traverse"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "props": {\n            "partKeys": [\n                "ds"\n            ],\n            "root": {}\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"gettableprops"},"getTableProps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/metadatamanager/props/{dataSourceId}/db/{database}/table/{table}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"dataSourceId"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "props": {\n            "skip.header.line.count": "1",\n            "columns.types": "int:int:string:string:string:string:string:string:string:string:string:string:string:string:string:string:string:string:string:string",\n            "columns": "id,age,job,marital,education,default,balance,housing,loan,contact,day,month,duration,campaign,pdays,previous,poutcome,y",\n            "field.delim": ",",\n            "transient_lastDdlTime": "1646732554",\n            "partition_columns.types": "string",\n            "columns.comments": "\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000\\u0000",\n            "bucket_count": "-1",\n            "serialization.ddl": "struct demo_data { i32 id, i32 age, string job, string marital, string education, string default, string balance, string housing, string loan, string contact, string day, string month, string duration, string campaign, string pdays, string previous, string poutcome, string y}",\n            "file.outputformat": "org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat",\n            "partition_columns": "ds",\n            "colelction.delim": "-",\n            "serialization.lib": "org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe",\n            "name": "dss_autotest.demo_data",\n            "location": "hdfs://bdpdev01/user/hive/warehouse/hadoop/dss_autotest.db/demo_data",\n            "mapkey.delim": ":",\n            "file.inputformat": "org.apache.hadoop.mapred.TextInputFormat",\n            "serialization.format": ",",\n            "column.name.delimiter": ","\n        }\n    }\n}\n')))}o.isMDXComponent=!0}}]);