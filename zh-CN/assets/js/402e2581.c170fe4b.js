"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[24294],{3905:(e,l,n)=>{n.d(l,{Zo:()=>p,kt:()=>k});var t=n(67294);function i(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function r(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?r(Object(n),!0).forEach((function(l){i(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function s(e,l){if(null==e)return{};var n,t,i=function(e,l){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||(i[n]=e[n]);return i}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),u=function(e){var l=t.useContext(o),n=l;return e&&(n="function"==typeof e?e(l):a(a({},l),e)),n},p=function(e){var l=u(e.components);return t.createElement(o.Provider,{value:l},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},d=t.forwardRef((function(e,l){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,k=c["".concat(o,".").concat(d)]||c[d]||h[d]||r;return n?t.createElement(k,a(a({ref:l},p),{},{components:n})):t.createElement(k,a({ref:l},p))}));function k(e,l){var n=arguments,i=l&&l.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var o in l)hasOwnProperty.call(l,o)&&(s[o]=l[o]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51355:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var t=n(87462),i=(n(67294),n(3905));const r={title:"Shell \u5f15\u64ce",sidebar_position:6},a=void 0,s={unversionedId:"engine-usage/shell",id:"version-1.1.3/engine-usage/shell",title:"Shell \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.X\u4e2d\uff0cShell\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/engine-usage/shell.md",sourceDirName:"engine-usage",slug:"/engine-usage/shell",permalink:"/zh-CN/docs/1.1.3/engine-usage/shell",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/engine-usage/shell.md",tags:[],version:"1.1.3",sidebarPosition:6,frontMatter:{title:"Shell \u5f15\u64ce",sidebar_position:6},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"Python \u5f15\u64ce",permalink:"/zh-CN/docs/1.1.3/engine-usage/python"},next:{title:"JDBC \u5f15\u64ce",permalink:"/zh-CN/docs/1.1.3/engine-usage/jdbc"}},o={},u=[{value:"1.Shell\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",id:"1shell\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",level:2},{value:"2.Shell\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",id:"2shell\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",level:2},{value:"2.1 Shell\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-shell\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",level:3},{value:"2.2 shell engineConn\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-shell-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d",level:3},{value:"2.3 shell\u5f15\u64ce\u7684\u6807\u7b7e",id:"23-shell\u5f15\u64ce\u7684\u6807\u7b7e",level:3},{value:"3.Shell\u5f15\u64ce\u7684\u4f7f\u7528",id:"3shell\u5f15\u64ce\u7684\u4f7f\u7528",level:2},{value:"\u51c6\u5907\u64cd\u4f5c",id:"\u51c6\u5907\u64cd\u4f5c",level:3},{value:"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528",id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528",level:3},{value:"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",level:3},{value:"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"4.Shell\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",id:"4shell\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",level:2}],p={toc:u},c="wrapper";function h(e){let{components:l,...r}=e;return(0,i.kt)(c,(0,t.Z)({},p,r,{components:l,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.X\u4e2d\uff0cShell\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"1shell\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"},"1.Shell\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528shell\u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u7528\u6237\u7684PATH\u4e2d\u662f\u6709bash\u7684\u6267\u884c\u76ee\u5f55\u548c\u6267\u884c\u6743\u9650\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sh\u6267\u884c\u73af\u5883"),(0,i.kt)("td",{parentName:"tr",align:null},"bash\u73af\u5883\u53d8\u91cf"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5efa\u8bae\u4f7f\u7528bash")))),(0,i.kt)("p",null,"\u88681-1 \u73af\u5883\u914d\u7f6e\u6e05\u5355"),(0,i.kt)("h2",{id:"2shell\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"},"2.Shell\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"),(0,i.kt)("h3",{id:"21-shell\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 Shell\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,i.kt)("p",null,"Shell\u5f15\u64ce\u4e0d\u9700\u8981\u7528\u6237\u81ea\u884c\u7f16\u8bd1\uff0c\u76f4\u63a5\u4f7f\u7528\u7f16\u8bd1\u597d\u7684shell\u5f15\u64ce\u63d2\u4ef6\u5305\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"22-shell-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 shell engineConn\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,i.kt)("p",null,"\u6b64\u5904\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684\u52a0\u8f7d\u65b9\u5f0f\u5373\u53ef\u6b63\u5e38\u4f7f\u7528\u3002"),(0,i.kt)("h3",{id:"23-shell\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 shell\u5f15\u64ce\u7684\u6807\u7b7e"),(0,i.kt)("p",null,"\u6b64\u5904\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684dml.sql\u8fdb\u884c\u63d2\u5165\u5373\u53ef\u6b63\u5e38\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"3shell\u5f15\u64ce\u7684\u4f7f\u7528"},"3.Shell\u5f15\u64ce\u7684\u4f7f\u7528"),(0,i.kt)("h3",{id:"\u51c6\u5907\u64cd\u4f5c"},"\u51c6\u5907\u64cd\u4f5c"),(0,i.kt)("p",null,"\u5728linkis\u4e0a\u63d0\u4ea4shell\u4e4b\u524d\uff0c\u60a8\u53ea\u9700\u8981\u4fdd\u8bc1\u60a8\u7684\u7528\u6237\u7684\\$PATH\u4e2d\u6709shell\u7684\u8def\u5f84\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528"},"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528"),(0,i.kt)("p",null,"Linkis\u63d0\u4f9b\u4e86Java\u548cScala \u7684SDK\u5411Linkis\u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1. \u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.3/user-guide/sdk-manual"},"JAVA SDK Manual"),".\n\u5bf9\u4e8eShell\u4efb\u52a1\u4f60\u53ea\u9700\u8981\u4fee\u6539Demo\u4e2d\u7684EngineConnType\u548cCodeType\u53c2\u6570\u5373\u53ef:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "shell-1"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "shell"); // required codeType\n')),(0,i.kt)("h3",{id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,i.kt)("p",null,"Linkis 1.0\u540e\u63d0\u4f9b\u4e86cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\u5373\u53ef\uff0cShell\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType shell-1 -codeType shell -code "echo \\"hello\\" "  -submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.3/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,i.kt)("h3",{id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("p",null,"Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165Scriptis\uff0c\u53f3\u952e\u76ee\u5f55\u7136\u540e\u65b0\u5efashell\u811a\u672c\u5e76\u7f16\u5199shell\u4ee3\u7801\u5e76\u70b9\u51fb\u6267\u884c\u3002"),(0,i.kt)("p",null,"shell\u7684\u6267\u884c\u539f\u7406\u662fshell\u5f15\u64ce\u901a\u8fc7java\u81ea\u5e26\u7684ProcessBuilder\u542f\u52a8\u4e00\u4e2a\u7cfb\u7edf\u8fdb\u7a0b\u6765\u8fdb\u884c\u6267\u884c\uff0c\u5e76\u4e14\u5c06\u8fdb\u7a0b\u7684\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u5f15\u64ce\u5e76\u5199\u5165\u5230\u65e5\u5fd7\u4e2d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(44254).Z,width:"1674",height:"933"})),(0,i.kt)("p",null,"\u56fe3-1 shell\u7684\u6267\u884c\u6548\u679c\u622a\u56fe"),(0,i.kt)("h2",{id:"4shell\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"},"4.Shell\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"),(0,i.kt)("p",null,"shell\u5f15\u64ce\u4e00\u822c\u53ef\u4ee5\u8bbe\u7f6e\u5f15\u64ceJVM\u7684\u6700\u5927\u5185\u5b58\u3002"))}h.isMDXComponent=!0},44254:(e,l,n)=>{n.d(l,{Z:()=>t});const t=n.p+"assets/images/shell-run-1948a5fed5d410d18fb17ae3cf7c9d95.png"}}]);