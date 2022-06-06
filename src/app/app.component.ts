import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  x: number = 0;
  y: number = 0;

  xs: number[] = [];
  ys: number[] = [];

  add(x: number, y: number) {
    this.xs.push(x);
    this.ys.push(y);
  }

  getAverage(numbers: number[]) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }

}
