import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-confirm',
  templateUrl: './text-confirm.component.html',
  styleUrls: ['./text-confirm.component.scss']
})
export class TextConfirmComponent implements OnInit {

  constructor() { }
  text:string | undefined;
  showError:boolean | undefined;

  ngOnInit(): void {
  }

  setShowError():void{
    this.showError = true;
  }

}
