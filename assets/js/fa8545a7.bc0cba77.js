"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[66852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=i,m=d["".concat(l,".").concat(k)]||d[k]||p[k]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},88903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={title:"Modify the system initialization default Token",sidebar_position:.4},r=void 0,s={unversionedId:"feature/update-token",id:"version-1.3.2/feature/update-token",title:"Modify the system initialization default Token",description:"1. Requirement background",source:"@site/versioned_docs/version-1.3.2/feature/update-token.md",sourceDirName:"feature",slug:"/feature/update-token",permalink:"/docs/latest/feature/update-token",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.2/feature/update-token.md",tags:[],version:"1.3.2",sidebarPosition:.4,frontMatter:{title:"Modify the system initialization default Token",sidebar_position:.4},sidebar:"tutorialSidebar",previous:{title:"Remove DSS Support dependency",permalink:"/docs/latest/feature/remove-dss-support"},next:{title:"Sandbox",permalink:"/docs/latest/quick/live-demo"}},l={},u=[{value:"1. Requirement background",id:"1-requirement-background",level:2},{value:"2. Instructions for use",id:"2-instructions-for-use",level:2},{value:"Token configuration required when Linkis uploads BML",id:"token-configuration-required-when-linkis-uploads-bml",level:3},{value:"Use the linkis-cli command to execute task Token configuration",id:"use-the-linkis-cli-command-to-execute-task-token-configuration",level:3},{value:"3. Precautions",id:"3-precautions",level:2},{value:"Full installation",id:"full-installation",level:3},{value:"version upgrade",id:"version-upgrade",level:3},{value:"Token expiration problem",id:"token-expiration-problem",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-requirement-background"},"1. Requirement background"),(0,i.kt)("p",null,"Linkis's original default Token is fixed and the length is too short, posing security risks. Therefore, Linkis 1.3.2 changes the original fixed Token to random generation, and increases the length of the Token."),(0,i.kt)("p",null,"Modified Token format: application abbreviation - 32-bit random number, such as BML-928a721518014ba4a28735ec2a0da799"),(0,i.kt)("p",null,"Token may be used in the Linkis service itself, such as executing tasks through Shell, uploading BML, etc., or it may be used in other applications, such as DSS, Qualitis and other applications to access Linkis."),(0,i.kt)("h2",{id:"2-instructions-for-use"},"2. Instructions for use"),(0,i.kt)("h3",{id:"token-configuration-required-when-linkis-uploads-bml"},"Token configuration required when Linkis uploads BML"),(0,i.kt)("p",null,"When the Linkis service itself uses Token, the Token in the configuration file must be consistent with the Token in the database. Match by applying the short name prefix."),(0,i.kt)("p",null,"The token generated in the database can be queried by the following statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select * from linkis_mg_gateway_auth_token;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"$LINKIS_HOME/conf/linkis.properites file Token configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"linkis.configuration.linkisclient.auth.token.value=BML-928a721518014ba4a28735ec2a0da799\nwds.linkis.client.common.tokenValue=BML-928a721518014ba4a28735ec2a0da799\nwds.linkis.bml.auth.token.value=BML-928a721518014ba4a28735ec2a0da799\nwds.linkis.context.client.auth.value=BML-928a721518014ba4a28735ec2a0da799\nwds.linkis.errorcode.auth.token=BML-928a721518014ba4a28735ec2a0da799\n\nwds.linkis.client.test.common.tokenValue=LINKIS_CLI-215af9e265ae437ca1f070b17d6a540d\n\nwds.linkis.filesystem.token.value=WS-52bce72ed51741c7a2a9544812b45725\nwds.linkis.gateway.access.token=WS-52bce72ed51741c7a2a9544812b45725\n\nwds.linkis.server.dsm.auth.token.value=DSM-65169e8e1b564c0d8a04ee861ca7df6e\n")),(0,i.kt)("h3",{id:"use-the-linkis-cli-command-to-execute-task-token-configuration"},"Use the linkis-cli command to execute task Token configuration"),(0,i.kt)("p",null,"Modify $LINKIS_HOME/conf/linkis-cli/linkis-cli.properties file Token configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.client.common.tokenValue=BML-928a721518014ba4a28735ec2a0da799\n")),(0,i.kt)("h2",{id:"3-precautions"},"3. Precautions"),(0,i.kt)("h3",{id:"full-installation"},"Full installation"),(0,i.kt)("p",null,"For the full installation of the new version of Linkis, the install.sh script will automatically process the configuration file and keep the database Token consistent. Therefore, the Token of the Linkis service itself does not need to be modified. Each application can query and use the new token through the management console."),(0,i.kt)("h3",{id:"version-upgrade"},"version upgrade"),(0,i.kt)("p",null,"When the version is upgraded, the database Token is not modified, so there is no need to modify the configuration file and application Token."),(0,i.kt)("h3",{id:"token-expiration-problem"},"Token expiration problem"),(0,i.kt)("p",null,"When the Token token is invalid or has expired, query the Token through the management console or sql statement. Check whether the Token used by the client is consistent with the database. If not, there are two solutions."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify the client configuration to make the Token settings consistent with the database.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify the Token configuration value of each application in the database. The old version database Token configuration reference is as follows"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO `linkis_mg_gateway_auth_token`(`token_name`,`legal_users`,`legal_hosts`,`business_owner`,`create_time`,`update_time`,`elapse_day`,`update_by`) VALUES ('QML-AUTH','*','*','BDP',curdate(),curdate(),-1,'LINKIS');\nINSERT INTO `linkis_mg_gateway_auth_token`(`token_name`,`legal_users`,`legal_hosts`,`business_owner`,`create_time`,`update_time`,`elapse_day`,`update_by`) VALUES ('BML-AUTH','*','*','BDP',curdate(),curdate(),-1,'LINKIS');\nINSERT INTO `linkis_mg_gateway_auth_token`(`token_name`,`legal_users`,`legal_hosts`,`business_owner`,`create_time`,`update_time`,`elapse_day`,`update_by`) VALUES ('WS-AUTH','*','*','BDP',curdate(),curdate(),-1,'LINKIS');\nINSERT INTO `linkis_mg_gateway_auth_token`(`token_name`,`legal_users`,`legal_hosts`,`business_owner`,`create_time`,`update_time`,`elapse_day`,`update_by`) VALUES ('dss-AUTH','*','*','BDP',curdate(),curdate(),-1,'LINKIS');\nINSERT INTO `linkis_mg_gateway_auth_token`(`token_name`,`legal_users`,`legal_hosts`,`business_owner`,`create_time`,`update_time`,`elapse_day`,`update_by`) VALUES ('QUALITIS-AUTH','*','*','BDP',curdate(),curdate(),-1,'LINKIS');\nINSERT INTO `linkis_mg_gateway_auth_token`(`token_name`,`legal_users`,`legal_hosts`,`business_owner`,`create_time`,`update_time`,`elapse_day`,`update_by`) VALUES ('VALIDATOR-AUTH','*','*','BDP',curdate(),curdate(),-1,'LINKIS');\nINSERT INTO `linkis_mg_gateway_auth_token`(`token_name`,`legal_users`,`legal_hosts`,`business_owner`,`create_time`,`update_time`,`elapse_day`,`update_by`) VALUES ('LINKISCLI-AUTH','*','*','BDP',curdate(),curdate(),-1,'LINKIS');\nINSERT INTO `linkis_mg_gateway_auth_token`(`token_name`,`legal_users`,`legal_hosts`,`business_owner`,`create_time`,`update_time`,`elapse_day`,`update_by`) VALUES ('DSM-AUTH','*','*','BDP',curdate(),curdate(),-1,'LINKIS');\nINSERT INTO `linkis_mg_gateway_auth_token`(`token_name`,`legal_users`,`legal_hosts`,`business_owner`,`create_time`,`update_time`,`elapse_day`,`update_by`) VALUES ('LINKIS_CLI_TEST','*','*','BDP',curdate(),curdate(),-1,'LINKIS');\n")))}p.isMDXComponent=!0}}]);