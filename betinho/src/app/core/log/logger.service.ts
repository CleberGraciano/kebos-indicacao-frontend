import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class LoggerService {

  constructor(private errorHandler: ErrorHandler) {}

  log(value: any, ...rest: any[]) {
    if (!environment.production) {
      console.log(value, ...rest);
    }
  }

  info(value: any, ...rest: any[]) {
    if (!environment.production) {
      console.info(value, ...rest);
    }
  }

  error(error: Error) {
    this.errorHandler.handleError(error);
  }

  warn(value: any, ...rest: any[]) {
    console.warn(value, ...rest);
  }
}