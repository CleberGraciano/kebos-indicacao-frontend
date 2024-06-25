import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteAction } from '@core/action/action';
import { AuthenticationService } from '@core/auth/authentication.service';
import { UserAuth } from '@core/auth/user';
import { Masks } from '@core/custom-validators/masks';
import { FormService } from '@core/services/form.service';
import { NotificationService } from '@core/services/notification.service';
import { CategoryService } from '@modules/category/category.service';
import { ItemService } from '@modules/item/item.service';
import { ItemElement } from '@modules/recommendation/recommendation';
import { RecommendationService } from '@modules/recommendation/recommendation.service';
import { SellerService } from '@modules/seller/seller.service';

@Component({
  selector: 'app-recommendation-form',
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.scss'],
})
export class RecommendationFormComponent implements OnInit {
  formRecommendation!: FormGroup;
  formObservacoes!: FormGroup;
  @ViewChild('formElement') formElement!: ElementRef;
  routePrevious = 'Recommendation';

  action!: RouteAction;
  param!: number;
  create!: boolean;
  edit!: boolean;
  view!: boolean;
  routeAction = RouteAction;

  maskTEL = { mask: Masks.telefone, guide: false };
  maskCpfCnpj = { mask: Masks.cpfCnpj, guide: false };

  i = 1;
  editId: string = '';
  listOfData: any[] = [];
  tipos: any[] = [];
  items: any[] = [];

  selectedValue = null;
  //listItems: Array<{ value: string; name: string }> = [];
  listItems: any[] = [];
  listSellers: any = [];
  typeSelect: number = 0;
  nzFilterOption = (): boolean => true;
  total: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    public route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private sellerService: SellerService,
    private service: RecommendationService,
    private serviceItem: ItemService,
    private categoryService: CategoryService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((res) => (this.action = res['acao']));
    this.route.params.subscribe((res) => (this.param = Number(res['param'])));

    this.create = this.action == RouteAction.Insert;
    this.edit = this.action == RouteAction.Edit;
    this.view = this.action == RouteAction.View;

    this.formRecommendation = this.formBuilder.group({
      nomePessoaEmpresa: ['', Validators.required],
      cpfCnpj: ['', Validators.required],
      emailprivate: ['', Validators.required],
      nomeContato: ['', Validators.required],
      telefone: ['', Validators.required],
      seller: ['', Validators.required],
    });

    this.formObservacoes = this.formBuilder.group({
      observacao: [''],
    });

    this.categoryService.filter().subscribe((res: any) => (this.tipos = res));
    this.sellerService
      .filter()
      .subscribe((res: any) => (this.listSellers = res));

    if (this.action === RouteAction.Edit)
      this.param
        ? this.service
            .getIdRecommendation(this.param)
            .subscribe((res) => this.formRecommendation.patchValue(res))
        : this.returnPage();
  }

  saveRecommendation(): void {
    const messages = this.formService.getValidationsMessages(
      this.formRecommendation,
      this.formElement
    );

    if (messages.length) {
      return this.notificationService.warn(
        'Os seguintes campos abaixo devem ser preenchidos corretamente:',
        this.formService.createValidationList(messages)
      );
    }

    if (this.formRecommendation.valid) {
      const obj = {
        ...this.formRecommendation.getRawValue(),
        ...this.formObservacoes.getRawValue(),
      };

      obj.items = this.replaceItems();
      obj.valortotal = this.total;
      obj.user = null; //usuarioLogado

      switch (this.action) {
        case RouteAction.Insert:
          this.service.insertRecommendation(obj).subscribe((data) => {
            this.notificationService.success(
              'Cadastro realizado com sucesso!!!',
              ''
            );
            this.returnPage();
          });
          break;
        case RouteAction.Edit:
          this.service.editRecommendation(this.param, obj).subscribe((data) => {
            this.notificationService.success(
              'Recomendação editado com sucesso!!!',
              ''
            );
            this.returnPage();
          });
          break;
      }
    }
  }

  cancel(): void {
    this.formRecommendation.reset();
    this.returnPage();
  }

  returnPage(): void {
    this.router.navigate([`/${this.routePrevious.toLocaleLowerCase()}`], {
      queryParams: { param: true },
    });
  }

  typeSelectData(data: any): void {
    this.typeSelect = data?.tipo?.name?.id;
    this.search(null, this.typeSelect);
  }

  resetItensData(data: any) {
    data.id = data.id;
    data.nome = null;
    data.quantidade, data.bonus, (data.totalBonus = 0);
    return data;
  }

  startEdit(id: any): void {
    this.editId = id;
  }

  stopEdit(id: string): void {
    this.editId = '';
    this.editBonus(id);
  }

  updateTotalBonus(id: string) {
    this.editBonus(id);
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        nome: { nome: 'Pesquise o produto' },
        tipo: { tipo: { name: 'Selecione o Tipo' } },
        quantidade: 0,
        bonus: 0,
        totalBonus: 0,
      },
    ];
    this.i++;
  }

  editBonus(id: any) {
    this.listOfData.find((x: any) => {
      if (x.id == id) x.totalBonus = x.nome.bonus * x.quantidade;
    });
    this.total = this.listOfData.reduce(
      (total, item) => total + item.totalBonus,
      0
    );
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter((d) => d.id !== id);
  }

  searchValue(value: string): void {
    this.search(value, this.typeSelect);
  }

  search(value: any, type: number): void {
    this.serviceItem.getItems(value?.tipo?.name?.id).subscribe((res) => {
      const listOfOption: Array<any> = [];
      res
        .filter((x: any) => x.category.id == type)
        .forEach((item: any) => listOfOption.push(item));
      this.listItems = listOfOption;
    });
  }

  replaceItems() {
    let items: any[] = [];
    this.listOfData.forEach((x: any) => {
      let itemReset;
      itemReset = x.nome;

      if (x.totalBonus) itemReset.totalBonus = x.totalBonus;

      if (x.quantidade) itemReset.quantidade = x.quantidade;

      items.push(itemReset);
    });
    items = items.filter((x: any) => x.totalBonus);
    return items;
  }

  get usuarioLogado(): UserAuth {
    return this.authenticationService.currentUserValue;
  }
}
