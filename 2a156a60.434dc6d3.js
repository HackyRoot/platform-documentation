(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{174:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,b=l["".concat(o,".").concat(m)]||l[m]||d[m]||c;return r?a.a.createElement(b,i(i({ref:t},p),{},{components:r})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),c=(r(0),r(174)),o={},i={unversionedId:"getTicket",id:"getTicket",isDocsHomePage:!1,title:"getTicket",description:"app.getTicket() is used to a list of agents that have signed up in the 'Support' portal.",source:"@site/docs/getTicket.md",slug:"/getTicket",permalink:"/ym-documentation/docs/getTicket",editUrl:"https://github.com/yellowmessenger/ym-documentation/tree/master/docs/getTicket.md",version:"current",sidebar:"docs",previous:{title:"updateTicketCsat",permalink:"/ym-documentation/docs/updateTicketCsat"},next:{title:"updateTicketCustomFields",permalink:"/ym-documentation/docs/updateTicketCustomFields"}},u=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]}],p={rightToc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"app.getTicket() is used to a list of agents that have signed up in the 'Support' portal."),Object(c.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(c.b)("p",null,"ticketId\n\u200b"),Object(c.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(c.b)("p",null,"An Object, with success data/failure message\n\u200b"),Object(c.b)("h2",{id:"example-usage"},"Example Usage"),Object(c.b)("p",null,"\u200b"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'app.getTicket({ticketId: "123"}).then((result) => {\n    app.log(result, "getTicket result")\n}).catch(err => {\n    app.log(err, "getTicker error");\n});\n')))}s.isMDXComponent=!0}}]);