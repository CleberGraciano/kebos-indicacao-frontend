import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-status-signup-modal',
  templateUrl: './status-signup-modal.component.html',
  styleUrls: ['./status-signup-modal.component.scss']
})
export class StatusSignupModalComponent implements OnInit {

  constructor(private modal: NzModalRef) { }

  ngOnInit() {
  }

  close(): void {
    this.modal.close(true);
  }

}
