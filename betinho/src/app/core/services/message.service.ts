import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
//import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  nzDuration: number = 10000;
  constructor(private message: NzMessageService) { }

  success(text: string) {
    this.message.success(text, {
      nzDuration: this.nzDuration
    });
  }

  error(text: string) {
    this.message.error(text, {
      nzDuration: this.nzDuration
    });
  }

  info(text: string) {
    this.message.info(text, {
      nzDuration: this.nzDuration
    });
  }

  warning(text: string) {
    this.message.warning(text, {
      nzDuration: this.nzDuration
    });
  }
}
