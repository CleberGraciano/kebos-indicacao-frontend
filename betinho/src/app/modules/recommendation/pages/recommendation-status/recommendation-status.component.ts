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
import { RecommendationService } from '@modules/recommendation/recommendation.service';
import { SellerService } from '@modules/seller/seller.service';

@Component({
  selector: 'app-recommendation-status',
  templateUrl: './recommendation-status.component.html',
  styleUrls: ['./recommendation-status.component.scss']
})
export class RecommendationStatusComponent implements OnInit {

  recommendationStatusForm!: FormGroup;
  @ViewChild('formElement') formElement!: ElementRef;
  routePrevious = "recommendation";

  action!: RouteAction;
  param!: number;
  create!: boolean;
  edit!: boolean;
  view!: boolean;
  routeAction = RouteAction;

  listStatusRecommendation: any[] = [];
  recommendation: any;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    public route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private service: RecommendationService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((res) => this.param = res['param']);

    this.recommendationStatusForm = this.formBuilder.group({
      statusRecommendationEnum: ['', Validators.required]
    })

    this.service.getStatusRecommendation().subscribe((res) => this.listStatusRecommendation = res);

    if(this.param)
        this.service.getIdRecommendation(this.param).subscribe(res => this.recommendation = res);
  }

  submit(): void {
    const messages = this.formService.getValidationsMessages(this.recommendationStatusForm, this.formElement);

    if (messages.length) {
      this.notificationService.warn('Os seguintes campos abaixo devem ser preenchidos corretamente:', this.formService.createValidationList(messages));
      return;
    }

    if (this.recommendationStatusForm.valid) {
      let obj = { ...this.recommendationStatusForm.getRawValue() };

      this.service.editStatusRecommendation(obj, this.param).subscribe(() => {
        this.notificationService.success('Status alterado com com sucesso!!!', '');
        this.returnPage();
      })
    }
  }

  cancel(): void {
    this.recommendationStatusForm.reset();
    this.returnPage();
  }

  returnPage(): void {
    this.router.navigate([`/${this.routePrevious}`], { queryParams: { param: true }})
  }

}
