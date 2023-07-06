import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { Masks } from '@core/custom-validators/masks';
import { FormService } from '@core/services/form.service';
import { NotificationService } from '@core/services/notification.service';
import { SellerService } from '@modules/seller/seller.service';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.scss']
})
export class SellerFormComponent implements OnInit {

  formSeller!: FormGroup;
  @ViewChild('formElement') formElement!: ElementRef;
  routePrevious = "seller";

  action!: RouteAction;
  param!: number;
  create!: boolean;
  edit!: boolean;
  view!: boolean;
  routeAction = RouteAction;

  maskTEL = { mask: Masks.telefone, guide: false };

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    public route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private service: SellerService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((res) => this.action = res['acao']);
    this.route.params.subscribe((res) => this.param = res['param']);

    this.create = this.action == RouteAction.Insert;
    this.edit = this.action == RouteAction.Edit;
    this.view = this.action == RouteAction.View;

    this.formSeller = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required]
    })

    if (this.edit)
      this.param ? this.service.getIdSeller(this.param).subscribe(res => this.formSeller.patchValue(res)) : this.returnPage();
  }

  saveSeller(): void {
    const messages = this.formService.getValidationsMessages(this.formSeller, this.formElement);

    if (messages.length) {
      this.notificationService.warn('Os seguintes campos abaixo devem ser preenchidos corretamente:', this.formService.createValidationList(messages));
      return;
    }

    if (this.formSeller.valid) {
      const obj = { ...this.formSeller.getRawValue() };

      switch (this.action) {
        case RouteAction.Insert:
          this.service.insertSeller(obj).subscribe((data) => {
            this.notificationService.success('Cadastro realizado com sucesso!!!', '');
            this.returnPage();
          })
          break;
        case RouteAction.Edit:
          this.service.editSeller(this.param, obj).subscribe((data) => {
            this.notificationService.success('Vendedor editado com sucesso!!!', '');
            this.returnPage();
          })
          break;
      }
    }

  }

  cancel(): void {
    this.formSeller.reset();
    this.returnPage();
  }

  returnPage(): void {
    this.router.navigate([`/${this.routePrevious}`], { queryParams: { param: true }})
  }
}
