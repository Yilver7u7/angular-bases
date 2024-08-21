import { Component,  } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h2> {{title}} </h2>
  <h2> {{ counter }}</h2>
  <button (click)="increaseBy()">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="decreaseBy()">-1</button>`

})

export class CounterComponent  {

  public title: string = '02-Bases-Angular';

  public counter: number =7;

  increaseBy(): void{
    this.counter += 1;
  }

  decreaseBy(): void{
    this.counter -= 1;
  }

  reset(): void{
    this.counter = 7;
  }

}



