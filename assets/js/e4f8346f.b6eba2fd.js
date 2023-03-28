"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[8663],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},o="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),o=p(n),k=r,g=o["".concat(m,".").concat(k)]||o[k]||s[k]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var u={};for(var m in e)hasOwnProperty.call(e,m)&&(u[m]=e[m]);u.originalType=t,u[o]="string"==typeof t?t:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},58003:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Linkis built-in time variable introduction",sidebar_position:7},i=void 0,u={unversionedId:"user-guide/using_dynamic_variables",id:"version-1.2.0/user-guide/using_dynamic_variables",title:"Linkis built-in time variable introduction",description:"1. General",source:"@site/versioned_docs/version-1.2.0/user-guide/using_dynamic_variables.md",sourceDirName:"user-guide",slug:"/user-guide/using_dynamic_variables",permalink:"/docs/1.2.0/user-guide/using_dynamic_variables",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.2.0/user-guide/using_dynamic_variables.md",tags:[],version:"1.2.0",sidebarPosition:7,frontMatter:{title:"Linkis built-in time variable introduction",sidebar_position:7},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"DataSource Client SDK",permalink:"/docs/1.2.0/user-guide/linkis-datasource-client"},next:{title:"Overview",permalink:"/docs/1.2.0/engine-usage/overview"}},m={},p=[{value:"1. General",id:"1-general",level:2},{value:"Requirements Background",id:"requirements-background",level:3},{value:"Target",id:"target",level:3},{value:"2. Overall Design",id:"2-overall-design",level:2},{value:"3. Function introduction",id:"3-function-introduction",level:2},{value:"3.1 Examples of built-in variables",id:"31-examples-of-built-in-variables",level:3},{value:"3.2 Custom Variable Usage Example",id:"32-custom-variable-usage-example",level:3}],d={toc:p},o="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(o,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-general"},"1. General"),(0,r.kt)("h3",{id:"requirements-background"},"Requirements Background"),(0,r.kt)("p",null,"Users hope that when writing code, the time format requirements are ever-changing, and the existing ",(0,r.kt)("a",{parentName:"p",href:"https://linkis.apache.org/docs/latest/architecture/commons/variable/"},"Linkis custom variables")," is currently not enough to support these requirements. In addition, some of the existing time operation -1 means minus one month, and some minus one day, which is easy for users to confuse"),(0,r.kt)("h3",{id:"target"},"Target"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Other date built-in variables are calculated relative to run_date"),(0,r.kt)("li",{parentName:"ul"},"Support Pattern format time and users can specify at will"),(0,r.kt)("li",{parentName:"ul"},"Support \xb1y/\xb1M/\xb1d/\xb1H etc.")),(0,r.kt)("p",null,"Pattern format comparison table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Letter"),(0,r.kt)("th",{parentName:"tr",align:null},"Date or Time Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Presentation"),(0,r.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"G"),(0,r.kt)("td",{parentName:"tr",align:null},"Era designator"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"AD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"Year"),(0,r.kt)("td",{parentName:"tr",align:null},"Year"),(0,r.kt)("td",{parentName:"tr",align:null},"1996; 96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Week year"),(0,r.kt)("td",{parentName:"tr",align:null},"Year"),(0,r.kt)("td",{parentName:"tr",align:null},"2009; 09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"Month in year"),(0,r.kt)("td",{parentName:"tr",align:null},"Month"),(0,r.kt)("td",{parentName:"tr",align:null},"July; Jul; 07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"w"),(0,r.kt)("td",{parentName:"tr",align:null},"Week in year"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"27")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"W"),(0,r.kt)("td",{parentName:"tr",align:null},"Week in month"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"Day in year"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"189")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"Day in month"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"F"),(0,r.kt)("td",{parentName:"tr",align:null},"Day of week in month"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E"),(0,r.kt)("td",{parentName:"tr",align:null},"Day name in week"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Tuesday; Tue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"Day number of week (1 = Monday, \u2026, 7 = Sunday)"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"Am/pm marker"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"PM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"H"),(0,r.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"k"),(0,r.kt)("td",{parentName:"tr",align:null},"Hour in day (1-24)"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"24")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"K"),(0,r.kt)("td",{parentName:"tr",align:null},"Hour in am/pm (0-11)"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"h"),(0,r.kt)("td",{parentName:"tr",align:null},"Hour in am/pm (1-12)"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"m"),(0,r.kt)("td",{parentName:"tr",align:null},"Minute in hour"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s"),(0,r.kt)("td",{parentName:"tr",align:null},"Second in minute"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S"),(0,r.kt)("td",{parentName:"tr",align:null},"Millisecond"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"978")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"z"),(0,r.kt)("td",{parentName:"tr",align:null},"Time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"General time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"Pacific Standard Time; PST; GMT-08:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z"),(0,r.kt)("td",{parentName:"tr",align:null},"Time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"RFC 822 time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"-0800")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"Time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"ISO 8601 time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"-08; -0800; -08:00")))),(0,r.kt)("h2",{id:"2-overall-design"},"2. Overall Design"),(0,r.kt)("p",null,"The overall design and technical architecture refer to ",(0,r.kt)("a",{parentName:"p",href:"https://linkis.apache.org/docs/latest/architecture/commons/variable/"},"Linkis Custom Variables")),(0,r.kt)("h2",{id:"3-function-introduction"},"3. Function introduction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The variable types supported by Linkis are divided into custom variables (not to be repeated) and system built-in variables. The custom variable date supports +-."),(0,r.kt)("li",{parentName:"ul"},"Among them, +- is to perform operation on the built-in parameter run_date of linkis, and then replace the pattern field before %. Non-pattern characters do not support operation replacement.")),(0,r.kt)("h3",{id:"31-examples-of-built-in-variables"},"3.1 Examples of built-in variables"),(0,r.kt)("p",null,"You can define parameters that need to be dynamically rendered according to your own preferences/business actual situation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"variable"),(0,r.kt)("th",{parentName:"tr",align:null},"result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyy-01-01}"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-01-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyy-01-01%-2y}"),(0,r.kt)("td",{parentName:"tr",align:null},"2019-01-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyy-MM-01%-2M}"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-02-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyy-MM-dd%-2d}"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-03-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyy MM ----- HH%-1H}"),(0,r.kt)("td",{parentName:"tr",align:null},"2021 04 ----- 14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyyMMdd%-1d}"),(0,r.kt)("td",{parentName:"tr",align:null},"20210401")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyyMM01%-1M}"),(0,r.kt)("td",{parentName:"tr",align:null},"20210301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{HH%-1H}"),(0,r.kt)("td",{parentName:"tr",align:null},"14")))),(0,r.kt)("h3",{id:"32-custom-variable-usage-example"},"3.2 Custom Variable Usage Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example 1: sql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM hive.tmp.fund_nav_histories\nWHERE dt <= DATE_FORMAT(DATE_ADD('day', -1, DATE(Date_parse('&{yyyyMMdd%-1d}', '%Y%m%d'))), '%Y%m%d')\n")),(0,r.kt)("p",null,"after rendering"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM hive.tmp.fund_nav_histories\nWHERE dt <= DATE_FORMAT(DATE_ADD('day', -1, DATE(Date_parse('20220705', '%Y%m%d'))), '%Y%m%d')\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example 2: shell")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"aws s3 ls s3://***/ads/tmp/dws_member_active_detail_d_20210601_20211231/pt=&{yyyyMMdd%-1d}/\n")),(0,r.kt)("p",null,"after rendering"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"aws s3 ls s3://***/ads/tmp/dws_member_active_detail_d_20210601_20211231/pt=20220705/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example 3: datax json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "job": {\n    "setting": {\n      "speed": {\n        "channel": 1\n      }\n    },\n    "content": [\n      {\n        "reader": {\n          "name": "s3reader",\n          "parameter": {\n            "bucket": "****************",\n            "path": [\n              "ads/tmp/ccass_tm_announcements/&{yyyyMMdd%-1d}/"\n            ],\n            "stored": "parquet",\n            "compression": "NONE",\n            "column": [\n              {\n                "index": 0,\n                "type": "int"\n              },\n              {\n                "index": 1,\n                "type": "string",\n                "constant": "&{yyyyMMdd%-1d}"\n              }\n            ]\n          }\n        },\n        "writer": {\n          "name": "streamwriter",\n          "parameter": {\n            "print": true\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"after rendering"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "job": {\n    "setting": {\n      "speed": {\n        "channel": 1\n      }\n    },\n    "content": [\n      {\n        "reader": {\n          "name": "s3reader",\n          "parameter": {\n            "bucket": "****************",\n            "path": [\n              "ads/tmp/ccass_tm_announcements/20220705/"\n            ],\n            "stored": "parquet",\n            "compression": "NONE",\n            "column": [\n              {\n                "index": 0,\n                "type": "int"\n              },\n              {\n                "index": 1,\n                "type": "string",\n                "constant": "20220705"\n              }\n            ]\n          }\n        },\n        "writer": {\n          "name": "streamwriter",\n          "parameter": {\n            "print": true\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example 4: python")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(&{yyyyMMdd%-1d})\n")),(0,r.kt)("p",null,"after rendering"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," 20220705\n")))}s.isMDXComponent=!0}}]);