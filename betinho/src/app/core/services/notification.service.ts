import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
//import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(
    private readonly notification: NzNotificationService
  ) { }

  default(title: string, message: string) {
    this.show(title, message);
  }

  info(title: string, message: string) {
    this.show(title, message, TypeNotification.Info);
  }

  success(title: string, message: string) {
    this.show(title, message, TypeNotification.Success);
  }

  warn(title: string, message: string) {
    this.show(title, message, TypeNotification.Warning);
  }

  error(title: string, message: string) {
    this.show(title, message, TypeNotification.Error);
  }

  private show(title: string, message: string, type?: TypeNotification) {
    this.notification.create(
      <any>type,
      title,
      message,
      {
        nzPauseOnHover: true,
        nzDuration: 6000
      }
    );
  }
}

enum TypeNotification {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error'
}
