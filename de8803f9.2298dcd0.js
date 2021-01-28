(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(165)),c={id:"app.dataStore",title:"app.dataStore",sidebar_label:"app.dataStore"},p={unversionedId:"app.dataStore",id:"app.dataStore",isDocsHomePage:!1,title:"app.dataStore",description:"This app.dataStore or app.datastore  object provides methods to insert, search, delete and update MongoDB database. search method is a wrapper over full-text search engine elasticsearch(https://www.elastic.co/).",source:"@site/docs/app-dataStore-datastore.md",slug:"/app.dataStore",permalink:"/platform-documentation/docs/app.dataStore",editUrl:"https://github.com/yellowmessenger/platform-documentation/docs/app-dataStore-datastore.md",version:"current",sidebar_label:"app.dataStore",sidebar:"docs",previous:{title:"app.data",permalink:"/platform-documentation/docs/app.data"},next:{title:"app.entityValidators",permalink:"/platform-documentation/docs/app.entityValidators"}},l=[{value:"Methods",id:"methods",children:[]},{value:"Search",id:"search",children:[]},{value:"Update",id:"update",children:[]}],b={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This app.dataStore or app.datastore  object provides methods to insert, search, delete and update MongoDB database. search method is a wrapper over full-text search engine elasticsearch(",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.elastic.co/"}),"https://www.elastic.co/"),")."),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Insert")),Object(o.b)("p",null,"Insert methods inserts a given record (document in MongoDB technology) into the table."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"app.dataStore.insert(document) // document => { table: collection, record: recordObject }\n")),Object(o.b)("p",null,"Input Parameters"),Object(o.b)("p",null,"document | object "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"table | object - A string representing the name of the record in the table (collections in MongoDB).\nrecord | object - An object representing the data to be inserted into the table.\n")),Object(o.b)("p",null,"Output Parameters"),Object(o.b)("p",null,"returns a Promise which resolves an object representing the record information that is just inserted."),Object(o.b)("p",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"app.dataStore.insert({ table, record }\n    .then(result => result)\n")),Object(o.b)("h2",{id:"search"},"Search"),Object(o.b)("p",null,"Search method is a wrapper over elasticsearch(",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.elastic.co/"}),"https://www.elastic.co/"),") which is used to query the database MongoDB."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"app.dataStore.search(options)\n")),Object(o.b)("p",null,"Input Parameters"),Object(o.b)("p",null,"Options | object "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"table | string\nA string representing the name of the record in the table (collections in MongoDB).\n\nrecord | object\nAn object representing the elasticsearch search syntax to query the database.\n")),Object(o.b)("p",null,"Output Parameters"),Object(o.b)("p",null,"returns a Promise which resolves an object representing the meta of search result and list of resultant records."),Object(o.b)("p",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'app.dataStore.search({\n        table: table,\n        body: {\n            "query": {\n                "term": {\n                    [column]: query\n                }\n            }\n        }\n    }).then(result => result)\n')),Object(o.b)("h2",{id:"update"},"Update"),Object(o.b)("p",null,"Update method updates the given record (document in MongoDB terminology)  in the table."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"app.dataStore.update(options)\n")),Object(o.b)("p",null,"Input Parameters"),Object(o.b)("p",null,"Options | object "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"table | string\nA string representing the name of the record in the table (collections in MongoDB).\n\nrecord | object\nAn object representing record data to be updated in the table.\n")),Object(o.b)("p",null,"Output Parameters"),Object(o.b)("p",null,"returns a Promise which resolves an object representing the record information that is just updated."),Object(o.b)("p",null,"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"app.dataStore.update({ table, record })\n        .then(result => result)\n\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Remember, To update the record in the table, we need to pass  _id of the record ( In MongoDB, Every document has a unique ID). So, to get the _id of the record, we need to do perform a search on database and grab the _id of the record from the result. ")))}s.isMDXComponent=!0},165:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),i=s(r),u=n,h=i["".concat(c,".").concat(u)]||i[u]||d[u]||o;return r?a.a.createElement(h,p(p({ref:t},b),{},{components:r})):a.a.createElement(h,p({ref:t},b))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var b=2;b<o;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);