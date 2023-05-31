"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[62319],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,b=l["".concat(p,".").concat(m)]||l[m]||d[m]||o;return r?a.createElement(b,i(i({ref:t},c),{},{components:r})):a.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94178:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"Spark-Submit Jar package task",sidebar_position:.2},i=void 0,s={unversionedId:"feature/spark-submit-jar",id:"version-1.3.2/feature/spark-submit-jar",title:"Spark-Submit Jar package task",description:"1. Background",source:"@site/versioned_docs/version-1.3.2/feature/spark-submit-jar.md",sourceDirName:"feature",slug:"/feature/spark-submit-jar",permalink:"/docs/latest/feature/spark-submit-jar",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.2/feature/spark-submit-jar.md",tags:[],version:"1.3.2",sidebarPosition:.2,frontMatter:{title:"Spark-Submit Jar package task",sidebar_position:.2},sidebar:"tutorialSidebar",previous:{title:"Load UDF by UDF ID",permalink:"/docs/latest/feature/load-udf-by-udfid"},next:{title:"Task Fixed EngineConn Execution",permalink:"/docs/latest/feature/ec-fix-label"}},p={},u=[{value:"1. Background",id:"1-background",level:2},{value:"2. Instructions for use",id:"2-instructions-for-use",level:2},{value:"3. Precautions",id:"3-precautions",level:2}],c={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-background"},"1. Background"),(0,n.kt)("p",null,"In some scenarios, tasks need to be executed in the form of jar packages submitted through spark-submit."),(0,n.kt)("h2",{id:"2-instructions-for-use"},"2. Instructions for use"),(0,n.kt)("p",null,"Submit the Spark task through the SDK, the code example is as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public class SparkOnceJobTest {\n\n    public static void main(String[] args) {\n\n        LinkisJobClient.config().setDefaultServerUrl("http://127.0.0.1:9001");\n\n        String submitUser = "linkis";\n        String engineType = "spark";\n\n        SubmittableSimpleOnceJob onceJob =\n                // region\n                LinkisJobClient.once().simple().builder()\n                        .setCreateService("Spark-Test")\n                        .setMaxSubmitTime(300000)\n                        .setDescription("SparkTestDescription")\n                        .addExecuteUser(submitUser)\n                        .addJobContent("runType", "jar")\n                        .addJobContent("spark.app.main.class", "org.apache.spark.examples.JavaWordCount")\n                        // Parameters obtained by the submitted jar package\n                        .addJobContent("spark.app.args", "hdfs:///tmp/test_word_count.txt") // WordCount test file\n                        .addLabel("engineType", engineType + "-2.4.3")\n                        .addLabel("userCreator", submitUser + "-IDE")\n                        .addLabel("engineConnMode", "once")\n                        .addStartupParam("spark.app.name", "spark-submit-jar-test-linkis") // Application Name displayed on yarn\n                        .addStartupParam("spark.executor.memory", "1g")\n                        .addStartupParam("spark.driver.memory", "1g")\n                        .addStartupParam("spark.executor.cores", "1")\n                        .addStartupParam("spark.executor.instance", "1")\n                        .addStartupParam("spark.app.resource", "hdfs:///tmp/spark/spark-examples_2.11-2.3.0.2.6.5.0-292.jar")\n                        .addSource("jobName", "OnceJobTest")\n                        .build();\n        // endregion\n        onceJob. submit();\n        onceJob.waitForCompleted(); // Temporary network failure will cause exceptions. It is recommended to modify the SDK later. For current use, exception handling is required\n    }\n}\n')),(0,n.kt)("h2",{id:"3-precautions"},"3. Precautions"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The jar package or parameter file used in submitting tasks needs to be uploaded to hdfs or a shared directory in advance")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"spark-submit jar only supports Once task"))))}d.isMDXComponent=!0}}]);