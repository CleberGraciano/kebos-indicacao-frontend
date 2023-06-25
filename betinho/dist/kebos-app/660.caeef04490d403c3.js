"use strict";(self.webpackChunkkebos_app=self.webpackChunkkebos_app||[]).push([[660],{2660:(J,f,l)=>{l.r(f),l.d(f,{SellerModule:()=>U});var I=l(363),m=l(7152),d=l(3275),a=l(3075),v=l(1386),e=l(5e3),V=l(6529),S=l(1645),_=l(5384);let h=(()=>{class n{constructor(t){this.apiService=t}filter(){return this.apiService.get("sellers")}insertSeller(t){return this.apiService.post("sellers",t)}editSeller(t,r){return this.apiService.put((n=>`sellers/${n}`)(t),r)}getIdSeller(t){return this.apiService.get((n=>`sellers/${n}`)(t))}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275inject(_.s))},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var z=l(5270),b=l(1047),g=l(9359),y=l(7795),x=l(9808),C=l(6042),E=l(2643),T=l(2683);const N=["formElement"];function k(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",18),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().cancel()}),e.\u0275\u0275text(1,"Cancelar"),e.\u0275\u0275elementEnd()}}function L(n,i){1&n&&(e.\u0275\u0275elementStart(0,"button",19),e.\u0275\u0275text(1,"Voltar"),e.\u0275\u0275elementEnd())}function j(n,i){1&n&&(e.\u0275\u0275elementStart(0,"button",20),e.\u0275\u0275text(1,"Confirmar"),e.\u0275\u0275elementEnd())}let F=(()=>{class n{constructor(t,r,o,s,u,W){this.formBuilder=t,this.formService=r,this.route=o,this.router=s,this.notificationService=u,this.service=W,this.routePrevious="seller",this.routeAction=d.c,this.maskTEL={mask:v.K.telefone,guide:!1}}ngOnInit(){this.route.data.subscribe(t=>this.action=t.acao),this.route.params.subscribe(t=>this.param=t.param),this.create=this.action==d.c.Insert,this.edit=this.action==d.c.Edit,this.view=this.action==d.c.View,this.formSeller=this.formBuilder.group({nome:["",a.Validators.required],email:["",a.Validators.required],telefone:["",a.Validators.required]}),this.edit&&(this.param?this.service.getIdSeller(this.param).subscribe(t=>this.formSeller.patchValue(t)):this.returnPage())}saveSeller(){const t=this.formService.getValidationsMessages(this.formSeller,this.formElement);if(t.length)this.notificationService.warn("Os seguintes campos abaixo devem ser preenchidos corretamente:",this.formService.createValidationList(t));else if(this.formSeller.valid){const r=Object.assign({},this.formSeller.getRawValue());switch(this.action){case d.c.Insert:this.service.insertSeller(r).subscribe(o=>{this.notificationService.success("Cadastro realizado com sucesso!!!",""),this.returnPage()});break;case d.c.Edit:this.service.editSeller(this.param,r).subscribe(o=>{this.notificationService.success("Vendedor editado com sucesso!!!",""),this.returnPage()})}}}cancel(){this.formSeller.reset(),this.returnPage()}returnPage(){this.router.navigate([`/${this.routePrevious}`])}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(a.FormBuilder),e.\u0275\u0275directiveInject(V.o),e.\u0275\u0275directiveInject(m.gz),e.\u0275\u0275directiveInject(m.F0),e.\u0275\u0275directiveInject(S.g),e.\u0275\u0275directiveInject(h))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-seller-form"]],viewQuery:function(t,r){if(1&t&&e.\u0275\u0275viewQuery(N,5),2&t){let o;e.\u0275\u0275queryRefresh(o=e.\u0275\u0275loadQuery())&&(r.formElement=o.first)}},decls:27,vars:6,consts:[[1,"row"],[1,"col-12","mb-4"],[1,"text-capitalize"],["id","formSeller","name","formSeller",3,"formGroup","ngSubmit"],["formElement",""],[1,"row","row-cols-1"],[1,"col","mb-3"],["for","nome",1,"form-label","required"],[1,"d-flex","flex-column"],["nz-input","","formControlName","nome","type","text"],["for","email",1,"form-label","required"],["nz-input","","formControlName","email","type","text"],["for","telefone",1,"form-label","required"],["nz-input","","formControlName","telefone","type","text",3,"textMask"],[1,"col-12","d-flex","justify-content-end","mt-3"],["class","capitalize me-2 btn-kebos-line rounded-pill","nz-button","","nzType","default","type","button","nzSize","default",3,"click",4,"ngIf"],["class","capitalize me-2 btn-kebos-line rounded-pill","nz-button","","nzType","default","type","button","nzSize","default",4,"ngIf"],["class","capitalize btn-kebos rounded-pill","nz-button","","nzType","primary","type","submit","nzSize","default",4,"ngIf"],["nz-button","","nzType","default","type","button","nzSize","default",1,"capitalize","me-2","btn-kebos-line","rounded-pill",3,"click"],["nz-button","","nzType","default","type","button","nzSize","default",1,"capitalize","me-2","btn-kebos-line","rounded-pill"],["nz-button","","nzType","primary","type","submit","nzSize","default",1,"capitalize","btn-kebos","rounded-pill"]],template:function(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h4",1)(2,"span",2),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(4,"div",0)(5,"form",3,4),e.\u0275\u0275listener("ngSubmit",function(){return r.saveSeller()}),e.\u0275\u0275elementStart(7,"div",5)(8,"div",6)(9,"label",7),e.\u0275\u0275text(10,"Nome"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",8),e.\u0275\u0275element(12,"input",9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(13,"div",6)(14,"label",10),e.\u0275\u0275text(15,"E-mail"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"div",8),e.\u0275\u0275element(17,"input",11),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(18,"div",6)(19,"label",12),e.\u0275\u0275text(20,"Telefone"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"div",8),e.\u0275\u0275element(22,"input",13),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(23,"div",14),e.\u0275\u0275template(24,k,2,0,"button",15),e.\u0275\u0275template(25,L,2,0,"button",16),e.\u0275\u0275template(26,j,2,0,"button",17),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",r.action==r.routeAction.Insert?"Cadastrar":r.action," Vendedor "),e.\u0275\u0275advance(2),e.\u0275\u0275property("formGroup",r.formSeller),e.\u0275\u0275advance(17),e.\u0275\u0275property("textMask",r.maskTEL),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",r.action!=r.routeAction.View),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.action==r.routeAction.View),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.action!=r.routeAction.View))},directives:[a.\u0275NgNoValidate,a.NgControlStatusGroup,z.Y,a.FormGroupDirective,b.Zp,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlName,g.x,y.hd,x.O5,C.ix,E.dQ,T.w],styles:[""]}),n})();var w=l(5017),M=l(2905),c=l(592),P=l(404),B=l(685),D=l(1686);const R=["tabela"];function Q(n,i){1&n&&e.\u0275\u0275element(0,"div")}function A(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td"),e.\u0275\u0275text(8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"td"),e.\u0275\u0275text(10),e.\u0275\u0275pipe(11,"brDate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"td",34)(13,"a",35),e.\u0275\u0275listener("click",function(){const s=e.\u0275\u0275restoreView(t).$implicit;return e.\u0275\u0275nextContext().edit(s)}),e.\u0275\u0275element(14,"span",36),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"a",37),e.\u0275\u0275listener("click",function(){const s=e.\u0275\u0275restoreView(t).$implicit;return e.\u0275\u0275nextContext().remove(s)}),e.\u0275\u0275element(16,"span",38),e.\u0275\u0275elementEnd()()()}if(2&n){const t=i.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.id),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.nome),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.email),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.telefone),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(11,5,null==t?null:t.created))}}function $(n,i){1&n&&e.\u0275\u0275element(0,"nz-empty",39),2&n&&e.\u0275\u0275property("nzNotFoundContent","Nenhum registro encontrado")}function G(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div",42)(1,"span",43)(2,"strong"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()()()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(t.total)}}function O(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div",40),e.\u0275\u0275template(1,G,4,1,"div",41),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.dataSet?null:t.dataSet.length)}}const Y=function(){return["/seller/insert"]},Z=function(){return{y:"200px",x:"max-content"}},K=[{path:"",component:(()=>{class n{constructor(t,r,o,s,u){this.formBuilder=t,this.route=r,this.router=o,this.notificationService=s,this.service=u,this.loadingTabela=!1,this.activeTable=!1,this.total=0,this.actions=[],this.routePrevious="seller",this.dateFormat="dd/MM/yyyy",this.maskTEL={mask:v.K.telefone,guide:!1}}ngOnInit(){this.formFiltroSeller=this.formBuilder.group({id:[""],nome:[""],email:[""],telefone:[""],created:[]}),this.search()}buscarDados(){this.loadingTabela=!0,this.service.filter().subscribe({next:t=>{var r,o;t&&(this.dataSet=t,null===(o=null===(r=this.nzTableComponent)||void 0===r?void 0:r.cdkVirtualScrollViewport)||void 0===o||o.checkViewportSize(),this.total=this.dataSet.length)},complete:()=>this.loadingTabela=!1,error:()=>this.loadingTabela=!1})}clear(){this.formFiltroSeller.reset()}search(){var t,r;null===(r=null===(t=this.nzTableComponent)||void 0===t?void 0:t.cdkVirtualScrollViewport)||void 0===r||r.scrollToIndex(0),this.filtro=this.formFiltroSeller.value,this.buscarDados()}cancel(){this.router.navigate(["/home"])}remove(t){}edit(t){this.router.navigate([`/${this.routePrevious}/edit/${t.id}`])}trackByIndex(t,r){return r.id}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(a.FormBuilder),e.\u0275\u0275directiveInject(m.gz),e.\u0275\u0275directiveInject(m.F0),e.\u0275\u0275directiveInject(S.g),e.\u0275\u0275directiveInject(h))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-seller-list"]],viewQuery:function(t,r){if(1&t&&e.\u0275\u0275viewQuery(R,5),2&t){let o;e.\u0275\u0275queryRefresh(o=e.\u0275\u0275loadQuery())&&(r.nzTableComponent=o.first)}},decls:66,vars:19,consts:[[4,"ngIf"],[1,"row"],[1,"col-12","d-flex","justify-content-between","mb-3"],[1,"mb-3","title"],["nz-button","","nzType","primary","type","submit","form","formFiltro","nzSize","default",1,"ms-2","rounded-pill","btn-text",3,"routerLink"],["nz-icon","","nzType","plus-circle"],["id","formFiltroSeller",3,"formGroup","ngSubmit"],[1,"col-12","mb-3"],["for","nome",1,"form-label"],["nz-input","","formControlName","nome","type","text"],[1,"row","row-cols-sm-4"],[1,"col","mb-3"],["for","id",1,"form-label"],["nz-input","","formControlName","id","type","number"],["for","email",1,"form-label"],["nz-input","","formControlName","email","type","text"],["for","telefone",1,"form-label"],["nz-input","","formControlName","telefone","type","text",3,"textMask"],["for","created",1,"form-label"],[1,"d-flex","flex-column"],["formControlName","created",3,"nzFormat"],[1,"d-flex","justify-content-end","mt-2","mb-3"],["nz-button","","nzType","default","nzSize","default","type","button",1,"me-2","rounded-pill",3,"click"],["nz-button","","nzType","primary","type","submit","form","formFiltro","nzSize","default",1,"ms-2","rounded-pill"],[1,"col-12"],[1,"my-3"],["id","id-table-sistema",1,"col-md-12"],[1,"padrao",3,"nzData","nzNoResult","nzShowPagination","nzVirtualItemSize","nzVirtualForTrackBy","nzFrontPagination","nzScroll","nzLoading","nzFooter"],["tabela",""],["scope","col"],["scope","col","nzWidth","100px",1,"text-center"],["nz-virtual-scroll",""],["empty",""],["footerTabela",""],[1,"text-center"],["nz-button","","nzType","text","nzDanger","","nz-tooltip","","nzTooltipTitle","Editar",1,"pointer","px-2","fs-6",3,"click"],["nz-icon","","nzType","edit","nzTheme","outline"],["nz-button","","nzType","text","nzDanger","","nz-tooltip","","nzTooltipTitle","Excluir",1,"pointer","px-2","fs-6",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline"],[3,"nzNotFoundContent"],[1,"d-flex","justify-content-end","align-items-center"],["class","me-4",4,"ngIf"],[1,"me-4"],[1,"azul-primario"]],template:function(t,r){if(1&t&&(e.\u0275\u0275template(0,Q,1,0,"div",0),e.\u0275\u0275elementStart(1,"div")(2,"div",1)(3,"div",2)(4,"h4",3),e.\u0275\u0275text(5,"Lista de Vendedores"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"button",4),e.\u0275\u0275element(7,"span",5),e.\u0275\u0275text(8," Cadastrar "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"form",6),e.\u0275\u0275listener("ngSubmit",function(){return r.search(),r.activeTable=!0}),e.\u0275\u0275elementStart(10,"div",1)(11,"div",7)(12,"label",8),e.\u0275\u0275text(13,"Nome"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(14,"input",9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(15,"div",10)(16,"div",11)(17,"label",12),e.\u0275\u0275text(18,"C\xf3digo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(19,"input",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"div",11)(21,"label",14),e.\u0275\u0275text(22,"E-mail"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(23,"input",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"div",11)(25,"label",16),e.\u0275\u0275text(26,"Telefone"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(27,"input",17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"div",11)(29,"label",18),e.\u0275\u0275text(30,"Data de Cadastro"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"div",19),e.\u0275\u0275element(32,"nz-date-picker",20),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(33,"div",21)(34,"button",22),e.\u0275\u0275listener("click",function(){return r.clear()}),e.\u0275\u0275text(35,"Limpar"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"button",23),e.\u0275\u0275text(37,"Pesquisar"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(38,"div",24)(39,"h6",25),e.\u0275\u0275text(40,"Resultado da Consulta"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(41,"div",26)(42,"nz-table",27,28)(44,"thead")(45,"tr")(46,"th",29),e.\u0275\u0275text(47,"C\xf3digo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(48,"th",29),e.\u0275\u0275text(49,"Nome"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(50,"th",29),e.\u0275\u0275text(51,"E-mail"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(52,"th",29),e.\u0275\u0275text(53,"Telefone"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(54,"th",29),e.\u0275\u0275text(55,"Data de Cadastro"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(56,"th",30),e.\u0275\u0275text(57,"A\xe7\xf5es"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(58,"tbody"),e.\u0275\u0275template(59,A,17,7,"ng-template",31),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(60,$,1,1,"ng-template",null,32,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(62,O,2,1,"ng-template",null,33,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(64,"div"),e.\u0275\u0275element(65,"router-outlet"),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275reference(61),s=e.\u0275\u0275reference(63);e.\u0275\u0275property("ngIf",0===r.route.children.length),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("d-none",0!==(null==r.route.children?null:r.route.children.length)),e.\u0275\u0275advance(5),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(17,Y)),e.\u0275\u0275advance(3),e.\u0275\u0275property("formGroup",r.formFiltroSeller),e.\u0275\u0275advance(18),e.\u0275\u0275property("textMask",r.maskTEL),e.\u0275\u0275advance(5),e.\u0275\u0275property("nzFormat",r.dateFormat),e.\u0275\u0275advance(10),e.\u0275\u0275property("nzData",r.dataSet)("nzNoResult",o)("nzShowPagination",!1)("nzVirtualItemSize",54)("nzVirtualForTrackBy",r.trackByIndex)("nzFrontPagination",!1)("nzShowPagination",!1)("nzScroll",e.\u0275\u0275pureFunction0(18,Z))("nzLoading",r.loadingTabela)("nzFooter",s)}},directives:[x.O5,C.ix,E.dQ,T.w,m.rH,w.Ls,a.\u0275NgNoValidate,a.NgControlStatusGroup,z.Y,a.FormGroupDirective,b.Zp,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlName,g.x,a.NumberValueAccessor,y.hd,M.uw,c.N8,c.Om,c.$Z,c.Uo,c._C,c.p0,c.zu,P.SY,B.p9,m.lC],pipes:[D.F],styles:[""]}),n})(),children:[{path:"insert",component:F,data:{breadcrumb:"Cadastrar",acao:d.c.Insert}},{path:"edit/:param",component:F,data:{breadcrumb:"Editar",acao:d.c.Edit}}]}];let H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.Bz.forChild(K)],m.Bz]}),n})(),U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[I.m,H]]}),n})()}}]);