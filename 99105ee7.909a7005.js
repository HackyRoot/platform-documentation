(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(175)),c={},o={unversionedId:"createEmailTicket",id:"createEmailTicket",isDocsHomePage:!1,title:"createEmailTicket",description:"createEmailTicket",source:"@site/docs/createEmailTicket.md",slug:"/createEmailTicket",permalink:"/docs/createEmailTicket",editUrl:"https://github.com/yellowmessenger/ym-documentation/docs/createEmailTicket.md",version:"current",sidebar:"docs",previous:{title:"getCurrentActiveTicket",permalink:"/docs/getCurrentActiveTicket"},next:{title:"getSupportSettings",permalink:"/docs/getSupportSettings"}},l=[{value:"Input params",id:"input-params",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"createemailticket"},"createEmailTicket"),Object(i.b)("p",null,"This method is used for switching from bot chat to email ticket."),Object(i.b)("h3",{id:"input-params"},"Input params"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"ticketOptions - ",Object(i.b)("em",{parentName:"li"},"Object")),Object(i.b)("li",{parentName:"ol"},"mailData - ",Object(i.b)("em",{parentName:"li"},"Object"))),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),' const ticketOptions = {\n        //required\n        contact: {\n            name: "Steve Rogers",\n            phone: "9876543210",\n            email: "steverogers@shield.com",\n        },\n        issue: "Attack at SHIELD by Loki",\n        //optional\n        category: ["attack", "loki"],\n        priority: "HIGH", //\'LOW/\'MEDIUM\'/\'HIGH\n        severity: "HIGH", //\'LOW/\'MEDIUM\'/\'HIGH\n        tags: ["attack", \'SHIELD\'],\n        manualAssignment: false, //true\n        assignedTo: "avengers@shield.com",\n        customFields: {},\n\n    }\n\n    const mailData = {\n        from: "nickfury@shield.com", //from is required.\n        to: ["steverogers@shield.com"] // if not passed, ticketOptions.contact.email will be used.\n    }\n\n    app.createEmailTicket(ticketOptions, mailData)\n    .then(response => app.log(response));\n')))}s.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||i;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);