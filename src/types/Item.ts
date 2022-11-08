enum chartCaption {
  p,
  i,
  b,
  l,
}

export class Item {
  number: number;
  description: string;
  color: string;
  type: chartCaption;
  bookmark: boolean = false;
  ofCourse: boolean = false;
}
