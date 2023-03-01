import { createAction, props } from '@ngrx/store';
import { chartType } from 'types/chartType';
import { Item } from '../Items/item.states';

export const setItemAction = createAction(
  '[Item] Set',
  props<{ items: Item[] }>()
);

export const addItemAction = createAction(
  '[Item] Add',
  props<{ item: Item }>()
);
export const updateItemAction = createAction(
  '[Item] Update',
  props<{ item: Item }>()
);
export const changeChartTypeItemAction = createAction(
  '[Item] ChangeChartType',
  props<{ number: number; newType: chartType }>()
);
export const deleteItemAction = createAction(
  '[Item] Delete',
  props<{ id: number }>()
);

export const changeOfCourseAction = createAction(
  '[OfCourse] Add',
  props<{ item: Item }>()
);

export const changeBookmarkAction = createAction(
  '[Bookmark] Add',
  props<{ item: Item }>()
);

export const actions = {
  setItemAction,
  addItemAction,
  updateItemAction,
  deleteItemAction,
  changeOfCourseAction,
  changeBookmarkAction,
  changeChartTypeItemAction,
};
