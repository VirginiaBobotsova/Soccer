import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Line, createLine } from '@app/events-dashboard/state/line/line.model';
import { LineService } from '@app/events-dashboard/state/line/line.service';
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineComponent implements OnInit {
    priceStatus = 'unchanged';

    @Input()
    line: Line;

    constructor (
        private _lineService: LineService,
    ) {}

    ngOnInit() {
        this.priceStatus = this._lineService.updatePrice(this.line);

        setTimeout(() => {
            this.line = createLine({
                id: this.line.id,
                lineId: this.line.lineId,
                marketId: this.line.marketId,
                outcomeType: this.line.outcomeType,
                price: this.line.price,
                oldPrice: this.line.oldPrice,
                points: this.line.points,
                isMain:this.line.isMain,
                isUpdated: false,
                isVisible: this.line.isVisible,
                isSuspended: this.line.isSuspended
            });

            this.priceStatus = 'unchanged';
        }, 3000);
    }
}
