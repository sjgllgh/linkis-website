"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[95323],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={title:"proxy authentication",sidebar_position:4},a=void 0,s={unversionedId:"auth/proxy",id:"auth/proxy",title:"proxy authentication",description:"This method allows the login user to be different from the actual user. The main function is to control that the user must be a real-name user when logging in, but a non-real-name user when actually using the big data platform. It is convenient to verify and control permissions.",source:"@site/docs/auth/proxy.md",sourceDirName:"auth",slug:"/auth/proxy",permalink:"/docs/1.3.2/auth/proxy",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/auth/proxy.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"proxy authentication",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Password-Free",permalink:"/docs/1.3.2/auth/test"},next:{title:"Kerberos",permalink:"/docs/1.3.2/auth/kerberos"}},l={},u=[{value:"1. Implementation logic introduction",id:"1-implementation-logic-introduction",level:2},{value:"2. How to use",id:"2-how-to-use",level:2},{value:"2.1 Step1 Turn on proxy mode",id:"21-step1-turn-on-proxy-mode",level:3},{value:"2.2 Step2 Restart the service of linkis-mg-gateway",id:"22-step2-restart-the-service-of-linkis-mg-gateway",level:3},{value:"3 Notes",id:"3-notes",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This method allows the login user to be different from the actual user. The main function is to control that the user must be a real-name user when logging in, but a non-real-name user when actually using the big data platform. It is convenient to verify and control permissions.\nFor example: when linkis executes the task submitted by the user, the linkis main process service will switch to the corresponding user through sudo -u ${submit user}, and then execute the corresponding engine start command,\nThis requires creating a corresponding system user for each ${submit user} in advance, and configuring related environment variables. For new users, a series of environment initialization preparations are required,\nFrequent user changes will increase the cost of operation and maintenance, and there are too many users, it is impossible to configure resources for a single user, and resources cannot be well controlled. If A proxy can be implemented for the specified proxy user to execute, the execution entry can be uniformly converged to solve the problem of needing to initialize the environment.")),(0,o.kt)("h2",{id:"1-implementation-logic-introduction"},"1. Implementation logic introduction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login users: users who directly log in to the system through username and password"),(0,o.kt)("li",{parentName:"ul"},"Proxy user: The user who actually performs operations as a login user is called a proxy user, and the proxy login user performs related operations")),(0,o.kt)("p",null,"For login cookie processing, parse out the login user and proxy user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"The key of the proxy user's cookie is: linkis_user_session_proxy_ticket_id_v1\nLogin user cookie: linkis_user_session_ticket_id_v1\n\n")),(0,o.kt)("p",null,"The relevant interface of linkis can identify the proxy user information based on the UserName information, and use the proxy user to perform various operations. And record the audit log, including the user's task execution operation, download operation\nWhen the task is submitted for execution, the entrance entry service modifies the executed user as the proxy user"),(0,o.kt)("h2",{id:"2-how-to-use"},"2. How to use"),(0,o.kt)("h3",{id:"21-step1-turn-on-proxy-mode"},"2.1 Step1 Turn on proxy mode"),(0,o.kt)("p",null,"Specify the following parameters in ",(0,o.kt)("inlineCode",{parentName:"p"},"linkis.properties"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# Turn on proxy mode\n     wds.linkis.gateway.conf.enable.proxy.user=true\n     # Specify the proxy configuration file\n     wds.linkis.gateway.conf.proxy.user.config=proxy.properties\n")),(0,o.kt)("p",null,"In the conf directory, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy.properties")," file with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# The format is as follows:\n     ${LOGIN_USER}=${PROXY_USER}\n     # For example:\n     enjoyyin=hadoop\n")),(0,o.kt)("p",null,"If the existing proxy mode cannot meet your needs, you can also further modify: ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.linkis.gateway.security.ProxyUserUtils"),"."),(0,o.kt)("h3",{id:"22-step2-restart-the-service-of-linkis-mg-gateway"},"2.2 Step2 Restart the service of linkis-mg-gateway"),(0,o.kt)("p",null,"After modifying the configuration, you need to restart the ",(0,o.kt)("inlineCode",{parentName:"p"},"linkis-mg-gateway")," service ",(0,o.kt)("inlineCode",{parentName:"p"},"sh sbin/linkis-daemon.sh start mg-mgtaeway")," to take effect"),(0,o.kt)("h2",{id:"3-notes"},"3 Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users are divided into proxy users and non-proxy users. Proxy users cannot be proxied to other users for execution"),(0,o.kt)("li",{parentName:"ul"},"It is necessary to control the list of login users and system users who can be proxied, prohibit any proxy, and avoid uncontrollable permissions. It is best to support the configuration of the database table, and it can be directly modified to take effect without restarting the service"),(0,o.kt)("li",{parentName:"ul"},"A separate record log file contains the operations of the proxy user, such as proxy execution, function update, etc. PublicService proxy user operations are all recorded in the log, which is convenient for auditing")))}p.isMDXComponent=!0}}]);