import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Market } from '@app/events-dashboard/state/market/market.model';
import { MarketQuery } from '@app/events-dashboard/state/market/market.query';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-preview-markets',
  templateUrl: './preview-markets.component.html',
  styleUrls: ['./preview-markets.component.scss']
})
export class PreviewMarketsComponent implements OnInit {
    eventMarkets: Observable<Market[]>;

    @Input()
    eventId: string;

    constructor(
        private _marketQuery: MarketQuery
    ) {}

    ngOnInit() {
        this.eventMarkets = this._marketQuery.selectAll({
            filterBy: entity => entity.eventId === this.eventId
        });
    }

    generalMarketType(index: any, market: Market) {
        return market.generalMarketType;
    }
}
