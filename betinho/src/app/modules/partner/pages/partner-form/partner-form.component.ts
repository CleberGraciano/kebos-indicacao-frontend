import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { AuthenticationService } from '@core/auth/authentication.service';
import { Masks } from '@core/custom-validators/masks';
import { LocalStorageService } from '@core/local-storage/local-storage.service';
import { FormService } from '@core/services/form.service';
import { NotificationService } from '@core/services/notification.service';
import { PartnerService } from '@modules/partner/partner.service';
import { TermsOfUse } from '@shared/termsOfUse/text';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat)

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.scss']
})
export class PartnerFormComponent implements OnInit {


  formPartner!: FormGroup;
  formAddress!: FormGroup;
  formBank!: FormGroup;
  formContact!: FormGroup;
  @ViewChild('formElementPartner') formElementPartner!: ElementRef;
  @ViewChild('formElementAddress') formElementAddress!: ElementRef;
  @ViewChild('formElementBank') formElementBank!: ElementRef;
  @ViewChild('formElementContact') formElementContact!: ElementRef;
  routePrevious = "partner";

  action!: RouteAction;
  param!: number;
  create!: boolean;
  edit!: boolean;
  view!: boolean;
  routeAction = RouteAction;

  maskTEL = { mask: Masks.telefone, guide: false };
  maskCPF = { mask: Masks.cpf, guide: false };
  maskRG = { mask: Masks.rg, guide: false };
  maskCEP = { mask: Masks.cep, guide: false };
  dateFormat = "dd/MM/YYYY";

  fileList: any[] = [];
  typesAcountBack: any[] = [];
  listaEstados: any[] = [];
  listaMunicipios: any[] = [];
  termoUso: boolean = false;
  textTermsOfUse: string = TermsOfUse;
  imageUser!: string;

  passwordVisible: boolean = false;
  password?: string;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    public route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private service: PartnerService,
    private modalService: NzModalService,
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.route.data.subscribe((res) => this.action = res['acao']);
    this.route.params.subscribe((res) => this.param = res['param']);

    this.create = this.action == RouteAction.Insert;
    this.edit = this.action == RouteAction.Edit;
    this.view = this.action == RouteAction.View;

    this.formPartner = this.formBuilder.group({
      email: ['', Validators.required],
      enabled: [''],
      displayName: ['', Validators.required],
      password: [''],
      passwordConfirm: [''],
      statusCadastro: [''],
      imagem: ['', Validators.required],
      dataNascimento: [''],
      cpf: ['', Validators.required],
      cep: [''],
      logradouro: [''],
      numero: [''],
      bairro: [''],
      cidade: [''],
      uf: [],
      celular: ['', Validators.required],
      foneFixo: [''],
      foneComercial: [''],
      pix: ['', Validators.required],
      banco: ['', Validators.required],
      tipoContaEnum: ['', Validators.required],
      agencia: ['', Validators.required],
      conta: ['', Validators.required],
      digito: ['', Validators.required],
      termoUso: [''],
      provider: ['local'],
    })

    // this.formAddress = this.formBuilder.group({
    //   cep: ['', Validators.required],
    //   logradouro: ['', Validators.required],
    //   numero: ['', Validators.required],
    //   bairro: ['', Validators.required],
    //   cidade: [undefined, Validators.required],
    //   uf: [undefined, Validators.required],
    // })

    // this.formBank = this.formBuilder.group({
    //   pix: ['', Validators.required],
    //   banco: ['', Validators.required],
    //   tipoContaEnum: [undefined, Validators.required],
    //   agencia: ['', Validators.required],
    //   conta: ['', Validators.required],
    //   digito: ['', Validators.required],
    // })

    // this.formContact = this.formBuilder.group({
    //   celular: ['', Validators.required],
    //   foneFixo: ['', Validators.required],
    //   foneComercial: ['', Validators.required]
    // })

    this.service.getTiposConta().subscribe(res => this.typesAcountBack = res);
    this.service.getEstados().subscribe(res => this.listaEstados = res);

    this.ufForm.valueChanges.subscribe((val) => {
      if (val)
        this.service.getMunicipios(val).subscribe(res => this.listaMunicipios = res);
    })

