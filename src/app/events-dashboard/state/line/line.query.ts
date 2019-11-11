import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { LineStore, LineState } from '@app/events-dashboard/state/line/line.store';

@Injectable({
    providedIn: 'root'
})
export class LineQuery extends QueryEntity<LineState> {

    constructor(protected store: LineStore) {
        super(store);
    }
}