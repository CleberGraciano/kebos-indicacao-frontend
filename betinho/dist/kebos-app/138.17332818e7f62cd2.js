"use strict";(self.webpackChunkkebos_app=self.webpackChunkkebos_app||[]).push([[138],{6138:(T,g,o)=>{o.r(g),o.d(g,{LoginModule:()=>U});var m=o(5546),d=o(3509),r=o(3075),l=o(2340),e=o(5e3),u=o(4352),p=o(1645),f=o(9808),h=o(5270),c=o(1047),v=o(9359),x=o(2683),L=o(5017),C=o(6042),S=o(2643);function b(t,s){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"span",27),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const a=e.\u0275\u0275nextContext(2);return a.passwordVisible=!a.passwordVisible}),e.\u0275\u0275elementEnd()}if(2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("nzType",n.passwordVisible?"eye-invisible":"eye")}}function y(t,s){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().login()}),e.\u0275\u0275elementStart(2,"div",3),e.\u0275\u0275element(3,"img",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",5)(5,"div",6)(6,"label",7),e.\u0275\u0275text(7,"Usu\xe1rio"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(8,"input",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"div",9)(10,"label",10),e.\u0275\u0275text(11,"Senha"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"nz-input-group",11),e.\u0275\u0275element(13,"input",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(14,b,1,1,"ng-template",null,13,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"div",14)(17,"div",15)(18,"button",16),e.\u0275\u0275text(19,"Entrar"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(20,"div",17)(21,"p",18),e.\u0275\u0275text(22," Acessar com: "),e.\u0275\u0275elementStart(23,"a",19),e.\u0275\u0275element(24,"img",20),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"a",21),e.\u0275\u0275element(26,"img",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"a",21),e.\u0275\u0275element(28,"img",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"a",21),e.\u0275\u0275element(30,"img",24),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(31,"div",25)(32,"button",26),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().isLogin=!1}),e.\u0275\u0275text(33,"Esqueci minha senha"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementContainerEnd()}if(2&t){const n=e.\u0275\u0275reference(15),i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",i.loginForm),e.\u0275\u0275advance(11),e.\u0275\u0275property("nzSuffix",n),e.\u0275\u0275advance(1),e.\u0275\u0275property("type",i.passwordVisible?"text":"password"),e.\u0275\u0275advance(10),e.\u0275\u0275propertyInterpolate("href",i.googleURL,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(2),e.\u0275\u0275propertyInterpolate("href",i.facebookURL,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(2),e.\u0275\u0275propertyInterpolate("href",i.githubURL,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(2),e.\u0275\u0275propertyInterpolate("href",i.linkedinURL,e.\u0275\u0275sanitizeUrl)}}function w(t,s){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"form",28),e.\u0275\u0275listener("ngSubmit",function(){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().forgotPassword()}),e.\u0275\u0275elementStart(2,"div",3),e.\u0275\u0275element(3,"img",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",5)(5,"div",6)(6,"label",29),e.\u0275\u0275text(7,"E-mail"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(8,"input",30),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"div",31)(10,"button",32),e.\u0275\u0275text(11,"Recuperar Senha"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(12,"div",33)(13,"button",26),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().isLogin=!0}),e.\u0275\u0275text(14,"Acessar com Login"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementContainerEnd()}if(2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("formGroup",n.forgotPasswordForm)}}const _=[{path:"",component:(()=>{class t{constructor(n,i,a,F){this.formBuilder=n,this.authenticationService=i,this.router=a,this.notificationService=F,this.googleURL=l.N.GOOGLE_AUTH_URL,this.facebookURL=l.N.FACEBOOK_AUTH_URL,this.githubURL=l.N.GITHUB_AUTH_URL,this.linkedinURL=l.N.LINKEDIN_AUTH_URL,this.passwordVisible=!1,this.isLogin=!0}ngOnInit(){this.loginForm=this.formBuilder.group({login:["",r.Validators.required],password:["",r.Validators.required]}),this.forgotPasswordForm=this.formBuilder.group({email:["",r.Validators.required]})}login(){this.loginForm.valid&&this.authenticationService.login(this.loginForm.value.login,this.loginForm.value.password).subscribe(n=>this.router.navigate(["/home"]),n=>this.notificationService.error("Ops...","Usu\xe1rio e/ou senha est\xe3o incorretos."))}forgotPassword(){this.forgotPasswordForm.valid?this.authenticationService.forgotPassword(this.forgotPasswordForm.controls.email.value).subscribe(n=>{this.isLogin=!0,this.notificationService.success("Sucesso!","Acesse sua caixa de e-mail!")}):this.notificationService.error("Aten\xe7\xe3o!","Insira um e-mail valido!")}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(r.FormBuilder),e.\u0275\u0275directiveInject(u.$),e.\u0275\u0275directiveInject(m.F0),e.\u0275\u0275directiveInject(p.g))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-login"]],decls:3,vars:2,consts:[[1,"d-flex","container","w-100","login-container","align-items-center","justify-content-center"],[4,"ngIf"],["id","loginForm",1,"login-form","py-5","px-3","shadow",3,"formGroup","ngSubmit"],[1,"row","d-flex","align-items-center","justify-content-center"],["src","/assets/images/logo.png",1,"login-form-logo"],[1,"row","mt-3","px-3"],[1,"form-group","mb-3"],["for","login"],["nz-input","","formControlName","login","name","login","autocomplete","login"],[1,"form-group"],["for","password"],[3,"nzSuffix"],["nz-input","","formControlName","password","autocomplete","current-password",3,"type"],["suffixTemplate",""],[1,"row","mt-4","px-3"],[1,"d-flex","flex-column"],["nz-button","","nzType","primary","type","submit","form","loginForm","nzSize","default",1,"mb-3"],[1,"row","mt-2"],[1,"social-login","text-center"],[1,"ms-2",3,"href"],["alt","Login with Google","src","/assets/images/redes-sociais/google.png",1,"btn-img"],[3,"href"],["alt","Login with Facebook","src","/assets/images/redes-sociais/facebook.png",1,"btn-img"],["alt","Login with Github","src","/assets/images/redes-sociais/github.png",1,"btn-img"],["alt","Login with Linkedin","src","/assets/images/redes-sociais/linkedin.png",1,"btn-img-linkedin"],[1,"row","link"],["nz-button","","nzType","link","type","button","nzSize","default",3,"click"],["nz-icon","",3,"nzType","click"],["id","forgotPasswordForm",1,"login-form","py-5","px-3","shadow",3,"formGroup","ngSubmit"],["for","email"],["nz-input","","formControlName","email","name","email"],[1,"col-12","mt-2"],["nz-button","","nzType","primary","type","submit","form","forgotPasswordForm","nzSize","default","nzBlock","",1,"mb-3"],[1,"row","link","mt-3"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275template(1,y,34,7,"ng-container",1),e.\u0275\u0275template(2,w,15,1,"ng-container",1),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.isLogin),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!i.isLogin))},directives:[f.O5,r.\u0275NgNoValidate,r.NgControlStatusGroup,h.Y,r.FormGroupDirective,c.Zp,r.DefaultValueAccessor,r.NgControlStatus,r.FormControlName,v.x,x.w,c.gB,c.ke,L.Ls,C.ix,S.dQ],styles:[".login-container[_ngcontent-%COMP%]{height:100vh}.login-form[_ngcontent-%COMP%]{width:400px;border-radius:20px}.login-form-logo[_ngcontent-%COMP%]{width:200px;height:auto;margin:1.2rem auto}.social-login[_ngcontent-%COMP%]   .btn-img[_ngcontent-%COMP%]{width:25px;height:auto;padding:.6rem 0;margin-right:15px}.btn-img-linkedin[_ngcontent-%COMP%]{width:auto;height:45px;padding:.6rem 0;margin-right:10px}.social-login[_ngcontent-%COMP%]{font-size:12px}"]}),t})(),canActivate:[d.A],outlet:"login"}];let z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.Bz.forChild(_)],m.Bz]}),t})();var E=o(8927);let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[E.m,z]]}),t})()}}]);