(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{76:function(t,e,n){},87:function(t,e,n){"use strict";n.r(e);var a=n(7),c=n(0),r=n(10),i=n.n(r),s=(n(76),n(54)),o=n.n(s),l=n(61),j=n(35),d=n(133),u=n(150),b=n(152),x=n(144),h=n(65),p=n(63),O=n.n(p),f=n(146),m=n(145),g=n(136),v=n(138),y=Object(d.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));function T(){var t=y();return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(g.a,{position:"static",children:Object(a.jsx)(v.a,{children:Object(a.jsx)(h.a,{variant:"h6",className:t.title,children:"Front-end Test / Ximdex"})})})})}var w=n(139),C=n(148),k=n(151),A=n(143),D=n(141),N=n(142),E=n(140),F=n(31),S=Object(d.a)((function(t){return{btn:{textAlign:"center",marginTop:20}}}));var W=Object(F.b)((function(t){return{dispatch:t}}))((function(t){var e=t.dispatch,n=S(),r=Object(c.useState)(!1),i=Object(j.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)(""),d=Object(j.a)(l,2),u=d[0],b=d[1],x=Object(c.useState)(""),h=Object(j.a)(x,2),p=h[0],O=h[1],f=function(){o(!1)};return Object(a.jsxs)("div",{className:n.btn,children:[Object(a.jsx)(w.a,{variant:"outlined",color:"primary",onClick:function(){o(!0)},children:"Add text"}),Object(a.jsxs)(k.a,{open:s,onClose:f,"aria-labelledby":"form-dialog-title",children:[Object(a.jsx)(E.a,{id:"form-dialog-title",children:"Add text"}),Object(a.jsxs)(D.a,{children:[Object(a.jsx)(N.a,{children:"\\ (\u2022\u25e1\u2022) /"}),Object(a.jsx)(C.a,{onKeyUpCapture:function(t){b(t.target.value)},autoFocus:!0,margin:"dense",id:"title",label:"Title",type:"text",fullWidth:!0}),Object(a.jsx)(C.a,{onKeyUpCapture:function(t){O(t.target.value)},label:"Text",multiline:!0,margin:"dense",fullWidth:!0,rows:4,type:"text"})]}),Object(a.jsxs)(A.a,{children:[Object(a.jsx)(w.a,{onClick:f,color:"primary",children:"Cancel"}),Object(a.jsx)(w.a,{onClick:function(){e({type:"ADD_TEXT",payload:{title:u,text:p}}),o(!1)},color:"primary",children:"Add"})]})]})]})})),X=n(147),B=Object(d.a)((function(t){return{root:{width:"100%",height:"100vh",backgroundColor:"#f1f1f1"},heading:{fontSize:t.typography.pxToRem(15),fontWeight:t.typography.fontWeightRegular,color:"blue"},fullWidth:{padding:"0 !important"},mt:{marginTop:20},accordionText:{color:"black"},icons:{color:"blue"}}}));var I=Object(F.b)((function(t){return{texts:t.texts}}),(function(t){return{dispatch:t}}))((function(t){var e=t.texts,n=t.dispatch,r=B(),i=Object(c.useState)(!0),s=Object(j.a)(i,2),d=s[0],p=s[1],g=e.map((function(t,e){return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(b.a,{expandIcon:Object(a.jsx)(O.a,{className:r.icons}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(a.jsx)(h.a,{className:r.heading,children:t.title})}),Object(a.jsx)(x.a,{children:Object(a.jsx)(h.a,{className:r.accordionText,children:t.text})})]},e)})),v=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=2");case 3:return t.next=5,t.sent.json();case 5:t.sent.forEach((function(t){var e=t.split(" ").slice(0,3).join(" ");n({type:"ADD_TEXT",payload:{title:e,text:t}})})),p(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),alert("error fetching data");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){v()}),[]),Object(a.jsx)("div",{className:r.root,children:Object(a.jsxs)(m.a,{maxWidth:"xl",disableGutters:!0,children:[Object(a.jsx)(T,{}),Object(a.jsx)(f.a,{container:!0,children:Object(a.jsx)(f.a,{item:!0,xs:12,className:r.mt,children:Object(a.jsx)(h.a,{align:"center",variant:"h6",gutterBottom:!0,children:'First two items are loaded by an API. More can be added using the button "ADD TEXT".'})})}),Object(a.jsxs)(f.a,{className:r.mt,container:!0,children:[Object(a.jsx)(f.a,{item:!0,xs:3}),Object(a.jsxs)(f.a,{item:!0,xs:6,align:d?"center":"left",children:[d?Object(a.jsx)(X.a,{}):g,Object(a.jsx)(W,{})]}),Object(a.jsx)(f.a,{item:!0,xs:3})]})]})})})),G=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))},P=n(46),R={texts:[]},_=Object(P.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;return"ADD_TEXT"===e.type?Object.assign({},t,{texts:t.texts.concat(e.payload)}):t}));window.store=_,i.a.render(Object(a.jsx)(F.a,{store:_,children:Object(a.jsx)(I,{})}),document.getElementById("root")),G()}},[[87,1,2]]]);
//# sourceMappingURL=main.dd03ee04.chunk.js.map