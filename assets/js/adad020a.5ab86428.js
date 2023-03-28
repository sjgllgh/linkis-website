"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[93536],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,a(a({ref:n},l),{},{components:t})):r.createElement(g,a({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const o={title:"Tuning",sidebar_position:2},a=void 0,s={unversionedId:"tuning-and-troubleshooting/tuning",id:"version-1.0.3/tuning-and-troubleshooting/tuning",title:"Tuning",description:"Linkis0.x version runs stably on the production environment of WeBank, and supports various businesses. Linkis1.0 is an optimized version of 0.x, and the related tuning logic has not changed, so this document will introduce several Linkis deployment and tuning suggestions. Due to limited space, this article cannot cover all optimization scenarios. Related tuning guides will also be supplemented and updated. Of course, we also hope that community users will provide suggestions for Linkis1.0 tuning documents.",source:"@site/versioned_docs/version-1.0.3/tuning-and-troubleshooting/tuning.md",sourceDirName:"tuning-and-troubleshooting",slug:"/tuning-and-troubleshooting/tuning",permalink:"/docs/1.0.3/tuning-and-troubleshooting/tuning",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.0.3/tuning-and-troubleshooting/tuning.md",tags:[],version:"1.0.3",sidebarPosition:2,frontMatter:{title:"Tuning",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configurations",permalink:"/docs/1.0.3/tuning-and-troubleshooting/configuration"},next:{title:"Contact Us",permalink:"/docs/1.0.3/contact"}},u={},c=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Jvm heap size tuning",id:"2-jvm-heap-size-tuning",level:2},{value:"3. Tuning the concurrency of task submission",id:"3-tuning-the-concurrency-of-task-submission",level:2},{value:"4. Resource settings related to task runtime",id:"4-resource-settings-related-to-task-runtime",level:2}],l={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Linkis0.x version runs stably on the production environment of WeBank, and supports various businesses. Linkis1.0 is an optimized version of 0.x, and the related tuning logic has not changed, so this document will introduce several Linkis deployment and tuning suggestions. Due to limited space, this article cannot cover all optimization scenarios. Related tuning guides will also be supplemented and updated. Of course, we also hope that community users will provide suggestions for Linkis1.0 tuning documents.")),(0,i.kt)("h2",{id:"1-overview"},"1. Overview"),(0,i.kt)("p",null,"This document will introduce several tuning methods based on production experience, namely the selection of Jvm heap size during deployment in production, the setting of concurrency for task submission, and the introduction of task running resource application parameters. The parameter settings described in the document are not recommended parameter values. Users need to select the parameters according to their actual production environment."),(0,i.kt)("h2",{id:"2-jvm-heap-size-tuning"},"2. Jvm heap size tuning"),(0,i.kt)("p",null,"When installing Linkis, you can find the following variables in linkis-env.sh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'SERVER_HEAP_SIZE="512M"\n')),(0,i.kt)("p",null,"After setting this variable, it will be added to the java startup parameters of each microservice during installation to control the Jvm startup heap size. Although the xms and xmx parameters need to be set when java is started, they are usually set to the same value. In production, as the number of users increases, this parameter needs to be adjusted larger to meet the needs. Of course, setting a larger stack memory requires a larger server configuration. Also, single-machine deployment has limitations. In production, a distributed deployment method can be used to deploy different Linkis and DSS microservices on multiple servers. Meanwhile, you can adjust the stack size to meet production requirements."),(0,i.kt)("h2",{id:"3-tuning-the-concurrency-of-task-submission"},"3. Tuning the concurrency of task submission"),(0,i.kt)("p",null,"Some Linkis task concurrency parameters will have a default value. In most scenarios, the default value can meet the demand, but sometimes it cannot, so it needs to be adjusted. This article will introduce several parameters for adjusting the concurrency of tasks to facilitate users to optimize concurrent tasks in production."),(0,i.kt)("p",null,"Since tasks are submitted by RPC, in the linkis-common/linkis-rpc module, you can configure the following parameters to increase the number of concurrent rpc:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wds.linkis.rpc.receiver.asyn.consumer.thread.max=400\nwds.linkis.rpc.receiver.asyn.queue.size.max=5000\nwds.linkis.rpc.sender.asyn.consumer.thread.max=100\nwds.linkis.rpc.sender.asyn.queue.size.max=2000\n")),(0,i.kt)("p",null,"In the Linkis source code, we set a default value for the number of concurrent tasks, which can meet the needs in most scenarios. However, when a large number of concurrent tasks are submitted for execution in some scenarios, such as when Qualitis (another open source project of WeBank) is used for mass data verification, initCapacity and maxCapacity have not been upgraded to a configurable item in the current version. Users need to modify, by increasing the values of these two parameters, the number of concurrency. Of course, this also requires a higher server configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"  private val groupNameToGroups = new JMap[String, Group]\n  private val labelBuilderFactory = LabelBuilderFactoryContext.getLabelBuilderFactory\n\n  override def getOrCreateGroup(groupName: String): Group = {\n    if (!groupNameToGroups.containsKey(groupName)) synchronized {\n      val initCapacity = 100\n      val maxCapacity = 100\n      // other codes...\n        }\n      }\n")),(0,i.kt)("h2",{id:"4-resource-settings-related-to-task-runtime"},"4. Resource settings related to task runtime"),(0,i.kt)("p",null,"When submitting a task to run on Yarn, Yarn provides a configurable interface. As a highly scalable framework, Linkis can also be configured to set resource configuration."),(0,i.kt)("p",null,"The related configuration of Spark and Hive are as follows:"),(0,i.kt)("p",null,"Part of the Spark configuration in linkis-engineconn-plugins/engineconn-plugins, you can adjust the configuration to change the runtime environment of tasks submitted to Yarn. Due to limited space, such as more about Hive, Yarn configuration requires users to refer to the source code and the parameters documentation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'    "spark.driver.memory" = 2 //Unit is G\n    "wds.linkis.driver.cores" = 1\n    "spark.executor.memory" = 4 //Unit is G\n    "spark.executor.cores" = 2\n    "spark.executor.instances" = 3\n    "wds.linkis.rm.yarnqueue" = "default"\n')))}p.isMDXComponent=!0}}]);