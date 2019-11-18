import { Component, OnInit, Input } from '@angular/core';
import { SoccerEvent } from '@app/events-dashboard/state/event/event.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
    event$: Observable<SoccerEvent>;

    @Input()
    event: Event;

    ngOnInit() {
    }
}