    if (this.edit) {
      if (this.param) {
        this.service.getIdPartner(this.param).subscribe((res: any) => {
          res.uf = Number(res.uf);
          res.dataNascimento = this.editFormatDate(res.dataNascimento);

          this.formPartner.patchValue(res);
          // this.formAddress.patchValue(res.address);
          // this.formBank.patchValue(res.financeData);
          // this.formContact.patchValue(res.contact);
          this.imageUser = res.imagem;
          // this.termoUso = res.termoUso;
        })
      }
      else {
        this.returnPage();
      }
    }
  }

  savePartner(): void {
    let messages: any[] = [];
    this.formPartner.controls['imagem'].setValue(this.imageUser);

    const messagesFormPartner = this.formService.getValidationsMessages(this.formPartner, this.formElementPartner);
    // const messagesFormAddress = this.formService.getValidationsMessages(this.formAddress, this.formElementAddress);
    // const messagesFormBank = this.formService.getValidationsMessages(this.formBank, this.formElementBank);
    // const messagesFormContact = this.formService.getValidationsMessages(this.formContact, this.formElementContact);
    // messages = messages.concat(messagesFormPartner, messagesFormAddress, messagesFormBank, messagesFormContact);

    if (!this.termosUsoForm.value) {
      messages.push('Termos de Uso')
    }

    if (messages.length) {
      this.notificationService.warn('Os seguintes campos abaixo devem ser preenchidos corretamente:', this.formService.createValidationList(messages));
      return;
    }

    // if (this.formPartner.valid, this.formAddress.valid, this.formBank.valid, this.formContact.valid) {
    if (this.formPartner.valid) {
      const obj = { ...this.formPartner.getRawValue() };
      // obj.address = { ...this.formAddress.getRawValue() };
      // obj.financeData = { ...this.formBank.getRawValue() };
      // obj.contact = { ...this.formContact.getRawValue() };
      // obj.imagem = this.imageUser;
      // obj.termoUso = this.termoUso;

      obj.cpf = this.removeCaracteres(obj.cpf)
      obj.cep = this.removeCaracteres(obj.cep);
      obj.celular = this.removeCaracteres(obj.celular);
      obj.foneFixo = this.removeCaracteres(obj.foneFixo);
      obj.foneComercial = this.removeCaracteres(obj.foneComercial);

      if (obj.dataNascimento)
        obj.dataNascimento = dayjs(obj.dataNascimento).format('DD-MM-YYYY');

      obj.id = this.authenticationService.currentUserValue.id;
      obj.providerUserId = this.authenticationService.currentUserValue.id;

      const userData = this.authenticationService.currentUserValue;
      const pageHome = userData.statusCadastro == false ? true : false;
      userData.statusCadastro = true;
      this.authenticationService.setCurrentUser(userData)

      switch (this.action) {
        case RouteAction.Insert:
          this.service.insertPartner(obj).subscribe((res: any) => {
            this.notificationService.success('Cadastro realizado com sucesso!!!', '');
            this.returnPage();
          })
          break;
        case RouteAction.Edit:
          console.log(obj)
          this.service.editPartner(this.param, obj).subscribe((data) => {
            this.notificationService.success('Parceiro editado com sucesso!!!', '');
            pageHome ? this.homePage() : this.returnPage();
          })
          break;
      }
    }
  }

  openTermsOfUse(): void {
    this.modalService.create({
      nzTitle: 'Termos de Aceite de Uso de Software/Plataforma',
      nzContent: this.textTermsOfUse,
      nzOkText: 'Aceito',
      nzCancelText: 'Não Aceito',
      nzWidth: 800,
      nzClassName: 'termsOfUseModal',
      nzOnOk: () => {
        this.termoUso = true;
      },
      nzOnCancel: () => {
        this.termoUso = false;
      }
    });
  }

  cancel(): void {
    this.formPartner.reset();
    this.returnPage();
  }

  returnPage(): void {
    this.router.navigate([`/${this.routePrevious}`], { queryParams: { param: true } })
  }

  homePage(): void {
    this.router.navigate(['/'])
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const base64Data = event.target?.result as string;
      this.imageUser = base64Data;
    };
    reader.readAsDataURL(file as unknown as File);
    return false;
  }

  validatePassword() {
    let password = this.passwordForm.value;
    let passwordConfirm = this.passwordConfirmForm.value;
    (password !== passwordConfirm) && this.notificationService.error('Atenção:', 'As senhas estão diferentes!');
  }

  removeCaracteres(value: string) {
    return (value) ? value.replace(/[^\d]/g, "") : value
  }

  editFormatDate(data: any) {
    let dataNascimento = data.replace(/-/g, '/');
    const partes = dataNascimento.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const ano = parseInt(partes[2], 10);

    if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
      const data = new Date(ano, mes, dia);
      return data;
    }
    return data
  }

  get ufForm() {
    return this.formPartner.controls['uf'];
  }

  get passwordForm() {
    return this.formPartner.controls['password'];
  }

  get passwordConfirmForm() {
    return this.formPartner.controls['passwordConfirm'];
  }

  get termosUsoForm() {
    return this.formPartner.controls['termoUso'];
  }
}
