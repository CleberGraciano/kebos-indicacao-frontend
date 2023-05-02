import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoaderService } from './loader.service';
import { LoaderState } from './loader';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit, OnDestroy {

  show: boolean = false;
  text:string | undefined;
  private subscription: Subscription | undefined;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .pipe(delay(0))
      .subscribe((state: LoaderState) => {
        this.show = state.show;
        if(state.text)
        this.text = state.text;
        else this.text = 'Carregando...'
      },(error)=>{
        this.show = false;
        console.clear();
      })
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}
