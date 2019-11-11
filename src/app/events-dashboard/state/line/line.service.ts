import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Line } from '@app/events-dashboard/state/line/line.model';


@Injectable({
  providedIn: 'root'
})
export class LineService {
    lines$: Observable<Array<Line>>;

    constructor() { }


}