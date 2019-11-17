import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from '@env/environment';
import { Line, createLine } from '@app/events-dashboard/state/line/line.model';
import { Observable } from 'rxjs';
import { MarketStore } from '@app/events-dashboard/state/market/market.store';
import { MarketQuery } from '@app/events-dashboard/state/market/market.query';
import { Market } from '@app/events-dashboard/state/market/market.model';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
    connection: signalR.HubConnection;
    channel0 = '1033/events/upcoming/sport/1/market/0/level/0'; // 1X2 market line updates
    channel1 = '1033/events/upcoming/sport/1/market/1/level/0'; // HDP market main line updates
    channel2 = '1033/events/upcoming/sport/1/market/2/level/0'; // O/U market main line updates
    data$: Observable<any>;

    constructor(
        private _marketStore: MarketStore,
        private _marketQuery: MarketQuery
    ) {
        this.initHub();
    }

    public initHub() {
        this.connection = new signalR.HubConnectionBuilder()
          .withUrl(environment.hubAddress)
          .configureLogging(signalR.LogLevel.Information)
          .build();

        this.connection.start()
        .then(() => {
            this._updateMarket1();
            this._updateMarket2();
            this._updateMarket3();
            console.log('Now connected, connection ID=' + this.connection.state);
        })
        .catch(err => console.error(err.toString()));

        this.connection.on('onUpdate', (message: any) => {
            const data = message.data
            if(data) {
                let market: Market;
                const market$: Observable<Market> = this._marketQuery
                    .selectEntity((m: Market) => m.id === data.marketId);

                market$.subscribe(m => {
                   market = m;
                })

                if(market) {
                    let marketLines:Line[] = [];

                    if(market.lines.length > 0)  {
                        marketLines = market.lines.filter(l => l.lineId !== data.lineId);
                    }

                    const updatedLine = createLine({
                        id: data.id,
                        lineId: data.lineId,
                        marketId: data.marketId,
                        outcomeType: data.outcomeType,
                        price: data.price,
                        points: data.points,
                        isMain: true,
                        isUpdated: true,
                        isVisible: data.isVisible,
                        isSuspended: data.isSuspended
                     });

                    marketLines.push(updatedLine);

                    if(marketLines.length > 0) {
                        this._marketStore.update((e: Market) => e.id === market.id, {
                            lines: marketLines
                          });
                    }
                }
            }
        });
    }

    private _updateMarket1() {
        if (this.connection) {
        this.connection
            .invoke('SubscribeToGroup', this.channel0)
            .then(res => {
            console.log('Successfully subscribed', res.json());
            })
            .catch((error: any) => {
            console.log('Failed to subscribe', error);
            });
        }
    }

    private _updateMarket2() {
        if (this.connection) {
        this.connection
            .invoke('SubscribeToGroup', this.channel1)
            .then(res => {
            console.log('Successfully subscribed', res.json());
            })
            .catch((error: any) => {
            console.log('Failed to subscribe', error);
            });
        }
    }

    private _updateMarket3() {
        if (this.connection) {
        this.connection
            .invoke('SubscribeToGroup', this.channel2)
            .then(res => {
            console.log('Successfully subscribed', res.json());
            })
            .catch((error: any) => {
            console.log('Failed to subscribe', error);
            });
        }
    }
}
