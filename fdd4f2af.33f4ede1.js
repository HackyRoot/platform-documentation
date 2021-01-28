(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(165)),p={id:"WhatsAppAPI"},c={unversionedId:"WhatsAppAPI",id:"WhatsAppAPI",isDocsHomePage:!1,title:"WhatsAppAPI",description:"WhatsApp API Documentation",source:"@site/docs/WhatsAppAPI.md",slug:"/WhatsAppAPI",permalink:"/platform-documentation/docs/WhatsAppAPI",editUrl:"https://github.com/yellowmessenger/platform-documentation/docs/WhatsAppAPI.md",version:"current",sidebar:"docs",previous:{title:"app.updateCollaborators",permalink:"/platform-documentation/docs/app.updateCollaborators"},next:{title:"Microsoft Teams",permalink:"/platform-documentation/docs/Microsoft Teams"}},l=[{value:"POST URL:",id:"post-url",children:[]},{value:"Text Template:",id:"text-template",children:[{value:"Sample Request Body",id:"sample-request-body",children:[]},{value:"Sample Response for Template",id:"sample-response-for-template",children:[]},{value:"Doc/PDF Template Body",id:"docpdf-template-body",children:[]},{value:"If there are no variables then the \u201ctype:body parameters\u201d are not required:",id:"if-there-are-no-variables-then-the-typebody-parameters-are-not-required",children:[]},{value:"Image Template Body:",id:"image-template-body",children:[]},{value:"Video Template",id:"video-template",children:[]},{value:"Dynamic URL Template",id:"dynamic-url-template",children:[]},{value:"Call to Action(Phone Number)",id:"call-to-actionphone-number",children:[]},{value:"Button Template",id:"button-template",children:[]}]}],i={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"whatsapp-api-documentation"},"WhatsApp API Documentation"),Object(r.b)("p",null,"In order to use the APIs, please follow the instructions given."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"All APIs are of the form URL/Path. The same URL is used for all APIs present in this document, only the path is different for the different services."),Object(r.b)("p",{parentName:"li"},"a. URL : ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.yellowmessenger.com/integrations/whatsapp/send?bot=%7B%7Bbotid%7D%7D"}),"WhatsApp Integration")),Object(r.b)("p",{parentName:"li"},"b. All API requests will contain two fields that contain data specific for the client businesses. These are generated specifically for the clients and can be shared after the relevant bots are created."),Object(r.b)("p",{parentName:"li"},"c. BotId : //to be provided by the YM team"),Object(r.b)("p",{parentName:"li"},"d. x-auth-token : //This is available as on logging into the platform -"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"app.yellowmessenger.com > Account settings > API Key")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Method : POST for all the requests")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Note: To avoid issues with Unicode, please type the code snippets below instead of copying them directly."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Supported Content-type")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Media"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Content Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"audio(Upto 16MB)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"audio/aac, audio/mp4, audio/amr, audio/mpeg, audio/ogg; codecs=opus. Note: The base audio/ogg type is not supported.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"document(Upto 100MB)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Any valid MIME-type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"image(Upto 5MB)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"image/jpeg, image/png")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"video(Upto 16MB)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"video/mp4, video/3gpp")))),Object(r.b)("h2",{id:"post-url"},"POST URL:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.yellowmessenger.com/integrations/whatsapp/send?bot=x1234567890"}),"https://app.yellowmessenger.com/integrations/whatsapp/send?bot=x1234567890"),"\nBot ID will be shared by YM\nHeaders:\nContent-Type : application/json\nx-auth-token : To be fetched from the YM Account Settings")),Object(r.b)("h2",{id:"text-template"},"Text Template:"),Object(r.b)("h3",{id:"sample-request-body"},"Sample Request Body"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "body": {\n      "to": "919999999999", //recipient number\n      "ttl":  86400 ,\n      "type": "hsm",\n      "hsm": {\n        "namespace": "asd6_asdas6_asd7asd6", //Namespace from BM Account(Will be shared by YM)\n        "element_name": "template_name", // template name(Will be shared by YM)\n        "language": {\n          "policy": "deterministic",\n          "code": "en" // language code [List of codes](https://developers.facebook.com/docs/whatsapp/message-templates/creation/#translations)\n        },\n        "localizable_params": [\n          {\n            "default": "1" //Variable to be passed on the template in sequential manner\n          },\n          {\n            "default": "2"\n          },\n          {\n            "default": "3"\n          },\n          {\n            "default": "4"\n          }\n        ]\n      }\n  }\n}\n')),Object(r.b)("h3",{id:"sample-response-for-template"},"Sample Response for Template"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "success": true,\n  "message": "Successful",\n  "data": {\n    "created": "2020-07-23T10:38:06.530Z",\n    "updated": "2020-07-23T10:38:06.530Z",\n    "botId": "x1234567890",\n    "uid": "919999999999",\n    "message": "9fb7e63aabeaccddd7dfe8f7df676b842a43eeb43f5d1b232eead8fa61386ece6c7651f96283a4e8ca61751cda747c2c103cc6dfd0475c01fe69ae1543c9697b44f6f1ef5e58ca1c0f26aa9cdab328a97a1d99cdb1a594df8d0c437ad8d72301ff6c21db43ff3b1a3dd1faf58e74b0c0b54753ea4e42d51326922d4450394906927567e4",\n    "messageType": "NOTIFICATION",\n    "sessionId": "notification-919999999999",\n    "slug": "",\n    "feedback": "",\n    "data": {},\n    "source": "whatsapp",\n    "whatsAppId": "gBEGkYcjBiJlAglm7xw7KKCB8iw",\n    "whatsAppData": {\n      "messages": [\n        {\n          "id": "gBEGkYcjBiJlAglm7xw7KKCB8iw"\n        }\n      ],\n      "meta": {\n        "api_status": "stable",\n        "version": "2.27.12"\n      },\n      "templateName": "template_name"\n    },\n    "medium": "message",\n    "messageId": "5f19688e5736accc960e49fb"\n  }\n}\n')),Object(r.b)("h3",{id:"docpdf-template-body"},"Doc/PDF Template Body"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "type": "media-notification",\n  "mime": "application/pdf",\n  "link": "https://ImageLink.pdf", //Link of the PDF\n  "body": {\n      "to": "919999999999",\n      "ttl":  200000 ,\n      "type": "template",\n      "template": {\n          "namespace": "awe7_wer3_as234_wds23",\n          "language": {\n            "policy": "deterministic",\n            "code": "en"\n          },\n          "name": "invoice",\n          "components": [\n            {\n              "type": "header",\n              "parameters": [\n                {     \n                  "type": "document",\n                  "document": {\n                      "filename": "Doc_name.pdf" //File Name of the the PDF\n                  }\n                }\n              ]\n            },\n            {\n              "type": "body",\n              "parameters": [\n                {\n                  "type": "text", // Variable Values.\n                  "text": "1"\n                } \n              ] \n            } \n          ] \n      } \n  }\n}\n')),Object(r.b)("h3",{id:"if-there-are-no-variables-then-the-typebody-parameters-are-not-required"},"If there are no variables then the \u201ctype:body parameters\u201d are not required:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'"type": "body",\n"parameters": [\n    {\n      "type": "text", // Variable Values.\n      "text": "1"\n    },\n]\n')),Object(r.b)("h3",{id:"image-template-body"},"Image Template Body:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "body": {\n    "to": \u200b"919999999999"\u200b,\n    "ttl": \u200b 200000 \u200b,\n    "type": \u200b"template"\u200b,\n    "template": {\n        "namespace": \u200b"d53ad515_35a1_4ee5_955a_cab4f"\u200b,\n        "language": {\n          "policy": \u200b"deterministic"\u200b,\n          "code": \u200b"en"\n        },\n        "name": \u200b"image_template"\u200b,\n        "components": [\n          {\n            "type": \u200b"header"\u200b,\n        "parameters": [\n        {\n          "type": \u200b"image"\u200b,\n          "image": {\n            "link": \u200b"https://ImageLink.jpg"\u200b \u200b//Image Link\n          }\n        }\n        ]\n        },\n        {\n          "type": \u200b"body"\u200b,\n          "parameters": [\n            {\n              "type": \u200b"text"\u200b,\n              "text": \u200b"1"\n            }\n          ] \n        } \n        ] \n    }\n  } \n}  \n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u201ctype\u201d : body params not required if there are no variables in the template")),Object(r.b)("h3",{id:"video-template"},"Video Template"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  \u200b"type"\u200b: \u200b"media-notification"\u200b,\n  \u200b"mime"\u200b: \u200b"video/mp4"\u200b,\n  \u200b"link"\u200b: \u200b"https://cdn.yellowmessenger.com/GkMMENpvqf7E1597234901535.mp4"\u200b,\n  \u200b"body"\u200b: {\n    \u200b"to"\u200b: \u200b"918723062265"\u200b,\n    \u200b"ttl"\u200b: \u200b 200000 \u200b,\n    \u200b"type"\u200b: \u200b"template"\u200b,\n    \u200b"template"\u200b: {\n      \u200b"namespace"\u200b: \u200b"19b94f_a9d1_4c44_f740_b593818c8b"\u200b,\n      \u200b"language"\u200b: {\n        \u200b"policy"\u200b: \u200b"deterministic"\u200b,\n        \u200b"code"\u200b: \u200b"en"\n      },\n      \u200b"name"\u200b: \u200b"welcome_video"\u200b,\n      \u200b"components"\u200b: [\n        {\n          \u200b"type"\u200b: \u200b"header"\u200b,\n          \u200b"parameters"\u200b: [\n            {\n              \u200b"type"\u200b: \u200b"video"\u200b,\n              \u200b"video"\u200b: {\n                \u200b"filename"\u200b: \u200b"video.mp4"\n              }\n            }\n          ]\n        },\n        {\n        \u200b"type"\u200b: \u200b"body"\u200b,\n        \u200b"parameters"\u200b: [\n          {\n            \u200b"type"\u200b: \u200b"text"\u200b,\n            \u200b"text"\u200b: \u200b"1"\n          } \n        ] \n        } \n      ] \n    } \n  } \n}\n')),Object(r.b)("h3",{id:"dynamic-url-template"},"Dynamic URL Template"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "body": {\n    "to": "918723062265",\n    "ttl": 86400,\n    "type": "template",\n    "template": {\n      "namespace": "97a63_9589_4937_b343_88867d89fe",\n      "name": "pay_now_test",\n      "language": {\n        "policy": "deterministic",\n        "code": "en"\n      },\n      "components": [\n        {\n          "type": "button",\n          "sub_type": "url",\n          "index": "0",\n          "parameters": [\n            {\n              "type": "text",\n              "text": "31300"\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),Object(r.b)("h3",{id:"call-to-actionphone-number"},"Call to Action(Phone Number)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  \u200b"body"\u200b: {\n      \u200b"to"\u200b: \u200b"918723062265"\u200b,\n      \u200b"ttl"\u200b: \u200b 86400 \u200b,\n      \u200b"type"\u200b: \u200b"template"\u200b,\n      \u200b"template"\u200b: {\n        \u200b"namespace"\u200b: \u200b"b94f_a9d1_4c44_f740_b5b98c8b"\u200b,\n        \u200b"name"\u200b: \u200b"welcome_cta_phone"\u200b,\n        \u200b"language"\u200b: {\n          \u200b"policy"\u200b: \u200b"deterministic"\u200b,\n          \u200b"code"\u200b: \u200b"en"\n        },\n        \u200b"components"\u200b: [\n          {\n            \u200b"type"\u200b : \u200b"body"\u200b,\n            \u200b"parameters"\u200b : [\n              {\n                \u200b"type"\u200b : \u200b"text"\u200b,\n                \u200b"text"\u200b : \u200b"Wasim"\n              } \n            ] \n          } \n        ] \n      } \n  } \n}\n')),Object(r.b)("h3",{id:"button-template"},"Button Template"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  \u200b"type"\u200b: \u200b"media-notification"\u200b,\n  \u200b"body"\u200b: {\n    \u200b"to"\u200b: \u200b"918723062265"\u200b,\n    \u200b"ttl"\u200b: \u200b 86400 \u200b,\n    \u200b"type"\u200b: \u200b"template"\u200b,\n    \u200b"template"\u200b: {\n      \u200b"namespace"\u200b: \u200b"dad515_35a1_4ee5_955a_cab405a8b7"\u200b,\n      \u200b"name"\u200b: \u200b"invoice_1"\u200b,\n      \u200b"language"\u200b: {\n        \u200b"policy"\u200b: \u200b"deterministic"\u200b,\n        \u200b"code"\u200b: \u200b"en"\n      },\n      \u200b"components"\u200b: [\n        {\n          \u200b"type"\u200b: \u200b"body"\u200b,\n          \u200b"parameters"\u200b: [\n            {\n              \u200b"type"\u200b: \u200b"text"\u200b,\n              \u200b"text"\u200b: \u200b"1"\n            }\n          ]\n        },\n      {\n        \u200b"type"\u200b: \u200b"button"\u200b,\n        \u200b"sub_type"\u200b: "quick_reply"\u200b,\n        \u200b"index"\u200b: \u200b"0"\u200b,\n        \u200b"parameters"\u200b: [\n          {\n            \u200b"type"\u200b: \u200b"payload"\u200b,\n            \u200b"payload"\u200b: \u200b"Hi"\n          } \n        ] \n      } \n      ] \n    } \n  } \n}\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The payload passed in the button templates will be received as an event in the bot which can be used for various use cases. This gives an advantage to use the same button text in multiple templates (Eg. Yes) and differentiate the users input based on the payload passed.")))}b.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(p,".").concat(m)]||d[m]||s[m]||r;return n?o.a.createElement(u,c(c({ref:t},i),{},{components:n})):o.a.createElement(u,c({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var i=2;i<r;i++)p[i]=n[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);