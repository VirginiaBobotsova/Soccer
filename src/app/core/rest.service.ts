import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  events: Event[] = [];
  // tslint:disable-next-line:max-line-length
  private getEventsEndpoint =
    'https://luxbet88.com/api/sports/1/upcoming?_&viewTypes=0&viewTypes=1&viewTypes=2&viewTypes=100&viewTypes=101&viewTypes=102&maxLevel=1&timeSpan=24';

  constructor(private httpClient: HttpClient) {}

  getEvents(): Observable<any> {
    return this.httpClient.get(this.getEventsEndpoint).pipe(map((response: Response) => response));
  }
}
