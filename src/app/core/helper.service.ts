import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Category } from '@app/events-dashboard/state/category/category.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  categories = new BehaviorSubject<Category[]>([]);

  constructor() {}

  setCategories(data: any) {
    this.categories.next(data);
  }

  getCategories(): Observable<Category[]> {
    return this.categories.asObservable();
  }
}
