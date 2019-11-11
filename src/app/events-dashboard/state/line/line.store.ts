import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Line } from '@app/events-dashboard/state/line/line.model';

export interface LineState extends EntityState<Line> { }

@Injectable({
    providedIn: 'root'
})
@StoreConfig({
    name: 'lines'
})
export class LineStore extends EntityStore<LineState> {
    constructor() {
        super();
    }
}