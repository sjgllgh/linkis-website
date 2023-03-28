"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[18793],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,y=c["".concat(l,".").concat(d)]||c[d]||h[d]||a;return t?o.createElement(y,r(r({ref:n},u),{},{components:t})):o.createElement(y,r({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(87462),i=(t(67294),t(3905));const a={title:"Python Engine Usage",sidebar_position:2},r=void 0,s={unversionedId:"engine-usage/python",id:"version-1.1.2/engine-usage/python",title:"Python Engine Usage",description:"This article mainly introduces the configuration, deployment and use of the Python EngineConn in Linkis1.0.",source:"@site/versioned_docs/version-1.1.2/engine-usage/python.md",sourceDirName:"engine-usage",slug:"/engine-usage/python",permalink:"/docs/1.1.2/engine-usage/python",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.1.2/engine-usage/python.md",tags:[],version:"1.1.2",sidebarPosition:2,frontMatter:{title:"Python Engine Usage",sidebar_position:2},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"JDBC Engine Usage",permalink:"/docs/1.1.2/engine-usage/jdbc"},next:{title:"Shell Engine Usage",permalink:"/docs/1.1.2/engine-usage/shell"}},l={},p=[{value:"1. Environment configuration before using Python EngineConn",id:"1-environment-configuration-before-using-python-engineconn",level:2},{value:"2. Python EngineConn configuration and deployment",id:"2-python-engineconn-configuration-and-deployment",level:2},{value:"2.1 Python version selection and compilation",id:"21-python-version-selection-and-compilation",level:3},{value:"2.2 python engineConn deployment and loading",id:"22-python-engineconn-deployment-and-loading",level:3},{value:"2.3 tags of python EngineConn",id:"23-tags-of-python-engineconn",level:3},{value:"3. Use of Python EngineConn",id:"3-use-of-python-engineconn",level:2},{value:"Ready to operate",id:"ready-to-operate",level:3},{value:"3.1 How to use Linkis SDK",id:"31-how-to-use-linkis-sdk",level:3},{value:"3.2 How to use Linkis-cli",id:"32-how-to-use-linkis-cli",level:3},{value:"3.3 How to use Scriptis",id:"33-how-to-use-scriptis",level:3},{value:"4. Python EngineConn user settings",id:"4-python-engineconn-user-settings",level:2}],u={toc:p},c="wrapper";function h(e){let{components:n,...a}=e;return(0,i.kt)(c,(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article mainly introduces the configuration, deployment and use of the Python EngineConn in Linkis1.0."),(0,i.kt)("h2",{id:"1-environment-configuration-before-using-python-engineconn"},"1. Environment configuration before using Python EngineConn"),(0,i.kt)("p",null,"If you want to use the python EngineConn on your server, you need to ensure that the python execution directory and execution permissions are in the user's PATH."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment variable name"),(0,i.kt)("th",{parentName:"tr",align:null},"Environment variable content"),(0,i.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"python"),(0,i.kt)("td",{parentName:"tr",align:null},"python execution environment"),(0,i.kt)("td",{parentName:"tr",align:null},"Anaconda's python executor is recommended")))),(0,i.kt)("p",null,"Table 1-1 Environmental configuration list"),(0,i.kt)("h2",{id:"2-python-engineconn-configuration-and-deployment"},"2. Python EngineConn configuration and deployment"),(0,i.kt)("h3",{id:"21-python-version-selection-and-compilation"},"2.1 Python version selection and compilation"),(0,i.kt)("p",null,"Python supports python2 and\nFor python3, you can simply change the configuration to complete the Python version switch, without recompiling the python EngineConn version."),(0,i.kt)("h3",{id:"22-python-engineconn-deployment-and-loading"},"2.2 python engineConn deployment and loading"),(0,i.kt)("p",null,"Here you can use the default loading method to be used normally."),(0,i.kt)("h3",{id:"23-tags-of-python-engineconn"},"2.3 tags of python EngineConn"),(0,i.kt)("p",null,"Here you can use the default dml.sql to insert it and it can be used normally."),(0,i.kt)("h2",{id:"3-use-of-python-engineconn"},"3. Use of Python EngineConn"),(0,i.kt)("h3",{id:"ready-to-operate"},"Ready to operate"),(0,i.kt)("p",null,"Before submitting python on linkis, you only need to make sure that there is python path in your user's PATH."),(0,i.kt)("h3",{id:"31-how-to-use-linkis-sdk"},"3.1 How to use Linkis SDK"),(0,i.kt)("p",null,"Linkis  provides a client method to call python tasks. The call method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.2/user-guide/sdk-manual"},"JAVA SDK Manual"),".\nIf you use Hive, you only need to make the following changes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "python-python2"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "python"); // required codeType\n')),(0,i.kt)("h3",{id:"32-how-to-use-linkis-cli"},"3.2 How to use Linkis-cli"),(0,i.kt)("p",null,"After Linkis 1.0, you can submit tasks through cli. We only need to specify the corresponding EngineConn and CodeType tag types. The use of Python is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType python-python2 -codeType python -code "print(\\"hello\\")"  -submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("p",null,"The specific usage can refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.2/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,i.kt)("h3",{id:"33-how-to-use-scriptis"},"3.3 How to use Scriptis"),(0,i.kt)("p",null,"The way to use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis"},"Scriptis")," is the simplest. You can directly enter Scriptis, right-click the directory and create a new python script, write python code and click Execute."),(0,i.kt)("p",null,"The execution logic of python is to start a python through Py4j\nGateway, and then the Python EngineConn submits the code to the python executor for execution."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(25160).Z,width:"977",height:"711"})),(0,i.kt)("p",null,"Figure 3-1 Screenshot of the execution effect of python"),(0,i.kt)("h2",{id:"4-python-engineconn-user-settings"},"4. Python EngineConn user settings"),(0,i.kt)("p",null,"In addition to the above EngineConn configuration, users can also make custom settings, such as the version of python and some modules that python needs to load."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(34853).Z,width:"1877",height:"623"})),(0,i.kt)("p",null,"Figure 4-1 User-defined configuration management console of python"))}h.isMDXComponent=!0},34853:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/python-config-ebbc3887013ead8fe621ad968aaf185c.png"},25160:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/python-run-acaf217e664ca9de98ccd0d3dfc20b86.png"}}]);