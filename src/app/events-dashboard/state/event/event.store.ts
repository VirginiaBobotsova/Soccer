import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { SoccerEvent } from '@app/events-dashboard/state/event/event.model';

export interface EventState extends EntityState<SoccerEvent> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'events'
})
export class EventStore extends EntityStore<EventState> {
  constructor() {
    super();
  }
}
