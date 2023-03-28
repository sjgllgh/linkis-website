"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[52122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(h,s(s({ref:t},u),{},{components:n})):i.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={title:"Analysis of Engine BML",sidebar_position:1},s=void 0,l={unversionedId:"architecture/public-enhancement-services/bml/engine-bml-dissect",id:"version-1.3.0/architecture/public-enhancement-services/bml/engine-bml-dissect",title:"Analysis of Engine BML",description:"Introduction: This article takes the engine-related material management process as the entry point, and combines the underlying data model and source code to analyze the implementation details of the engine material management function in detail, hoping to help you better understand the BML (material library) service. Architecture.",source:"@site/versioned_docs/version-1.3.0/architecture/public-enhancement-services/bml/engine-bml-dissect.md",sourceDirName:"architecture/public-enhancement-services/bml",slug:"/architecture/public-enhancement-services/bml/engine-bml-dissect",permalink:"/docs/1.3.0/architecture/public-enhancement-services/bml/engine-bml-dissect",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.0/architecture/public-enhancement-services/bml/engine-bml-dissect.md",tags:[],version:"1.3.0",sidebarPosition:1,frontMatter:{title:"Analysis of Engine BML",sidebar_position:1},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.3.0/architecture/public-enhancement-services/bml/overview"},next:{title:"CS Architecture",permalink:"/docs/1.3.0/architecture/public-enhancement-services/context-service/"}},o={},c=[{value:"1. BML material library service",id:"1-bml-material-library-service",level:2},{value:"2. BML material library service underlying table model",id:"2-bml-material-library-service-underlying-table-model",level:2},{value:"3. Usage scenarios of BML material library service",id:"3-usage-scenarios-of-bml-material-library-service",level:2},{value:"4. Analysis of engine material management process",id:"4-analysis-of-engine-material-management-process",level:2},{value:"4.1 Engine Material Description",id:"41-engine-material-description",level:3},{value:"4.2 Engine material upload and update process",id:"42-engine-material-upload-and-update-process",level:3},{value:"4.2.1 Engine material upload process",id:"421-engine-material-upload-process",level:4},{value:"4.2.2 Engine material update process",id:"422-engine-material-update-process",level:4}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Introduction: This article takes the engine-related material management process as the entry point, and combines the underlying data model and source code to analyze the implementation details of the engine material management function in detail, hoping to help you better understand the BML (material library) service. Architecture.")),(0,a.kt)("h2",{id:"1-bml-material-library-service"},"1. BML material library service"),(0,a.kt)("p",null,"The BML material library is a functional module under the PublicEnhancementService (PS) in Linkis, the public enhancement service framework."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PS-BML",src:n(82831).Z,width:"1314",height:"692"})),(0,a.kt)("p",null,"In the Linkis architecture system, the concept of ",(0,a.kt)("inlineCode",{parentName:"p"},"material")," refers to various file data that are stored and hosted in a unified manner, including script code, resource files, third-party jars, related class libraries and configuration files required when the engine starts, as well as keytab files for security authentication, etc."),(0,a.kt)("p",null,"In short, any data that exists in the file state can be centrally hosted in the material library, and then downloaded and used in the respective required scenarios."),(0,a.kt)("p",null,"The material service is stateless and can be deployed in multiple instances to achieve high service availability. Each instance provides independent services to the outside world without interfering with each other. All material metadata and version information are shared in the database, and the underlying material data can be accessed. Store in HDFS or local (shared) file system, and support the implementation of file storage-related interfaces, extending other file storage systems, etc."),(0,a.kt)("p",null,"The material service provides precise permission control. For the material of the engine resource type, it can be shared and accessed by all users; for some material data containing sensitive information, only limited users can read it."),(0,a.kt)("p",null,"The material file adopts the method of appending, which can combine multiple versions of resource files into one large file to avoid generating too many small HDFS files. Too many small HDFS files will reduce the overall performance of HDFS."),(0,a.kt)("p",null,"The material service provides lifecycle management of operation tasks such as file upload, update, and download. At the same time, there are two forms of using the material service, the rest interface and the SDK. Users can choose according to their own needs."),(0,a.kt)("p",null,"The BML architecture diagram is as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BML Architecture",src:n(91238).Z,width:"665",height:"460"})),(0,a.kt)("p",null,"For the above overview of the BML architecture, please refer to the official website document: ",(0,a.kt)("a",{parentName:"p",href:"https://linkis.apache.org/docs/latest/architecture/public-enhancement-services/bml"},"https://linkis.apache.org/docs/latest/architecture/public-enhancement-services/bml")),(0,a.kt)("h2",{id:"2-bml-material-library-service-underlying-table-model"},"2. BML material library service underlying table model"),(0,a.kt)("p",null,"Before deeply understanding the process details of BML material management, it is necessary to sort out the database table model that the underlying BML material management service relies on."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BML-Model",src:n(29271).Z,width:"1506",height:"1016"})),(0,a.kt)("p",null,"Combined with Linkis' linkis_ddl.sql file and the engine material upload and update process described below, you can understand the meaning of fields in bml resources related tables and the field relationship between tables."),(0,a.kt)("h2",{id:"3-usage-scenarios-of-bml-material-library-service"},"3. Usage scenarios of BML material library service"),(0,a.kt)("p",null,"Currently in Linkis, the usage scenarios of the BML material library service include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Engine material files, including files in conf and lib required for engine startup"),(0,a.kt)("li",{parentName:"ul"},"Stored scripts, such as the scripts in the Scripts linked by the workflow task node are stored in the BML material library"),(0,a.kt)("li",{parentName:"ul"},"Workflow content version management in DSS"),(0,a.kt)("li",{parentName:"ul"},"Management of resource files required when tasks are running")),(0,a.kt)("h2",{id:"4-analysis-of-engine-material-management-process"},"4. Analysis of engine material management process"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Engine material")," is a subset of the Linkis material concept, and its role is to provide the latest version of jar package resources and configuration files for the engine to start. This section mainly starts from the engine material management function, and analyzes the flow details of engine material data in BML."),(0,a.kt)("h3",{id:"41-engine-material-description"},"4.1 Engine Material Description"),(0,a.kt)("p",null,"After the Linkis installation package is deployed normally, you can see all the engine material directories under the ",(0,a.kt)("inlineCode",{parentName:"p"},"LINKIS_INSTALL_HOME/lib/linkis-engineconn-plugins")," directory. Taking the jdbc engine as an example, the structure of the engine material directory is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"jdbc\n\u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u2514\u2500\u2500 v4\n\u2502\xa0\xa0     \u251c\u2500\u2500 conf\n\u2502\xa0\xa0     \u251c\u2500\u2500 conf.zip\n\u2502\xa0\xa0     \u251c\u2500\u2500 lib\n\u2502\xa0\xa0     \u2514\u2500\u2500 lib.zip\n\u2514\u2500\u2500 plugin\n    \u2514\u2500\u2500 4\n        \u2514\u2500\u2500 linkis-engineplugin-jdbc-1.1.2.jar\n")),(0,a.kt)("p",null,"Material catalog composition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"jdbc/dist/version/conf.zip\njdbc/dist/version/lib.zip\n\njdbc/plugin/version number (remove v and leave the number)/linkis-engineplugin-engine name-1.1.x.jar\n")),(0,a.kt)("p",null,"conf.zip and lib.zip will be hosted in the material management service as engine materials. After each local modification to the material conf or lib, a new version number will be generated for the corresponding material, and the material file data will be re-uploaded. When the engine starts, the material data of the latest version number will be obtained, lib and conf will be loaded, and the java process of the engine will be started."),(0,a.kt)("h3",{id:"42-engine-material-upload-and-update-process"},"4.2 Engine material upload and update process"),(0,a.kt)("p",null,"When Linkis is deployed and started for the first time, the engine material (lib.zip and conf.zip) will be triggered to upload to the material library for the first time; when the jar package under the engine lib or the engine configuration file in conf is modified, the engine material needs to be triggered. The refresh mechanism ensures that the latest material file can be loaded when the engine is started."),(0,a.kt)("p",null,"Taking the current version of Linkis 1.1.x as an example, there are two ways to trigger the engine material refresh:"),(0,a.kt)("p",null,"Restart the engineplugin service with the command ",(0,a.kt)("inlineCode",{parentName:"p"},"sh sbin/linkis-daemon.sh restart cg-engineplugin")),(0,a.kt)("p",null,"Interface to refresh by requesting engine material"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# refresh all engine materials\ncurl --cookie "linkis_user_session_ticket_id_v1=kN4HCk555Aw04udC1Npi4ttKa3duaCOv2HLiVea4FcQ=" http://127.0.0.1:9001/api/rest_j/v1/engineplugin/refreshAll\n# Specify the engine type and version to refresh the item\ncurl --cookie "linkis_user_session_ticket_id_v1=kN4HCk555Aw04udC1Npi4ttKa3duaCOv2HLiVea4FcQ=" http://127.0.0.1:9001/api/rest_j/v1/engineplugin/refresh?ecType=jdbc&version=4\n')),(0,a.kt)("p",null,"The underlying implementation mechanism of the two types of engine material refresh methods is the same, both call the refreshAll() or refresh() method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineConnResourceService")," class."),(0,a.kt)("p",null,"In the init() method in the default implementation class ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultEngineConnResourceService")," of the abstract class ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineConnResourceService"),", the parameter wds.linkis.engineconn.dist.load.enable (default is true) is used to control whether to start the engineplugin service every time. Execute refreshAll(false) to check whether all engine materials have been updated (where faslse represents asynchronous acquisition of execution results)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The init() method is modified by the annotation @PostConstruct. After the DefaultEngineConnResourceService is loaded, it is executed before the object is used, and it is executed only once.")),(0,a.kt)("p",null,"Manually call the interface of engineplugin/refresh, that is, manually execute the refreshAll or refresh method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineConnResourceService")," class."),(0,a.kt)("p",null,"So the logic of engine material detection and update is in the refreshAll and refresh methods in ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultEngineConnResourceService"),"."),(0,a.kt)("p",null,"The core logic of refreshAll() is:"),(0,a.kt)("p",null,"1) Obtain the installation directory of the engine through the parameter wds.linkis.engineconn.home, the default is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'getEngineConnsHome = Configuration.getLinkisHome() + "/lib/linkis-engineconn-plugins";\n')),(0,a.kt)("p",null,"2) Traverse the engine directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"getEngineConnTypeListFromDisk: Array[String] = new File(getEngineConnsHome).listFiles().map(_.getName)\n")),(0,a.kt)("p",null,"3) The ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineConnBmlResourceGenerator")," interface provides the validity detection of the underlying files or directories of each engine (version). The corresponding implementation exists in the abstract class ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractEngineConnBmlResourceGenerator"),"."),(0,a.kt)("p",null,"4) The ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultEngineConnBmlResourceGenerator")," class is mainly used to generate ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineConnLocalizeResource"),". EngineConnLocalizeResource is the encapsulation of the material resource file metadata and InputStream. In the subsequent logic, EngineConnLocalizeResource will be used as a material parameter to participate in the material upload process."),(0,a.kt)("p",null,"The code details of the three files EngineConnBmlResourceGenerator, AbstractEngineConnBmlResourceGenerator, and DefaultEngineConnBmlResourceGenerator will not be described in detail. You can use the following UML class diagram to get a general understanding of its inheritance mechanism, and combine the specific implementation in the method to understand the function of this part."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BML",src:n(51459).Z,width:"1438",height:"415"})),(0,a.kt)("p",null,"Go back to the refreshAll method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultEngineConnResourceService")," class, and continue to look at the core process of the refreshTask thread:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'engineConnBmlResourceGenerator.getEngineConnTypeListFromDisk foreach { engineConnType => \n    Utils.tryCatch {\n            engineConnBmlResourceGenerator.generate(engineConnType).foreach { \n              case (version, localize) =>\n                    logger.info(s" Try to initialize ${engineConnType}EngineConn-$version.")\n                    refresh(localize, engineConnType, version)\n      }\n    } \n                        ......\n}\n')),(0,a.kt)("p",null,"Scan the installation directory of the engine to get a list of each engine material directory. After the legality check of each engine material directory structure is passed, you can get the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineConnLocalizeResource"),", and then call refresh(localize: Array","[EngineConnLocalizeResource]"," , engineConnType: String, version: String) to complete the upload of subsequent materials."),(0,a.kt)("p",null,"Inside the refresh() method, the main processes are as follows:"),(0,a.kt)("p",null,"Obtain the material list data corresponding to engineConnType and version from the table ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_cg_engine_conn_plugin_bml_resources"),", and assign it to the variable engineConnBmlResources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val engineConnBmlResources = asScalaBuffer(engineConnBmlResourceDao.getAllEngineConnBmlResource(engineConnType, version))\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ec data",src:n(77143).Z,width:"1782",height:"406"})),(0,a.kt)("h4",{id:"421-engine-material-upload-process"},"4.2.1 Engine material upload process"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Engine material upload process sequence diagram")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Engine material upload process sequence diagram",src:n(16038).Z,width:"1263",height:"581"})),(0,a.kt)("p",null,"If there is no matching data in the table ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_cg_engine_conn_plugin_bml_resources"),", you need to use the data in EngineConnLocalizeResource to construct an EngineConnBmlResource object and save it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_cg_engine_conn_plugin_bml_resources")," table. Before saving this data, you need to upload the material file, that is, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"uploadToBml")," (localizeResource)` method."),(0,a.kt)("p",null,"Inside the uploadToBml(localizeResource) method, the interface for requesting material upload is constructed by constructing bmlClient. which is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"private val bmlClient = BmlClientFactory.createBmlClient()\nbmlClient.uploadResource(Utils.getJvmUser, localizeResource.fileName, localizeResource.getFileInputStream)\n")),(0,a.kt)("p",null,"In BML Server, the location of the material upload interface is in the uploadResource interface method in the BmlRestfulApi class. The main process is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"ResourceTask resourceTask = taskService.createUploadTask(files, user, properties);\n")),(0,a.kt)("p",null,"Every time a material is uploaded, a ResourceTask will be constructed to complete the file upload process, and the execution record of the file upload task will be recorded. Inside the createUploadTask method, the main operations are as follows:"),(0,a.kt)("p",null,"1) Generate a globally unique resource_id for the uploaded resource file, String resourceId = UUID.randomUUID().toString();"),(0,a.kt)("p",null,"2) Build a ResourceTask record and store it in the table ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_ps_bml_resources_task"),", as well as a series of subsequent Task state modifications."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"ResourceTask resourceTask = ResourceTask.createUploadTask(resourceId, user, properties);\ntaskDao.insert(resourceTask);\n\ntaskDao.updateState(resourceTask.getId(), TaskState.RUNNING.getValue(), new Date());\n")),(0,a.kt)("p",null,"3) The actual writing of material files into the material library is completed by the upload method in the ResourceServiceImpl class. Inside the upload method, a set of byte streams corresponding to ",(0,a.kt)("inlineCode",{parentName:"p"},"List<MultipartFile> files")," will be persisted to the material library file storage In the system; store the properties data of the material file in the resource record table (linkis_ps_bml_resources) and the resource version record table (linkis_ps_bml_resources_version)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'MultipartFile p = files[0]\nString resourceId = (String) properties.get("resourceId");\nString fileName =new String(p.getOriginalFilename().getBytes(Constant.ISO_ENCODE),\n                            Constant.UTF8_ENCODE);\nfileName = resourceId;\nString path = resourceHelper.generatePath(user, fileName, properties);\n// generatePath currently supports Local and HDFS paths, and the composition rules of paths are determined by LocalResourceHelper or HdfsResourceHelper\n// implementation of the generatePath method in\nStringBuilder sb = new StringBuilder();\nlong size = resourceHelper.upload(path, user, inputStream, sb, true);\n// The file size calculation and the file byte stream writing to the file are implemented by the upload method in LocalResourceHelper or HdfsResourceHelper\nResource resource = Resource.createNewResource(resourceId, user, fileName, properties);\n// Insert a record into the resource table linkis_ps_bml_resources\nlong id = resourceDao.uploadResource(resource);\n// Add a new record to the resource version table linkis_ps_bml_resources_version, the version number at this time is instant.FIRST_VERSION\n// In addition to recording the metadata information of this version, the most important thing is to record the storage location of the file of this version, including the file path, starting location, and ending location.\nString clientIp = (String) properties.get("clientIp");\nResourceVersion resourceVersion = ResourceVersion.createNewResourceVersion(\n                            resourceId, path, md5String, clientIp, size, Constant.FIRST_VERSION, 1);\nversionDao.insertNewVersion(resourceVersion);\n')),(0,a.kt)("p",null,"After the above process is successfully executed, the material data is truly completed, and then the UploadResult is returned to the client, and the status of this ResourceTask is marked as completed. Exception information."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"resource-task",src:n(55429).Z,width:"1808",height:"468"})),(0,a.kt)("h4",{id:"422-engine-material-update-process"},"4.2.2 Engine material update process"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Engine material update process sequence diagram")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Engine material update process sequence diagram",src:n(91354).Z,width:"1427",height:"539"})),(0,a.kt)("p",null,"If the table ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_cg_engine_conn_plugin_bml_resources")," matches the local material data, you need to use the data in EngineConnLocalizeResource to construct an EngineConnBmlResource object, and update the metadata information such as the version number, file size, modification time, etc. of the original material file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_cg_engine_conn_plugin_bml_resources")," table. Before updating, you need to complete the update and upload operation of the material file, that is, execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"uploadToBml(localizeResource, engineConnBmlResource.getBmlResourceId)")," method."),(0,a.kt)("p",null,"Inside the uploadToBml(localizeResource, resourceId) method, an interface for requesting material resource update by constructing bmlClient. which is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"private val bmlClient = BmlClientFactory.createBmlClient()\nbmlClient.updateResource(Utils.getJvmUser, resourceId, localizeResource.fileName, localizeResource.getFileInputStream)\n")),(0,a.kt)("p",null,"In BML Server, the interface for material update is located in the updateVersion interface method in the BmlRestfulApi class. The main process is as follows:"),(0,a.kt)("p",null,"Complete the validity detection of resourceId, that is, check whether the incoming resourceId exists in the linkis_ps_bml_resources table. If the resourceId does not exist, an exception will be thrown to the client, and the material update operation at the interface level will fail."),(0,a.kt)("p",null,"Therefore, the corresponding relationship of the resource data in the tables ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_cg_engine_conn_plugin_bml_resources")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_ps_bml_resources")," needs to be complete, otherwise an error will occur that the material file cannot be updated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"resourceService.checkResourceId(resourceId)\n")),(0,a.kt)("p",null,"If resourceId exists in the linkis_ps_bml_resources table, it will continue to execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"StringUtils.isEmpty(versionService.getNewestVersion(resourceId))\n")),(0,a.kt)("p",null,"The getNewestVersion method is to obtain the maximum version number of the resourceId in the table ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_ps_bml_resources_version"),". If the maximum version corresponding to the resourceId is empty, the material will also fail to update, so the integrity of the corresponding relationship of the data here also needs to be strictly guaranteed."),(0,a.kt)("p",null,"After the above two checks are passed, a ResourceUpdateTask will be created to complete the final file writing and record update saving."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"ResourceTask resourceTask = null;\nsynchronized (resourceId.intern()) {\n    resourceTask = taskService.createUpdateTask(resourceId, user, file, properties);\n}\n")),(0,a.kt)("p",null,"Inside the createUpdateTask method, the main functions implemented are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"// Generate a new version for the material resource\nString lastVersion = getResourceLastVersion(resourceId);\nString newVersion = generateNewVersion(lastVersion);\n// Then the construction of ResourceTask, and state maintenance\nResourceTask resourceTask = ResourceTask.createUpdateTask(resourceId, newVersion, user, system, properties);\n// The logic of material update upload is completed by the versionService.updateVersion method\nversionService.updateVersion(resourceTask.getResourceId(), user, file, properties);\n")),(0,a.kt)("p",null,"Inside the versionService.updateVersion method, the main functions implemented are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'ResourceHelper resourceHelper = ResourceHelperFactory.getResourceHelper();\nInputStream inputStream = file.getInputStream();\n// Get the path of the resource\nString newVersion = params.get("newVersion").toString();\nString path = versionDao.getResourcePath(resourceId) + "_" + newVersion;\n// The acquisition logic of getResourcePath is to limit one from the original path, and then splice newVersion with _\n// select resource from linkis_ps_bml_resources_version WHERE resource_id = #{resourceId} limit 1\n// upload resources to hdfs or local\nStringBuilder stringBuilder = new StringBuilder();\nlong size = resourceHelper.upload(path, user, inputStream, stringBuilder, OVER_WRITE);\n// Finally insert a new resource version record in the linkis_ps_bml_resources_version table\nResourceVersion resourceVersion = ResourceVersion.createNewResourceVersion(resourceId, path, md5String, clientIp, size, newVersion, 1);\nversionDao.insertNewVersion(resourceVersion);\n')))}p.isMDXComponent=!0},29271:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/BML-Model-403b61ca41b8c76b065e4dc58558a110.png"},82831:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/PS-BML-26e164ccf574205d878a74ac12ede26f.png"},91238:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bml-jiagou-e9f9a6bff360ddf889f783728abe207f.png"},16038:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bml-shixu-2b25e67af7b3ea021fba5d4cb608443c.png"},51459:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bml_uml-56c34abf348911755ed652f1467b057f.png"},77143:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ec-data-1b00bb52948fdbf982e0627f895050bd.png"},91354:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/engine-bml-update-shixu-1c931e45fc107845e84799838cb47706.png"},55429:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/resource-task-647983b1bf2037641593684ba10aba67.png"}}]);