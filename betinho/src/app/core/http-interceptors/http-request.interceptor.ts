import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(private localStorageService: LocalStorageService) { }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let tempReq: HttpRequest<any>;

        let token = this.localStorageService.getItem('token');

        if (token && !request.headers.has('public')) {
            try {
                token = JSON.parse(token)
            } catch{

            }

            tempReq = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${token}`) //`Bearer ${token}`
            })

        } else {
            tempReq = request.clone({
                headers: request.headers.delete('public')
            })
        }
        if (!tempReq.headers.has('Content-Type'))
            tempReq.headers.set('Content-Type', 'application/json');

        return next.handle(tempReq)
    }
}
