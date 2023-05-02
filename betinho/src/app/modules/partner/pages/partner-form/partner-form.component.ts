import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { AuthenticationService } from '@core/auth/authentication.service';
import { Masks } from '@core/custom-validators/masks';
import { FormService } from '@core/services/form.service';
import { NotificationService } from '@core/services/notification.service';
import { PartnerService } from '@modules/partner/partner.service';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.scss']
})
export class PartnerFormComponent implements OnInit {

  formPartner!: FormGroup;
  @ViewChild('formElement') formElement!: ElementRef;
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
  ufs: any[] = [];

  fileList: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    public route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private service: PartnerService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((res) => this.action = res['acao']);
    this.route.params.subscribe((res) => this.param = res['param']);

    this.create = this.action == RouteAction.Insert;
    this.edit = this.action == RouteAction.Edit;
    this.view = this.action == RouteAction.View;

    this.formPartner = this.formBuilder.group({
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      cpf: ['', Validators.required],


    })

    if (this.edit)
      this.param ? this.service.getIdPartner(this.param).subscribe(res => this.formPartner.patchValue(res)) : this.returnPage();
  }

  savePartner(): void {
    const messages = this.formService.getValidationsMessages(this.formPartner, this.formElement);

    if (messages.length) {
      this.notificationService.warn('Os seguintes campos abaixo devem ser preenchidos corretamente:', this.formService.createValidationList(messages));
      return;
    }

    if (this.formPartner.valid) {
      const obj = { ...this.formPartner.getRawValue() };

      switch (this.action) {
        case RouteAction.Insert:
          this.service.insertPartner(obj).subscribe((data) => {
            this.notificationService.success('Cadastro realizado com sucesso!!!', '');
            this.returnPage();
          })
          break;
        case RouteAction.Edit:
          this.service.editPartner(this.param, obj).subscribe((data) => {
            this.notificationService.success('Parceiro editado com sucesso!!!', '');
            this.returnPage();
          })
          break;
      }
    }

  }

  cancel(): void {
    this.formPartner.reset();
    this.returnPage();
  }

  returnPage(): void {
    this.router.navigate([`/${this.routePrevious}`])
  }

  enviarArquivo(item: any) {
    let fileList = [...item.fileList];
    fileList = fileList.slice(-1);
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    this.fileList = fileList;
  }
}
