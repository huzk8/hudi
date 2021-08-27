"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[6322],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=c(t),f=a,k=l["".concat(u,".").concat(f)]||l[f]||d[f]||i;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=l;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},6473:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],p={version:"0.8.0",title:"\u5bf9\u6bd4",keywords:["apache","hudi","kafka","kudu","hive","hbase","stream processing"],last_modified_at:new Date("2019-12-30T19:59:57.000Z"),language:"cn"},u=void 0,c={unversionedId:"comparison",id:"version-0.8.0/comparison",isDocsHomePage:!1,title:"\u5bf9\u6bd4",description:"Apache Hudi\u586b\u8865\u4e86\u5728DFS\u4e0a\u5904\u7406\u6570\u636e\u7684\u5de8\u5927\u7a7a\u767d\uff0c\u5e76\u53ef\u4ee5\u548c\u8fd9\u4e9b\u6280\u672f\u5f88\u597d\u5730\u5171\u5b58\u3002\u7136\u800c\uff0c",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.8.0/comparison.md",sourceDirName:".",slug:"/comparison",permalink:"/cn/docs/0.8.0/comparison",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/docs/versioned_docs/version-0.8.0/comparison.md",version:"0.8.0",frontMatter:{version:"0.8.0",title:"\u5bf9\u6bd4",keywords:["apache","hudi","kafka","kudu","hive","hbase","stream processing"],last_modified_at:"2019-12-30T19:59:57.000Z",language:"cn"}},s=[{value:"Kudu",id:"kudu",children:[]},{value:"Hive\u4e8b\u52a1",id:"hive\u4e8b\u52a1",children:[]},{value:"HBase",id:"hbase",children:[]},{value:"\u6d41\u5f0f\u5904\u7406",id:"\u6d41\u5f0f\u5904\u7406",children:[]}],d={toc:s};function l(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Hudi\u586b\u8865\u4e86\u5728DFS\u4e0a\u5904\u7406\u6570\u636e\u7684\u5de8\u5927\u7a7a\u767d\uff0c\u5e76\u53ef\u4ee5\u548c\u8fd9\u4e9b\u6280\u672f\u5f88\u597d\u5730\u5171\u5b58\u3002\u7136\u800c\uff0c\n\u901a\u8fc7\u5c06Hudi\u4e0e\u4e00\u4e9b\u76f8\u5173\u7cfb\u7edf\u8fdb\u884c\u5bf9\u6bd4\uff0c\u6765\u4e86\u89e3Hudi\u5982\u4f55\u9002\u5e94\u5f53\u524d\u7684\u5927\u6570\u636e\u751f\u6001\u7cfb\u7edf\uff0c\u5e76\u77e5\u6653\u8fd9\u4e9b\u7cfb\u7edf\u5728\u8bbe\u8ba1\u4e2d\u505a\u7684\u4e0d\u540c\u6743\u8861\u4ecd\u5c06\u975e\u5e38\u6709\u7528\u3002"),(0,i.kt)("h2",{id:"kudu"},"Kudu"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kudu.apache.org"},"Apache Kudu"),"\u662f\u4e00\u4e2a\u4e0eHudi\u5177\u6709\u76f8\u4f3c\u76ee\u6807\u7684\u5b58\u50a8\u7cfb\u7edf\uff0c\u8be5\u7cfb\u7edf\u901a\u8fc7\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"upserts"),"\u652f\u6301\u6765\u5bf9PB\u7ea7\u6570\u636e\u8fdb\u884c\u5b9e\u65f6\u5206\u6790\u3002\n\u4e00\u4e2a\u5173\u952e\u7684\u533a\u522b\u662fKudu\u8fd8\u8bd5\u56fe\u5145\u5f53OLTP\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6570\u636e\u5b58\u50a8\uff0c\u800cHudi\u5e76\u4e0d\u5e0c\u671b\u8fd9\u6837\u505a\u3002\n\u56e0\u6b64\uff0cKudu\u4e0d\u652f\u6301\u589e\u91cf\u62c9\u53d6(\u622a\u81f32017\u5e74\u521d)\uff0c\u800cHudi\u652f\u6301\u4ee5\u4fbf\u8fdb\u884c\u589e\u91cf\u5904\u7406\u3002"),(0,i.kt)("p",null,"Kudu\u4e0e\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u62bd\u8c61\u548cHDFS\u5b8c\u5168\u4e0d\u540c\uff0c\u5b83\u81ea\u5df1\u7684\u4e00\u7ec4\u5b58\u50a8\u670d\u52a1\u5668\u901a\u8fc7RAFT\u76f8\u4e92\u901a\u4fe1\u3002\n\u4e0e\u4e4b\u4e0d\u540c\u7684\u662f\uff0cHudi\u65e8\u5728\u4e0e\u5e95\u5c42Hadoop\u517c\u5bb9\u7684\u6587\u4ef6\u7cfb\u7edf(HDFS\uff0cS3\u6216Ceph)\u4e00\u8d77\u4f7f\u7528\uff0c\u5e76\u4e14\u6ca1\u6709\u81ea\u5df1\u7684\u5b58\u50a8\u670d\u52a1\u5668\u7fa4\uff0c\u800c\u662f\u4f9d\u9760Apache Spark\u6765\u5b8c\u6210\u7e41\u91cd\u7684\u5de5\u4f5c\u3002\n\u56e0\u6b64\uff0cHudi\u53ef\u4ee5\u50cf\u5176\u4ed6Spark\u4f5c\u4e1a\u4e00\u6837\u8f7b\u677e\u6269\u5c55\uff0c\u800cKudu\u5219\u9700\u8981\u786c\u4ef6\u548c\u8fd0\u8425\u652f\u6301\uff0c\u7279\u522b\u662fHBase\u6216Vertica\u7b49\u6570\u636e\u5b58\u50a8\u7cfb\u7edf\u3002\n\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u8fd8\u6ca1\u6709\u505a\u4efb\u4f55\u76f4\u63a5\u7684\u57fa\u51c6\u6d4b\u8bd5\u6765\u6bd4\u8f83Kudu\u548cHudi(\u9274\u4e8eRTTable\u6b63\u5728\u8fdb\u884c\u4e2d)\u3002\n\u4f46\u662f\uff0c\u5982\u679c\u6211\u4eec\u8981\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://db-blog.web.cern.ch/blog/zbigniew-baranowski/2017-01-performance-comparison-different-file-formats-and-storage-engines"},"CERN"),"\uff0c\n\u6211\u4eec\u9884\u671fHudi\u5728\u6444\u53d6parquet\u4e0a\u6709\u66f4\u5353\u8d8a\u7684\u6027\u80fd\u3002"),(0,i.kt)("h2",{id:"hive\u4e8b\u52a1"},"Hive\u4e8b\u52a1"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/Hive/Hive+Transactions"},"Hive\u4e8b\u52a1/ACID"),"\u662f\u53e6\u4e00\u9879\u7c7b\u4f3c\u7684\u5de5\u4f5c\uff0c\u5b83\u8bd5\u56fe\u5b9e\u73b0\u5728ORC\u6587\u4ef6\u683c\u5f0f\u4e4b\u4e0a\u7684\u5b58\u50a8",(0,i.kt)("inlineCode",{parentName:"p"},"\u8bfb\u53d6\u65f6\u5408\u5e76"),"\u3002\n\u53ef\u4ee5\u7406\u89e3\uff0c\u6b64\u529f\u80fd\u4e0eHive\u4ee5\u53ca",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/Hive/LLAP"},"LLAP"),"\u4e4b\u7c7b\u7684\u5176\u4ed6\u5de5\u4f5c\u7d27\u5bc6\u76f8\u5173\u3002\nHive\u4e8b\u52a1\u4e0d\u63d0\u4f9bHudi\u63d0\u4f9b\u7684\u8bfb\u53d6\u4f18\u5316\u5b58\u50a8\u9009\u9879\u6216\u589e\u91cf\u62c9\u53d6\u3002\n\u5728\u5b9e\u73b0\u9009\u62e9\u65b9\u9762\uff0cHudi\u5145\u5206\u5229\u7528\u4e86\u7c7b\u4f3cSpark\u7684\u5904\u7406\u6846\u67b6\u7684\u529f\u80fd\uff0c\u800cHive\u4e8b\u52a1\u7279\u6027\u5219\u5728\u7528\u6237\u6216Hive Metastore\u542f\u52a8\u7684Hive\u4efb\u52a1/\u67e5\u8be2\u7684\u4e0b\u5b9e\u73b0\u3002\n\u6839\u636e\u6211\u4eec\u7684\u751f\u4ea7\u7ecf\u9a8c\uff0c\u4e0e\u5176\u4ed6\u65b9\u6cd5\u76f8\u6bd4\uff0c\u5c06Hudi\u4f5c\u4e3a\u5e93\u5d4c\u5165\u5230\u73b0\u6709\u7684Spark\u7ba1\u9053\u4e2d\u8981\u5bb9\u6613\u5f97\u591a\uff0c\u5e76\u4e14\u64cd\u4f5c\u4e0d\u4f1a\u592a\u7e41\u7410\u3002\nHudi\u8fd8\u8bbe\u8ba1\u7528\u4e8e\u4e0ePresto/Spark\u7b49\u975eHive\u5f15\u64ce\u5408\u4f5c\uff0c\u5e76\u8ba1\u5212\u5f15\u5165\u9664parquet\u4ee5\u5916\u7684\u6587\u4ef6\u683c\u5f0f\u3002"),(0,i.kt)("h2",{id:"hbase"},"HBase"),(0,i.kt)("p",null,"\u5c3d\u7ba1",(0,i.kt)("a",{parentName:"p",href:"https://hbase.apache.org"},"HBase"),"\u6700\u7ec8\u662fOLTP\u5de5\u4f5c\u8d1f\u8f7d\u7684\u952e\u503c\u5b58\u50a8\u5c42\uff0c\u4f46\u7531\u4e8e\u4e0eHadoop\u7684\u76f8\u4f3c\u6027\uff0c\u7528\u6237\u901a\u5e38\u503e\u5411\u4e8e\u5c06HBase\u4e0e\u5206\u6790\u76f8\u5173\u8054\u3002\n\u9274\u4e8eHBase\u7ecf\u8fc7\u4e25\u683c\u7684\u5199\u4f18\u5316\uff0c\u5b83\u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684\u4e9a\u79d2\u7ea7\u66f4\u65b0\uff0cHive-on-HBase\u5141\u8bb8\u7528\u6237\u67e5\u8be2\u8be5\u6570\u636e\u3002 \u4f46\u662f\uff0c\u5c31\u5206\u6790\u5de5\u4f5c\u8d1f\u8f7d\u7684\u5b9e\u9645\u6027\u80fd\u800c\u8a00\uff0cParquet/ORC\u4e4b\u7c7b\u7684\u6df7\u5408\u5217\u5f0f\u5b58\u50a8\u683c\u5f0f\u53ef\u4ee5\u8f7b\u677e\u51fb\u8d25HBase\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u5de5\u4f5c\u8d1f\u8f7d\u4e3b\u8981\u662f\u8bfb\u53d6\u7e41\u91cd\u7684\u5de5\u4f5c\u3002\nHudi\u5f25\u8865\u4e86\u66f4\u5feb\u7684\u6570\u636e\u4e0e\u5206\u6790\u5b58\u50a8\u683c\u5f0f\u4e4b\u95f4\u7684\u5dee\u8ddd\u3002\u4ece\u8fd0\u8425\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u4e0e\u7ba1\u7406\u5206\u6790\u4f7f\u7528\u7684HBase region\u670d\u52a1\u5668\u96c6\u7fa4\u76f8\u6bd4\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u53ef\u66f4\u5feb\u7ed9\u51fa\u6570\u636e\u7684\u5e93\u66f4\u5177\u53ef\u6269\u5c55\u6027\u3002\n\u6700\u7ec8\uff0cHBase\u4e0d\u50cfHudi\u8fd9\u6837\u91cd\u70b9\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"p"},"\u63d0\u4ea4\u65f6\u95f4"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u589e\u91cf\u62c9\u53d6"),"\u4e4b\u7c7b\u7684\u589e\u91cf\u5904\u7406\u539f\u8bed\u3002"),(0,i.kt)("h2",{id:"\u6d41\u5f0f\u5904\u7406"},"\u6d41\u5f0f\u5904\u7406"),(0,i.kt)("p",null,'\u4e00\u4e2a\u666e\u904d\u7684\u95ee\u9898\uff1a"Hudi\u4e0e\u6d41\u5904\u7406\u7cfb\u7edf\u6709\u4f55\u5173\u7cfb\uff1f"\uff0c\u6211\u4eec\u5c06\u5728\u8fd9\u91cc\u5c1d\u8bd5\u56de\u7b54\u3002\u7b80\u800c\u8a00\u4e4b\uff0cHudi\u53ef\u4ee5\u4e0e\u5f53\u4eca\u7684\u6279\u5904\u7406(',(0,i.kt)("inlineCode",{parentName:"p"},"\u5199\u65f6\u590d\u5236\u5b58\u50a8"),")\u548c\u6d41\u5904\u7406(",(0,i.kt)("inlineCode",{parentName:"p"},"\u8bfb\u65f6\u5408\u5e76\u5b58\u50a8"),")\u4f5c\u4e1a\u96c6\u6210\uff0c\u4ee5\u5c06\u8ba1\u7b97\u7ed3\u679c\u5b58\u50a8\u5728Hadoop\u4e2d\u3002\n\u5bf9\u4e8eSpark\u5e94\u7528\u7a0b\u5e8f\uff0c\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5c06Hudi\u5e93\u4e0eSpark/Spark\u6d41\u5f0fDAG\u76f4\u63a5\u96c6\u6210\u6765\u5b9e\u73b0\u3002\u5728\u975eSpark\u5904\u7406\u7cfb\u7edf(\u4f8b\u5982Flink\u3001Hive)\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u5728\u76f8\u5e94\u7684\u7cfb\u7edf\u4e2d\u8fdb\u884c\u5904\u7406\uff0c\u7136\u540e\u901a\u8fc7Kafka\u4e3b\u9898/DFS\u4e2d\u95f4\u6587\u4ef6\u5c06\u5176\u53d1\u9001\u5230Hudi\u8868\u4e2d\u3002\u4ece\u6982\u5ff5\u4e0a\u8bb2\uff0c\u6570\u636e\u5904\u7406\n\u7ba1\u9053\u4ec5\u7531\u4e09\u4e2a\u90e8\u5206\u7ec4\u6210\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"\u8f93\u5165"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\u5904\u7406"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\u8f93\u51fa"),"\uff0c\u7528\u6237\u6700\u7ec8\u9488\u5bf9\u8f93\u51fa\u8fd0\u884c\u67e5\u8be2\u4ee5\u4fbf\u4f7f\u7528\u7ba1\u9053\u7684\u7ed3\u679c\u3002Hudi\u53ef\u4ee5\u5145\u5f53\u5c06\u6570\u636e\u5b58\u50a8\u5728DFS\u4e0a\u7684\u8f93\u5165\u6216\u8f93\u51fa\u3002Hudi\u5728\u7ed9\u5b9a\u6d41\u5904\u7406\u7ba1\u9053\u4e0a\u7684\u9002\u7528\u6027\u6700\u7ec8\u5f52\u7ed3\u4e3a\u4f60\u7684\u67e5\u8be2\u5728Presto/SparkSQL/Hive\u7684\u9002\u7528\u6027\u3002"),(0,i.kt)("p",null,"\u66f4\u9ad8\u7ea7\u7684\u7528\u4f8b\u56f4\u7ed5",(0,i.kt)("a",{parentName:"p",href:"https://www.oreilly.com/ideas/ubers-case-for-incremental-processing-on-hadoop"},"\u589e\u91cf\u5904\u7406"),"\u7684\u6982\u5ff5\u5c55\u5f00\uff0c\n\u751a\u81f3\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"\u5904\u7406"),"\u5f15\u64ce\u5185\u90e8\u4e5f\u4f7f\u7528Hudi\u6765\u52a0\u901f\u5178\u578b\u7684\u6279\u5904\u7406\u7ba1\u9053\u3002\u4f8b\u5982\uff1aHudi\u53ef\u7528\u4f5cDAG\u5185\u7684\u72b6\u6001\u5b58\u50a8(\u7c7b\u4f3cFlink\u4f7f\u7528\u7684[rocksDB(",(0,i.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.2/ops/state_backends#the-rocksdbstatebackend))%E3%80%82"},"https://ci.apache.org/projects/flink/flink-docs-release-1.2/ops/state_backends#the-rocksdbstatebackend))\u3002"),"\n\u8fd9\u662f\u8def\u7ebf\u56fe\u4e0a\u7684\u4e00\u4e2a\u9879\u76ee\u5e76\u5c06\u6700\u7ec8\u4ee5",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-60"},"Beam Runner"),"\u7684\u5f62\u5f0f\u5448\u73b0\u3002"))}l.isMDXComponent=!0}}]);