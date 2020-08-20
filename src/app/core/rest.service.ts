import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class RestService {
    private _getEventsEndpoint = '';

    constructor(private _httpClient: HttpClient) {}

    getEvents(): Observable<any> {
        return this._httpClient.get(this._getEventsEndpoint)
            .pipe(map((response: Response) => response));
    }
}
