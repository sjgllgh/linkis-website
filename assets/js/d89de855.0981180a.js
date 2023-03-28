"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7058],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>k});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(i),m=a,k=c["".concat(s,".").concat(m)]||c[m]||h[m]||l;return i?n.createElement(k,r(r({ref:t},u),{},{components:i})):n.createElement(k,r({ref:t},u))}));function k(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},61687:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const l={title:"Release Notes 1.1.2",sidebar_position:6},r=void 0,o={unversionedId:"release-notes-1.1.2",id:"release-notes-1.1.2",title:"Release Notes 1.1.2",description:"Apache Linkis 1.1.2 includes all of Project Linkis-1.1.2.",source:"@site/download/release-notes-1.1.2.md",sourceDirName:".",slug:"/release-notes-1.1.2",permalink:"/download/release-notes-1.1.2",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/download/release-notes-1.1.2.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Release Notes 1.1.2",sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Release Notes 1.1.3",permalink:"/download/release-notes-1.1.3"},next:{title:"Release Notes 1.1.1",permalink:"/download/release-notes-1.1.1"}},s={},p=[{value:"New Feature",id:"new-feature",level:2},{value:"Enhancement",id:"enhancement",level:2},{value:"Bugs Fix",id:"bugs-fix",level:2},{value:"Security related",id:"security-related",level:2},{value:"Dependency changes",id:"dependency-changes",level:2},{value:"Thanks",id:"thanks",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache Linkis 1.1.2 includes all of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis/projects/20"},"Project Linkis-1.1.2"),"."),(0,a.kt)("p",null,"This release mainly supports simplified deployment in an environment without HDFS (supports some engines), which is convenient for more lightweight learning, use and debugging; new support for data migration tool Sqoop engine; exception handling log optimization; some security vulnerabilities Component upgrades, etc.; fix known bugs reported by the community"),(0,a.kt)("p",null,"The main functions are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supports simplified deployment in an environment without HDFS (supports some engines), which is convenient for more lightweight learning, use and debugging"),(0,a.kt)("li",{parentName:"ul"},"Added support for data migration tool Sqoop engine"),(0,a.kt)("li",{parentName:"ul"},"Optimize logs, etc. to improve the efficiency of troubleshooting"),(0,a.kt)("li",{parentName:"ul"},"Fix the security issues of interfaces such as user unauthorized access"),(0,a.kt)("li",{parentName:"ul"},"Some dependency package upgrades and community-known bug fixes")),(0,a.kt)("p",null,"Abbreviations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"COMMON: Linkis Common"),(0,a.kt)("li",{parentName:"ul"},"EC: Engineconn"),(0,a.kt)("li",{parentName:"ul"},"ECM: EngineConnManager"),(0,a.kt)("li",{parentName:"ul"},"ECP: EngineConnPlugin"),(0,a.kt)("li",{parentName:"ul"},"DMS: Data Source Manager Service"),(0,a.kt)("li",{parentName:"ul"},"MDS: MetaData Manager Service"),(0,a.kt)("li",{parentName:"ul"},"LM: Linkis Manager"),(0,a.kt)("li",{parentName:"ul"},"PS: Linkis Public Service"),(0,a.kt)("li",{parentName:"ul"},"PE: Linkis Public Enhancement"),(0,a.kt)("li",{parentName:"ul"},"RPC: Linkis Common RPC"),(0,a.kt)("li",{parentName:"ul"},"CG: Linkis Computation Governance"),(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"new-feature"},"New Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[","Deployment]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1804"},"[Linkis-1804,1811,1841,1843,1846,1933]")," Support for downsizing without HDFS Deployment (supports some engines), which is convenient for more lightweight learning, use and debugging."),(0,a.kt)("li",{parentName:"ul"},"[","PS]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1949"},"[Linkis-1949]")," Add the list interface (/listundone) of unfinished jobs, and optimize query performance by timing scheduling"),(0,a.kt)("li",{parentName:"ul"},"[","BML]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1843"},"[Linkis-1811,1843]")," BML material service adds support for local file system storage mode deployment"),(0,a.kt)("li",{parentName:"ul"},"[","Common]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1887"},"[Linkis-1887]")," RPC module Sender supports modifying parameters such as load balancing Ribbon"),(0,a.kt)("li",{parentName:"ul"},"[","Common]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/2059"},"[Linkis-2059]")," use task task id as trace id in logs"),(0,a.kt)("li",{parentName:"ul"},"[","EC]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1971"},"[Linkis-1971]")," EC AsyncExecutor supports setting the number of parallel Job Groups"),(0,a.kt)("li",{parentName:"ul"},"[","Engine]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2109"},"[Linkis-2109]")," Added support for data migration tool Sqoop engine")),(0,a.kt)("h2",{id:"enhancement"},"Enhancement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[","ECP]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/2074"},"[Linkis-2074]")," Flink engine supports custom configuration"),(0,a.kt)("li",{parentName:"ul"},"[","Deployment]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1841"},"[Linkis-1841]")," Support user deployment to disable Spark/Hive/HDFS environment detection"),(0,a.kt)("li",{parentName:"ul"},"[","Deployment]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1989"},"[Linkis-1971]")," Fix the problem of automatically getting ip error when deploying on multiple NIC machines"),(0,a.kt)("li",{parentName:"ul"},"[","Entrance]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1941"},"[Linkis-1941]")," Entrance supports passing raw jobId to EngineConn and LinkisManager"),(0,a.kt)("li",{parentName:"ul"},"[","Entrance]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/2045"},"[Linkis-2045]")," Refactor the matching relationship between script type and run type in EntranceInterceptor implementation class"),(0,a.kt)("li",{parentName:"ul"},"[","RPC]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1903/files"},"[Linkis-1903]")," Modify the exception handling logic of the RPC module to transparently transmit the original error message of the EngineConnPlugin exception"),(0,a.kt)("li",{parentName:"ul"},"[","RPC]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1905"},"[Linkis-1905]")," Add parameters to support passing LoadBalancer parameters, such as Ribbon"),(0,a.kt)("li",{parentName:"ul"},"[","Orchestrator]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1937"},"[Linkis-1937]")," The orchestrator task scheduler creator configuration parameter supports configuring multiple creator values"),(0,a.kt)("li",{parentName:"ul"},"[","PE][",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1959"},"Linkis-1959")," ContextService adds necessary log printing to facilitate error troubleshooting"),(0,a.kt)("li",{parentName:"ul"},"[","EC]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1942"},"[Linkis-1942]")," EC supports inserting taskID into the conf of the underlying engine, which is convenient for task bloodline analysis Associated with a specific linkis task"),(0,a.kt)("li",{parentName:"ul"},"[","EC]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1973"},"[Linkis-1973]")," The execution error log acquisition method of Task is changed from cat to tail -1000 to control the number of logs and avoid Load large files in full"),(0,a.kt)("li",{parentName:"ul"},"[","CG,PE]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2014"},"[Linkis-2014]")," Add configuration add/get/delete, optimize synchronization lock"),(0,a.kt)("li",{parentName:"ul"},"[","Common]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2016"},"[Linkis-2016]")," Adjust the use of cglib dependencies, replace cglib dependencies with spring built-in cglib"),(0,a.kt)("li",{parentName:"ul"},"[","Gateway]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/issues/2071"},"[Linkis-2071]")," Add GatewayURL attribute value to HTTP request Header")),(0,a.kt)("h2",{id:"bugs-fix"},"Bugs Fix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[","Engine]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1931"},"[Linkis-1931]")," Fix Python error loading is the function of Pyspark, not the function problem of stand-alone Python itself"),(0,a.kt)("li",{parentName:"ul"},"[","Deployment]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1853"},"[Linkis-1853]")," Fix the problem of DDL error during installation initialization"),(0,a.kt)("li",{parentName:"ul"},"[","UDF]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1893"},"[Linkis-1893]")," Add user permission check for udf related interfaces"),(0,a.kt)("li",{parentName:"ul"},"[","EC]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1933"},"[Linkis-1933]")," Increase the write permission of resultSet for users who are not in the deploy user group to execute jobs"),(0,a.kt)("li",{parentName:"ul"},"[","EC]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1846"},"[Linkis-1846]")," Fix ResultSet configuration local path is invalid"),(0,a.kt)("li",{parentName:"ul"},"[","EC]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1966"},"[Linkis-1966]")," Replace System.ev with System.properties"),(0,a.kt)("li",{parentName:"ul"},"[","EC-Python]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2131"},"[Linkis-2131]")," Fix Python engine exception caused by pandas"),(0,a.kt)("li",{parentName:"ul"},"[","PS]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1840"},"[Linkis-1840]")," When downloading data in csv format, add flexible options to prevent data format disorder"),(0,a.kt)("li",{parentName:"ul"},"[","Orchestrator]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1992"},"[Linkis-1992]")," fix concurrency issue with Orchestrator Reheater module"),(0,a.kt)("li",{parentName:"ul"},"[","PE]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2032"},"[Linkis-2032]")," The configuration interface is optimized. When obtaining the configuration parameters of the Label, modify it to directly obtain the Key-value right"),(0,a.kt)("li",{parentName:"ul"},"[","Web]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2036"},"[Linkis-2036]")," Instance display problem of ECM page of management console is fixed"),(0,a.kt)("li",{parentName:"ul"},"[","Web]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1895"},"[Linkis-1895]")," Resource page display bug fix"),(0,a.kt)("li",{parentName:"ul"},"[","ECP]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2027"},"[Linkis-2027]")," Fix abnormal error caused by ECP material download byte interception"),(0,a.kt)("li",{parentName:"ul"},"[","ECP]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2088"},"[Linkis-2088]")," Fix the problem of progress rollback during hive task running"),(0,a.kt)("li",{parentName:"ul"},"[","ECP]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2090"},"[Linkis-2090]")," Fix Python3 can't find the problem"),(0,a.kt)("li",{parentName:"ul"},"[","CG]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1751"},"[Linkis-1751]")," Script custom variable run type and suffix constraint configuration"),(0,a.kt)("li",{parentName:"ul"},"[","CG]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2034"},"[Linkis-2034]")," fix for mismatched descriptions of timed out tasks"),(0,a.kt)("li",{parentName:"ul"},"[","CG]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2100"},"[Linkis-2100]")," Optimize db deadlock problem under high concurrency")),(0,a.kt)("h2",{id:"security-related"},"Security related"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[","UDF]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1893"},"[Linkis-1893]")," Fix some udf interfaces (/udf/list, /udf/tree/add, /udf /tree/update) user override problem"),(0,a.kt)("li",{parentName:"ul"},"[","PS]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1869"},"[Linkis-1869]")," Fix Linkis PlublicService related interface override issue"),(0,a.kt)("li",{parentName:"ul"},"[","PS]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2086"},"[Linkis-2086]")," The method /updateCategoryInfo adds permission check")),(0,a.kt)("h2",{id:"dependency-changes"},"Dependency changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[","MDS]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1947"},"[Linkis-1947]")," mysql-connector-java upgraded from 5.1.34 to 8.0.16"),(0,a.kt)("li",{parentName:"ul"},"[","ECP]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1951"},"[Linkis-1951]")," hive-jdbc upgraded from 1.2.1 to 2.3.3"),(0,a.kt)("li",{parentName:"ul"},"[","ECP]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/1974"},"[Linkis-1968]")," protobuf-java version upgrade to 3.15.8"),(0,a.kt)("li",{parentName:"ul"},"[","ECP]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2021"},"[Linkis-2021]")," remove some redundant dependencies of Flink module"),(0,a.kt)("li",{parentName:"ul"},"[","RPC]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2018"},"[Linkis-2018]")," unified version of json4s"),(0,a.kt)("li",{parentName:"ul"},"[","Web]",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/pull/2336"},"[Linkis-2336]")," Introduce the dependency of the web component jsencrypt-3.2.1 as a login password encryption and decryption tool")),(0,a.kt)("h2",{id:"thanks"},"Thanks"),(0,a.kt)("p",null,"The release of Apache Linkis 1.1.2 is inseparable from the contributors of the Linkis community. Thanks to all the community contributors, including but not limited to the following Contributors (in no particular order): Alexyang, Casion, David hua, GodfreyGuo, Jack Xu , Zosimer, allenlliu, casionone, ericlu, huapan123456, husofskyzy, iture123, legendtkl, ",(0,a.kt)("a",{parentName:"p",href:"mailto:luxl@chinatelecom.cn"},"luxl@chinatelecom.cn"),", maidangdang44, peacewong, pengfeiwei, seedscoder, weixiao, xiaojie19852006, \u3081\u3050\u307f\u3093, Li Wei"))}h.isMDXComponent=!0}}]);