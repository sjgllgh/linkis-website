"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[726],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),k=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},o=function(e){var n=k(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=k(t),d=r,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return t?a.createElement(g,p(p({ref:n},o),{},{components:t})):a.createElement(g,p({ref:n},o))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var k=2;k<l;k++)p[k]=t[k];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>k});var a=t(87462),r=(t(67294),t(3905));const l={title:"Spark \u5f15\u64ce",sidebar_position:1},p=void 0,i={unversionedId:"engine-usage/spark",id:"version-1.1.2/engine-usage/spark",title:"Spark \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.X\u4e2d\uff0cspark\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/engine-usage/spark.md",sourceDirName:"engine-usage",slug:"/engine-usage/spark",permalink:"/zh-CN/docs/1.1.2/engine-usage/spark",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/engine-usage/spark.md",tags:[],version:"1.1.2",sidebarPosition:1,frontMatter:{title:"Spark \u5f15\u64ce",sidebar_position:1},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.1.2/engine-usage/overview"},next:{title:"Hive \u5f15\u64ce",permalink:"/zh-CN/docs/1.1.2/engine-usage/hive"}},s={},k=[{value:"1.Spark\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",id:"1spark\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",level:2},{value:"2.Spark\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",id:"2spark\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",level:2},{value:"2.1 spark\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-spark\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",level:3},{value:"2.2 spark engineConn\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-spark-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d",level:3},{value:"2.3 spark\u5f15\u64ce\u7684\u6807\u7b7e",id:"23-spark\u5f15\u64ce\u7684\u6807\u7b7e",level:3},{value:"3.spark\u5f15\u64ce\u7684\u4f7f\u7528",id:"3spark\u5f15\u64ce\u7684\u4f7f\u7528",level:2},{value:"\u51c6\u5907\u64cd\u4f5c\uff0c\u961f\u5217\u8bbe\u7f6e",id:"\u51c6\u5907\u64cd\u4f5c\u961f\u5217\u8bbe\u7f6e",level:3},{value:"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528",id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528",level:3},{value:"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",level:3},{value:"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"4.spark\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",id:"4spark\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",level:2}],o={toc:k},u="wrapper";function c(e){let{components:n,...l}=e;return(0,r.kt)(u,(0,a.Z)({},o,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.X\u4e2d\uff0cspark\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"1spark\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"},"1.Spark\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528spark\u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u4ee5\u4e0b\u7684\u73af\u5883\u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u6b63\u786e\u5e76\u4e14\u5f15\u64ce\u7684\u542f\u52a8\u7528\u6237\u662f\u6709\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u7684\u3002"),(0,r.kt)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u60a8\u5728\u6267\u884cspark\u4efb\u52a1\u4e4b\u524d\uff0c\u68c0\u67e5\u4e0b\u6267\u884c\u7528\u6237\u7684\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,r.kt)("td",{parentName:"tr",align:null},"JDK\u5b89\u88c5\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,r.kt)("td",{parentName:"tr",align:null},"Hadoop\u5b89\u88c5\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,r.kt)("td",{parentName:"tr",align:null},"Hadoop\u914d\u7f6e\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HIVE_CONF_DIR"),(0,r.kt)("td",{parentName:"tr",align:null},"Hive\u914d\u7f6e\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPARK_HOME"),(0,r.kt)("td",{parentName:"tr",align:null},"Spark\u5b89\u88c5\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPARK_CONF_DIR"),(0,r.kt)("td",{parentName:"tr",align:null},"Spark\u914d\u7f6e\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"python"),(0,r.kt)("td",{parentName:"tr",align:null},"python"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5efa\u8bae\u4f7f\u7528anaconda\u7684python\u4f5c\u4e3a\u9ed8\u8ba4python")))),(0,r.kt)("p",null,"\u88681-1 \u73af\u5883\u914d\u7f6e\u6e05\u5355"),(0,r.kt)("h2",{id:"2spark\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"},"2.Spark\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"),(0,r.kt)("h3",{id:"21-spark\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 spark\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,r.kt)("p",null,'\u6ce8\u610f: \u7f16\u8bd1spark\u5f15\u64ce\u4e4b\u524d\u9700\u8981\u8fdb\u884clinkis\u9879\u76ee\u5168\u91cf\u7f16\u8bd1\n\u7406\u8bba\u4e0aLinkis1.X\u652f\u6301\u7684spark2.x\u4ee5\u4e0a\u7684\u6240\u6709\u7248\u672c\u3002\u9ed8\u8ba4\u652f\u6301\u7684\u7248\u672c\u4e3aSpark2.4.3\u3002\u5982\u679c\u60a8\u60f3\u4f7f\u7528\u5176\u4ed6\u7684spark\u7248\u672c\uff0c\u5982spark2.1.0\uff0c\u5219\u60a8\u4ec5\u4ec5\u9700\u8981\u5c06\u63d2\u4ef6spark\u7684\u7248\u672c\u8fdb\u884c\u4fee\u6539\uff0c\u7136\u540e\u8fdb\u884c\u7f16\u8bd1\u5373\u53ef\u3002\u5177\u4f53\u7684\uff0c\u60a8\u53ef\u4ee5\u627e\u5230linkis-engineplugin-spark\u6a21\u5757\uff0c\u5c06maven\u4f9d\u8d56\u4e2d"spark.version"\u6807\u7b7e\u7684\u503c\u6539\u62102.1.0\uff0c\u7136\u540e\u5355\u72ec\u7f16\u8bd1\u6b64\u6a21\u5757\u5373\u53ef\u3002'),(0,r.kt)("h3",{id:"22-spark-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 spark engineConn\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u7f16\u8bd1\u5b8c\u4e86\u60a8\u7684spark\u5f15\u64ce\u7684\u63d2\u4ef6\uff0c\u90a3\u4e48\u60a8\u9700\u8981\u5c06\u65b0\u7684\u63d2\u4ef6\u653e\u7f6e\u5230\u6307\u5b9a\u7684\u4f4d\u7f6e\u4e2d\u624d\u80fd\u52a0\u8f7d\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u8fd9\u7bc7\u6587\u7ae0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../deployment/engine-conn-plugin-installation"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")," "),(0,r.kt)("h3",{id:"23-spark\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 spark\u5f15\u64ce\u7684\u6807\u7b7e"),(0,r.kt)("p",null,"Linkis1.X\u662f\u901a\u8fc7\u6807\u7b7e\u914d\u7f6e\u6765\u533a\u5206\u5f15\u64ce\u7248\u672c\u7684\uff0c\u6240\u4ee5\u9700\u8981\u6211\u4eec\u5728\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u63d2\u5165\u7684\u65b9\u5f0f\u5982\u4e0b\u6587\u6240\u793a\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../deployment/engine-conn-plugin-installation"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5 > 2.2 \u7ba1\u7406\u53f0Configuration\u914d\u7f6e\u4fee\u6539\uff08\u53ef\u9009\uff09")," "),(0,r.kt)("h2",{id:"3spark\u5f15\u64ce\u7684\u4f7f\u7528"},"3.spark\u5f15\u64ce\u7684\u4f7f\u7528"),(0,r.kt)("h3",{id:"\u51c6\u5907\u64cd\u4f5c\u961f\u5217\u8bbe\u7f6e"},"\u51c6\u5907\u64cd\u4f5c\uff0c\u961f\u5217\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u56e0\u4e3aspark\u7684\u6267\u884c\u9700\u8981\u961f\u5217\u7684\u8d44\u6e90\uff0c\u6240\u4ee5\u7528\u6237\u5728\u6267\u884c\u4e4b\u524d\uff0c\u5fc5\u987b\u8981\u8bbe\u7f6e\u81ea\u5df1\u80fd\u591f\u6267\u884c\u7684\u961f\u5217\u3002    "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/168044322-ce057ec0-8891-4691-9454-8fba45b2c631.png",alt:"yarn"}),"  "),(0,r.kt)("p",null,"\u56fe3-1 \u961f\u5217\u8bbe\u7f6e\n\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728\u63d0\u4ea4\u53c2\u6570\u7684StartUpMap\u91cc\u9762\u6dfb\u52a0\u961f\u5217\u7684\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},'startupMap.put("wds.linkis.rm.yarnqueue", "dws")')),(0,r.kt)("h3",{id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528"},"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528"),(0,r.kt)("p",null,"Linkis\u63d0\u4f9b\u4e86Java\u548cScala \u7684SDK\u5411Linkis\u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1. \u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.2/user-guide/sdk-manual"},"JAVA SDK Manual"),".\n\u5bf9\u4e8eSpark\u4efb\u52a1\u4f60\u53ea\u9700\u8981\u4fee\u6539Demo\u4e2d\u7684EngineConnType\u548cCodeType\u53c2\u6570\u5373\u53ef:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-2.4.3"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "sql"); // required codeType py,sql,scala\n')),(0,r.kt)("h3",{id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,r.kt)("p",null,"Linkis 1.0\u540e\u63d0\u4f9b\u4e86cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\u5373\u53ef\uff0cSpark\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'## codeType\u5bf9\u5e94\u5173\u7cfb py--\x3epyspark  sql--\x3esparkSQL scala--\x3eSpark scala\nsh ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql -code "show tables"  -submitUser hadoop -proxyUser hadoop\n\n# \u53ef\u4ee5\u5728\u63d0\u4ea4\u53c2\u6570\u901a\u8fc7-confMap wds.linkis.yarnqueue=dws  \u6765\u6307\u5b9ayarn \u961f\u5217\nsh ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql  -confMap wds.linkis.yarnqueue=dws -code "show tables"  -submitUser hadoop -proxyUser hadoop\n')),(0,r.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.2/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,r.kt)("h3",{id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("p",null,"Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165Scriptis\uff0c\u65b0\u5efasql\u3001scala\u6216\u8005pyspark\u811a\u672c\u8fdb\u884c\u6267\u884c\u3002"),(0,r.kt)("p",null,"sql\u7684\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u60a8\u53ef\u4ee5\u65b0\u5efasql\u811a\u672c\u7136\u540e\u7f16\u5199\u8fdb\u884c\u6267\u884c\uff0c\u6267\u884c\u7684\u65f6\u5019\uff0c\u4f1a\u6709\u8fdb\u5ea6\u7684\u663e\u793a\u3002\u5982\u679c\u4e00\u5f00\u59cb\u7528\u6237\u662f\u6ca1\u6709spark\u5f15\u64ce\u7684\u8bdd\uff0csql\u7684\u6267\u884c\u4f1a\u542f\u52a8\u4e00\u4e2aspark\u4f1a\u8bdd(\u8fd9\u91cc\u53ef\u80fd\u4f1a\u82b1\u4e00\u4e9b\u65f6\u95f4)\uff0c\nSparkSession\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u6267\u884csql\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(17054).Z,width:"1920",height:"917"})),(0,r.kt)("p",null,"\u56fe3-2 sparksql\u7684\u6267\u884c\u6548\u679c\u622a\u56fe"),(0,r.kt)("p",null,"spark-scala\u7684\u4efb\u52a1\uff0c\u6211\u4eec\u5df2\u7ecf\u521d\u59cb\u5316\u597d\u4e86sqlContext\u7b49\u53d8\u91cf\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2asqlContext\u8fdb\u884csql\u7684\u6267\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(74969).Z,width:"1920",height:"915"})),(0,r.kt)("p",null,"\u56fe3-3 spark-scala\u7684\u6267\u884c\u6548\u679c\u56fe"),(0,r.kt)("p",null,"\u7c7b\u4f3c\u7684\uff0cpyspark\u7684\u65b9\u5f0f\u4e2d\uff0c\u6211\u4eec\u4e5f\u5df2\u7ecf\u521d\u59cb\u5316\u597d\u4e86SparkSession\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528spark.sql\u7684\u65b9\u5f0f\u8fdb\u884c\u6267\u884csql\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(33790).Z,width:"1914",height:"909"}),"\n\u56fe3-4 pyspark\u7684\u6267\u884c\u65b9\u5f0f"),(0,r.kt)("h2",{id:"4spark\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"},"4.spark\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u5f15\u64ce\u914d\u7f6e\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u8bbe\u7f6e\uff0c\u6bd4\u5982spark\u4f1a\u8bddexecutor\u4e2a\u6570\u548cexecutor\u7684\u5185\u5b58\u3002\u8fd9\u4e9b\u53c2\u6570\u662f\u4e3a\u4e86\u7528\u6237\u80fd\u591f\u66f4\u52a0\u81ea\u7531\u5730\u8bbe\u7f6e\u81ea\u5df1\u7684spark\u7684\u53c2\u6570\uff0c\u53e6\u5916spark\u5176\u4ed6\u53c2\u6570\u4e5f\u53ef\u4ee5\u8fdb\u884c\u4fee\u6539\uff0c\u6bd4\u5982\u7684pyspark\u7684python\u7248\u672c\u7b49\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/168044389-55aea9de-6dfa-4b57-81a6-220e242f9eec.png",alt:"spark"})),(0,r.kt)("p",null,"\u56fe4-1 spark\u7684\u7528\u6237\u81ea\u5b9a\u4e49\u914d\u7f6e\u7ba1\u7406\u53f0"))}c.isMDXComponent=!0},33790:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/pyspakr-run-39cd0bbe6c61d2fc7ad933db99c33d06.png"},74969:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/scala-run-77cd49935a85082d9346d28f3ecf44e3.png"},17054:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/sparksql-run-d748d4fab0548fa92a6e91f42c911466.png"}}]);