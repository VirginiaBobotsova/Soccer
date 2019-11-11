import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Line } from '@app/events-dashboard/state/line/line.model';
import { LineStore } from '@app/events-dashboard/state/line/line.store';
import { ReversePointsPipe } from '@app/shared/pipes/reverse-points.pipe';
import { Market } from '@app/events-dashboard/state/market/market.model';
import { SignalRService } from '@app/core/signalr.service';
import { MarketQuery } from '@app/events-dashboard/state/market/market.query';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-market-lines',
  templateUrl: './market-lines.component.html',
  styleUrls: ['./market-lines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketLinesComponent implements OnInit, OnDestroy {
    market$: Observable<Market>;
    market: Market;
    newLines: Line[];
    subscription: Subscription;

    @Input()
    marketId: string;

    constructor(
      private lineStore: LineStore,
      private reversePoints: ReversePointsPipe,
      private signalRService: SignalRService,
      private marketQuery: MarketQuery
    ) {}

    ngOnInit() {
        this.market$ = this.marketQuery.selectEntity((entity: Market)=> entity.id === this.marketId);
        this.subscription = this.market$.subscribe(market => {
            this.market = market;
            this.updateMarket(this.market);
            const lines = this.getMarketLines(this.market);
            this.newLines = this.reversePoints.transform(lines, this.market.generalMarketType);
        })

        this.lineStore.add(this.newLines);
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    private getMarketLines(market: Market): Line[] {
        const marketLines: Line[] = [];
        market.lines.filter(line => {
            if (line.outcomeType === 1 && marketLines.filter(l => l.outcomeType === 1).length === 0) {
                marketLines.push(line);
            }
        });

        market.lines.filter(line => {
            if (line.outcomeType === 2 && marketLines.filter(l => l.outcomeType === 2).length === 0) {
                marketLines.push(line);
            }
        });

        market.lines.filter(line => {
            if (market.generalMarketType === 1 && line.outcomeType === 3) {
                marketLines.push(line);
            }
        });

        market.lines.filter(line => {
            if (market.generalMarketType === 3 &&
                line.outcomeType === 4 && marketLines.filter(l => l.outcomeType === 4).length === 0) {
                marketLines.push(line);
            }
        });

        market.lines.filter(line => {
            if (market.generalMarketType === 3 &&
                line.outcomeType === 5 && marketLines.filter(l => l.outcomeType === 5).length === 0) {
                marketLines.push(line);
            }
        });

        if (marketLines.length > 0) {
            return marketLines;
        }

        return null;
    }

    private updateMarket(market: Market) {
        const marketType = market.generalMarketType;
        switch(marketType) {
            case 0:
                this.signalRService.updateMarket0();
                break;
            case 1:
                this.signalRService.updateMarket1();
                break;
            case 2:
                this.signalRService.updateMarket2();
                break;
        }
    }
}
