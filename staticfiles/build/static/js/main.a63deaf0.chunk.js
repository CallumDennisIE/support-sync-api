(this.webpackJsonpmoments=this.webpackJsonpmoments||[]).push([[0],{60:function(e,t,r){e.exports={Avatar:"Avatar_Avatar__196lW"}},67:function(e,t,r){},68:function(e,t,r){},98:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(28),s=r.n(a),i=(r(67),r(68),r(7)),o=r(16),j=r(24),l=r(20),u=r(17),b=r(35),d=r(47),p=r(18),h=r(59),x=r(6),O=r(9),v=r.n(O);v.a.defaults.baseURL="api/",v.a.defaults.headers.post["Content-Type"]="multipart/form-data",v.a.defaults.withCredentials=!0;var f=v.a.create(),m=v.a.create(),g=r(1),w=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),r=(t[0],t[1]),c=Object(x.f)(),a=Object(n.useState)({title:"",description:"",priority:""}),s=Object(u.a)(a,2),O=s[0],v=s[1],m=O.title,w=O.description,C=O.priority,k=function(e){v(Object(l.a)(Object(l.a)({},O),{},Object(j.a)({},e.target.name,e.target.value)))},y=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n,a,s,o,j;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("title",m),n.append("description",w),e.prev=4,e.next=7,f.post("/tickets/",n);case 7:a=e.sent,s=a.data,c.push("/tickets/".concat(s.id)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0),401!==(null===(o=e.t0.response)||void 0===o?void 0:o.status)&&r(null===(j=e.t0.response)||void 0===j?void 0:j.data);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{children:Object(g.jsx)(b.a,{children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(d.a.Title,{children:"Create a Support Ticket"}),Object(g.jsxs)(p.a,{onSubmit:y,children:[Object(g.jsxs)(p.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(g.jsx)(p.a.Label,{children:"Ticket Title:"}),Object(g.jsx)(p.a.Control,{type:"text",placeholder:"Help with abc..",name:"title",value:m,onChange:k})]}),Object(g.jsxs)(p.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(g.jsx)(p.a.Label,{children:"Priority:"}),Object(g.jsxs)(p.a.Control,{as:"select",name:"priority",value:C,onChange:k,children:[Object(g.jsx)("option",{children:"Low"}),Object(g.jsx)("option",{children:"Medium"}),Object(g.jsx)("option",{children:"High"})]})]}),Object(g.jsxs)(p.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(g.jsx)(p.a.Label,{children:"Description:"}),Object(g.jsx)(p.a.Control,{as:"textarea",rows:3,placeholder:"Hello Support, could you please help abc..",name:"description",value:w,onChange:k})]}),Object(g.jsx)(h.a,{variant:"primary",type:"submit",children:"Create Ticket"})]})]})})})},C=r(100),k=r(58),y=r(104),I=function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(b.a,{children:Object(g.jsxs)(d.a,{children:[Object(g.jsxs)(C.a,{children:[Object(g.jsxs)(k.a,{children:[Object(g.jsx)(d.a.Title,{children:e.title}),Object(g.jsx)(d.a.Text,{children:e.description})]}),Object(g.jsx)(k.a,{children:Object(g.jsxs)(y.a,{children:[Object(g.jsxs)(y.a.Item,{children:[Object(g.jsx)("i",{class:"fa-regular fa-circle-check"})," ",e.status]}),Object(g.jsxs)(y.a.Item,{children:[Object(g.jsx)("i",{class:"fa-regular fa-eye"})," ",e.visibility]}),Object(g.jsxs)(y.a.Item,{children:[Object(g.jsx)("i",{class:"fa-solid fa-bullhorn"})," ",e.priority]}),Object(g.jsxs)(y.a.Item,{children:[Object(g.jsx)("i",{class:"fa-regular fa-address-book"})," ",e.requestor]}),Object(g.jsxs)(y.a.Item,{children:[Object(g.jsx)("i",{class:"fa-regular fa-user"})," ",e.supporter]})]})})]}),Object(g.jsxs)(d.a.Body,{children:[Object(g.jsx)(d.a.Text,{children:"    "}),Object(g.jsx)(h.a,{variant:"primary",children:"Go somewhere"})]})]})})})},S=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(p.a,{children:Object(g.jsxs)(C.a,{children:[Object(g.jsxs)(k.a,{children:[Object(g.jsx)("p",{children:"Status:"}),Object(g.jsxs)(p.a.Group,{controlId:"formBasicCheckbox",children:[Object(g.jsx)(p.a.Check,{type:"checkbox",label:"New Request"}),Object(g.jsx)(p.a.Check,{type:"checkbox",label:"In Progress"}),Object(g.jsx)(p.a.Check,{type:"checkbox",label:"Completed"})]})]}),Object(g.jsxs)(k.a,{children:[Object(g.jsx)("p",{children:"Visbility:"}),Object(g.jsxs)(p.a.Group,{controlId:"formBasicCheckbox2",children:[Object(g.jsx)(p.a.Check,{type:"checkbox",label:"Public"}),Object(g.jsx)(p.a.Check,{type:"checkbox",label:"Private"})]})]}),Object(g.jsxs)(k.a,{children:[Object(g.jsx)("p",{children:"Priority:"}),Object(g.jsxs)(p.a.Group,{controlId:"formBasicCheckbox3",children:[Object(g.jsx)(p.a.Check,{type:"checkbox",label:"Low"}),Object(g.jsx)(p.a.Check,{type:"checkbox",label:"Medium"}),Object(g.jsx)(p.a.Check,{type:"checkbox",label:"High"})]})]}),Object(g.jsx)(k.a,{children:Object(g.jsx)(h.a,{variant:"primary",type:"submit",children:"Filter"})})]})}),Object(g.jsx)(I,{title:"Help with Issue",description:"This is some descriptive text about the issue",status:"In Progress",visibility:"Public",priority:"High",requestor:"ABC Tech",supporter:"Callum Dennis"}),Object(g.jsx)(I,{title:"Help with Issue",description:"This is some descriptive text about the issue",status:"In Progress",visibility:"Public",priority:"High",requestor:"ABC Tech",supporter:"Callum Dennis"}),Object(g.jsx)(I,{title:"Help with Issue",description:"This is some descriptive text about the issue",status:"In Progress",visibility:"Public",priority:"High",requestor:"ABC Tech",supporter:"Callum Dennis"}),Object(g.jsx)(I,{title:"Help with Issue",description:"This is some descriptive text about the issue",status:"In Progress",visibility:"Public",priority:"High",requestor:"ABC Tech",supporter:"Callum Dennis"})]})},P=r(101),T=r(102),L=r(11),H=Object(n.createContext)(),G=Object(n.createContext)(),N=function(){return Object(n.useContext)(G)},B=function(e){var t=e.children,r=Object(n.useState)(null),c=Object(u.a)(r,2),a=c[0],s=c[1],j=Object(x.f)(),l=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("dj-rest-auth/user/");case 3:t=e.sent,r=t.data,s(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),Object(n.useMemo)((function(){f.interceptors.request.use(function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("/dj-rest-auth/token/refresh/");case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),s((function(e){return e&&j.push("/signin"),null})),e.abrupt("return",t);case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),m.interceptors.response.use((function(e){return e}),function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==(null===(r=t.response)||void 0===r?void 0:r.status)){e.next=10;break}return e.prev=1,e.next=4,v.a.post("/dj-rest-auth/token/refresh/");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),s((function(e){return e&&j.push("/signin"),null}));case 9:return e.abrupt("return",v()(t.config));case 10:return e.abrupt("return",Promise.reject(t));case 11:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}())}),[j]),Object(g.jsx)(H.Provider,{value:a,children:Object(g.jsx)(G.Provider,{value:s,children:t})})},D=r(60),F=r.n(D),A=function(e){var t=e.src,r=e.height,n=void 0===r?45:r,c=e.text;return Object(g.jsxs)("span",{children:[Object(g.jsx)("img",{className:F.a.Avatar,src:t,height:n,width:n,alt:"avatar"}),c]})},_=function(){var e=Object(n.useContext)(H),t=N(),r=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("dj-rest-auth/logout/");case 3:t(null),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),c=Object(g.jsx)(L.c,{to:"/create-ticket",children:"Create Ticket"}),a=Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(L.c,{to:"/signin",children:"Sign In"}),Object(g.jsx)(L.c,{to:"/signup",children:"Sign Up"})]}),s=Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(L.c,{to:"/",onClick:r,children:"Log Out"}),Object(g.jsx)(L.c,{to:"/profiles/".concat(null===e||void 0===e?void 0:e.profile_id),children:Object(g.jsx)(A,{src:null===e||void 0===e?void 0:e.profile_image,text:"My Profile",height:40})})]});return Object(g.jsx)("div",{children:Object(g.jsxs)(P.a,{bg:"light",expand:"lg",children:[Object(g.jsx)(L.c,{exact:!0,to:"/",children:Object(g.jsx)(P.a.Brand,{href:"#home",children:"SupportSync"})}),Object(g.jsx)(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(P.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(T.a,{className:"mr-auto",children:[Object(g.jsx)(L.c,{to:"/tickets",children:"View Tickets"}),e&&c,e?s:a]})})]})})},q=r(103);var U=function(){var e,t,r,c=N(),a=Object(n.useState)({username:"",password:""}),s=Object(u.a)(a,2),d=s[0],O=s[1],f=d.username,m=d.password,w=Object(n.useState)({}),y=Object(u.a)(w,2),I=y[0],S=y[1],P=Object(x.f)(),T=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var r,n,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v.a.post("/dj-rest-auth/login/",d);case 4:r=e.sent,n=r.data,c(n.user),P.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),S(null===(a=e.t0.response)||void 0===a?void 0:a.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),H=function(e){O(Object(l.a)(Object(l.a)({},d),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(g.jsx)(C.a,{children:Object(g.jsxs)(k.a,{children:[Object(g.jsxs)(b.a,{children:[Object(g.jsx)("h1",{children:"Sign In"}),Object(g.jsxs)(p.a,{onSubmit:T,children:[Object(g.jsxs)(p.a.Group,{controlId:"username",children:[Object(g.jsx)(p.a.Label,{className:"d-none",children:"Username"}),Object(g.jsx)(p.a.Control,{type:"text",placeholder:"Username",name:"username",value:f,onChange:H})]}),null===(e=I.username)||void 0===e?void 0:e.map((function(e,t){return Object(g.jsx)(q.a,{variant:"warning",children:e},t)})),Object(g.jsxs)(p.a.Group,{controlId:"password",children:[Object(g.jsx)(p.a.Label,{className:"d-none",children:"Password"}),Object(g.jsx)(p.a.Control,{type:"password",placeholder:"Password",name:"password",value:m,onChange:H})]}),null===(t=I.password)||void 0===t?void 0:t.map((function(e,t){return Object(g.jsx)(q.a,{variant:"warning",children:e},t)})),Object(g.jsx)(h.a,{type:"submit",children:"Sign in"}),null===(r=I.non_field_errors)||void 0===r?void 0:r.map((function(e,t){return Object(g.jsx)(q.a,{variant:"warning",className:"mt-3",children:e},t)}))]})]}),Object(g.jsx)(b.a,{children:Object(g.jsxs)(L.b,{to:"/signup",children:["Don't have an account? ",Object(g.jsx)("span",{children:"Sign up now!"})]})})]})})},M=function(){var e,t,r,c,a=Object(n.useState)({username:"",password1:"",password2:""}),s=Object(u.a)(a,2),d=s[0],O=s[1],f=d.username,m=d.password1,w=d.password2,y=Object(n.useState)({}),I=Object(u.a)(y,2),S=I[0],P=I[1],T=Object(x.f)(),H=function(e){O(Object(l.a)(Object(l.a)({},d),{},Object(j.a)({},e.target.name,e.target.value)))},G=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v.a.post("/dj-rest-auth/registration/",d);case 4:T.push("/signin"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),P(null===(r=e.t0.response)||void 0===r?void 0:r.data);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(C.a,{children:Object(g.jsxs)(k.a,{children:[Object(g.jsxs)(b.a,{children:[Object(g.jsx)("h1",{children:"Sign Up"}),Object(g.jsxs)(p.a,{onSubmit:G,children:[Object(g.jsxs)(p.a.Group,{controlId:"username",children:[Object(g.jsx)(p.a.Label,{className:"d-none",children:"username"}),Object(g.jsx)(p.a.Control,{type:"text",placeholder:"Username",name:"username",value:f,onChange:H})]}),null===(e=S.username)||void 0===e?void 0:e.map((function(e,t){return Object(g.jsx)(q.a,{variant:"warning",children:e},t)})),Object(g.jsxs)(p.a.Group,{controlId:"password1",children:[Object(g.jsx)(p.a.Label,{className:"d-none",children:"Password"}),Object(g.jsx)(p.a.Control,{type:"password",placeholder:"Password",name:"password1",value:m,onChange:H})]}),null===(t=S.password1)||void 0===t?void 0:t.map((function(e,t){return Object(g.jsx)(q.a,{variant:"warning",children:e},t)})),Object(g.jsxs)(p.a.Group,{controlId:"password2",children:[Object(g.jsx)(p.a.Label,{className:"d-none",children:"Confirm password"}),Object(g.jsx)(p.a.Control,{type:"password",placeholder:"Confirm password",name:"password2",value:w,onChange:H})]}),null===(r=S.password2)||void 0===r?void 0:r.map((function(e,t){return Object(g.jsx)(q.a,{variant:"warning",children:e},t)})),Object(g.jsx)(h.a,{type:"submit",children:"Sign up"}),null===(c=S.non_field_errors)||void 0===c?void 0:c.map((function(e,t){return Object(g.jsx)(q.a,{variant:"warning",className:"mt-3",children:e},t)}))]})]}),Object(g.jsx)(b.a,{className:"mt-3",children:Object(g.jsxs)(L.b,{to:"/signin",children:["Already have an account? ",Object(g.jsx)("span",{children:"Sign in"})]})})]})})};var E=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(_,{}),Object(g.jsx)(b.a,{children:Object(g.jsxs)(x.c,{children:[Object(g.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(g.jsx)("h1",{children:"Home"})}}),Object(g.jsx)(x.a,{exact:!0,path:"/tickets",render:function(){return Object(g.jsx)(S,{})}}),Object(g.jsx)(x.a,{exact:!0,path:"/create-ticket",render:function(){return Object(g.jsx)(w,{})}}),Object(g.jsx)(x.a,{exact:!0,path:"/signin",render:function(){return Object(g.jsx)(U,{})}}),Object(g.jsx)(x.a,{exact:!0,path:"/signup",render:function(){return Object(g.jsx)(M,{})}}),Object(g.jsx)(x.a,{render:function(){return Object(g.jsx)("p",{children:"Page not found"})}})]})})]})},J=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,105)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(L.a,{children:Object(g.jsx)(B,{children:Object(g.jsx)(E,{})})})}),document.getElementById("root")),J()}},[[98,1,2]]]);
//# sourceMappingURL=main.a63deaf0.chunk.js.map