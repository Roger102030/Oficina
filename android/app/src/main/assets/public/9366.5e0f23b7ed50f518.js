"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9366],{9366:(A,l,d)=>{d.r(l),d.d(l,{TipoServicosAddEditPageModule:()=>S});var p=d(6895),n=d(433),e=d(8058),c=d(2598),o=d(8256),u=d(7622),m=d(4465);function v(i,s){if(1&i){const t=o.EpF();o.TgZ(0,"ion-button",16),o.NdJ("click",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.iniciarEdicao())}),o._uU(1," Alterar dados "),o.qZA()}}function g(i,s){if(1&i){const t=o.EpF();o.TgZ(0,"div",4)(1,"ion-grid")(2,"ion-row")(3,"ion-col",17)(4,"ion-button",18),o._uU(5," Gravar "),o.qZA()(),o.TgZ(6,"ion-col",17)(7,"ion-button",19),o.NdJ("click",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.cancelarEdicao())}),o._uU(8," Cancelar "),o.qZA()()()()()}}const f=[{path:"",component:(()=>{class i{constructor(t,r,a,T,E){this.route=t,this.tipoServicoService=r,this.formBuilder=a,this.toastService=T,this.router=E,this.modoDeEdicao=!1}iniciarEdicao(){this.modoDeEdicao=!0}ngOnInit(){const t=Number(this.route.snapshot.paramMap.get("id"));t>0?this.tipoServico=this.tipoServicoService.getById(t):(this.tipoServico={id:t,nome:"",valor:0},this.modoDeEdicao=!0),this.tipoServicosForm=this.formBuilder.group({id:[this.tipoServico.id],nome:[this.tipoServico.nome,n.kI.required],valor:[this.tipoServico.valor,n.kI.required]})}submit(){this.tipoServicoService.update(this.tipoServicosForm.value),this.toastService.presentToast("Grava\xe7\xe3o bem sucedida",3e3,"top"),this.router.navigateByUrl(""),this.modoDeEdicao=!1}cancelarEdicao(){this.tipoServicosForm.setValue(this.tipoServico),this.modoDeEdicao=!1}}return i.\u0275fac=function(t){return new(t||i)(o.Y36(c.gz),o.Y36(u.x),o.Y36(n.qu),o.Y36(m.k),o.Y36(c.F0))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-tipo-servicos-add-edit"]],decls:26,vars:5,consts:[["slot","start"],["defaultHref",""],["padding",""],["color","light"],["no-padding",""],["col-3","","align-self-center",""],["src","assets/imgs/tab_servicos.png",2,"width","40px","height","40px"],["col-9","","align-self-center",""],[2,"font-size","23px"],[3,"formGroup","submit"],["lines","none",3,"disabled"],["position","floating",1,"label-input-title"],["formControlName","nome","type","text",2,"margin-left","3%"],["text-right","","formControlName","valor","type","number"],["shape","round","color","primary","expand","block","padding","",3,"click",4,"ngIf"],["no-padding","",4,"ngIf"],["shape","round","color","primary","expand","block","padding","",3,"click"],["col-6",""],["shape","round","color","success","size","small","padding-expand","block","type","submit"],["shape","round","color","warning","size","small","padding-expand","block",3,"click"]],template:function(t,r){1&t&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),o._UZ(3,"ion-back-button",1),o.qZA(),o.TgZ(4,"ion-title"),o._uU(5,"Tipos de Servi\xe7os"),o.qZA()()(),o.TgZ(6,"ion-content",2)(7,"ion-item-divider",3)(8,"ion-grid",4)(9,"ion-row",4)(10,"ion-col",5),o._UZ(11,"ion-img",6),o.qZA()(),o.TgZ(12,"ion-col",7)(13,"ion-label",8),o._uU(14,"Dados do servi\xe7o"),o.qZA()()()(),o.TgZ(15,"form",9),o.NdJ("submit",function(){return r.submit()}),o.TgZ(16,"ion-item",10)(17,"ion-label",11),o._uU(18," Nome "),o.qZA(),o._UZ(19,"ion-input",12),o.qZA(),o.TgZ(20,"ion-item",10)(21,"ion-label",11),o._uU(22," Valor "),o.qZA(),o._UZ(23,"ion-input",13),o.qZA(),o.YNc(24,v,2,0,"ion-button",14),o.YNc(25,g,9,0,"div",15),o.qZA()()),2&t&&(o.xp6(15),o.Q6J("formGroup",r.tipoServicosForm),o.xp6(1),o.Q6J("disabled",!r.modoDeEdicao),o.xp6(4),o.Q6J("disabled",!r.modoDeEdicao),o.xp6(4),o.Q6J("ngIf",!r.modoDeEdicao),o.xp6(1),o.Q6J("ngIf",r.modoDeEdicao))},dependencies:[p.O5,n._Y,n.JJ,n.JL,e.oU,e.YG,e.Sm,e.wI,e.W2,e.jY,e.Gu,e.Xz,e.pK,e.Ie,e.rH,e.Q$,e.Nd,e.wd,e.sr,e.as,e.j9,e.cs,n.sg,n.u]}),i})()}];let h=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[c.Bz.forChild(f),c.Bz]}),i})(),S=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[p.ez,n.u5,e.Pc,h,n.UX]}),i})()}}]);