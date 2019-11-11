import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '@app/core/rest.service';
import { Category, createCategory } from '@app/events-dashboard/state/category/category.model';
import { CategoryStore } from '@app/events-dashboard/state/category/category.store';
import { SoccerEvent } from '@app/events-dashboard/state/event/event.model';
import { EventStore } from '@app/events-dashboard/state/event/event.store';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories$: Observable<Array<Category>>;

  constructor(private restService: RestService, private categoryStore: CategoryStore, private eventStore: EventStore) {}

  getEventsByCategory() {
    let categories;
    this.restService.getEvents().subscribe(result => {
      if (result) {
        categories = this.createCategories(result);
        this.categoryStore.set(categories);
      }
    });
  }

  private createCategories(events: SoccerEvent[]) {
    const categories: any[] = [];

    const uniqueCategoryRank = [...new Set(events.map(item => item.categoryRank))].sort((a, b) => b - a);
    const uniqueLeagueRank = [...new Set(events.map(item => item.leagueRank))].sort((a, b) => b - a);

    uniqueCategoryRank.forEach(cr => {
      uniqueLeagueRank.forEach(lr => {
        const category = createCategory({});
        category.categoryRank = cr;
        category.leagueRank = lr;

        events.forEach(event => {
          if (event.categoryRank === category.categoryRank && event.leagueRank === category.leagueRank) {
            category.categoryName = event.categoryName;
            category.leagueName = event.leagueName;
            category.events.push(event);
            this.eventStore.add(event);
          }
        });

        if (category.events.length > 0) {
          categories.push(category);
        }
      });
    });

    return categories;
  }
}
