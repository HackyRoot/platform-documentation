(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),s=r,f=u["".concat(a,".").concat(s)]||u[s]||m[s]||o;return n?i.a.createElement(f,p(p({ref:t},d),{},{components:n})):i.a.createElement(f,p({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var d=2;d<o;d++)a[d]=n[d];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(6),o=(n(0),n(165)),a={id:"app.predictionEndTime",title:"app.predictionEndTime",sidebar_label:"app.predictionEndTime"},p={unversionedId:"app.predictionEndTime",id:"app.predictionEndTime",isDocsHomePage:!1,title:"app.predictionEndTime",description:"It is a Date object instance. This gives the predication end time,",source:"@site/docs/app-predictionEndTime.md",slug:"/app.predictionEndTime",permalink:"/platform-documentation/docs/app.predictionEndTime",editUrl:"https://github.com/yellowmessenger/platform-documentation/docs/app-predictionEndTime.md",version:"current",sidebar_label:"app.predictionEndTime",sidebar:"docs",previous:{title:"app.prediction",permalink:"/platform-documentation/docs/app.prediction"},next:{title:"app.profile",permalink:"/platform-documentation/docs/app.profile"}},c=[],d={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It is a Date object instance. This gives the predication end time,"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"app.log(app.predictionEndTime, 'prediction end time');\n//the log will be\n\"2020-01-28T09:40:34.768Z\"\n")))}l.isMDXComponent=!0}}]);