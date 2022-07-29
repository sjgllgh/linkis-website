"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[32751],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88654:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"Hive Engine",sidebar_position:2},l=void 0,u={unversionedId:"engine_usage/hive",id:"version-0.11.0/engine_usage/hive",isDocsHomePage:!1,title:"Hive Engine",description:"1 Use of Hive Engine",source:"@site/versioned_docs/version-0.11.0/engine_usage/hive.md",sourceDirName:"engine_usage",slug:"/engine_usage/hive",permalink:"/docs/0.11.0/engine_usage/hive",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/engine_usage/hive.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"Hive Engine",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Use of 1.0 SDK",permalink:"/docs/0.11.0/user_guide/1.0-sdk-manual"},next:{title:"Python Engine",permalink:"/docs/0.11.0/engine_usage/python"}},c=[{value:"1 Use of Hive Engine",id:"1-use-of-hive-engine",children:[{value:"1.1 Environment variable configuration",id:"11-environment-variable-configuration",children:[]},{value:"1.2 Dependent service startup",id:"12-dependent-service-startup",children:[]},{value:"1.3 Custom parameter configuration",id:"13-custom-parameter-configuration",children:[]},{value:"1.4 Front-end deployment",id:"14-front-end-deployment",children:[]}]},{value:"2 Hive engine implementation",id:"2-hive-engine-implementation",children:[]},{value:"3 Adapt your own hive version",id:"3-adapt-your-own-hive-version",children:[]},{value:"4 Future goals",id:"4-future-goals",children:[]}],p={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-use-of-hive-engine"},"1 Use of Hive Engine"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The Hive execution engine implemented by Linkis now supports HiveQL submission, and users submit their own execution through Linkis using the three interface methods in the document (SDK, HTTP, WebSocket) Code, you can submit your HiveQL to the cluster for execution."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","If you want to use the Linkis system to execute the HiveQL program, you need to download the Linkis release installation package and configure, install and start the specified specified microservice."),(0,o.kt)("h3",{id:"11-environment-variable-configuration"},"1.1 Environment variable configuration"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Environmental variables that the Hive engine depends on: HADOOP_HOME, HADOOP_CONF_DIR, HIVE_HOME, and HIVE_CONF_DIR."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Before starting the microservices related to the hive execution engine, please make sure that the above environment variables have been set. If not, please log in /home/${ USER}/.bash_rc or linkis-ujes-spark-enginemanager/conf in the linkis.properties configuration file. As shown below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"  HADOOP_HOME=${real hadoop installation directory}\n  HADOOP_CONF_DIR=${Real hadoop configuration directory}\n  HIVE_CONF_DIR=${Real hive configuration directory}\n  HIVE_HOME=${Real hive installation directory}\n")),(0,o.kt)("h3",{id:"12-dependent-service-startup"},"1.2 Dependent service startup"),(0,o.kt)("p",null,"The startup of the Hive engine requires the following Linkis microservices:"),(0,o.kt)("p",null,"-1), Eureka: Used for service registration and discovery.\n-2), Linkis-gateway: used for user request forwarding.\n-3) Linkis-publicService: Provides basic functions such as persistence and udf.\n-4) Linkis-ResourceManager: Provides Linkis resource management functions."),(0,o.kt)("h3",{id:"13-custom-parameter-configuration"},"1.3 Custom parameter configuration"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","To use hive normally, you also need to start HiveEntrance and HiveEngineManager."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","HiveEntrance is the recipient of hive jobs, and HiveEngineManager is the initiator of HiveEngine."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Before starting, users can set custom parameters about the hive engine."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis provides many configuration parameters in consideration of users' desire to set parameters more freely."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The following table has some commonly used parameters. The Hive engine supports configuring more parameters for better performance. If you have tuning needs, welcome to read Tuning manual."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Users can configure these parameters in linkis.properties."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,o.kt)("th",{parentName:"tr",align:null},"Reference value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.memory.max"),(0,o.kt)("td",{parentName:"tr",align:null},"40G"),(0,o.kt)("td",{parentName:"tr",align:null},"Used to specify the total memory of the client of all engines started by hiveEM")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.cores.max"),(0,o.kt)("td",{parentName:"tr",align:null},"20"),(0,o.kt)("td",{parentName:"tr",align:null},"Used to specify the total number of CPU cores of the clients of all engines started by hiveEM")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"wds.linkis.enginemanager.engine.instances.max"),(0,o.kt)("td",{parentName:"tr",align:null},"10"),(0,o.kt)("td",{parentName:"tr",align:null},"Used to specify the number of engines that hiveEM can start")))),(0,o.kt)("h3",{id:"14-front-end-deployment"},"1.4 Front-end deployment"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","After the above microservices are successfully launched and deployed, users need to submit their own HiveQL code through a web browser. You can deploy another open source front-end product of WeBank ","[Scriptis]","(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis/blob/master/docs/zh_CN/ch1/%E5%89%8D%E5%8F%25"},"https://github.com/WeBankFinTech/Scriptis/blob/master/docs/zh_CN/ch1/%E5%89%8D%E5%8F%")," B0%E9%83%A8%E7%BD%B2%E6%96%87%E6%A1%A3.md), this product allows users to edit and submit codes on web pages, and receive real-time feedback from the background information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.5 Running effect chart")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hive running effect chart 1",src:n(57388).Z}),(0,o.kt)("br",null),"\nFigure 1 Hive running effect Figure 1"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hive running effect chart 2",src:n(31467).Z}),(0,o.kt)("br",null),"\nFigure 2 Hive running effect Figure 2"),(0,o.kt)("h2",{id:"2-hive-engine-implementation"},"2 Hive engine implementation"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The implementation of the Hive execution engine is to implement the necessary interfaces of the Entrance, EngineManager and Engine three modules with reference to the Linkis development document. The Engine module is the most special, Hive The way of implementation also has its own set of logic."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The Release version now provided by Linkis is based on hadoop version 2.7.2, hive version is 1.2.1, both are apache versions."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis's Hive engine interacts with the underlying hive mainly through the HiveEngineExecutor class, which is instantiated by the HiveEngineExecutorFactory bean."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","In the executeLine interface implemented by HiveEngineExecutor, Linkis uses the CommandProcessorFactory class provided by hive to pass in local hive configuration information to obtain an org.apache.hadoop. The hive.ql.Driver class, the Driver class provides an API to help submit the user's script code to the cluster for execution."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","After the driver submits the hive sql code, there is an API to provide whether the execution is successful and to obtain the result set after the success is obtained. If the execution is successful, with the help of the unified storage service provided by Linkis, the result set will be stored in the specified directory for users to view."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","In addition, after the Driver submits hive sql, if a mapreduce task is generated, we can also kill the submitted hive query task through the killRunningJobs API provided by HadoopJobExecHelper , This is the logic of the user's foreground kill task. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","One more thing, Linkis's hive engine also implements a progress function. Specifically, the runningJobs field of HadoopJobExecHelper is used to obtain the running MR tasks, and then these MR tasks have corresponding map and reduce progress. You can get the total progress of the task by doing a mathematical calculation. It should be noted that runningJobs is running The MR job will be deleted from the List once it is executed, so it is necessary to get the execution plan of SQL at the beginning. For details, please refer to the implementation of the code."),(0,o.kt)("h2",{id:"3-adapt-your-own-hive-version"},"3 Adapt your own hive version"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Because the current version of Linkis is the apache version that supports 1.2.1, many users' clusters may not be consistent with our company, so you need to recompile the Hive execution engine by yourself ."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","For example, if the user is using the 1.1.0 cdh version, he needs to change the hive.version to the specified version in the top-level pom.xml and then Compile."),(0,o.kt)("p",null,"When we were adapting, we also found that there was a conflict in the jar package. This requires the user to check the log to eliminate it. If the cause is still unclear, welcome to join the group for consultation."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"WeChat group",src:n(39694).Z}),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"4-future-goals"},"4 Future goals"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Seamlessly adapt to more hive versions."),(0,o.kt)("li",{parentName:"ol"},"The deployment method is simpler, try to use the containerized method."),(0,o.kt)("li",{parentName:"ol"},"The function is more complete, and it is more accurate and complete in terms of execution progress, data accuracy, etc.")))}d.isMDXComponent=!0},39694:function(e,t,n){t.Z=n.p+"assets/images/group-8e93c2460f179fabea51336c34b1ddd2.png"},57388:function(e,t,n){t.Z=n.p+"assets/images/hive_run1-2cba80843a820e163a00ab67ed701a4e.png"},31467:function(e,t,n){t.Z=n.p+"assets/images/hive_run2-7b1f2e0dac6f683d5d53a9d42098e9b1.png"}}]);