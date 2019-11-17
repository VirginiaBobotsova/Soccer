import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Line } from '@app/events-dashboard/state/line/line.model';
import { LineService } from '@app/events-dashboard/state/line/line.service';
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineComponent implements OnInit {
    priceStatus = 'unchanged';

    @Input()
    line: Line;

    constructor (
        private _lineService: LineService,
        private _cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.priceStatus = this._lineService.updateLine(this.line);
        this._cdr.detectChanges();
    }
}
