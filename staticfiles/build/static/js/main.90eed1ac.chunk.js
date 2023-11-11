(this.webpackJsonpmoments=this.webpackJsonpmoments||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(31),s=n.n(a),i=(n(84),n(85),n(7)),j=n(10),o=n(34),l=n(12),u=n(14),d=n(32),b=n(26),O=n(24),h=n(27),x=n(58),p=n(8),f=n(16),v=n.n(f);v.a.defaults.baseURL="/api",v.a.defaults.headers.post["Content-Type"]="multipart/form-data",v.a.defaults.withCredentials=!0;var m=v.a.create(),g=v.a.create(),w=n(1),k=function(){var e,t,n,r=Object(c.useState)({}),a=Object(u.a)(r,2),s=a[0],f=a[1],v=Object(p.useHistory)(),g=Object(c.useState)({title:"",description:"",priority:""}),k=Object(u.a)(g,2),y=k[0],C=k[1],S=y.title,_=y.description,I=y.priority,N=function(e){C(Object(l.a)(Object(l.a)({},y),{},Object(o.a)({},e.target.name,e.target.value)))},T=function(){var e=Object(j.a)(Object(i.a)().mark((function e(t){var n,c,r,a,s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("title",S),n.append("description",_),n.append("priority",I.toLowerCase()),e.prev=5,e.next=8,m.post("/tickets/",n);case 8:c=e.sent,r=c.data,v.push("/tickets/".concat(r.id)),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0),401!==(null===(a=e.t0.response)||void 0===a?void 0:a.status)&&f(null===(s=e.t0.response)||void 0===s?void 0:s.data);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{children:Object(w.jsx)(d.a,{children:Object(w.jsxs)(b.a,{children:[Object(w.jsx)(b.a.Title,{children:"Create a Support Ticket"}),Object(w.jsxs)(O.a,{onSubmit:T,children:[Object(w.jsxs)(O.a.Group,{children:[Object(w.jsx)(O.a.Label,{children:"Ticket Title:"}),Object(w.jsx)(O.a.Control,{type:"text",placeholder:"Help with abc..",name:"title",value:S,onChange:N})]}),null===s||void 0===s||null===(e=s.title)||void 0===e?void 0:e.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsxs)(O.a.Group,{children:[Object(w.jsx)(O.a.Label,{children:"Priority:"}),Object(w.jsxs)(O.a.Control,{as:"select",name:"priority",value:I,onChange:N,children:[Object(w.jsx)("option",{children:"Low"}),Object(w.jsx)("option",{children:"Medium"}),Object(w.jsx)("option",{children:"High"})]})]}),null===s||void 0===s||null===(t=s.priority)||void 0===t?void 0:t.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsxs)(O.a.Group,{children:[Object(w.jsx)(O.a.Label,{children:"Description:"}),Object(w.jsx)(O.a.Control,{as:"textarea",rows:3,placeholder:"Hello Support, could you please help abc..",name:"description",value:_,onChange:N})]}),null===s||void 0===s||null===(n=s.description)||void 0===n?void 0:n.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsx)(h.a,{variant:"primary",onClick:function(){return v.goBack()},children:"Cancel"}),Object(w.jsx)(h.a,{variant:"primary",type:"submit",children:"Create Ticket"})]})]})})})},y=n(74),C=n(18),S=n(9),_=function(e){return Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{children:Object(w.jsx)(C.a,{children:Object(w.jsx)(S.a,{children:Object(w.jsx)(b.a,{children:Object(w.jsxs)(C.a,{children:[Object(w.jsxs)(S.a,{children:[Object(w.jsx)(y.a,{className:"w-25",src:"https://res.cloudinary.com/ddsq9twbk/image/upload/v1696754822/default_profile_yrspup.jpg",roundedCircle:!0}),Object(w.jsx)("p",{children:e.user}),Object(w.jsx)("p",{children:e.role})]}),Object(w.jsx)(S.a,{children:Object(w.jsx)(b.a.Body,{children:e.comment})})]})})})})})})},I=n(22),N=n(40),T=function(e){return Object(w.jsx)("div",{children:Object(w.jsxs)(N.a,{children:[Object(w.jsx)(N.a.Item,{children:Object(w.jsxs)(C.a,{children:[Object(w.jsx)(S.a,{children:Object(w.jsx)("i",{class:"fa-regular fa-circle-check"})}),Object(w.jsx)(S.a,{children:Object(w.jsx)("p",{children:"Status"})}),Object(w.jsx)(S.a,{children:Object(w.jsxs)(I.a,{children:[Object(w.jsx)(I.a.Toggle,{variant:"success",id:"dropdown-basic",children:e.status}),Object(w.jsxs)(I.a.Menu,{children:[Object(w.jsx)(I.a.Item,{href:"#/action-1",children:"New Request"}),Object(w.jsx)(I.a.Item,{href:"#/action-2",children:"In Progress"}),Object(w.jsx)(I.a.Item,{href:"#/action-3",children:"Completed"})]})]})})]})}),Object(w.jsx)(N.a.Item,{children:Object(w.jsxs)(C.a,{children:[Object(w.jsx)(S.a,{children:Object(w.jsx)("i",{class:"fa-solid fa-bullhorn"})}),Object(w.jsx)(S.a,{children:"Priority:"}),Object(w.jsx)(S.a,{children:Object(w.jsxs)(I.a,{children:[Object(w.jsx)(I.a.Toggle,{variant:"success",id:"dropdown-basic",children:e.priority}),Object(w.jsxs)(I.a.Menu,{children:[Object(w.jsx)(I.a.Item,{href:"#/action-1",children:"Low"}),Object(w.jsx)(I.a.Item,{href:"#/action-2",children:"Medium"}),Object(w.jsx)(I.a.Item,{href:"#/action-2",children:"High"})]})]})})]})}),Object(w.jsx)(N.a.Item,{children:Object(w.jsxs)(C.a,{children:[Object(w.jsx)(S.a,{children:Object(w.jsx)("i",{class:"fa-regular fa-address-book"})}),Object(w.jsx)(S.a,{children:"Requestor:"}),Object(w.jsx)(S.a,{children:Object(w.jsx)(h.a,{variant:"success",children:e.requestor})})]})}),Object(w.jsx)(N.a.Item,{children:Object(w.jsx)(C.a,{children:Object(w.jsxs)(S.a,{children:["Created At ",e.created_at]})})}),Object(w.jsx)(N.a.Item,{children:Object(w.jsx)(C.a,{children:Object(w.jsxs)(S.a,{children:["Updated At ",e.updated_at]})})})]})})},D=Object(c.createContext)(),L=Object(c.createContext)(),P=function(){return Object(c.useContext)(D)},A=function(){return Object(c.useContext)(L)},R=function(e){var t=e.children,n=Object(c.useState)(null),r=Object(u.a)(n,2),a=r[0],s=r[1],o=Object(p.useHistory)(),l=function(){var e=Object(j.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.get("dj-rest-auth/user/");case 3:t=e.sent,n=t.data,s(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l()}),[]),Object(c.useMemo)((function(){m.interceptors.request.use(function(){var e=Object(j.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("/dj-rest-auth/token/refresh/");case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),s((function(e){return e&&o.push("/signin"),null})),e.abrupt("return",t);case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),g.interceptors.response.use((function(e){return e}),function(){var e=Object(j.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==(null===(n=t.response)||void 0===n?void 0:n.status)){e.next=10;break}return e.prev=1,e.next=4,v.a.post("/dj-rest-auth/token/refresh/");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),s((function(e){return e&&o.push("/signin"),null}));case 9:return e.abrupt("return",v()(t.config));case 10:return e.abrupt("return",Promise.reject(t));case 11:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}())}),[o]),Object(w.jsx)(D.Provider,{value:a,children:Object(w.jsx)(L.Provider,{value:s,children:t})})},B=n(62),M=n.n(B),H=r.a.forwardRef((function(e,t){var n=e.onClick;return Object(w.jsx)("i",{className:"fas fa-ellipsis-v",ref:t,onClick:function(e){e.preventDefault(),n(e)}})})),q=function(e){var t=e.handleEdit,n=e.handleDelete;return Object(w.jsxs)(I.a,{className:"ml-auto",drop:"left",children:[Object(w.jsx)(I.a.Toggle,{as:H}),Object(w.jsxs)(I.a.Menu,{className:"text-center",popperConfig:{strategy:"fixed"},children:[Object(w.jsx)(I.a.Item,{className:M.a.DropdownItem,onClick:t,"aria-label":"edit",children:Object(w.jsx)("i",{className:"fas fa-edit"})}),Object(w.jsx)(I.a.Item,{className:M.a.DropdownItem,onClick:n,"aria-label":"delete",children:Object(w.jsx)("i",{className:"fas fa-trash-alt"})})]})]})},F=function(e){var t=e.id,n=e.owner,c=(e.ticket_id,e.title),r=e.description,a=e.status,s=(e.visibility,e.priority),o=e.created_at,l=e.updated_at,u=(e.ticket,P()),d=(null===u||void 0===u?void 0:u.username)===n,O=Object(p.useHistory)(),x=function(){var e=Object(j.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.delete("/tickets/".concat(t,"/"));case 3:O.goBack(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{children:Object(w.jsxs)(b.a,{children:[Object(w.jsx)(b.a.Title,{children:c}),Object(w.jsxs)(C.a,{children:[Object(w.jsx)(S.a,{children:Object(w.jsx)(h.a,{variant:"primary",onClick:function(){return O.goBack()},children:"Back"})}),Object(w.jsx)(S.a,{children:d&&Object(w.jsx)(q,{handleEdit:function(){O.push("/tickets/".concat(t,"/edit"))},handleDelete:x})})]}),Object(w.jsxs)(C.a,{children:[Object(w.jsx)(S.a,{children:Object(w.jsx)("div",{children:Object(w.jsx)(b.a.Text,{children:r})})}),Object(w.jsx)(S.a,{children:Object(w.jsx)("div",{children:Object(w.jsx)(T,{status:a,priority:s,requestor:n,created_at:o,updated_at:l,is_owner:d})})})]}),Object(w.jsx)(C.a,{children:Object(w.jsx)(S.a,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"Comments"}),Object(w.jsx)(C.a,{children:Object(w.jsxs)(S.a,{children:[Object(w.jsx)(_,{user:"Callum Dennis",role:"Supporter",comment:"this is callums comment"}),Object(w.jsx)(_,{user:"ABC Tech",role:"Requestor",comment:"this is ABC Tech's comment"})]})})]})})})]})})},G=function(){var e=Object(p.useParams)().id,t=Object(c.useState)({results:[]}),n=Object(u.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(j.a)(Object(i.a)().mark((function t(){var n,c,r;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([m.get("/tickets/".concat(e))]);case 3:n=t.sent,c=Object(u.a)(n,1),r=c[0].data,a({results:[r]}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(w.jsx)("div",{children:Object(w.jsx)(d.a,{children:Object(w.jsx)(F,Object(l.a)(Object(l.a)({},r.results[0]),{},{setTickets:a,ticket:!0}))})})},U=n(122),E=n(123),J=n(13),W=n(75),V=n.n(W),X=function(e){var t=e.src,n=e.height,c=void 0===n?45:n,r=e.text;return Object(w.jsxs)("span",{children:[Object(w.jsx)("img",{className:V.a.Avatar,src:t,height:c,width:c,alt:"avatar"}),r]})},z=function(){var e=P(),t=A(),n=function(){var e=Object(j.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("dj-rest-auth/logout/");case 3:t(null),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),c=Object(w.jsx)(J.c,{to:"/create-ticket",children:"Create Ticket"}),r=Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(J.c,{to:"/signin",children:"Sign In"}),Object(w.jsx)(J.c,{to:"/signup",children:"Sign Up"})]}),a=Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(J.c,{to:"/tickets",children:"View Tickets"}),Object(w.jsx)(J.c,{to:"/",onClick:n,children:"Log Out"}),Object(w.jsx)(J.c,{to:"/profiles/".concat(null===e||void 0===e?void 0:e.profile_id),children:Object(w.jsx)(X,{src:null===e||void 0===e?void 0:e.profile_image,text:"My Profile",height:40})})]});return Object(w.jsx)("div",{children:Object(w.jsxs)(U.a,{bg:"light",expand:"lg",children:[Object(w.jsx)(J.c,{exact:!0,to:"/",children:Object(w.jsx)(U.a.Brand,{href:"#home",children:"SupportSync"})}),Object(w.jsx)(U.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsx)(U.a.Collapse,{id:"basic-navbar-nav",children:Object(w.jsxs)(E.a,{className:"mr-auto",children:[e&&c,e?a:r]})})]})})};var K=function(){var e,t,n,r=A(),a=Object(c.useState)({username:"",password:""}),s=Object(u.a)(a,2),b=s[0],f=s[1],m=b.username,g=b.password,k=Object(c.useState)({}),y=Object(u.a)(k,2),_=y[0],I=y[1],N=Object(p.useHistory)(),T=function(){var e=Object(j.a)(Object(i.a)().mark((function e(t){var n,c,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v.a.post("/dj-rest-auth/login/",b);case 4:n=e.sent,c=n.data,r(c.user),N.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),I(null===(a=e.t0.response)||void 0===a?void 0:a.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),D=function(e){f(Object(l.a)(Object(l.a)({},b),{},Object(o.a)({},e.target.name,e.target.value)))};return Object(w.jsx)(C.a,{children:Object(w.jsxs)(S.a,{children:[Object(w.jsxs)(d.a,{children:[Object(w.jsx)("h1",{children:"Sign In"}),Object(w.jsxs)(O.a,{onSubmit:T,children:[Object(w.jsxs)(O.a.Group,{controlId:"username",children:[Object(w.jsx)(O.a.Label,{className:"d-none",children:"Username"}),Object(w.jsx)(O.a.Control,{type:"text",placeholder:"Username",name:"username",value:m,onChange:D})]}),null===(e=_.username)||void 0===e?void 0:e.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsxs)(O.a.Group,{controlId:"password",children:[Object(w.jsx)(O.a.Label,{className:"d-none",children:"Password"}),Object(w.jsx)(O.a.Control,{type:"password",placeholder:"Password",name:"password",value:g,onChange:D})]}),null===(t=_.password)||void 0===t?void 0:t.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsx)(h.a,{type:"submit",children:"Sign in"}),null===(n=_.non_field_errors)||void 0===n?void 0:n.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",className:"mt-3",children:e},t)}))]})]}),Object(w.jsx)(d.a,{children:Object(w.jsxs)(J.b,{to:"/signup",children:["Don't have an account? ",Object(w.jsx)("span",{children:"Sign up now!"})]})})]})})},Q=function(){var e,t,n,r,a=Object(c.useState)({username:"",password1:"",password2:""}),s=Object(u.a)(a,2),b=s[0],f=s[1],m=b.username,g=b.password1,k=b.password2,y=Object(c.useState)({}),_=Object(u.a)(y,2),I=_[0],N=_[1],T=Object(p.useHistory)(),D=function(e){f(Object(l.a)(Object(l.a)({},b),{},Object(o.a)({},e.target.name,e.target.value)))},L=function(){var e=Object(j.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v.a.post("/dj-rest-auth/registration/",b);case 4:T.push("/signin"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),N(null===(n=e.t0.response)||void 0===n?void 0:n.data);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)(C.a,{children:Object(w.jsxs)(S.a,{children:[Object(w.jsxs)(d.a,{children:[Object(w.jsx)("h1",{children:"Sign Up"}),Object(w.jsxs)(O.a,{onSubmit:L,children:[Object(w.jsxs)(O.a.Group,{controlId:"username",children:[Object(w.jsx)(O.a.Label,{className:"d-none",children:"username"}),Object(w.jsx)(O.a.Control,{type:"text",placeholder:"Username",name:"username",value:m,onChange:D})]}),null===(e=I.username)||void 0===e?void 0:e.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsxs)(O.a.Group,{controlId:"password1",children:[Object(w.jsx)(O.a.Label,{className:"d-none",children:"Password"}),Object(w.jsx)(O.a.Control,{type:"password",placeholder:"Password",name:"password1",value:g,onChange:D})]}),null===(t=I.password1)||void 0===t?void 0:t.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsxs)(O.a.Group,{controlId:"password2",children:[Object(w.jsx)(O.a.Label,{className:"d-none",children:"Confirm password"}),Object(w.jsx)(O.a.Control,{type:"password",placeholder:"Confirm password",name:"password2",value:k,onChange:D})]}),null===(n=I.password2)||void 0===n?void 0:n.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",children:e},t)})),Object(w.jsx)(h.a,{type:"submit",children:"Sign up"}),null===(r=I.non_field_errors)||void 0===r?void 0:r.map((function(e,t){return Object(w.jsx)(x.a,{variant:"warning",className:"mt-3",children:e},t)}))]})]}),Object(w.jsx)(d.a,{className:"mt-3",children:Object(w.jsxs)(J.b,{to:"/signin",children:["Already have an account? ",Object(w.jsx)("span",{children:"Sign in"})]})})]})})},Y=n(121),Z=n(76),$=n.n(Z),ee=function(e){var t=e.spinner,n=e.src,c=e.message;return Object(w.jsxs)("div",{className:"".concat($.a.Asset," p-4"),children:[t&&Object(w.jsx)(Y.a,{animation:"border"}),n&&Object(w.jsx)("img",{src:n,alt:c}),c&&Object(w.jsx)("p",{className:"mt-4",children:c})]})},te=n(78),ne=function(e){var t=e.id,n=e.owner,c=(e.ticket_id,e.title),r=e.description,a=e.status,s=(e.visibility,e.priority);e.created_at,e.updated_at,e.ticket;return Object(w.jsx)("div",{children:Object(w.jsx)(d.a,{children:Object(w.jsxs)(b.a,{children:[Object(w.jsxs)(C.a,{children:[Object(w.jsxs)(S.a,{children:[Object(w.jsx)(b.a.Title,{children:c}),Object(w.jsx)(b.a.Text,{children:r})]}),Object(w.jsx)(S.a,{children:Object(w.jsxs)(N.a,{children:[Object(w.jsxs)(N.a.Item,{children:[Object(w.jsx)("i",{className:"fa-regular fa-circle-check"})," ",a]}),Object(w.jsxs)(N.a.Item,{children:[Object(w.jsx)("i",{className:"fa-solid fa-bullhorn"})," ",s]}),Object(w.jsxs)(N.a.Item,{children:[Object(w.jsx)("i",{className:"fa-regular fa-address-book"})," ",n]})]})})]}),Object(w.jsx)(b.a.Body,{children:Object(w.jsx)(J.b,{to:"/tickets/".concat(t),children:Object(w.jsx)(h.a,{variant:"primary",children:"Open Ticket"})})})]})})})},ce=n(77),re=n(79),ae=function(){var e=Object(j.a)(Object(i.a)().mark((function e(t,n){var c,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get(t.next);case 3:c=e.sent,r=c.data,n((function(e){return Object(l.a)(Object(l.a)({},e),{},{next:r.next,results:r.results.reduce((function(e,t){return e.some((function(e){return e.id===t.id}))?e:[].concat(Object(re.a)(e),[t])}),e.results)})})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();var se=function(e){e.message;var t=e.filter,n=void 0===t?"":t,r=Object(c.useState)({results:[]}),a=Object(u.a)(r,2),s=a[0],o=a[1],b=Object(c.useState)(!1),O=Object(u.a)(b,2),h=O[0],x=O[1],p=Object(te.useLocation)().pathname;return Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(Object(i.a)().mark((function e(){var t,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/tickets/?".concat(n));case 3:t=e.sent,c=t.data,o(c),x(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();x(!1),e()}),[n,p]),Object(w.jsx)(C.a,{className:"h-100",children:Object(w.jsxs)(S.a,{className:"py-2 p-0 p-lg-2",lg:8,children:[Object(w.jsx)("p",{children:"Tickets"}),h?Object(w.jsx)(w.Fragment,{children:s.results.length?Object(w.jsx)(ce.a,{children:s.results.map((function(e){return Object(w.jsx)(ne,Object(l.a)({},e),e.id)})),dataLength:s.results.length,loader:Object(w.jsx)(ee,{spinner:!0}),hasMore:!!s.next,next:function(){return ae(s,o)}}):Object(w.jsx)("p",{children:"Sorry there is no results"})}):Object(w.jsx)(d.a,{children:Object(w.jsx)(ee,{spinner:!0})})]})})};var ie=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(z,{}),Object(w.jsx)(d.a,{children:Object(w.jsxs)(p.Switch,{children:[Object(w.jsx)(p.Route,{exact:!0,path:"/",render:function(){return Object(w.jsx)("h1",{children:"Welcome to Support Sync"})}}),Object(w.jsx)(p.Route,{exact:!0,path:"/tickets/",render:function(){return Object(w.jsx)(se,{message:"No tickets found. Try a different search query."})}}),Object(w.jsx)(p.Route,{exact:!0,path:"/tickets/:id",render:function(){return Object(w.jsx)(G,{})}}),Object(w.jsx)(p.Route,{exact:!0,path:"/create-ticket",render:function(){return Object(w.jsx)(k,{})}}),Object(w.jsx)(p.Route,{exact:!0,path:"/signin",render:function(){return Object(w.jsx)(K,{})}}),Object(w.jsx)(p.Route,{exact:!0,path:"/signup",render:function(){return Object(w.jsx)(Q,{})}}),Object(w.jsx)(p.Route,{render:function(){return Object(w.jsx)("p",{children:"Page not found"})}})]})})]})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(J.a,{children:Object(w.jsx)(R,{children:Object(w.jsx)(ie,{})})})}),document.getElementById("root")),je()},62:function(e,t,n){e.exports={DropdownItem:"MoreDropdown_DropdownItem__2E4UM",Absolute:"MoreDropdown_Absolute__2RO70"}},75:function(e,t,n){e.exports={Avatar:"Avatar_Avatar__196lW"}},76:function(e,t,n){e.exports={Asset:"Asset_Asset__1dBcX"}},84:function(e,t,n){},85:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.90eed1ac.chunk.js.map