import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '@core/services/notification.service';
import { PartnerService } from '@modules/partner/partner.service';
import { NzTableComponent } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.scss']
})
export class PartnerListComponent implements OnInit {

  dataSet: any[] = []
  formFiltro!: FormGroup;
  @ViewChild('tabela', { static: false }) nzTableComponent?: NzTableComponent<any>;
  loadingTabela: boolean = false;
  activeTable: boolean = false;
  total: number = 0;
  actions: any[] = [];
  filtro!: any;
  routePrevious = "partner";

  constructor(
    private formBuilder: FormBuilder,
    public route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private service: PartnerService
  ) {
    this.route.queryParams.subscribe(atualizar => (atualizar) && this.buscarDados())
  }

  ngOnInit() {
    this.formFiltro = this.formBuilder.group({
      name: [''],
      vendor: [''],
      status: ['true']
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

  remove(model: any): void {
    // this.service.deletarSistema(model.id).subscribe(() => {
    //   this.notificationService.success('Sistema excluído com sucesso!!!', '');
    //   this.pesquisar();
    // })
  }

  edit(model: any): void {
    this.dataSet = [];
    this.router.navigate([`/${this.routePrevious}/edit/${model.id}`]);
  }

  trackByIndex(_: number, data: any): number {
    return data.id;
  }

}
