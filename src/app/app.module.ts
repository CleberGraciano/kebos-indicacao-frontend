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
import { AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';

registerLocaleData(pt);

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('1065465778018885')
    // provider: new FacebookLoginProvider('268481119590032')
  },
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider('268481119590032')
  // },
  // {
  //   id: LinkedinLoginProvider.PROVIDER_ID,
  //   provider: new LinkedinLoginProvider('860w94wzqfcu8')
  // }
]);

export function provideConfig() {
  return config;
}

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
    PartnerModule,
    SocialLoginModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR },
    NgxPermissionsService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadPermissions,
      deps: [NgxPermissionsService, NgxRolesService, LocalStorageService],
      multi: true
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
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

