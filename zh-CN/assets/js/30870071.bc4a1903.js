"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[43588],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),c=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(a),d=i,m=g["".concat(o,".").concat(d)]||g[d]||u[d]||r;return a?t.createElement(m,s(s({ref:n},p),{},{components:a})):t.createElement(m,s({ref:n},p))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[g]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98316:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=a(87462),i=(a(67294),a(3905));const r={title:"Linkis 1.3.0 PES(Public Enhancement Services) \u670d\u52a1\u7ec4\u5185\u90e8\u5206\u670d\u52a1\u7684\u5408\u5e76",authors:["aiceflower"],tags:["blog","linki1.3.0","service merge"]},s=void 0,l={permalink:"/zh-CN/blog/2022/10/09/linkis-service-merge",editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-10-09-linkis-service-merge.md",title:"Linkis 1.3.0 PES(Public Enhancement Services) \u670d\u52a1\u7ec4\u5185\u90e8\u5206\u670d\u52a1\u7684\u5408\u5e76",description:"\u524d\u8a00",date:"2022-10-09T00:00:00.000Z",formattedDate:"2022\u5e7410\u67089\u65e5",tags:[{label:"blog",permalink:"/zh-CN/blog/tags/blog"},{label:"linki1.3.0",permalink:"/zh-CN/blog/tags/linki-1-3-0"},{label:"service merge",permalink:"/zh-CN/blog/tags/service-merge"}],readingTime:5.825,hasTruncateMarker:!1,authors:[{name:"aiceflower",title:"\u5fae\u4f17\u94f6\u884c\u5f00\u53d1\u5de5\u7a0b\u5e08",url:"https://github.com/aiceflower/",imageURL:"https://avatars.githubusercontent.com/u/22620332?s=400&v=4",key:"aiceflower"}],frontMatter:{title:"Linkis 1.3.0 PES(Public Enhancement Services) \u670d\u52a1\u7ec4\u5185\u90e8\u5206\u670d\u52a1\u7684\u5408\u5e76",authors:["aiceflower"],tags:["blog","linki1.3.0","service merge"]},prevItem:{title:"\u5f15\u64ce\u7269\u6599\u7ba1\u7406",permalink:"/zh-CN/blog/2022/12/02/material-manage"},nextItem:{title:"\u57fa\u4e8e CDH6.3.2 \u90e8\u7f72 Apache Linkis1.1.1 \u548c DSS1.1.0",permalink:"/zh-CN/blog/2022/09/27/linkis111-deploy"}},o={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:3},{value:"\u670d\u52a1\u5408\u5e76\u53d8\u52a8",id:"\u670d\u52a1\u5408\u5e76\u53d8\u52a8",level:3},{value:"\u5f85\u5b9e\u73b0\u76ee\u6807",id:"\u5f85\u5b9e\u73b0\u76ee\u6807",level:3},{value:"\u5177\u4f53\u53d8\u52a8",id:"\u5177\u4f53\u53d8\u52a8",level:3},{value:"Gateway\u53d8\u52a8\uff08org.apache.linkis.gateway.ujes.route.HaContextGatewayRouter\uff09",id:"gateway\u53d8\u52a8orgapachelinkisgatewayujesroutehacontextgatewayrouter",level:4},{value:"RPC\u670d\u52a1\u53d8\u52a8\uff08org.apache.linkis.rpc.conf.RPCConfiguration\uff09",id:"rpc\u670d\u52a1\u53d8\u52a8orgapachelinkisrpcconfrpcconfiguration",level:4},{value:"\u914d\u7f6e\u6587\u4ef6\u53d8\u52a8",id:"\u914d\u7f6e\u6587\u4ef6\u53d8\u52a8",level:4},{value:"\u90e8\u7f72\u811a\u672c\u53d8\u52a8\uff08linkis-dist/package/sbin/linkis-start-all.sh\uff09",id:"\u90e8\u7f72\u811a\u672c\u53d8\u52a8linkis-distpackagesbinlinkis-start-allsh",level:4}],p={toc:c},g="wrapper";function u(e){let{components:n,...a}=e;return(0,i.kt)(g,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"\u968f\u7740\u4e1a\u52a1\u7684\u53d1\u5c55\u548c\u793e\u533a\u4ea7\u54c1\u7684\u66f4\u65b0\u8fed\u4ee3\uff0c\u6211\u4eec\u53d1\u73b0Linkis1.X\u670d\u52a1\u8fc7\u591a\uff0c\u53ef\u4ee5\u9002\u5f53\u8fdb\u884c\u670d\u52a1\u5408\u5e76\uff0c\u51cf\u5c11\u670d\u52a1\u6570\u91cf\uff0c\u65b9\u4fbf\u90e8\u7f72\u548c\u8c03\u8bd5\u3002\u76ee\u524dLinkis\u670d\u52a1\u4e3b\u8981\u5206\u4e3a\u4e09\u5927\u7c7b\uff0c\u5305\u62ec\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\uff08CG: entrance/ecp/ecm/linkismanager\uff09\u3001\u516c\u5171\u589e\u5f3a\u670d\u52a1\uff08PS:publicservice/datasource/cs\uff09\u548c\u5fae\u670d\u52a1\u6cbb\u7406\u670d\u52a1\uff08MG\uff1aGateway/Eureka\uff09\u3002\u8fd9\u4e09\u7c7b\u670d\u52a1\u5ef6\u4f38\u7684\u5b50\u670d\u52a1\u8fc7\u591a\uff0c\u53ef\u4ee5\u8fdb\u884c\u670d\u52a1\u5408\u5e76\uff0c\u505a\u5230\u5c06PS\u7684\u670d\u52a1\u5168\u90e8\u5408\u5e76\uff0cCG\u670d\u52a1\u652f\u6301\u5168\u90e8\u5408\u5e76\uff0c\u540c\u65f6\u652f\u6301\u5c06ecm\u670d\u52a1\u5355\u72ec\u51fa\u53bb\u3002"),(0,i.kt)("h3",{id:"\u670d\u52a1\u5408\u5e76\u53d8\u52a8"},"\u670d\u52a1\u5408\u5e76\u53d8\u52a8"),(0,i.kt)("p",null,"\u672c\u6b21\u670d\u52a1\u5408\u5e76\u4e3b\u8981\u53d8\u52a8\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301Restful\u670d\u52a1\u8f6c\u53d1\uff1a\u4fee\u6539\u70b9\u4e3b\u8981\u4e3aGateway\u7684\u8f6c\u53d1\u903b\u8f91\uff0c\u7c7b\u4f3c\u4e8e\u73b0\u5728publicservice\u670d\u52a1\u5408\u5e76\u53c2\u6570\uff1awds.linkis.gateway.conf.publicservice.list"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u5c06RPC\u670d\u52a1\u8fdc\u7a0b\u8c03\u7528\u6539\u4e3a\u672c\u5730\u8c03\u7528\uff0c\u7c7b\u4f3cLocalMessageSender\uff0c\u73b0\u5728\u5df2\u7ecf\u53ef\u4ee5\u901a\u8fc7\u6539Sender\u5b8c\u6210\u672c\u5730\u8c03\u7528\u7684\u8fd4\u56de"),(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6\u53d8\u52a8"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u542f\u505c\u811a\u672c\u53d8\u52a8")),(0,i.kt)("h3",{id:"\u5f85\u5b9e\u73b0\u76ee\u6807"},"\u5f85\u5b9e\u73b0\u76ee\u6807"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u57fa\u672c\u76ee\u6807\uff1a\u5408\u5e76PS\u670d\u52a1\u4e3a\u4e00\u4e2a\u670d\u52a1"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u672c\u76ee\u6807\uff1a\u5408\u5e76CG\u670d\u52a1\u4e3aCG-Service\u548cECM"),(0,i.kt)("li",{parentName:"ul"},"\u8fdb\u9636\u76ee\u6807\uff1a\u5408\u5e76CG\u670d\u52a1\u4e3a\u4e00\u4e2a\u670d"),(0,i.kt)("li",{parentName:"ul"},"\u7ec8\u7ed3\u76ee\u6807\uff1a\u53bb\u6389eureka\u3001gateway\u53d8\u4e3a\u5355\u4f53\u670d\u52a1")),(0,i.kt)("h3",{id:"\u5177\u4f53\u53d8\u52a8"},"\u5177\u4f53\u53d8\u52a8"),(0,i.kt)("h4",{id:"gateway\u53d8\u52a8orgapachelinkisgatewayujesroutehacontextgatewayrouter"},"Gateway\u53d8\u52a8\uff08org.apache.linkis.gateway.ujes.route.HaContextGatewayRouter\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'//\u53d8\u52a8\u524d\noverride def route(gatewayContext: GatewayContext): ServiceInstance = {\n\n    if (gatewayContext.getGatewayRoute.getRequestURI.contains(HaContextGatewayRouter.CONTEXT_SERVICE_STR) ||\n        gatewayContext.getGatewayRoute.getRequestURI.contains(HaContextGatewayRouter.OLD_CONTEXT_SERVICE_PREFIX)){\n      val params: util.HashMap[String, String] = gatewayContext.getGatewayRoute.getParams\n      if (!gatewayContext.getRequest.getQueryParams.isEmpty) {\n        for ((k, vArr) <- gatewayContext.getRequest.getQueryParams) {\n          if (vArr.nonEmpty) {\n            params.putIfAbsent(k, vArr.head)\n          }\n        }\n      }\n      if (gatewayContext.getRequest.getHeaders.containsKey(ContextHTTPConstant.CONTEXT_ID_STR)) {\n        params.putIfAbsent(ContextHTTPConstant.CONTEXT_ID_STR, gatewayContext.getRequest.getHeaders.get(ContextHTTPConstant.CONTEXT_ID_STR)(0))\n      }\n      if (null == params || params.isEmpty) {\n        dealContextCreate(gatewayContext)\n      } else {\n        var contextId : String = null\n        for ((key, value) <- params) {\n          if (key.equalsIgnoreCase(ContextHTTPConstant.CONTEXT_ID_STR)) {\n            contextId = value\n            }\n        }\n        if (StringUtils.isNotBlank(contextId)) {\n          dealContextAccess(contextId.toString, gatewayContext)\n        } else {\n          dealContextCreate(gatewayContext)\n        }\n      }\n    }else{\n      null\n    }\n  }\n  //\u53d8\u52a8\u540e\n  override def route(gatewayContext: GatewayContext): ServiceInstance = {\n\n    if (\n        gatewayContext.getGatewayRoute.getRequestURI.contains(\n          RPCConfiguration.CONTEXT_SERVICE_REQUEST_PREFIX\n        )\n    ) {\n      val params: util.HashMap[String, String] = gatewayContext.getGatewayRoute.getParams\n      if (!gatewayContext.getRequest.getQueryParams.isEmpty) {\n        for ((k, vArr) <- gatewayContext.getRequest.getQueryParams.asScala) {\n          if (vArr.nonEmpty) {\n            params.putIfAbsent(k, vArr.head)\n          }\n        }\n      }\n      if (gatewayContext.getRequest.getHeaders.containsKey(ContextHTTPConstant.CONTEXT_ID_STR)) {\n        params.putIfAbsent(\n          ContextHTTPConstant.CONTEXT_ID_STR,\n          gatewayContext.getRequest.getHeaders.get(ContextHTTPConstant.CONTEXT_ID_STR)(0)\n        )\n      }\n      if (null == params || params.isEmpty) {\n        dealContextCreate(gatewayContext)\n      } else {\n        var contextId: String = null\n        for ((key, value) <- params.asScala) {\n          if (key.equalsIgnoreCase(ContextHTTPConstant.CONTEXT_ID_STR)) {\n            contextId = value\n          }\n        }\n        if (StringUtils.isNotBlank(contextId)) {\n          dealContextAccess(contextId, gatewayContext)\n        } else {\n          dealContextCreate(gatewayContext)\n        }\n      }\n    } else {\n      null\n    }\n  }\n\n\n  //\u53d8\u52a8\u524d\n  def dealContextCreate(gatewayContext:GatewayContext):ServiceInstance = {\n    val serviceId =  findService(HaContextGatewayRouter.CONTEXT_SERVICE_STR, list => {\n      val services = list.filter(_.contains(HaContextGatewayRouter.CONTEXT_SERVICE_STR))\n      services.headOption\n    })\n    val serviceInstances = ServiceInstanceUtils.getRPCServerLoader.getServiceInstances(serviceId.orNull)\n    if (serviceInstances.size > 0) {\n      val index = new Random().nextInt(serviceInstances.size)\n      serviceInstances(index)\n    } else {\n      logger.error(s"No valid instance for service : " + serviceId.orNull)\n      null\n    }\n  }\n  //\u53d8\u52a8\u540e\n  def dealContextCreate(gatewayContext: GatewayContext): ServiceInstance = {\n    val serviceId = findService(\n      RPCConfiguration.CONTEXT_SERVICE_NAME,\n      list => {\n        val services = list.filter(_.contains(RPCConfiguration.CONTEXT_SERVICE_NAME))\n        services.headOption\n      }\n    )\n    val serviceInstances =\n      ServiceInstanceUtils.getRPCServerLoader.getServiceInstances(serviceId.orNull)\n    if (serviceInstances.size > 0) {\n      val index = new Random().nextInt(serviceInstances.size)\n      serviceInstances(index)\n    } else {\n      logger.error(s"No valid instance for service : " + serviceId.orNull)\n      null\n    }\n  }\n\n  //\u53d8\u52a8\u524d\n  def dealContextAccess(contextIdStr:String, gatewayContext: GatewayContext):ServiceInstance = {\n    val contextId : String = {\n      var tmpId : String = null\n      if (serializationHelper.accepts(contextIdStr)) {\n        val contextID : ContextID = serializationHelper.deserialize(contextIdStr).asInstanceOf[ContextID]\n        if (null != contextID) {\n          tmpId = contextID.getContextId\n        } else {\n          logger.error(s"Deserializate contextID null. contextIDStr : " + contextIdStr)\n        }\n      } else {\n        logger.error(s"ContxtIDStr cannot be deserialized. contextIDStr : " + contextIdStr)\n      }\n      if (null == tmpId) {\n        contextIdStr\n      } else {\n        tmpId\n      }\n    }\n    val instances = contextIDParser.parse(contextId)\n    var serviceId:Option[String] = None\n    serviceId = findService(HaContextGatewayRouter.CONTEXT_SERVICE_STR, list => {\n      val services = list.filter(_.contains(HaContextGatewayRouter.CONTEXT_SERVICE_STR))\n        services.headOption\n      })\n    val serviceInstances = ServiceInstanceUtils.getRPCServerLoader.getServiceInstances(serviceId.orNull)\n    if (instances.size() > 0) {\n      serviceId.map(ServiceInstance(_, instances.get(0))).orNull\n    } else if (serviceInstances.size > 0) {\n      serviceInstances(0)\n    } else {\n      logger.error(s"No valid instance for service : " + serviceId.orNull)\n      null\n    }\n  }\n\n}\n//\u53d8\u52a8\u540e\ndef dealContextAccess(contextIdStr: String, gatewayContext: GatewayContext): ServiceInstance = {\n    val contextId: String = {\n      var tmpId: String = null\n      if (serializationHelper.accepts(contextIdStr)) {\n        val contextID: ContextID =\n          serializationHelper.deserialize(contextIdStr).asInstanceOf[ContextID]\n        if (null != contextID) {\n          tmpId = contextID.getContextId\n        } else {\n          logger.error(s"Deserializate contextID null. contextIDStr : " + contextIdStr)\n        }\n      } else {\n        logger.error(s"ContxtIDStr cannot be deserialized. contextIDStr : " + contextIdStr)\n      }\n      if (null == tmpId) {\n        contextIdStr\n      } else {\n        tmpId\n      }\n    }\n    val instances = contextIDParser.parse(contextId)\n    var serviceId: Option[String] = None\n    serviceId = findService(\n      RPCConfiguration.CONTEXT_SERVICE_NAME,\n      list => {\n        val services = list.filter(_.contains(RPCConfiguration.CONTEXT_SERVICE_NAME))\n        services.headOption\n      }\n    )\n    val serviceInstances =\n      ServiceInstanceUtils.getRPCServerLoader.getServiceInstances(serviceId.orNull)\n    if (instances.size() > 0) {\n      serviceId.map(ServiceInstance(_, instances.get(0))).orNull\n    } else if (serviceInstances.size > 0) {\n      serviceInstances(0)\n    } else {\n      logger.error(s"No valid instance for service : " + serviceId.orNull)\n      null\n    }\n  }\n\n//\u53d8\u52a8\u524d\nobject HaContextGatewayRouter{\n  val CONTEXT_ID_STR:String = "contextId"\n  val CONTEXT_SERVICE_STR:String = "ps-cs"\n  @Deprecated\n  val OLD_CONTEXT_SERVICE_PREFIX = "contextservice"\n  val CONTEXT_REGEX: Regex = (normalPath(API_URL_PREFIX) + "rest_[a-zA-Z][a-zA-Z_0-9]*/(v\\\\d+)/contextservice/" + ".+").r\n}\n//\u53d8\u52a8\u540e\nobject HaContextGatewayRouter {\n\n  val CONTEXT_ID_STR: String = "contextId"\n\n  @deprecated("please use RPCConfiguration.CONTEXT_SERVICE_REQUEST_PREFIX")\n  val CONTEXT_SERVICE_REQUEST_PREFIX = RPCConfiguration.CONTEXT_SERVICE_REQUEST_PREFIX\n\n  @deprecated("please use RPCConfiguration.CONTEXT_SERVICE_NAME")\n  val CONTEXT_SERVICE_NAME: String =\n    if (\n        RPCConfiguration.ENABLE_PUBLIC_SERVICE.getValue && RPCConfiguration.PUBLIC_SERVICE_LIST\n          .exists(_.equalsIgnoreCase(RPCConfiguration.CONTEXT_SERVICE_REQUEST_PREFIX))\n    ) {\n      RPCConfiguration.PUBLIC_SERVICE_APPLICATION_NAME.getValue\n    } else {\n      RPCConfiguration.CONTEXT_SERVICE_APPLICATION_NAME.getValue\n    }\n\n  val CONTEXT_REGEX: Regex =\n    (normalPath(API_URL_PREFIX) + "rest_[a-zA-Z][a-zA-Z_0-9]*/(v\\\\d+)/contextservice/" + ".+").r\n\n}\n')),(0,i.kt)("h4",{id:"rpc\u670d\u52a1\u53d8\u52a8orgapachelinkisrpcconfrpcconfiguration"},"RPC\u670d\u52a1\u53d8\u52a8\uff08org.apache.linkis.rpc.conf.RPCConfiguration\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'//\u53d8\u52a8\u524d\nval BDP_RPC_BROADCAST_THREAD_SIZE: CommonVars[Integer] = CommonVars("wds.linkis.rpc.broadcast.thread.num", new Integer(25))\n//\u53d8\u52a8\u540e\nval BDP_RPC_BROADCAST_THREAD_SIZE: CommonVars[Integer] = CommonVars("wds.linkis.rpc.broadcast.thread.num", 25)\n\n//\u53d8\u52a8\u524d\nval PUBLIC_SERVICE_LIST: Array[String] = CommonVars("wds.linkis.gateway.conf.publicservice.list", "query,jobhistory,application,configuration,filesystem,udf,variable,microservice,errorcode,bml,datasource").getValue.split(",")\n//\u53d8\u52a8\u540e\nval PUBLIC_SERVICE_LIST: Array[String] = CommonVars("wds.linkis.gateway.conf.publicservice.list", "cs,contextservice,data-source-manager,metadataquery,metadatamanager,query,jobhistory,application,configuration,filesystem,udf,variable,microservice,errorcode,bml,datasource").getValue.split(",")\n\n')),(0,i.kt)("h4",{id:"\u914d\u7f6e\u6587\u4ef6\u53d8\u52a8"},"\u914d\u7f6e\u6587\u4ef6\u53d8\u52a8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"##\u53bb\u9664\u90e8\u5206\n\n#\u5220\u9664\u5982\u4e0b\u914d\u7f6e\u6587\u4ef6\nlinkis-dist/package/conf/linkis-ps-cs.properties\nlinkis-dist/package/conf/linkis-ps-data-source-manager.properties\nlinkis-dist/package/conf/linkis-ps-metadataquery.properties\n\n##\u4fee\u6539\u90e8\u5206\n\n#\u4fee\u6539linkis-dist/package/conf/linkis-ps-publicservice.properties\n#restful\u4fee\u6539\u524d\nwds.linkis.server.restful.scan.packages=org.apache.linkis.jobhistory.restful,org.apache.linkis.variable.restful,org.apache.linkis.configuration.restful,org.apache.linkis.udf.api,org.apache.linkis.filesystem.restful,org.apache.linkis.filesystem.restful,org.apache.linkis.instance.label.restful,org.apache.linkis.metadata.restful.api,org.apache.linkis.cs.server.restful,org.apache.linkis.bml.restful,org.apache.linkis.errorcode.server.restful\n\n#restful\u4fee\u6539\u540e\nwds.linkis.server.restful.scan.packages=org.apache.linkis.cs.server.restful,org.apache.linkis.datasourcemanager.core.restful,org.apache.linkis.metadata.query.server.restful,org.apache.linkis.jobhistory.restful,org.apache.linkis.variable.restful,org.apache.linkis.configuration.restful,org.apache.linkis.udf.api,org.apache.linkis.filesystem.restful,org.apache.linkis.filesystem.restful,org.apache.linkis.instance.label.restful,org.apache.linkis.metadata.restful.api,org.apache.linkis.cs.server.restful,org.apache.linkis.bml.restful,org.apache.linkis.errorcode.server.restful\n\n#mybatis\u4fee\u6539\u524d\nwds.linkis.server.mybatis.mapperLocations=classpath:org/apache/linkis/jobhistory/dao/impl/*.xml,classpath:org/apache/linkis/variable/dao/impl/*.xml,classpath:org/apache/linkis/configuration/dao/impl/*.xml,classpath:org/apache/linkis/udf/dao/impl/*.xml,classpath:org/apache/linkis/instance/label/dao/impl/*.xml,classpath:org/apache/linkis/metadata/hive/dao/impl/*.xml,org/apache/linkis/metadata/dao/impl/*.xml,classpath:org/apache/linkis/bml/dao/impl/*.xml\n\nwds.linkis.server.mybatis.typeAliasesPackage=org.apache.linkis.configuration.entity,org.apache.linkis.jobhistory.entity,org.apache.linkis.udf.entity,org.apache.linkis.variable.entity,org.apache.linkis.instance.label.entity,org.apache.linkis.manager.entity,org.apache.linkis.metadata.domain,org.apache.linkis.bml.entity\n\nwds.linkis.server.mybatis.BasePackage=org.apache.linkis.jobhistory.dao,org.apache.linkis.variable.dao,org.apache.linkis.configuration.dao,org.apache.linkis.udf.dao,org.apache.linkis.instance.label.dao,org.apache.linkis.metadata.hive.dao,org.apache.linkis.metadata.dao,org.apache.linkis.bml.dao,org.apache.linkis.errorcode.server.dao,org.apache.linkis.publicservice.common.lock.dao\n\n#mybatis\u4fee\u6539\u540e\nwds.linkis.server.mybatis.mapperLocations=classpath*:org/apache/linkis/cs/persistence/dao/impl/*.xml,classpath:org/apache/linkis/datasourcemanager/core/dao/mapper/*.xml,classpath:org/apache/linkis/jobhistory/dao/impl/*.xml,classpath:org/apache/linkis/variable/dao/impl/*.xml,classpath:org/apache/linkis/configuration/dao/impl/*.xml,classpath:org/apache/linkis/udf/dao/impl/*.xml,classpath:org/apache/linkis/instance/label/dao/impl/*.xml,classpath:org/apache/linkis/metadata/hive/dao/impl/*.xml,org/apache/linkis/metadata/dao/impl/*.xml,classpath:org/apache/linkis/bml/dao/impl/*.xml\n\nwds.linkis.server.mybatis.typeAliasesPackage=org.apache.linkis.cs.persistence.entity,org.apache.linkis.datasourcemanager.common.domain,org.apache.linkis.datasourcemanager.core.vo,org.apache.linkis.configuration.entity,org.apache.linkis.jobhistory.entity,org.apache.linkis.udf.entity,org.apache.linkis.variable.entity,org.apache.linkis.instance.label.entity,org.apache.linkis.manager.entity,org.apache.linkis.metadata.domain,org.apache.linkis.bml.entity\n\nwds.linkis.server.mybatis.BasePackage=org.apache.linkis.cs.persistence.dao,org.apache.linkis.datasourcemanager.core.dao,org.apache.linkis.jobhistory.dao,org.apache.linkis.variable.dao,org.apache.linkis.configuration.dao,org.apache.linkis.udf.dao,org.apache.linkis.instance.label.dao,org.apache.linkis.metadata.hive.dao,org.apache.linkis.metadata.dao,org.apache.linkis.bml.dao,org.apache.linkis.errorcode.server.dao,org.apache.linkis.publicservice.common.lock.dao\n")),(0,i.kt)("h4",{id:"\u90e8\u7f72\u811a\u672c\u53d8\u52a8linkis-distpackagesbinlinkis-start-allsh"},"\u90e8\u7f72\u811a\u672c\u53d8\u52a8\uff08linkis-dist/package/sbin/linkis-start-all.sh\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#\u670d\u52a1\u542f\u52a8\u811a\u672c\u53bb\u6389\u5982\u4e0b\u90e8\u5206\n\n#linkis-ps-cs\nSERVER_NAME="ps-cs"\nSERVER_IP=$CS_INSTALL_IP\nstartApp\n\nif [ "$ENABLE_METADATA_QUERY" == "true" ]; then\n  #linkis-ps-data-source-manager\n  SERVER_NAME="ps-data-source-manager"\n  SERVER_IP=$DATASOURCE_MANAGER_INSTALL_IP\n  startApp\n\n  #linkis-ps-metadataquery\n  SERVER_NAME="ps-metadataquery"\n  SERVER_IP=$METADATA_QUERY_INSTALL_IP\n  startApp\nfi\n\n#linkis-ps-cs\nSERVER_NAME="ps-cs"\nSERVER_IP=$CS_INSTALL_IP\ncheckServer\n\nif [ "$ENABLE_METADATA_QUERY" == "true" ]; then\n  #linkis-ps-data-source-manager\n  SERVER_NAME="ps-data-source-manager"\n  SERVER_IP=$DATASOURCE_MANAGER_INSTALL_IP\n  checkServer\n\n  #linkis-ps-metadataquery\n  SERVER_NAME="ps-metadataquery"\n  SERVER_IP=$METADATA_QUERY_INSTALL_IP\n  checkServer\nfi\n\n\n#\u670d\u52a1\u505c\u6b62\u811a\u672c\u53bb\u6389\u5982\u4e0b\u90e8\u5206\n#linkis-ps-cs\nSERVER_NAME="ps-cs"\nSERVER_IP=$CS_INSTALL_IP\nstopApp\n\nif [ "$ENABLE_METADATA_QUERY" == "true" ]; then\n  #linkis-ps-data-source-manager\n  SERVER_NAME="ps-data-source-manager"\n  SERVER_IP=$DATASOURCE_MANAGER_INSTALL_IP\n  stopApp\n\n  #linkis-ps-metadataquery\n  SERVER_NAME="ps-metadataquery"\n  SERVER_IP=$METADATA_QUERY_INSTALL_IP\n  stopApp\nfi\n\n')),(0,i.kt)("p",null,"\u66f4\u591a\u670d\u52a1\u5408\u5e76\u53d8\u52a8\u7ec6\u8282\u53c2\u89c1\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis/pull/2927/files"},"https://github.com/apache/linkis/pull/2927/files")))}u.isMDXComponent=!0}}]);