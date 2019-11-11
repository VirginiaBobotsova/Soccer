import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SoccerEvent } from '@app/events-dashboard/state/event/event.model';
import { EventQuery } from '@app/events-dashboard/state/event/event.query';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent implements OnInit {
  event$: Observable<SoccerEvent>;

  @Input()
  eventId: string;

  private subscription: Subscription;

  constructor(private eventQuery: EventQuery) {}

  ngOnInit() {
    this.event$ = this.eventQuery.selectEntity((entity: SoccerEvent) => entity.id === this.eventId);
  }
}
