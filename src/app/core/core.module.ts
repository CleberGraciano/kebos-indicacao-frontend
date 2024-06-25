import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPermissionsService, NgxPermissionsModule } from 'ngx-permissions';
import { LocalStorageService } from './local-storage/local-storage.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginGuardService } from './auth/login-guard.service';
import { RouterModule } from '@angular/router';
import { httpInterceptorProviders } from './http-interceptors';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NgxPermissionsModule.forRoot(),
  ],
  exports: [
    NgxPermissionsModule,
  ],
  providers: [
    LocalStorageService,
    NgxPermissionsService,
    AuthGuardService,
    LoginGuardService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadPermissions,
      deps: [NgxPermissionsService, LocalStorageService],
      multi: true
    },
    httpInterceptorProviders
  ]
})
export class CoreModule { }

export function loadPermissions(rs: NgxPermissionsService, localStorageService: LocalStorageService) {
  return () => {
    let userData = JSON.parse(localStorageService.getItem('currentUser'));

    if (userData) {
      
      let perfis:any[] = [];
      if (userData.perfil)
        perfis.push(userData.perfil);

      if (userData.perfilProjeto)
        perfis.push(userData.perfilProjeto);

      rs.loadPermissions(perfis);
    }
  };
}
