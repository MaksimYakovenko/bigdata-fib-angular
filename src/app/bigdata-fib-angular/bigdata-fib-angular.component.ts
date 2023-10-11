import { Component } from '@angular/core';
import BigNumber from 'bignumber.js'

@Component({
  selector: 'app-bigdata-fib-angular',
  templateUrl: './bigdata-fib-angular.component.html',
  styleUrls: ['./bigdata-fib-angular.component.css']
})
export class BigdataFibAngularComponent {
  result: string = '';
  n: number = 0;
  elapsedTime: number = 0;

  calculateFibonacci() {
      const startTime = new Date().getTime();
      if (this.n === 0) {
        this.result = '0';
      } else if (this.n === 1) {
        this.result = '1';
      } else {
        let a = new BigNumber(0);
        let b = new BigNumber(1);
        for (let i = 2; i <= this.n; i++){
          const temp = a.plus(b);
          a = b;
          b = temp;
        }
        this.result = b.toString();
      }
      const endTime = new Date().getTime();
      this.elapsedTime = endTime - startTime;
  }
}
