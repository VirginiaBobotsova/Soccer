import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Market } from '@app/events-dashboard/state/market/market.model';

export interface MarketState extends EntityState<Market> { }

@Injectable({
    providedIn: 'root'
})
@StoreConfig({
    name: 'markets'
})
export class MarketStore extends EntityStore<MarketState> {
    constructor() {
        super();
    }
}