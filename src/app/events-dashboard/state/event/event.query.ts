import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { EventState, EventStore } from '@app/events-dashboard/state/event/event.store';

@Injectable({
    providedIn: 'root'
})
export class EventQuery extends QueryEntity<EventState> {

    constructor(protected store: EventStore) {
        super(store);
    }
}