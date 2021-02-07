(this["webpackJsonpcv-viewer"]=this["webpackJsonpcv-viewer"]||[]).push([[0],{107:function(e,n){},108:function(e,n){},109:function(e,n){},110:function(e,n){},111:function(e,n){},112:function(e,n,t){"use strict";t.r(n);var c=t(3),a=t(0),o=t.n(a),i=t(31),r=t.n(i),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=t(21),d=t(154),u=t(13),b=t(153),h=t(156),f=t(128),p=t(130),m=t(27),x=t(131),O=t(132),v=t(8),g=Object(v.a)((function(){return Object(h.a)({root:{height:"500px",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"space-evenly"},actions:{justifyContent:"center"}})}))((function(e){var n=e.classes;return Object(c.jsxs)(f.a,{className:n.root,children:[Object(c.jsxs)(p.a,{children:[Object(c.jsx)(m.a,{variant:"h1",children:"Welcome"}),Object(c.jsx)("br",{}),Object(c.jsx)(m.a,{variant:"body1",children:"Select a language below to view the CV"})]}),Object(c.jsxs)(x.a,{className:n.actions,children:[Object(c.jsx)(O.a,{variant:"contained",color:"primary",component:j.b,to:"/cv/english",children:"English \ud83c\uddee\ud83c\uddea"}),Object(c.jsx)(O.a,{variant:"contained",color:"secondary",component:j.b,to:"/cv/german",children:"Deutsch \ud83c\udde9\ud83c\uddea"})]})]})})),w=t(33),y=t(50),k=t(134),C=t(133),S=t(135),N=Object(v.a)((function(e){var n=e.spacing;return Object(h.a)({wrapper:{padding:n(4),textAlign:"center"},icon:{fontSize:"3em"},header:{display:"flex",flexDirection:"column-reverse",justifyContent:"center"},iconContainer:{textAlign:"center"}})}))((function(e){var n=e.message,t=void 0===n?void 0:n,a=e.classes,o=e.action,i=void 0===o?void 0:o,r=e.actionLabel,s=void 0===r?"Try Again":r;return Object(c.jsxs)(f.a,{elevation:3,className:a.wrapper,children:[Object(c.jsx)("div",{className:a.iconContainer,children:Object(c.jsx)(C.a,{color:"error",className:a.icon})}),Object(c.jsx)(k.a,{title:t||"There was a problem",className:a.header}),i?Object(c.jsx)(O.a,{className:a.iconContainer,variant:"contained",color:"secondary",endIcon:Object(c.jsx)(S.a,{}),onClick:i,children:s}):Object(c.jsx)(O.a,{component:j.b,to:"/",color:"primary",variant:"contained",children:"Home"})]})})),W=t(136),T=Object(v.a)((function(){return Object(h.a)({progressWrapper:{minHeight:"-webkit-fill-available",display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var n=e.classes;return Object(c.jsx)("div",{className:n.progressWrapper,children:Object(c.jsx)(W.a,{})})})),E=function(e){var n=e.pdf,t=e.width,o=Object(a.useState)(null),i=Object(w.a)(o,2),r=i[0],s=i[1];return Object(c.jsx)(y.a,{file:n,onLoadSuccess:function(e){var n=e.numPages;s(n)},loading:Object(c.jsx)(T,{}),error:Object(c.jsx)(N,{message:"Could not load document"}),children:Array.from(new Array(r),(function(e,n){return Object(c.jsx)(y.b,{width:t,pageNumber:n+1},"page_".concat(n+1))}))})},A={env:"production",english:"https://eoan.ie/files/cv/CVTECH-FEB2021V21.pdf",german:"https://eoan.ie/files/cv/CVTECH-JAN2021V21-DEUTSCH.pdf",ga_id:"G-L9TRRDTCD7"},L=function(e){var n=e.lang,t=Object(a.useRef)(null),o=Object(a.useState)(0),i=Object(w.a)(o,2),r=i[0],s=i[1];return Object(a.useLayoutEffect)((function(){t&&t.current&&s(t.current.offsetWidth)}),[t]),Object(c.jsx)("div",{ref:t,children:Object(c.jsx)(E,{width:r,pdf:A[n]})})},D=t(137),H=t(138),I=t(139),F=t(141),R=t(155),V=t(140),_=t(142),B=t(143),M=t(144),P=t(51);P.a.initialize(A.ga_id);var U=Object(u.f)((function(e){var n=e.history,t=o.a.useState(!0),i=Object(w.a)(t,2),r=i[0],s=i[1],l=o.a.useState(!1),d=Object(w.a)(l,2),u=d[0],b=d[1];return Object(a.useEffect)((function(){var e=function(){window.location.pathname.includes("/cv/")?(b(!0),s(window.location.pathname.includes("/english"))):b(!1)};e(),n.listen((function(){e(),P.a.pageview(window.location.pathname+window.location.search)}))}),[n]),Object(c.jsx)(D.a,{position:"sticky",children:Object(c.jsxs)(H.a,{style:{justifyContent:"space-between"},children:[Object(c.jsx)(I.a,{component:j.b,to:"/",children:Object(c.jsx)(V.a,{})}),Object(c.jsxs)("div",{children:[u&&Object(c.jsxs)(o.a.Fragment,{children:[Object(c.jsx)(F.a,{control:Object(c.jsx)(R.a,{onChange:function(e){e.target.checked?n.push("/cv/german"):n.push("/cv/english")},checked:!r}),label:r?"English \ud83c\uddee\ud83c\uddea":"Deutsch \ud83c\udde9\ud83c\uddea"}),Object(c.jsx)(I.a,{href:A[window.location.pathname.split("cv/")[1]],download:"eoanodea-cv-".concat(window.location.pathname.split("cv/")[1]),children:Object(c.jsx)(_.a,{})})]}),Object(c.jsx)(I.a,{href:"https://github.com/eoanodea/eoanie-cv-viewer",target:"_blank",children:Object(c.jsx)(B.a,{})}),Object(c.jsx)(I.a,{component:j.b,to:"/contact",children:Object(c.jsx)(M.a,{})})]})]})})})),z=t(149),G=t(158),J=t(150),$=t(151),q=t(152),K=t(145),Q=t(146),X=t(147),Y=t(148),Z=Object(v.a)((function(e){var n=e.palette;return Object(h.a)({root:{display:"flex",flexDirection:"column",justifyContent:"space-evenly"},listLinks:{color:n.primary.main}})}))((function(e){var n=e.classes,t=[{name:"Github",secondary:"@eoanodea",link:"https://github.com/eoanodea",icon:Object(c.jsx)(B.a,{})},{name:"Linkedin",secondary:"@eoanodea",link:"https://www.linkedin.com/in/eoanodea/",icon:Object(c.jsx)(K.a,{})},{name:"My Portfolio",secondary:"It's unfinished dont judge me",link:"https://about.eoan.ie",icon:Object(c.jsx)(Q.a,{})},{name:"Get in touch",secondary:"Send me an email",link:"https://about.eoan.ie#contact",icon:Object(c.jsx)(X.a,{})},{name:"WebSpace",secondary:"Hire me as a developer",link:"https://web-space.design",icon:Object(c.jsx)(Y.a,{})}];return Object(c.jsx)(f.a,{className:n.root,children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)(m.a,{variant:"h1",children:"Contact me"}),Object(c.jsx)("br",{}),Object(c.jsx)(z.a,{children:t.map((function(e,t){return Object(c.jsxs)(G.a,{className:n.listLinks,button:!0,component:J.a,href:e.link,target:"_blank",children:[Object(c.jsx)($.a,{children:e.icon}),Object(c.jsx)(q.a,{primary:e.name,secondary:e.secondary})]},t)}))})]})})})),ee=function(){return Object(c.jsxs)(o.a.Fragment,{children:[Object(c.jsx)(U,{}),Object(c.jsx)(b.a,{container:!0,spacing:8,justify:"center",style:{marginTop:"20px",marginBottom:"20px"},children:Object(c.jsx)(b.a,{item:!0,xs:11,children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",component:g}),Object(c.jsx)(u.a,{path:"/cv/:lang",render:function(e){return Object(c.jsx)(L,{lang:e.match.params.lang})}}),Object(c.jsx)(u.a,{path:"/contact",component:Z})]})})})]})},ne=t(67),te=t(157),ce=Object(ne.a)({palette:{primary:{main:"#2196f3"},secondary:{main:"#ffc400"}},typography:{fontFamily:["Roboto","sans-serif"].join(","),h1:{fontWeight:800,fontSize:"3.4rem"}},overrides:{MuiTextField:{root:{width:"100%",margin:"16px auto"}},MuiListItemText:{root:{display:"flex",flexDirection:"column-reverse"}}}}),ae=ce=Object(te.a)(ce),oe=function(){return Object(c.jsx)(j.a,{children:Object(c.jsx)(d.a,{theme:ae,children:Object(c.jsx)(ee,{})})})};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(oe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");s?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):l(n,e)}))}}()}},[[112,1,2]]]);
//# sourceMappingURL=main.27780a9c.chunk.js.map