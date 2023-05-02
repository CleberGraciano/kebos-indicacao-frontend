import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Masks } from '@core/custom-validators/masks';
import { NotificationService } from '@core/services/notification.service';
import { SellerElement, SellerFilter } from '@modules/seller/seller';
import { SellerService } from '@modules/seller/seller.service';
import { NzTableComponent } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.scss']
})
export class SellerListComponent implements OnInit {

  //dataSet: SellerElement[] = [];
  dataSet: any;
  formFiltroSeller!: FormGroup;
  @ViewChild('tabela', { static: false }) nzTableComponent?: NzTableComponent<any>;
  loadingTabela: boolean = false;
  activeTable: boolean = false;
  total: number = 0;
  actions: any[] = [];
  filtro: any;
  routePrevious = "seller";

  dateFormat = "dd/MM/yyyy";
  maskTEL = { mask: Masks.telefone, guide: false };

  constructor(
    private formBuilder: FormBuilder,
    public route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private service: SellerService
  ) { }

  ngOnInit() {
    this.formFiltroSeller = this.formBuilder.group({
      id: [''],
      nome: [''],
      email: [''],
      telefone: [''],
      created: []
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
    this.formFiltroSeller.reset();
  }

  search(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(0);
    this.filtro = this.formFiltroSeller.value;
    this.buscarDados();
  }

  cancel(): void {
    this.router.navigate([`/home`]);
  }

  remove(model: any): void {
    // this.service.deletarSistema(model.id).subscribe(() => {
    //   this.notificationService.success('Sistema excluído com sucesso!!!', '');
    //   this.pesquisar();
    // })
  }

  edit(model: any): void {
    this.router.navigate([`/${this.routePrevious}/edit/${model.id}`]);
  }

  trackByIndex(_: number, data: any): number {
    return data.id;
  }
}
