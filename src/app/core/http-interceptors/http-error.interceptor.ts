import { Injectable, Injector, ErrorHandler } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { NotificationService } from '@core/services/notification.service';
import { AuthenticationService } from '@core/auth/authentication.service';
import { HttpResponseValidation } from './http-error';
import { MessageService } from '@core/services/message.service';
import { environment } from '@env/environment';
import { HttpStatusEnum } from './http-status';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private injector: Injector,
    private notificationService: NotificationService,
    private authenticationService: AuthenticationService,
    private messageService: MessageService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(null, (err: any) => {
        console.log(err)
        if (request.url.indexOf(environment.auth) == -1) {
          if (err instanceof HttpErrorResponse) {

            if (err.status === 401) {
              this.authenticationService.logout(true);
              this.notificationService.error('Ops...', err.message);
            }
            else {
              if (request.params && request.params.has('ignoreError')) {

              }
              else if (err.status == 0) {
                this.notificationService.error('Ops...', 'Verifique a sua conexão com a internet ou aguarde um momento e tente novamente');
              }
              else
                if (err.statusText == 'Unknown Error')
                  this.notificationService.error('Ops...', 'Ocorreu um erro inesperado durante esta ação.')
                else {
                  let errorObj = err.error;
                  if (request.responseType == 'arraybuffer') {
                    if ('TextDecoder' in window) {
                      var dataView = new DataView(err.error);
                      var decoder = new TextDecoder('utf8');
                      errorObj = JSON.parse(decoder.decode(dataView));
                    } else {
                      var decodedString = String.fromCharCode.apply(null, <any>new Uint8Array(err.error));
                      errorObj = JSON.parse(decodedString);
                      let errorResponse = <HttpResponseValidation>errorObj;
                      let messages = errorResponse.mensagem.map(x => x + '<br>').toString();
                      this.notificationService.error('Atenção', messages);
                    }
                  }
                  else if (request.responseType == 'blob') {
                    var reader = new FileReader();
                    reader.onload = (ev: any) => {
                      let errorResponse = <HttpResponseValidation>JSON.parse(ev.target.result);
                      let messages = errorResponse.mensagem.map(x => x + '<br>').toString();
                      this.notificationService.error('Atenção', messages);
                    }
                    reader.readAsText(errorObj);
                  }
                  else
                    if (err.statusText == 'Unknown Error' || err.status == HttpStatusEnum.Accepted)
                      this.notificationService.error('Ops...', 'Ocorreu um erro inesperado durante esta ação.')
                    else if (err.status != HttpStatusEnum.NotFound) {
                      let errorResponse = <HttpResponseValidation>err.error;
                      let messages;

                      if (errorResponse?.mensagem)
                        messages = errorResponse.mensagem.map(x => x + '<br>').toString();
                      else
                        messages = err.message;

                      this.notificationService.error('Atenção', err.message);
                    }
                }
            }
          }
        }
        else {
          this.notificationService.error('Ops...', err.message);
        }
      })
    )
  }
}
