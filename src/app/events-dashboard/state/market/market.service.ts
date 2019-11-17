import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Market } from '@app/events-dashboard/state/market/market.model';
import { SignalRService } from '@app/core/signalr.service';
import { Line } from '@app/events-dashboard/state/line/line.model';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
    categories$: Observable<Array<Market>>;

    constructor() {}

    filterMarketLines(market: Market): Line[] {
    const marketLines: Line[] = [];
    const mainLines: Line[] = [];

    switch (market.generalMarketType){
        case 1:
            const homeLines1: Line[] = market.lines.filter(line => {
                if (line.outcomeType === 1 && line.isMain) {
                    return line;
                } else if (line.outcomeType === 1) {
                    return line;
                }
            });
            if (homeLines1.length > 0) {
                marketLines.push(homeLines1[0]);
            }

            const awayLines1: Line[] = market.lines.filter(line => {
                if (line.outcomeType === 2 && line.isMain) {
                    return line;
                } else if (line.outcomeType === 2) {
                    return line;
                }
            });
            if (awayLines1.length > 0) {
                marketLines.push(awayLines1[0]);
            }

            const draw: Line[] = market.lines.filter(line => {
                if (line.outcomeType === 3 && line.isMain) {
                    return line;
                } else if (line.outcomeType === 3) {
                    return line;
                }
            });
            if (draw.length > 0) {
                marketLines.push(draw[0]);
            }

            break;
        case 2:
            const homeLines2: Line[] = market.lines.filter(line => {
                if (line.outcomeType === 1 && line.isMain) {
                    return line;
                } else if (line.outcomeType === 1) {
                    return line;
                }
            });
            if (homeLines2.length > 0) {
                marketLines.push(homeLines2[0]);
            }

            const awayLines2: Line[] = market.lines.filter(line => {
                if (line.outcomeType === 2 && line.isMain) {
                    return line;
                } else if (line.outcomeType === 2) {
                    return line;
                }
            });
            if (awayLines2.length > 0) {
                marketLines.push(awayLines2[0]);
            }

            break;
        case 3:
            const homeLines3: Line[] = market.lines.filter(line => {
                if (line.outcomeType === 4 && line.isMain) {
                    return line;
                } else if (line.outcomeType === 4) {
                    return line;
                }
            });
            if (homeLines3.length > 0) {
                marketLines.push(homeLines3[0]);
            }

            const awayLines3: Line[] = market.lines.filter(line => {
                if (line.outcomeType === 5 && line.isMain) {
                    return line;
                } else if (line.outcomeType === 5) {
                    return line;
                }
            });
            if (awayLines3.length > 0) {
                marketLines.push(awayLines3[0]);
            }

        break;
    }

    if (marketLines.length > 0) {
      return marketLines;
    }

    return null;
  }
}
