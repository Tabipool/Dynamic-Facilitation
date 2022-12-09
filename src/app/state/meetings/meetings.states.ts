import { Item } from '../Items/Item.states';

export class MeetingHome {
  idmeeting: number;
  title: string;
  description: string;
  savedate: Date;
}

export class MeetingFull {
  idmeeting: number;
  title: string;
  description: string;
  items: Item[];
}
