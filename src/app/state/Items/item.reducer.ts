import { Action, createReducer, on } from '@ngrx/store';
import { actions } from './item.actions';
import { Item } from '../Items/item.states';

export interface ItemListState {
  items: Item[];
}

export const initialState: ItemListState = {
  items: [],
};

const itemReducer = createReducer(
  initialState,
  //Items
  on(actions.addItemAction, (state, { item }) => ({
    ...state,
    items: state.items.concat(item),
  })),
  on(actions.updateItemAction, (state, { item }) => ({
    ...state,
    items: updateItemInList(state.items, item),
  })),
  on(actions.deleteItemAction, (state, { id }) => ({
    ...state,
    items: removeItemFromList(state.items, Number(id)),
  })),

  //ofCourse / Bookmark
  on(actions.addOfCourseAction, (state, { item }) => ({
    ...state,
    items: changeOfCourseStatus(state.items, item.number),
  })),
  on(actions.addBookmarkAction, (state, { item }) => ({
    ...state,
    items: changeBookmarkStatus(state.items, item.number),
  }))
);

function updateItemInList(list: Item[], updatedItem: Item) {
  return list.map((value) => {
    if (value.number === updatedItem.number) {
      return {
        ...value,
        description: updatedItem.description,
        color: updatedItem.color,
        type: updatedItem.type,
      };
    } else {
      return value;
    }
  });
}

function removeItemFromList(list: Item[], number: number): Item[] {
  return list.filter((element) => {
    return element.number !== number;
  });
}

function changeBookmarkStatus(list: Item[], number: number): Item[] {
  return list.map((value) => {
    if (value.number === number) {
      return {
        ...value,
        bookmark: !value.bookmark,
      };
    } else {
      return value;
    }
  });
}

function changeOfCourseStatus(list: Item[], number: number): Item[] {
  return list.map((value) => {
    if (value.number === number) {
      return {
        ...value,
        ofCourse: true,
      };
    } else {
      return value;
    }
  });
}

export function reducer(state: ItemListState | undefined, action: Action) {
  return itemReducer(state, action);
}
