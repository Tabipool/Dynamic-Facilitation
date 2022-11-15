import { Item } from 'types/Item';

export interface ItemState {
  items: Item[];
  problems: Item[];
  infos: Item[];
  concerns: Item[];
  solutions: Item[];
}
