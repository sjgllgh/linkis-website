"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[93055],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,g=d["".concat(l,".").concat(b)]||d[b]||p[b]||s;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var u=2;u<s;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75633:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],r={title:"JAVA SDK Manual",sidebar_position:2},l=void 0,u={unversionedId:"user_guide/sdk-manual",id:"version-1.1.1/user_guide/sdk-manual",isDocsHomePage:!1,title:"JAVA SDK Manual",description:"Linkis provides a convenient interface for calling JAVA and SCALA. It can be used only by introducing the linkis-computation-client module. After 1.0, the method of submitting with Label is added. The following will introduce both ways that compatible with 0.X and newly added in 1.0.",source:"@site/versioned_docs/version-1.1.1/user_guide/sdk-manual.md",sourceDirName:"user_guide",slug:"/user_guide/sdk-manual",permalink:"/docs/1.1.1/user_guide/sdk-manual",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.1/user_guide/sdk-manual.md",tags:[],version:"1.1.1",sidebarPosition:2,frontMatter:{title:"JAVA SDK Manual",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to Use",permalink:"/docs/1.1.1/user_guide/how-to-use"},next:{title:"Use of UDFs",permalink:"/docs/1.1.1/user_guide/udf"}},c=[{value:"1. Introduce dependent modules",id:"1-introduce-dependent-modules",children:[]},{value:"2. Java test code",id:"2-java-test-code",children:[]},{value:"3. Scala test code",id:"3-scala-test-code",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Linkis provides a convenient interface for calling JAVA and SCALA. It can be used only by introducing the linkis-computation-client module. After 1.0, the method of submitting with Label is added. The following will introduce both ways that compatible with 0.X and newly added in 1.0.")),(0,s.kt)("h2",{id:"1-introduce-dependent-modules"},"1. Introduce dependent modules"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"<dependency>\n   <groupId>org.apache.linkis</groupId>\n   <artifactId>linkis-computation-client</artifactId>\n   <version>${linkis.version}</version>\n</dependency>\nSuch as:\n<dependency>\n   <groupId>org.apache.linkis</groupId>\n   <artifactId>linkis-computation-client</artifactId>\n   <version>1.0.3</version>\n</dependency>\n")),(0,s.kt)("h2",{id:"2-java-test-code"},"2. Java test code"),(0,s.kt)("p",null,"Create the Java test class LinkisClientTest. Refer to the comments to understand the purposes of those interfaces:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.linkis.client.test;\n\nimport org.apache.linkis.common.utils.Utils;\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy;\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfig;\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder;\nimport org.apache.linkis.manager.label.constant.LabelKeyConstant;\nimport org.apache.linkis.protocol.constants.TaskConstant;\nimport org.apache.linkis.ujes.client.UJESClient;\nimport org.apache.linkis.ujes.client.UJESClientImpl;\nimport org.apache.linkis.ujes.client.request.JobSubmitAction;\nimport org.apache.linkis.ujes.client.request.JobExecuteAction;\nimport org.apache.linkis.ujes.client.request.ResultSetAction;\nimport org.apache.linkis.ujes.client.response.*;\nimport org.apache.commons.io.IOUtils;\n\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.concurrent.TimeUnit;\n\npublic class LinkisClientTest {\n\n    // 1. build config: linkis gateway url\n    private static DWSClientConfig clientConfig = ((DWSClientConfigBuilder) (DWSClientConfigBuilder.newBuilder()\n            .addServerUrl("http://127.0.0.1:9001/")   //set linkis-mg-gateway url: http://{ip}:{port}\n            .connectionTimeout(30000)   //connectionTimeOut\n            .discoveryEnabled(false) //disable discovery\n            .discoveryFrequency(1, TimeUnit.MINUTES)  // discovery frequency\n            .loadbalancerEnabled(true)  // enable loadbalance\n            .maxConnectionSize(5)   // set max Connection\n            .retryEnabled(false) // set retry\n            .readTimeout(30000)  //set read timeout\n            .setAuthenticationStrategy(new StaticAuthenticationStrategy())   //AuthenticationStrategy Linkis authen suppory static and Token\n            .setAuthTokenKey("hadoop")  // set submit user\n            .setAuthTokenValue("hadoop")))  // set passwd or token (setAuthTokenValue("BML-AUTH"))\n            .setDWSVersion("v1") //linkis rest version v1\n            .build();\n\n    // 2. new Client(Linkis Client) by clientConfig\n    private static UJESClient client = new UJESClientImpl(clientConfig);\n\n    public static void main(String[] args){\n\n        String user = "hadoop"; // execute user\n        String executeCode = "df=spark.sql(\\"show tables\\")\\n" +\n                "show(df)"; // code support:sql/hql/py/scala\n        try {\n\n            System.out.println("user : " + user + ", code : [" + executeCode + "]");\n            // 3. build job and execute\n            JobExecuteResult jobExecuteResult = toSubmit(user, executeCode);\n            //0.x:JobExecuteResult jobExecuteResult = toExecute(user, executeCode);\n            System.out.println("execId: " + jobExecuteResult.getExecID() + ", taskId: " + jobExecuteResult.taskID());\n            // 4. get job jonfo\n            JobInfoResult jobInfoResult = client.getJobInfo(jobExecuteResult);\n            int sleepTimeMills = 1000;\n            int logFromLen = 0;\n            int logSize = 100;\n            while(!jobInfoResult.isCompleted()) {\n                // 5. get progress and log\n                JobProgressResult progress = client.progress(jobExecuteResult);\n                System.out.println("progress: " + progress.getProgress());\n                JobLogResult logRes = client.log(jobExecuteResult, logFromLen, logSize);\n                logFromLen = logRes.fromLine();\n                // 0: info 1: warn 2: error 3: all\n                System.out.println(logRes.log().get(3));\n                Utils.sleepQuietly(sleepTimeMills);\n                jobInfoResult = client.getJobInfo(jobExecuteResult);\n            }\n\n            JobInfoResult jobInfo = client.getJobInfo(jobExecuteResult);\n            // 6. Get the result set list (if the user submits multiple SQLs at a time,\n            // multiple result sets will be generated)\n            String resultSet = jobInfo.getResultSetList(client)[0];\n            // 7. get resultContent\n            Object fileContents = client.resultSet(ResultSetAction.builder().setPath(resultSet).setUser(jobExecuteResult.getUser()).build()).getFileContent();\n            System.out.println("res: " + fileContents);\n        } catch (Exception e) {\n            e.printStackTrace();\n            IOUtils.closeQuietly(client);\n        }\n        IOUtils.closeQuietly(client);\n    }\n\n    /**\n     * Linkis 1.0 recommends the use of Submit method\n     */\n    private static JobExecuteResult toSubmit(String user, String code) {\n        // 1. build  params\n        // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-2.4.3"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, user + "-APPName");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "py"); // required codeType\n        // set start up map :engineConn start params\n        Map<String, Object> startupMap = new HashMap<String, Object>(16);\n        // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n        startupMap.put("spark.executor.instances", 2);\n        // setting linkis params\n        startupMap.put("wds.linkis.rm.yarnqueue", "dws");\n\n        // 2. build jobSubmitAction\n        JobSubmitAction jobSubmitAction = JobSubmitAction.builder()\n                .addExecuteCode(code)\n                .setStartupParams(startupMap)\n                .setUser(user) //submit user\n                .addExecuteUser(user)  // execute user\n                .setLabels(labels)\n                .build();\n        // 3. to execute\n        return client.submit(jobSubmitAction);\n    }\n\n    /**\n     * Compatible with 0.X execution mode\n     */\n    private static JobExecuteResult toExecute(String user, String code) {\n        // 1. build  params\n        // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n        Map<String, Object> labels = new HashMap<String, Object>();\n        // labels.put(LabelKeyConstant.TENANT_KEY, "fate");\n        // set start up map :engineConn start params\n        Map<String, Object> startupMap = new HashMap<String, Object>(16);\n        // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n        startupMap.put("spark.executor.instances", 2);\n        // setting linkis params\n        startupMap.put("wds.linkis.rm.yarnqueue", "dws");\n\n        // 2. build JobExecuteAction (0.X old way of using)\n        JobExecuteAction executionAction = JobExecuteAction.builder()\n                .setCreator("APPName")  //creator, the system name of the client requesting linkis, used for system-level isolation\n                .addExecuteCode(code)   //Execution Code\n                .setEngineTypeStr("spark") // engineConn type\n                .setRunTypeStr("py") // code type\n                .setUser(user)   //execute user\n                .setStartupParams(startupMap) // start up params\n                .build();\n        executionAction.addRequestPayload(TaskConstant.LABELS, labels);\n        String body = executionAction.getRequestPayload();\n        System.out.println(body);\n\n        // 3. to execute\n        return client.execute(executionAction);\n    }\n}\n')),(0,s.kt)("p",null,"Run the above code to interact with Linkis"),(0,s.kt)("h2",{id:"3-scala-test-code"},"3. Scala test code"),(0,s.kt)("p",null,"Create the Scala test class LinkisClientTest. Refer to the comments to understand the purposes of those interfaces:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'package org.apache.linkis.client.test\n\nimport java.util\nimport java.util.concurrent.TimeUnit\n\nimport org.apache.linkis.common.utils.Utils\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport org.apache.linkis.manager.label.constant.LabelKeyConstant\nimport org.apache.linkis.protocol.constants.TaskConstant\nimport org.apache.linkis.ujes.client.UJESClient\nimport org.apache.linkis.ujes.client.request._\nimport org.apache.linkis.ujes.client.response._\nimport org.apache.commons.io.IOUtils\nimport org.apache.commons.lang.StringUtils\n\nobject LinkisClientTest {\n// 1. build config: linkis gateway url\n  val clientConfig = DWSClientConfigBuilder.newBuilder()\n    .addServerUrl("http://127.0.0.1:9001/")   //set linkis-mg-gateway url: http://{ip}:{port}\n    .connectionTimeout(30000)   //connectionTimeOut\n    .discoveryEnabled(false) //disable discovery\n    .discoveryFrequency(1, TimeUnit.MINUTES)  // discovery frequency\n    .loadbalancerEnabled(true)  // enable loadbalance\n    .maxConnectionSize(5)   // set max Connection\n    .retryEnabled(false) // set retry\n    .readTimeout(30000)  //set read timeout\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy())   //AuthenticationStrategy Linkis authen suppory static and Token\n    .setAuthTokenKey("hadoop")  // set submit user\n    .setAuthTokenValue("hadoop")  // set passwd or token (setAuthTokenValue("BML-AUTH"))\n    .setDWSVersion("v1") //linkis rest version v1\n    .build();\n\n  // 2. new Client(Linkis Client) by clientConfig\n  val client = UJESClient(clientConfig)\n\n  def main(args: Array[String]): Unit = {\n    val user = "hadoop" // execute user\n    val executeCode = "df=spark.sql(\\"show tables\\")\\n" +\n      "show(df)"; // code support:sql/hql/py/scala\n    try {\n      // 3. build job and execute\n      println("user : " + user + ", code : [" + executeCode + "]")\n      val jobExecuteResult = toSubmit(user, executeCode)\n      //0.X: val jobExecuteResult = toExecute(user, executeCode)\n      println("execId: " + jobExecuteResult.getExecID + ", taskId: " + jobExecuteResult.taskID)\n      // 4. get job jonfo\n      var jobInfoResult = client.getJobInfo(jobExecuteResult)\n      var logFromLen = 0\n      val logSize = 100\n      val sleepTimeMills : Int = 1000\n      while (!jobInfoResult.isCompleted) {\n        // 5. get progress and log\n        val progress = client.progress(jobExecuteResult)\n       println("progress: " + progress.getProgress)\n        val logObj = client .log(jobExecuteResult, logFromLen, logSize)\n        logFromLen = logObj.fromLine\n        val logArray = logObj.getLog\n        // 0: info 1: warn 2: error 3: all\n        if (logArray != null && logArray.size >= 4 && StringUtils.isNotEmpty(logArray.get(3))) {\n          println(s"log: ${logArray.get(3)}")\n        }\n        Utils.sleepQuietly(sleepTimeMills)\n        jobInfoResult = client.getJobInfo(jobExecuteResult)\n      }\n      if (!jobInfoResult.isSucceed) {\n        println("Failed to execute job: " + jobInfoResult.getMessage)\n        throw new Exception(jobInfoResult.getMessage)\n      }\n\n      // 6. Get the result set list (if the user submits multiple SQLs at a time,\n      // multiple result sets will be generated)\n      val jobInfo = client.getJobInfo(jobExecuteResult)\n      val resultSetList = jobInfoResult.getResultSetList(client)\n      println("All result set list:")\n      resultSetList.foreach(println)\n      val oneResultSet = jobInfo.getResultSetList(client).head\n      // 7. get resultContent\n      val fileContents = client.resultSet(ResultSetAction.builder().setPath(oneResultSet).setUser(jobExecuteResult.getUser).build()).getFileContent\n      println("First fileContents: ")\n      println(fileContents)\n    } catch {\n      case e: Exception => {\n        e.printStackTrace()\n      }\n    }\n    IOUtils.closeQuietly(client)\n  }\n\n  /**\n   * Linkis 1.0 recommends the use of Submit method\n   */\n  def toSubmit(user: String, code: String): JobExecuteResult = {\n    // 1. build  params\n    // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n    val labels: util.Map[String, Any] = new util.HashMap[String, Any]\n    labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-2.4.3"); // required engineType Label\n    labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, user + "-APPName");// required execute user and creator\n    labels.put(LabelKeyConstant.CODE_TYPE_KEY, "py"); // required codeType\n\n    val startupMap = new java.util.HashMap[String, Any]()\n    // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n    startupMap.put("spark.executor.instances", 2);\n    // setting linkis params\n    startupMap.put("wds.linkis.rm.yarnqueue", "default");\n    // 2. build jobSubmitAction\n    val jobSubmitAction = JobSubmitAction.builder\n      .addExecuteCode(code)\n      .setStartupParams(startupMap)\n      .setUser(user) //submit user\n      .addExecuteUser(user) //execute user\n      .setLabels(labels)\n      .build\n    // 3. to execute\n    client.submit(jobSubmitAction)\n  }\n\n\n  /**\n   * Compatible with 0.X execution mode\n   */\n  def toExecute(user: String, code: String): JobExecuteResult = {\n    // 1. build  params\n    // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n    val labels = new util.HashMap[String, Any]\n    // labels.put(LabelKeyConstant.TENANT_KEY, "fate");\n\n    val startupMap = new java.util.HashMap[String, Any]()\n    // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n    startupMap.put("spark.executor.instances", 2)\n    // setting linkis params\n    startupMap.put("wds.linkis.rm.yarnqueue", "default")\n    // 2. build JobExecuteAction (0.X old way of using)\n    val  executionAction = JobExecuteAction.builder()\n      .setCreator("APPName")  //creator, the system name of the client requesting linkis, used for system-level isolation\n      .addExecuteCode(code)   //Execution Code\n      .setEngineTypeStr("spark") // engineConn type\n      .setRunTypeStr("py") // code type\n      .setUser(user)   //execute user\n      .setStartupParams(startupMap) // start up params\n      .build();\n    executionAction.addRequestPayload(TaskConstant.LABELS, labels);\n    // 3. to execute\n    client.execute(executionAction)\n  }\n\n\n}\n')))}d.isMDXComponent=!0}}]);