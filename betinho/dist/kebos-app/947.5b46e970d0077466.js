"use strict";(self.webpackChunkkebos_app=self.webpackChunkkebos_app||[]).push([[947],{4188:(I,u,i)=>{i.r(u),i.d(u,{SignupModule:()=>V});var c=i(3963),l=i(5546),g=i(3509),a=i(3075),d=i(5812),t=i(5e3),p=i(6529),f=i(4352),v=i(1645),h=i(5270),m=i(1047),S=i(9359),y=i(2683),C=i(5017),w=i(6042),b=i(2643);const x=["formElement"];function z(n,s){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"span",25),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const r=t.\u0275\u0275nextContext();return r.passwordVisible=!r.passwordVisible}),t.\u0275\u0275elementEnd()}if(2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275property("nzType",e.passwordVisible?"eye-invisible":"eye")}}const F=[{path:"",component:(()=>{class n{constructor(e,o,r,M,N,P){this.formBuilder=e,this.formService=o,this.authenticationService=r,this.notificationService=M,this.router=N,this.socialAuthService=P,this.passwordVisible=!1}ngOnInit(){this.signupForm=this.formBuilder.group({displayName:["",a.Validators.required],email:["",[a.Validators.required,a.Validators.email]],password:["",a.Validators.required],matchingPassword:["",a.Validators.required]})}signInWithFB(){this.socialAuthService.signIn(d.LP.PROVIDER_ID).then(e=>{this.cadastroRedeSocial={userID:null==e?void 0:e.id,providerUserId:null==e?void 0:e.id,displayName:null==e?void 0:e.name,email:null==e?void 0:e.email,socialProvider:null==e?void 0:e.provider,password:null==e?void 0:e.id,matchingPassword:null==e?void 0:e.id},this.submit()})}submit(){if(this.cadastroRedeSocial)this.authenticationService.sigup(this.cadastroRedeSocial).subscribe(e=>{this.notificationService.success("Sucesso!","Seu usu\xe1rio foi cadastrado com sucesso"),setTimeout(()=>this.router.navigate(["/login"]),1e3)},e=>{this.notificationService.error("Aten\xe7\xe3o:","Endere\xe7o de email j\xe1 est\xe1 em uso!")});else{const e=this.formService.getValidationsMessages(this.signupForm,this.formElement);if(!this.validatePassword())return void this.notificationService.error("Aten\xe7\xe3o:","As senhas est\xe3o diferentes!");if(e.length)return void this.notificationService.warn("Os seguintes campos abaixo devem ser preenchidos corretamente:",this.formService.createValidationList(e));if(this.signupForm.valid){let o=Object.assign({},this.signupForm.getRawValue());this.authenticationService.sigup(o).subscribe(r=>{this.notificationService.success("Sucsesso!","Seu usuario foi cadastrado com sucesso"),setTimeout(()=>{this.router.navigate(["/login"])},1e3)})}}}login(){this.router.navigate(["/login"])}validatePassword(){return this.passwordForm.value===this.passwordConfirmForm.value}get passwordForm(){return this.signupForm.controls.password}get passwordConfirmForm(){return this.signupForm.controls.matchingPassword}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(a.FormBuilder),t.\u0275\u0275directiveInject(p.o),t.\u0275\u0275directiveInject(f.$),t.\u0275\u0275directiveInject(v.g),t.\u0275\u0275directiveInject(l.F0),t.\u0275\u0275directiveInject(d.e8))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["app-signup"]],viewQuery:function(e,o){if(1&e&&t.\u0275\u0275viewQuery(x,5),2&e){let r;t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(o.formElement=r.first)}},decls:37,vars:5,consts:[[1,"d-flex","container","w-100","login-container","align-items-center","justify-content-center"],["id","signupForm",1,"login-form","py-5","px-3","shadow",3,"formGroup","ngSubmit"],["formElement",""],[1,"row","d-flex","align-items-center","justify-content-center"],["src","/assets/images/logo.png",1,"login-form-logo"],[1,"row","mt-3","px-3"],[1,"form-group","mb-3"],["for","displayName"],["nz-input","","formControlName","displayName","name","displayName"],["for","email"],["nz-input","","formControlName","email","name","email"],["for","password"],[3,"nzSuffix"],["nz-input","","formControlName","password","autocomplete","current-password",3,"type"],["for","matchingPassword"],["nz-input","","formControlName","matchingPassword","autocomplete","current-password",3,"type"],["suffixTemplate",""],[1,"col-12","mt-2"],["nz-button","","nzType","primary","type","submit","form","signupForm","nzSize","default","nzBlock","",1,"mb-3"],[1,"row","mt-2"],[1,"social-login","text-center"],["type","button",1,"btn","btn-social-icon","btn-google",3,"click"],["alt","Login with Facebook","src","/assets/images/redes-sociais/facebook.png",1,"btn-img"],[1,"row","link","mt-3"],["nz-button","","nzType","link","type","button","nzSize","default",3,"click"],["nz-icon","",3,"nzType","click"]],template:function(e,o){if(1&e&&(t.\u0275\u0275elementStart(0,"div",0)(1,"form",1,2),t.\u0275\u0275listener("ngSubmit",function(){return o.submit()}),t.\u0275\u0275elementStart(3,"div",3),t.\u0275\u0275element(4,"img",4),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"div",5)(6,"div",6)(7,"label",7),t.\u0275\u0275text(8,"Nome Completo"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(9,"input",8),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(10,"div",6)(11,"label",9),t.\u0275\u0275text(12,"E-mail"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(13,"input",10),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(14,"div",6)(15,"label",11),t.\u0275\u0275text(16,"Senha"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(17,"nz-input-group",12),t.\u0275\u0275element(18,"input",13),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(19,"div",6)(20,"label",14),t.\u0275\u0275text(21,"Confirmar Senha"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(22,"nz-input-group",12),t.\u0275\u0275element(23,"input",15),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(24,z,1,1,"ng-template",null,16,t.\u0275\u0275templateRefExtractor),t.\u0275\u0275elementStart(26,"div",17)(27,"button",18),t.\u0275\u0275text(28,"Cadastrar Agora"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(29,"div",19)(30,"p",20),t.\u0275\u0275text(31," Cadastra com: "),t.\u0275\u0275elementStart(32,"button",21),t.\u0275\u0275listener("click",function(){return o.signInWithFB()}),t.\u0275\u0275element(33,"img",22),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(34,"div",23)(35,"button",24),t.\u0275\u0275listener("click",function(){return o.login()}),t.\u0275\u0275text(36,"Acessar com Login"),t.\u0275\u0275elementEnd()()()()),2&e){const r=t.\u0275\u0275reference(25);t.\u0275\u0275advance(1),t.\u0275\u0275property("formGroup",o.signupForm),t.\u0275\u0275advance(16),t.\u0275\u0275property("nzSuffix",r),t.\u0275\u0275advance(1),t.\u0275\u0275property("type",o.passwordVisible?"text":"password"),t.\u0275\u0275advance(4),t.\u0275\u0275property("nzSuffix",r),t.\u0275\u0275advance(1),t.\u0275\u0275property("type",o.passwordVisible?"text":"password")}},directives:[a.\u0275NgNoValidate,a.NgControlStatusGroup,h.Y,a.FormGroupDirective,m.Zp,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlName,S.x,y.w,m.gB,m.ke,C.Ls,w.ix,b.dQ],styles:[".login-container[_ngcontent-%COMP%]{height:100vh}.login-form[_ngcontent-%COMP%]{width:400px;border-radius:20px}.login-form-logo[_ngcontent-%COMP%]{width:200px;height:auto;margin:1.2rem auto}.social-login[_ngcontent-%COMP%]   .btn-img[_ngcontent-%COMP%]{width:25px;height:auto;padding:.6rem 0;margin-right:15px}.btn-img[_ngcontent-%COMP%]{width:auto;height:45px;padding:.6rem 0}.social-login[_ngcontent-%COMP%]{font-size:12px}"]}),n})(),canActivate:[g.A],outlet:"signup"}];let E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[[l.Bz.forChild(F)],l.Bz]}),n})(),V=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[[c.m,E]]}),n})()}}]);