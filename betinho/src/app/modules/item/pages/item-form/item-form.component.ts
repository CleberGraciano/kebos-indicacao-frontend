import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { FormService } from '@core/services/form.service';
import { NotificationService } from '@core/services/notification.service';
import { CategoryService } from '@modules/category/category.service';
import { ItemService } from '@modules/item/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  formItem!: FormGroup;
  @ViewChild('formElement') formElement!: ElementRef;
  routePrevious = "item";

  action!: RouteAction;
  param!: number;
  create!: boolean;
  edit!: boolean;
  view!: boolean;
  routeAction = RouteAction;
  tipos: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    public route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private service: ItemService,
    private serviceCategories: CategoryService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((res) => this.action = res['acao']);
    this.route.params.subscribe((res) => this.param = res['param']);

    this.create = this.action == RouteAction.Insert;
    this.edit = this.action == RouteAction.Edit;
    this.view = this.action == RouteAction.View;

    this.formItem = this.formBuilder.group({
      tipo: ['', Validators.required],
      nome: ['', Validators.required],
      quantidade: ['', Validators.required],
      bonus: ['', Validators.required]
    })

    // this.service.getTipos().subscribe((res: any) => this.tipos = res);
    this.serviceCategories.filter().subscribe((res: any) => this.tipos = res);

    if (this.edit)
      this.param ? this.service.getIdItem(this.param).subscribe(res => this.formItem.patchValue(res)) : this.returnPage();
  }

  saveItem(): void {
    const messages = this.formService.getValidationsMessages(this.formItem, this.formElement);

    if (messages.length) {
      this.notificationService.warn('Os seguintes campos abaixo devem ser preenchidos corretamente:', this.formService.createValidationList(messages));
      return;
    }

    if (this.formItem.valid) {
      const obj = { ...this.formItem.getRawValue() };

      switch (this.action) {
        case RouteAction.Insert:
          this.service.insertItem(obj).subscribe((data) => {
            this.notificationService.success('Cadastro realizado com sucesso!!!', '');
            this.returnPage();
          })
          break;
        case RouteAction.Edit:
          this.service.editItem(this.param, obj).subscribe((data) => {
            this.notificationService.success('Parceiro editado com sucesso!!!', '');
            this.returnPage();
          })
          break;
      }
    }

  }

  cancel(): void {
    this.formItem.reset();
    this.returnPage();
  }

  returnPage(): void {
    this.router.navigate([`/${this.routePrevious}`])
  }
}
