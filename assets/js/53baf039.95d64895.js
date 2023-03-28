"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[19468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Scheduler Architecture",sidebar_position:1},o=void 0,s={unversionedId:"architecture/commons/scheduler",id:"version-0.11.0/architecture/commons/scheduler",title:"Scheduler Architecture",description:"Linkis Scheduler\u2014Expandable packet scheduling consumption architecture capable of intelligent monitoring",source:"@site/versioned_docs/version-0.11.0/architecture/commons/scheduler.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/scheduler",permalink:"/docs/0.11.0/architecture/commons/scheduler",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-0.11.0/architecture/commons/scheduler.md",tags:[],version:"0.11.0",sidebarPosition:1,frontMatter:{title:"Scheduler Architecture",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Asynchronous Log Live Push",permalink:"/docs/0.11.0/architecture/commons/real-time-log-push"},next:{title:"RPC Architecture",permalink:"/docs/0.11.0/architecture/commons/rpc"}},c={},l=[{value:"1 Background",id:"1-background",level:2},{value:"2 Ideas",id:"2-ideas",level:2},{value:"3 Implementation",id:"3-implementation",level:2},{value:"3.1 Specific implementation",id:"31-specific-implementation",level:3},{value:"3.2 Parameter adjustment",id:"32-parameter-adjustment",level:3}],u={toc:l},h="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Linkis Scheduler\u2014Expandable packet scheduling consumption architecture capable of intelligent monitoring")),(0,a.kt)("h2",{id:"1-background"},"1 Background"),(0,a.kt)("p",null,"Under the microservice architecture, each service only handles one kind of logic, and in order to achieve asynchronous and decoupling, the calls between services are often completed by submitting the event and then distributing the consumption by the server."),(0,a.kt)("p",null,"This makes the event distribution and consumption algorithm need to deal with a large number of different types of events. These events have different requirements in terms of urgency, estimated execution time, and whether they can be abandoned, and the gap between the peak and the trough of the event arrival is very large. The state is difficult to predict, so the traditional consumption queue and other data structures and algorithms cannot meet the requirements. It is necessary to define a new distribution consumption that can reasonably group events, monitor the consumption status in time, and expand and adjust the consumption process. algorithm."),(0,a.kt)("h2",{id:"2-ideas"},"2 Ideas"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Through grouping, all objects in the group correspond to a complete life cycle.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Each group can independently set the parameter standards for measuring the health of the consumer, and there is a separate thread monitoring. Once it is found to be in an unhealthy state, it will make corresponding parameter adjustments according to the defined logic to ensure consumption as much as possible Stable operation of the device.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In each group, define the combination of related parameters. When a parameter is adjusted, all parameters related to it will be adjusted accordingly to try to maintain the normal operation of the consumer."))),(0,a.kt)("h2",{id:"3-implementation"},"3 Implementation"),(0,a.kt)("p",null,"As shown in the figure below, the process of Linkis Scheduler distributing consumption events is as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Packet scheduling consumption architecture",src:n(87745).Z,width:"1023",height:"542"})),(0,a.kt)("h3",{id:"31-specific-implementation"},"3.1 Specific implementation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When the event arrives, the scheduler requests the packet factory to obtain the name of the packet that the event should enter."),(0,a.kt)("p",{parentName:"li"},"The role of the group factory is to parse the attributes of the event and associate it with a certain group. The specific logic is left to the developers of specific consumers to inherit and implement, as long as the unified interface of the GroupFactory provided by the solution is implemented.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After getting the group name from the group factory, the scheduler requests the consumption manager to obtain the actual consumer corresponding to the group."),(0,a.kt)("p",{parentName:"li"},"The consumption manager is globally unique. It maintains a mapping relationship between groups and consumers, and is responsible for the initial construction of the consumer when it is first requested."),(0,a.kt)("p",{parentName:"li"},"In the process of initializing the consumer, the consumer manager will first create a Consumer object, and then find the corresponding one according to the name from all the Group entities, set its parameters to the Consumer object just created, and then start it The Consumer puts it into a working state and starts processing events.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The scheduler puts the event into the waiting queue of the corresponding consumer."),(0,a.kt)("p",{parentName:"li"},"Each consumer maintains a waiting queue and an execution queue."),(0,a.kt)("p",{parentName:"li"},'After each time period specified by the "distribution interval" parameter, the consumer will check whether there is a space in the execution queue or a seat for an event that has been executed. If there is, it selects an event from the waiting queue and puts it into that seat. And start to execute the event (the logic of selecting the event depends on the distribution rule, for example, the default FIFO rule will select the first event added to the queue).'))),(0,a.kt)("h3",{id:"32-parameter-adjustment"},"3.2 Parameter adjustment"),(0,a.kt)("p",null,"When adjusting the parameters of this program, the following process is required:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Request the grouping factory and get the grouping object to be adjusted by name. It does not support setting parameters directly in Consumer."),(0,a.kt)("p",{parentName:"li"},"Only the parameters of the grouping object that provide an adjustment method to the public can be adjusted.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Call the parameter adjustment method in the grouping object and try to set the parameters. The following two situations are involved:"),(0,a.kt)("p",{parentName:"li"},"a) The parameter limit must be within the range specified by several sets of numbers."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"If the parameter you are trying to set is not within the range, the feedback setting has failed.\n\nIf it is within the allowable range, the grouped object will get the corresponding consumer through the consumption manager. While setting the target parameter to the target value, set the other parameters to the corresponding value according to the matched group of numbers. .\n")),(0,a.kt)("p",{parentName:"li"},"b) The parameter limit must meet a certain ratio."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"The grouped object gets the corresponding consumer through the consumer manager, and while setting the target parameter to the target value, the other parameters are also calculated in proportion to the corresponding target value, and all are reset.\n")))),(0,a.kt)("p",null,"In addition to manually setting parameters, each consumer has an independent monitoring thread to count the length of the waiting queue in the consumer, the number of events being executed, and the growth rate of execution time."),(0,a.kt)("p",null,"In each grouping object, thresholds and alarm ratios are set for these indicators. Once an indicator exceeds the threshold, or the ratio between multiple indicators exceeds a limited range (for example, when the average execution time is monitored to be greater than the distribution interval parameter, the threshold is considered to be exceeded ), the monitoring thread will immediately expand the consumer accordingly."),(0,a.kt)("p",null,"When expanding, it will make full use of the above-mentioned parameter adjustment process to increase a certain parameter in a targeted manner, and other parameters will be automatically expanded accordingly."))}p.isMDXComponent=!0},87745:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scheduler-1ff46422945b6d19c8629c5b85cddf2f.png"}}]);