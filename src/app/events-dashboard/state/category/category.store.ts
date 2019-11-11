import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Category } from '@app/events-dashboard/state/category/category.model';

export interface CategoryState extends EntityState<Category> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'categories'
})
export class CategoryStore extends EntityStore<CategoryState> {
  constructor() {
    super();
  }
}
