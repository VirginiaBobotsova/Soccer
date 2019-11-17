import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SoccerEvent } from '@app/events-dashboard/state/event/event.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent implements OnInit {
    event$: Observable<SoccerEvent>;

    @Input()
    event: Event;

    ngOnInit() {
    }
}
