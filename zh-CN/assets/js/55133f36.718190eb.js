"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[51980],{3905:(e,n,i)=>{i.d(n,{Zo:()=>o,kt:()=>u});var l=i(67294);function s(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,l)}return i}function t(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){s(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,l,s=function(e,n){if(null==e)return{};var i,l,s={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],n.indexOf(i)>=0||(s[i]=e[i]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var p=l.createContext({}),c=function(e){var n=l.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):t(t({},n),e)),i},o=function(e){var n=c(e.components);return l.createElement(p.Provider,{value:n},e.children)},k="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var i=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),k=c(i),d=s,u=k["".concat(p,".").concat(d)]||k[d]||g[d]||a;return i?l.createElement(u,t(t({ref:n},o),{},{components:i})):l.createElement(u,t({ref:n},o))}));function u(e,n){var i=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=i.length,t=new Array(a);t[0]=d;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[k]="string"==typeof e?e:s,t[1]=r;for(var c=2;c<a;c++)t[c]=i[c];return l.createElement.apply(null,t)}return l.createElement.apply(null,i)}d.displayName="MDXCreateElement"},11350:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>t,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var l=i(87462),s=(i(67294),i(3905));const a={title:"\u670d\u52a1\u8c03\u8bd5\u6307\u5f15",sidebar_position:2},t=void 0,r={unversionedId:"development/linkis-debug",id:"version-1.1.2/development/linkis-debug",title:"\u670d\u52a1\u8c03\u8bd5\u6307\u5f15",description:"\u5bfc\u8bed\uff1a\u672c\u6587\u8be6\u7ec6\u8bb0\u5f55\u4e86\u5982\u4f55\u5728IDEA\u4e2d\u914d\u7f6e\u548c\u542f\u52a8Linkis\u7684\u5404\u4e2a\u5fae\u670d\u52a1\uff0c\u5e76\u5b9e\u73b0JDBC\u3001Python\u3001Shell\u7b49\u811a\u672c\u7684\u63d0\u4ea4\u548c\u6267\u884c\u3002\u5728Mac OS\u4e0a\uff0cLinkis\u7684\u5404\u4e2a\u5fae\u670d\u52a1\u90fd\u652f\u6301\u672c\u5730\u8c03\u8bd5\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/development/linkis-debug.md",sourceDirName:"development",slug:"/development/linkis-debug",permalink:"/zh-CN/docs/1.1.2/development/linkis-debug",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/development/linkis-debug.md",tags:[],version:"1.1.2",sidebarPosition:2,frontMatter:{title:"\u670d\u52a1\u8c03\u8bd5\u6307\u5f15",sidebar_position:2},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"Linkis \u914d\u7f6e\u53c2\u6570\u4ecb\u7ecd",permalink:"/zh-CN/docs/1.1.2/development/linkis-config"},next:{title:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce",permalink:"/zh-CN/docs/1.1.2/development/new-engine-conn"}},p={},c=[{value:"1. \u4ee3\u7801\u8c03\u8bd5\u73af\u5883",id:"1-\u4ee3\u7801\u8c03\u8bd5\u73af\u5883",level:2},{value:"2. \u51c6\u5907\u4ee3\u7801\u5e76\u7f16\u8bd1",id:"2-\u51c6\u5907\u4ee3\u7801\u5e76\u7f16\u8bd1",level:2},{value:"3. \u914d\u7f6e\u5e76\u542f\u52a8\u670d\u52a1",id:"3-\u914d\u7f6e\u5e76\u542f\u52a8\u670d\u52a1",level:2},{value:"3.1 add mysql-connector-java\u5230classpath\u4e2d",id:"31-add-mysql-connector-java\u5230classpath\u4e2d",level:3},{value:"3.2 \u8c03\u6574log4j2.xml\u914d\u7f6e",id:"32-\u8c03\u6574log4j2xml\u914d\u7f6e",level:3},{value:"3.3 \u542f\u52a8eureka\u670d\u52a1",id:"33-\u542f\u52a8eureka\u670d\u52a1",level:3},{value:"3.4 \u542f\u52a8linkis-mg-gateway",id:"34-\u542f\u52a8linkis-mg-gateway",level:3},{value:"3.5 \u542f\u52a8linkis-ps-publicservice",id:"35-\u542f\u52a8linkis-ps-publicservice",level:3},{value:"3.6 \u542f\u52a8linkis-ps-cs",id:"36-\u542f\u52a8linkis-ps-cs",level:3},{value:"3.7 \u542f\u52a8linkis-cg-linkismanager",id:"37-\u542f\u52a8linkis-cg-linkismanager",level:3},{value:"3.8 \u542f\u52a8linkis-cg-entrance",id:"38-\u542f\u52a8linkis-cg-entrance",level:3},{value:"3.9 \u542f\u52a8cg-engineconnmanager",id:"39-\u542f\u52a8cg-engineconnmanager",level:3},{value:"3.10 \u542f\u52a8linkis-cg-engineplugin",id:"310-\u542f\u52a8linkis-cg-engineplugin",level:3},{value:"3.11 \u5173\u952e\u914d\u7f6e\u4fee\u6539",id:"311-\u5173\u952e\u914d\u7f6e\u4fee\u6539",level:3},{value:"3.11.1 conf/linkis.properties",id:"3111-conflinkisproperties",level:4},{value:"3.11.2 conf/linkis-cg-entrance.properties",id:"3112-conflinkis-cg-entranceproperties",level:4},{value:"3.11.3 conf/linkis-cg-engineconnmanager.properties",id:"3113-conflinkis-cg-engineconnmanagerproperties",level:4},{value:"3.11.4 conf/linkis-cg-engineplugin.properties",id:"3114-conflinkis-cg-enginepluginproperties",level:4},{value:"3.12 \u4e3a\u5f53\u524d\u7528\u6237\u8bbe\u7f6esudo\u514d\u5bc6",id:"312-\u4e3a\u5f53\u524d\u7528\u6237\u8bbe\u7f6esudo\u514d\u5bc6",level:3},{value:"3.13 \u670d\u52a1\u6d4b\u8bd5",id:"313-\u670d\u52a1\u6d4b\u8bd5",level:3},{value:"4. \u8fdc\u7a0b\u8c03\u8bd5\u670d\u52a1\u6307\u5f15",id:"4-\u8fdc\u7a0b\u8c03\u8bd5\u670d\u52a1\u6307\u5f15",level:2},{value:"4.1 \u6253\u5f00\u8fdc\u7a0b\u8c03\u8bd5\u7aef\u53e3",id:"41-\u6253\u5f00\u8fdc\u7a0b\u8c03\u8bd5\u7aef\u53e3",level:3},{value:"4.2 \u8fdb\u5165{LINKIS_HOME}/sbin/ext,\u4fee\u6539\u6a21\u5757\u914d\u7f6e\u6587\u4ef6\u5f00\u542f\u8fdc\u7a0b\u8c03\u7528\u7aef\u53e3",id:"42-\u8fdb\u5165linkis_homesbinext\u4fee\u6539\u6a21\u5757\u914d\u7f6e\u6587\u4ef6\u5f00\u542f\u8fdc\u7a0b\u8c03\u7528\u7aef\u53e3",level:3},{value:"4.3 \u91cd\u542f\u9700\u8981\u8c03\u8bd5\u7684\u670d\u52a1",id:"43-\u91cd\u542f\u9700\u8981\u8c03\u8bd5\u7684\u670d\u52a1",level:3},{value:"4.4 \u7f16\u8bd1\u5668\u914d\u7f6e\u8fdc\u7a0b\u8c03\u8bd5",id:"44-\u7f16\u8bd1\u5668\u914d\u7f6e\u8fdc\u7a0b\u8c03\u8bd5",level:3},{value:"4.5 \u5f00\u59cb\u8c03\u8bd5",id:"45-\u5f00\u59cb\u8c03\u8bd5",level:3}],o={toc:c},k="wrapper";function g(e){let{components:n,...a}=e;return(0,s.kt)(k,(0,l.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u5bfc\u8bed\uff1a\u672c\u6587\u8be6\u7ec6\u8bb0\u5f55\u4e86\u5982\u4f55\u5728IDEA\u4e2d\u914d\u7f6e\u548c\u542f\u52a8Linkis\u7684\u5404\u4e2a\u5fae\u670d\u52a1\uff0c\u5e76\u5b9e\u73b0JDBC\u3001Python\u3001Shell\u7b49\u811a\u672c\u7684\u63d0\u4ea4\u548c\u6267\u884c\u3002\u5728Mac OS\u4e0a\uff0cLinkis\u7684\u5404\u4e2a\u5fae\u670d\u52a1\u90fd\u652f\u6301\u672c\u5730\u8c03\u8bd5\u3002\n\u4f46\u5728Windows OS\u4e0a\uff0clinkis-cg-engineplugin\u548clinkis-cg-engineconnmanager\u4e24\u4e2a\u670d\u52a1\u6682\u4e0d\u652f\u6301\u5728\u672c\u5730\u8fdb\u884c\u8c03\u8bd5\uff0c\u53ef\u53c2\u8003\u4e0b\u6587\u7b2c4\u5c0f\u8282\u7684\u8fdc\u7a0b\u8c03\u8bd5\u6587\u6863\u8fdb\u884c\u8c03\u8bd5\u3002")),(0,s.kt)("h4",null,(0,s.kt)("font",{color:"red"},"linkis 1.0.3\u7248\u672c\u524d\uff0c\u8fd8\u672a\u8fdb\u5165apache\u5b75\u5316\uff0c\u7ec4\u7ec7\u8fd8\u662f\u5f52\u5c5ewebank,\u4e3b\u7c7b\u7684\u5305\u540d\u4e3a`com.webank.wedatasphere.linkis`\uff0c\u8c03\u8bd5\u65f6\uff0c\u6ce8\u610f\u533a\u5206\u3002")),(0,s.kt)("h2",{id:"1-\u4ee3\u7801\u8c03\u8bd5\u73af\u5883"},"1. \u4ee3\u7801\u8c03\u8bd5\u73af\u5883"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"jdk1.8"),(0,s.kt)("li",{parentName:"ul"},"maven3.5+")),(0,s.kt)("h2",{id:"2-\u51c6\u5907\u4ee3\u7801\u5e76\u7f16\u8bd1"},"2. \u51c6\u5907\u4ee3\u7801\u5e76\u7f16\u8bd1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:apache/linkis.git\ncd linkis\ngit checkout dev-1.2.0\n")),(0,s.kt)("p",null,"\u514b\u9686Linkis\u7684\u6e90\u7801\u5230\u672c\u5730\uff0c\u5e76\u7528IDEA\u6253\u5f00\uff0c\u9996\u6b21\u6253\u5f00\u9879\u76ee\u4f1a\u4ecemaven\u4ed3\u5e93\u4e2d\u4e0b\u8f7dLinkis\u9879\u76ee\u7f16\u8bd1\u6240\u9700\u7684\u4f9d\u8d56jar\u5305\u3002\u5f53\u4f9d\u8d56jar\u5305\u52a0\u8f7d\u5b8c\u6bd5\u4e4b\u540e\uff0c\u8fd0\u884c\u5982\u4e0b\u7f16\u8bd1\u6253\u5305\u547d\u4ee4\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"mvn -N install\nmvn clean install\n")),(0,s.kt)("p",null,"\u7f16\u8bd1\u547d\u4ee4\u8fd0\u884c\u6210\u529f\u4e4b\u540e\uff0c\u5728\u76ee\u5f55linkis/linkis-dist/target/\u4e0b\u53ef\u627e\u5230\u7f16\u8bd1\u597d\u7684\u5b89\u88c5\u5305\uff1aapache-linkis-\u7248\u672c\u53f7-incubating-bin.tar.gz"),(0,s.kt)("h2",{id:"3-\u914d\u7f6e\u5e76\u542f\u52a8\u670d\u52a1"},"3. \u914d\u7f6e\u5e76\u542f\u52a8\u670d\u52a1"),(0,s.kt)("h3",{id:"31-add-mysql-connector-java\u5230classpath\u4e2d"},"3.1 add mysql-connector-java\u5230classpath\u4e2d"),(0,s.kt)("p",null,"\u670d\u52a1\u542f\u52a8\u8fc7\u7a0b\u4e2d\u5982\u679c\u9047\u5230mysql\u9a71\u52a8\u7c7b\u627e\u4e0d\u5230\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u628amysql-connector-java-\u7248\u672c\u53f7.jar\u6dfb\u52a0\u5230\u5bf9\u5e94\u670d\u52a1\u6a21\u5757\u7684classpath\u4e0b\uff0c\u8be6\u7ec6\u64cd\u4f5c\u8bf7\u53c2\u80033.5\u5c0f\u8282\u3002"),(0,s.kt)("p",null,"\u76ee\u524d\u4f9d\u8d56mysql\u7684\u670d\u52a1\u6709\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"linkis-mg-gateway"),(0,s.kt)("li",{parentName:"ul"},"linkis-ps-publicservice"),(0,s.kt)("li",{parentName:"ul"},"linkis-cg-linkismanage")),(0,s.kt)("h3",{id:"32-\u8c03\u6574log4j2xml\u914d\u7f6e"},"3.2 \u8c03\u6574log4j2.xml\u914d\u7f6e"),(0,s.kt)("p",null,"\u5728Linkis\u6e90\u7801\u6587\u4ef6\u5939\u4e0b\uff0c\u5b50\u76ee\u5f55linkis-dist/package/conf\u4e2d\uff0c\u662fLinkis\u7684\u4e00\u4e9b\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\uff0c\u9996\u5148\u5bf9log4j2.xml\u6587\u4ef6\u8fdb\u884c\u7f16\u8f91\uff0c\u5728\u5176\u4e2d\u589e\u52a0\u65e5\u5fd7\u8f93\u51fa\u5230\u63a7\u5236\u53f0\u7684\u914d\u7f6e\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"log4j2.xml",src:i(22269).Z,width:"2970",height:"1292"})),(0,s.kt)("p",null,"\u8fd9\u91cc\u53ea\u8d34\u51fa\u6765\u9700\u8981\u65b0\u589e\u7684\u914d\u7f6e\u5185\u5bb9\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},'<configuration status="error" monitorInterval="30">\n    <appenders>\n        <Console name="Console" target="SYSTEM_OUT">\n            <ThresholdFilter level="INFO" onMatch="ACCEPT" onMismatch="DENY"/>\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Console>\n    </appenders>\n    <loggers>\n        <root level="INFO">\n            <appender-ref ref="Console"/>\n        </root>\n    </loggers>\n</configuration>\n')),(0,s.kt)("h3",{id:"33-\u542f\u52a8eureka\u670d\u52a1"},"3.3 \u542f\u52a8eureka\u670d\u52a1"),(0,s.kt)("p",null,"Linkis\u548cDSS\u7684\u670d\u52a1\u90fd\u4f9d\u8d56Eureka\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u9996\u5148\u542f\u52a8Eureka\u670d\u52a1\uff0cEureka\u670d\u52a1\u53ef\u4ee5\u5728\u672c\u5730\u542f\u52a8\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8fdc\u7a0b\u542f\u52a8\u7684\u670d\u52a1\u3002\u4fdd\u8bc1\u5404\u4e2a\u670d\u52a1\u90fd\u80fd\u8bbf\u95ee\u5230Eureka\u7684IP\u548c\u7aef\u53e3\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u7740\u624b\u542f\u52a8\u5176\u4ed6\u5fae\u670d\u52a1\u4e86\u3002"),(0,s.kt)("p",null,"\u5728Linkis\u5185\u90e8\u662f\u901a\u8fc7-DserviceName\u53c2\u6570\u8bbe\u7f6e\u5e94\u7528\u540d\u4ee5\u53ca\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\uff0c\u6240\u4ee5-DserviceName\u662f\u5fc5\u987b\u8981\u6307\u5b9a\u7684VM\u542f\u52a8\u53c2\u6570\u3002"),(0,s.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 \u201c-Xbootclasspath/a:\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u201d\u547d\u4ee4\uff0c\u5c06\u914d\u7f6e\u6587\u4ef6\u8ffd\u52a0\u5230\u5f15\u5bfc\u7a0b\u5e8f\u7c7b\u7684\u8def\u5f84\u672b\u5c3e\uff0c\u5373\u5c06\u4f9d\u8d56\u7684\u914d\u7f6e\u6587\u4ef6\u52a0\u5230classpath\u4e2d\u3002"),(0,s.kt)("p",null,"\u901a\u8fc7\u52fe\u9009Include dependencies with \u201cProvided\u201d scope \uff0c\u53ef\u4ee5\u5728\u8c03\u8bd5\u65f6\uff0c\u5f15\u5165provided\u7ea7\u522b\u7684\u4f9d\u8d56\u5305\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"eureka",src:i(46988).Z,width:"2110",height:"1378"})),(0,s.kt)("p",null,"\u53c2\u6570\u89e3\u91ca\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"[service name]\nlinkis-mg-eureka\n\n[Use classpath of module]\nlinkis-eureka\n\n[Main Class]\norg.apache.linkis.eureka.SpringCloudEurekaApplication\n\n[VM Opitons]\n-DserviceName=linkis-mg-eureka -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/linkis/linkis-dist/package/conf\n\n[Program arguments]\n--spring.profiles.active=eureka --eureka.instance.preferIpAddress=true\n")),(0,s.kt)("p",null,"\u6ce8\u610f\u8c03\u8bd5\u914d\u7f6e\u4e2d\u6d89\u53ca\u5230\u7684\u672c\u5730\u8def\u5f84\uff0c\u9700\u8981\u8981\u4fee\u6539\u6210\u81ea\u5df1\u8bbe\u7f6e\u7684\u8def\u5f84\uff1b\n\u5728Windows\u4e2d\u8def\u5f84\u4e66\u5199\u89c4\u5219\u662f\uff1aD:\\yourDir\\linkis\\linkis-dist\\package\\conf\n\uff08\u9488\u5bf9\u4ee5\u4e0b\u5fae\u670d\u52a1\u540c\u6837\u9002\u7528\uff09"),(0,s.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u9ed8\u8ba4\u768420303\u7aef\u53e3\u53ef\u4ee5\u4fee\u6539\u7aef\u53e3\u914d\u7f6e\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\u6587\u4ef6\u8def\u5f84\uff1aconf/application-eureka.yml\n\u4fee\u6539\u7aef\u53e3\uff1a\nserver:\n  port: 8080 ##\u542f\u52a8\u7684\u7aef\u53e3\n")),(0,s.kt)("p",null,"\u4e0a\u8ff0\u8bbe\u7f6e\u5b8c\u6210\u4e4b\u540e\uff0c\u76f4\u63a5\u8fd0\u884c\u6b64Application\uff0c\u6210\u529f\u542f\u52a8\u540e\u53ef\u4ee5\u901a\u8fc7http://localhost:20303/ \u67e5\u770beureka\u670d\u52a1\u5217\u8868\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"eureka-web",src:i(34432).Z,width:"2260",height:"742"})),(0,s.kt)("h3",{id:"34-\u542f\u52a8linkis-mg-gateway"},"3.4 \u542f\u52a8linkis-mg-gateway"),(0,s.kt)("p",null,"linkis-mg-gateway\u662fLinkis\u7684\u670d\u52a1\u7f51\u5173\uff0c\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u4f1a\u7ecf\u7531gateway\u6765\u8f6c\u53d1\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u4e0a\u3002"),(0,s.kt)("p",null,"\u542f\u52a8\u670d\u52a1\u5668\u524d\uff0c\u9996\u5148\u9700\u8981\u7f16\u8f91conf/linkis-mg-gateway.properties\u914d\u7f6e\u6587\u4ef6\uff0c\u589e\u52a0\u7ba1\u7406\u5458\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u7528\u6237\u540d\u9700\u8981\u4e0e\u4f60\u5f53\u524d\u767b\u5f55\u7684mac\u7528\u6237\u540d\u4fdd\u6301\u4e00\u81f4\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.admin.user=leojie\nwds.linkis.admin.password=123456\n")),(0,s.kt)("p",null,"\u8bbe\u7f6e linkis-mg-gateway\u7684\u542f\u52a8Application"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"gateway-app",src:i(1163).Z,width:"2062",height:"1060"})),(0,s.kt)("p",null,"\u53c2\u6570\u89e3\u91ca\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"[Service Name]\nlinkis-mg-gateway\n\n[Use classpath of module]\nlinkis-gateway-server-support\n\n[VM Opitons]\n-DserviceName=linkis-mg-gateway -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/linkis/linkis-dist/package/conf\n\n[main Class]\norg.apache.linkis.gateway.springcloud.LinkisGatewayApplication\n")),(0,s.kt)("p",null,"\u4e0a\u8ff0\u8bbe\u7f6e\u5b8c\u6210\u4e4b\u540e\uff0c\u53ef\u76f4\u63a5\u8fd0\u884c\u6b64Application\u3002"),(0,s.kt)("h3",{id:"35-\u542f\u52a8linkis-ps-publicservice"},"3.5 \u542f\u52a8linkis-ps-publicservice"),(0,s.kt)("p",null,"publicservice\u662fLinkis\u7684\u516c\u5171\u589e\u5f3a\u670d\u52a1\uff0c\u4e3a\u5176\u4ed6\u5fae\u670d\u52a1\u6a21\u5757\u63d0\u4f9b\u7edf\u4e00\u914d\u7f6e\u7ba1\u7406\u3001\u4e0a\u4e0b\u6587\u670d\u52a1\u3001\u7269\u6599\u5e93\u3001\u6570\u636e\u6e90\u7ba1\u7406\u3001\u5fae\u670d\u52a1\u7ba1\u7406\u548c\u5386\u53f2\u4efb\u52a1\u67e5\u8be2\u7b49\u529f\u80fd\u7684\u6a21\u5757\u3002"),(0,s.kt)("p",null,"\u8bbe\u7f6elinkis-ps-publicservice\u7684\u542f\u52a8Application"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"publicservice-app",src:i(45081).Z,width:"2056",height:"1126"})),(0,s.kt)("p",null,"\u53c2\u6570\u89e3\u91ca\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"[Service Name]\nlinkis-ps-publicservice\n\n[Module Name]\nlinkis-public-enhancements\n\n[VM Opitons]\n-DserviceName=linkis-ps-publicservice -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/linkis/linkis-dist/package/conf \n\n[main Class]\norg.apache.linkis.filesystem.LinkisPublicServiceApp\n\n[Add provided scope to classpath]\n\u901a\u8fc7\u52fe\u9009Include dependencies with \u201cProvided\u201d scope \uff0c\u53ef\u4ee5\u5728\u8c03\u8bd5\u65f6\uff0c\u5f15\u5165provided\u7ea7\u522b\u7684\u4f9d\u8d56\u5305\u3002\n")),(0,s.kt)("p",null,"\u76f4\u63a5\u542f\u52a8publicservice\u65f6\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u5982\u4e0b\u62a5\u9519\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"publicservice-debug-error",src:i(88211).Z,width:"2118",height:"500"})),(0,s.kt)("p",null,"\u9700\u8981\u628apublic-module\u6a21\u5757\u52a0\u5230linkis-public-enhancements\u6a21\u5757\u7684classpath\u4e0b\uff0c\u8be6\u7ec6\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"step-1",src:i(92544).Z,width:"1380",height:"630"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"step-2",src:i(78413).Z,width:"1804",height:"540"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"step-3",src:i(72315).Z,width:"1738",height:"940"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"step-4",src:i(12601).Z,width:"1698",height:"598"})),(0,s.kt)("p",null,"\u505a\u5b8c\u4e0a\u8ff0\u914d\u7f6e\u540e\u91cd\u65b0\u542f\u52a8publicservice\u7684Application"),(0,s.kt)("h3",{id:"36-\u542f\u52a8linkis-ps-cs"},"3.6 \u542f\u52a8linkis-ps-cs"),(0,s.kt)("p",null,"\u542f\u52a8ps-cs\u670d\u52a1\u4e4b\u524d\uff0c\u9700\u8981\u4fdd\u8bc1publicservice\u670d\u52a1\u6210\u529f\u542f\u52a8\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"ps-cs-App",src:i(22898).Z,width:"2070",height:"1112"})),(0,s.kt)("p",null,"\u53c2\u6570\u89e3\u91ca\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"[Service Name]\nlinkis-ps-cs\n\n[Use classpath of module]\nlinkis-cs-server\n\n[VM Opitons]\n-DserviceName=linkis-ps-cs -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/linkis/linkis-dist/package/conf \n\n[main Class]\norg.apache.linkis.cs.server.LinkisCSApplication\n\n[Add provided scope to classpath]\n\u901a\u8fc7\u52fe\u9009Include dependencies with \u201cProvided\u201d scope \uff0c\u53ef\u4ee5\u5728\u8c03\u8bd5\u65f6\uff0c\u5f15\u5165provided\u7ea7\u522b\u7684\u4f9d\u8d56\u5305\u3002\n")),(0,s.kt)("h3",{id:"37-\u542f\u52a8linkis-cg-linkismanager"},"3.7 \u542f\u52a8linkis-cg-linkismanager"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"cg-linkismanager-APP",src:i(21186).Z,width:"2046",height:"1094"})),(0,s.kt)("p",null,"\u53c2\u6570\u89e3\u91ca\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"[Service Name]\nlinkis-cg-linkismanager\n\n[Use classpath of module]\nlinkis-application-manager\n\n[VM Opitons]\n-DserviceName=linkis-cg-linkismanager -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/linkis/linkis-dist/package/conf\n\n[main Class]\norg.apache.linkis.manager.am.LinkisManagerApplication\n\n[Add provided scope to classpath]\n\u901a\u8fc7\u52fe\u9009Include dependencies with \u201cProvided\u201d scope \uff0c\u53ef\u4ee5\u5728\u8c03\u8bd5\u65f6\uff0c\u5f15\u5165provided\u7ea7\u522b\u7684\u4f9d\u8d56\u5305\u3002\n")),(0,s.kt)("h3",{id:"38-\u542f\u52a8linkis-cg-entrance"},"3.8 \u542f\u52a8linkis-cg-entrance"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"cg-entrance-APP",src:i(4149).Z,width:"2062",height:"1134"})),(0,s.kt)("p",null,"\u53c2\u6570\u89e3\u91ca\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"[Service Name]\nlinkis-cg-entrance\n\n[Use classpath of module]\nlinkis-entrance\n\n[VM Opitons]\n-DserviceName=linkis-cg-entrance -Xbootclasspath/a:D:\\yourDir\\linkis\\linkis-dist\\package\\conf\n\n[main Class]\norg.apache.linkis.entrance.LinkisEntranceApplication\n\n[Add provided scope to classpath]\n\u901a\u8fc7\u52fe\u9009Include dependencies with \u201cProvided\u201d scope \uff0c\u53ef\u4ee5\u5728\u8c03\u8bd5\u65f6\uff0c\u5f15\u5165provided\u7ea7\u522b\u7684\u4f9d\u8d56\u5305\u3002\n")),(0,s.kt)("h3",{id:"39-\u542f\u52a8cg-engineconnmanager"},"3.9 \u542f\u52a8cg-engineconnmanager"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"engineconnmanager-app",src:i(87501).Z,width:"2064",height:"1118"})),(0,s.kt)("p",null,"\u53c2\u6570\u89e3\u91ca\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"[Service Name]\nlinkis-cg-engineconnmanager\n\n[Use classpath of module]\nlinkis-engineconn-manager-server\n\n[VM Opitons]\n-DserviceName=linkis-cg-engineconnmanager -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/linkis/linkis-dist/package/conf -DJAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-8.jdk/Contents/Home/\n\n[main Class]\norg.apache.linkis.ecm.server.LinkisECMApplication\n\n[Add provided scope to classpath]\n\u901a\u8fc7\u52fe\u9009Include dependencies with \u201cProvided\u201d scope \uff0c\u53ef\u4ee5\u5728\u8c03\u8bd5\u65f6\uff0c\u5f15\u5165provided\u7ea7\u522b\u7684\u4f9d\u8d56\u5305\u3002\n")),(0,s.kt)("p",null,"-DJAVA_HOME\u662f\u4e3a\u4e86\u6307\u5b9aecm\u542f\u52a8\u5f15\u64ce\u65f6\u6240\u4f7f\u7528\u7684java\u547d\u4ee4\u6240\u5728\u7684\u8def\u5f84\uff0c\u5982\u679c\u4f60\u9ed8\u8ba4JAVA\u73af\u5883\u53d8\u91cf\u4e2d\u7684\u7248\u672c\u6ee1\u8db3\u9700\u8981\uff0c\u6b64\u914d\u7f6e\u53ef\u4ee5\u4e0d\u52a0"),(0,s.kt)("p",null,"\u9488\u5bf9linkis-cg-engineplugin\u6a21\u5757\u8c03\u8bd5\u6682\u53ea\u652f\u6301Mac OS"),(0,s.kt)("h3",{id:"310-\u542f\u52a8linkis-cg-engineplugin"},"3.10 \u542f\u52a8linkis-cg-engineplugin"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"engineplugin-app",src:i(71224).Z,width:"2084",height:"1190"})),(0,s.kt)("p",null,"\u53c2\u6570\u89e3\u91ca\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"[Service Name]\nlinkis-cg-engineplugin\n\n[Use classpath of module]\nlinkis-engineconn-plugin-server\n\n[VM Opitons]\n-DserviceName=linkis-cg-engineplugin -Xbootclasspath/a:/Users/leojie/other_project/apache/linkis/linkis/linkis-dist/package/conf\n\n[main Class]\norg.apache.linkis.engineplugin.server.LinkisEngineConnPluginServer\n\n[Add provided scope to classpath]\n\u901a\u8fc7\u52fe\u9009Include dependencies with \u201cProvided\u201d scope \uff0c\u53ef\u4ee5\u5728\u8c03\u8bd5\u65f6\uff0c\u5f15\u5165provided\u7ea7\u522b\u7684\u4f9d\u8d56\u5305\u3002\n")),(0,s.kt)("p",null,"\u542f\u52a8engineplugin\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u9047\u5230\u5982\u4e0b\u62a5\u9519\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"engineplugin-debug-error",src:i(26783).Z,width:"2430",height:"714"})),(0,s.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\u662f\u628apublic-module\u6a21\u5757\u52a0\u5230linkis-engineconn-plugin-server\u6a21\u5757\u7684classpath\u4e0b\uff0c\u53c2\u80033.5\u5c0f\u8282"),(0,s.kt)("p",null,"\u9488\u5bf9linkis-cg-engineplugin\u6a21\u5757\u8c03\u8bd5\u6682\u53ea\u652f\u6301Mac OS"),(0,s.kt)("h3",{id:"311-\u5173\u952e\u914d\u7f6e\u4fee\u6539"},"3.11 \u5173\u952e\u914d\u7f6e\u4fee\u6539"),(0,s.kt)("p",null,"\u4ee5\u4e0a\u64cd\u4f5c\u53ea\u662f\u5b8c\u6210\u4e86\u5bf9Linkis\u5404\u4e2a\u5fae\u670d\u52a1\u542f\u52a8Application\u7684\u914d\u7f6e\uff0c\u9664\u6b64\u4e4b\u5916\uff0cLinkis\u670d\u52a1\u542f\u52a8\u65f6\u6240\u52a0\u8f7d\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u6709\u4e9b\u5173\u952e\u914d\u7f6e\u4e5f\u9700\u8981\u505a\u9488\u5bf9\u6027\u5730\u4fee\u6539\uff0c\u5426\u5219\u542f\u52a8\u670d\u52a1\u6216\u811a\u672c\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u9047\u5230\u4e00\u4e9b\u62a5\u9519\u3002\u5173\u952e\u914d\u7f6e\u7684\u4fee\u6539\u5f52\u7eb3\u5982\u4e0b\uff1a"),(0,s.kt)("h4",{id:"3111-conflinkisproperties"},"3.11.1 conf/linkis.properties"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"# linkis\u5e95\u5c42\u6570\u636e\u5e93\u8fde\u63a5\u53c2\u6570\u914d\u7f6e\nwds.linkis.server.mybatis.datasource.url=jdbc:mysql://yourip:3306/linkis?characterEncoding=UTF-8\nwds.linkis.server.mybatis.datasource.username=your username\nwds.linkis.server.mybatis.datasource.password=your password\n\n# \u8bbe\u7f6ebml\u7269\u6599\u5b58\u50a8\u8def\u5f84\u4e0d\u4e3ahdfs\nwds.linkis.bml.is.hdfs=false\nwds.linkis.bml.local.prefix=/Users/leojie/software/linkis/data/bml\n\nwds.linkis.home=/Users/leojie/software/linkis\n\n# \u8bbe\u7f6e\u7ba1\u7406\u5458\u7528\u6237\u540d\uff0c\u4f60\u7684\u672c\u673a\u7528\u6237\u540d\nwds.linkis.governance.station.admin=leojie\n")),(0,s.kt)("p",null,"\u5728\u914d\u7f6elinkis\u5e95\u5c42\u6570\u636e\u5e93\u8fde\u63a5\u53c2\u6570\u4e4b\u524d\uff0c\u8bf7\u521b\u5efalinkis\u6570\u636e\u5e93\uff0c\u5e76\u8fd0\u884clinkis-dist/package/db/linkis_ddl.sql\u548clinkis-dist/package/db/linkis_dml.sql\u6765\u521d\u59cb\u5316\u6240\u6709\u8868\u548c\u6570\u636e\u3002"),(0,s.kt)("p",null,"\u5176\u4e2dwds.linkis.home=/Users/leojie/software/linkis\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff0c\u91cc\u9762\u53ea\u653e\u7f6e\u4e86lib\u76ee\u5f55\u548cconf\u76ee\u5f55\u3002\u5f15\u64ce\u8fdb\u7a0b\u542f\u52a8\u65f6\u4f1a\u628awds.linkis.home\u4e2d\u7684conf\u548clib\u8def\u5f84\uff0c\u52a0\u5230classpath\u4e0b\uff0c\u5982\u679cwds.linkis.home\u4e0d\u6307\u5b9a\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u76ee\u5f55\u627e\u4e0d\u5230\u7684\u5f02\u5e38\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"linkis-home",src:i(30655).Z,width:"1448",height:"130"})),(0,s.kt)("h4",{id:"3112-conflinkis-cg-entranceproperties"},"3.11.2 conf/linkis-cg-entrance.properties"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"# entrance\u670d\u52a1\u6267\u884c\u4efb\u52a1\u7684\u65e5\u5fd7\u76ee\u5f55\nwds.linkis.entrance.config.log.path=file:///Users/leojie/software/linkis/data/entranceConfigLog\n\n# \u7ed3\u679c\u96c6\u4fdd\u5b58\u76ee\u5f55\uff0c\u672c\u673a\u7528\u6237\u9700\u8981\u8bfb\u5199\u6743\u9650\nwds.linkis.resultSet.store.path=file:///Users/leojie/software/linkis/data/resultSetDir\n")),(0,s.kt)("h4",{id:"3113-conflinkis-cg-engineconnmanagerproperties"},"3.11.3 conf/linkis-cg-engineconnmanager.properties"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.engineconn.root.dir=/Users/leojie/software/linkis/data/engineconnRootDir\n")),(0,s.kt)("p",null,"\u4e0d\u4fee\u6539\u53ef\u80fd\u4f1a\u9047\u5230\u8def\u5f84\u4e0d\u5b58\u5728\u5f02\u5e38\u3002"),(0,s.kt)("h4",{id:"3114-conflinkis-cg-enginepluginproperties"},"3.11.4 conf/linkis-cg-engineplugin.properties"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.engineconn.home=/Users/leojie/other_project/apache/linkis/linkis/linkis-engineconn-plugins/shell/target/out\n\nwds.linkis.engineconn.plugin.loader.store.path=/Users/leojie/other_project/apache/linkis/linkis/linkis-engineconn-plugins/shell/target/out\n")),(0,s.kt)("p",null,"\u8fd9\u91cc\u4e24\u4e2a\u914d\u7f6e\u4e3b\u8981\u4e3a\u4e86\u6307\u5b9a\u5f15\u64ce\u5b58\u50a8\u7684\u6839\u76ee\u5f55\uff0c\u6307\u5b9a\u4e3atarget/out\u7684\u4e3b\u8981\u76ee\u7684\u662f\uff0c\u5f15\u64ce\u76f8\u5173\u4ee3\u7801\u6216\u914d\u7f6e\u6539\u52a8\u540e\u53ef\u4ee5\u76f4\u63a5\u91cd\u542fengineplugin\u670d\u52a1\u540e\u751f\u6548\u3002"),(0,s.kt)("h3",{id:"312-\u4e3a\u5f53\u524d\u7528\u6237\u8bbe\u7f6esudo\u514d\u5bc6"},"3.12 \u4e3a\u5f53\u524d\u7528\u6237\u8bbe\u7f6esudo\u514d\u5bc6"),(0,s.kt)("p",null,"\u5f15\u64ce\u62c9\u8d77\u65f6\u9700\u8981\u4f7f\u7528sudo\u6765\u6267\u884c\u542f\u52a8\u5f15\u64ce\u8fdb\u7a0b\u7684shell\u547d\u4ee4\uff0cmac\u4e0a\u5f53\u524d\u7528\u6237\u4f7f\u7528sudo\u65f6\u4e00\u822c\u90fd\u9700\u8981\u8f93\u5165\u5bc6\u7801\uff0c\u56e0\u6b64\uff0c\u9700\u8981\u4e3a\u5f53\u524d\u7528\u6237\u8bbe\u7f6esudo\u514d\u5bc6\uff0c\u8bbe\u7f6e\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo chmod u-w /etc/sudoers\nsudo visudo\n\u5c06#%admin ALL=(ALL) AL\u66ff\u6362\u4e3a %admin ALL=(ALL) NOPASSWD: ALL\n\u4fdd\u5b58\u6587\u4ef6\u9000\u51fa\n")),(0,s.kt)("h3",{id:"313-\u670d\u52a1\u6d4b\u8bd5"},"3.13 \u670d\u52a1\u6d4b\u8bd5"),(0,s.kt)("p",null,"\u4fdd\u8bc1\u4e0a\u8ff0\u670d\u52a1\u90fd\u662f\u6210\u529f\u542f\u52a8\u72b6\u6001\uff0c\u7136\u540e\u5728postman\u4e2d\u6d4b\u8bd5\u63d0\u4ea4\u8fd0\u884cshell\u811a\u672c\u4f5c\u4e1a\u3002"),(0,s.kt)("p",null,"\u9996\u5148\u8bbf\u95ee\u767b\u5f55\u63a5\u53e3\u6765\u751f\u6210Cookie:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"login",src:i(48606).Z,width:"1680",height:"540"})),(0,s.kt)("p",null,"\u7136\u540e\u63d0\u4ea4\u6267\u884cshell\u4ee3\u7801"),(0,s.kt)("p",null,"POST: ",(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/api/rest_j/v1/entrance/submit"},"http://127.0.0.1:9001/api/rest_j/v1/entrance/submit")),(0,s.kt)("p",null,"body\u53c2\u6570\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "executionContent": {\n    "code": "echo \'hello\'",\n    "runType": "shell"\n  },\n  "params": {\n    "variable": {\n      "testvar": "hello"\n    },\n    "configuration": {\n      "runtime": {},\n      "startup": {}\n    }\n  },\n  "source": {\n    "scriptPath": "file:///tmp/hadoop/test.sql"\n  },\n  "labels": {\n    "engineType": "shell-1",\n    "userCreator": "leojie-IDE"\n  }\n}\n')),(0,s.kt)("p",null,"\u6267\u884c\u7ed3\u679c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "/api/entrance/submit",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "taskID": 1,\n        "execID": "exec_id018017linkis-cg-entrance127.0.0.1:9104IDE_leojie_shell_0"\n    }\n}\n')),(0,s.kt)("p",null,"\u6700\u540e\u68c0\u67e5\u4efb\u52a1\u8fd0\u884c\u72b6\u6001\u548c\u83b7\u53d6\u8fd0\u884c\u7ed3\u679c\u96c6\uff1a"),(0,s.kt)("p",null,"GET ",(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/api/rest_j/v1/entrance/exec_id018017linkis-cg-entrance127.0.0.1:9104IDE_leojie_shell_0/progress"},"http://127.0.0.1:9001/api/rest_j/v1/entrance/exec_id018017linkis-cg-entrance127.0.0.1:9104IDE_leojie_shell_0/progress")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "/api/entrance/exec_id018017linkis-cg-entrance127.0.0.1:9104IDE_leojie_shell_0/progress",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "progress": 1,\n        "progressInfo": [],\n        "execID": "exec_id018017linkis-cg-entrance127.0.0.1:9104IDE_leojie_shell_0"\n    }\n}\n')),(0,s.kt)("p",null,"GET ",(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/api/rest_j/v1/jobhistory/1/get"},"http://127.0.0.1:9001/api/rest_j/v1/jobhistory/1/get")),(0,s.kt)("p",null,"GET ",(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:9001/api/rest_j/v1/filesystem/openFile?path=file:///Users/leojie/software/linkis/data/resultSetDir/leojie/linkis/2022-07-16/214859/IDE/1/1_0.dolphin"},"http://127.0.0.1:9001/api/rest_j/v1/filesystem/openFile?path=file:///Users/leojie/software/linkis/data/resultSetDir/leojie/linkis/2022-07-16/214859/IDE/1/1_0.dolphin")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "/api/filesystem/openFile",\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "metadata": "NULL",\n        "totalPage": 0,\n        "totalLine": 1,\n        "page": 1,\n        "type": "1",\n        "fileContent": [\n            [\n                "hello"\n            ]\n        ]\n    }\n}\n')),(0,s.kt)("h2",{id:"4-\u8fdc\u7a0b\u8c03\u8bd5\u670d\u52a1\u6307\u5f15"},"4. \u8fdc\u7a0b\u8c03\u8bd5\u670d\u52a1\u6307\u5f15"),(0,s.kt)("h3",{id:"41-\u6253\u5f00\u8fdc\u7a0b\u8c03\u8bd5\u7aef\u53e3"},"4.1 \u6253\u5f00\u8fdc\u7a0b\u8c03\u8bd5\u7aef\u53e3"),(0,s.kt)("p",null,"\u660e\u786e\u9700\u8981\u8c03\u8bd5\u7684\u5305\u6240\u5728\u7684\u670d\u52a1\uff0c\u5e76\u6839\u636e\u9700\u8981\u8c03\u8bd5\u7684\u4ee3\u7801\u4f4d\u7f6e,\u786e\u5b9a\u5176\u6240\u5c5e\u7684\u670d\u52a1"),(0,s.kt)("h3",{id:"42-\u8fdb\u5165linkis_homesbinext\u4fee\u6539\u6a21\u5757\u914d\u7f6e\u6587\u4ef6\u5f00\u542f\u8fdc\u7a0b\u8c03\u7528\u7aef\u53e3"},"4.2 \u8fdb\u5165{LINKIS_HOME}/sbin/ext,\u4fee\u6539\u6a21\u5757\u914d\u7f6e\u6587\u4ef6\u5f00\u542f\u8fdc\u7a0b\u8c03\u7528\u7aef\u53e3"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/167364775-4f5d2774-b6b9-4a65-b69c-69319db870c4.png",alt:"c-port"})),(0,s.kt)("h3",{id:"43-\u91cd\u542f\u9700\u8981\u8c03\u8bd5\u7684\u670d\u52a1"},"4.3 \u91cd\u542f\u9700\u8981\u8c03\u8bd5\u7684\u670d\u52a1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sh linkis-daemon.sh restart ps-publicservice\n")),(0,s.kt)("p",null,"(\u5982\u679c\u4e0d\u786e\u5b9a\u670d\u52a1\u540d\u79f0,\u5728 ${LINKIS_HOME}/sbin/linkis-start-all.sh \u5185\u67e5\u8be2)"),(0,s.kt)("h3",{id:"44-\u7f16\u8bd1\u5668\u914d\u7f6e\u8fdc\u7a0b\u8c03\u8bd5"},"4.4 \u7f16\u8bd1\u5668\u914d\u7f6e\u8fdc\u7a0b\u8c03\u8bd5"),(0,s.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\u6253\u5f00\u7a97\u53e3\u5e76\u914d\u7f6e\u8fdc\u7a0b\u8c03\u8bd5\u7684\u7aef\u53e3,\u670d\u52a1,\u4ee5\u53ca\u6a21\u5757",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/167364896-29805938-157f-47a2-baf4-f52cb63c64d1.png",alt:"c-debug"})),(0,s.kt)("h3",{id:"45-\u5f00\u59cb\u8c03\u8bd5"},"4.5 \u5f00\u59cb\u8c03\u8bd5"),(0,s.kt)("p",null,"\u70b9\u51fb\u8c03\u8bd5\u6309\u94ae,\u51fa\u73b0\u5982\u4e0b\u4fe1\u606f\u4ee3\u8868\u53ef\u4ee5\u5f00\u59cb\u8c03\u8bd5",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/163559920-05aba3c3-b146-4f62-8e20-93f94a65158d.png",alt:"\u4f01\u4e1a\u5fae\u4fe1\u622a\u56fe_16500167527083"})))}g.isMDXComponent=!0},4149:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/cg-entrance-APP-f0c937755fc868ac51548de8e5c790d5.png"},21186:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/cg-linkismanager-APP-e49c0332d64c00dcd142db174b63c680.png"},87501:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/engineconnmanager-app-cfc54344d2615db56fdaf790af6b7050.png"},71224:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/engineplugin-app-39de72c76314abb56b0b172c2358e8cd.png"},26783:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/engineplugin-debug-error-0d3a0d4e0aae681544b8a8d3c1bcb215.png"},34432:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/eureka-web-2376b442cf152211c2281756f7ad5bf4.png"},46988:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/eureka-b5633ec1272b5fd4416cd71c92fbe6e1.png"},1163:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/gateway-daa58482c3f13ea3e0929051a0586ce4.png"},30655:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/linkis-home-773bce7056eb86683dfecbd1862c0283.png"},22269:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/log4j-a8e64d5a053e47ea50ba44f512b6e3ab.png"},48606:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/login-84e518976ef0b4fec8701c02d3aa072e.png"},22898:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/ps-cs-App-5041b0aa8b70e2e0428aeeeca390b3f9.png"},88211:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/publicservice-debug-error-cf31cfa4d3006a760b65e69f97632072.png"},45081:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/publicservice-d20c48a47309a442fc16e33699d71ed1.png"},92544:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/step-1-f8322d9cf5b32ae026e4df667176ff86.png"},78413:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/step-2-96c3bbbfa006ac9692e36607125d9a69.png"},72315:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/step-3-040f3f12abb063ad2c337b640bee6591.png"},12601:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/step-4-43017933890a7a5bd55ad120dd212f78.png"}}]);