"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[24661],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>y});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},h=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),u=s(t),y=i,d=u["".concat(l,".").concat(y)]||u[y]||c[y]||r;return t?o.createElement(d,a(a({ref:n},h),{},{components:t})):o.createElement(d,a({ref:n},h))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<r;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},55167:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=t(87462),i=(t(67294),t(3905));const r={title:"Python \u5f15\u64ce",sidebar_position:5},a=void 0,p={unversionedId:"engine-usage/python",id:"version-1.3.0/engine-usage/python",isDocsHomePage:!1,title:"Python \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.X\u4e2d\uff0cPython\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/engine-usage/python.md",sourceDirName:"engine-usage",slug:"/engine-usage/python",permalink:"/zh-CN/docs/latest/engine-usage/python",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/engine-usage/python.md",tags:[],version:"1.3.0",sidebarPosition:5,frontMatter:{title:"Python \u5f15\u64ce",sidebar_position:5},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"Hive \u5f15\u64ce",permalink:"/zh-CN/docs/latest/engine-usage/hive"},next:{title:"Shell \u5f15\u64ce",permalink:"/zh-CN/docs/latest/engine-usage/shell"}},l=[{value:"1.Python\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",id:"1python\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",children:[]},{value:"2.Python\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",id:"2python\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",children:[{value:"2.1 Python\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-python\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",children:[]},{value:"2.2 python engineConn\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-python-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d",children:[]}]},{value:"3.Python\u5f15\u64ce\u7684\u4f7f\u7528",id:"3python\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"\u51c6\u5907\u64cd\u4f5c",id:"\u51c6\u5907\u64cd\u4f5c",children:[]},{value:"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528",id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528",children:[]},{value:"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",children:[]},{value:"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]}]},{value:"4.Python\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",id:"4python\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",children:[]}],s={toc:l};function h(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.X\u4e2d\uff0cPython\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"1python\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"},"1.Python\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528python\u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u7528\u6237\u7684PATH\u4e2d\u662f\u6709python\u7684\u6267\u884c\u76ee\u5f55\u548c\u6267\u884c\u6743\u9650\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"python"),(0,i.kt)("td",{parentName:"tr",align:null},"python\u6267\u884c\u73af\u5883"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5efa\u8bae\u4f7f\u7528anaconda\u7684python\u6267\u884c\u5668")))),(0,i.kt)("p",null,"\u88681-1 \u73af\u5883\u914d\u7f6e\u6e05\u5355"),(0,i.kt)("h2",{id:"2python\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"},"2.Python\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"),(0,i.kt)("h3",{id:"21-python\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 Python\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,i.kt)("p",null,"Python\u662f\u652f\u6301python2 \u548c\npython3\u7684\uff0c\u60a8\u53ef\u4ee5\u7b80\u5355\u66f4\u6539\u914d\u7f6e\u5c31\u53ef\u4ee5\u5b8c\u6210Python\u7248\u672c\u7684\u5207\u6362\uff0c\u4e0d\u9700\u8981\u91cd\u65b0\u7f16\u8bd1python\u7684\u5f15\u64ce\u7248\u672c\uff0c\u5177\u4f53\u914d\u7f6e\u5982\u4e0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#1\uff1acli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\u8fdb\u884c\u7248\u672c\u5207\u6362,\u547d\u4ee4\u672b\u7aef\u8bbe\u7f6e\u7248\u672c python.version=python3 (python3\uff1a\u521b\u5efa\u8f6f\u8fde\u63a5\u65f6\u751f\u6210\u6587\u4ef6\u7684\u540d\u79f0\uff0c\u53ef\u81ea\u5b9a\u4e49\u547d\u540d)\nsh ./bin/linkis-cli -engineType python-python2 -codeType python -code "print(\\"hello\\")"  -submitUser hadoop -proxyUser hadoop  -confMap  python.version=python3\n\n#2\uff1acli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\u8fdb\u884c\u7248\u672c\u5207\u6362,\u547d\u4ee4\u8bbe\u7f6e\u52a0\u5165\u7248\u672c\u8def\u5f84 python.version=/usr/bin/python (/usr/bin/python\uff1a\u521b\u5efa\u8f6f\u8fde\u63a5\u65f6\u751f\u6210\u6587\u4ef6\u7684\u8def\u5f84)\nsh ./bin/linkis-cli -engineType python-python2 -codeType python -code "print(\\"hello\\")"  -submitUser hadoop -proxyUser hadoop  -confMap  python.version=/usr/bin/python\n\n')),(0,i.kt)("p",null,"\u9875\u9762\u914d\u7f6e\uff1a\n",(0,i.kt)("img",{src:t(86873).Z})),(0,i.kt)("h3",{id:"22-python-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 python engineConn\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,i.kt)("p",null,"\u6b64\u5904\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684\u52a0\u8f7d\u65b9\u5f0f\u5373\u53ef\u6b63\u5e38\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"3python\u5f15\u64ce\u7684\u4f7f\u7528"},"3.Python\u5f15\u64ce\u7684\u4f7f\u7528"),(0,i.kt)("h3",{id:"\u51c6\u5907\u64cd\u4f5c"},"\u51c6\u5907\u64cd\u4f5c"),(0,i.kt)("p",null,"\u5728linkis\u4e0a\u63d0\u4ea4python\u4e4b\u524d\uff0c\u60a8\u53ea\u9700\u8981\u4fdd\u8bc1\u60a8\u7684\u7528\u6237\u7684$PATH\u4e2d\u6709python\u7684\u8def\u5f84\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528"},"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528"),(0,i.kt)("p",null,"Linkis\u63d0\u4f9b\u4e86Java\u548cScala \u7684SDK\u5411Linkis\u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1. \u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/user-guide/sdk-manual"},"JAVA SDK Manual"),".\n\u5bf9\u4e8ePython\u4efb\u52a1\u60a8\u53ea\u9700\u8981\u4fee\u6539Demo\u4e2d\u7684EngineConnType\u548cCodeType\u53c2\u6570\u5373\u53ef:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "python-python2"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "python"); // required codeType \n')),(0,i.kt)("h3",{id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,i.kt)("p",null,"Linkis 1.0\u540e\u63d0\u4f9b\u4e86cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\u5373\u53ef\uff0cPython\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType python-python2 -codeType python -code "print(\\"hello\\")"  -submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,i.kt)("h3",{id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("p",null,"Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165Scriptis\uff0c\u53f3\u952e\u76ee\u5f55\u7136\u540e\u65b0\u5efapython\u811a\u672c\u5e76\u7f16\u5199python\u4ee3\u7801\u5e76\u70b9\u51fb\u6267\u884c\u3002"),(0,i.kt)("p",null,"python\u7684\u6267\u884c\u903b\u8f91\u662f\u901a\u8fc7 Py4j\u7684\u65b9\u5f0f\uff0c\u542f\u52a8\u4e00\u4e2a\u7684python\n\u7684gateway\uff0c\u7136\u540ePython\u5f15\u64ce\u5c06\u4ee3\u7801\u63d0\u4ea4\u5230python\u7684\u6267\u884c\u5668\u8fdb\u884c\u6267\u884c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(32209).Z})),(0,i.kt)("p",null,"\u56fe3-1 python\u7684\u6267\u884c\u6548\u679c\u622a\u56fe"),(0,i.kt)("h2",{id:"4python\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"},"4.Python\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u5f15\u64ce\u914d\u7f6e\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u8bbe\u7f6e\uff0c\u6bd4\u5982python\u7684\u7248\u672c\u548c\u4ee5\u53capython\u9700\u8981\u52a0\u8f7d\u7684\u4e00\u4e9bmodule\u7b49\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/168045185-f25c61b6-8727-434e-8150-e13cc4a04ade.png",alt:"python"}),"  "),(0,i.kt)("p",null,"\u56fe4-1 python\u7684\u7528\u6237\u81ea\u5b9a\u4e49\u914d\u7f6e\u7ba1\u7406\u53f0"))}h.isMDXComponent=!0},32209:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/python-run-a442d0ab5e119eab2e0aebe935975dac.png"},86873:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/python-configure-d636f45c3036219ef47fd240ba1192b7.png"}}]);