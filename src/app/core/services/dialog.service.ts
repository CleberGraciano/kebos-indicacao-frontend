import { Injectable } from '@angular/core';
//import { NzModalService } from 'ng-zorro-antd/modal';
import { TextConfirmComponent } from '@shared/components/text-confirm/text-confirm.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private modalService: NzModalService) { }

  confirm(title: string, callback: ((value: any) => void)) {
    this.modalService.confirm({
      nzTitle: title,
      nzOkText: 'Sim',
      nzOnOk: callback,
      nzCancelText: 'Não'
    });
  }

  confirmWithText(title: string,placeholder:string, callback: ((component: TextConfirmComponent) => void)) {
    this.modalService.create({
      nzTitle: title,
      nzOkText: 'Sim',
      nzOnOk: callback,
      nzCancelText: 'Não',
      nzContent:TextConfirmComponent,
    });
  }

  info(title: string, message:string,callback: ((value: any) => void)): void {
    this.modalService.info({
      nzTitle: title,
      nzContent: message,
      nzOnOk: callback
    });
  }
}
