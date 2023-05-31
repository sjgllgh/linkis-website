"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[39130],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),g=a,k=c["".concat(s,".").concat(g)]||c[g]||p[g]||r;return t?i.createElement(k,l(l({ref:n},d),{},{components:t})):i.createElement(k,l({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},39921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=t(87462),a=(t(67294),t(3905));const r={title:"Trino Engine",sidebar_position:13},l=void 0,o={unversionedId:"engine-usage/trino",id:"engine-usage/trino",title:"Trino Engine",description:"This article mainly introduces the installation, use and configuration of the Trino engine plugin in Linkis.",source:"@site/docs/engine-usage/trino.md",sourceDirName:"engine-usage",slug:"/engine-usage/trino",permalink:"/docs/1.4.0/engine-usage/trino",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/engine-usage/trino.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Trino Engine",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Presto Engine",permalink:"/docs/1.4.0/engine-usage/presto"},next:{title:"Seatunnel Engine",permalink:"/docs/1.4.0/engine-usage/seatunnel"}},s={},u=[{value:"1. Pre-work",id:"1-pre-work",level:2},{value:"1.1 Engine installation",id:"11-engine-installation",level:3},{value:"1.2 Service Verification",id:"12-service-verification",level:3},{value:"2. Engine plugin deployment",id:"2-engine-plugin-deployment",level:2},{value:"2.1 Engine plugin preparation (choose one) non-default engine",id:"21-engine-plugin-preparation-choose-one-non-default-engine",level:3},{value:"2.2 Upload and load engine plugins",id:"22-upload-and-load-engine-plugins",level:3},{value:"2.3 Engine refresh",id:"23-engine-refresh",level:3},{value:"2.3.1 Restart and refresh",id:"231-restart-and-refresh",level:4},{value:"2.3.2 Check whether the engine is refreshed successfully",id:"232-check-whether-the-engine-is-refreshed-successfully",level:3},{value:"3 Engine usage",id:"3-engine-usage",level:2},{value:"3.1 Submit tasks through <code>Linkis-cli</code>",id:"31-submit-tasks-through-linkis-cli",level:3},{value:"4. Engine configuration instructions",id:"4-engine-configuration-instructions",level:2},{value:"4.1 Default Configuration Description",id:"41-default-configuration-description",level:3},{value:"4.2 Configuration modification",id:"42-configuration-modification",level:3},{value:"4.2.1 Management console configuration",id:"421-management-console-configuration",level:4},{value:"4.2.2 Task interface configuration",id:"422-task-interface-configuration",level:4},{value:"4.3 Engine related data table",id:"43-engine-related-data-table",level:3}],d={toc:u},c="wrapper";function p(e){let{components:n,...r}=e;return(0,a.kt)(c,(0,i.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article mainly introduces the installation, use and configuration of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Trino")," engine plugin in ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis"),"."),(0,a.kt)("h2",{id:"1-pre-work"},"1. Pre-work"),(0,a.kt)("h3",{id:"11-engine-installation"},"1.1 Engine installation"),(0,a.kt)("p",null,"If you want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Trino")," engine on your ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," service, you need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"Trino")," service and make sure the service is available."),(0,a.kt)("h3",{id:"12-service-verification"},"1.2 Service Verification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# prepare trino-cli\nwget https://repo1.maven.org/maven2/io/trino/trino-cli/374/trino-cli-374-executable.jar\nmv trill-cli-374-executable.jar trill-cli\nchmod +x trino-cli\n\n# Execute the task\n./trino-cli --server localhost:8080 --execute \'show tables from system.jdbc\'\n\n# Get the following output to indicate that the service is available\n"attributes"\n"catalogs"\n"columns"\n"procedure_columns"\n"procedures"\n"pseudo_columns"\n"schemas"\n"super_tables"\n"super_types"\n"table_types"\n"tables"\n"types"\n"udts"\n')),(0,a.kt)("h2",{id:"2-engine-plugin-deployment"},"2. Engine plugin deployment"),(0,a.kt)("h3",{id:"21-engine-plugin-preparation-choose-one-non-default-engine"},"2.1 Engine plugin preparation (choose one) ",(0,a.kt)("a",{parentName:"h3",href:"/docs/1.4.0/engine-usage/overview"},"non-default engine")),(0,a.kt)("p",null,"Method 1: Download the engine plug-in package directly"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis Engine Plugin Download")),(0,a.kt)("p",null,"Method 2: Compile the engine plug-in separately (requires ",(0,a.kt)("inlineCode",{parentName:"p"},"maven")," environment)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# compile\ncd ${linkis_code_dir}/linkis-engineconn-plugins/trino/\nmvn clean install\n# The compiled engine plug-in package is located in the following directory\n${linkis_code_dir}/linkis-engineconn-plugins/trino/target/out/\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.4.0/deployment/install-engineconn"},"EngineConnPlugin Engine Plugin Installation")),(0,a.kt)("h3",{id:"22-upload-and-load-engine-plugins"},"2.2 Upload and load engine plugins"),(0,a.kt)("p",null,"Upload the engine package in 2.1 to the engine directory of the server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,a.kt)("p",null,"The directory structure after uploading is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis-engineconn-plugins/\n\u251c\u2500\u2500 triune\n\u2502   \u251c\u2500\u2500 dist\n\u2502 \u2502 \u2514\u2500\u2500 371\n\u2502   \u2502       \u251c\u2500\u2500 conf\n\u2502 \u2502 \u2514\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 plugin\n\u2502 \u2514\u2500\u2500 371\n")),(0,a.kt)("h3",{id:"23-engine-refresh"},"2.3 Engine refresh"),(0,a.kt)("h4",{id:"231-restart-and-refresh"},"2.3.1 Restart and refresh"),(0,a.kt)("p",null,"Refresh the engine by restarting the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-linkismanager\n")),(0,a.kt)("h3",{id:"232-check-whether-the-engine-is-refreshed-successfully"},"2.3.2 Check whether the engine is refreshed successfully"),(0,a.kt)("p",null,"You can check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"last_update_time")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources")," table in the database is the time to trigger the refresh."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"#login to `linkis` database\nselect * from linkis_cg_engine_conn_plugin_bml_resources;\n")),(0,a.kt)("h2",{id:"3-engine-usage"},"3 Engine usage"),(0,a.kt)("h3",{id:"31-submit-tasks-through-linkis-cli"},"3.1 Submit tasks through ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," sh ./bin/linkis-cli -submitUser Hadoop \\\n -engineType trino-371 -codeType sql \\\n -code 'select * from system.jdbc.schemas limit 10' \\\n -runtimeMap linkis.trino.url=http://127.0.0.1:8080\n")),(0,a.kt)("p",null,"If the management console, task interface, and configuration file are not configured (see 4.2 for the configuration method), they can be configured through the ",(0,a.kt)("inlineCode",{parentName:"p"},"-runtimeMap")," attribute in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis-cli")," client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./bin/linkis-cli -engineType trino-371 \\\n-codeType  sql -code 'select * from system.jdbc.schemas limit 10;'  \\\n-runtimeMap linkis.trino.urll=http://127.0.0.1:8080 \\\n-runtimeMap linkis.trino.catalog=hive \\\n-runtimeMap linkis.trino.schema=default \\\n-submitUser hadoop -proxyUser hadoop\n")),(0,a.kt)("p",null,"More ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," command parameter reference: ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4.0/user-guide/linkiscli-manual"},"Linkis-Cli usage")),(0,a.kt)("h2",{id:"4-engine-configuration-instructions"},"4. Engine configuration instructions"),(0,a.kt)("h3",{id:"41-default-configuration-description"},"4.1 Default Configuration Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.url"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://127.0.0.1:8080"},"http://127.0.0.1:8080")),(0,a.kt)("td",{parentName:"tr",align:null},"Trino cluster connection URL"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.default.limit"),(0,a.kt)("td",{parentName:"tr",align:null},"5000"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit the number of result sets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.http.connectTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"60"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Connection timeout (seconds)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.http.readTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"60"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Transmission timeout (seconds)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.resultSet.cache.max"),(0,a.kt)("td",{parentName:"tr",align:null},"512k"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"result set buffer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.user"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.password"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.passwordCmd"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"password callback command")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.catalog"),(0,a.kt)("td",{parentName:"tr",align:null},"system"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Catalog")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.schema"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"Schema")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.insecured"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"verify SSL certificate")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.engineconn.concurrent.limit"),(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum concurrent number of engines")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.key.store"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"keystore path")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.keystore.password"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"keystore password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.keystore.type"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"keystore type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.truststore"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"truststore")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ss..truststore.type"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"truststore type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.truststore.password"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"truststore password")))),(0,a.kt)("h3",{id:"42-configuration-modification"},"4.2 Configuration modification"),(0,a.kt)("p",null,"If the default parameters are not satisfied, there are the following ways to configure some basic parameters"),(0,a.kt)("h4",{id:"421-management-console-configuration"},"4.2.1 Management console configuration"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(22807).Z,width:"1261",height:"559"})),(0,a.kt)("p",null,"Note: After modifying the configuration under the ",(0,a.kt)("inlineCode",{parentName:"p"},"IDE")," tag, you need to specify ",(0,a.kt)("inlineCode",{parentName:"p"},"-creator IDE")," to take effect (other tags are similar), such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./bin/linkis-cli -creator IDE -submitUser hadoop \\\n -engineType trino-371 -codeType sql \\\n -code 'select * from system.jdbc.schemas limit 10' \\\n -runtimeMap linkis.trino.url=http://127.0.0.1:8080\n")),(0,a.kt)("h4",{id:"422-task-interface-configuration"},"4.2.2 Task interface configuration"),(0,a.kt)("p",null,"Submit the task interface and configure it through the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'Example of http request parameters\n{\n    "executionContent": {"code": "select * from system.jdbc.schemas limit 10;", "runType":  "sql"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                "linkis.trino.url":"http://127.0.0.1:8080",\n                                "linkis.trino.catalog ":"hive",\n                                "linkis.trino.schema ":"default"\n                                }\n                            }\n                    },\n    "labels": {\n        "engineType": "trino-371",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,a.kt)("h3",{id:"43-engine-related-data-table"},"4.3 Engine related data table"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," is managed through engine tags, and the data table information involved is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key: Insert the key and default values \u200b\u200b\u200b\u200bof the configuration parameters of the engine\nlinkis_cg_manager_label: insert engine label such as: trino-375\nlinkis_ps_configuration_category: Insert the directory association of the engine\nlinkis_ps_configuration_config_value: Insert the configuration that the engine needs to display\nlinkis_ps_configuration_key_engine_relation: the relationship between configuration items and engines\n")),(0,a.kt)("p",null,"The initial data related to the engine in the table is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @TRINO_LABEL=\"trino-371\";\nSET @TRINO_IDE=CONCAT('*-IDE,',@TRINO_LABEL);\nSET @TRINO_ALL=CONCAT('*-*,',@TRINO_LABEL);\n\n-- engine label\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @TRINO_IDE, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @TRINO_ALL, 'OPTIONAL', 2, now(), now());\nselect @label_id := id from `linkis_cg_manager_label` where label_value = @TRINO_IDE;\ninsert into `linkis_ps_configuration_category` (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.default.limit', 'The limit on the number of query result sets returned', 'The limit on the number of result sets', '5000', 'None', '', 'trino', 0, 0, 1, 'Data source configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.http.connectTimeout', 'Timeout for connecting to Trino server', 'Connection timeout (seconds)', '60', 'None', '', 'trino', 0, 0, 1 , 'Data Source Configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.http.readTimeout', 'Timeout waiting for Trino server to return data', 'Transmission timeout (seconds)', '60', 'None', '', 'trino', 0, 0 , 1, 'Data source configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.resultSet.cache.max', 'Trino result set buffer size', 'Result set buffer', '512k', 'None', '', 'trino', 0, 0, 1 , 'Data Source Configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.url', 'Trino server URL', 'Trino server URL', 'http://127.0.0.1:9401', 'None', '', 'trino', 0, 0, 1 , 'Data Source Configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.user', 'username used to connect to Trino query service', 'username', 'null', 'None', '', 'trino', 0, 0, 1, 'data source configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.password', 'Password for connecting Trino query service', 'password', 'null', 'None', '', 'trino', 0, 0, 1, 'data source configuration ');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.passwordCmd', 'Password callback command for connecting to Trino query service', 'Password callback command', 'null', 'None', '', 'trino', 0, 0, 1, 'Datasource Configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.catalog', 'catalog', 'Catalog', 'system', 'None', '', 'trino', 0, 0, 1, 'data source configuration' );\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.schema', 'The default schema for connecting Trino query service', 'Schema', '', 'None', '', 'trino', 0, 0, 1, 'Data source configuration') ;\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.insecured', 'Whether to ignore the server's SSL certificate', 'Verify SSL certificate', 'false', 'None', '', 'trino', 0, 0, 1, 'data source configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.engineconn.concurrent.limit', 'Engine maximum concurrency', 'Engine maximum concurrency', '100', 'None', '', 'trino', 0, 0, 1, 'Data source configuration' );\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.keystore', 'Trino server SSL keystore path', 'keystore path', 'null', 'None', '', 'trino', 0, 0, 1, 'data source configuration ');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.keystore.type', 'Trino server SSL keystore type', 'keystore type', 'null', 'None', '', 'trino', 0, 0, 1, 'data source configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.keystore.password', 'Trino server SSL keystore password', 'keystore password', 'null', 'None', '', 'trino', 0, 0, 1, 'data source configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.truststore', 'Trino server SSL truststore path', 'truststore path', 'null', 'None', '', 'trino', 0, 0, 1, 'data source configuration ');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.truststore.type', 'Trino server SSL truststore type', 'truststore type', 'null', 'None', '', 'trino', 0, 0, 1, 'data source configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.truststore.password', 'Trino server SSL truststore password', 'truststore password', 'null', 'None', '', 'trino', 0, 0, 1, 'data source configuration');\n\n\n-- key engine relation\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as config_key_id, label.id AS engine_type_label_id FROM `linkis_ps_configuration_config_key` config\nINNER JOIN `linkis_cg_manager_label` label ON config.engine_conn_type = 'trino' and label_value = @TRINO_ALL);\n\n-- engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select relation.config_key_id AS config_key_id, '' AS config_value, relation.engine_type_label_id AS config_label_id FROM `linkis_ps_configuration_key_engine_relation` relation\nINNER JOIN `linkis_cg_manager_label` label ON relation.engine_type_label_id = label.id AND label.label_value = @TRINO_ALL);\n")))}p.isMDXComponent=!0},22807:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/trino-config-74bd6451f84a61de648f8efe231a18c1.png"}}]);