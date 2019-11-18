import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '@app/core/rest.service';
import { Category, createCategory } from '@app/events-dashboard/state/category/category.model';
import { CategoryStore } from '@app/events-dashboard/state/category/category.store';
import { SoccerEvent } from '@app/events-dashboard/state/event/event.model';
import { Market } from '@app/events-dashboard/state/market/market.model';
import { MarketStore } from '@app/events-dashboard/state/market/market.store';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    constructor(
        private _restService: RestService,
        private _categoryStore: CategoryStore,
        private _marketStore: MarketStore,
    ) {}

    getEventsByCategory() {
        let categories;
        this._restService.getEvents().subscribe(result => {
        if (result) {
            categories = this._createCategories(result);
            this._categoryStore.set(categories);
        }
        });
    }

    private _createCategories(events: SoccerEvent[]) {
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
                    this._setEventMarkets(event.previewMarkets);
                }
                });

                if (category.events.length > 0) {
                    category.events
                    .sort((a, b) => (new Date(a.startTime) as any) - (new Date(b.startTime) as any));

                    categories.push(category);
                }
            });
        });

        return categories;
    }

    private _setEventMarkets(eventMarkets: Market[]) {
        const markets = eventMarkets.filter(obj => {
            if (obj.periodType === 1 && obj.periodNumber == null) {

                return obj;
            }
        });

        this._marketStore.add(markets);
    }
}
