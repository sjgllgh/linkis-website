"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[24070],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),u=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),m=u(a),c=n,k=m["".concat(o,".").concat(c)]||m[c]||p[c]||l;return a?r.createElement(k,i(i({ref:e},s),{},{components:a})):r.createElement(k,i({ref:e},s))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[m]="string"==typeof t?t:n,i[1]=d;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1359:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={title:"Data Source Management Service Architecture",sidebar_position:3},i=void 0,d={unversionedId:"architecture/public-enhancement-services/datasource-manager",id:"version-1.3.0/architecture/public-enhancement-services/datasource-manager",title:"Data Source Management Service Architecture",description:"Background",source:"@site/versioned_docs/version-1.3.0/architecture/public-enhancement-services/datasource-manager.md",sourceDirName:"architecture/public-enhancement-services",slug:"/architecture/public-enhancement-services/datasource-manager",permalink:"/docs/1.3.0/architecture/public-enhancement-services/datasource-manager",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.0/architecture/public-enhancement-services/datasource-manager.md",tags:[],version:"1.3.0",sidebarPosition:3,frontMatter:{title:"Data Source Management Service Architecture",sidebar_position:3},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"CS Cleanup Interface Features",permalink:"/docs/1.3.0/architecture/public-enhancement-services/context-service/content-service-cleanup"},next:{title:"Data Source Management Service Architecture",permalink:"/docs/1.3.0/architecture/public-enhancement-services/metadata-manager"}},o={},u=[{value:"Background",id:"background",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:2},{value:"Architecture Description",id:"architecture-description",level:2},{value:"Core Process",id:"core-process",level:3},{value:"Entity Object",id:"entity-object",level:2},{value:"<strong>Database Design</strong>",id:"database-design",level:2},{value:"Database Diagram\uff1a",id:"database-diagram",level:5},{value:"Data Table Definition\uff1a",id:"data-table-definition",level:5}],s={toc:u},m="wrapper";function p(t){let{components:e,...l}=t;return(0,n.kt)(m,(0,r.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"Exchangis0.x and Linkis0.x in earlier versions both have integrated data source modules. In order to manage the ability to reuse data sources, Linkis reconstructs the data source module based on linkis-datasource (refer to related documents), and converts the data source Management unpacks into data source management services and metadata management services\u3002"),(0,n.kt)("p",null,"This article mainly involves the DataSource Manager Server data source management service, which provides the following functions:"),(0,n.kt)("p",null,"1\uff09\u3001Linkis unified management service startup and deployment, does not increase operation and maintenance costs, reuse Linkis service capabilities;"),(0,n.kt)("p",null,"2\uff09\u3001Provide management services of graphical interface through Linkis Web. The interface provides management services such as new data source, data source query, data source update, connectivity test and so on;"),(0,n.kt)("p",null,"3\uff09\u3001 the service is stateless, multi-instance deployment, so that the service is highly available. When the system is deployed, multiple instances can be deployed. Each instance provides services independently to the outside world without interfering with each other. All information is stored in the database for sharing."),(0,n.kt)("p",null,"4\uff09\u3001Provide full life cycle management of data sources, including new, query, update, test, and expiration management."),(0,n.kt)("p",null,"5\uff09\u3001Multi-version data source management, historical data sources will be saved in the database, and data source expiration management is provided. "),(0,n.kt)("p",null,"6\uff09\u3001The Restful interface provides functions, a detailed list: data source type query, data source detailed information query, data source information query based on version, data source version query, get data source parameter list, multi-dimensional data source search, get data source environment query and Update, add data source, data source parameter configuration, data source expiration setting, data source connectivity test."),(0,n.kt)("h2",{id:"architecture-diagram"},"Architecture Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"datasource Architecture diagram",src:a(27020).Z,width:"960",height:"720"})),(0,n.kt)("h2",{id:"architecture-description"},"Architecture Description"),(0,n.kt)("p",null,"1\u3001The service is registered in the Linkis-Eureak-Service service and managed in a unified manner with other Linkis microservices. The client can obtain the data source management service by connecting the Linkis-GateWay-Service service and the service name data-source-manager."),(0,n.kt)("p",null,"2\u3001The interface layer provides other applications through the Restful interface, providing additions, deletions, and changes to data sources and data source environments, data source link and dual link tests, data source version management and expiration operations;"),(0,n.kt)("p",null,"3\u3001The Service layer is mainly for the service management of the database and the material library, and permanently retains the relevant information of the data source;"),(0,n.kt)("p",null,"4\u3001The link test of the data source is done through the linkis metastore server service, which now provides the mysql\\es\\kafka\\hive service"),(0,n.kt)("h3",{id:"core-process"},"Core Process"),(0,n.kt)("p",null,"1\u3001To create a new data source, firstly, the user of the new data source will be obtained from the request to determine whether the user is valid. The next step will be to verify the relevant field information of the data source. The data source name and data source type cannot be empty. The data source name is used to confirm whether the data source exists. If it does not exist, it will be inserted in the database, and the data source ID number will be returned."),(0,n.kt)("p",null,"2\u3001 To update the data source, firstly, the user of the new data source will be obtained from the request to determine whether the user is valid. The next step will be to verify the relevant field information of the new data source. The data source name and data source type cannot be empty. It will confirm whether the data source exists according to the data source ID number. If it does not exist, an exception will be returned. If it exists, it will be further judged whether the user has update permission for the data source. The user is the administrator or the owner of the data source. Only have permission to update. If you have permission, the data source will be updated and the data source ID will be returned."),(0,n.kt)("p",null,"3\u3001 To update the data source parameters, firstly, the user of the new data source will be obtained from the request to determine whether the user is valid, and the detailed data source information will be obtained according to the passed parameter data source ID, and then it will be determined whether the user is the owner of the changed data source or not. For the administrator, if there is any, the modified parameters will be further verified, and the parameters will be updated after passing, and the versionId will be returned."),(0,n.kt)("h2",{id:"entity-object"},"Entity Object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Class Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DataSourceType"),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates the type of data source")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DataSourceParamKeyDefinition"),(0,n.kt)("td",{parentName:"tr",align:null},"Declare data source property configuration definitions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DataSource"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source object entity class, including permission tags and attribute configuration definitions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DataSourceEnv"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source environment object entity class, which also contains attribute configuration definitions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DataSourceParameter"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source specific parameter configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DatasourceVersion"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source version details")))),(0,n.kt)("h2",{id:"database-design"},(0,n.kt)("strong",{parentName:"h2"},"Database Design")),(0,n.kt)("h5",{id:"database-diagram"},"Database Diagram\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(24591).Z,width:"1113",height:"889"})),(0,n.kt)("h5",{id:"data-table-definition"},"Data Table Definition\uff1a"),(0,n.kt)("p",null,"Table\uff1alinkis_ps_dm_datatsource <--\x3eObject\uff1aDataSource"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Serial Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Column"),(0,n.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"datasource_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"datasource_desc"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source detailed description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"datasource_type_id"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source type ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"create_identify"),(0,n.kt)("td",{parentName:"tr",align:null},"create identify")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"create_system"),(0,n.kt)("td",{parentName:"tr",align:null},"System for creating data sources")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"parameter"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source parameters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"create_time"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source creation time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"modify_time"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source modification time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"create_user"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source create user")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"11"),(0,n.kt)("td",{parentName:"tr",align:null},"modify_user"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source modify user")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"12"),(0,n.kt)("td",{parentName:"tr",align:null},"labels"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source label")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"13"),(0,n.kt)("td",{parentName:"tr",align:null},"version_id"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source version ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"14"),(0,n.kt)("td",{parentName:"tr",align:null},"expire"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the data source is out of date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"15"),(0,n.kt)("td",{parentName:"tr",align:null},"published_version_id"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source release version number")))),(0,n.kt)("p",null,"Table Name\uff1alinkis_ps_dm_datasource_type <--\x3eObject\uff1aDataSourceType"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Serial Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Column"),(0,n.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source type ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source type name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"description"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source type description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"option"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of data source")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"classifier"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source type classifier")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"icon"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source image display path")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"layers"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source type hierarchy")))),(0,n.kt)("p",null,"Table\uff1alinkis_ps_dm_datasource_env <--\x3eObject\uff1aDataSourceEnv"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Serial Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Column"),(0,n.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source environment ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"env_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source environment name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"env_desc"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source environment description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"datasource_type_id"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source type ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"parameter"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source environment parameters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"create_time"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source environment creation time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"create_user"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source environment create user")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"modify_time"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source modification time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"modify_user"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source modify user")))),(0,n.kt)("p",null,"Table\uff1alinkis_ps_dm_datasource_type_key <--\x3eObject\uff1aDataSourceParamKeyDefinition"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Serial Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Column"),(0,n.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"Key-value type ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"data_source_type_id"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source type ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source parameter key value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source parameter name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"default_value"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source parameter default value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"value_type"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source parameter type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"scope"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source parameter range")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"require"),(0,n.kt)("td",{parentName:"tr",align:null},"Is the data source parameter required?")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"description"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source parameter description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"value_regex"),(0,n.kt)("td",{parentName:"tr",align:null},"Regular data source parameters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"11"),(0,n.kt)("td",{parentName:"tr",align:null},"ref_id"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source parameter association ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"12"),(0,n.kt)("td",{parentName:"tr",align:null},"ref_value"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source parameter associated value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"13"),(0,n.kt)("td",{parentName:"tr",align:null},"data_source"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"14"),(0,n.kt)("td",{parentName:"tr",align:null},"update_time"),(0,n.kt)("td",{parentName:"tr",align:null},"update time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"15"),(0,n.kt)("td",{parentName:"tr",align:null},"create_time"),(0,n.kt)("td",{parentName:"tr",align:null},"Create Time")))),(0,n.kt)("p",null,"Table\uff1alinkis_ps_dm_datasource_version <--\x3eObject\uff1aDatasourceVersion"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Serial Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Column"),(0,n.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"version_id"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source version ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"datasource_id"),(0,n.kt)("td",{parentName:"tr",align:null},"Data source ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"parameter"),(0,n.kt)("td",{parentName:"tr",align:null},"The version parameter of the data source")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"comment"),(0,n.kt)("td",{parentName:"tr",align:null},"comment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"create_time"),(0,n.kt)("td",{parentName:"tr",align:null},"Create Time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"create_user"),(0,n.kt)("td",{parentName:"tr",align:null},"Create User")))))}p.isMDXComponent=!0},24591:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/dn-db-3b608322e777f894eb7e82829f54a8e9.png"},27020:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/linkis-datasource-server-eaf9427b76af0f7befa600b166f04e28.png"}}]);