import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { AuthenticationService } from '@core/auth/authentication.service';
import { Masks } from '@core/custom-validators/masks';
import { FormService } from '@core/services/form.service';
import { NotificationService } from '@core/services/notification.service';
import { PartnerService } from '@modules/partner/partner.service';
import { TermsOfUse } from '@shared/termsOfUse/text';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';

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
  dateFormat = "dd/MM/yyyy";

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
    private modalService: NzModalService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((res) => this.action = res['acao']);
    this.route.params.subscribe((res) => this.param = res['param']);

    this.create = this.action == RouteAction.Insert;
    this.edit = this.action == RouteAction.Edit;
    this.view = this.action == RouteAction.View;

    this.formPartner = this.formBuilder.group({
      displayName: ['', Validators.required],
      email: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      password: [],
      passwordConfirm: []
    })

    this.formAddress = this.formBuilder.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: [undefined, Validators.required],
      uf: [undefined, Validators.required],
    })

    this.formBank = this.formBuilder.group({
      pix: ['', Validators.required],
      banco: ['', Validators.required],
      tipoContaEnum: [undefined, Validators.required],
      agencia: ['', Validators.required],
      conta: ['', Validators.required],
      digito: ['', Validators.required],
    })

    this.formContact = this.formBuilder.group({
      celular: ['', Validators.required],
      foneFixo: ['', Validators.required],
      foneComercial: ['', Validators.required]
    })

    this.service.getTiposConta().subscribe(res => this.typesAcountBack = res);
    this.service.getEstados().subscribe(res => this.listaEstados = res);

    this.ufForm.valueChanges.subscribe((val) => {
      if (val)
        this.service.getMunicipios(val).subscribe(res => this.listaMunicipios = res);
    })

    if (this.edit) {
      if (this.param) {
        this.service.getIdPartner(this.param).subscribe(res => {
          this.formPartner.patchValue(res)
          this.formAddress.patchValue(res)
          this.formBank.patchValue(res)
          this.formContact.patchValue(res)
        })
      }
      else {
        this.returnPage();
      }
    }
  }

  savePartner(): void {
    let messages: any[]=[];
    const messagesFormPartner = this.formService.getValidationsMessages(this.formPartner, this.formElementPartner);
    const messagesFormAddress = this.formService.getValidationsMessages(this.formAddress, this.formElementAddress);
    const messagesFormBank = this.formService.getValidationsMessages(this.formBank, this.formElementBank);
    const messagesFormContact = this.formService.getValidationsMessages(this.formContact, this.formElementContact);
    messages = messages.concat(messagesFormPartner, messagesFormAddress, messagesFormBank, messagesFormContact);

    if (!this.termoUso) {
      messages.push('Termos de Uso')
    }

    if (messages.length) {
      this.notificationService.warn('Os seguintes campos abaixo devem ser preenchidos corretamente:', this.formService.createValidationList(messages));
      return;
    }

    if (this.formPartner.valid, this.formAddress.valid, this.formBank.valid, this.formContact.valid) {
      const obj = { ...this.formPartner.getRawValue() };
      obj.address = { ...this.formAddress.getRawValue() };
      obj.financeData = { ...this.formBank.getRawValue() };
      obj.contact = { ...this.formContact.getRawValue() };
      obj.imagem = this.imageUser;
      obj.termoUso = this.termoUso;

      console.log(obj)

      switch (this.action) {
        case RouteAction.Edit:
        case RouteAction.Insert:
          // this.service.insertPartner(obj).subscribe((data) => {
          //   this.notificationService.success('Cadastro realizado com sucesso!!!', '');
          //   this.returnPage();
          // })
          break;
        // case RouteAction.Edit:
        //   // this.service.editPartner(this.param, obj).subscribe((data) => {
        //   //   this.notificationService.success('Parceiro editado com sucesso!!!', '');
        //   //   this.returnPage();
        //   // })
        //   break;
      }
    }
  }

  openTermsOfUse(): void {
    this.modalService.create({
      nzTitle: 'Termos de Uso',
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
    this.router.navigate([`/${this.routePrevious}`])
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

  validatePassword () {
    let password = this.passwordForm.value;
    let passwordConfirm = this.passwordConfirmForm.value;
    (password !== passwordConfirm) && this.notificationService.error('Atenção:', 'As senhas estão diferentes!');
  }

  get ufForm() {
    return this.formAddress.controls['uf'];
  }

  get passwordForm() {
    return this.formPartner.controls['password'];
  }

  get passwordConfirmForm() {
    return this.formPartner.controls['passwordConfirm'];
  }
}
