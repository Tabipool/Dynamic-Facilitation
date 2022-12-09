import { Injectable } from '@angular/core';

@Injectable()
export class ChartStateService {
  public bookmark = false;
  public ofCourse = false;
  color: string = 'lightblue';

  public ToggleBookmarkChart() {
    this.bookmark = !this.bookmark;
  }

  public ToggleOfCourseChart() {
    this.ofCourse = !this.ofCourse;
  }

  public ChangeActiveColor(color: string) {}
}
