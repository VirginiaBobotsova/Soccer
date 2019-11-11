import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MarketState, MarketStore } from '@app/events-dashboard/state/market/market.store';

@Injectable({
  providedIn: 'root'
})
export class MarketQuery extends QueryEntity<MarketState> {
  constructor(protected store: MarketStore) {
    super(store);
  }
}
