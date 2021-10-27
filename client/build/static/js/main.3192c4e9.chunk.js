(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{328:function(e,t){},330:function(e,t){},341:function(e,t){},343:function(e,t){},370:function(e,t){},372:function(e,t){},373:function(e,t){},378:function(e,t){},380:function(e,t){},399:function(e,t){},411:function(e,t){},414:function(e,t){},441:function(e,t,n){},443:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n(1),a=n.n(r),c=n(20),i=n.n(c),o=n(40),j=n(14),l=n.n(j),u=n(24),b=n(505),d=n(9),O=n(46),h=n(6),x=n(48),m=n.n(x),p={authorize:function(e){return m.a.post("/api/users/authorize",e)},getUser:function(e){return m.a.get("/api/users/"+e)},addUser:function(e){return m.a.post("/api/users",e)},sendAcct:function(e){return m.a.post("/api/accounts",e)},getAccts:function(e){return m.a.get("api/accounts/"+e)},editAcct:function(e,t){return m.a.put("/api/accounts/"+e,t)},removeAcct:function(e){return m.a.delete("api/accounts/"+e)},getSession:function(e){return m.a.get("/api/sessions/"+e)},getCurrentSession:function(){return m.a.get("/api/sessions")},addSession:function(e){return m.a.post("/api/sessions",e)},editSession:function(e){return m.a.patch("/api/sessions/"+e)},removeSession:function(e){return m.a.delete("/api/sessions/"+e)}},f=n(258),g=n.n(f)()((function(e){return{currentUser:null,setCurrentUser:function(t){return e({currentUser:t})}}})),w=function(){var e=g().setCurrentUser;return{signUp:function(){var t=Object(u.a)(l.a.mark((function t(n){var s,r,a,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.firstName,r=n.lastName,a=n.email,c=n.password,t.next=3,p.addUser({firstName:s,lastName:r,email:a,password:c});case 3:if(!(i=t.sent).data.success){t.next=8;break}return e(i.data.response),t.next=8,p.addSession({userid:i.data.response.id});case 8:return t.abrupt("return",i);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),login:function(){var t=Object(u.a)(l.a.mark((function t(n){var s,r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.email,r=n.password,t.next=3,p.authorize({email:s,password:r});case 3:if(!(a=t.sent).data.success){t.next=8;break}return e(a.data.response),t.next=8,p.addSession({userid:a.data.response.id});case 8:return t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),logOut:function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.removeSession(n);case 2:e({});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),resetPassword:function(e){},confirmPassword:function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.authorize({email:t,password:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}},v=n(27),y=n(480),C=n(508),S=n(481),k=n(482),N=n(483),P=n(479),U=n(509),A=n(486),F=n(487),E=n(512),L=n(280),R=n(489),I=n(63),D=function(e){var t=e.children;return Object(s.jsx)(P.a,{color:"red.500",fontSize:"sm",children:t})};function M(){var e=Object(r.useState)({firstName:"",lastName:"",phoneNum:"",funName:"",email:"",password:"",confirmPass:""}),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)({}),i=Object(h.a)(c,2),j=i[0],b=i[1],x=Object(r.useState)(""),m=Object(h.a)(x,2),p=m[0],f=m[1],g=Object(r.useState)(!1),M=Object(h.a)(g,2),B=(M[0],M[1],Object(r.useState)(!1)),z=Object(h.a)(B,2),_=z[0],H=z[1],T=Object(r.useState)(!1),W=Object(h.a)(T,2),G=W[0],q=W[1],J=Object(v.g)(),V=w().signUp,Y=function(e){var t=e.target,s=t.name,r=t.value;a(Object(O.a)(Object(O.a)({},n),{},Object(d.a)({},s,r)))},$=function(e){var t={};return e.firstName||(t.firstName="Must enter a first name"),e.lastName||(t.lastName="Must enter a last name"),e.email?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e.email)||(t.email="Email is not valid"):t.email="Must enter an email",e.password?e.password.length<8?t.password="Password must be at least 8 characters":e.password.length>15&&(t.password="Password must not exceed 15 characters"):t.password="Must enter a password",e.confirmPass?e.password!==e.confirmPass&&(t.confirmPass="Passwords do not match"):t.confirmPass="Must confirm password",t},K=function(){var e=Object(u.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),b($(n)),Object.keys(j).length){e.next=9;break}return e.next=5,V(n);case 5:(s=e.sent).data.success?J.push("/"):f(s.data.message),e.next=10;break;case 9:f("Failed to Create User.");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)("div",{className:"d-flex align-items-center justify-content-center css-selector",style:{minHeight:"100vh"},children:Object(s.jsx)(y.a,{children:Object(s.jsxs)(C.b,{children:[Object(s.jsxs)(S.a,{borderWidth:"2px",borderColor:"gray.500",bg:"white",borderRadius:"7px",w:"500px",minheight:"360px",mt:"3em",mb:".5em",p:"1.5em",children:[Object(s.jsx)(y.a,{children:Object(s.jsx)(k.a,{children:"Sign Up"})}),Object(s.jsxs)(C.b,{spacing:3,mt:"1em",children:[Object(s.jsxs)(N.a,{children:[Object(s.jsx)(P.a,{htmlFor:"firstName",mr:"1em",children:"First Name"}),Object(s.jsx)(U.a,{placeholder:"Enter Here",id:"firstName",name:"firstName",value:n.firstName,onChange:Y,errorBorderColor:"crimson",isInvalid:j.firstName})]}),j.firstName?Object(s.jsx)(D,{children:j.firstName}):null,Object(s.jsxs)(N.a,{children:[Object(s.jsx)(P.a,{htmlFor:"lastName",mr:"1em",children:"Last Name"}),Object(s.jsx)(U.a,{placeholder:"Enter Here",id:"lastName",name:"lastName",value:n.lastName,onChange:Y,errorBorderColor:"crimson",isInvalid:j.lastName})]}),j.lastName?Object(s.jsx)(D,{children:j.lastName}):null,Object(s.jsxs)(N.a,{children:[Object(s.jsx)(P.a,{htmlFor:"email",mr:"2em",children:"Email"}),Object(s.jsx)(U.a,{placeholder:"Enter Here",type:"email",id:"email",name:"email",value:n.email,onChange:Y,errorBorderColor:"crimson",isInvalid:j.email})]}),j.email?Object(s.jsx)(D,{children:j.email}):null,Object(s.jsxs)(N.a,{children:[Object(s.jsx)(P.a,{htmlFor:"password",mr:"1em",children:"Password"}),Object(s.jsx)(U.a,{placeholder:"Enter Here",type:_?"text":"password",id:"password",name:"password",value:n.password,onChange:Y,errorBorderColor:"crimson",isInvalid:j.password}),Object(s.jsx)(A.b,{children:Object(s.jsx)(F.a,{icon:_?Object(s.jsx)(I.b,{}):Object(s.jsx)(I.a,{}),onClick:function(){return H(!_)},variant:"ghost"})})]}),j.password?Object(s.jsx)(D,{children:j.password}):null,Object(s.jsxs)(N.a,{children:[Object(s.jsx)(P.a,{htmlFor:"confirmPass",mr:"1em",children:"Confirm Password"}),Object(s.jsx)(U.a,{placeholder:"Enter Here",type:G?"text":"password",id:"confirmPass",name:"confirmPass",value:n.confirmPass,onChange:Y,errorBorderColor:"crimson",isInvalid:j.confirmPass}),Object(s.jsx)(A.b,{children:Object(s.jsx)(F.a,{icon:G?Object(s.jsx)(I.b,{}):Object(s.jsx)(I.a,{}),onClick:function(){return q(!G)},variant:"ghost"})})]}),j.confirmPass?Object(s.jsx)(D,{children:j.confirmPass}):null,p&&Object(s.jsxs)(E.a,{status:"error",children:[Object(s.jsx)(E.b,{}),p]})]}),Object(s.jsx)(L.a,{onClick:K,mt:"1em",bg:"yellow.400",color:"white",_hover:{bg:"yellow.500"},style:{float:"right"},children:"Submit"})]}),Object(s.jsx)(y.a,{children:Object(s.jsxs)(P.a,{color:"gray.600",children:["Already have an account?"," ",Object(s.jsx)(R.a,{as:o.b,to:"/login",color:"yellow.400",children:"Login"})]})})]})})})}var B=n(281),z=function(e){var t=e.component,n=Object(B.a)(e,["component"]),r=g((function(e){return e.currentUser}));return Object(s.jsx)(v.b,Object(O.a)(Object(O.a)({},n),{},{render:function(e){return r?Object(s.jsx)(t,Object(O.a)({},e)):Object(s.jsx)(v.a,{to:"/login"})}}))},_=n(496),H=n(498),T=n(499),W=n(323),G=function(e){return W.AES.encrypt(e,"mrpoopybutthole").toString()};function q(e){var t=e.open,n=e.onClose,a=e.updateData,c=Object(r.useState)({website:"",username:"",password:""}),i=Object(h.a)(c,2),o=i[0],j=i[1],b=Object(r.useState)({}),x=Object(h.a)(b,2),m=x[0],f=x[1],w=Object(r.useState)(!1),v=Object(h.a)(w,2),y=v[0],S=v[1],k=Object(r.useState)(""),R=Object(h.a)(k,2),M=R[0],B=R[1],z=Object(r.useState)(!1),_=Object(h.a)(z,2),H=_[0],W=_[1],q=g().currentUser,J=function(e){var t=e.target,n=t.name,s=t.value;j(Object(O.a)(Object(O.a)({},o),{},Object(d.a)({},n,s)))},V=function(e){var t={};return o.website||(t.website="Must enter a URL"),o.username||(t.username="Must enter a username or email"),o.password||(t.password="Must enter a password"),t},Y=function(){var e=Object(u.a)(l.a.mark((function e(t){var s,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),f(V()),Object.keys(m).length){e.next=15;break}return e.next=5,G(o.password);case 5:if(!(s=e.sent)){e.next=14;break}return r={website:o.website,username:o.username,password:s,user:q.id},e.next=10,p.sendAcct(r);case 10:(c=e.sent).data.success?(a(),W(!0),setTimeout((function(){W(!1),n(),B("")}),1500)):B(c.data.message),e.next=15;break;case 14:B("Something went wrong. Please Try Again");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)(T.a,{isOpen:t,onClose:n,children:[Object(s.jsx)(T.g,{}),Object(s.jsxs)(T.d,{children:[Object(s.jsx)(T.f,{children:"Add Account"}),Object(s.jsx)(T.c,{}),Object(s.jsx)(T.b,{children:Object(s.jsxs)(C.b,{spacing:3,mt:"1em",children:[Object(s.jsxs)(N.a,{children:[Object(s.jsx)(P.a,{htmlFor:"website",mr:"3em",children:"Website"}),Object(s.jsx)(U.a,{placeholder:"Paste the URL here",id:"website",name:"website",value:o.website,onChange:J,errorBorderColor:"crimson",isInvalid:m.website})]}),m.website?Object(s.jsx)(D,{children:m.website}):null,Object(s.jsxs)(N.a,{children:[Object(s.jsx)(P.a,{htmlFor:"username",mr:"0.7em",children:"Username or Email"}),Object(s.jsx)(U.a,{placeholder:"Enter here",id:"username",name:"username",value:o.username,onChange:J,errorBorderColor:"crimson",isInvalid:m.username})]}),m.username?Object(s.jsx)(D,{children:m.username}):null,Object(s.jsxs)(N.a,{children:[Object(s.jsx)(P.a,{htmlFor:"password",mr:"2.2em",children:"Password"}),Object(s.jsx)(U.a,{placeholder:"Enter here",type:y?"text":"password",id:"password",name:"password",value:o.password,onChange:J,errorBorderColor:"crimson",isInvalid:m.password}),Object(s.jsx)(A.b,{children:Object(s.jsx)(F.a,{icon:y?Object(s.jsx)(I.b,{}):Object(s.jsx)(I.a,{}),onClick:function(){return S(!y)},variant:"ghost"})})]}),m.password?Object(s.jsx)(D,{children:m.password}):null,M&&Object(s.jsxs)(E.a,{status:"error",children:[Object(s.jsx)(E.b,{}),M]})]})}),Object(s.jsx)(T.e,{children:Object(s.jsx)(L.a,{onClick:Y,bg:"yellow.400",color:"white",_hover:{bg:"yellow.500"},isDisabled:H,children:"Add"})})]})]})}var J=n(506),V=n(502),Y=n(105);function $(e){var t=e.open,n=e.onClose,a=Object(r.useState)(!1),c=Object(h.a)(a,2),i=c[0],o=c[1],j=Object(r.useState)(10),l=Object(h.a)(j,2),u=l[0],b=l[1],d=Object(r.useState)(""),O=Object(h.a)(d,2),x=O[0],m=O[1],p=Object(r.useState)(!1),f=Object(h.a)(p,2),g=f[0],w=f[1],v=Object(r.useState)(!0),y=Object(h.a)(v,2),S=y[0],k=y[1],N=Object(r.useState)(!1),U=Object(h.a)(N,2),A=U[0],F=U[1],E=Object(r.useState)(!1),R=Object(h.a)(E,2),I=R[0],D=R[1],M=Object(r.useState)(""),B=Object(h.a)(M,2),z=(B[0],B[1]),_=function(e){console.log({password:x}),e.length>1?H():z("Something went wrong")},H=function(){return o(!0)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(T.a,{isOpen:t,onClose:n,children:[Object(s.jsx)(T.g,{}),Object(s.jsxs)(T.d,{children:[Object(s.jsx)(T.f,{children:"Generate A Password"}),Object(s.jsx)(T.c,{}),Object(s.jsxs)(T.b,{children:[Object(s.jsx)(P.a,{fontSize:"xl",children:"Select all that apply"}),Object(s.jsxs)(C.b,{mt:"1em",ml:"1.5em",mb:"1.5em",children:[Object(s.jsx)(J.a,{value:g,onChange:function(e){return w(e.target.checked)},colorScheme:"yellow","aria-label":"Uppercase Letters",name:"uppercase",children:"Uppercase Letters"}),Object(s.jsx)(J.a,{value:S,onChange:function(e){return k(e.target.checked)},colorScheme:"yellow","aria-label":"Lowercase Letters",name:"lowercase",defaultIsChecked:!0,children:"Lowercase Letters"}),Object(s.jsx)(J.a,{value:A,onChange:function(e){return F(e.target.checked)},colorScheme:"yellow","aria-label":"Numbers",name:"numbers",children:"Numbers"}),Object(s.jsx)(J.a,{value:I,onChange:function(e){return D(e.target.checked)},colorScheme:"yellow","aria-label":"Symbols",name:"symbols",children:"Symbols"})]}),Object(s.jsx)(P.a,{fontSize:"xl",mb:"1em",children:"Password Length"}),Object(s.jsxs)(V.a,{"aria-label":"password-length-slider",value:u,onChange:function(e){console.log(e),b(e)},max:40,children:[Object(s.jsx)(V.d,{bg:"gray.200",children:Object(s.jsx)(V.b,{bg:"yellow.400"})}),Object(s.jsx)(V.c,{bg:"yellow.500"})]}),Object(s.jsxs)(P.a,{color:"gray.600",children:["Length: ",u]})]}),Object(s.jsx)(T.e,{children:Object(s.jsx)(L.a,{onClick:function(e){e.preventDefault(),function(){var e=u,t="";g&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),S&&(t+="abcdefghijklmnopqrstuvwxyz"),I&&(t+="1234567890"),A&&(t+="!@#$%?&*");for(var n="",s=0;s<e;s++)n+=t[Math.floor(Math.random()*t.length)];m(n),_(n)}()},bg:"yellow.400",color:"white",_hover:{bg:"yellow.500"},children:"Generate"})})]})]}),Object(s.jsx)(K,{handleShow:H,handleClose:function(e){e&&(o(!1),n()),o(!1)},show:i,password:x})]})}var K=function(e){var t=Object(r.useRef)(null),n=Object(r.useState)(""),a=Object(h.a)(n,2),c=a[0],i=a[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(T.a,{isOpen:e.show,onClose:function(){e.handleClose(),i("")},children:[Object(s.jsx)(T.g,{}),Object(s.jsxs)(T.d,{children:[Object(s.jsx)(T.f,{children:"Generated Password"}),Object(s.jsx)(T.c,{}),Object(s.jsxs)(T.b,{children:[Object(s.jsx)(P.a,{children:"Your password is: "}),Object(s.jsxs)(N.a,{className:"mb-3",children:[Object(s.jsx)(U.a,{value:e.password,ref:t,className:"text-center",variant:"filled",isReadOnly:!0}),Object(s.jsx)(A.a,{children:Object(s.jsx)(F.a,{onClick:function(e){try{t.current.select(),document.execCommand("copy"),e.target.focus(),i("Copied!")}catch(n){i("Something went wrong")}},variant:"solid",icon:Object(s.jsx)(Y.a,{})})})]})]}),c&&Object(s.jsxs)(E.a,{status:"Copied!"===c?"success":"error",w:"90%",style:{margin:"0 1.5em"},children:[Object(s.jsx)(E.b,{}),c]}),Object(s.jsxs)(T.e,{children:[Object(s.jsx)(L.a,{mr:"1em",bg:"yellow.400",color:"white",_hover:{bg:"yellow.500"},onClick:function(){e.handleClose(),i("")},children:"Generate Again"}),Object(s.jsx)(L.a,{onClick:function(){e.handleClose(!0),i("")},children:"Close"})]})]})]})})},Q=n(264),X=n(265),Z=n(146);function ee(e){var t=e.update,n=Object(r.useState)(""),a=Object(h.a)(n,2),c=(a[0],a[1]),i=Object(r.useState)(!1),j=Object(h.a)(i,2),b=j[0],d=j[1],O=Object(r.useState)(!1),x=Object(h.a)(O,2),m=x[0],p=x[1],f=Object(v.g)(),y=w().logOut,C=g((function(e){return e.currentUser}));function k(){return(k=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,y(C.id);case 4:f.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to Logout");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(S.a,{pt:5,pb:0,bg:"gray.800",children:[Object(s.jsxs)("ul",{style:{display:"flex",listStyleType:"none"},children:[Object(s.jsx)(F.a,{as:o.b,variant:"link",size:"lg",to:"/home",icon:Object(s.jsx)(Q.a,{})}),Object(s.jsxs)("div",{style:{marginLeft:"auto",marginRight:".5em"},children:[Object(s.jsx)(F.a,{"aria-label":"Add Account",onClick:function(){return d(!0)},variant:"ghost",isRound:!0,color:"whitesmoke",_hover:{backgroundColor:"gray.700"},icon:Object(s.jsx)(X.a,{})}),Object(s.jsx)(F.a,{"aria-label":"Generate",onClick:function(){return p(!0)},mr:".7em",variant:"ghost",isRound:!0,color:"whitesmoke",_hover:{backgroundColor:"gray.700"},icon:Object(s.jsx)(Z.a,{})}),Object(s.jsxs)(H.a,{style:{float:"right"},children:[Object(s.jsxs)(H.b,{style:{color:"whitesmoke",padding:".6em"},_hover:{backgroundColor:"gray.700"},children:["Welcome, ",null===C||void 0===C?void 0:C.first_name]}),Object(s.jsx)(H.d,{children:Object(s.jsx)(H.c,{onClick:function(){return k.apply(this,arguments)},children:"Log Out"})})]})]})]}),Object(s.jsx)(S.a,{mt:2,w:"100%",h:"6px",bg:"yellow.400"})]}),Object(s.jsx)(q,{open:b,onClose:function(){return d(!1)},updateData:t}),Object(s.jsx)($,{open:m,onClose:function(){return p(!1)}})]})}var te=n(494),ne=n(273),se=n(495),re=n(491),ae=n(122),ce=n(266),ie=n(514),oe=n(501),je=n(511);function le(e){var t=Object(r.useState)(""),n=Object(h.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(!1),o=Object(h.a)(i,2),j=o[0],b=o[1];function d(){return(d=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.removeAcct(e.data.id);case 2:n=t.sent,c(n.data.message),n.data.success&&(e.update(),b(!j),setTimeout((function(){O()}),5e4));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){e.handleClose(),c(""),b(!1)}return Object(s.jsxs)(T.a,{isOpen:e.open,onClose:O,children:[Object(s.jsx)(T.g,{}),Object(s.jsxs)(T.d,{children:[Object(s.jsxs)(T.f,{children:["Remove ",Object(s.jsx)("i",{children:e.data.url})]}),Object(s.jsx)(T.c,{}),Object(s.jsxs)(T.b,{children:[Object(s.jsx)(P.a,{children:"Are you sure you want to delete this account?"}),a&&Object(s.jsx)(y.a,{children:Object(s.jsxs)(E.a,{mt:".5em",w:"90%",status:"Successfully Removed Account."===a?"success":"error",children:[Object(s.jsx)(E.b,{}),a]})})]}),Object(s.jsx)(T.e,{children:Object(s.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(s.jsx)(L.a,{disabled:j,onClick:O,variant:"ghost",className:"mr-1",children:"Cancel"}),Object(s.jsx)(L.a,{disabled:j,onClick:function(){return d.apply(this,arguments)},colorScheme:"red",children:"Delete"})]})})]})]})}function ue(e){var t=Object(r.useState)(!1),n=Object(h.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(!1),o=Object(h.a)(i,2),j=o[0],b=o[1],d=Object(r.useState)(""),O=Object(h.a)(d,2),x=O[0],m=O[1],f=Object(r.useState)(!1),g=Object(h.a)(f,2),w=g[0],v=g[1],C=Object(r.useState)("password"),S=Object(h.a)(C,2),k=S[0],R=S[1],I=Object(r.useRef)(),D=Object(r.useRef)();function M(){return(M=Object(u.a)(l.a.mark((function t(n){var s,r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"password"===k||""===k){t.next=5;break}return t.next=4,G(k);case 4:s=t.sent;case 5:return r={url:I.current.value,email:D.current.value,password:s||null},t.next=8,p.editAcct(e.data.id,r);case 8:a=t.sent,m(a.data.message),a.data.success&&(e.update(),v(!w),setTimeout(B,1500));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(){e.handleClose(),c(!1),m(""),R("password"),v(!1)}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(xe,{open:j,handleClose:function(){return b(!j)},allow:function(){c(!a),R("")}}),Object(s.jsxs)(T.a,{isOpen:e.open,onClose:B,children:[Object(s.jsx)(T.g,{}),Object(s.jsxs)(T.d,{children:[Object(s.jsx)(T.c,{}),Object(s.jsxs)(T.f,{children:["Modify ",Object(s.jsx)("i",{children:e.data.url})]}),Object(s.jsxs)(T.b,{style:{padding:"5%"},children:[Object(s.jsx)(P.a,{children:"Website: "}),Object(s.jsx)(U.a,{my:".5em",defaultValue:e.data.url,ref:I}),Object(s.jsx)(P.a,{children:"Username/Email: "}),Object(s.jsx)(U.a,{my:".5em",defaultValue:e.data.username,ref:D}),Object(s.jsx)(P.a,{children:"Password: "}),Object(s.jsxs)(N.a,{children:[Object(s.jsx)(U.a,{type:a?"text":"password",value:k,readOnly:!a,onChange:function(e){return R(e.target.value)}}),Object(s.jsx)(A.b,{children:Object(s.jsx)(F.a,{onClick:function(){return a?c(!a):b(!j)},variant:"outline",disabled:a,icon:Object(s.jsx)(Z.b,{})})})]}),x&&Object(s.jsx)(y.a,{children:Object(s.jsxs)(E.a,{mt:".5em",status:"Successfully Updated Account."===x?"success":"error",w:"90%",children:[Object(s.jsx)(E.b,{}),x]})})]}),Object(s.jsx)(T.e,{children:Object(s.jsxs)("div",{style:{float:"right"},children:[Object(s.jsx)(L.a,{disabled:w,onClick:B,variant:"ghost",className:"mr-1",children:"Cancel"}),Object(s.jsx)(L.a,{disabled:w,onClick:function(e){return M.apply(this,arguments)},bg:"yellow.400",color:"white",_hover:{bg:"yellow.500"},children:"Save"})]})})]})]})]})}function be(){var e=Object(ce.a)(["\n  position: absolute;\n  top: 5%;\n  right: 1.5%;\n"]);return be=function(){return e},e}var de=n(267).a.div(be());function Oe(e){var t=Object(r.useState)(null),n=Object(h.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(!1),o=Object(h.a)(i,2),j=o[0],l=o[1],u=Object(r.useState)(!1),b=Object(h.a)(u,2),d=b[0],O=b[1],x=function(){c(null)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(de,{children:Object(s.jsx)(ie.a,{children:Object(s.jsx)(ae.c,{}),onClick:function(e){c(e.currentTarget)}})}),Object(s.jsxs)(oe.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:x,children:[Object(s.jsx)(je.a,{onClick:function(){x(),l(!j)},children:"Edit"}),Object(s.jsx)(je.a,{onClick:function(){x(),O(!d)},children:"Remove"})]}),Object(s.jsx)(ue,{data:e.data,open:j,handleClose:function(){return l(!j)},update:e.update}),Object(s.jsx)(le,{data:e.data,open:d,handleClose:function(){return O(!d)},update:e.update})]})}function he(e){var t,n=Object(r.useState)(!1),a=Object(h.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(""),j=Object(h.a)(o,2),l=j[0],u=j[1],b=Object(r.useState)(!1),d=Object(h.a)(b,2),O=d[0],x=d[1],m=Object(r.useState)(!1),p=Object(h.a)(m,2),f=p[0],g=p[1],w=Object(r.useRef)(),v=Object(r.useRef)(),y=Object(r.useRef)();function C(e){try{e.current.select(),document.execCommand("copy"),u("Copied!"),g(!f)}catch(t){u("Something went wrong")}}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(xe,{open:O,handleClose:function(){x(!O)},allow:function(){return i(!c)}}),Object(s.jsxs)("div",{className:"card mt-4 mb-3",style:{minWidth:"30vw"},children:[Object(s.jsxs)("div",{className:"row g-0",children:[Object(s.jsx)("div",{className:"col-md-4",children:Object(s.jsx)("img",{src:e.data.image||"https://via.placeholder.com/200",alt:"account",width:"200",height:"200"})}),Object(s.jsx)("div",{className:"col-md-3",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title",children:"Account Name"}),Object(s.jsxs)("p",{className:"card-text",children:[Object(s.jsx)("strong",{children:"Website: "}),Object(s.jsxs)(te.a,{children:[Object(s.jsx)(ne.a,{value:e.data.url,ref:w,readOnly:!0}),Object(s.jsx)(te.a.Append,{children:Object(s.jsx)(se.a,{variant:"outline-secondary",onClick:function(){return C(w)},children:Object(s.jsx)(Y.a,{})})})]})]})]})}),Object(s.jsx)("div",{className:"col-md-3",children:Object(s.jsxs)("div",{className:"card-body align-items-center",children:[Object(s.jsxs)("p",{className:"card-text",children:[Object(s.jsx)("strong",{children:"Username: "}),Object(s.jsxs)(te.a,{children:[Object(s.jsx)(ne.a,{value:e.data.username,ref:v,readOnly:!0}),Object(s.jsx)(te.a.Append,{children:Object(s.jsx)(se.a,{variant:"outline-secondary",onClick:function(){return C(v)},children:Object(s.jsx)(Y.a,{})})})]})]}),Object(s.jsxs)("p",{className:"card-text",children:[Object(s.jsx)("strong",{children:"Password: "}),Object(s.jsxs)(te.a,{children:[Object(s.jsx)(ne.a,{type:c?"text":"password",ref:y,value:(t=e.data.password,W.AES.decrypt(t,"mrpoopybutthole").toString(W.enc.Utf8)),readOnly:!0}),Object(s.jsxs)(te.a.Append,{children:[Object(s.jsxs)(se.a,{variant:"outline-secondary",onClick:function(){return c?i(!c):x(!O)},children:[c?Object(s.jsx)(ae.b,{}):Object(s.jsx)(ae.a,{})," "]}),Object(s.jsx)(se.a,{variant:"outline-secondary",onClick:function(){return C(y)},children:Object(s.jsx)(Y.a,{})})]})]})]})]})}),Object(s.jsx)(Oe,{data:e.data,update:e.update})]}),f&&Object(s.jsxs)(E.a,{className:"text-center",status:"Copied!"===l?"success":"error",w:"94%",style:{margin:"1.5% 3%"},transition:!0,dismissible:!0,children:[Object(s.jsx)(E.b,{}),l,Object(s.jsx)(re.a,{position:"absolute",right:"8px",top:"8px",onClick:function(){return g(!1)}})]})]})]})}function xe(e){var t=Object(r.useState)(""),n=Object(h.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(!1),o=Object(h.a)(i,2),j=o[0],b=o[1],d=Object(r.useRef)(),O=w().confirmPassword,x=g((function(e){return e.currentUser})),m=function(){var t=Object(u.a)(l.a.mark((function t(n){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,O(x.email,d.current.value);case 3:(s=t.sent).data.success?(c("Confirmed!"),b(!j),setTimeout((function(){e.handleClose(),c(""),b(!1),e.allow()}),1500)):c(s.data.message);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(s.jsxs)(T.a,{isOpen:e.open,onClose:function(){e.handleClose(),c("")},children:[Object(s.jsx)(T.g,{}),Object(s.jsxs)(T.d,{children:[Object(s.jsx)(T.f,{children:"Confirm Identity"}),Object(s.jsx)(T.c,{}),Object(s.jsxs)(T.b,{children:[Object(s.jsx)(P.a,{children:"Please confirm your password: "}),Object(s.jsx)(U.a,{my:4,type:"password",ref:d,isRequired:!0}),a&&Object(s.jsxs)(E.a,{className:"text-center",status:"Confirmed!"===a?"success":"error",children:[Object(s.jsx)(E.b,{}),a]})]}),Object(s.jsx)(T.e,{children:Object(s.jsx)(L.a,{onClick:m,isDisabled:j,className:"float-right",children:"Submit"})})]})]})}function me(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),i=Object(h.a)(c,2),o=i[0],j=i[1],b=g().currentUser;function d(){return(d=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getAccts(b.id);case 2:t=e.sent,a(t.data.response);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[o]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(ee,{update:function(){return j(!o)}}),Object(s.jsxs)(_.a,{children:[Object(s.jsx)(y.a,{children:Object(s.jsx)(k.a,{mt:"1em",children:"Dashboard"})}),n.map((function(e){return Object(s.jsx)(he,{data:e,update:function(){return j(!o)}})}))]})]})}function pe(){var e=Object(r.useState)({email:"",password:""}),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)({}),i=Object(h.a)(c,2),j=i[0],b=i[1],x=Object(r.useState)(!1),m=Object(h.a)(x,2),p=m[0],f=m[1],g=Object(r.useState)(""),M=Object(h.a)(g,2),B=M[0],z=M[1],_=Object(v.g)(),H=w().login,T=function(e){var t=e.target,s=t.name,r=t.value;a(Object(O.a)(Object(O.a)({},n),{},Object(d.a)({},s,r)))},W=function(e){var t={};return e.email||(t.email="Must enter an email"),e.password||(t.password="Must enter a password"),t},G=function(){var e=Object(u.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),b(W(n)),Object.keys(j).length){e.next=9;break}return e.next=5,H(n);case 5:(s=e.sent).data.success?_.push("/home"):z(s.data.message),e.next=10;break;case 9:z("Failed to log in");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)("div",{className:"d-flex align-items-center justify-content-center css-selector",style:{minHeight:"100vh"},children:Object(s.jsx)(y.a,{children:Object(s.jsxs)(C.b,{children:[Object(s.jsxs)(S.a,{borderWidth:"2px",borderColor:"gray.500",bg:"white",borderRadius:"7px",w:"500px",minheight:"360px",mt:"3em",mb:".5em",p:"1.5em",children:[Object(s.jsx)(y.a,{children:Object(s.jsx)(k.a,{children:"Log In"})}),Object(s.jsxs)(C.b,{spacing:3,mt:"1em",children:[Object(s.jsxs)(N.a,{children:[Object(s.jsx)(P.a,{htmlFor:"email",mr:"3em",children:"Email"}),Object(s.jsx)(U.a,{placeholder:"Enter Here",type:"email",id:"email",name:"email",value:n.email,onChange:T,errorBorderColor:"crimson",isInvalid:j.email})]}),j.email?Object(s.jsx)(D,{children:j.email}):null,Object(s.jsxs)(N.a,{children:[Object(s.jsx)(P.a,{htmlFor:"password",mr:"1em",children:"Password"}),Object(s.jsx)(U.a,{placeholder:"Enter Here",type:p?"text":"password",id:"password",name:"password",value:n.password,onChange:T,errorBorderColor:"crimson",isInvalid:j.password}),Object(s.jsx)(A.b,{children:Object(s.jsx)(F.a,{icon:p?Object(s.jsx)(I.b,{}):Object(s.jsx)(I.a,{}),onClick:function(){return f(!p)},variant:"ghost"})})]}),j.password?Object(s.jsx)(D,{children:j.password}):null,B&&Object(s.jsxs)(E.a,{status:"error",children:[Object(s.jsx)(E.b,{}),B]})]}),Object(s.jsx)(L.a,{onClick:G,mt:"1em",bg:"yellow.400",color:"white",_hover:{bg:"yellow.500"},style:{float:"right"},children:"Submit"})]}),Object(s.jsx)(y.a,{children:Object(s.jsxs)(P.a,{color:"gray.600",children:["Don't have an account?"," ",Object(s.jsx)(R.a,{as:o.b,to:"/signup",color:"yellow.400",children:"Sign Up"})]})})]})})})}var fe=n(507),ge=n(500),we=n(503);function ve(e){var t=Object(r.useRef)(),n=Object(r.useState)(""),a=Object(h.a)(n,2),c=a[0],i=a[1],j=Object(r.useState)(!1),b=Object(h.a)(j,2),d=b[0],O=b[1],x=Object(r.useState)(""),m=Object(h.a)(x,2),p=m[0],f=m[1],g=w().resetPassword;function v(){return(v=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,i(""),O(!0),e.next=6,g(t.current.value);case 6:f("Success! Check your email for further instructions"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i("Failed to reset password");case 12:O(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(fe.a,{bg:"light",children:Object(s.jsxs)(fe.a.Body,{children:[Object(s.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),c&&Object(s.jsx)(ge.a,{variant:"danger",children:c}),p&&Object(s.jsx)(ge.a,{variant:"success",children:p}),Object(s.jsxs)(we.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(s.jsxs)(we.a.Group,{id:"email",children:[Object(s.jsx)(we.a.Label,{children:"Email"}),Object(s.jsx)(we.a.Control,{type:"email",ref:t,required:!0})]}),Object(s.jsx)(se.a,{disabled:d,className:"w-100",type:"submit",variant:"primary",children:"Reset Password"})]}),Object(s.jsx)("div",{className:"w-100 text-center mt-3",children:Object(s.jsx)(o.b,{to:"/login",children:"Log In"})})]})}),Object(s.jsxs)("div",{className:"w-100 text-center mt-2",children:["Don't have an account? ",Object(s.jsx)(o.b,{to:"/signup",children:"Sign up"})]})]})}var ye=n(513);function Ce(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(S.a,{bg:"gray.700",w:"100vw",h:"90vh",children:Object(s.jsxs)(S.a,{children:[Object(s.jsxs)(C.a,{float:"right",mr:"1em",mt:".5em",spacing:10,color:"gray.300",children:[Object(s.jsx)(R.a,{_hover:{color:"#fca223"},as:o.b,to:"/signup",children:"Sign Up"}),Object(s.jsx)(R.a,{_hover:{color:"#fca223"},as:o.b,to:"/login",children:"Log In"})]}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"30vh"},children:[Object(s.jsx)(ye.a,{objectFit:"cover",src:"./android-chrome-192x192.png",boxSize:"192px",alt:"icon"}),Object(s.jsxs)(C.b,{spacing:0,pl:"2em",children:[Object(s.jsx)(k.a,{style:{fontSize:"62pt"},color:"#fca223",children:"Pass"}),Object(s.jsx)(k.a,{style:{fontSize:"62pt"},children:"Lock"}),Object(s.jsx)(L.a,{mt:"3em",bg:"gray.300",_hover:{bg:"#fca223",color:"white"},children:"Try Now"})]})]})]})}),Object(s.jsxs)(S.a,{bg:"gray.300",w:"100vw",h:"90vh",children:[Object(s.jsx)(y.a,{children:Object(s.jsx)(k.a,{color:"gray.700",pt:"1em",size:"2xl",children:"All your Accounts in One Place"})}),Object(s.jsx)("p",{children:"show little boxes of website previews"}),Object(s.jsx)("p",{children:"and maybe a few testimonials"})]})]})}var Se=function(){var e=g((function(e){return e.currentUser})),t=g().setCurrentUser;Object(r.useLayoutEffect)((function(){e||n()}),[]);var n=function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getCurrentSession();case 2:(n=e.sent).data.success&&t(n.data.response);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.jsx)(b.a,{children:Object(s.jsxs)(v.d,{children:[Object(s.jsx)(z,{path:"/home",component:me}),Object(s.jsx)(v.b,{exact:!0,path:"/",component:Ce}),Object(s.jsx)(v.b,{path:"/signup",component:M}),Object(s.jsx)(v.b,{path:"/login",component:pe}),Object(s.jsx)(v.b,{path:"/forgotpassword",component:ve}),Object(s.jsx)(v.b,{render:function(){return Object(s.jsx)(v.a,{to:{pathname:"/"}})}})]})})};n(441),n(442);i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(o.a,{children:Object(s.jsx)(Se,{})})}),document.getElementById("root"))}},[[443,1,2]]]);
//# sourceMappingURL=main.3192c4e9.chunk.js.map