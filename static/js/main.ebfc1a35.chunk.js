(this["webpackJsonpcv-viewer"]=this["webpackJsonpcv-viewer"]||[]).push([[0],{107:function(e,n){},108:function(e,n){},109:function(e,n){},110:function(e,n){},111:function(e,n){},112:function(e,n,t){"use strict";t.r(n);var a=t(3),c=t(0),o=t.n(c),i=t(31),r=t.n(i),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=t(21),d=t(154),b=t(13),u=t(153),h=t(156),f=t(128),p=t(130),O=t(27),m=t(131),x=t(132),v=t(8),g=Object(v.a)((function(){return Object(h.a)({root:{height:"500px",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"space-evenly"},actions:{justifyContent:"center"}})}))((function(e){var n=e.classes;return Object(a.jsxs)(f.a,{className:n.root,children:[Object(a.jsxs)(p.a,{children:[Object(a.jsx)(O.a,{variant:"h1",children:"Welcome"}),Object(a.jsx)("br",{}),Object(a.jsx)(O.a,{variant:"body1",children:"Select a language below to view the CV"})]}),Object(a.jsxs)(m.a,{className:n.actions,children:[Object(a.jsx)(x.a,{variant:"contained",color:"primary",component:j.b,to:"/cv/english",children:"English \ud83c\uddee\ud83c\uddea"}),Object(a.jsx)(x.a,{variant:"contained",color:"secondary",component:j.b,to:"/cv/german",children:"Deutsch \ud83c\udde9\ud83c\uddea"})]})]})})),w=t(33),y=t(50),k=t(134),C=t(133),_=t(135),S=Object(v.a)((function(e){var n=e.spacing;return Object(h.a)({wrapper:{padding:n(4),textAlign:"center"},icon:{fontSize:"3em"},header:{display:"flex",flexDirection:"column-reverse",justifyContent:"center"},iconContainer:{textAlign:"center"}})}))((function(e){var n=e.message,t=void 0===n?void 0:n,c=e.classes,o=e.action,i=void 0===o?void 0:o,r=e.actionLabel,s=void 0===r?"Try Again":r;return Object(a.jsxs)(f.a,{elevation:3,className:c.wrapper,children:[Object(a.jsx)("div",{className:c.iconContainer,children:Object(a.jsx)(C.a,{color:"error",className:c.icon})}),Object(a.jsx)(k.a,{title:t||"There was a problem",className:c.header}),i?Object(a.jsx)(x.a,{className:c.iconContainer,variant:"contained",color:"secondary",endIcon:Object(a.jsx)(_.a,{}),onClick:i,children:s}):Object(a.jsx)(x.a,{component:j.b,to:"/",color:"primary",variant:"contained",children:"Home"})]})})),A=t(136),E=Object(v.a)((function(){return Object(h.a)({progressWrapper:{minHeight:"-webkit-fill-available",display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var n=e.classes;return Object(a.jsx)("div",{className:n.progressWrapper,children:Object(a.jsx)(A.a,{})})})),T=function(e){var n=e.pdf,t=e.width,o=Object(c.useState)(null),i=Object(w.a)(o,2),r=i[0],s=i[1];return Object(a.jsx)(y.a,{file:n,onLoadSuccess:function(e){var n=e.numPages;s(n)},loading:Object(a.jsx)(E,{}),error:Object(a.jsx)(S,{message:"Could not load document"}),children:Array.from(new Array(r),(function(e,n){return Object(a.jsx)(y.b,{width:t,pageNumber:n+1},"page_".concat(n+1))}))})},W={env:"production",english:"/assets/cv-english.pdf",german:"/assets/cv-german.pdf",ga_id:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CV_ENG_URL:"/assets/cv-english.pdf",REACT_APP_CV_GRM_URL:"/assets/cv-german.pdf"}).REACT_APP_GA_ID},N=function(e){var n=e.lang,t=Object(c.useRef)(null),o=Object(c.useState)(0),i=Object(w.a)(o,2),r=i[0],s=i[1];return Object(c.useLayoutEffect)((function(){t&&t.current&&s(t.current.offsetWidth)}),[t]),Object(a.jsx)("div",{ref:t,children:Object(a.jsx)(T,{width:r,pdf:W[n]})})},L=t(137),P=t(138),R=t(139),D=t(141),I=t(155),U=t(140),F=t(142),G=t(143),H=t(144),V=t(51),M=Object(b.f)((function(e){var n=e.history,t=o.a.useState(!0),i=Object(w.a)(t,2),r=i[0],s=i[1],l=o.a.useState(!1),d=Object(w.a)(l,2),b=d[0],u=d[1];V.a.initialize(W.ga_id);return Object(c.useEffect)((function(){var e=function(){window.location.pathname.includes("/cv/")?(u(!0),s(window.location.pathname.includes("/english"))):u(!1)};e(),n.listen((function(){e(),V.a.pageview(window.location.pathname+window.location.search)}))}),[n]),Object(a.jsx)(L.a,{position:"sticky",children:Object(a.jsxs)(P.a,{style:{justifyContent:"space-between"},children:[Object(a.jsx)(R.a,{component:j.b,to:"/",children:Object(a.jsx)(U.a,{})}),Object(a.jsxs)("div",{children:[b&&Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsx)(D.a,{control:Object(a.jsx)(I.a,{onChange:function(e){e.target.checked?n.push("/cv/german"):n.push("/cv/english")},checked:!r}),label:r?"English \ud83c\uddee\ud83c\uddea":"Deutsch \ud83c\udde9\ud83c\uddea"}),Object(a.jsx)(R.a,{"aria-label":"Download CV",href:W[window.location.pathname.split("cv/")[1]],download:"eoanodea-cv-".concat(window.location.pathname.split("cv/")[1]),children:Object(a.jsx)(F.a,{})})]}),Object(a.jsx)(R.a,{"aria-label":"View Code on Github",href:"https://github.com/eoanodea/eoanie-cv-viewer",target:"_blank",children:Object(a.jsx)(G.a,{})}),Object(a.jsx)(R.a,{"aria-label":"Contact",component:j.b,to:"/contact",children:Object(a.jsx)(H.a,{})})]})]})})})),B=t(149),z=t(158),K=t(150),J=t(151),$=t(152),q=t(145),Q=t(146),X=t(147),Y=t(148),Z=Object(v.a)((function(e){var n=e.palette;return Object(h.a)({root:{display:"flex",flexDirection:"column",justifyContent:"space-evenly"},listLinks:{color:n.primary.main}})}))((function(e){var n=e.classes,t=[{name:"Github",secondary:"@eoanodea",link:"https://github.com/eoanodea",icon:Object(a.jsx)(G.a,{})},{name:"Linkedin",secondary:"@eoanodea",link:"https://www.linkedin.com/in/eoanodea/",icon:Object(a.jsx)(q.a,{})},{name:"My Portfolio",secondary:"It's unfinished dont judge me",link:"https://about.eoan.ie",icon:Object(a.jsx)(Q.a,{})},{name:"Get in touch",secondary:"Send me an email",link:"https://about.eoan.ie#contact",icon:Object(a.jsx)(X.a,{})},{name:"WebSpace",secondary:"Hire me as a developer",link:"https://web-space.design",icon:Object(a.jsx)(Y.a,{})}];return Object(a.jsx)(f.a,{className:n.root,children:Object(a.jsxs)(p.a,{children:[Object(a.jsx)(O.a,{variant:"h1",children:"Contact me"}),Object(a.jsx)("br",{}),Object(a.jsx)(B.a,{children:t.map((function(e,t){return Object(a.jsxs)(z.a,{className:n.listLinks,button:!0,component:K.a,href:e.link,target:"_blank",children:[Object(a.jsx)(J.a,{children:e.icon}),Object(a.jsx)($.a,{primary:e.name,secondary:e.secondary})]},t)}))})]})})})),ee=function(){return Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsx)(M,{}),Object(a.jsx)(u.a,{container:!0,justify:"center",style:{marginTop:"20px",marginBottom:"20px"},children:Object(a.jsx)(u.a,{item:!0,xs:11,children:Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{exact:!0,path:"/",component:g}),Object(a.jsx)(b.a,{path:"/cv/:lang",render:function(e){return Object(a.jsx)(N,{lang:e.match.params.lang})}}),Object(a.jsx)(b.a,{path:"/contact",component:Z})]})})})]})},ne=t(67),te=t(157),ae=Object(ne.a)({palette:{primary:{main:"#2196f3"},secondary:{main:"#ffc400"}},typography:{fontFamily:["Roboto","sans-serif"].join(","),h1:{fontWeight:800,fontSize:"3.4rem"}},overrides:{MuiTextField:{root:{width:"100%",margin:"16px auto"}},MuiListItemText:{root:{display:"flex",flexDirection:"column-reverse"}}}}),ce=ae=Object(te.a)(ae),oe=function(){return Object(a.jsx)(j.a,{children:Object(a.jsx)(d.a,{theme:ce,children:Object(a.jsx)(ee,{})})})};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(oe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");s?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):l(n,e)}))}}()}},[[112,1,2]]]);
//# sourceMappingURL=main.ebfc1a35.chunk.js.map