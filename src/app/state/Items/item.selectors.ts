import { createSelector } from '@ngrx/store';
import { ItemListState } from './item.reducer';
import { State } from '../index';

export const getRootState = (state: State) => state.itemList;

export const getItems = createSelector(
  getRootState,
  (state: ItemListState) => state.items
);
