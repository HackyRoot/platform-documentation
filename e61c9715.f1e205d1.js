(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{150:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(165)),c={},p={unversionedId:"app.updateCollaborators",id:"app.updateCollaborators",isDocsHomePage:!1,title:"app.updateCollaborators",description:"This function takes in the ticket ID and the collaborators to be added and updates the ticket. This function keeps the currently assigned agent as collaborator.",source:"@site/docs/app.updateCollaborators.md",slug:"/app.updateCollaborators",permalink:"/platform-documentation/docs/app.updateCollaborators",editUrl:"https://github.com/yellowmessenger/platform-documentation/docs/app.updateCollaborators.md",version:"current",sidebar:"docs",previous:{title:"app.transferTicket",permalink:"/platform-documentation/docs/app.transferTicket"},next:{title:"WhatsAppAPI",permalink:"/platform-documentation/docs/WhatsAppAPI"}},i=[],l={rightToc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function takes in the ticket ID and the collaborators to be added and updates the ticket. This function keeps the currently assigned agent as collaborator."),Object(a.b)("p",null,"Agent usernames can be fetched from ",Object(a.b)("inlineCode",{parentName:"p"},"app.getAgents()"),". "),Object(a.b)("p",null,"Input:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"app.updateCollaborators({\nticketId: '100032',\ncollaborators: ['soujanyaagent1yellowmessengercom']\n})\n")),Object(a.b)("p",null,"Output: String containing ",Object(a.b)("inlineCode",{parentName:"p"},"Collaborators updated successfully!")," or ",Object(a.b)("inlineCode",{parentName:"p"},'{"error": "unable to add collaborator"}')))}u.isMDXComponent=!0},165:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return r?o.a.createElement(f,p(p({ref:t},l),{},{components:r})):o.a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);