import { Injectable } from '@angular/core';
import { Line, createLine } from '@app/events-dashboard/state/line/line.model';
@Injectable({
  providedIn: 'root'
})
export class LineService {

    public updatePrice(line: Line) {
        let priceStatus = '';

        if (line.isUpdated) {
            if (line.price > line.oldPrice) {
                priceStatus = 'up';
            } else if (line.price < line.oldPrice) {
                priceStatus = 'down';
            }
        }

        return priceStatus;
    }
}
