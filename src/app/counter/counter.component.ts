import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count: string = "counter";
  num: number = 0;
  incrementFunction() { this.num = this.num + 1 }
  decrementFunction() { this.num = this.num - 1 }
}
