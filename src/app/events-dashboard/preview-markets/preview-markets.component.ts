import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Line, createLine } from '@app/events-dashboard/state/line/line.model';
import { Market } from '@app/events-dashboard/state/market/market.model';
import { MarketStore } from '@app/events-dashboard/state/market/market.store';

@Component({
  selector: 'app-preview-markets',
  templateUrl: './preview-markets.component.html',
  styleUrls: ['./preview-markets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewMarketsComponent implements OnInit {
  eventMarkets: Market[];

  @Input()
  markets: Market[];

  constructor(private marketStore: MarketStore) {}

  ngOnInit() {
    this.eventMarkets = this.getEventMarkets();
    this.marketStore.add(this.eventMarkets);
  }

  generalMarketType(index: any, market: Market) {
    return market.generalMarketType;
  }

  private getEventMarkets() {
    return this.markets.filter(obj => {
      if (obj.periodType === 1 && obj.periodNumber == null) {
        this.marketStore.add(obj);
        return obj;
      }
    });
  }
}
