import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import itemFlipchartStories from 'app/components/item/item-flipchart/item-flipchart.stories';
import { ItemListState } from './Items/item.reducer';
import * as fromItemReducer from './Items/item.reducer';
import { environment } from 'environments/environment';

export interface State {
  itemList: ItemListState;
}

export const reducers: ActionReducerMap<State> = {
  itemList: fromItemReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
