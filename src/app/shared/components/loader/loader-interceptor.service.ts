import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, pipe, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {


  constructor(private loaderService: LoaderService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let ignoreLoading = req.params.has('ignoreLoading');

    if (!ignoreLoading) {
      this.showLoader();
      this.countRequest++;
    }
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (!ignoreLoading)
        if (event instanceof HttpResponse) {
          this.countRequest--;
          this.onEnd();
        }

    }, (error: any) => {
      if (!ignoreLoading) {
        this.countRequest--;
        this.onEnd();
      }
    }))
  }

  private onEnd(): void {
    if (this.countRequest == 0)
      this.hideLoader();
  }
  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }

  private countRequest = 0;
}
