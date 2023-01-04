"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1943],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var l=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=l.createContext({}),s=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return l.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,k=u["".concat(p,".").concat(d)]||u[d]||g[d]||a;return t?l.createElement(k,r(r({ref:n},c),{},{components:t})):l.createElement(k,r({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<a;s++)r[s]=t[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},52214:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=t(87462),i=(t(67294),t(3905));const a={title:"\u5f15\u64ce\u7684\u5b89\u88c5",sidebar_position:4},r=void 0,o={unversionedId:"deployment/install-engineconn",id:"deployment/install-engineconn",title:"\u5f15\u64ce\u7684\u5b89\u88c5",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5bf9\u4e8e\u5b98\u65b9\u5b89\u88c5\u5305\u4e2d\uff0c\u672a\u5305\u542b\u7684\u5f15\u64ce\u7269\u6599(jdbc/sqoop/flink\u7b49)/\u6216\u5219\u81ea\u5b9a\u4e49\u5b9e\u73b0\u7684\u65b0\u5f15\u64ce\uff0c\u5982\u4f55\u8fdb\u884c\u5b89\u88c5\u90e8\u7f72\uff0c\u4ee5\u652f\u6301\u5bf9\u5e94\u7684\u4efb\u52a1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/install-engineconn.md",sourceDirName:"deployment",slug:"/deployment/install-engineconn",permalink:"/zh-CN/docs/1.3.1/deployment/install-engineconn",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/install-engineconn.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u5f15\u64ce\u7684\u5b89\u88c5",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u7ba1\u7406\u53f0\u90e8\u7f72",permalink:"/zh-CN/docs/1.3.1/deployment/deploy-console"},next:{title:"\u7248\u672c\u9002\u914d",permalink:"/zh-CN/docs/1.3.1/deployment/version-adaptation"}},p={},s=[{value:"1. \u5f15\u64ce\u63d2\u4ef6\u76ee\u5f55\u7ed3\u6784",id:"1-\u5f15\u64ce\u63d2\u4ef6\u76ee\u5f55\u7ed3\u6784",level:2},{value:"2. \u5f15\u64ce\u7684\u5b89\u88c5",id:"2-\u5f15\u64ce\u7684\u5b89\u88c5",level:2},{value:"2.1 \u5f15\u64ce\u5305\u7684\u51c6\u5907",id:"21-\u5f15\u64ce\u5305\u7684\u51c6\u5907",level:3},{value:"\u65b9\u5f0f1",id:"\u65b9\u5f0f1",level:4},{value:"\u65b9\u5f0f2 \u624b\u52a8\u7f16\u8bd1\u83b7\u53d6",id:"\u65b9\u5f0f2-\u624b\u52a8\u7f16\u8bd1\u83b7\u53d6",level:4},{value:"2.2 \u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-\u90e8\u7f72\u548c\u52a0\u8f7d",level:3},{value:"2.4 \u5e76\u914d\u7f6e\u9ed8\u8ba4\u7684\u5f15\u64ce\u7248\u672c(\u53ef\u9009)",id:"24-\u5e76\u914d\u7f6e\u9ed8\u8ba4\u7684\u5f15\u64ce\u7248\u672c\u53ef\u9009",level:3},{value:"2.5 \u7ba1\u7406\u53f0Configuration\u914d\u7f6e\u4fee\u6539\uff08\u53ef\u9009\uff09",id:"25-\u7ba1\u7406\u53f0configuration\u914d\u7f6e\u4fee\u6539\u53ef\u9009",level:3},{value:"2.6 \u5f15\u64ce\u5237\u65b0",id:"26-\u5f15\u64ce\u5237\u65b0",level:3},{value:"2.6.1 \u65b9\u5f0f1 \u63a5\u53e3\u5237\u65b0",id:"261-\u65b9\u5f0f1-\u63a5\u53e3\u5237\u65b0",level:4},{value:"2.6.2 \u65b9\u5f0f2 \u91cd\u542f\u5237\u65b0",id:"262-\u65b9\u5f0f2-\u91cd\u542f\u5237\u65b0",level:4},{value:"2.6.3  \u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f",id:"263--\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f",level:4}],c={toc:s};function g(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5bf9\u4e8e\u5b98\u65b9\u5b89\u88c5\u5305\u4e2d\uff0c\u672a\u5305\u542b\u7684\u5f15\u64ce\u7269\u6599(jdbc/sqoop/flink\u7b49)/\u6216\u5219\u81ea\u5b9a\u4e49\u5b9e\u73b0\u7684\u65b0\u5f15\u64ce\uff0c\u5982\u4f55\u8fdb\u884c\u5b89\u88c5\u90e8\u7f72\uff0c\u4ee5\u652f\u6301\u5bf9\u5e94\u7684\u4efb\u52a1")),(0,i.kt)("h2",{id:"1-\u5f15\u64ce\u63d2\u4ef6\u76ee\u5f55\u7ed3\u6784"},"1. \u5f15\u64ce\u63d2\u4ef6\u76ee\u5f55\u7ed3\u6784"),(0,i.kt)("p",null,"Linkis\u7684\u5f15\u64ce\u7269\u6599\u5305\u5b89\u88c5\u76ee\u5f55\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/lib/linkis-engineconn-plugins"),"\uff0c\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"hive #\u5f15\u64ce\u4e3b\u76ee\u5f55\uff0c\u5fc5\u987b\u4e3a\u5f15\u64ce\u7684\u540d\u5b57\n\u2502\xa0\xa0 \u251c\u2500\u2500  dist  # \u5f15\u64ce\u542f\u52a8\u9700\u8981\u7684jar\u5305\u4f9d\u8d56\u548c\u914d\u7f6e\uff0c\u4e0d\u540c\u7684\u7248\u672c\u9700\u8981\u5728\u8be5\u76ee\u5f55\u653e\u7f6e\u5bf9\u5e94\u7684\u7248\u672c\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 v2.3.3 # \u7248\u672c\u53f7\uff0c\u5fc5\u987b\u4ee5v\u5f00\u5934\u52a0\u4e0a\u5f15\u64ce\u7248\u672c\u53f7\uff0c\u6ce8\u610f \u4e0d\u80fd\u51fa\u73b0-; \u7248\u672c\u4e3a2.3.3  \u4efb\u52a1\u8bf7\u6c42\u53c2\u6570\u7684engineType \u4e3ahive-2.3.3\n\u2502\xa0\xa0 \u2502\xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 conf # \u5f15\u64ce\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 lib  # \u5f15\u64ce\u63d2\u4ef6\u9700\u8981\u7684\u4f9d\u8d56\u5305\n\u2502\xa0\xa0 \u251c\u2500\u2500 plugin #\u5f15\u64ce\u63d2\u4ef6\u76ee\u5f55\uff0c\u8be5\u76ee\u5f55\u7528\u4e8e\u5f15\u64ce\u7ba1\u7406\u670d\u52a1\u5c01\u88c5\u5f15\u64ce\u7684\u542f\u52a8\u547d\u4ee4\u548c\u8d44\u6e90\u7533\u8bf7\n\u2502\xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 2.3.3 # \u5f15\u64ce\u7248\u672c,\u6ca1\u6709v\u5f00\u5934\n\u2502\xa0\xa0  \xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 linkis-engineplugin-hive-1.0.0.jar  #\u5f15\u64ce\u6a21\u5757\u5305\uff08\u53ea\u9700\u8981\u653e\u7f6e\u5355\u72ec\u7684\u5f15\u64ce\u5305\uff09\n\u251c\u2500\u2500 python\n\u2502\xa0\xa0 \u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 vpython2\n\u2502\xa0\xa0 \u2514\u2500\u2500 plugin\n\u2502\xa0\xa0     \u2514\u2500\u2500 python2 #\u7248\u672c\u4e3apython2 \u4efb\u52a1\u8bf7\u6c42\u53c2\u6570\u7684engineTypee \u4e3apython-python2\n\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u7684\u7269\u6599\u5305\u6587\u4ef6\u4f1a\u5728Linkis\u670d\u52a1\u542f\u52a8\u65f6\u5019\uff0c\u4f1a\u6839\u636e\u76ee\u5f55\uff0c\u89e3\u6790\u51fa\u5f15\u64ce\u548c\u7248\u672c\u53f7\uff0c\u8fdb\u884c\u5f15\u64ce\u7269\u6599\u7684\u6301\u4e45\u5316\u5b58\u50a8(HDFS/\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e2d)\uff0c\u5e76\u5c06\u6301\u4e45\u5316\u5b58\u50a8\u4fe1\u606f(\u5f15\u64ce\u7c7b\u578b\u548c\u7248\u672c\u8d44\u6e90\u7d22\u5f15\uff09\n\u8bb0\u5f55\u5230\u6570\u636e\u5e93\u8868",(0,i.kt)("inlineCode",{parentName:"p"},"linkis_cg_engine_conn_plugin_bml_resources"),"\u4e2d\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\u6570\u636e\u5982\u4e0b:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"engine_conn_type"),(0,i.kt)("th",{parentName:"tr",align:null},"version"),(0,i.kt)("th",{parentName:"tr",align:null},"file_name"),(0,i.kt)("th",{parentName:"tr",align:"right"},"file_size"),(0,i.kt)("th",{parentName:"tr",align:"right"},"last_modified"),(0,i.kt)("th",{parentName:"tr",align:null},"bml_resource_id"),(0,i.kt)("th",{parentName:"tr",align:null},"bml_resource_version"),(0,i.kt)("th",{parentName:"tr",align:null},"create_time"),(0,i.kt)("th",{parentName:"tr",align:null},"last_update_time"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hive"),(0,i.kt)("td",{parentName:"tr",align:null},"v2.3.4"),(0,i.kt)("td",{parentName:"tr",align:null},"conf.zip"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2046"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1651925378000"),(0,i.kt)("td",{parentName:"tr",align:null},"4f0353ac-5703-4b4d-942d-dbaead38b506"),(0,i.kt)("td",{parentName:"tr",align:null},"v000001"),(0,i.kt)("td",{parentName:"tr",align:null},"2022-05-07 20:17:45"),(0,i.kt)("td",{parentName:"tr",align:null},"2022-05-07 20:17:45")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hive"),(0,i.kt)("td",{parentName:"tr",align:null},"v2.3.4"),(0,i.kt)("td",{parentName:"tr",align:null},"lib.zip"),(0,i.kt)("td",{parentName:"tr",align:"right"},"137715715"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1651925379000"),(0,i.kt)("td",{parentName:"tr",align:null},"762595b5-a6d3-4311-8133-4f8d4e0c3aa0"),(0,i.kt)("td",{parentName:"tr",align:null},"v000001"),(0,i.kt)("td",{parentName:"tr",align:null},"2022-05-07 20:17:52"),(0,i.kt)("td",{parentName:"tr",align:null},"2022-05-07 20:17:52")))),(0,i.kt)("p",null,"\u63d0\u4ea4\u4efb\u52a1\u6267\u884c\u65f6\uff0c\u4f1a\u901a\u8fc7\u8bf7\u6c42\u7684\u53c2\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"engineType"),"\uff0c\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"linkis_cg_engine_conn_plugin_bml_resources"),"\u4e2d\u67e5\u8be2\u5230\u5bf9\u5e94\u7684\u8d44\u6e90\u7d22\u5f15\uff0c\n\u901a\u8fc7\u7d22\u5f15\u4e0b\u8f7d\u5bf9\u5e94\u7684\u5f15\u64ce\u7269\u6599\uff0c\u5e76\u90e8\u7f72\u542f\u52a8\u5bf9\u5e94\u7684\u5f15\u64ce\u8fdb\u7a0b\uff0c\u518d\u8fdb\u884c\u4efb\u52a1\u7684\u5904\u7406\u3002 "),(0,i.kt)("p",null,"\u5982 linkis-cli \u63d0\u4ea4hive\u67e5\u8be2\u793a\u4f8b "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType hive-2.3.3 -codeType hql -code "show tables"  -submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u56e0\u4e3a\u5f15\u64ce\u6267\u884c\u65f6\u4f20\u9012\u7684\u53c2\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"engineType:hive-2.3.3")," \u662f\u901a\u8fc7-\u6765\u8fdb\u884c\u62c6\u5206\u51fa\u5f15\u64ce\u548c\u7248\u672c\u7684\uff0c\u6240\u4ee5\u7248\u672c\u53f7\u91cc\u9762\u4e0d\u80fd\u51fa\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"-"),"\uff0c\n\u5982\u679c\u51fa\u73b0\u53ef\u4ee5\u901a\u8fc7\u7528\u5176\u4ed6\u7b26\u53f7\u4ee3\u66ff\uff0c\u6bd4\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"engineType\uff1ahive-cdh-2.3.3"),"\uff0c\u4f1a\u62c6\u5206\u9519\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\uff1a2.3.3 \u6216\u5219cdh_2.3.3 \u6765\u547d\u540d\u5f15\u64ce\u76ee\u5f55")),(0,i.kt)("p",null,"Linkis\u9879\u76ee\u4e2d\u5305\u542b\u7684\u5f15\u64ce\u6a21\u5757",(0,i.kt)("inlineCode",{parentName:"p"},"linkis-engineconn-plugins/engineconn-plugins"),"\u90fd\u662f\u6309\u8fd9\u4e2a\u76ee\u5f55\u8fdb\u884c\u6253\u5305\u914d\u7f6e\u7684\uff0c\n\u5982\u679c\u662f\u81ea\u5df1\u5b9e\u73b0\u7684\u65b0\u589e\u5f15\u64ce\uff0c\u9700\u8981\u6309\u7167\u4e0a\u8ff0\u7684\u76ee\u5f55\u7ed3\u6784\u8fdb\u884c\u6253\u5305\uff0c\u53ef\u4ee5\u53c2\u8003hive\u7684assembly\u914d\u7f6e\u65b9\u5f0f\u6765\u914d\u7f6e\u6253\u5305\u6d41\u7a0b\u548c\u914d\u7f6e\uff0c\n\u6e90\u7801\u76ee\u5f55\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"linkis-engineconn-plugins/hive/src/main/assembly/distribution.xml")),(0,i.kt)("h2",{id:"2-\u5f15\u64ce\u7684\u5b89\u88c5"},"2. \u5f15\u64ce\u7684\u5b89\u88c5"),(0,i.kt)("h3",{id:"21-\u5f15\u64ce\u5305\u7684\u51c6\u5907"},"2.1 \u5f15\u64ce\u5305\u7684\u51c6\u5907"),(0,i.kt)("h4",{id:"\u65b9\u5f0f1"},"\u65b9\u5f0f1"),(0,i.kt)("p",null,"\u5982\u679c  ",(0,i.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"\u975e\u9ed8\u8ba4\u5f15\u64ce\u7269\u6599\u5305"),"\u4e2d\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\uff0c\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u4f7f\u7528 "),(0,i.kt)("h4",{id:"\u65b9\u5f0f2-\u624b\u52a8\u7f16\u8bd1\u83b7\u53d6"},"\u65b9\u5f0f2 \u624b\u52a8\u7f16\u8bd1\u83b7\u53d6"),(0,i.kt)("p",null,"\u5168\u91cf\u7f16\u8bd1(\u9996\u6b21\u7f16\u8bd1\u65f6\u9700\u8981) "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd  ${linkis_code_dir} \nmvn -N  install \nmvn clean install  \n")),(0,i.kt)("p",null,"\u7f16\u8bd1\u5f15\u64ce "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd linkis-enginepconn-pugins/engineconn-plugins/pipeline/\nmvn clean install\n")),(0,i.kt)("p",null,"\u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u5305,\u4f4d\u4e8e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-engineconn-plugins/{\u63d2\u4ef6\u6a21\u5757\u540d}/target/out/{\u63d2\u4ef6\u6a21\u5757\u540d}\n")),(0,i.kt)("h3",{id:"22-\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 \u90e8\u7f72\u548c\u52a0\u8f7d"),(0,i.kt)("p",null,"\u5c06 2.1 \u6b65\u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u5305\uff0c\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u5f15\u64ce\u76ee\u5f55\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,i.kt)("h3",{id:"24-\u5e76\u914d\u7f6e\u9ed8\u8ba4\u7684\u5f15\u64ce\u7248\u672c\u53ef\u9009"},"2.4 \u5e76\u914d\u7f6e\u9ed8\u8ba4\u7684\u5f15\u64ce\u7248\u672c(\u53ef\u9009)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4e3b\u8981\u662f\u914d\u7f6e\u9ed8\u8ba4\u7248\u672c\uff0c\u5f53\u8bf7\u6c42\u672a\u5e26\u7248\u672c\u65f6 \u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7248\u672c ")),(0,i.kt)("p",null,"\u4fee\u6539",(0,i.kt)("inlineCode",{parentName:"p"},"$LINKIS_HOME/conf/linkis.properties")," \u914d\u7f6e\u6587\u4ef6  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"wds.linkis.hive.engine.version=2.3.3\n")),(0,i.kt)("h3",{id:"25-\u7ba1\u7406\u53f0configuration\u914d\u7f6e\u4fee\u6539\u53ef\u9009"},"2.5 \u7ba1\u7406\u53f0Configuration\u914d\u7f6e\u4fee\u6539\uff08\u53ef\u9009\uff09"),(0,i.kt)("p",null,"\u7ba1\u7406\u53f0\u7684\u914d\u7f6e\u662f\u6309\u7167\u5f15\u64ce\u6807\u7b7e\u6765\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u5982\u679c\u65b0\u589e\u7684\u5f15\u64ce\uff0c\u6709\u914d\u7f6e\u53c2\u6570\u9700\u8981\u914d\u7f6e\u7684\u8bdd\uff0c\u9700\u8981\u4fee\u6539\u5bf9\u5e94\u7684\u8868\u7684\u5143\u6570\u636e  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key:  \u63d2\u5165\u5f15\u64ce\u7684\u914d\u7f6e\u53c2\u6570\u7684key\u548c\u9ed8\u8ba4values\nlinkis_cg_manager_label\uff1a\u63d2\u5165\u5f15\u64celabel\u5982\uff1ahive-2.3.3\nlinkis_ps_configuration_category\uff1a \u63d2\u5165\u5f15\u64ce\u7684\u76ee\u5f55\u5173\u8054\u5173\u7cfb\nlinkis_ps_configuration_config_value\uff1a \u63d2\u5165\u5f15\u64ce\u9700\u8981\u5c55\u793a\u7684\u914d\u7f6e\nlinkis_ps_configuration_key_engine_relation:\u914d\u7f6e\u9879\u548c\u5f15\u64ce\u7684\u5173\u8054\u5173\u7cfb\n")),(0,i.kt)("p",null,"\u4ee5openLooKeng\u5f15\u64ce 1.5.0\u7248\u672c \u4e3a\u4f8b "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\nSET @OPENLOOKENG_LABEL=\"openlookeng-1.5.0\";\nSET @OPENLOOKENG_ALL=CONCAT('*-*,',@OPENLOOKENG_LABEL);\nSET @OPENLOOKENG_IDE=CONCAT('*-IDE,',@OPENLOOKENG_LABEL);\n\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@OPENLOOKENG_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@OPENLOOKENG_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from linkis_cg_manager_label where `label_value` = @OPENLOOKENG_IDE;\ninsert into linkis_ps_configuration_category (`label_id`, `level`) VALUES (@label_id, 2);\n\n\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.openlookeng.url', '\u4f8b\u5982:http://127.0.0.1:8080', '\u8fde\u63a5\u5730\u5740', 'http://127.0.0.1:8080', 'Regex', '^\\\\s*http://([^:]+)(:\\\\d+)(/[^\\\\?]+)?(\\\\?\\\\S*)?$', 'openlookeng', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.openlookeng.catalog', 'catalog', 'catalog', 'system', 'None', '', 'openlookeng', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.openlookeng.source', 'source', 'source', 'global', 'None', '', 'openlookeng', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\n\n\n-- openlookeng-*\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = 'openlookeng' and label_value = @OPENLOOKENG_ALL);\n\n-- openlookeng default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @OPENLOOKENG_ALL);\n\n")),(0,i.kt)("h3",{id:"26-\u5f15\u64ce\u5237\u65b0"},"2.6 \u5f15\u64ce\u5237\u65b0"),(0,i.kt)("h4",{id:"261-\u65b9\u5f0f1-\u63a5\u53e3\u5237\u65b0"},"2.6.1 \u65b9\u5f0f1 \u63a5\u53e3\u5237\u65b0"),(0,i.kt)("p",null,"\u5f15\u64ce\u652f\u6301\u5b9e\u65f6\u5237\u65b0\uff0c\u5f15\u64ce\u653e\u7f6e\u5230\u5bf9\u5e94\u76ee\u5f55\u540e\uff0c\u901a\u8fc7http\u63a5\u53e3\u5411",(0,i.kt)("inlineCode",{parentName:"p"},"linkis-cg-engineconnplugin")," \u670d\u52a1\u53d1\u9001\u5237\u65b0\u8bf7\u6c42\u5373\u53ef\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"http://${engineconn-plugin-server-IP}:${port}/api/rest_j/v1/rpc/receiveAndReply"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u5f0f ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/enginePlugin/engineConn/refreshAll"\n}\n')),(0,i.kt)("h4",{id:"262-\u65b9\u5f0f2-\u91cd\u542f\u5237\u65b0"},"2.6.2 \u65b9\u5f0f2 \u91cd\u542f\u5237\u65b0"),(0,i.kt)("p",null,"\u901a\u8fc7\u91cd\u542f",(0,i.kt)("inlineCode",{parentName:"p"},"linkis-cg-engineconnplugin")," \u670d\u52a1\uff0c\u4e5f\u53ef\u4ee5\u5f3a\u5236\u5237\u65b0\u5f15\u64ce\u76ee\u5f55"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"### cd\u5230sbin\u76ee\u5f55\u4e0b\uff0c\u91cd\u542flinkis-cg-engineconnplugin\u670d\u52a1\n\ncd ${LINKIS_HOME}/sbin\n\n## \u6267\u884clinkis-daemon\u811a\u672c\n\nsh linkis-daemon.sh restart cg-engineplugin\n\n")),(0,i.kt)("h4",{id:"263--\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f"},"2.6.3  \u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f"),(0,i.kt)("p",null,"\u5982\u679c\u5728\u5237\u65b0\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898\uff0c\u9700\u8981\u786e\u8ba4\u662f\u5426\u5237\u65b0\u6210\u529f\uff0c\u5219\u53ef\u4ee5\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources"),"\u8fd9\u5f20\u8868\u7684last_update_time\u662f\u5426\u4e3a\u89e6\u53d1\u5237\u65b0\u7684\u65f6\u95f4\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"#\u767b\u9646\u5230linkis\u7684\u6570\u636e\u5e93 \nselect *  from linkis_cg_engine_conn_plugin_bml_resources\n")),(0,i.kt)("p",null,"\u6b63\u5e38\u5982\u4e0b\uff1a\n",(0,i.kt)("img",{alt:"bml",src:t(76923).Z,width:"1375",height:"223"})),(0,i.kt)("p",null,"\u67e5\u770b\u5f15\u64ce\u7684\u7269\u6599\u8bb0\u5f55\u662f\u5426\u5b58\u5728(\u5982\u679c\u6709\u66f4\u65b0,\u67e5\u770b\u66f4\u65b0\u65f6\u95f4\u662f\u5426\u6b63\u786e)\u3002"))}g.isMDXComponent=!0},76923:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/bml-d0ca8015ccab374cf4361949ca940f65.png"}}]);