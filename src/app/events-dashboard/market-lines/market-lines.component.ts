import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Line } from '@app/events-dashboard/state/line/line.model';
import { ReversePointsPipe } from '@app/shared/pipes/reverse-points.pipe';
import { Market } from '@app/events-dashboard/state/market/market.model';
import { MarketQuery } from '@app/events-dashboard/state/market/market.query';
import { Observable, Subscription } from 'rxjs';
import { MarketService } from '@app/events-dashboard/state/market/market.service';
import { SignalRService } from '@app/core/signalr.service';

@Component({
  selector: 'app-market-lines',
  templateUrl: './market-lines.component.html',
  styleUrls: ['./market-lines.component.scss']
})
export class MarketLinesComponent implements OnInit, OnDestroy {
  market$: Observable<Market>;
  newLines: Line[];
  subscription: Subscription;

  @Input()
  marketId: string;

  constructor(
    private _signalRService: SignalRService,
    private _reversePoints: ReversePointsPipe,
    private _marketQuery: MarketQuery,
    private _marketService: MarketService,
  ) {

  }

  ngOnInit() {
    this.market$ = this._marketQuery.selectEntity((entity: Market) => entity.id === this.marketId);
    if (this.market$) {
        this.subscription = this.market$.subscribe(market => {
            const filteredLines = this._marketService.filterMarketLines(market);

            if (filteredLines) {
                this.newLines =  this._reversePoints.transform(filteredLines, market.generalMarketType);
            }
        });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
  }
}
