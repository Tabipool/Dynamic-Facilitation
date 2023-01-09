import { chartType } from '../../../types/chartType';

export class Item {
  number: number;
  description: string;
  color: string;
  type: chartType;
  bookmark: boolean = true;
  ofCourse: boolean = false;
}
