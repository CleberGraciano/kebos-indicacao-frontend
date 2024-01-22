import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Masks } from '@core/custom-validators/masks';
import { NotificationService } from '@core/services/notification.service';
import { RecommendationFilter } from '@modules/recommendation/recommendation';
import { RecommendationService } from '@modules/recommendation/recommendation.service';
import { NzTableComponent } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent implements OnInit {

  dataSet: any[] = []
  formFiltroRecommendation!: FormGroup;
  @ViewChild('tabela', { static: false }) nzTableComponent?: NzTableComponent<any>;
  loadingTabela: boolean = false;
  activeTable: boolean = false;
  total: number = 0;
  actions: any[] = [];
  filtro!: RecommendationFilter;
  routePrevious = "recommendation";

  dateFormat = "dd/MM/yyyy";
  maskTEL = { mask: Masks.telefone, guide: false };

  statusSelect: string = 'ENVIADO';
  listStatusRecommendation: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private service: RecommendationService
  ) {
    this.route.queryParams.subscribe(atualizar => (atualizar) && this.buscarDados())
  }

  ngOnInit() {
    this.formFiltroRecommendation = this.formBuilder.group({
      nomePessoaEmpresa: [''],
      emailprivate: [''],
      telefone: [''],
      status: ['ENVIADO']
    });

    this.search();

    this.service.getStatusRecommendation().subscribe((res) => this.listStatusRecommendation = res);
  }

  buscarDados(): void {
    this.loadingTabela = true;
    const status = this.formFiltroRecommendation?.controls['status']?.value;
    if(status) {
      this.service.getListRecommendation(status).subscribe({
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



    // this.service.filter().subscribe(
    //   {
    //     next: (res) => {
    //       if (res) {
    //         this.dataSet = res;
    //         this.nzTableComponent?.cdkVirtualScrollViewport?.checkViewportSize();
    //         this.total = this.dataSet.length;
    //       }
    //     },
    //     complete: () => this.loadingTabela = false,
    //     error: () => this.loadingTabela = false
    //   });
  }

  clear(): void {
    this.formFiltroRecommendation.reset();
  }

  search(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(0);
    this.filtro = this.formFiltroRecommendation.value;
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
