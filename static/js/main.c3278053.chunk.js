(this["webpackJsonpsignup-form"]=this["webpackJsonpsignup-form"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(7),i=a.n(r),l=(a(12),a(2)),o=a(3),c=a(5),d=a(4),u=a(0),p=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState({value:e.target.value},(function(){s.props.onChange(s.state.value)}))},s.state={value:""},s}return Object(o.a)(a,[{key:"getInputValidState",value:function(){return null===this.props.isValid?"":this.props.isValid?" is-valid ":" is-invalid "}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.type,s=e.label,n=e.required,r=e.compact,i=e.placeholder;return Object(u.jsxs)("div",{className:"form-group col-12 my-2"+(r?" col-md-6":void 0),children:[Object(u.jsx)("label",{htmlFor:t,className:this.props.required?void 0:"optional",children:s}),Object(u.jsx)("input",{type:a,id:t,className:"form-control"+this.getInputValidState(),onChange:this.handleChange,value:this.state.value,placeholder:i,required:n})]})}}]),a}(n.a.Component);function h(e){return Object(u.jsx)("div",{className:"form-group mt-2",children:Object(u.jsx)("button",{type:"submit",className:"btn btn-warning",children:e.value})})}function m(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("img",{className:"d-none d-lg-block",src:"https://picsum.photos/1000/1000",alt:"Header"}),Object(u.jsx)("img",{className:"d-block d-lg-none",src:"https://picsum.photos/600/250",alt:"Header"})]})}p.defaultProps={type:"text",label:"",required:!1,compact:!1,placeholder:"",isValid:null,onChange:function(e){}},h.defaultProps={value:"Envoyer"};var j=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),s.validateEmail()&&s.validatePassword()&&s.validatePasswordCheck()?alert("Le formulaire est valide !"):alert("Le formulaire n'est pas valide...")},s.updateEmail=function(e){s.setState({email:e})},s.updatePassword=function(e){s.setState({password:e})},s.updatePasswordCheck=function(e){s.setState({passwordCheck:e})},s.state={email:"",password:"",passwordCheck:""},s}return Object(o.a)(a,[{key:"validateEmail",value:function(){var e=this.state.email;return e?function(e){return null!==e.match(/^\w+(?:[-_.]\w+)*@[\w-]+(\.[a-z]{2,4})+$/gm)}(e):null}},{key:"validatePassword",value:function(){var e=this.state.password;return e?e.length>=8:null}},{key:"validatePasswordCheck",value:function(){var e=this.state,t=e.password,a=e.passwordCheck;return a?a===t:null}},{key:"renderEmailField",value:function(){return Object(u.jsx)(p,{id:"email",type:"email",label:"Email",placeholder:"jean-dupont@gmail.com",onChange:this.updateEmail,isValid:this.validateEmail(),required:!0})}},{key:"renderPasswordField",value:function(){return Object(u.jsx)(p,{id:"password",type:"password",label:"Mot de passe",placeholder:"Au moins 8 caract\xe8res",isValid:this.validatePassword(),onChange:this.updatePassword,required:!0,compact:!0})}},{key:"renderPasswordCheckField",value:function(){return Object(u.jsx)(p,{id:"passwordCheck",type:"password",label:"V\xe9rifiez le mot de passe",onChange:this.updatePasswordCheck,isValid:this.validatePasswordCheck(),required:!0,compact:!0})}},{key:"render",value:function(){var e=this.props.title;return Object(u.jsxs)("div",{className:"d-flex form rounded shadow mx-auto overflow-hidden flex-column flex-lg-row",id:"signup",children:[Object(u.jsx)(m,{}),Object(u.jsx)("form",{className:"justify-content-center p-4 container-fluid",onSubmit:this.handleSubmit,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("h2",{className:"fw-bold mb-4",children:e}),Object(u.jsx)(p,{id:"lastName",type:"text",label:"Nom",placeholder:"Dupont",compact:!0}),Object(u.jsx)(p,{id:"firstName",type:"text",label:"Pr\xe9nom",placeholder:"Jean",compact:!0}),this.renderEmailField(),this.renderPasswordField(),this.renderPasswordCheckField(),Object(u.jsx)("small",{className:"form-text text-muted mt-3",children:"Les champs marqu\xe9s d'un * sont obligatoires"}),Object(u.jsx)(h,{value:"Inscription"})]})})]})}}]),a}(n.a.Component);j.defaultProps={title:""};a(14);var v=function(){return Object(u.jsx)("div",{className:"App container my-5",children:Object(u.jsx)(j,{title:"Inscrivez-vous"})})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.c3278053.chunk.js.map