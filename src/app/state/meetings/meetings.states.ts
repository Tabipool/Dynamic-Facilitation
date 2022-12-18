import { Item } from '../Items/Item.states';

export class MeetingHome {
  id: number;
  title: string;
  description: string;
  savedate: Date;
}

export class MeetingFull {
  id: number;
  title: string;
  description: string;
  items: Item[];
}
