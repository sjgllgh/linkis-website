"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[53468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Kerberos",sidebar_position:5},o=void 0,s={unversionedId:"auth/kerberos",id:"auth/kerberos",title:"Kerberos",description:"Kerberos authentication",source:"@site/docs/auth/kerberos.md",sourceDirName:"auth",slug:"/auth/kerberos",permalink:"/docs/1.4.0/auth/kerberos",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/auth/kerberos.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Kerberos",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"proxy authentication",permalink:"/docs/1.4.0/auth/proxy"},next:{title:"Overview",permalink:"/docs/1.4.0/api/overview"}},c={},l=[{value:"Kerberos authentication",id:"kerberos-authentication",level:2},{value:"Scenario 1 HDFS storage",id:"scenario-1-hdfs-storage",level:2},{value:"Scenario 2 HDFS storage kerberos proxy authentication",id:"scenario-2-hdfs-storage-kerberos-proxy-authentication",level:2},{value:"Scenario 3 Queue manager checks yarn resource information",id:"scenario-3-queue-manager-checks-yarn-resource-information",level:2},{value:"Scenario 4 The hive data source in the data source function",id:"scenario-4-the-hive-data-source-in-the-data-source-function",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kerberos-authentication"},"Kerberos authentication"),(0,a.kt)("h2",{id:"scenario-1-hdfs-storage"},"Scenario 1 HDFS storage"),(0,a.kt)("p",null,"If the hadoop cluster is used, such as the file used to store the result set"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# Result set logs and other file paths, used to store the result set files of the Job wds.linkis.filesystem.hdfs.root.path(linkis.properties)\nHDFS_USER_ROOT_PATH=hdfs:///tmp/linkis\n")),(0,a.kt)("p",null,"And kerberos authentication is enabled, corresponding kerberos configuration is required"),(0,a.kt)("p",null,"Modify the corresponding configuration of ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis.properties")," as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"#Whether the kerberos authentication mode is enabled\nwds.linkis.keytab.enable=true\n#keytab places the directory, which stores the files of username.keytab of multiple users\nwds.linkis.keytab.file=/appcom/keytab/\n#Whether to bring principle client authentication, the default value is false\nwds.linkis.keytab.host.enabled=false\n#principle authentication needs to bring the client IP\nwds.linkis.keytab.host=127.0.0.1\n")),(0,a.kt)("p",null,"Restart the service after modification"),(0,a.kt)("h2",{id:"scenario-2-hdfs-storage-kerberos-proxy-authentication"},"Scenario 2 HDFS storage kerberos proxy authentication"),(0,a.kt)("p",null,"Hadoop2.0 version began to support the ProxyUser mechanism. The meaning is to use the user authentication information of User A to access the hadoop cluster in the name of User B.\nFor the server, it is considered that User B is accessing the cluster at this time, and the corresponding authentication of access requests (including the permissions of the HDFS file system and the permissions of YARN submitting task queues) is performed by User B.\nUser A is considered a superuser."),(0,a.kt)("p",null,"The main difference from Scenario 1 is that it can solve the problem that each user needs to generate a keytab file. If kerberos proxy authentication is set, the proxy user's keytab file can be used for authentication.\nModify the corresponding configuration of ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis.properties")," as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"#Whether the kerberos authentication mode is enabled\nwds.linkis.keytab.enable=true\n#keytab places the directory, which stores the files of username.keytab of multiple users\nwds.linkis.keytab.file=/appcom/keytab/\n#Whether to bring principle client authentication, the default value is false\nwds.linkis.keytab.host.enabled=false\n#principle authentication needs to bring the client IP\nwds.linkis.keytab.host=127.0.0.1\n\n#Enable kerberos proxy authentication\nwds.linkis.keytab.proxyuser.enable=true\n\n#Use superuser to verify user authentication information\nwds.linkis.keytab.proxyuser.superuser=hadoop\n\n\n\n")),(0,a.kt)("p",null,"Restart the service after modification"),(0,a.kt)("h2",{id:"scenario-3-queue-manager-checks-yarn-resource-information"},"Scenario 3 Queue manager checks yarn resource information"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"yarn-normal",src:n(63450).Z,width:"1669",height:"784"}),"\nWill access the REST API interface provided by Yarn to provide ResourceManager\nIf the ResourceManager of yarn has enabled kerberos authentication, you need to configure kerberos-related authentication information"),(0,a.kt)("p",null,"Database table linkis_cg_rm_external_resource_provider\nInsert yarn data information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO `linkis_cg_rm_external_resource_provider`\n(`resource_type`, `name`, `labels`, `config`) VALUES\n(\'Yarn\', \'sit\', NULL,\n\'\n     {\n         "rmWebAddress": "http://xx.xx.xx.xx:8088",\n         "hadoopVersion": "2.7.2",\n         "authorEnable": false,\n         "user":"hadoop","pwd":"123456",\n         "kerberosEnable":@YARN_KERBEROS_ENABLE,\n         "principalName": "@YARN_PRINCIPAL_NAME",\n         "keytabPath": "@YARN_KEYTAB_PATH"\n         "krb5Path": "@YARN_KRB5_PATH"\n     }\n\'\n);\n\n')),(0,a.kt)("p",null,"After the update, because the cache is used in the program, if you want to take effect immediately, you need to restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sh sbin/linkis-daemon.sh restart cg-linkismanager\n")),(0,a.kt)("h2",{id:"scenario-4-the-hive-data-source-in-the-data-source-function"},"Scenario 4 The hive data source in the data source function"),(0,a.kt)("p",null,"If the hive data source that needs to be connected and the corresponding hive cluster environment has kerberos authentication enabled, you need to upload the kerberos and keytab authentication file information when configuring the cluster environment.\n",(0,a.kt)("img",{alt:"image",src:n(82687).Z,width:"1386",height:"754"})))}h.isMDXComponent=!0},82687:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dsm-kerberos-715f5b2072a2529ea2c5b81ab437e228.png"},63450:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/yarn-normal-8723b62735d0da4ad3599871eef8c0d1.png"}}]);