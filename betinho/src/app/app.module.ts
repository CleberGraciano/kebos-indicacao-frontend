import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPermissionsModule, NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { LocalStorageService } from '@core/local-storage/local-storage.service';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { HomeModule } from '@modules/home/home.module';
import { PartnerModule } from '@modules/partner/partner.module';
import { UserAuth } from '@core/auth/user';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    PartnerModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR },
    NgxPermissionsService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadPermissions,
      deps: [NgxPermissionsService, NgxRolesService, LocalStorageService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function loadPermissions(permissionService: NgxPermissionsService, roleService: NgxRolesService, localStorageService: LocalStorageService) {
  return () => {
    const userData = <UserAuth>JSON.parse(localStorageService.getItem('currentUser'));

    if (userData) {
      if (userData?.roles) {
        const permissions = <any>[];
        userData?.roles.forEach((x: any) => permissions.push(x));
        permissionService.loadPermissions(permissions);
      }
    }
  };
}

