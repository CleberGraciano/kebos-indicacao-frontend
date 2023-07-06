import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { FormService } from '@core/services/form.service';
import { NotificationService } from '@core/services/notification.service';
import { CategoryService } from '@modules/category/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  formCategory!: FormGroup;
  @ViewChild('formElement') formElement!: ElementRef;
  routePrevious = "category";

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
    private service: CategoryService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((res) => this.action = res['acao']);
    this.route.params.subscribe((res) => this.param = res['param']);

    this.create = this.action == RouteAction.Insert;
    this.edit = this.action == RouteAction.Edit;
    this.view = this.action == RouteAction.View;

    this.formCategory = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required]
    })

    if (this.edit)
      this.param ? this.service.getIdCategory(this.param).subscribe(res => this.formCategory.patchValue(res)) : this.returnPage();
  }

  saveItem(): void {
    const messages = this.formService.getValidationsMessages(this.formCategory, this.formElement);

    if (messages.length) {
      this.notificationService.warn('Os seguintes campos abaixo devem ser preenchidos corretamente:', this.formService.createValidationList(messages));
      return;
    }

    if (this.formCategory.valid) {
      const obj = { ...this.formCategory.getRawValue() };

      switch (this.action) {
        case RouteAction.Insert:
          this.service.insertCategory(obj).subscribe((data) => {
            this.notificationService.success('Cadastro realizado com sucesso!!!', '');
            this.returnPage();
          })
          break;
        case RouteAction.Edit:
          this.notificationService.error('Ação não realizada!', 'Entre em contato com o suporte.');
        // this.service.editCategory(this.param, obj).subscribe((data) => {
          //   this.notificationService.success('Parceiro editado com sucesso!!!', '');
          //   this.returnPage();
          // })
          break;
      }
    }

  }

  cancel(): void {
    this.formCategory.reset();
    this.returnPage();
  }

  returnPage(): void {
    this.router.navigate([`/${this.routePrevious}`])
  }

}
