"use strict";(self.webpackChunkkebos_app=self.webpackChunkkebos_app||[]).push([[138],{6138:(F,m,n)=>{n.r(m),n.d(m,{LoginModule:()=>S});var a=n(7152),u=n(3509),i=n(3075),t=n(5e3),d=n(4352),g=n(5270),c=n(1047),p=n(9359),f=n(6042),v=n(2643),h=n(2683);const C=[{path:"",component:(()=>{class o{constructor(e,l,s){this.formBuilder=e,this.authenticationService=l,this.router=s}ngOnInit(){this.loginForm=this.formBuilder.group({login:["",i.Validators.required],password:["",i.Validators.required]})}login(){this.loginForm.valid&&(console.log(this.loginForm.value),this.authenticationService.login(this.loginForm.value.login,this.loginForm.value.password).subscribe(e=>{this.router.navigate(["/home"])}))}}return o.\u0275fac=function(e){return new(e||o)(t.\u0275\u0275directiveInject(i.FormBuilder),t.\u0275\u0275directiveInject(d.$),t.\u0275\u0275directiveInject(a.F0))},o.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["app-login"]],decls:19,vars:1,consts:[[1,"d-flex","container","w-100","login-container","align-items-center","justify-content-center"],["id","loginForm",1,"login-form","py-5","px-3","shadow",3,"formGroup","ngSubmit"],[1,"row","d-flex","align-items-center","justify-content-center"],["src","/assets/images/logo.png",1,"login-form-logo"],[1,"row","mt-3","px-3"],[1,"form-group","mb-3"],["for","login"],["nz-input","","formControlName","login","name","login","autocomplete","login"],[1,"form-group"],["for","password"],["nz-input","","formControlName","password","type","password","autocomplete","current-password"],[1,"row","mt-5","px-3"],[1,"d-flex","flex-column"],["nz-button","","nzType","primary","type","submit","form","loginForm","nzSize","default",1,"mb-3"],["nz-button","","nzType","link","type","button","nzSize","default"]],template:function(e,l){1&e&&(t.\u0275\u0275elementStart(0,"div",0)(1,"form",1),t.\u0275\u0275listener("ngSubmit",function(){return l.login()}),t.\u0275\u0275elementStart(2,"div",2),t.\u0275\u0275element(3,"img",3),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"div",4)(5,"div",5)(6,"label",6),t.\u0275\u0275text(7,"Usu\xe1rio"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(8,"input",7),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(9,"div",8)(10,"label",9),t.\u0275\u0275text(11,"Senha"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(12,"input",10),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(13,"div",11)(14,"div",12)(15,"button",13),t.\u0275\u0275text(16,"Entrar"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(17,"button",14),t.\u0275\u0275text(18,"Esqueci minha senha"),t.\u0275\u0275elementEnd()()()()()),2&e&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("formGroup",l.loginForm))},directives:[i.\u0275NgNoValidate,i.NgControlStatusGroup,g.Y,i.FormGroupDirective,c.Zp,i.DefaultValueAccessor,i.NgControlStatus,i.FormControlName,p.x,f.ix,v.dQ,h.w],styles:[".login-container[_ngcontent-%COMP%]{height:100vh}.login-form[_ngcontent-%COMP%]{width:400px;border-radius:20px}.login-form-logo[_ngcontent-%COMP%]{width:200px;height:auto;margin:1.2rem auto}"]}),o})(),canActivate:[u.A],outlet:"login"}];let y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=t.\u0275\u0275defineInjector({imports:[[a.Bz.forChild(C)],a.Bz]}),o})();var z=n(363);let S=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=t.\u0275\u0275defineInjector({imports:[[z.m,y]]}),o})()}}]);