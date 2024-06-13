import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  title: String = 'Counter usando redux';
  counter: number;

  constructor(){
    this.counter = 0;
  }

  increment(): void{
    this.counter++;
    console.log('Incrementando...!')
  }

  decrement(): void{
    this.counter--;
    console.log('Decrementando...!')
  }

  reset(): void{
    this.counter = 0;
    console.log('Reset el contador...!')
  }
}
