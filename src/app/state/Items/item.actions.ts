import { createAction, props } from '@ngrx/store';
import { chartType } from 'types/chartType';
import { Item } from '../Items/item.states';

export const addItemAction = createAction(
  '[Item] Add',
  props<{ item: Item }>()
);
export const updateItemAction = createAction(
  '[Item] Update',
  props<{ item: Item }>()
);
export const deleteItemAction = createAction(
  '[Item] Delete',
  props<{ id: number }>()
);

/*const addProblemAction = createAction('[Problem] Add', props<{ item: Item }>());
const updateProblemAction = createAction(
  '[Problem] Update',
  props<{ item: Item }>()
);
const deleteProblemAction = createAction(
  '[Problem] Delete',
  props<{ id: string }>()
);

const addInfoAction = createAction('[Info] Add', props<{ item: Item }>());
const updateInfoAction = createAction('[Info] Update', props<{ item: Item }>());
const deleteInfoAction = createAction('[Info] Delete', props<{ id: string }>());

const addConcernAction = createAction('[Concern] Add', props<{ item: Item }>());
const updateConcernAction = createAction(
  '[Concern] Update',
  props<{ item: Item }>()
);
const deleteConcernAction = createAction(
  '[Concern] Delete',
  props<{ id: string }>()
);

const addSolutionAction = createAction(
  '[Solution] Add',
  props<{ item: Item }>()
);
const updateSolutionAction = createAction(
  '[Solution] Update',
  props<{ item: Item }>()
);
const deleteSolutionAction = createAction(
  '[Solution] Delete',
  props<{ id: string }>()
);
*/

export const changeOfCourseAction = createAction(
  '[OfCourse] Add',
  props<{ item: Item }>()
);
/*
const updateOfCourseAction = createAction(
  '[OfCourse] Update',
  props<{ item: Item }>()
);
const deleteOfCourseAction = createAction(
  '[OfCourse] Delete',
  props<{ id: string }>()
);

*/

export const changeBookmarkAction = createAction(
  '[Bookmark] Add',
  props<{ item: Item }>()
);

/*
const updateBookmarkAction = createAction(
  '[Bookmark] Update',
  props<{ item: Item }>()
);
const deleteBookmarkAction = createAction(
  '[Bookmark] Delete',
  props<{ id: string }>()
);
*/

export const actions = {
  addItemAction,
  updateItemAction,
  deleteItemAction,
  /*addProblemAction,
  updateProblemAction,
  deleteProblemAction,
  addInfoAction,
  updateInfoAction,
  deleteInfoAction,
  addConcernAction,
  updateConcernAction,
  deleteConcernAction,
  addSolutionAction,
  updateSolutionAction,
  deleteSolutionAction,*/
  changeOfCourseAction,
  /*updateOfCourseAction,
  deleteOfCourseAction,*/
  changeBookmarkAction,
  /*updateBookmarkAction,
  deleteBookmarkAction,*/
};
