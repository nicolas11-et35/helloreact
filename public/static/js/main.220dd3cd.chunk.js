(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(16),i=n.n(s),o=(n(23),n(17)),l=n(3),j=n(5),u=n.n(j),b=function(e){var t=e.title;return Object(a.jsx)("nav",{className:"justify-content-center navbar navbar-expand-lg navbar-dark bg-dark",children:Object(a.jsx)("a",{className:"navbar-brand",href:"/#",children:t})})},d=function(e){var t=e.id,n=e.initialTitle,r=e.initialText,s=e.removeNote,i=e.updateNote,o=Object(c.useState)(n),j=Object(l.a)(o,2),u=j[0],b=j[1],d=Object(c.useState)(r),x=Object(l.a)(d,2),f=x[0],h=x[1],m=Object(c.useState)(!1),O=Object(l.a)(m,2),v=O[0],p=O[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("input",{style:{backgroundColor:"transparent",border:"none",fontSize:"1.25rem",marginBottom:"0.75rem"},spellCheck:!1,disabled:!v,value:u,onChange:function(e){return b(e.target.value)}}),Object(a.jsx)("textarea",{rows:5,style:{backgroundColor:"transparent",border:"none"},spellCheck:!1,disabled:!v,value:f,onChange:function(e){return h(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn",hidden:v,onClick:function(){return p(!v)},children:Object(a.jsx)("i",{className:"text-secondary fa fa-pencil fa-lg"})}),Object(a.jsx)("button",{className:"btn",hidden:!v,onClick:function(){i(t,u,f),p(!v)},children:Object(a.jsx)("i",{className:"text-secondary fa fa-save fa-lg"})}),Object(a.jsx)("button",{className:"btn",onClick:function(){return s(t)},children:Object(a.jsx)("i",{className:"text-danger fa fa-trash fa-lg"})})]})})},x=function(e){var t=e.notes,n=e.removeNote,c=e.updateNote;return Object(a.jsx)("div",{className:"card-columns",children:t.map((function(e){return Object(a.jsx)(d,{id:e._id,initialTitle:e.title,initialText:e.text,removeNote:n,updateNote:c},e._id)}))})},f=function(e){var t=e.addNote,n=Object(c.useState)(""),r=Object(l.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),u=j[0],b=j[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:s,text:u}),i(""),b("")},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"T\ufffdtulo"}),Object(a.jsx)("input",{id:"title",className:"form-control",type:"text",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"text",children:"Texto"}),Object(a.jsx)("textarea",{id:"text",className:"form-control",value:u,rows:"4",onChange:function(e){return b(e.target.value)}})]}),Object(a.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Guardar"})]})},h=function(){return Object(a.jsxs)("div",{className:"text-center mb-3",children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h4",{className:"text-muted",children:"Hello React"}),Object(a.jsx)("a",{href:"https://github.com/santiagotrini/hello-react",children:Object(a.jsx)("i",{className:"fa fa-github fa-3x text-dark"})})]})},m=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){u.a.get("/api/notes").then((function(e){r(e.data.notes)}))}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)(b,{title:"Notas"}),Object(a.jsxs)("div",{className:"container mt-3",children:[Object(a.jsx)(f,{addNote:function(e){u.a.post("/api/notes",e).then((function(e){var t=[e.data].concat(Object(o.a)(n));r(t)}))}}),Object(a.jsx)("hr",{}),Object(a.jsx)(x,{notes:n,removeNote:function(e){u.a.delete("/api/notes/"+e).then((function(t){var a=n.filter((function(t){return t._id!==e}));r(a)}))},updateNote:function(e,t,a){var c={title:t,text:a};u.a.put("/api/notes/"+e,c).then((function(t){var a=n.map((function(t){return t.id===e?c:t}));r(a)}))}})]}),Object(a.jsx)(h,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.220dd3cd.chunk.js.map