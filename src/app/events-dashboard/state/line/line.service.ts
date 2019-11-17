import { Injectable } from '@angular/core';
import { Line, createLine } from '@app/events-dashboard/state/line/line.model';
@Injectable({
  providedIn: 'root'
})
export class LineService {

    public updateLine(line: Line) {
        let priceStatus = '';

        if (line.isUpdated) {
            if (line.price > line.oldPrice) {
                priceStatus = 'up';
            } else if (line.price < line.oldPrice) {
                priceStatus = 'down';
            }
        }

        setTimeout(() => {
            line = createLine({
                id: line.id,
                lineId: line.lineId,
                marketId: line.marketId,
                outcomeType: line.outcomeType,
                price: line.price,
                oldPrice: line.oldPrice,
                points: line.points,
                isMain:line.isMain,
                isUpdated: false,
                isVisible: line.isVisible,
                isSuspended: line.isSuspended
            });

            priceStatus = 'unchanged';
            
        }, 3000);

        return priceStatus;
    }
}
