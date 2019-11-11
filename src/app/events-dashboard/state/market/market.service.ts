import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Market } from '@app/events-dashboard/state/market/market.model';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
    categories$: Observable<Array<Market>>;

    constructor() { }
}