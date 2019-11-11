import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Line } from '@app/events-dashboard/state/line/line.model';
import { Observable } from 'rxjs';
import { LineQuery } from '@app/events-dashboard/state/line/line.query';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineComponent implements OnInit {
    line$: Observable<Line>;
    status = '';

    @Input()
    lineId: number;

    constructor(
        private lineQuery: LineQuery
    ) {}

    ngOnInit() {
        this.line$ = this.lineQuery.selectEntity((entity: Line)=> entity.id === this.lineId);
    }
}
