(this.webpackJsonpmoments=this.webpackJsonpmoments||[]).push([[0],{63:function(e,t,r){e.exports={Avatar:"Avatar_Avatar__196lW"}},68:function(e,t,r){},69:function(e,t,r){},99:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(28),s=r.n(a),i=(r(68),r(69),r(7)),o=r(16),j=r(24),l=r(20),u=r(17),b=r(35),d=r(49),p=r(18),h=r(48),x=r(42),O=r(6),v=r(9),f=r.n(v);f.a.defaults.baseURL="api/",f.a.defaults.headers.post["Content-Type"]="multipart/form-data",f.a.defaults.withCredentials=!0;var m=f.a.create(),g=f.a.create(),w=r(1),y=function(){var e,t,r,c=Object(n.useState)({}),a=Object(u.a)(c,2),s=a[0],v=a[1],f=Object(O.f)(),g=Object(n.useState)({title:"",description:"",priority:""}),y=Object(u.a)(g,2),k=y[0],C=y[1],I=k.title,P=k.description,S=k.priority,T=function(e){C(Object(l.a)(Object(l.a)({},k),{},Object(j.a)({},e.target.name,e.target.value)))},L=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var r,n,c,a,s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(r=new FormData).append("title",I),r.append("description",P),r.append("priority",S),e.prev=5,e.next=8,m.post("/tickets/",r);case 8:n=e.sent,c=n.data,f.push("/tickets/".concat(c.id)),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0),401!==(null===(a=e.t0.response)||void 0===a?void 0:a.status)&&v(null===(s=e.t0.response)||void 0===s?void 0:s.data);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(d.a.Title,{children:"Create a Support Ticket"}),Object(w.jsxs)(p.a,{onSubmit:L,children:[Object(w.jsxs)(p.a.Group,{children:[Object(w.jsx)(p.a.Label,{children:"Ticket Title:"}),Object(w.jsx)(p.a.Control,{type:"text",placeholder:"Help with abc..",name:"title",value:I,onChange:T})]}),null===s||void 0===s||null===(e=s.title)||void 0===e?void 0:e.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsxs)(p.a.Group,{children:[Object(w.jsx)(p.a.Label,{children:"Priority:"}),Object(w.jsxs)(p.a.Control,{as:"select",name:"priority",value:S,onChange:T,children:[Object(w.jsx)("option",{children:"Low"}),Object(w.jsx)("option",{children:"Medium"}),Object(w.jsx)("option",{children:"High"})]})]}),null===s||void 0===s||null===(t=s.priority)||void 0===t?void 0:t.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsxs)(p.a.Group,{children:[Object(w.jsx)(p.a.Label,{children:"Description:"}),Object(w.jsx)(p.a.Control,{as:"textarea",rows:3,placeholder:"Hello Support, could you please help abc..",name:"description",value:P,onChange:T})]}),null===s||void 0===s||null===(r=s.description)||void 0===r?void 0:r.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsx)(h.a,{variant:"primary",onClick:function(){return f.goBack()},children:"Cancel"}),Object(w.jsx)(h.a,{variant:"primary",type:"submit",children:"Create Ticket"})]})]})})})},k=r(101),C=r(60),I=r(104),P=function(e){return Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{children:Object(w.jsxs)(d.a,{children:[Object(w.jsxs)(k.a,{children:[Object(w.jsxs)(C.a,{children:[Object(w.jsx)(d.a.Title,{children:e.title}),Object(w.jsx)(d.a.Text,{children:e.description})]}),Object(w.jsx)(C.a,{children:Object(w.jsxs)(I.a,{children:[Object(w.jsxs)(I.a.Item,{children:[Object(w.jsx)("i",{class:"fa-regular fa-circle-check"})," ",e.status]}),Object(w.jsxs)(I.a.Item,{children:[Object(w.jsx)("i",{class:"fa-regular fa-eye"})," ",e.visibility]}),Object(w.jsxs)(I.a.Item,{children:[Object(w.jsx)("i",{class:"fa-solid fa-bullhorn"})," ",e.priority]}),Object(w.jsxs)(I.a.Item,{children:[Object(w.jsx)("i",{class:"fa-regular fa-address-book"})," ",e.requestor]}),Object(w.jsxs)(I.a.Item,{children:[Object(w.jsx)("i",{class:"fa-regular fa-user"})," ",e.supporter]})]})})]}),Object(w.jsxs)(d.a.Body,{children:[Object(w.jsx)(d.a.Text,{children:"    "}),Object(w.jsx)(h.a,{variant:"primary",children:"Go somewhere"})]})]})})})},S=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(p.a,{children:Object(w.jsxs)(k.a,{children:[Object(w.jsxs)(C.a,{children:[Object(w.jsx)("p",{children:"Status:"}),Object(w.jsxs)(p.a.Group,{controlId:"formBasicCheckbox",children:[Object(w.jsx)(p.a.Check,{type:"checkbox",label:"New Request"}),Object(w.jsx)(p.a.Check,{type:"checkbox",label:"In Progress"}),Object(w.jsx)(p.a.Check,{type:"checkbox",label:"Completed"})]})]}),Object(w.jsxs)(C.a,{children:[Object(w.jsx)("p",{children:"Visbility:"}),Object(w.jsxs)(p.a.Group,{controlId:"formBasicCheckbox2",children:[Object(w.jsx)(p.a.Check,{type:"checkbox",label:"Public"}),Object(w.jsx)(p.a.Check,{type:"checkbox",label:"Private"})]})]}),Object(w.jsxs)(C.a,{children:[Object(w.jsx)("p",{children:"Priority:"}),Object(w.jsxs)(p.a.Group,{controlId:"formBasicCheckbox3",children:[Object(w.jsx)(p.a.Check,{type:"checkbox",label:"Low"}),Object(w.jsx)(p.a.Check,{type:"checkbox",label:"Medium"}),Object(w.jsx)(p.a.Check,{type:"checkbox",label:"High"})]})]}),Object(w.jsx)(C.a,{children:Object(w.jsx)(h.a,{variant:"primary",type:"submit",children:"Filter"})})]})}),Object(w.jsx)(P,{title:"Help with Issue",description:"This is some descriptive text about the issue",status:"In Progress",visibility:"Public",priority:"High",requestor:"ABC Tech",supporter:"Callum Dennis"}),Object(w.jsx)(P,{title:"Help with Issue",description:"This is some descriptive text about the issue",status:"In Progress",visibility:"Public",priority:"High",requestor:"ABC Tech",supporter:"Callum Dennis"}),Object(w.jsx)(P,{title:"Help with Issue",description:"This is some descriptive text about the issue",status:"In Progress",visibility:"Public",priority:"High",requestor:"ABC Tech",supporter:"Callum Dennis"}),Object(w.jsx)(P,{title:"Help with Issue",description:"This is some descriptive text about the issue",status:"In Progress",visibility:"Public",priority:"High",requestor:"ABC Tech",supporter:"Callum Dennis"})]})},T=r(102),L=r(103),H=r(11),B=Object(n.createContext)(),G=Object(n.createContext)(),N=function(){return Object(n.useContext)(G)},D=function(e){var t=e.children,r=Object(n.useState)(null),c=Object(u.a)(r,2),a=c[0],s=c[1],j=Object(O.f)(),l=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.get("dj-rest-auth/user/");case 3:t=e.sent,r=t.data,s(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),Object(n.useMemo)((function(){m.interceptors.request.use(function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("/dj-rest-auth/token/refresh/");case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),s((function(e){return e&&j.push("/signin"),null})),e.abrupt("return",t);case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),g.interceptors.response.use((function(e){return e}),function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==(null===(r=t.response)||void 0===r?void 0:r.status)){e.next=10;break}return e.prev=1,e.next=4,f.a.post("/dj-rest-auth/token/refresh/");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),s((function(e){return e&&j.push("/signin"),null}));case 9:return e.abrupt("return",f()(t.config));case 10:return e.abrupt("return",Promise.reject(t));case 11:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}())}),[j]),Object(w.jsx)(B.Provider,{value:a,children:Object(w.jsx)(G.Provider,{value:s,children:t})})},A=r(63),_=r.n(A),F=function(e){var t=e.src,r=e.height,n=void 0===r?45:r,c=e.text;return Object(w.jsxs)("span",{children:[Object(w.jsx)("img",{className:_.a.Avatar,src:t,height:n,width:n,alt:"avatar"}),c]})},q=function(){var e=Object(n.useContext)(B),t=N(),r=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("dj-rest-auth/logout/");case 3:t(null),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),c=Object(w.jsx)(H.c,{to:"/create-ticket",children:"Create Ticket"}),a=Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(H.c,{to:"/signin",children:"Sign In"}),Object(w.jsx)(H.c,{to:"/signup",children:"Sign Up"})]}),s=Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(H.c,{to:"/",onClick:r,children:"Log Out"}),Object(w.jsx)(H.c,{to:"/profiles/".concat(null===e||void 0===e?void 0:e.profile_id),children:Object(w.jsx)(F,{src:null===e||void 0===e?void 0:e.profile_image,text:"My Profile",height:40})})]});return Object(w.jsx)("div",{children:Object(w.jsxs)(T.a,{bg:"light",expand:"lg",children:[Object(w.jsx)(H.c,{exact:!0,to:"/",children:Object(w.jsx)(T.a.Brand,{href:"#home",children:"SupportSync"})}),Object(w.jsx)(T.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsx)(T.a.Collapse,{id:"basic-navbar-nav",children:Object(w.jsxs)(L.a,{className:"mr-auto",children:[Object(w.jsx)(H.c,{to:"/tickets",children:"View Tickets"}),e&&c,e?s:a]})})]})})};var U=function(){var e,t,r,c=N(),a=Object(n.useState)({username:"",password:""}),s=Object(u.a)(a,2),d=s[0],v=s[1],m=d.username,g=d.password,y=Object(n.useState)({}),I=Object(u.a)(y,2),P=I[0],S=I[1],T=Object(O.f)(),L=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var r,n,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f.a.post("/dj-rest-auth/login/",d);case 4:r=e.sent,n=r.data,c(n.user),T.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),S(null===(a=e.t0.response)||void 0===a?void 0:a.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),B=function(e){v(Object(l.a)(Object(l.a)({},d),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(w.jsx)(k.a,{children:Object(w.jsxs)(C.a,{children:[Object(w.jsxs)(b.a,{children:[Object(w.jsx)("h1",{children:"Sign In"}),Object(w.jsxs)(p.a,{onSubmit:L,children:[Object(w.jsxs)(p.a.Group,{controlId:"username",children:[Object(w.jsx)(p.a.Label,{className:"d-none",children:"Username"}),Object(w.jsx)(p.a.Control,{type:"text",placeholder:"Username",name:"username",value:m,onChange:B})]}),null===(e=P.username)||void 0===e?void 0:e.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsxs)(p.a.Group,{controlId:"password",children:[Object(w.jsx)(p.a.Label,{className:"d-none",children:"Password"}),Object(w.jsx)(p.a.Control,{type:"password",placeholder:"Password",name:"password",value:g,onChange:B})]}),null===(t=P.password)||void 0===t?void 0:t.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsx)(h.a,{type:"submit",children:"Sign in"}),null===(r=P.non_field_errors)||void 0===r?void 0:r.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",className:"mt-3",children:e},t)}))]})]}),Object(w.jsx)(b.a,{children:Object(w.jsxs)(H.b,{to:"/signup",children:["Don't have an account? ",Object(w.jsx)("span",{children:"Sign up now!"})]})})]})})},M=function(){var e,t,r,c,a=Object(n.useState)({username:"",password1:"",password2:""}),s=Object(u.a)(a,2),d=s[0],v=s[1],m=d.username,g=d.password1,y=d.password2,I=Object(n.useState)({}),P=Object(u.a)(I,2),S=P[0],T=P[1],L=Object(O.f)(),B=function(e){v(Object(l.a)(Object(l.a)({},d),{},Object(j.a)({},e.target.name,e.target.value)))},G=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f.a.post("/dj-rest-auth/registration/",d);case 4:L.push("/signin"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),T(null===(r=e.t0.response)||void 0===r?void 0:r.data);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)(k.a,{children:Object(w.jsxs)(C.a,{children:[Object(w.jsxs)(b.a,{children:[Object(w.jsx)("h1",{children:"Sign Up"}),Object(w.jsxs)(p.a,{onSubmit:G,children:[Object(w.jsxs)(p.a.Group,{controlId:"username",children:[Object(w.jsx)(p.a.Label,{className:"d-none",children:"username"}),Object(w.jsx)(p.a.Control,{type:"text",placeholder:"Username",name:"username",value:m,onChange:B})]}),null===(e=S.username)||void 0===e?void 0:e.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsxs)(p.a.Group,{controlId:"password1",children:[Object(w.jsx)(p.a.Label,{className:"d-none",children:"Password"}),Object(w.jsx)(p.a.Control,{type:"password",placeholder:"Password",name:"password1",value:g,onChange:B})]}),null===(t=S.password1)||void 0===t?void 0:t.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsxs)(p.a.Group,{controlId:"password2",children:[Object(w.jsx)(p.a.Label,{className:"d-none",children:"Confirm password"}),Object(w.jsx)(p.a.Control,{type:"password",placeholder:"Confirm password",name:"password2",value:y,onChange:B})]}),null===(r=S.password2)||void 0===r?void 0:r.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsx)(h.a,{type:"submit",children:"Sign up"}),null===(c=S.non_field_errors)||void 0===c?void 0:c.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",className:"mt-3",children:e},t)}))]})]}),Object(w.jsx)(b.a,{className:"mt-3",children:Object(w.jsxs)(H.b,{to:"/signin",children:["Already have an account? ",Object(w.jsx)("span",{children:"Sign in"})]})})]})})};var E=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(q,{}),Object(w.jsx)(b.a,{children:Object(w.jsxs)(O.c,{children:[Object(w.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(w.jsx)("h1",{children:"Home"})}}),Object(w.jsx)(O.a,{exact:!0,path:"/tickets",render:function(){return Object(w.jsx)(S,{})}}),Object(w.jsx)(O.a,{exact:!0,path:"/create-ticket",render:function(){return Object(w.jsx)(y,{})}}),Object(w.jsx)(O.a,{exact:!0,path:"/signin",render:function(){return Object(w.jsx)(U,{})}}),Object(w.jsx)(O.a,{exact:!0,path:"/signup",render:function(){return Object(w.jsx)(M,{})}}),Object(w.jsx)(O.a,{render:function(){return Object(w.jsx)("p",{children:"Page not found"})}})]})})]})},J=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,105)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(H.a,{children:Object(w.jsx)(D,{children:Object(w.jsx)(E,{})})})}),document.getElementById("root")),J()}},[[99,1,2]]]);
//# sourceMappingURL=main.82c3997b.chunk.js.map