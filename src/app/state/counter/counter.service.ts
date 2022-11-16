import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  public counter = 1;

  public increase() {
    this.counter++;
  }

  public decrease() {
    this.counter--;
  }

  public getValue(): number {
    return this.counter;
  }
}
