(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(4),a=n.n(s),r=n(2),o=n(0),l=function(e){var t=e.value,n=e.index,i=e.children,s=Object(c.useState)(t===n?"":"hidden"),a=Object(r.a)(s,2),l=a[0],j=a[1];return Object(c.useEffect)((function(){"hidden"===l?t===n&&j(""):t!==n&&(j("slideout"),setTimeout((function(){j("hidden")}),1e3))}),[t,n,l]),Object(o.jsx)("div",{className:"tab ".concat(l),children:Object(o.jsx)("div",{className:"inner-tab-container",children:i})})},j=function(e){var t=e.tab,n=e.setTab,c=e.tabContents;return Object(o.jsx)("div",{className:"tab-bar",children:c.map((function(e,c){return Object(o.jsxs)("div",{className:"tab-button ".concat(t===c?"show":"hidden"),onClick:function(){return n(c)},children:[Object(o.jsx)("img",{className:"tab-icon",src:e.icon,alt:""}),e.title]},e.title)}))})},b=function(e){return Object(o.jsx)("div",{className:"tab-container",children:e.children})},d=function(e){var t=e.texts,n=e.interval,i=Object(c.useState)(0),s=Object(r.a)(i,2),a=s[0],l=s[1],j=Object(c.useState)(0),b=Object(r.a)(j,2),d=b[0],u=b[1],h=Object(c.useState)(0),m=Object(r.a)(h,2),O=m[0],g=m[1];return function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){d<t[a].length?u(d+1):O<10?g(O+1):(g(0),u(0),console.log(a<t.length-1?a+1:0),l(a<t.length-1?a+1:0))}),n),Object(o.jsx)("div",{className:"typewriter",children:Object(o.jsx)("h5",{children:t[a].substr(0,d)||" "})})},u=function(){return Object(o.jsxs)("div",{className:"info-container",children:[Object(o.jsx)("img",{className:"profile-pic",src:"/Josh.jpg",alt:""}),Object(o.jsx)(d,{texts:["Software Engineer","Full-Stack Dev","Three.js Developer","React.js Developer","C# Developer"],interval:300}),Object(o.jsx)("h2",{children:"Josh Bell"}),Object(o.jsxs)("div",{className:"linkContainer",children:[Object(o.jsx)("img",{className:"icon",src:"github.png",alt:"Github"}),Object(o.jsx)("a",{href:"https://github.com/jbbe",children:Object(o.jsx)("p",{children:"github.com/jbbe"})})]})]})},h=function(e){return Object(o.jsx)("div",{className:"copyright-container",children:"Copyright 2021 \xa9 Josh Bell"})},m=(n(10),function(e){return Object(o.jsx)("h3",{className:"tab-title",children:e.title})}),O=function(e){return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)(m,{title:"About Me"}),Object(o.jsx)("p",{children:"I am a full stack software engineer with a passion for solving intersting problems by designing and implementing software solutions across software stacks."}),Object(o.jsx)("p",{children:"Age ... 24"}),Object(o.jsx)("p",{children:"Residence ... Michigan"}),Object(o.jsx)("p",{children:"Email ... joshbbe@mail.com"})]})},g=function(e){var t=e.company,n=e.dates,c=e.location,i=e.bulletPoints,s=e.title;return Object(o.jsxs)("div",{className:"resume-entry",children:[Object(o.jsx)("div",{className:"dates",children:n}),Object(o.jsx)("h3",{children:t}),Object(o.jsx)("h5",{children:s}),Object(o.jsx)("h6",{children:c}),Object(o.jsx)("ul",{children:i.map((function(e){return Object(o.jsx)("li",{children:e},e)}))})]})},p=[{name:"Typescript",icon:"typescript.png"},{name:"React",icon:"react.png"},{name:"oCaml",icon:"ocaml.jpg"},{name:"node.js",icon:"nodejs.png"},{name:"C#",icon:"csharp.jpg"},{name:"Azure DevOps",icon:"azure.png"},{name:"",icon:""},{name:"three.js",icon:"threejs.jpg"}],x=function(){return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)("div",{className:"resume-title",children:Object(o.jsx)("h3",{children:"Skills"})}),Object(o.jsx)("div",{className:"techIconContainer",children:p.map((function(e){return Object(o.jsx)("img",{className:"techIcon",alt:e.name,src:e.icon,title:e.name},e.name)}))}),Object(o.jsxs)("div",{className:"resume-title",children:[Object(o.jsx)("img",{src:"graduation-hat.svg",alt:""}),Object(o.jsx)("h3",{children:"Education"})]}),Object(o.jsx)(g,{company:"University of Michigan",title:"B.S. in Computer Science",location:"Ann Arbor, MI",dates:"September 2015 - May 2020",bulletPoints:[]}),Object(o.jsxs)("div",{className:"resume-title",children:[Object(o.jsx)("img",{src:"suitcase.svg",alt:""}),Object(o.jsx)("h3",{children:"Work Experience"})]}),Object(o.jsx)(g,{company:"Th3rdcoast Digital Solutions",title:"Developer",location:"Grand Haven, MI",dates:"June 2020 - Present",bulletPoints:["Developed an embeddable augmented reality model viewer for customer storefronts with Typescript and the WebXR API.","Implemented the front end of a CMS for 3D models including an editor using React with Typescript and some sections of the backend using Node.js and ASP.NET Core.","Reworked the front end of a React Electron app for managing neurometric data.","Set up and managed CI/CD for multiple projects using the Azure ecosystem."]}),Object(o.jsx)(g,{company:"University of Michigan, CAEN",title:"Help Desk Consultant & Student Manager",location:"Ann Arbor, MI",dates:"July 2018 - April 2020",bulletPoints:["Developed a desktop application for information gathering during issue reporting.","Provided help desk support by answering  questions, escalating issues, managing accounts, testing software, and writing documentation.","Trained and managed student employees beginning in May 2019.","Processed and analyzed system usage data with Python."]})]})},f=function(e){return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)(m,{title:"Contact Me"}),Object(o.jsxs)("div",{className:"contactEntry",children:[Object(o.jsx)("img",{className:"icon",src:"github.png",alt:"Github"}),Object(o.jsx)("a",{href:"https://github.com/jbbe",children:Object(o.jsx)("p",{children:"github.com/jbbe"})})]}),Object(o.jsxs)("div",{className:"contactEntry",children:[Object(o.jsx)("img",{className:"icon",src:"at.png",alt:"Email"}),Object(o.jsx)("a",{href:"joshbbe@mail.com",children:Object(o.jsx)("p",{children:"joshbbe@mail.com"})})]})]})};var v=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(o.jsxs)("div",{className:"app-container",children:[Object(o.jsxs)("div",{className:"main-container",children:[Object(o.jsx)(j,{tab:n,setTab:i,tabContents:[{title:"About",icon:"/user.svg"},{title:"Resume",icon:"/document.svg"},{title:"Contact",icon:"/email.svg"}]}),Object(o.jsx)(u,{}),Object(o.jsxs)(b,{children:[Object(o.jsx)(l,{value:n,index:0,children:Object(o.jsx)(O,{})}),Object(o.jsx)(l,{value:n,index:1,children:Object(o.jsx)(x,{})}),Object(o.jsx)(l,{value:n,index:2,children:Object(o.jsx)(f,{})})]})]}),Object(o.jsx)(h,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),N()}},[[11,1,2]]]);
//# sourceMappingURL=main.d4be1856.chunk.js.map