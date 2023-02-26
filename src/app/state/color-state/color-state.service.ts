import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {
  public color = 'shift-blue';

  public changeColor(newColor: string) {
    this.color = newColor;
  }

  public checkColor(radioColor: string) {
    return this.color == radioColor;
  }
}
