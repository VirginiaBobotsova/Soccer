import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoccerEvent } from '@app/events-dashboard/state/event/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  categories$: Observable<Array<SoccerEvent>>;

  constructor() {}
}
