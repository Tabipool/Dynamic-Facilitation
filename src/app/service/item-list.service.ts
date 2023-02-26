import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/state';
import { Item } from 'app/state/Items/item.states';
import { Observable, Subject } from 'rxjs';
import { getItems } from '../state/Items/item.selectors';

@Injectable({
  providedIn: 'root',
})
export class ItemListService {
  private itemListSubject: Subject<Item[]> = new Subject<Item[]>();
  private mockInitialized: boolean = false;

  constructor(
    /*private storageService: StorageService,
    private http: HttpClient,*/
    private store: Store<State>
  ) {
    /*this.retrieveListFromDataBase();*/
    this.retrieveListFromStore();
  }

  /* retrieveListFromStore() {
    return this.store
      .select(getItems)
      .subscribe((value) => this.itemListSubject.next(value));
  }*/

  retrieveListFromStore(): Observable<Item[]> {
    return this.store.select((appState) => appState.itemList.items);
  }

  getMockInitializedBool() {
    return this.mockInitialized;
  }

  initializeMock() {
    this.mockInitialized = true;
  }

  /*retrieveListFromDataBase() {
    this.http
      .get<TodoItem[]>('http://localhost:3000/items')
      .subscribe((response) => this.todoListSubject.next(response));
  }*/

  getItemList() {
    return this.itemListSubject.asObservable();
  }

  /* addItem(item: Item) {
    this.http
      .post('http://localhost:3000/items', {
        title: item.title,
        completed: item.completed || false,
      })
      .subscribe(
        () => this.retrieveListFromDataBase(),
        () => {
          console.log('ERROR');
        },
        () => {
          console.log('COMPLETED');
        }
      );
  }

  updateItem(item: TodoItem, changes) {
    return this.http
      .put(`http://localhost:3000/items/${item._id}`, {
        ...item,
        completed: changes,
      })
      .subscribe(() => this.retrieveListFromDataBase());
  }

  deleteItem(item: TodoItem) {
    return this.http
      .delete(`http://localhost:3000/items/${item._id}`)
      .subscribe(() => this.retrieveListFromDataBase());
  }*/
}
