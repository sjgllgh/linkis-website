"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[11620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=i.createContext({}),c=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(a,".").concat(m)]||d[m]||u[m]||s;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,l=new Array(s);l[0]=d;var r={};for(var a in t)hasOwnProperty.call(t,a)&&(r[a]=t[a]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<s;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const s={title:"Deploy Linkis without HDFS",sidebar_position:8},l=void 0,r={unversionedId:"deployment/deploy-linkis-without-hdfs",id:"version-1.2.0/deployment/deploy-linkis-without-hdfs",title:"Deploy Linkis without HDFS",description:"This article describes how to deploy Linkis services in an environment where HDFS is not deployed to facilitate more lightweight learning, use and debugging.",source:"@site/versioned_docs/version-1.2.0/deployment/deploy-linkis-without-hdfs.md",sourceDirName:"deployment",slug:"/deployment/deploy-linkis-without-hdfs",permalink:"/docs/1.2.0/deployment/deploy-linkis-without-hdfs",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.2.0/deployment/deploy-linkis-without-hdfs.md",tags:[],version:"1.2.0",sidebarPosition:8,frontMatter:{title:"Deploy Linkis without HDFS",sidebar_position:8},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"DataSource",permalink:"/docs/1.2.0/deployment/start-metadatasource"},next:{title:"Installation and deployment of the tool scriptis",permalink:"/docs/1.2.0/deployment/linkis-scriptis-install"}},a={},c=[{value:"1. Configuration modification",id:"1-configuration-modification",level:2},{value:"2. Copy mysql jar file",id:"2-copy-mysql-jar-file",level:2},{value:"3. Deploy and start",id:"3-deploy-and-start",level:2},{value:"4. Verification",id:"4-verification",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article describes how to deploy Linkis services in an environment where HDFS is not deployed to facilitate more lightweight learning, use and debugging."),(0,o.kt)("p",null,'For the overall deployment process, please refer to "Quick Deployment", and you need to modify the following content.'),(0,o.kt)("h2",{id:"1-configuration-modification"},"1. Configuration modification"),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"linkis-env.sh")," file to modify the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#Use path mode [file://path]  instead of [hdfs://] \nWORKSPACE_USER_ROOT_PATH=file:///tmp/linkis/\nHDFS_USER_ROOT_PATH=file:///tmp/linkis\nRESULT_SET_ROOT_PATH=file:///tmp/linkis\n\nexport ENABLE_HDFS=false\nexport ENABLE_HIVE=false\nexport ENABLE_SPARK=false\n")),(0,o.kt)("p",null,"After changing the above configuration to false, there is no need to configure HDFS/HIVE/SPARK environments separately."),(0,o.kt)("h2",{id:"2-copy-mysql-jar-file"},"2. Copy mysql jar file"),(0,o.kt)("p",null,"Because the mysql-connector-java driver follows the GPL2.0 protocol and does not meet the license policy of the Apache open source protocol, we need to manually copy it to the following two directories."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-commons/public-module/\n${LINKIS_HOME}/lib/linkis-spring-cloud-services/linkis-mg-gateway/\n")),(0,o.kt)("p",null,"It can be downloaded directly from the maven repository, such as ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java/5.1.49"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java/5.1.49")),(0,o.kt)("h2",{id:"3-deploy-and-start"},"3. Deploy and start"),(0,o.kt)("p",null,'Refer to the "Quick Deployment" section to complete the deployment by executing the ',(0,o.kt)("inlineCode",{parentName:"p"},"sh bin/install.sh"),' command.\nRefering to the "Quick Deployment" section, start the Linkis services by executing the ',(0,o.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/sbin/linkis-start-all.sh")," command."),(0,o.kt)("h2",{id:"4-verification"},"4. Verification"),(0,o.kt)("p",null,"Currently, version 1.1.2 only supports shell jobs to run in non-HDFS environments. The execution commands are as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ cd ./bin\n$ chmod +x linkis-cli\n$ ./linkis-cli -engineType shell-1 -codeType shell -code "echo \\"hello\\" "  -submitUser <submitUser> -proxyUser <proxyUser>\n')),(0,o.kt)("p",null,"The following output is expected."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'=====Java Start Command=====\nexec /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.312.b07-2.el8_5.x86_64/jre/bin/java -server -Xms32m -Xmx2048m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/Linkis/linkis03/logs/linkis-cli -XX:ErrorFile=/Linkis/linkis03/logs/linkis-cli/ps_err_pid%p.log -XX:+UseConcMarkSweepGC -XX:CMSInitiatingOccupancyFraction=80 -XX:+DisableExplicitGC    -classpath /Linkis/linkis03/conf/linkis-cli:/Linkis/linkis03/lib/linkis-computation-governance/linkis-client/linkis-cli/*:/Linkis/linkis03/lib/linkis-commons/public-module/*: -Dconf.root=/Linkis/linkis03/conf/linkis-cli -Dconf.file=linkis-cli.properties -Dlog.path=/Linkis/linkis03/logs/linkis-cli -Dlog.file=linkis-client.root.log.20220418221952287912946  org.apache.linkis.cli.application.LinkisClientApplication \'-engineType shell-1 -codeType shell -code echo "hello"  -submitUser test -proxyUser test\'\n[INFO] LogFile path: /Linkis/linkis03/logs/linkis-cli/linkis-client.root.log.20220418221952287912946\n[INFO] User does not provide usr-configuration file. Will use default config\n[INFO] connecting to linkis gateway:http://127.0.0.1:9001\nJobId:6\nTaskId:6\nExecId:exec_id018028linkis-cg-entranceiZbp19q51jb8p984yk2jxdZ:9104LINKISCLI_test_shell_1\n[INFO] Job is successfully submitted!\n\n2022-04-18 22:19:53.019 INFO Program is substituting variables for you\n2022-04-18 22:19:53.019 INFO Variables substitution ended successfully\n2022-04-18 22:19:53.019 WARN The code you submit will not be limited by the limit\nJob with jobId : LINKISCLI_test_shell_1 and execID : LINKISCLI_test_shell_1 submitted \n2022-04-18 22:19:53.019 INFO You have submitted a new job, script code (after variable substitution) is\n************************************SCRIPT CODE************************************\necho "hello"\n************************************SCRIPT CODE************************************\n2022-04-18 22:19:53.019 INFO Your job is accepted,  jobID is LINKISCLI_test_shell_1 and jobReqId is 6 in ServiceInstance(linkis-cg-entrance, iZbp19q51jb8p984yk2jxdZ:9104). Please wait it to be scheduled\njob is scheduled.\n2022-04-18 22:19:53.019 INFO Your job is Scheduled. Please wait it to run.\nYour job is being scheduled by orchestrator.\n2022-04-18 22:19:53.019 INFO job is running.\n2022-04-18 22:19:53.019 INFO Your job is Running now. Please wait it to complete.\n2022-04-18 22:19:53.019 INFO Job with jobGroupId : 6 and subJobId : 5 was submitted to Orchestrator.\n2022-04-18 22:19:53.019 INFO Background is starting a new engine for you,execId astJob_4_codeExec_4 mark id is mark_4, it may take several seconds, please wait\n2022-04-18 22:20:01.020 INFO Task submit to ec: ServiceInstance(linkis-cg-engineconn, iZbp19q51jb8p984yk2jxdZ:43213) get engineConnExecId is: 1\n2022-04-18 22:20:01.020 INFO EngineConn local log path: ServiceInstance(linkis-cg-engineconn, iZbp19q51jb8p984yk2jxdZ:43213) /appcom1/tmp/test/20220418/shell/cc21fbb5-3a33-471b-a565-8407ff8ebd80/logs\niZbp19q51jb8p984yk2jxdZ:43213_0 >> echo "hello"\n2022-04-18 22:20:01.438 WARN  [Linkis-Default-Scheduler-Thread-1] org.apache.linkis.engineconn.computation.executor.hook.executor.ExecuteOnceHook 50 warn - execute once become effective, register lock listener\nhello\n2022-04-18 22:20:01.020 INFO Your subjob : 5 execue with state succeed, has 1 resultsets.\n2022-04-18 22:20:01.020 INFO Congratuaions! Your job : LINKISCLI_test_shell_1 executed with status succeed and 0 results.\n2022-04-18 22:20:01.020 INFO job is completed.\n2022-04-18 22:20:01.020 INFO Task creation time(\u4efb\u52a1\u521b\u5efa\u65f6\u95f4): 2022-04-18 22:19:53, Task scheduling time(\u4efb\u52a1\u8c03\u5ea6\u65f6\u95f4): 2022-04-18 22:19:53, Task start time(\u4efb\u52a1\u5f00\u59cb\u65f6\u95f4): 2022-04-18 22: Mission end time(\u4efb\u52a1\u7ed3\u675f\u65f6\u95f4): 2022-04-18 22:20:01\n2022-04-18 22:20:01.020 INFO Your mission(\u60a8\u7684\u4efb\u52a1) 6 The total time spent is(\u603b\u8017\u65f6\u65f6\u95f4\u4e3a): 8.3 \u79d2\n2022-04-18 22:20:01.020 INFO Congratulations. Your job completed with status Success.\n\n[INFO] Job execute successfully! Will try get execute result\n============Result:================\nTaskId:6\nExecId: exec_id018028linkis-cg-entranceiZbp19q51jb8p984yk2jxdZ:9104LINKISCLI_test_shell_1\nUser:test\nCurrent job status:SUCCEED\nextraMsg: \nresult: \n\n[INFO] Retrieving result-set, may take time if result-set is large, please do not exit program.\n============ RESULT SET 1 ============\nhello   \n############Execute Success!!!########\n')))}u.isMDXComponent=!0}}]);