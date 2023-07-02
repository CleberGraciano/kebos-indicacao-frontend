import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RecommendationFormComponent } from './pages/recommendation-form/recommendation-form.component';
import { RecommendationListComponent } from './pages/recommendation-list/recommendation-list.component';
import { RecommendationRoutingModule } from './recommendation-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [
    RecommendationListComponent,
    RecommendationFormComponent
  ],
  imports: [
    SharedModule,
    RecommendationRoutingModule,
    NgxPermissionsModule.forChild()
  ]
})
export class RecommendationModule { }
