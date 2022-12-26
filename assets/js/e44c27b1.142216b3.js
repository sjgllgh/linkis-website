"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[47038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const s={title:"Docking Multiple File Systems",sidebar_position:1},o=void 0,a={unversionedId:"architecture/storage/file-system",id:"version-0.11.0/architecture/storage/file-system",title:"Docking Multiple File Systems",description:"How to realize the docking of multiple file systems",source:"@site/versioned_docs/version-0.11.0/architecture/storage/file-system.md",sourceDirName:"architecture/storage",slug:"/architecture/storage/file-system",permalink:"/docs/0.11.0/architecture/storage/file-system",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/architecture/storage/file-system.md",tags:[],version:"0.11.0",sidebarPosition:1,frontMatter:{title:"Docking Multiple File Systems",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"RPC Architecture",permalink:"/docs/0.11.0/architecture/commons/rpc"},next:{title:"Access Remote File System Architecture",permalink:"/docs/0.11.0/architecture/storage/remote-file-system-architecture-design"}},l={},c=[{value:"1 Background",id:"1-background",level:2},{value:"2 Ideas",id:"2-ideas",level:2},{value:"3 Implementation",id:"3-implementation",level:2}],m={toc:c};function p(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"How to realize the docking of multiple file systems")),(0,i.kt)("h2",{id:"1-background"},"1 Background"),(0,i.kt)("p",null,"Many systems face the need to access multiple file systems. For example, to use the local file system and the HDFS file system, users need to understand the Java SDK of the two file systems, which has a great learning cost."),(0,i.kt)("p",null,"In addition, when using its Java SDK, instantiating FileSystem requires a lot of configuration information and a lot of initialization, which increases the complexity of users."),(0,i.kt)("p",null,"Can the file system automatically recognize and switch the underlying file system to read the file by specifying the scheme header of the path?"),(0,i.kt)("h2",{id:"2-ideas"},"2 Ideas"),(0,i.kt)("p",null,"Provide a common file system Java SDK, users create FileSystem by calling FSFactory, and use common interfaces to access multiple file systems. The overall plan is as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Common File System Scheme",src:n(21253).Z,width:"1374",height:"519"})),(0,i.kt)("h2",{id:"3-implementation"},"3 Implementation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(1)"),"\nThe user obtains an Fs through the file system factory (FSFactory) and by passing in the FsPath.\nWhen FsPath is instantiated, different file system types can be distinguished by schema, such as: local:///tmp/test.txt and hdfs:///tmp/test.txt, FsFactory can use the schema header (such as: local or hdfs). Obtain the FileSystem object corresponding to the file system;"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(2)"),"\nThe FileSystem object provides a common interface, such as: obtaining the size of a file (folder), creating and deleting a file (folder), reading and writing files, etc.\nThe user only needs to call the method in the FileSystem object to complete the operation of the corresponding file system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(3)"),"\nThe user can operate the corresponding file system through FileSystem and pass in the corresponding FsPath, and the general file system operation can be realized through the operation provided in the second point."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(4)"),"\nThe bottom layer of FileSystem corresponds to the actual file system objects and interfaces. These interfaces are shielded for users. Users only need to understand the interfaces and methods of FileSystem before they can operate different file systems at the bottom.\nIf the user needs to read a local file whose path is local:///tmp/test.tx, the user only needs to call the read method of FileSystem to be mapped to the file input stream of the local file system to read the corresponding content.\nAmong them, the file system (File System) interface has now implemented the local LoaclFileSystem and HDFSFileSystem.\nUsers can connect to different file systems by implementing the File System interface, which is extremely convenient for expansion."))}p.isMDXComponent=!0},21253:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/file_system-d7a883429a9e9799120ef82098e39b85.png"}}]);