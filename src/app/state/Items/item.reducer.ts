import { Action, createReducer, on } from '@ngrx/store';
import { actions } from './item.actions';
import { Item } from '../Items/item.states';
import { state } from '@angular/animations';
import { chartType } from 'types/chartType';

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
  on(actions.changeChartTypeItemAction, (state, { item, newType }) => ({
    ...state,
    items: changeChartType(state.items, item.number, newType),
  })),
  on(actions.deleteItemAction, (state, { id }) => ({
    ...state,
    items: removeItemFromList(state.items, Number(id)),
  })),

  //ofCourse / Bookmark
  on(actions.changeOfCourseAction, (state, { item }) => ({
    ...state,
    items: changeOfCourseStatus(state.items, item.number),
  })),
  on(actions.changeBookmarkAction, (state, { item }) => ({
    ...state,
    items: changeBookmarkStatus(state.items, item.number),
  }))
);

function updateItemInList(list: Item[], updatedItem: Item): Item[] {
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

function changeChartType(
  list: Item[],
  number: number,
  newchartType: chartType
): Item[] {
  return list.map((value) => {
    if (value.number === number) {
      return {
        ...value,
        type: newchartType,
      };
    } else {
      return value;
    }
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
        ofCourse: !value.ofCourse,
      };
    } else {
      return value;
    }
  });
}

export function reducer(state: ItemListState | undefined, action: Action) {
  return itemReducer(state, action);
}
