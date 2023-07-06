import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '@core/services/notification.service';
import { CategoryService } from '@modules/category/category.service';
import { ItemService } from '@modules/item/item.service';
import { NzTableComponent } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  dataSet: any[] = []
  formFiltro!: FormGroup;
  @ViewChild('tabela', { static: false }) nzTableComponent?: NzTableComponent<any>;
  loadingTabela: boolean = false;
  activeTable: boolean = false;
  total: number = 0;
  actions: any[] = [];
  filtro!: any;
  routePrevious = "category";

  dateFormat = "dd/MM/yyyy";

  constructor(
    private formBuilder: FormBuilder,
    public route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private service: CategoryService
  ) {
    this.route.queryParams.subscribe(atualizar => (atualizar) && this.buscarDados())
  }

  ngOnInit() {
    this.formFiltro = this.formBuilder.group({
      nome: ['']
    });

    this.search();
  }

  buscarDados(): void {
    this.loadingTabela = true;
    this.service.filter().subscribe(
      {
        next: (res) => {
          if (res) {
            this.dataSet = res;
            this.nzTableComponent?.cdkVirtualScrollViewport?.checkViewportSize();
            this.total = this.dataSet.length;
          }
        },
        complete: () => this.loadingTabela = false,
        error: () => this.loadingTabela = false
      });
  }

  clear(): void {
    this.formFiltro.reset();
  }

  search(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(0);
    this.filtro = this.formFiltro.value;
    this.buscarDados();
  }

  cancel(): void {
    this.router.navigate([`/home`]);
  }

  edit(model: any): void {
    this.router.navigate([`/${this.routePrevious}/edit/${model.id}`]);
  }

  trackByIndex(_: number, data: any): number {
    return data.id;
  }

}
