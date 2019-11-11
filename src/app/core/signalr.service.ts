import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  connection: signalR.HubConnection;
  channel0 = '1033/events/upcoming/sport/1/market/0/level/0'; // 1X2 market line updates
  channel1 = '1033/events/upcoming/sport/1/market/1/level/0'; // HDP market main line updates
  channel2 = '1033/events/upcoming/sport/1/market/2/level/0'; // O/U market main line updates

  constructor() {
    this.initHub();
  }

  public updateMarket0(): void {
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

  public updateMarket1() {
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

  public updateMarket2() {
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

  private initHub() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(environment.hubAddress)
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.connection.start().catch(err => console.error(err.toString()));

    // runs when server-side code calls it using the SendAsync method.
    // TODO replace "SubscribeToGroup" with the name of the JavaScript client method
    this.connection.on('SubscribeToGroup', (message: any) => {
      console.log('UpdateMarket' + message);
      // TODO Update store
    });
  }
}
