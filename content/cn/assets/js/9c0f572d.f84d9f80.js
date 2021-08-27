"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[2900],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8365:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"Performance",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},p=void 0,c={unversionedId:"performance",id:"version-0.9.0/performance",isDocsHomePage:!1,title:"Performance",description:"In this section, we go over some real world performance numbers for Hudi upserts, incremental pull and compare them against",source:"@site/versioned_docs/version-0.9.0/performance.md",sourceDirName:".",slug:"/performance",permalink:"/cn/docs/performance",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/docs/versioned_docs/version-0.9.0/performance.md",version:"0.9.0",frontMatter:{title:"Performance",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"version-0.9.0/docs",previous:{title:"Configurations",permalink:"/cn/docs/configurations"},next:{title:"Deployment",permalink:"/cn/docs/deployment"}},u=[{value:"Upserts",id:"upserts",children:[]},{value:"Indexing",id:"indexing",children:[]},{value:"Snapshot Queries",id:"snapshot-queries",children:[]}],l={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, we go over some real world performance numbers for Hudi upserts, incremental pull and compare them against\nthe conventional alternatives for achieving these tasks. "),(0,o.kt)("h2",{id:"upserts"},"Upserts"),(0,o.kt)("p",null,"Following shows the speed up obtained for NoSQL database ingestion, from incrementally upserting on a Hudi table on the copy-on-write storage,\non 5 tables ranging from small to huge (as opposed to bulk loading the tables)"),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:n(8323).Z,alt:"hudi_upsert_perf1.png"})),(0,o.kt)("p",null,"Given Hudi can build the table incrementally, it opens doors for also scheduling ingesting more frequently thus reducing latency, with\nsignificant savings on the overall compute cost."),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:n(1620).Z,alt:"hudi_upsert_perf2.png"})),(0,o.kt)("p",null,"Hudi upserts have been stress tested upto 4TB in a single commit across the t1 table.\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/Tuning+Guide"},"here")," for some tuning tips."),(0,o.kt)("h2",{id:"indexing"},"Indexing"),(0,o.kt)("p",null,"In order to efficiently upsert data, Hudi needs to classify records in a write batch into inserts & updates (tagged with the file group\nit belongs to). In order to speed this operation, Hudi employs a pluggable index mechanism that stores a mapping between recordKey and\nthe file group id it belongs to. By default, Hudi uses a built in index that uses file ranges and bloom filters to accomplish this, with\nupto 10x speed up over a spark join to do the same. "),(0,o.kt)("p",null,"Hudi provides best indexing performance when you model the recordKey to be monotonically increasing (e.g timestamp prefix), leading to range pruning filtering\nout a lot of files for comparison. Even for UUID based keys, there are ",(0,o.kt)("a",{parentName:"p",href:"https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/"},"known techniques")," to achieve this.\nFor e.g , with 100M timestamp prefixed keys (5% updates, 95% inserts) on a event table with 80B keys/3 partitions/11416 files/10TB data, Hudi index achieves a\n",(0,o.kt)("strong",{parentName:"p"},"~7X (2880 secs vs 440 secs) speed up")," over vanilla spark join. Even for a challenging workload like an '100% update' database ingestion workload spanning\n3.25B UUID keys/30 partitions/6180 files using 300 cores, Hudi indexing offers a ",(0,o.kt)("strong",{parentName:"p"},"80-100% speedup"),"."),(0,o.kt)("h2",{id:"snapshot-queries"},"Snapshot Queries"),(0,o.kt)("p",null,"The major design goal for snapshot queries is to achieve the latency reduction & efficiency gains in previous section,\nwith no impact on queries. Following charts compare the Hudi vs non-Hudi tables across Hive/Presto/Spark queries and demonstrate this."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hive")),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:n(4998).Z,alt:"hudi_query_perf_hive.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Spark")),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:n(2772).Z,alt:"hudi_query_perf_spark.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Presto")),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:n(5603).Z,alt:"hudi_query_perf_presto.png"})))}d.isMDXComponent=!0},4998:function(e,t,n){t.Z=n.p+"assets/images/hudi_query_perf_hive-f7884cd11e19b3885a6c92d699cde0ba.png"},5603:function(e,t,n){t.Z=n.p+"assets/images/hudi_query_perf_presto-4aa54422d000ede251c11b93df259be7.png"},2772:function(e,t,n){t.Z=n.p+"assets/images/hudi_query_perf_spark-e829c75ccd5285e157f24bf83e65ff9a.png"},8323:function(e,t,n){t.Z=n.p+"assets/images/hudi_upsert_perf1-8f41921dacb5fb026f1e5457f8c47aa6.png"},1620:function(e,t,n){t.Z=n.p+"assets/images/hudi_upsert_perf2-d4bfcab4e9e8d942a02b712797ee2755.png"}}]);